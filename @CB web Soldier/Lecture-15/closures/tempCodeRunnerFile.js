let a = 10;
function b(){
    console.log(a);
    function c(){
        console.log(a)
    }
    c()
}

b();