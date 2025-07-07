// sandWich section
let sandWich = document.getElementById('sandWich');
let sandWichStick1 = document.getElementById('stick1');
let sandWichStick2 = document.getElementById('stick2');
let sandWichStick3 = document.getElementById('stick3');
let sandWichCounter = 1;
let navbarMobile = document.getElementById('navbar-mobile');

sandWich.onclick = function(){
    if(sandWichCounter > 0){
        sandWich.style.cssText = `margin-top: -11px; position: fixed; right: 5%`;
        sandWichStick1.style.cssText = `margin-top: 10px; transform: rotate(45deg); background-color: white;`;
        sandWichStick2.style.cssText = `opacity: 0; background-color: white;`;
        sandWichStick3.style.cssText = `margin-top: -16px; transform: rotate(-45deg); background-color: white;`;
        navbarMobile.style.cssText = `transform: translateY(0%);`;
        sandWichCounter = 0;
    }
    else if(sandWichCounter == 0){
        sandWich.style.cssText = `margin-top: 0px;`;
        sandWichStick1.style.cssText = `margin-top: 0px; transform: rotate(0deg);`;
        sandWichStick2.style.cssText = `opacity: 1;`;
        sandWichStick3.style.cssText = `margin-top: 0px; transform: rotate(0deg);`;
        navbarMobile.style.cssText = `transform: translateX(100%);`;
        sandWichCounter = 1;
    }
}

// Tabs

let tab1 = document.getElementById('tab1');
let tab2 = document.getElementById('tab2');
let tab3 = document.getElementById('tab3');

let tab1UL = document.getElementById('underline-tab1');
let tab2UL = document.getElementById('underline-tab2');
let tab3UL = document.getElementById('underline-tab3');

let tab1Design = document.getElementById('tab1-design');
let tab2Design = document.getElementById('tab2-design');
let tab3Design = document.getElementById('tab3-design');

tab1.onclick = function(){
    tab1UL.style.cssText = `width: 100%`;
    tab2UL.style.cssText = `width: 0%`;
    tab3UL.style.cssText = `width: 0%`;

    tab1Design.style.cssText = `display: flex;`;
    tab2Design.style.cssText = `display: none;`;
    tab3Design.style.cssText = `display: none;`;
}

tab2.onclick = function(){
    tab2UL.style.cssText = `width: 100%`;
    tab1UL.style.cssText = `width: 0%`;
    tab3UL.style.cssText = `width: 0%`;

    tab1Design.style.cssText = `display: none;`;
    tab2Design.style.cssText = `display: flex;`;
    tab3Design.style.cssText = `display: none;`;
}

tab3.onclick = function(){
    tab3UL.style.cssText = `width: 100%`;
    tab2UL.style.cssText = `width: 0%`;
    tab1UL.style.cssText = `width: 0%`;

    tab1Design.style.cssText = `display: none;`;
    tab2Design.style.cssText = `display: none;`;
    tab3Design.style.cssText = `display: flex;`;
}


// Q & A

let dropDownA1 = document.getElementById('drop-A1');
let A1Con = document.getElementById('A1-con');
let A1Stk1 = document.getElementById('A1stk1');
let A1Stk2 = document.getElementById('A1stk2');
let Q1 = document.getElementById('Q1');
let Counter1 = 1;

dropDownA1.onclick = function(){
    if(Counter1 > 0){
        A1Stk1.style.cssText = `background-color: #fb5859; transform: rotate(-45deg)`;
        A1Stk2.style.cssText = `background-color: #fb5859; transform: rotate(45deg)`;
        A1Con.style.cssText = `height: max-content; visibility: visible; opacity: 1; margin-bottom: 15px;`;
        Q1.style.cssText = `color: #fb5859`;
        Counter1 = 0;
    }
    else if(Counter1 == 0){
        dropDownA1.style.cssText = ``;
        A1Stk1.style.cssText = ``;
        A1Stk2.style.cssText = ``;
        A1Con.style.cssText = ``;
        Q1.style.cssText = ``;
        Counter1 = 1;
    }
}

let dropDownA2 = document.getElementById('drop-A2');
let A2Con = document.getElementById('A2-con');
let A2Stk1 = document.getElementById('A2stk1');
let A2Stk2 = document.getElementById('A2stk2');
let Q2 = document.getElementById('Q2');
let dropDownCounter2 = 1;

dropDownA2.onclick = function(){
    if(dropDownCounter2 > 0){
        A2Stk1.style.cssText = `background-color: #fb5859; transform: rotate(-45deg)`;
        A2Stk2.style.cssText = `background-color: #fb5859; transform: rotate(45deg)`;
        A2Con.style.cssText = `height: max-content; visibility: visible; opacity: 1; margin-bottom: 15px;`;
        Q2.style.cssText = `color: #fb5859`;
        dropDownCounter2 = 0;
    }
    else if(dropDownCounter2 == 0){
        dropDownA2.style.cssText = ``;
        A2Stk1.style.cssText = ``;
        A2Stk2.style.cssText = ``;
        A2Con.style.cssText = ``;
        Q2.style.cssText = ``;
        dropDownCounter2 = 1;
    }
}


let dropDownA3 = document.getElementById('drop-A3');
let A3Con = document.getElementById('A3-con');
let A3Stk1 = document.getElementById('A3stk1');
let A3Stk2 = document.getElementById('A3stk2');
let Q3 = document.getElementById('Q3');
let dropDownCounter3 = 1;

dropDownA3.onclick = function(){
    if(dropDownCounter3 > 0){
        A3Stk1.style.cssText = `background-color: #fb5859; transform: rotate(-45deg)`;
        A3Stk2.style.cssText = `background-color: #fb5859; transform: rotate(45deg)`;
        A3Con.style.cssText = `height: max-content; visibility: visible; opacity: 1; margin-bottom: 15px;`;
        Q3.style.cssText = `color: #fb5859`;
        dropDownCounter3 = 0;
    }
    else if(dropDownCounter3 == 0){
        dropDownA3.style.cssText = ``;
        A3Stk1.style.cssText = ``;
        A3Stk2.style.cssText = ``;
        A3Con.style.cssText = ``;
        Q3.style.cssText = ``;
        dropDownCounter3 = 1;
    }
}



let dropDownA4 = document.getElementById('drop-A4');
let A4Con = document.getElementById('A4-con');
let A4Stk1 = document.getElementById('A4stk1');
let A4Stk2 = document.getElementById('A4stk2');
let Q4 = document.getElementById('Q4');
let dropDownCounter4 = 1;

dropDownA4.onclick = function(){
    if(dropDownCounter4 > 0){
        A4Stk1.style.cssText = `background-color: #fb5859; transform: rotate(-45deg)`;
        A4Stk2.style.cssText = `background-color: #fb5859; transform: rotate(45deg)`;
        A4Con.style.cssText = `height: max-content; visibility: visible; opacity: 1; margin-bottom: 15px;`;
        Q4.style.cssText = `color: #fb5859`;
        dropDownCounter4 = 0;
    }
    else if(dropDownCounter4 == 0){
        A4Stk1.style.cssText = ``;
        A4Stk2.style.cssText = ``;
        A4Con.style.cssText = ``;
        Q4.style.cssText = ``;
        dropDownCounter4 = 1;
    }
}