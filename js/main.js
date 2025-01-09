'use strict'

//Меню для мобильного

let burger = document.querySelector("#burger");
let menu = document.querySelector("#menu");

burger.addEventListener("click", func);

function func() {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
}

//Валидация формы

let formProduct = document.querySelector(".form-order-product");
let formName = document.querySelector(".form-order-name");
let formPhone = document.querySelector(".form-order-phone");
let formBtn = document.querySelector(".form-order__button");

formBtn.addEventListener('click', function (event) {
	if (formProduct.value == "") {
		formProduct.style.border = "0.2rem solid red";
		alert("Поле 'Наименование печенья' не может быть пустым!");
		event.preventDefault();
		formProduct.focus();
		formProduct.addEventListener('input', function () {
			formProduct.style.border = "0.1rem solid #FFFFFF";
		})
	} else if (formName.value == "") {
		formName.style.border = "0.2rem solid red";
		alert("Поле 'Ваше имя' не может быть пустым!");
		event.preventDefault();
		formName.focus();
		formName.addEventListener("input", function () {
			formName.style.border = "0.1rem solid #FFFFFF";
      });
	} else if (formPhone.value == "") {
		formPhone.style.border = "0.2rem solid red";
		alert("Поле 'Ваш телефон' не может быть пустым!");
		event.preventDefault();
		formPhone.focus();
		formPhone.addEventListener("input", function () {
			formPhone.style.border = "0.1rem solid #FFFFFF";
		});
		
		formPhone.addEventListener('change', function () {
			let reg = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
			if (!reg.test(formPhone.value)) {
				alert("Введен некорректный номер");
				formPhone.style.border = "0.2rem solid red";
                formPhone.value = "";
                formPhone.focus();
			}
		})
	} else {
		let reg = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
		let phone = formPhone.value;
		if (!reg.test(phone)) {
			alert("Введен некорректный номер");
			formPhone.style.border = "0.2rem solid red";
            formPhone.value = "";
			formPhone.focus();
			event.preventDefault()
		} else {
			formProduct.value = "";
			formName.value = "";
			formPhone.value = "";
			formProduct.style.border = "0.1rem solid #FFFFFF";
			formName.style.border = "0.1rem solid #FFFFFF";
			formPhone.style.border = "0.1rem solid #FFFFFF";
			alert("Заказ оформлен! В ближайшее время с вами свяжется наш менеджер.")
		}
	}
})


//Формирование заказа

let cardButtons = document.querySelectorAll(".card__button");
let cardProducts = document.querySelectorAll(".card__title");

for (let i = 0; i < cardButtons.length; i++){
	cardButtons[i].addEventListener('click', function () {
		formProduct.value = cardProducts[i].textContent;
	})
}

//Переключение валюты

let valuta = document.querySelector(".cards__valuta");

valuta.addEventListener('click', function () {
	if (valuta.textContent == "$") {
    valuta.textContent = "€";
    let cardPrices = document.querySelectorAll(".card__price-digit");
    for (let i = 0; i < cardPrices.length; i++) {
      cardPrices[i].textContent =
        Math.floor(parseInt(cardPrices[i].textContent) * 1.03) + "€";
    }
  } else if (valuta.textContent == "€") {
    valuta.textContent = "₽";
    let cardPrices = document.querySelectorAll(".card__price-digit");
    for (let i = 0; i < cardPrices.length; i++) {
      cardPrices[i].textContent =
        Math.floor(parseInt(cardPrices[i].textContent) * 106.1) + "₽";
    }
  } else if (valuta.textContent == "₽") {
    valuta.textContent = "$";
    let cardPrices = document.querySelectorAll(".card__price-digit");
    for (let i = 0; i < cardPrices.length; i++) {
      cardPrices[i].textContent =
        Math.floor(parseInt(cardPrices[i].textContent) * 0.0098) + "$";
    }
  }
})