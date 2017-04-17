
var api ={
    getQuote(){
        return fetch(`http://quotes.stormconsultancy.co.uk/random.json`)
                .then((res)=>res.json());
                      }
    }   

module.exports = api;


// var api ={
//     getQuote(){
//         return fetch(`http://quotes.stormconsultancy.co.uk/random.json`)
//                 .then((res)=>res.json());
//                       }
//     }   

// module.exports = api;