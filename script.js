function ansver_create(bool, elem, ansverText = {trueText: '', falseText: ''}){
	switch (bool) {
		case true:
			ansver_render(elem, ansverText.trueText);
			return ansverText.trueText;
		case false :
			ansver_render(elem, ansverText.falseText);
			return ansverText.falseText;
	}
}

function ansver_render(elem, text = ''){
	let element = document.querySelector(elem);
	element.innerHTML = text;
}


// Задача 1

	function word_count(str, elem){
		if (str == '') {
			ansver_render(elem);
			return false;
		}
		let reg = /\b/g,
			 check = str.match(reg),
			 ansver;

		switch (check.length) {
			case 2:
				ansver = 'Данная строчка является одним словом'
				break;
			default:
				ansver = `В данной строчке ${check.length / 2} слов`
				break;
		}
		ansver_render(elem, ansver);
	}
	
	document.querySelector('.word_count').onkeyup = function(){
		word_count(this.value, '.word_count_result');
	};


// Задача 2

	function mac_address_check(str, elem){
		if (str == '') {
			ansver_render(elem);
			return false;
		}

		let reg = /[a-z][A-Z]:[a-z][A-Z]:[a-z][A-Z]:\d{2}:\d{2}:\d{2}/,
			 check = reg.test(str),
			 ansver = ansver_create(check, elem, {
			 	trueText: 'MAC адрес правильный',
				falseText: 'MAC адрес содержит ошибку',
			 });
	}

	document.querySelector('.mac_address_check').onkeyup = function(){
		mac_address_check(this.value, '.mac_address_check_result');
	};

// Задача 3

	function date_check(str, elem){
		if (str == '') {
			ansver_render(elem);
			return false;
		}

		let reg = /\d{2}\/\d{2}\/\d{4}/,
			 check = reg.test(str);
		let ansver = ansver_create(check, elem, {
			 	trueText: 'Данная строка является датой',
				falseText: 'Данная строка не является датой',
			 });
	}
	document.querySelector('.date_check').onkeyup = function(){
		date_check(this.value, '.date_check_result');
	};


// Задача 4

	function ip_check(str, elem){
		if (str == '') {
			ansver_render(elem);
			return false;
		}

		let reg = /(\d{3}\.\d\.\d\.\d|\d{3}\.\d{3}\.\d{3}\.\d|\d{3}\.\d{3}\.\d\.\d)/,
			 check = reg.test(str),
			 ansver = ansver_create(check, elem, {
			 	trueText: 'Данная строка является ip адресом',
				falseText: 'Данная строка не является ip адресом',
			 });
	}

	document.querySelector('.ip_check').onkeyup = function(){
		ip_check(this.value, '.ip_check_result');
	};

// Задача 5

	function pass_check(str, elem){
		if (str == '') {
			ansver_render(elem);
			return false;
		}

		let checkArr = [/[a-z]+/, /[A-Z]+/, /[\d]+/];

		let security = 0,
			 ansver;

		for(let i = 0; i < checkArr.length; i++){
			let j = checkArr[i].exec(str);
			if (j != null) security++;
		}

		switch (security) {
			case 1:
				ansver = 'Слабый пароль'
				break;
			case 2:
				ansver = 'Средний пароль'
				break;
			case 3:
				ansver = 'Надежный пароль'
				break;
		}

		if (str.length < 8) ansver = 'Слабый пароль';
		
		ansver_render(elem, ansver)
	}

	

	document.querySelector('.pass_check').onkeyup = function(){
		pass_check(this.value, '.pass_check_result');
	};

// Задача 6

	function url_check(str, elem){
		if (str == '') {
			ansver_render(elem);
			return false;
		}

		let reg = /^(https?:\/\/)?([\w\.]+)\.([a-z]{2,6}\.?)(\/[\w\.]*)*\/?/gm,
			 check = reg.exec(str);


		if (!check || check[0] != check.input){
		 	check = false;
		}
		else {
			check = true; 
		}

		let ansver = ansver_create(check, elem, {
			  		trueText: 'URL адрес правильный',
				 		falseText: 'URL адрес содержит ошибку',
			  	});
			 
	}

	document.querySelector('.url_check').onkeyup = function(){
		url_check(this.value, '.url_check_result');
	};
