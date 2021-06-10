//  Functional Programming : Basic Exercises

//  1
function composedValue(num){
    return square( double( num ))
}

function square(x){
    return x*x;
}

function double(x){
    return x*2;
}


//  2   
//square and double functions 
// from 1 are also part of 2
function compose(fun1, fun2, value){
    return fun1( fun2( value))
}

function f1(value){
    return compose(square, double, value)
}

function f2(value){
    return compose(double, square, value)
}

//   3
function find(array, fun){
    for(i=0;i<array.length;i++){
        if(fun(array[i]))
            return array[i]
    }
}

function isEven(num){ return (num % 2 == 0)}


//  4
// square function in 1 is also part of 4
function map(array, fun){
    newArray = []
    for(i=0;i<array.length;i++){
        newArray[i] = fun(array[i])
    }
    return newArray
}


//.....................................................................

//  Functional Programming : Advanced Exercises

//  1
function recfind(array,fun){
    if(fun(array[0]))
        return array[0]
    return recfind(array.slice(1),fun)
}

//  2
function recmap(array, fun){
    return fun(array[0]).concat(recmap(array.slice(1))) 
}


//.........................................................


//  3

// console.log("square is " + square.toString());
// Output
// square is function square(x){
//    return x*x;
//}

// console.log("double is " + double.toString());
// Output
// double is function double(x){
//     return x*2;
// }
