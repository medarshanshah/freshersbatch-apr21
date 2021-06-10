//  1
function parity(num){
    if (num % 2 == 0 ){
        return 'even'
    }
    else{
        return 'odd'
    }
}

//  2
function maximum(a,b,c){
    if(a>b && a>c)  return a
    else if(b>c && b>a) return b
    else if(c>a && c>b) return c
}

//  3
function numHeads(num){

    var heads=0;
    for(i=0; i<num ; i++){
        let r = Math.floor(Math.random() *2)
        if(r==0) heads++
    }

    return heads
}

//  4  numHeads() in 3 also a part of 4
function headsRatio(num){

    heads = numHeads(num)
    return heads/num

}

//  5
function padChars(num, str){

    //   using ES6 repeat()
//    if(num>0){
//        return str.repeat(num)
//    }
    let newStr= ''
    while(num!=0){
        newStr += str
        num--
    }
    return newStr
}

//  6
function numRollsToGetSix(){
    var times = 1;
    var randNum = 1
    while(randNum) {
        randNum = Math.floor(Math.random() * 6) + 1;
        if(randNum === 6){
            break
        } else {
            times++
        }
    }
  
    console.log(times);
}


//  7
//  The solution for this number is moved to reload.html

//............................................................


//  1
function oneStep(){
    var fourNums = [];
    for(i=0;i<4;i++){
        fourNums[i] = Math.random()
    }
    console.log(fourNums)
}

//  2
function twoStep(){
    var hundredNums = [];
    for(i=0;i<10;i++){
        for(j=0;j<10;j++){
            hundredNums.push() = Math.random()
        }
    }
    console.log(hundredNums)
}

//  3
function numberArray(strings){
    var num = [];
    for(i=0;i< strings.length ; i++){
        num[i] = Number(strings[i])
    }
    console.log(num)
    
    //Output --> undefined
    // var nums = strings.forEach(function(str){
    //     Number(str)
    // })
    // console.log(nums)
}

//  4
function element_remove(arr) {
    var i = 0;
    while (i < arr.length) {
      if (arr[i] === "") {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    return arr;
  }

function longestToken(string) {
    var arrayOfstring = string.split("ab");
    var longestString = "";
    if (!(arrayOfstring.includes("a") || arrayOfstring.includes("b"))) {
      element_remove(arrayOfstring);
      longestString = arrayOfstring.reduce((a, b) => {
        return a.length > b.length ? a : b;
      });
    }
    return longestString;
  }
  console.log(longestToken("djoiashsbsbfsdbfbaaa"));
  console.log(longestToken("iash"));

//  5
function lengthOfNonQWords(strings) {
    var totalLength = 0;
    for (i = 0; i < strings.length; i++) {
      if (strings[i].includes("q")) {
        continue;
      } else {
        totalLength += strings[i].length;
      }
    }
    console.log(totalLength);
  }
  lengthOfNonQWords(["stop", "quit", "exit"]);
  lengthOfNonQWords(["queen", "quit"]);

//...................................................
//  1 done

//  2
//    x = 5
//    console.log(x)

//  3   half(4) -> 2, half(3) -> 1.5


//  4 -> x = 5

//  5
// function seven(){
//     x=7
//     return x
// }

//  6
function calculation(a,b,c){
    return (a+b)/c
}
// calculation(1,1,0)   ->  Infinity
// calculation(-1,-1,0)   ->  -Infinity
// calculation(1,-1,0)   ->  NaN


//  7   done

//  8
function isEven(x){
   return (x % 2 == 0 ) ? true : false
}
