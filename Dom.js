const itemListerElement = document.getElementById('header-title');
const helloText1 = document.createTextNode('HEllo');
itemListerElement.parentNode.insertBefore(helloText1, itemListerElement);

const item1Element = document.querySelector('.list-group-item');
const helloText2 = document.createTextNode('HEllo');
item1Element.parentNode.insertBefore(helloText2, item1Element);