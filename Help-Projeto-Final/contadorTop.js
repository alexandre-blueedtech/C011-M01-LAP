const go = {
	timer: null,
	message:'',
	time:0,
	countdown: (duration = 10) => {
		clearInterval(go.timer);
		return new Promise(function(resolve, reject) {
			go.timer = setInterval(function() {
				go.time--;
				console.log(go.message + ':' + go.time);
			if (!go.time) {
				clearInterval(go.timer);
				resolve();
			}
			}, 1000);
		});
	},
	do: async (msg, time=10) => {
		go.time = time;
		go.message = msg;
		await go.countdown(go.time);
		console.log('fim');
	},
}

go.do("", 5);