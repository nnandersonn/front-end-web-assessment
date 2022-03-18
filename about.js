console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
	alert(`Form has been submitted succesfully`)
}


let form = document.querySelector('form#contact');
let picture = document.querySelector(`.duck-pic`);
console.log(`picture is`, picture)


picture.addEventListener(`mouseover`, ()=>alert(`You are so good at navigating this site!`))




form.addEventListener('submit', handleSubmit);