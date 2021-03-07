function f1(){
    let p;
    p=document.getElementById('out');
    for(let i=0; i<100; i++){
  p.innerHTML += i+' ' ;
    }
}
//+ ' ' clojivat stroki
//for each
//kotoriy primenyaet funksii 1 raz k ukazannomu elemantu
/*
let arr =['first element','second ',11, true,]
arr.forEach(function(item ){
    console.log(`element: ${item}`)
})
*/
/*
let b = [1,2,3,4,]
b.forEach(function(elem,){
    console.log(elem + 113);
})
*/



//for In schitaet    in daet kluchi 
//for of znachenie
//for let sozdaet peramennoe  ublechiveat na edinisu
//for age ne otloichaetsya ot for of  prohogitsya po vsem massivam  i znachenie i kluch  ne vozvrashaet massive
//for of po poverhnosti podhodit znachenie 
//for in age of nuzno massive 
// item znachenie elamenta
//.puch dobavit elament
//map sozdaet novyi massive
/*
function List2({items}){
    let example = ["Aplle" , "pear","beer"]
    let result = []
    for (item of example){
        result.push("1" +item +"!")
    }
    }*/

    ///kluchi
    // let arr =[1,2,3]
    // for (let key in arr){
    //     console.log(key)
    //    // console.log(arr[key])
    // }

/////for offfffffffff
// //item element massiva
// let arr =[1,12,3,4,]
// for (let item of arr){
//     console.log(item*12)
// }



//Map
//perebirat massivy 
///perebrat massive i bypolnit nad ego elaementami 
//kakie libo deistviii pri  etom sozdat novyi massiv ne 
//izmenyaya predydushii
let b  =[];
let a = [1,2,3,4,];
a[4]=12345;
for (let i=0; i<a.length; i++){
    b[i] = a[i]*2;
}
console.log(b)
console.log(a)

//map vozvrashat novyi massiv ne  izmenyaet iznachalnoe 
///MAP
let c = a.map(function(x){
    return x*2;
})
console.log(c)





























