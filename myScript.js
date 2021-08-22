
var number = document.querySelector('.number');
var generate = document.querySelector('.generate');

generate.addEventListener('click', () => {
    var randomNumber = Math.floor(Math.random() * 100 );
    console.log(randomNumber);

    number.innerHTML = randomNumber;

} )