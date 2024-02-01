const container = document.querySelector('.container');

const content = document.createElement('div');

content.classList.add('content');

content.textContent = 'This is just to show basic DOM manipulation';

content.setAttribute('style','color: blue; background:white; fontSize:large;');

container.appendChild(content);
