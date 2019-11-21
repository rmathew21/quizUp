let card = $("#quiz-area");
let countStartNumber = 30;

// Question Set
let questions = [{
    question: "What was the first full length CGI movie?",
    answers: ["A Bug's Life", "Monsters Inc.", "Toy Story", "The Lion King"],
    correctAnswer: "Toy Store",
    image: "assets/images/toystory.gif"
}, {
    question: "Which of these is NOT a name of one of the Spice Girls?",
    answers: ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"],
    correctAnswer: "Fred Spice",
    image: "assets/images/spicegirls.gif"
}, {
    question: "Which NBA team won the most titles in the 90s?",
    answers: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
    correctAnswer: "Chicago Bulls",
    image: "assets/images/bulls.gif"
}, {
    question: "Which group released the hit song, 'Smells Like Teen Spirit'?",
    answers: ["Nirvana", "Backstreet Boys.", "The Offspring", "No Doubt"],
    correctAnswer: "Nirvana",
    image: "assets/images/nirvanabark.gif"
}, {
    question: "Which popular Disney movie featured the song, \"Circle of Life\"?",
    answers: ["Aladdin", "Hercules", "Mulan", "The Lion King"],
    correctAnswer: "The Lion King",
    image: "assets/images/lionking.gif"
}, {
    question: "Finish this line from the Fresh Prince of Bel-Air theme song: \"I whistled for a cab and when it came near, the license plate said...\"",
    answers: ["Dice", "Mirror", "Fresh", "Cab"],
    correctAnswer: "Fresh",
    image: "assets/images/fresh.gif"
}, {
    question: "What was Doug's best friend's name?",
    answers: ["Skeeter", "Mark", "Zach", "Cody"],
    correctAnswer: "Skeeter",
    image: "assets/images/skeeter.gif"
}, {
    question: "What was the name of the principal at Bayside High in Saved By The Bell?",
    answers: ["Mr.Zhou", "Mr.Driggers", "Mr.Belding", "Mr.Page"],
    correctAnswer: "Mr.Belding",
    image: "assets/images/belding.gif"
}];

// Variable to hold our setInterval
let timer;

let game = {
    questions: questions,
    currentQuestion: 0,
    counter: countStartNumber,
    correct: 0,
    incorrect: 0,

    countdown: function () {
        this.counter--;
        $("#counter-number").text(this.counter);
        if (this.counter === 0) {
            console.log("TIME UP");
            this.timeUp();
        }
    },

    loadQuestion: function () {
        timer = setInterval(this.countdown.bind(this), 1000);
        card.html("<h2>" + questions[this.currentQuestion].question + "</h2>");

        for (let i = 0; i < questions[this.currentQuestion].answers.length; i++) {
            card.append("<button class='answer-button' id='button' data-name'" + questions[this.currentQuestion].answers[i]
                + "'>" + questions[this.currentQuestion].answers[i] + "</button>");
        }
    },

    nextQuestion: function () {
        this.counter = window.countStartNumber;
        $("#counter-number").text(this.counter);
        this.currentQuestion++;
        this.loadQuestion.bind(this)();
    },

    timeUp: function () {
        clearInterval(window.timer);
        $("#counter-number").text(this.counter);

        card.html("<h2>Out of Time!</h2>");
        card.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer);
        card.append("<img src='" + questions[this.currentQuestion].image + "' />");

        if (this.currentQuestion === questions.length - 1) {
            setTimeout(this.results, 3 * 1000);
        }
        else {
            setTimeout(this.nextQuestion, 3 * 1000);
        }
    },

    results: function () {
        clearInterval(window.timer);

        card.html("<h2>All done, heres how you did!</h2>");

        $("#counter-number").text(this.counter);

        card.append
    }
}