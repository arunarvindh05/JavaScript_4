//*1) Object comparing 
// the object can be compared with JSON.stringify 
//but the keys and values should be in same order
var obj1={name: "Person 1",age : 5}
var obj2={age : 5,name: "Person 1"}
console.log(JSON.stringify(obj1) === JSON.stringify(obj2))//false
// Although properties of both the objects are equal, as a string they are not equal

//In order to compare the objects, the properties of objects has to be compared
var a = Object.keys(obj1).sort()
var b = Object.keys(obj2).sort()
var c=0
for(var i=0;i<a.length;i++){
    if(obj1[a[i]]===obj2[a[i]]){
        c++;
    }
}
if(c==a.length && a.length==b.length){
    console.log('Same object')
}
else{
    console.log('Different Object')
}
//This is a way of comparing objects
