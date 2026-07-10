async function generateWord() {

    const wordElement = document.getElementById("word");
    const message = document.getElementById("message");

    wordElement.textContent = "Loading...";
    message.textContent = "";

    try {
        const response = await fetch("https://random-word-api.herokuapp.com/word");

        const data = await response.json();

        wordElement.textContent = data[0];

    } catch (error) {
        wordElement.textContent = "Error";
        message.textContent = "Failed to generate word";
    }
}


function copyWord() {

    const word = document.getElementById("word").textContent;

    navigator.clipboard.writeText(word)
        .then(() => {
            document.getElementById("message").textContent = "Copied!";
        })
        .catch(() => {
            document.getElementById("message").textContent = "Copy failed!";
        });

}
