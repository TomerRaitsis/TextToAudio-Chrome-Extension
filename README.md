# TextToAudio Chrome Extension

The TextToAudio Chrome Extension allows users to summarize selected text and convert it to audio. It utilizes APIs for text summarization and text-to-speech conversion to provide a convenient way to listen to summarized content from web pages.

## Features

- Summarize Selected Text: The extension can summarize the selected text on a web page using the RapidAPI service for text summarization.

- Text-to-Speech Conversion: Once the text is summarized, the extension converts it into an audio file using the RapidAPI service for text-to-speech conversion. Users can listen to the summarized content with the audio player provided in the extension popup.

## Installation

To use the TextToAudio Chrome Extension, follow these steps:

1. Clone or download this repository to your local machine.

2. Add your API key from RapidAPI to the code (JS file, line 25 and line 55)

3. Open Google Chrome and go to `chrome://extensions/` in the address bar.

4. Enable the "Developer mode" in the top right corner of the extensions page.

5. Click on "Load unpacked" and select the folder where you cloned/downloaded the extension.

6. The TextToAudio extension will be added to your Chrome browser.

## How to Use

1. Navigate to any web page with text content.

2. Select the text you want to summarize.

3. Click on the TextToAudio extension icon in the Chrome toolbar.

4. In the popup window, you will see a textarea where the selected text will be displayed.

5. Click on the "Let's hear it" button to summarize the selected text and convert it to audio.

6. The summarized text will appear below the button, and an audio player will be displayed with the generated audio.

7. You can listen to the summarized content by clicking on the audio player controls.

## Permissions

The TextToAudio extension requires the "activeTab" permission to access the content of the current tab for text summarization.

## APIs Used

The extension uses the following RapidAPI services:

- Summarize Texts API (summarize-texts.p.rapidapi.com): For text summarization.
- Text-to-Speech API (text-to-speech27.p.rapidapi.com): For converting the summarized text to audio.

---

Thank you for using the TextToAudio Chrome Extension! I hope you find it helpful and enjoy listening to summarized content from your favorite web pages. If you have any inquiries or need assistance, please don't hesitate to contact me. Happy summarizing and listening!
