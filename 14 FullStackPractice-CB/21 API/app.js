
// let req = new XMLHttpRequest(); 

// // api -> 

// req.open('GET', 'https://api.tvmaze.com/search/shows?q=girls'); 
// req.send(); 

// console.log(req); 

// req.onload = function(){
//     let parsedRes = JSON.parse(req.response); 
//     console.log(parsedResn ); 
// }

// req.onerror = function(){
//     console.log(this.response)
// }



// --------------------------------- fetch  ---------------------------------------// 

// data comes in small chunks/packets
fetch('https://api.tvmaze.com/search/shows?q=girls')
.then((data)=>{
    // console.log(data)     X---X only meta will be printed therefore we use data.json()
    let completeData = data.json(); // wait for all remaning packet & convert into json format as it also returns a promise
    return completeData
})
.then((completeData)=>{
    console.log(completeData); 
})
.catch((err)=>{
    console.log(err); 
})



// --------------------------------- AXIOS ---------------------------------------// 

// third party library 

// here it get all the packets at once 

axios.get('https://api.tvmaze.com/search/shows?q=girls') 
.then((res)=>{
    console.log(res.data); 
}
)

.catch((err)=>{
    console.log(err); 
})






