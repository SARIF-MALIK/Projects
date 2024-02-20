
let inp = document.querySelector('input')
let btn = document.querySelector('button')
let ul = document.getElementsByTagName('ul'); 

btn.addEventListener('click', ()=>{
    let searchedText = inp.value; 
    console.log(inp.value)
    inp.value = ""; 
    fetchApi(searchedText); 
})

function fetchApi(searchedText){
    axios.get(`https://api.tvmaze.com/search/shows?q=${searchedText}`)
    .then((res)=>{
        manipulateDom(res.data); 
    })
    .catch((err)=>{
        console.log(err); 
    })
}



function manipulateDom(res){
    ul[0].innerHTML = ""; 
    for(let data of res){
        console.log(data); 
        let newElem = document.createElement('li'); 
        newElem.innerHTML = 
        `   <img src='${data.show.image.medium}'/>
            <h2> ${data.show.name} </h2>
        `
        ul[0].appendChild(newElem); 
    }
}

// let obj = {
//     naam : "sam", 
//     age : 29, 
//     gender : "male"
// }

// let obj1 = {
//     ...obj, 
//     favColor : 'red'
// }

// console.log(obj1); 

// let arr1 = [10, 20, 30]; 
// let arr2 = [40, 50 , 60, 70]

// let newArr = [...arr1, ...arr2]; 
// console.log(newArr); 

// let arr = arr1.concat(arr2); 
// console.log(arr); 







// // -------------destructure --------------------------------

// let courses = ['cpp', 'java', 'web', 'python', 'dataScience']; 

// let [, java] = courses; 

// console.log(java); 


// let myObj = {
//     c1 : 'cpp', 
//     c2 : 'java', 
//     c3 : 'web', 
//     c4 : 'python'
// }

// let {c1: user, c2, c3='defaulValue'} = myObj;          /// here we need to pass the keys not other name like array 

// console.log(user,c3); 




