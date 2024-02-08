import cv from "opencv4nodejs";
import tesseract from "tesseract.js";
import easyocr from "easyocr";

const image = await cv.imreadAsync("marksheet.jpg");

// Apply adaptive preprocessing techniques based on image analysis:
const gray = await cv.cvtColorAsync(image, cv.COLOR_BGR2GRAY);
const thresh = await cv.thresholdAsync(gray, 127, 255, cv.THRESH_BINARY); // Adjust threshold dynamically

// Further optimization using adaptive thresholding or noise reduction if needed
