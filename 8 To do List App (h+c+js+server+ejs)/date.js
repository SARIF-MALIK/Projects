// require as it is module
// console.log(module);

module.exports.getDate = getDate;



function getDate(){
const today = new Date();
    
    const options = {
        weekday: 'long', 
        day: 'numeric',
        month: 'long'
    } 
    
    return today.toLocaleDateString('en-US', options);

}
module.exports.getDay = function ZA(){
    const today = new Date();
        
        const options = {
            weekday: 'long' 
        } 
        
        return today.toLocaleDateString('en-US', options);
        
    }