//eights task
/*1*/
let element = document.getElementById('rootID')
element.classList.add('rootClass')
/*2*/
let childElements = element.children; // Получаем всех дочерних элементов с 1 уровня вложенности
const filteredChildren = Array.from(childElements)
    .filter(child => child.classList.contains('someClassName'));
console.log(filteredChildren)

/*3*/
childElements = element.querySelectorAll('.someClassName'); // Получаем всех дочерних элементов
                                                                    // со всех уровней вложенности
console.log(childElements)

/*4*/
const selectedElements = document.querySelectorAll('.someClassName[oid="newDoc"]');
console.log(selectedElements)

/*5*/

const lastChildElement = childElements[childElements.length - 1];
const paragraph = lastChildElement.querySelector('p');
paragraph.textContent = "Последняя строка";