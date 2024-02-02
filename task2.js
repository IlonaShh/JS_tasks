// Простилізуйте елементи як показано на картинці task2.png
// Застосування стилів запишіть у функції applyStyles
// Для перевірки завдання введіть команду npx jest task2.test.js


 function applyStyles() {
    
    const styledElement = document.getElementById('title');
    const myDiv = document.getElementById("myDiv");;
    const myList = document.getElementById("myList");
    const span =  document.getElementsByTagName("span");

    styledElement.style.backgroundColor = 'lightgreen';
    myDiv.children[0].style.fontWeight = '700'; 
    myDiv.children[1].style.color = 'red';     
    myDiv.children[2].style.textDecoration = 'underline'; 
    myDiv.children[3].style.fontStyle = 'italic';
    myList.style.listStyle = 'none';
    myList.style.display = 'flex';
    span[0].style.display = 'none';
}

 module.exports = applyStyles;
