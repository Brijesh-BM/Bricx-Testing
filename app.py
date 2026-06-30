# pyrefly: ignore [missing-import]
import os
import json
import logging
from filelock import FileLock
from flask import Flask, render_template, request, jsonify, redirect

# Configure standard logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)

# Configure database paths with environment variables
LEADS_FILE = os.environ.get("LEADS_FILE_PATH", os.path.join(os.path.dirname(__file__), "leads.json"))
SUBSCRIBERS_FILE = os.environ.get("SUBSCRIBERS_FILE_PATH", os.path.join(os.path.dirname(__file__), "subscribers.json"))
NDA_FILE = os.environ.get("NDA_FILE_PATH", os.path.join(os.path.dirname(__file__), "nda_signatures.json"))
BLOGS_FILE = os.environ.get("BLOGS_FILE_PATH", os.path.join(os.path.dirname(__file__), "blogs.json"))
CONTACT_LEADS_FILE = os.environ.get("CONTACT_LEADS_FILE_PATH", os.path.join(os.path.dirname(__file__), "contact_leads.json"))

# Define lock files for concurrent database access
LEADS_LOCK = LEADS_FILE + ".lock"
SUBSCRIBERS_LOCK = SUBSCRIBERS_FILE + ".lock"
NDA_LOCK = NDA_FILE + ".lock"
CONTACT_LEADS_LOCK = CONTACT_LEADS_FILE + ".lock"

