document.addEventListener("keydown",function(event){
    event.preventDefault();
    var key;
    if (event.key === "/") key = "slash";
    else if (event.key === " ") key = "Space";
    else if (event.key === "NumLock") key = "Numlock";
    else if (event.key === "MetaLeft") key = "Meta";
    else if (event.key === "MetaRight") key = "Meta";
    else if (event.key === ".") key = "punt";
    else if (event.key === ",") key = "comma";
    else if (event.key === ";") key = "semicolon";
    else if (event.key === "'") key = "quote";
    else if (event.key === "\\") key = "backslash";
    else if (event.key === "]") key = "bracketright";
    else if (event.key === "[") key = "bracketleft";
    else if (event.key === "=") key = "equal";
    else if (event.key === "-") key = "minus";
    else if (event.key === "`") key = "backquote";
    else if (event.key === "?") key = "question";
    else if (event.key === ">") key = "flexright";
    else if (event.key === "<") key = "flexleft";
    else if (event.key === "\"") key = "doublequote";
    else if (event.key === ":") key = "colon";
    else if (event.key === "|") key = "stick";
    else if (event.key === "}") key = "CurlyBracketR";
    else if (event.key === "{") key = "CurlyBracketL";
    else if (event.key === "~") key = "tilde";
    else if (event.key === "_") key = "Underscore";
    else if (event.key === "+") key = "plus";
    else if (event.key === "!") key = "exclamation";
    else if (event.key === "@") key = "at";
    else if (event.key === "#") key = "hashtag";
    else if (event.key === "$") key = "dollarsign";
    else if (event.key === "%") key = "percent";
    else if (event.key === "^") key = "circumflex";
    else if (event.key === "&") key = "and";
    else if (event.key === "*") key = "asterisk";
    else if (event.key === "(") key = "roundbracketleft";
    else if (event.key === ")") key = "roundbracketright";
    else if (event.key === "0") key = "zero";
    else if (event.key === "1") key = "one";
    else if (event.key === "2") key = "two";
    else if (event.key === "3") key = "three";
    else if (event.key === "4") key = "four";
    else if (event.key === "5") key = "five";
    else if (event.key === "6") key = "six";
    else if (event.key === "7") key = "seven";
    else if (event.key === "8") key = "eight";
    else if (event.key === "9") key = "nine";
    else key = event.key;
    //console.log(key)
    var pressed = document.querySelector(`.${key}`);
    console.log(pressed)
    pressed.classList.remove('active');
    pressed.classList.add('press');
    //console.log(pressed)
    if (key === "CapsLock") {						//for Firefox
        pressed.classList.remove('press');
        pressed.classList.add('active');
    }
    if (key === "quote") {							//for Dutch layouts
        pressed.classList.remove('press');
        pressed.classList.add('active');
    }
    if (key === "doublequote") {					//for Dutch layouts
        pressed.classList.remove('press');
        pressed.classList.add('active');
    }
    if (key === "backquote") {						//for Dutch layouts
        pressed.classList.remove('press');
        pressed.classList.add('active');
    }
});

document.addEventListener('keyup', function(event) {
    event.preventDefault();
    var key;
    if (event.key === "/") key = "slash";
    else if (event.key === " ") key = "Space";
    else if (event.key === "NumLock") key = "Numlock";
    else if (event.key === "Meta") key = "Meta";
    else if (event.key === ".") key = "punt";
    else if (event.key === ",") key = "comma";
    else if (event.key === ";") key = "semicolon";
    else if (event.key === "'") key = "quote";
    else if (event.key === "\\") key = "backslash";
    else if (event.key === "]") key = "bracketright";
    else if (event.key === "[") key = "bracketleft";
    else if (event.key === "=") key = "equal";
    else if (event.key === "-") key = "minus";
    else if (event.key === "`") key = "backquote";
    else if (event.key === "?") key = "question";
    else if (event.key === ">") key = "flexright";
    else if (event.key === "<") key = "flexleft";
    else if (event.key === "\"") key = "doublequote";
    else if (event.key === ":") key = "colon";
    else if (event.key === "|") key = "stick";
    else if (event.key === "}") key = "CurlyBracketR";
    else if (event.key === "{") key = "CurlyBracketL";
    else if (event.key === "~") key = "tilde";
    else if (event.key === "_") key = "Underscore";
    else if (event.key === "+") key = "plus";
    else if (event.key === "!") key = "exclamation";
    else if (event.key === "@") key = "at";
    else if (event.key === "#") key = "hashtag";
    else if (event.key === "$") key = "dollarsign";
    else if (event.key === "%") key = "percent";
    else if (event.key === "^") key = "circumflex";
    else if (event.key === "&") key = "and";
    else if (event.key === "*") key = "asterisk";
    else if (event.key === "(") key = "roundbracketleft";
    else if (event.key === ")") key = "roundbracketright";
    else if (event.key === "0") key = "zero";
    else if (event.key === "1") key = "one";
    else if (event.key === "2") key = "two";
    else if (event.key === "3") key = "three";
    else if (event.key === "4") key = "four";
    else if (event.key === "5") key = "five";
    else if (event.key === "6") key = "six";
    else if (event.key === "7") key = "seven";
    else if (event.key === "8") key = "eight";
    else if (event.key === "9") key = "nine";
    else key = event.key;
    var pressed = document.querySelector(`.${key}`);
    pressed.classList.remove('press');
    pressed.classList.add('active');
});

var OSName
if (navigator.userAgent.indexOf("Win") !=-1) {
    OSName="Windows";
}
else if (navigator.userAgent.indexOf("Mac") !=-1) {
    OSName="MacOS";
}
else if (navigator.userAgent.indexOf("X11") !=-1) {
    OSName="UNIX";
}
else if (navigator.userAgent.indexOf("Linux") !=-1) {
    OSName="Linux";
}

var startkey="notsure";
if (OSName==="Windows") startkey="windows";
if (OSName==="MacOS") startkey="command";
if (OSName==="UNIX") startkey="command";
var altkey="notsure";
if (OSName==="Windows") altkey="alt";
if (OSName==="MacOS") altkey="option";
if (OSName==="UNIX") altkey="option";
var enterkey="notsure";
if (OSName==="Windows") enterkey="enter"
if (OSName==="MacOS") enterkey="return";
if (OSName==="UNIX") enterkey="return";
var backkey="notsure";
if (OSName==="Windows") backkey="backspace"
if (OSName==="MacOS") backkey="delete";
if (OSName==="UNIX") backkey="delete";

var resetActive = document.getElementsByClassName('active');
var resetPressed = document.getElementsByClassName('press');

function reset(){ 
while(resetActive.length > 0 ){
    resetActive[0].classList.remove('active');
}
while(resetPressed.length > 0 ){
    resetPressed[0].classList.remove('press');
}
}



