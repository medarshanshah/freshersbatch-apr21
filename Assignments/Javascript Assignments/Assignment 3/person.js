//  1

function person(fname,lname,age,skills,dateofbirth,address,married,profession){
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.skills = skills;
    this.dateofbirth = dateofbirth;
    this.address = address;
    this.married = married;
    this.profession = profession;
}

var person1 = new person("nikhil","goud",22,["c"],"24/10/1996",{city:"hyderabad",pincode:"521185"},false,"sr analyst")

var person2 = new person("harish","chinna",21,["HTML"],"08/06/1997",{city:"Ameerpet",pincode:"500038"},false,"jr analyst")

print = function(){
    console.log(person1)
    console.log(person2)
}()


//.....................................................................................



//  2
var amitabh = new person("Amitabh","Bachchan",22,["c"],"24/10/1996",{city:"hyderabad",pincode:"521185"},false,"sr analyst")

var abhishek = Object.create(amitabh)

abhishek = new person("Abhishek",21,["HTML"],"08/06/1997",false,"jr analyst")

//  3

var aradhya = Object.create(amitabh)

aradhya = new person("Aradhya",18,["CSS"],"12/20/2000")


print = function(){
    console.log(amitabh);
    console.log(abhishek.lname)
    console.log(abhishek.address)
}()




//................................................................................................................