def load_json_db(file_path):
    if os.path.exists(file_path):
        try:
            with open(file_path, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            logger.error(f"Failed to load or parse JSON from {file_path}: {e}")
            return []
    return []

def save_json_db(file_path, data):
    try:
        with open(file_path, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=4, ensure_ascii=False)
    except Exception as e:
        logger.error(f"Failed to persist data to {file_path}: {e}")

_blogs_cache = None
_blogs_mtime = 0

def load_blogs():
    global _blogs_cache, _blogs_mtime
    try:
        current_mtime = os.path.getmtime(BLOGS_FILE)
    except OSError:
        current_mtime = 0

    if _blogs_cache is None or current_mtime != _blogs_mtime:
        blogs = load_json_db(BLOGS_FILE)
        for post in blogs:
            if not post.get("date_iso"):
                raw_date = post.get("date")
                if raw_date:
                    try:
                        from datetime import datetime
                        post["date_iso"] = datetime.strptime(raw_date, "%m/%d/%y").strftime("%Y-%m-%d")
                    except Exception:
                        post["date_iso"] = "2026-06-01"
                else:
                    post["date_iso"] = "2026-06-01"
        _blogs_cache = blogs
        _blogs_mtime = current_mtime
    return _blogs_cache

# Validate request origin and referrer
def security_check():
    origin = request.headers.get("Origin")
    referer = request.headers.get("Referer")
    host = request.headers.get("Host")
    
    if origin and host not in origin and "localhost" not in origin and "127.0.0.1" not in origin:
        return False
    if referer and host not in referer and "localhost" not in referer and "127.0.0.1" not in referer:
        return False
    return True

@app.route("/")
def home():
    blogs = load_blogs()
    latest_blogs = blogs[:3] if blogs else []
    return render_template("home.html", latest_blogs=latest_blogs)

@app.route("/advisory")
def advisory():
    return render_template("advisory.html")

@app.route("/investment-opportunities")
def investment_opportunities():
    return render_template("investment_opportunities.html")

@app.route("/land-opportunities")
def land_opportunities():
    return render_template("land_opportunities.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/contact-us")
def contact_us():
    return render_template("contact_us.html")

@app.route("/terms")
def terms():
    return render_template("terms.html")

@app.route("/privacy")
def privacy():
    return render_template("privacy.html")

@app.route("/blog/at-dollar40-million-danish-design-realigns-the-soft-hills-of-los-angeles")
def legacy_blog():
    return redirect("/blog", code=301)

@app.route("/blog")
def blog_index():
    blogs = load_blogs()
    return render_template("blog_index.html", blogs=blogs)

@app.route("/blog/<slug>")
def blog_detail(slug):
    blogs = load_blogs()
    post = next((b for b in blogs if b["slug"] == slug), None)
    if not post:
        return render_template("404.html"), 404
    
    internal_slugs = post.get("internal_links", [])
    matched = [b for b in blogs if b["slug"] in internal_slugs] if internal_slugs else []
    if len(matched) < 2:
        fallback = [b for b in blogs if b["slug"] != slug and b not in matched]
        related = (matched + fallback)[:2]
    else:
        related = matched[:2]
    return render_template("blog_detail.html", post=post, related=related)

@app.route("/api/lead", methods=["POST"])
def api_lead():
    if not security_check():
        return jsonify({"success": False, "message": "Unauthorized request origin."}), 403
    try:
        data = request.get_json() or {}
        name = data.get("name")
        email = data.get("email")
        phone = data.get("phone")
        message = data.get("message", "New B2B Lead Brief")

        if not name or not email:
            return jsonify({"success": False, "message": "Full Name and Business Email are required."}), 400

        lead = {
            "name": name,
            "email": email,
            "phone": phone,
            "message": message
        }
        with FileLock(LEADS_LOCK):
            leads = load_json_db(LEADS_FILE)
            leads.append(lead)
            save_json_db(LEADS_FILE, leads)
        logger.info(f"\n[BRICX.AI BACKEND] LEAD CAPTURED:\n  Name: {name}\n  Email: {email}\n  Phone: {phone}\n  Message: {message}\n")
        return jsonify({"success": True, "message": "Lead brief submitted successfully!"})
    except Exception as e:
        return jsonify({"success": False, "message": str(e)}), 500

@app.route("/api/subscribe", methods=["POST"])
def api_subscribe():
    if not security_check():
        return jsonify({"success": False, "message": "Unauthorized request origin."}), 403
    try:
        data = request.get_json() or {}
        email = data.get("email")

        if not email:
            return jsonify({"success": False, "message": "Email is required."}), 400

        with FileLock(SUBSCRIBERS_LOCK):
            subscribers = load_json_db(SUBSCRIBERS_FILE)
            subscribers.append(email)
            save_json_db(SUBSCRIBERS_FILE, subscribers)
        logger.info(f"\n[BRICX.AI BACKEND] NEWSLETTER SUBSCRIPTION:\n  Email: {email}\n")
        return jsonify({"success": True, "message": "Successfully subscribed to newsletter!"})
    except Exception as e:
        return jsonify({"success": False, "message": str(e)}), 500

@app.route("/api/nda", methods=["POST"])
def api_nda():
    if not security_check():
        return jsonify({"success": False, "message": "Unauthorized request origin."}), 403
    try:
        data = request.get_json() or {}
        fullname = data.get("fullname")
        email = data.get("email")
        company = data.get("company")

        if not fullname or not email or not company:
            return jsonify({"success": False, "message": "Full Name, Email, and Company are required."}), 400

        sig = {
            "fullname": fullname,
            "email": email,
            "company": company
        }
        with FileLock(NDA_LOCK):
            nda = load_json_db(NDA_FILE)
            nda.append(sig)
            save_json_db(NDA_FILE, nda)
        logger.info(f"\n[BRICX.AI BACKEND] NDA SIGNED:\n  Name: {fullname}\n  Email: {email}\n  Company: {company}\n")
        return jsonify({"success": True, "message": "NDA signed successfully! Access granted."})
    except Exception as e:
        return jsonify({"success": False, "message": str(e)}), 500

@app.route("/api/contact-lead", methods=["POST"])
def api_contact_lead():
    if not security_check():
        return jsonify({"success": False, "message": "Unauthorized request origin."}), 403
    try:
        data = request.get_json() or {}
        name = data.get("name")
        mobile = data.get("mobile")
        email = data.get("email")
        message = data.get("message")

        if not name or not email:
            return jsonify({"success": False, "message": "Full Name and Business Email are required."}), 400

        import re
        if not re.match(r"[^@]+@[^@]+\.[^@]+", email):
            return jsonify({"success": False, "message": "Invalid email address format."}), 400

        from datetime import datetime
        timestamp = datetime.utcnow().isoformat() + "Z"

        new_lead = {
            "name": name,
            "mobile": mobile,
            "email": email,
            "submitted_at": timestamp
        }
        prop = data.get("property")
        if prop:
            new_lead["property"] = prop
        if message:
            new_lead["message"] = message

        with FileLock(CONTACT_LEADS_LOCK):
            contact_leads = load_json_db(CONTACT_LEADS_FILE)
            contact_leads.append(new_lead)
            save_json_db(CONTACT_LEADS_FILE, contact_leads)
        logger.info(f"\n[BRICX.AI BACKEND] FLOATING LEAD CAPTURED:\n  Name: {name}\n  Mobile: {mobile}\n  Email: {email}\n  Property: {prop}\n  Message: {message}\n  Submitted At: {timestamp}\n")
        return jsonify({"success": True, "message": "Lead brief submitted successfully!"})
    except Exception as e:
        return jsonify({"success": False, "message": str(e)}), 500


@app.route("/robots.txt")
def robots_txt():
    content = "User-agent: *\nAllow: /blog/\nSitemap: https://bricx.ai/sitemap.xml\n"
    return content, 200, {'Content-Type': 'text/plain; charset=utf-8'}

@app.route("/sitemap.xml")
def sitemap():
    blogs = load_blogs()
    static_urls = [
        "https://bricx.ai/",
        "https://bricx.ai/about",
        "https://bricx.ai/advisory",
        "https://bricx.ai/investment-opportunities",
        "https://bricx.ai/land-opportunities",
        "https://bricx.ai/contact-us",
        "https://bricx.ai/blog"
    ]
    
    xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    # Static pages
    for url in static_urls:
        xml += f'  <url>\n    <loc>{url}</loc>\n    <lastmod>2026-06-01</lastmod>\n  </url>\n'
    # Dynamic blog pages
    for post in blogs:
        slug = post['slug']
        date_iso = post.get("date_iso", "2026-06-01")
        xml += f'  <url>\n    <loc>https://bricx.ai/blog/{slug}</loc>\n    <lastmod>{date_iso}</lastmod>\n  </url>\n'
    xml += '</urlset>'
    return xml, 200, {'Content-Type': 'application/xml; charset=utf-8'}

# Custom error page handlers
@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html"), 404

@app.errorhandler(500)
def server_error(e):
    return render_template("500.html"), 500

if __name__ == "__main__":
    flask_debug = os.environ.get("FLASK_DEBUG", "False").lower() in ("true", "1")
    app.run(debug=flask_debug, port=5001)