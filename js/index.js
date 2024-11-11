var lastIndex = -1;

function todayQuote() {
    var quotes = [
        "Be yourself; everyone else is already taken.",
        "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        "You only live once, but if you do it right, once is enough.",
        "If you tell the truth, you don't have to remember anything."
    ];

    var authors = ["Oscar Wilde", "Dr. Seuss", "Mae West", "Mark Twain"];

    var rand;
    do {
        rand = Math.floor(Math.random() * quotes.length);
    } while (rand === lastIndex);

    lastIndex = rand;

    var demoElement = document.getElementById("demo");
    demoElement.innerHTML = `<q>${quotes[rand]}</q><span class="author">- ${authors[rand]}</span>`;

    demoElement.classList.remove("fade-in"); 
    void demoElement.offsetWidth;
    demoElement.classList.add("fade-in"); 
}
