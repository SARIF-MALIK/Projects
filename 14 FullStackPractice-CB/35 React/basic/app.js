// let rootEl = document.getElementById('root'); 

// let h1 = document.createElement('h1'); 
// h1.innerHTML = 'hi i am h1 of DOM'; 
// rootEl.appendChild(h1); 


// ---------------------------------------------------
    /// REACT 17 SYNTAX OUTDATED 

// let h1 = React.createElement('h1', null, 'hello from h1 via react'); // (element, {attribute}, inside content)
// let h2 = React.createElement(
//     'h2', 
//     {id:'sam', className:'vohra'}, 
//     'hello from h1 via react'
// ); 

// let rootEl = document.getElementById('root')
// reactDOM.render(h1, rootEl); 

// -----------------------------------------------------

// let h1 = React.createElement('h1', null, 'hello from h1 via react'); // (element, {attribute}, inside content)
// let h2 = React.createElement(
//     'h2', 
//     {id:'sam', className:'vohra'}, 
//     'hello from h1 via react'
// ); 

// let rootEl = document.getElementById('root')
// // reactDOM.createElement(rootEl); 
// let root = ReactDOM.createRoot(document.getElementById('root')); 
// root.render([h1, h2]); 


// ---------------------------------------------------------
        // custom react using js 

// React.createElement('div', null, 
//     [
//         React.createElement('h1', null, 'hello from h1 inside div'),
//         React.createElement('span', null, 'hello from span'),
//         React.createElement('p', null, 'hello from p tag')
//     ]
// )



// -----------------------------------------------------------


    //  JSX : javascript xml 
    // jsx -> js -> browser 

    let el = <div>
        <h1>
            <span>Hello</span>
        </h1>
        <p>hello p</p>
    </div>
let root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(el); 
