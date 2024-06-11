let p = document.getElementById("p");
let b = document.getElementById("b");
let i = document.getElementById("i");
let c = document.getElementById("c");
let m = document.getElementById("m");
let area = document.getElementById("area");





let name = "pizza";

p.addEventListener("click", function() {
    area.innerText = "Waiting...";
    let time = Math.random() > 0.55;
    let pizza = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time) {
                resolve(`${name}` + " is avilable...😃");
            } else {
                reject(`${name}` + "  is not available...😒");
            }
        }, 3000);




    })
    pizza
        .then((res) => {
            console.log(res);
            area.innerText = res
        })
        .catch((error) => {
            console.log(error);
            area.innerText = error
        });

});


let name1 = "Burger";

b.addEventListener("click", function() {
    area.innerText = "Waiting...";
    let time = Math.random() > 0.55;
    let pizza = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time) {
                resolve(`${name1}` + " is avilable...😃");
            } else {
                reject(`${name1}` + "  is not available...😒");
            }
        }, 3000);




    })
    pizza
        .then((res) => {
            console.log(res);
            area.innerText = res
        })
        .catch((error) => {
            console.log(error);
            area.innerText = error
        });

});


let name2 = "Icecreame";

i.addEventListener("click", function() {
    area.innerText = "Waiting...";
    let time = Math.random() > 0.55;
    let pizza = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time) {
                resolve(`${name2}` + " is avilable...😃");
            } else {
                reject(`${name2}` + "  is not available...😒");
            }
        }, 3000);




    })
    pizza
        .then((res) => {
            console.log(res);
            area.innerText = res
        })
        .catch((error) => {
            console.log(error);
            area.innerText = error
        });

});

let name3 = "Chicken";

c.addEventListener("click", function() {
    area.innerText = "Waiting...";
    let time = Math.random() > 0.55;
    let pizza = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time) {
                resolve(`${name3}` + " is avilable...😃");
            } else {
                reject(`${name3}` + "  is not available...😒");
            }
        }, 3000);




    })
    pizza
        .then((res) => {
            console.log(res);
            area.innerText = res
        })
        .catch((error) => {
            console.log(error);
            area.innerText = error
        });

});


let name4 = "Mutton";

m.addEventListener("click", function() {
    area.innerText = "Waiting...";
    let time = Math.random() > 0.55;
    let pizza = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time) {
                resolve(`${name4}` + " is avilable...😃");
            } else {
                reject(`${name4}` + "  is not available...😒");
            }
        }, 3000);




    })
    pizza
        .then((res) => {
            console.log(res);
            area.innerText = res
        })
        .catch((error) => {
            console.log(error);
            area.innerText = error
        });

});