// let inputBox = document.getElementById('inputBox');
// let buttons = document.querySelectorAll('button');

// let string = '';

// buttons.forEach(element => {
//     element.addEventListener('click', (b) => {
//         if (b.target.innerText == '=') {
//             string = String(eval(string));
//             inputBox.value = string;
//         } else if (b.target.innerText == 'AC') {
//             string = '';
//             inputBox.value = string;
//         } else if (b.target.innerText == 'DEL') {
//             string = string.substring(0, string.length - 1);
//             inputBox.value = string;
//         } else {
//             string += b.target.innerText;
//             inputBox.value = string;
//         }
//     });
// });



let button=document.querySelectorAll('button');
let inputEle=document.getElementById('inputBox');

for(let i=0; i<=button.length; i++){
    button[i].addEventListener('click',()=>{
        const btnValue=button[i].textContent;
        if(btnValue=="AC"){
            inputEle.value='';
        }else if(btnValue== "="){
            inputEle.value=eval(inputEle.value);
        }else if(btnValue== "DEL"){
            inputEle.value = inputEle.value.slice(0, inputEle.value.length - 1);
        }else{
            inputEle.value+=btnValue;
        }
    })
}