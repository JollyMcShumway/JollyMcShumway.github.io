let itemOne = document.getElementById('first-project');
let itemTwo = document.getElementById('first-project-image');
let itemThree = document.getElementById('second-project');
let itemFour = document.getElementById('second-project-image');
let itemFive = document.getElementById('third-project');
let itemSix = document.getElementById(' third-project-image');

function showItem() {
    itemTwo.style.display = 'block';
}
itemOne.addEventListener('mousedown', showItem);

function showItemTwo() {
    itemFour.style.display = 'block';
}
itemThree.addEventListener('mousedown', showItemTwo);

function showItemThree() {
    itemSix.style.display = 'block';
}
itemFive.addEventListener('mousedown', showItemThree);