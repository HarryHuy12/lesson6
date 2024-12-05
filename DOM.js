const sample = document.querySelector(".sample");
console.log(sample);
sample.innerHTML = "<h1>Hello</h1>"

let h2 = document.createElement("h2")
h2.innerHTML = "Create element";
h2.style.color = "red";
sample.appendChild(h2);

// Bài 2
let p = document.createElement("p")
p.innerHTML = "Hi my name is Huy. I am 15 years old and i'm studying at Nguyen Thi Minh Khai high school.";
p.style.backgroundColor = "green";
sample.appendChild(p);

//Bai 1
const form = document.getElementById('form1');
const firstName = form.elements['fname'].value;
const lastName = form.elements['lname'].value;
console.log(firstName);
console.log(lastName);