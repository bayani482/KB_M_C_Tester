//keyboard & mouse
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
//Mouse
document.addEventListener('mousedown', function (e) {
var buttons = e.buttons;
if ((buttons & 1) === 1) {
    document.getElementById('mouse-1').classList.add('press');
    document.getElementById('mouse-1').classList.add('active');
}
if ((buttons & 2) === 2) {
    document.getElementById('mouse-2').classList.add('press');
    document.getElementById('mouse-2').classList.add('active');
}
if ((buttons & 4) === 4) {
    document.getElementById('mouse-3').classList.add('press');
    document.getElementById('mouse-3').classList.add('active');
}
if ((buttons & 8) === 8) {
    document.getElementById('mouse-4').classList.add('press');
    document.getElementById('mouse-4').classList.add('active');
}
if ((buttons & 16) === 16) {
    document.getElementById('mouse-5').classList.add('press');
    document.getElementById('mouse-5').classList.add('active');
}
}); 

document.addEventListener('mouseup', function () {
  [1, 2, 3, 4, 5].map(function (i) { return 'mouse-' + i; }).forEach(function (id) {
      document.getElementById(id).classList.remove('active');
  });
});

  var mouseSection = document.querySelector('.mouse-Section');
  mouseSection.addEventListener('contextmenu', function (e) { e.preventDefault() });
  mouseSection.addEventListener('mousedown', function (e) { e.preventDefault() });
  mouseSection.addEventListener('mouseup', function (e) { e.preventDefault() });
  var upId, downId;
  mouseSection.addEventListener('wheel', function (e) {
      if (e.deltaY < 0) {
          document.getElementById('wheel-down').classList.add('press');
          document.getElementById('wheel-down').classList.add('active');
          window.clearTimeout(downId);
          downId = window.setTimeout(function () {
              document.getElementById('wheel-down').classList.remove('active')
          }, 250);
      } else if (e.deltaY > 0) {
          document.getElementById('wheel-up').classList.add('press');
          document.getElementById('wheel-up').classList.add('active');
          window.clearTimeout(upId);
          upId = window.setTimeout(function () {
              document.getElementById('wheel-up').classList.remove('active')
          }, 250);
      }
  });


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
//controller
// Get the state of all gamepads
var haveEvents = 'GamepadEvent' in window;
var haveWebkitEvents = 'WebKitGamepadEvent' in window;
var controllers = {};
var rAF = window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.requestAnimationFrame;
function connecthandler(e) {
  addgamepad(e.gamepad);
}
function addgamepad(gamepad) {
  controllers[gamepad.index] = gamepad; var d = document.createElement("div");
  d.setAttribute("id", "controller" + gamepad.index);
  var t = document.createElement("h1");
  t.appendChild(document.createTextNode("Gamepad: " + gamepad.id));
  d.appendChild(t);
  var b = document.createElement("div");
  b.className = "buttons";
  for (var i=0; i<gamepad.buttons.length; i++) {
    var e = document.createElement("span");
    e.className = "button";
    e.id = 'b' + i;
    e.innerHTML = 'B'+i;
    b.appendChild(e);
  }
  d.appendChild(b);
  var a = document.createElement("div");
  a.className = "axes";
  for (i=0; i<gamepad.axes.length; i++) {
    l = document.createElement("p");
    e = document.createElement("meter");
    e.id = "Axis" + i;
    l.innerHTML = "Axis " + i
    e.title = 'Axis '+ i;
    e.className = "axis";
    e.setAttribute("min", "-1");
    e.setAttribute("max", "1");
    e.setAttribute("value", "0");
    a.appendChild(l);
    a.appendChild(e);
  }
  d.appendChild(a);
  document.getElementById("start").style.display = "none";
  document.body.appendChild(d);
  rAF(updateStatus);
}
function disconnecthandler(e) {
  removegamepad(e.gamepad);
}
function removegamepad(gamepad) {
  var d = document.getElementById("controller" + gamepad.index);
  document.body.removeChild(d);
  delete controllers[gamepad.index];
}
function updateStatus() {
  scangamepads();
  for (j in controllers) {
    var controller = controllers[j];
    var d = document.getElementById("controller" + j);
    var buttons = d.getElementsByClassName("button");
    for (var i=0; i<controller.buttons.length; i++) {
      var b = buttons[i];
      var val = controller.buttons[i];
      var pressed = val == 1.0;
      var touched = false;
      if (typeof(val) == "object") {
        pressed = val.pressed;
        if ('touched' in val) {
          touched = val.touched;
        }
        val = val.value;
      }
      var pct = Math.round(val * 100) + "%";
      b.style.backgroundSize = pct + " " + pct;
      b.className = "button";
      if (pressed) {
        b.className += " pressed";
      }
      if (touched) {
        b.className += " touched";
      }
    }
    var axes = d.getElementsByClassName("axis");
    for (var i=0; i<controller.axes.length; i++) {
      var a = axes[i];
      a.innerHTML = i + ": " + controller.axes[i].toFixed(4);
      a.setAttribute("value", controller.axes[i]);
    }
  }
  rAF(updateStatus);
}
function scangamepads() {
  var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : []);
  for (var i = 0; i < gamepads.length; i++) {
    if (gamepads[i] && (gamepads[i].index in controllers)) {
      controllers[gamepads[i].index] = gamepads[i];
    }
  }
}
if (haveEvents) {
  window.addEventListener("gamepadconnected", connecthandler);
  window.addEventListener("gamepaddisconnected", disconnecthandler);
} else if (haveWebkitEvents) {
  window.addEventListener("webkitgamepadconnected", connecthandler);
  window.addEventListener("webkitgamepaddisconnected", disconnecthandler);
} else {
  setInterval(scangamepads, 500);
}

