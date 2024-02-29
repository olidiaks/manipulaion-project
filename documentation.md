## Project Documentation

**Title:** Interactive Audio-Visual Installation

**Description:**
This project creates an interactive audio-visual experience that combines visual elements with sound analysis. The user can interact with the installation by speaking into the microphone, which affects the visuals on the screen.

**Variables:**

* **Colors:**
    * `backgroundColor`: Background color of the canvas (black)
    * `textColor`: Color of the text (white)
    * `accentColor`: Not currently used
* **Media:**
    * `mic`: Audio input object
    * `fft`: Fast Fourier Transform object for audio analysis
    * `video`: Video capture object
    * `moneyImg`: Image of a money bill
    * `earthImg`: Image of the Earth
* **Positioning:**
    * `textX`: Horizontal position of the text
    * `textY`: Vertical position of the text
* **Scaling:**
    * `moneyScale`: Scaling factor for the money image
    * `earthScale`: Scaling factor for the Earth image
* **Animation:**
    * `moneySpin`: Rotation angle for the money image
    * `isPlaying`: Boolean flag indicating if the video is playing
    * `isShaking`: Boolean flag indicating if the money image is shaking

**Functions:**

* **preload():** Loads the money and Earth images into memory.
* **setup():**
    * Creates a full-screen canvas.
    * Sets the color scheme.
    * Initializes audio and video input.
    * Positions the text and sets its size.
    * Defines scaling factors for the images.
* **draw():**
    * Clears the screen with the background color.
    * Optionally displays the webcam feed with inverted colors and flipped horizontally.
    * Manipulates the money image based on audio level:
        * Rotates the image.
        * Scales the image.
        * Optionally shakes the image based on audio level.
    * Manipulates the Earth image by scaling it.
    * Displays the text "Who Wants to Be a Trillionaire?" with font size adjusted based on audio level.
* **keyPressed():** Toggles the video playback state when the space bar is pressed.


**User Interaction:**

* Users can speak into the microphone to influence the visuals, specifically:
    * Higher sound levels make the text font size larger and the money image rotate and shake.

**Notes:**

* The `accentColor` variable is currently not used in the code.
* The webcam feed manipulation is optional and can be disabled by commenting out the relevant lines in the `draw()` function.

