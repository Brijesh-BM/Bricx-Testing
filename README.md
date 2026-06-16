# BRICX.AI Premium Redesigned Website

A standalone, ultra-premium, responsive corporate real estate and wealth advisory web portal for **Bricx.ai**. Redesigned with institutional integrity, high-contrast readability, unified geometric typography (**Outfit & Inter**), and snappy micro-animations.

---

## 🛠️ Tech Stack
*   **Backend:** Python 3.x with Flask
*   **Frontend:** HTML5, Premium Vanilla CSS3 (custom variables, grid architectures), and interactive ES6 JavaScript

---

## 🚀 Setup & Execution Instructions

Follow these step-by-step commands to spin up the Bricx portal independently:

### 1. Open Folder in Terminal / VS Code
Open your terminal and navigate to the project directory:
```bash
cd "c:\Users\Brijesh M\Documents\Bricx-Redesign"
```
*(Or open the folder directly in VS Code).*

### 2. Establish Virtual Environment
Create a clean local Python virtual environment to store dependencies:
```bash
python -m venv venv
```

### 3. Activate the Virtual Environment
Activate the environment in your terminal shell:

*   **Windows (PowerShell):**
    ```powershell
    .\venv\Scripts\Activate.ps1
    ```
*   **Windows (Command Prompt):**
    ```cmd
    venv\Scripts\activate.bat
    ```
*   **Mac / Linux:**
    ```bash
    source venv/bin/activate
    ```

### 4. Install Dependencies
Install Flask using the local pip package installer:
```bash
pip install -r requirements.txt
```

### 5. Launch the Server
Start the Flask development server:
```bash
python app.py
```

The terminal will report that the Bricx portal is live:
```text
 * Running on http://127.0.0.1:5000
```

### 6. Browse the Site
Open your web browser and navigate to:
```text
http://127.0.0.1:5000
```

---

## 🏛️ Project Structure
*   `app.py`: Standard Flask server handling advisory, off-market investments, land acquisitions, contact, and editorial blog routes.
*   `static/style.css`: Master unified CSS stylesheet implementing color variables, spatial rhythms, and snappy interactions.
*   `templates/base.html`: Common layout base wrapping the responsive glassmorphic nav and olive footer.
*   `templates/home.html`: exact screenshot-matched homepage.
*   `templates/advisory.html`: occupier and tenant representation services.
*   `templates/investment_opportunities.html`: Compass-inspired private exclusive listing grids and secure investor NDA gate.
*   `templates/land_opportunities.html`: Strategic land packages lists.
*   `templates/contact_us.html`: responsive contact coordinates grids.
*   `templates/blog.html`: Carolwood-style drop-cap editorial layout.
