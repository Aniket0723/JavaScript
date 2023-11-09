function initCounter(id) {
    let count = 0;
    return function () {
        count++;
        document.getElementById(id).innerText = count;
    };
}
// let count = 10;
let counter1 = initCounter('btnCount1');
let counter2 = initCounter('btnCount2');
// console.log(count)

// closure - ek to wo function wo aur usko uski state 
// yaad rakhni ho koi variable me 

function initAddString(inputId,outputId){
    let str = '';
    return function (){
        str += ' '+document.getElementById(inputId).value;
        document.getElementById(inputId).value='';
        document.getElementById(outputId).innerText=str;
    }
}
let strAdder1 = initAddString('text1','text-output1')
let strAdder2 = initAddString('text2','text-output2')