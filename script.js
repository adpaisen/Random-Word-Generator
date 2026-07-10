const words = [
    "Adventure",
    "Galaxy",
    "Phoenix",
    "Shadow",
    "Thunder",
    "Ocean",
    "Velocity",
    "Mystery",
    "Cyber",
    "Infinity",
    "Quantum",
    "Storm",
    "Legend",
    "Future",
    "Dream"
];


function generateWord() {

    const randomIndex = Math.floor(Math.random() * words.length);

    document.getElementById("word").textContent = words[randomIndex];

    document.getElementById("message").textContent = "";
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
