// function filter(addingFilter){
//     console.log(addingFilter)
//     setTimeout(() => {
//         console.log("added filter");        
//     },2000);
// }

// function caption(addingCaption){
//     setTimeout(() => {
//         console.log(addingCaption)
//         console.log("added caption");        
//     },4000);
// }

// function upload(addingCaption){
//     setTimeout(() => {
//         console.log(addingCaption)
//         console.log("uploaded");        
//     },5000);
// }



// let myPromise = new Promise((resolve, reject)=>{
//                     console.log('adding photo')
//                     setTimeout(()=>{
//                         console.log('added photo')
//                         resolve(filter); 
//                     }, 3000)
//                 })

// myPromise.then((val)=>{
//     val('adding filter'); 
//     return caption
// })
// .then((val2)=>{
//     val2('adding caption'); 
//     return upload
// })
// .then((val3)=>{
//     val3('uploading')
// })
// .catch(error=>console.log(error)); 


let step1 = function(){
                console.log('selecting image'); 
                return new Promise((resolve, reject)=>{
                    setTimeout(()=>{
                        console.log('selected image'); 
                        resolve('selected image'); 
                    }, 4000)
                })
            }

let step2 = function(data1){
                console.log(`applying filter to ${data1}`); 
                return new Promise((resolve, reject)=>{
                    setTimeout(() => {
                        console.log('filtered image'); 
                        resolve('filtered image'); 
                    }, (3000));
                })
            }
let step3 = function(data2){
                console.log(`adding caption to ${data2}`); 
                return new Promise((resolve, reject)=>{
                    setTimeout(() => {
                        console.log('added caption'); 
                        resolve('caption added'); 
                    }, (5000));
                })
            }
let step4 = function(data3){
                console.log(`uploading pic ${data3}`); 
                return new Promise((resolve, reject)=>{
                    setTimeout(() => {
                        console.log('uploaded'); 
                        // resolve('caption added'); 
                    }, (3000));
                })
            }

step1()
.then(function(data1){
    return step2(data1); 
})
.then((data2)=>{
    return step3(data2); 
})
.then((data3)=>{
    step4(data3); 
})
.catch(function(err){
    console.log('code fatt gya error agya')
})

