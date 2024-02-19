// let val =  $('h1');             //  $ --> querySelectorAll
// let val2 = $('.sam');             // return is similar to html collection 
// let inp = $('#inp'); 
// // val.css('color', 'red'); 
// // val.css('background-color', 'yellow'); 
// // val.css('font-size', '43px')


// // val.css({
// //     color: 'red', 
// //     backgroundColor: 'yellow', 
// //     fontSize: '44px'
// // })

// // -----------------------------------------

// // .text()

// console.log($('p').text() );  // getter like textContent brainless
// console.log($('p').text('hi sam') );  // setter 

// console.log($('p').html('<h1>hi sam bg</h1>') );  // setter 
// console.log($('p').html());  // getter inner html with style returns 

   
// // getAttribute & setAttribute 

// let ans = $('#inp').attr('type');      // getAttr                 
// console.log(ans); 

// $('#inp').attr('type', 'text')         // setAttr 

// // first () 

// // val.first().css('color', 'brown')
// // val.last().css('color', 'green')

// //  input value 

// console.log(inp.val());                // getter 
// inp.val('samarth');                   // setter 


// // classList 
// val.first().addClass('first second')          // not work with comma separated
// val.first().removeClass('second first') 

// // toggle class 
// .toggleClass()

// // hasClass 
// .hasClass()


$('button').click(function(){
    console.log('clicked')
})


$('#fadeIn').click(()=>{
    $('#divv').fadeIn(); 
})
$('#fadeOut').click(()=>{
    $('#divv').fadeOut(); 
})
$('#fadeToggle').click(()=>{
    $('#divv').fadeToggle(); 
})


