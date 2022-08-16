// No 1
let changeWord = (selectedText, changedText, text) => {
    sentance = text.replace(selectedText, changedText)
    return sentance
};

let kalimat1 = "Audini sangat mencintai kamu selamanya"
let kalimat2 = "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";
// console.log(changeWord('mencintai', 'membenci', kalimat1));
// console.log(changeWord('bromo', 'semeru', kalimat2));