// Immediatly Invoked Function Expression (IIFE)

(function chai (){
    // Named IIFE
    console.log(`DB LOADING`);
    
})();

( (name) => {
    console.log(`DB CONNECTED ${name}`);
    
})('Pritam')