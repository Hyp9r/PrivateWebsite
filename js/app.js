var name = "Tomislav";

(function greetings(name){
    console.log("Hello " + name);
})(name);

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
array.filter((index, value, array) => {
    if(value % 2 == 0){
        console.log(value + " is: even number");
    }
});

array.push(10);