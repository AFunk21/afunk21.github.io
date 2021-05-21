const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');


button.addEventListener("click", function() {
    
    let Item = input.value;
    input.value = '';

    const textList = document.createElement('span');
    const listItem = document.createElement('li');
    const buttonList = document.createElement('button');
    
    textList.textContent = Item;
    buttonList.textContent = '❌';

    listItem.append(textList);
    listItem.appendChild(buttonList);
    list.appendChild(listItem);

    buttonList.addEventListener('click', function(e) {list.removeChild(listItem);});

    input.focus();
});