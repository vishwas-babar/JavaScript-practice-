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