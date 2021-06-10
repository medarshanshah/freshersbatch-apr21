//  1

class Rectangle{
    constructor(width, height){
        this.width = width
        this.height = height
    }
}
//  In console
// var rec1 = new Rectangle(12,15)
// var rec2 = new Rectangle(10,6)
// var rec3 = new Rectangle(5,8)

// console.log(rec1.width)
// console.log(rec1.height)
// console.log(rec2.width)
// console.log(rec2.height)
// console.log(rec3.width)
// console.log(rec3.height)

// rec1.width = 14
// rec3.height = 10


//......................................................



//  2  Output

Rectangle.prototype.getArea = function(){
    return this.width*this.height;
}

// rec1.getArea()
// 180


//.............................................................



//  3
var r = new Rectangle(4,5)  // Rectangle created
//r.hieght = 50   // New property r.hieght is set to 50
//r.getArea()     ->    20    //getArea method is called
// which multiplies the property r.height and r.width but not r.hieght



//.......................................................................



//  4
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
}

//  p.firstName     ->      "Bruce"
//  p.lastName      ->      "Wayne"

//changing the last name -> p.lastName = 'Banner'
//  p       ->      {firstName: "Bruce", lastName: "Banner"}


//................................................................



//  5
//  p.middleName       
//  p.middleName = 'David'  // assigned the property middlename
//  p   ->  {firstName: "Bruce", lastName: "Banner", middleName: "David"}



//.................................................................




//  6
//  var pname = '{ "firstName": "Steve", "lastName": "Jobs" }'
//  typeof(pname)     ->      "string"
//  var obj = eval('('+pname+')' );     
//  typeof(obj)     ->      "object"



//...............................................................



//  7

//var pname = '{ "firstName": "Steve", "lastName": "Jobs" }'
//JSON.parse(pname)     ->   {firstName: "Steve", lastName: "Jobs"}   