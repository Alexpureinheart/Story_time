const timeSetting = ["Once upon a time", "Back when tigers smoked pipes", "Back in the old days", "A long time ago",
                    "A long time ago in a galaxy far far away", "In the beginning",
    "Long long time ago, I can still remember", "Long ago", "In times passed", "One snowy Christmas eve"]

const settings = ["deep down in Louisiana close to New Orleans", "in the house of the rising sun", "in a tumbledown cottage",
    "in a house by the sea", "in a cave deep in the woods", "on the big rock candy mountain", "at the bottom of the sea",
"in the heart of the Empire", "in the North Pole"]
                    
const characters = ["there were three bears", "there were seven samurai", "there were seven dwarves", "there was a whale",
    "there was a pirate", "there was a queen", "there was a king", "there was a princess", "there was a prince",
    "there was a wizard", "there was a lion", "there was an old man", "there was an old woman", "there was a man",
    "there was a woman", "there was a person", "there was a penguin"]

function mixed_message() {
    let time = timeSetting[Math.floor(Math.random() * timeSetting.length)];
    let setting = settings[Math.floor(Math.random() * settings.length)];
    let character = characters[Math.floor(Math.random() * characters.length)];

    return `${time}, ${setting}, ${character} ...`;
}

console.log(mixed_message());