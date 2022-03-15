function receivesAFunction(myCallback) {
    console.log("I received a function.")
    myCallback();
}

function returnsANamedFunction() {
    return function thisIsIt() {
    }
}
function returnsAnAnonymousFunction() {
    return function(){

    }
}