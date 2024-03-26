//Input the data form user.
let info = document.querySelector("#info");
let num = document.querySelector("#amt");
let btn = document.querySelector(".ent");
let expa = document.querySelector(".expa");
let uls = document.querySelector(".uls");
let incom = document.querySelector(".incom");
let ulss = document.querySelector(".ulss");
let inc = document.querySelector(".inc");
let exp = document.querySelector(".exp");
let total_exp = document.querySelector(".total_exp");
let total_inc = document.querySelector(".total_inc");


inc.addEventListener("click", function () {
    event.preventDefault();

    // create a new list 
    let item = document.createElement("li");
    item.innerText = info.value;
    incom.appendChild(item);
    // print the number 
    let items = document.createElement("li");
    items.innerText = num.value;
    uls.appendChild(items);
    // display value
    display();
});

function display() {

    let arr = [1];
    // let amount = parseInt(num.value);
    // arr[0] = arr[0] + amount;
    // total_inc.innerText = arr.splice(0, 1, (arr[0]));
    // console.log(arr.splice(0, 1, arr[0]));

    if(arr[0]=1){
        let amount = parseInt(num.value);
        arr[0] = arr[0] + amount;
        total_inc.innerText = arr.splice(0, 1, (arr[0]));
        console.log(arr.splice(0, 1, arr[0]));
    
    }else if(arr[0]>1){
        let amount = parseInt(num.value);
        arr[0] = arr[0] + amount;
        total_inc.innerText = arr.splice(0, 1, (arr[0]));
        console.log(arr.splice(0, 1, arr[0]));
    
    }

        // let arr=[0];
        // let amount=parseInt(num.value);
        // let newAmount;
        // total_inc.innerText=arr.splice(0,1,(arr[0]+amount));
        // console.log(total_inc.innerText=arr.splice(0,1,(arr[0]+amount)));
}



// let arr=[0];
// let amount=7;
// let newAmount = arr[0]+amount;
// console.log(arr.splice(0,1,newAmount[0]));

// console.log(news);



// let newAmount =0;   
// function display(){
//     let amount=parseInt(num.value);
//     // let newAmount =0;
//     if(newAmount==0){
//         newAmount+=amount;
//         total_inc.innerText=newAmount;
//     }else{
//         newAmount+=amount;
//         total_inc.innerText=newAmount;
//     }
//     // let amount=parseInt(num.value);
//     // // total_inc.innerText=amount;
//     // // let amounts=0;
//     // let add=amounts+amount;
//     // total_inc.innerText=add;
// };

// let newA=amount;
// if(newAmount==0){
//     let amount=newAmount+parseInt(num.value);
//     total_inc.innerText=amount;
// }else{
//     let amount=newAmount+parseInt(num.value);
//     total_inc.innerText=amount;
// }


// Expanse
exp.addEventListener("click", function () {
    event.preventDefault();
    // create a new list 
    let item = document.createElement("li");
    item.innerText = info.value;
    expa.appendChild(item);
    // print the number 
    let items = document.createElement("li");
    items.innerText = num.value;
    ulss.appendChild(items);
    // display value
    total_exp.innerText = num.value;
});


//    let amount=8;
//     let newAmount = console.log(amount+parseInt(num.value));
// p.innerText=newAmount;
