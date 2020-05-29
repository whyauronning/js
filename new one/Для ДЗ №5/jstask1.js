let menu = document.getElementsByClassName('menu')[0],
    title = document.getElementById('title'),
    clmn = document.getElementsByClassName('column'),
    adv = document.getElementsByClassName('adv')[0],
    promptForApple = document.querySelector('#prompt'),
    menuItemLi = document.createElement('li'),
    menuItem = document.getElementsByClassName('menu-item');

    menu.insertBefore(menuItem[2], menuItem[1]);
    menuItemLi.classList.add('menu-item');    // добавляем новый li с классом:
    menuItemLi.textContent('Пятый Элемент');
    menu.appendChild(menuItemLi);   
    
    document.body.style.backgroundImage = "url('img/apple_true.jpg')";

    title.textContent = "Мы продаём только подлинную технику Apple";

    adv.remove();

    let urOpinion = prompt("Как вы относитесь к технике Apple?");
        promptForApple.textContent = urOpinion;

    