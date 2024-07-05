let myinput = document.getElementById('input');
let mybutton = document.getElementById('mybutton');
let mylist = document.querySelector('.mylist');

document.addEventListener('click', function () {

    mybutton.addEventListener('click', function () {
        let myinputvalue = myinput.value.trim();
        if (myinputvalue !== '') {
            let newtext = document.createElement('li');
            newtext.textContent = myinputvalue;
            mylist.appendChild(newtext);
            myinput.value = ''; // Clear input field
        }
    });
});