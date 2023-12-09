const obj = {
    name:"vishwas babar",
    age:19,
    faveLang:"java",
    printDetails:function () {
        console.log(obj);
        // console.log("function runed successfully");
    },
    "second function":function(){
        console.log("this is second function");
    }
}

// we cant do that here because dot syntax does not support spacing in it
// obj.second function();

// but we can do this 
obj["second function"];


// we can call a function from object by this syntax
obj.printDetails();

// we can find value by key name
console.log(obj["age"]); //19

//we cant to this the value of it is undefined
console.log(obj[1]); //undefined



