let subheading = document.getElementsByTagName("h2")[0];
subheading.addEventListener("mouseover", () => { // anonymous function
    subheading.setAttribute("class", "green");
})

subheading.addEventListener("mouseout", () => {
    subheading.removeAttribute("class");
})

let counterButton = document.getElementById("counter");
let count = 0;
counterButton.addEventListener("click", () => {
    // console.log(count);
    // document.getElementById("count").innerText = ++count;
    // console.log(count);
    let countNode = document.getElementById("count");
    let countText = countNode.innerText;
    countText++;
    countNode.innerText = countText;
})

