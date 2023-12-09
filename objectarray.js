const arr = [
    {name:"vishwas babar", rollNo:3, coder:true},
    {name:"satish gole", rollNo:5, coder:false},
    {name:"vishal babar", rollNo:10, coder:true},
    {name:"ganesh bhapkar", rollNo:12, coder:false},
    {name:"dinesh arekar", rollNo:15, coder:true}
];

// arr.forEach(element => {
//     console.log(element.name);
//     console.log(element.rollNo);
//     console.log(element.coder);
// });


let findName = "SATISH gole";

arr.forEach(element => {
    if (element.name === findName.toLowerCase()) {
        console.log("name " + element.name + " exist in this array of object");

        if (element.coder) {
            console.log("& " + element.name + " also is a coder");
        }else{
            console.log("& " + element.name + " is not a coder");
        }
    }
});


// only print a names whose name is starting with v
arr.forEach(element => {
    if (element.name[0] === 'v') {
        console.log(element);
    }
});