
// Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
// 
//   <main class="mainClass check item">         
//      <div id="myDiv">
//          <p>First paragraph</p>           
//      </div>
//  </main> 
// 
// Цю розмітку потрібно вставити у існуючий html елемент із класом "create_elements"

// Виконання записувати у функцію applyStyles()
// Щоб перевірити правильність виконання введіть команду: npx jest task3.test.js



function applyStyles() {
    const mainElement = document.createElement('main');
    mainElement.className = 'mainClass check item';

    const divElement = document.createElement('div');
    divElement.id = 'myDiv';

    const paragraphElement = document.createElement('p');
    paragraphElement.textContent = 'First paragraph';

    divElement.appendChild(paragraphElement);
    mainElement.appendChild(divElement);

    const createElementsContainer = document.querySelector('.create_elements');

    createElementsContainer.appendChild(mainElement);
}


//module.exports = applyStyles;
