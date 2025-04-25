function counter(){
    let count = 0;
    console.log("Counter started");
    setInterval(() => {
        count ++;
        console.log(count);
    }, 1000);
}

counter();