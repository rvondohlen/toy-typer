var tt = {};

tt.passage = "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.";

tt.count = 0;
tt.out = document.getElementById('out');
tt.feature = document.getElementById('feature');
tt.que = document.getElementById('que');
tt.advance = document.getElementById('advance');
tt.score = document.getElementById('score');

tt.points = 0;

tt.buildFeed = function(){

	if (tt.count === tt.passage.length){
		console.log("Great job! You're all done.");
	}

	var out = function(){
		var p = tt.passage.substring(tt.count, tt.count-5);
		return p;    
	}();
	out = out.split(' ').join('&nbsp;');
	tt.out.innerHTML = out;

	feature  = tt.passage.charAt(tt.count);
	tt.feature.innerHTML = feature;

	var que = function(){
		var q = tt.passage.substring(tt.count+1,tt.count+6);
		return q;
	}();
	que = que.split(' ').join('&nbsp;');

	tt.que.innerHTML = que;

	tt.letter = tt.passage.charAt(tt.count);
	
	if (tt.letter === " "){
		tt.letter = "space";
	}else if (tt.letter === "," || tt.letter === "." || tt.letter === "!" || tt.letter === "?"){
		tt.letter;
	}else if( tt.letter === tt.letter.toUpperCase()){
		tt.letter = "shift " + tt.letter.toLowerCase();
	}

	document.addEventListener("keydown", function(ev){
		var last_key_code = ev.which;
		if (feature == " " && last_key_code === 32){
	  	tt.buildFeed();
		} else if(feature === feature.toUpperCase() && last_key_code === 16){
	  	document.addEventListener("keydown", function(ev){
				var shifted_key_code = ev.which;
				if ( tt.key_dictionary.key_codes[shifted_key_code] === feature.toLowerCase() ){
					tt.buildFeed();
				}
	  	});
	  } else if ( tt.key_dictionary.key_codes[last_key_code] === feature){
	  	tt.buildFeed();
	  }
	});

	tt.key_dictionary = {
		  "modifier_keys" : {
		    "cmd": "metaKey",
		    "ctrl": "ctrlKey",
		    "shift": "shiftKey",
		    "alt": "altKey"
		  },

		  "alternate_names" : {
		    "escape": "esc",
		    "control": "ctrl",
		    "command": "cmd",
		    "break": "pause",
		    "windows": "cmd",
		    "option": "alt",
		    "caps_lock": "caps",
		    "apostrophe": "\'",
		    "semicolon": ";",
		    "tilde": "~",
		    "accent": "`",
		    "scroll_lock": "scroll",
		    "num_lock": "num"
		  },

		  "shifted_keys" : {
		    "/": "?",
		    ".": ">",
		    ",": "<",
		    "\'": "\"",
		    ";": ":",
		    "[": "{",
		    "]": "}",
		    "\\": "|",
		    "`": "~",
		    "=": "+",
		    "-": "_",
		    "1": "!",
		    "2": "@",
		    "3": "#",
		    "4": "$",
		    "5": "%",
		    "6": "^",
		    "7": "&",
		    "8": "*",
		    "9": "(",
		    "0": ")"
		  },

		  "key_codes" : {
		    0: "\\",
		    8: "backspace",
		    9: "tab",
		    12: "num",
		    13: "enter",
		    16: "shift",
		    17: "ctrl",
		    18: "alt",
		    19: "pause",
		    20: "caps",
		    27: "esc",
		    32: "space",
		    33: "pageup",
		    34: "pagedown",
		    35: "end",
		    36: "home",
		    37: "left",
		    38: "up",
		    39: "right",
		    40: "down",
		    44: "print",
		    45: "insert",
		    46: "delete",
		    48: "0",
		    49: "1",
		    50: "2",
		    51: "3",
		    52: "4",
		    53: "5",
		    54: "6",
		    55: "7",
		    56: "8",
		    57: "9",
		    65: "a",
		    66: "b",
		    67: "c",
		    68: "d",
		    69: "e",
		    70: "f",
		    71: "g",
		    72: "h",
		    73: "i",
		    74: "j",
		    75: "k",
		    76: "l",
		    77: "m",
		    78: "n",
		    79: "o",
		    80: "p",
		    81: "q",
		    82: "r",
		    83: "s",
		    84: "t",
		    85: "u",
		    86: "v",
		    87: "w",
		    88: "x",
		    89: "y",
		    90: "z",
		    91: "cmd",
		    92: "cmd",
		    93: "cmd",
		    96: "num_0",
		    97: "num_1",
		    98: "num_2",
		    99: "num_3",
		    100: "num_4",
		    101: "num_5",
		    102: "num_6",
		    103: "num_7",
		    104: "num_8",
		    105: "num_9",
		    106: "num_multiply",
		    107: "num_add",
		    108: "num_enter",
		    109: "num_subtract",
		    110: "num_decimal",
		    111: "num_divide",
		    112: "f1",
		    113: "f2",
		    114: "f3",
		    115: "f4",
		    116: "f5",
		    117: "f6",
		    118: "f7",
		    119: "f8",
		    120: "f9",
		    121: "f10",
		    122: "f11",
		    123: "f12",
		    124: "print",
		    144: "num",
		    145: "scroll",
		    186: ";",
		    187: "=",
		    188: ",",
		    189: "-",
		    190: ".",
		    191: "/",
		    192: "`",
		    219: "[",
		    220: "\\",
		    221: "]",
		    222: "\'",
		    223: "`",
		    224: "cmd",
		    225: "alt",
		    57392: "ctrl",
		    63289: "num",
		    59: ";",
		    61: "-",
		    173: "="
		  }
	};
	
	tt.score.innerHTML = tt.points;
	tt.points++;
	tt.count++;
	return tt.letter;

};

//init
tt.buildFeed();

