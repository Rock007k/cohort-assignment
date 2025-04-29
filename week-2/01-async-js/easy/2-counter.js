let count = 0;
function counter(){
    count++;
    console.log(count);
    setTimeout(counter, 1000);
}

setTimeout(counter, 1000);
console.log("Counter started!"); // This will be printed immediately

