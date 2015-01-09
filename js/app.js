var tt = {};

tt.passage = "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.";

tt.count = 0;
tt.out = document.getElementById('out');
tt.feature = document.getElementById('feature');
tt.que = document.getElementById('que');
tt.advance = document.getElementById('advance');

tt.listener = new window.keypress.Listener();


tt.buildFeed = function(){

	tt.listener.reset();

	if (tt.count === tt.passage.length+1){
		console.log("Great job! You're all done.");
		return;
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

	tt.listener.simple_combo(tt.letter, function() {
		tt.buildFeed();
	});

	console.log(tt.count);
	tt.count++;
	return tt.letter;

};





tt.buildFeed();

