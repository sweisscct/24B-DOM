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

// When the user click the add item button. we want to add the item to the end of the list
// - click event listener
// - find the input node
// - access the text
// - create a list item
// - assign the text to the list item
// - put the new li at the end of the ul
//     - find the ul node
//     - append li as a child

document.getElementById("add-item-button").addEventListener("click", () => {
    let newItemInput = document.getElementById("new-item");
    // newItemInput.innerText
    let newItem = document.createElement("li");
    console.log(newItemInput.value);
    newItem.innerText = newItemInput.value;
    newItem.addEventListener("click", () => {
        newItem.remove();
    })
    newItemInput.value = "";
    document.getElementById("grocery-list").appendChild(newItem);
})

/*
    Exercise
    When we click on an item, it gets removed from the list
*/

let listItems = document.getElementsByTagName("li");
for (let i=0; i<listItems.length; i++) {

    let item = listItems[i];
    item.addEventListener("click", () => {
        item.remove();
    })

    // listItems[i].addEventListener("click", () => {
    //     listItems[i].remove();
    // })
}

