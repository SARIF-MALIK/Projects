




function step1(cb){
    console.log('selecting the image'); 
    setTimeout(() => {
        console.log('image selected'); 
        cb("image"); 
    }, 4000);
}

function step2(image, cb){
    console.log('applying the filter'); 
    setTimeout(() => {
        console.log('filtered'); 
        cb("filtered"); 
    }, 2000);
}
function step3(filter, cb){
    console.log('adding caption'); 
    setTimeout(() => {
        console.log('captioned'); 
        cb("captioned"); 
    }, 2000);
}
function step4(caption, cb){
    console.log('posted'); 
}



step1(function(image){
    step2(image, function(filter){
        step3(filter, function(final){
            step4(final); 
        }); 
    }); 
}); 