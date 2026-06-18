from PIL import Image

def crop_lower_right():
    img = Image.open('static/frame3.png')
    # Crop the area containing the red buildings and trees (x from 800 to 1280, y from 400 to 720)
    cropped = img.crop((800, 400, 1280, 720))
    cropped.save('static/crop_right.png')
    print("Lower-right quadrant cropped and saved to static/crop_right.png")

if __name__ == '__main__':
    crop_lower_right()
