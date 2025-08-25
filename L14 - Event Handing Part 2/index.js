let inputnm = document.getElementById('name');
let nameop = document.getElementById('selected-car');


inputnm.addEventListener('input' ,() => {
    nameop.textContent = `Typed name: ${inputnm.value}`;
    console.log(inputnm.value);
})

let carip = document.getElementById('car');
let carop = document.getElementById('selected-car');

carip.addEventListener('change' ,() => {
    carop.textContent = `Selected car: ${carip.value}`;
    console.log(carip);
})
