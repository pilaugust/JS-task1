// TASK 1

function swapText(text){
    let centerIndex = (text.length / 2);

    if(centerIndex & 10 >= 5){
        centerIndex = centerIndex.toFixed(0) - 1;
    } else{
        centerIndex = centerIndex.toFixed(0);
    }
    
    let firstPart = text.slice(0, centerIndex);
    let secondPart = text.slice(centerIndex);

    return secondPart + firstPart
}

const text = "This is a trial text for the 1 task"
let changedText;

changedText = swapText(text);
console.log(changedText);

// ---------------------------------------------------------------------------------------------------
// TASK 2

let textLoU = "This is a trial text for the 1 task";
let number = 18;

if (number % 2){
    console.log(textLoU.toLowerCase());
} else{
    console.log(textLoU.toUpperCase());
}

// ---------------------------------------------------------------------------------------------------
// TASK 3

let numberDay = 5;
switch (numberDay){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// ---------------------------------------------------------------------------------------------------
// TASK 4
let trialText = "This is a trial text for the 1 task";
let lastIndex = trialText.length - 1;
let lastCharacter = trialText[lastIndex];
let firstCharacter = trialText[0];

if (firstCharacter.toLowerCase() === lastCharacter.toLowerCase()){
    console.log("True, it is the same")
} else{
    console.log("False, it is not the same")
}




// ---------------------------------------------------------------------------------------------------
// TASK 5




// ---------------------------------------------------------------------------------------------------
// TASK 6



// ---------------------------------------------------------------------------------------------------
// TASK 7

let text1 = "Is the text the same?";
let text2 = "I don't think it's the same";

if (text1.toLowerCase() === text2.toLowerCase()){
    console.log("The text is identical!");
} else {
    console.log("The text is not the same");
}

// ---------------------------------------------------------------------------------------------------
// TASK 8




// ---------------------------------------------------------------------------------------------------
// TASK 9

let age = 39;

if(age <= 13){
    console.log("Barn");
} else if(age >= 13 && age <= 19){
    console.log("Tenåring");
} else if(age >= 20 && age <= 64){
    console.log("Voksen");
} else if(age >= 65){
    console.log("Pensjonist");
}




// ---------------------------------------------------------------------------------------------------
// TASK 10

function isVowel(char){
    const lowerChar = char.toLowerCase();
    return ['a', 'e', 'i', 'o', 'u', 'y'].includes(lowerChar);
}

const char = "K";
if(isVowel(char)){
    console.log(`${char} is a vowel!`)
} else{
    console.log(`${char} is a consonant.`)
}




// ---------------------------------------------------------------------------------------------------
// TASK 11

function getSeason(month){
    month = month.toLowerCase();
    switch(month){
        case "december":
        case "january":
        case "february":
            return "Winter";
        case "march":
        case "april":
        case "may":
            return "Vår";
        case "june":
        case "july":
        case "august":
            return "Sommer";
        case "september":
        case "october":
        case "november":
            return "Høst";
        default:
            return "Ugyldig måned";
    }
}

console.log(getSeason("May"));


// ---------------------------------------------------------------------------------------------------
// TASK 12

