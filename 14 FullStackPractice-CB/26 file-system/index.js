
let fs = require('fs'); 

// let data = 'h1 chai aagyi, chai peelo frndzz'; 

// fs.writeFile('abc.txt', data, 
//     {
//         encoding : 'utf-8',
//         flag : 'w'                      /// w --> write
//     } ,
//     (err)=>{
//         if(err){throw err}
//         console.log('file written successfully')
//     }    
// )

// // without optional part 

// fs.writeFile('abc.txt', data, 
//     (err)=>{
//         if(err){throw err}
//         console.log('file written successfully')
//     }   
    
// )


///      read file 

// fs.readFile('abc.txt', 
//     {
//         encoding : 'utf-8'  // optional but if not including give buffer data
//     },             
//     (err, data)=>{ 
//         if(err){throw err}
//         else console.log(data); 
//     }
// )


// update 

fs.appendFile('abc.txt', 'this is a modified data in abc file', 
    (err)=>{
        if(err){throw err}
        console.log('file written successfully')
    } 
)


// delete 
fs.unlink('abc.txt', (err)=>{
    if(err){ throw err}
    console.log("file deleted successfully"); 
})