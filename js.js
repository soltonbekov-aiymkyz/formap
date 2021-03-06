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
let b = [1,2,3,4,]
b.forEach(function(elem,){
    console.log(elem * 3);
})