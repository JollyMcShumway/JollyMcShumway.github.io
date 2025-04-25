let itemOne = document.getElementById('first-project');
let itemTwo = document.getElementById('first-project-image');
let itemThree = document.getElementById('second-project');
let itemFour = document.getElementById('second-project-image');
let itemFive = document.getElementById('third-project');
let itemSix = document.getElementById('third-project-image');

function toggleItem(imgElement) {
    if (imgElement.style.display === 'block') {
        imgElement.style.display = 'none';
    } else {
        imgElement.style.display = 'block';
    }
}

itemOne.addEventListener('mousedown', () => toggleItem(itemTwo));
itemThree.addEventListener('mousedown', () => toggleItem(itemFour));
itemFive.addEventListener('mousedown', () => toggleItem(itemSix));