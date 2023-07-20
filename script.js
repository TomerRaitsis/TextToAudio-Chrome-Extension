// Get elements from the DOM
const textarea = document.getElementById('myTextArea');
const sumtextarea = document.getElementById('SummerizedTextArea');
const button = document.getElementById('myButton');
const audio = document.getElementById('myAudio');

/**
 * Event listener for the button click to summarize text and convert it to audio.
 */
button.addEventListener('click', function() {
    const textValue = textarea.value;

    if (!textValue) {
        console.log('No text selected.');
        return;
    }

    // Summarize the selected text using the summarizeText function
    summarizeText(textValue)
        .then((summarizedText) => {
            // Display the summarized text in the textarea
            sumtextarea.value = summarizedText.output[0].text;

            // Prepare options for text-to-speech API request
            const options = {
                method: 'GET',
                url: 'https://text-to-speech27.p.rapidapi.com/speech',
                params: {
                    text: summarizedText.output[0].text,
                    lang: 'en-us',
                },
                headers: {
                    // Replace '/*Add API key here*/' with the actual API key provided by the user
                    'X-RapidAPI-Key': /*Add API key here*/,
                    'X-RapidAPI-Host': 'text-to-speech27.p.rapidapi.com',
                },
                responseType: 'arraybuffer',
            };

            // Fetch the audio data from the text-to-speech API
            fetchRequest(options)
                .then((response) => {
                    console.log(response);

                    // Create a Blob from the response data and generate an audio URL
                    const blob = new Blob([response], { type: 'audio/mpeg' });
                    const audioUrl = URL.createObjectURL(blob);

                    // Set the audio source to the generated audio URL
                    audio.src = audioUrl;
                })
                .catch((error) => {
                    console.error(error);
                });
        })
        .catch((error) => {
            console.error(error);
        });
});

/**
 * Function to summarize the given text using the RapidAPI service.
 * @param {string} text - The input text to be summarized.
 * @returns {Promise<object>} A Promise that resolves to the summarized text response.
 */
function summarizeText(text) {
    const summarizationOptions = {
        method: 'POST',
        url: 'https://summarize-texts.p.rapidapi.com/pipeline',
        headers: {
            'content-type': 'application/json',
            // Replace '/*Add API key here*/' with the actual API key provided by the user
            'X-RapidAPI-Key': /*Add API key here*/,
            'X-RapidAPI-Host': 'summarize-texts.p.rapidapi.com',
        },
        body: JSON.stringify({
            input: text,
        }),
    };

    return fetch('https://summarize-texts.p.rapidapi.com/pipeline', summarizationOptions)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .then(function (data) {
            return data;
        })
        .catch(function (error) {
            console.error(error);
            return null;
        });
}

/**
 * Function to make a fetch request with the specified options.
 * @param {object} options - The fetch request options, including URL, headers, and parameters.
 * @returns {Promise<ArrayBuffer|null>} A Promise that resolves to the fetched response data (as ArrayBuffer) or null if an error occurs.
 */
function fetchRequest(options) {
    const url = new URL(options.url);
    url.search = new URLSearchParams(options.params).toString();

    return fetch(url, {
        headers: options.headers,
    })
        .then(function (response) {
            if (response.ok) {
                return response.arrayBuffer();
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .catch(function (error) {
            console.error(error);
            return null;
        });
}
