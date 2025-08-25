const button = document.getElementById('button');
console.log(button);

button.addEventListener('click',()=>{
    console.log(button.textContent);
    button.textContent = `don't touch me`;
});

button.addEventListener('mouseover',()=>{
    button.classList.add('buttonHover')
});
button.addEventListener('mouseout',()=>{
    button.classList.remove('buttonHover')
});

// button.addEventListener('keypress',(event)=>{
//    if(event.key === 'Enter'){
//     alert('Enter is ppressed');
//    }
// })

button.addEventListener('keydown', (event) => {
    // Check for alphabets (a-z, A-Z)
    if (/^[a-zA-Z]$/.test(event.key)) {
        alert(`Alphabet pressed: ${event.key}`);
    }
    // Check for numbers (0-9)
    if (/^[0-9]$/.test(event.key)) {
        alert(`Number pressed: ${event.key}`);
    }
    // Check for Shift or Ctrl
    if (event.shiftKey) {
        alert('Shift is pressed');
    }
    if (event.ctrlKey) {
        alert('Ctrl is pressed');
    }
});
