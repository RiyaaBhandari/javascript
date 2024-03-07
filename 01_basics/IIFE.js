// Immediately Invoked Function Expression (IIFE)

/*
   It is a JavaScript function that runs as soon as it is defined. 
   IIFEs are useful for creating private scope and preventing global 
   namespace pollution.
*/

(function one(){
    //named iffe
    console.log('DB CONNECTED');
})();
//semicolon is neccesary because iife don,nt know where it have to stop.

( (numm) => {
    //unnamed iffe
    console.log(`DB CONNECTED two ${numm}`);
})('riya');

