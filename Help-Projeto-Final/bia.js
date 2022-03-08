// setTimeout( () => console.log("Pizza pronta!!!"), 5000 );

// console.log("Vou ao mercado");


// function medo(tempo, callback)
// {
//     for (let i = 0; i < tempo; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     }
//     callback();
// }

// function executaAlgo()
// {
//     console.log("TESTE");
// }


// medo(3000, executaAlgo)

// function espera1seg(tempo)
// {
//     return new Promise((resolve) => {
//         setTimeout(function () {
//             console.log("teste");
//         }, 1000);
//     });
// }

// function contagem(tempo)
// {
//     for (let i = 0; i < 3; i++)
//     {
//         let retorno = espera1seg(tempo);
//         console.log(retorno);
//     }
// }

// async function medo(tempo){
//     await contagem(tempo);
//     console.log("oi");
// }

// medo(2);

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

// const go = {
// 	timer: null,
// 	message:'',
// 	time:0,
//     maxTime: 0,
// 	countdown: (duration = 10) => {
// 		clearInterval(go.timer);
// 		return new Promise(function(resolve, reject) {
// 			go.timer = setInterval(function() {
// 				go.time++;
// 				console.log(go.message + ':' + go.time);
// 			if (go.time == go.maxTime) {
// 				clearInterval(go.timer);
// 				resolve();
// 			}
// 			}, 1000);
// 		});
// 	},
// 	do: async (msg, time=10) => {
// 		go.maxTime = time;
// 		go.message = msg;
// 		await go.countdown(go.time);
// 		console.log('fim');
// 	},
// }

// go.do("", 5);