var tt = {};

tt.passage = "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.";

tt.count = 0;
tt.out = document.getElementById('out');
tt.feature = document.getElementById('feature');
tt.que = document.getElementById('que');
tt.advance = document.getElementById('advance');


tt.buildFeed = function(){

	if (tt.count === tt.passage.length){
		console.log("Great job! You're all done.")
		return;
	}

	var out = function(){
		var p = tt.passage.substring(tt.count, tt.count-3);
		return p;    
	}();
	out = out.split(' ').join('&nbsp;');
	tt.out.innerHTML = out;

	var feature  = tt.passage.charAt(tt.count);
	tt.feature.innerHTML = feature;

	var que = function(){
		var q = tt.passage.substring(tt.count+1,tt.count+4);
		return q;    
	}();
	que = que.split(' ').join('&nbsp;');

	tt.que.innerHTML = que;

	tt.count++;

};

tt.buildFeed();

tt.advance.addEventListener("click", function(e) {
	tt.buildFeed();
});
	
