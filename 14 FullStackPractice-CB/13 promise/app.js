let promise = new Promise(function(resolve, reject){
    let data = 'billo bagge billeya da ki kregi'; 
    resolve(data); 
    // or 
    // let error = 'data not found'; 
    // reject(error); 
})

promise
.then(function(data){
    console.log(data); 
})

.catch(function(error){
    console.log(error); 
})

// Q 

// let step1 = new Promise(function(resolve, reject){
//     let data = 'selecting the image'; 
//     resolve(data);
// })

// step1
// .then(function(data){
//     console.log(data); 
//     let step2 = new Promise(function(resolve, reject){
//         let data = 'selected'; 
//         resolve(data);
//     })

//     step2
//     .then(function(data){
//         console.log(data); 
        
//         let step3 = new Promise(function(resolve, reject){
//             let data = 'filtered'; 
//             resolve(data);
//         })
    
//         step3
//         .then(function(data){
//             console.log(data); 
            
//             let step4 = new Promise(function(resolve, reject){
//                 let data = 'caption'; 
//                 resolve(data);
//             })
        
//             step4
//             .then(function(data){
//                 console.log(data); 
        
                
//                 let step5 = new Promise(function(resolve, reject){
//                     let data = 'uploaded'; 
//                     resolve(data);
//                 })
            
//                 step5
//                 .then(function(data){
//                     console.log(data); 
            
                    
            
            
            
//                 })
//                 .catch(function(error){
//                     console.log(error); 
//                 })
        
        
//             })
//             .catch(function(error){
//                 console.log(error); 
//             })
            
    
    
            
//         })
//         .catch(function(error){
//             console.log(error); 
//         })




//     })
//     .catch(function(error){
//         console.log(error); 
//     })
    

// })
// .catch(function(error){
//     console.log(error); 
// })



// function step1(cb){
//     console.log('selecting the image'); 
//     setTimeout(() => {
//         console.log('image selected'); 
//         cb("image"); 
//     }, 4000);
// }

// function step2(image, cb){
//     console.log('applying the filter'); 
//     setTimeout(() => {
//         console.log('filtered'); 
//         cb("filtered"); 
//     }, 2000);
// }
// function step3(filter, cb){
//     console.log('adding caption'); 
//     setTimeout(() => {
//         console.log('captioned'); 
//         cb("captioned"); 
//     }, 2000);
// }
// function step4(caption, cb){
//     console.log('posted'); 
// }



// step1(function(image){
//     step2(image, function(filter){
//         step3(filter, function(final){
//             step4(final); 
//         }); 
//     }); 
// }); 


// Q improvements 

let step1 = function(){
    console.log('selecting image'); 
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log('image selected'); 
            resolve('image selected')
        }, 4000);
    })
}

let step2 = function(data){
    console.log(`applying filter to the ${data}`)

    return new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log('filter applied')
            resolve('filter applied')
        }, 2000);
    })
}

step1()
.then(function(data){
    return step2(data)
})

.then(function(data){
    console.log(data); 
} )
.catch(function(err){
    console.log('code fatt gya error agya'); 
})

