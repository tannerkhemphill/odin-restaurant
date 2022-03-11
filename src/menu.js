// This file contains the DOM maniplation to display the menu page of a restaurant webpage

import createHomePage from './home.js';
import createContactPage from './contact.js';
import Bricks from './bricks.png';
import Tea from './tea.png';
import Juice from './juice.png';
import Salad from './salad.png';
import Breadsticks from './breadsticks.png';
import Mushroom from './mushroom.png';
import Thin from './thin.png';

// Function to create and display the menu page
export default function createMenuPage() {

    const content = document.querySelector('#content')
    const Background = new Image();
    Background.src = Bricks;

    content.appendChild(Background);

    // Remove contents of previously displayed page
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    };

    // Display header containing tabs to navigate to each page
    const header = document.createElement('div');
    header.id = 'header';
    const tabs = document.createElement('ul');
    tabs.id = 'tab-list';
    const tab1 = document.createElement('li');
    tab1.id = 'home';
    tab1.classList.add('tab');
    tab1.innerHTML = 'Home';
    const tab2 = document.createElement('li');
    tab2.id = 'menu';
    tab2.classList.add('tab');
    tab2.innerHTML= 'Menu';
    const tab3 = document.createElement('li');
    tab3.id = 'contact';
    tab3.classList.add('tab');
    tab3.innerHTML = 'Contact';
    tabs.appendChild(tab1);
    tabs.appendChild(tab2);
    tabs.appendChild(tab3);
    header.appendChild(tabs);

    content.appendChild(header);

    const information = document.createElement('div');
    information.id = 'information';

    // The following code displays the menu header
    const infoHeaderContainer = document.createElement('div');
    infoHeaderContainer.id = 'info-header-container';
    const infoHeader = document.createElement('div');
    infoHeader.id = 'info-header';
    const infoTitle = document.createElement('h1');
    infoTitle.innerHTML= "Menu";
    infoHeader.appendChild(infoTitle);
    infoHeaderContainer.appendChild(infoHeader);

    information.appendChild(infoHeaderContainer);

    // The following code displays the drinks menu header and options
    let infoSubHeaderContainer = document.createElement('div');
    infoSubHeaderContainer.id = 'info-subheader-container';
    let infoSubHeader = document.createElement('div');
    infoSubHeader.id = 'info-subheader';
    let infoSubTitle = document.createElement('h2');
    infoSubTitle.innerHTML = "Drinks";
    infoSubHeader.appendChild(infoSubTitle);
    infoSubHeaderContainer.appendChild(infoSubHeader);

    information.appendChild(infoSubHeaderContainer);

    let infoItemContainer = document.createElement('div');
    infoItemContainer.id = 'info-item-container';
    let infoItem = document.createElement('div');
    infoItem.id = 'info-item';
    let itemTitle = document.createElement('h3');
    itemTitle.innerHTML = 'Koopa Tea';
    let item = document.createElement('p');
    item.classList.add('item');
    item.innerHTML = "Warm tea brewed with koopa leaf. Restores 10 HP";
    let price = document.createElement('p');
    price.classList.add('price');
    price.innerHTML = "1 Coin";
    let pictureContainer = document.createElement('div');
    pictureContainer.classList.add('picture-container');
    let pictureBox = document.createElement('div');
    pictureBox.classList.add('picture-box');
    let picture = new Image();
    picture.src = Tea;
    pictureBox.appendChild(picture);
    pictureContainer.appendChild(pictureBox);
    infoItem.appendChild(itemTitle);
    infoItem.appendChild(item);
    infoItem.appendChild(price);
    infoItem.appendChild(pictureContainer);
    infoItemContainer.appendChild(infoItem);

    information.appendChild(infoItemContainer);

    infoItemContainer = document.createElement('div');
    infoItemContainer.id = 'info-item-container';
    infoItem = document.createElement('div');
    infoItem.id = 'info-item';
    itemTitle = document.createElement('h3');
    itemTitle.innerHTML = 'Peach Juice';
    item = document.createElement('p');
    item.classList.add('item');
    item.innerHTML = "Fresh squeezed from a peachy peach. Restores 20 HP and cures poison";
    price = document.createElement('p');
    price.classList.add('price');
    price.innerHTML = "3 Coins";
    pictureContainer = document.createElement('div');
    pictureContainer.classList.add('picture-container');
    pictureBox = document.createElement('div');
    pictureBox.classList.add('picture-box');
    picture = new Image();
    picture.src = Juice;
    pictureBox.appendChild(picture);
    pictureContainer.appendChild(pictureBox);
    infoItem.appendChild(itemTitle);
    infoItem.appendChild(item);
    infoItem.appendChild(price);
    infoItem.appendChild(pictureContainer);
    infoItemContainer.appendChild(infoItem);

    information.appendChild(infoItemContainer);

    // The following code displays the sides menu header and options
    infoSubHeaderContainer = document.createElement('div');
    infoSubHeaderContainer.id = 'info-subheader-container';
    infoSubHeader = document.createElement('div');
    infoSubHeader.id = 'info-subheader';
    infoSubTitle = document.createElement('h2');
    infoSubTitle.innerHTML = "Sides";
    infoSubHeader.appendChild(infoSubTitle);
    infoSubHeaderContainer.appendChild(infoSubHeader);

    information.appendChild(infoSubHeaderContainer);

    infoItemContainer = document.createElement('div');
    infoItemContainer.id = 'info-item-container';
    infoItem = document.createElement('div');
    infoItem.id = 'info-item';
    itemTitle = document.createElement('h3');
    itemTitle.innerHTML = 'Shy Guy Salad';
    item = document.createElement('p');
    item.classList.add('item');
    item.innerHTML = "Caesar Salad served with dressing and olives";
    price = document.createElement('p');
    price.classList.add('price');
    price.innerHTML = "5 Coins";
    pictureContainer = document.createElement('div');
    pictureContainer.classList.add('picture-container');
    pictureBox = document.createElement('div');
    pictureBox.classList.add('picture-box');
    picture = new Image();
    picture.src = Salad;
    pictureBox.appendChild(picture);
    pictureContainer.appendChild(pictureBox);
    infoItem.appendChild(itemTitle);
    infoItem.appendChild(item);
    infoItem.appendChild(price);
    infoItem.appendChild(pictureContainer);
    infoItemContainer.appendChild(infoItem);

    information.appendChild(infoItemContainer);

    infoItemContainer = document.createElement('div');
    infoItemContainer.id = 'info-item-container';
    infoItem = document.createElement('div');
    infoItem.id = 'info-item';
    itemTitle = document.createElement('h3');
    itemTitle.innerHTML = 'Bomb-omb Breadsticks';
    item = document.createElement('p');
    item.classList.add('item');
    item.innerHTML = "Seasoned garlic breadsticks served with dipping sauce";
    price = document.createElement('p');
    price.classList.add('price');
    price.innerHTML = "7 Coins";
    pictureContainer = document.createElement('div');
    pictureContainer.classList.add('picture-container');
    pictureBox = document.createElement('div');
    pictureBox.classList.add('picture-box');
    picture = new Image();
    picture.src = Breadsticks;
    pictureBox.appendChild(picture);
    pictureContainer.appendChild(pictureBox);
    infoItem.appendChild(itemTitle);
    infoItem.appendChild(item);
    infoItem.appendChild(price);
    infoItem.appendChild(pictureContainer);
    infoItemContainer.appendChild(infoItem);

    information.appendChild(infoItemContainer);

    // The following code displays the sides menu header and options
    infoSubHeaderContainer = document.createElement('div');
    infoSubHeaderContainer.id = 'info-subheader-container';
    infoSubHeader = document.createElement('div');
    infoSubHeader.id = 'info-subheader';
    infoSubTitle = document.createElement('h2');
    infoSubTitle.innerHTML = "Entrees";
    infoSubHeader.appendChild(infoSubTitle);
    infoSubHeaderContainer.appendChild(infoSubHeader);

    information.appendChild(infoSubHeaderContainer);

    infoItemContainer = document.createElement('div');
    infoItemContainer.id = 'info-item-container';
    infoItem = document.createElement('div');
    infoItem.id = 'info-item';
    itemTitle = document.createElement('h3');
    itemTitle.innerHTML = 'Mushroom Pizza';
    item = document.createElement('p');
    item.classList.add('item');
    item.innerHTML = "Classic Mario Bros pizza with toadstool mushroom topping";
    price = document.createElement('p');
    price.classList.add('price');
    price.innerHTML = "10 Coins";
    pictureContainer = document.createElement('div');
    pictureContainer.classList.add('picture-container');
    pictureBox = document.createElement('div');
    pictureBox.classList.add('picture-box');
    picture = new Image();
    picture.src = Mushroom;
    pictureBox.appendChild(picture);
    pictureContainer.appendChild(pictureBox);
    infoItem.appendChild(itemTitle);
    infoItem.appendChild(item);
    infoItem.appendChild(price);
    infoItem.appendChild(pictureContainer);
    infoItemContainer.appendChild(infoItem);

    information.appendChild(infoItemContainer);

    infoItemContainer = document.createElement('div');
    infoItemContainer.id = 'info-item-container';
    infoItem = document.createElement('div');
    infoItem.id = 'info-item';
    itemTitle = document.createElement('h3');
    itemTitle.innerHTML = 'Hammer Bros Pizza';
    item = document.createElement('p');
    item.classList.add('item');
    item.innerHTML = "Thin New Donk City style pizza prepared by the Hammer Bros";
    price = document.createElement('p');
    price.classList.add('price');
    price.innerHTML = "10 Coins";
    pictureContainer = document.createElement('div');
    pictureContainer.classList.add('picture-container');
    pictureBox = document.createElement('div');
    pictureBox.classList.add('picture-box');
    picture = new Image();
    picture.src = Thin;
    pictureBox.appendChild(picture);
    pictureContainer.appendChild(pictureBox);
    infoItem.appendChild(itemTitle);
    infoItem.appendChild(item);
    infoItem.appendChild(price);
    infoItem.appendChild(pictureContainer);
    infoItemContainer.appendChild(infoItem);

    information.appendChild(infoItemContainer);

    content.appendChild(information);

    // Display footer at bottom of page
    const footer = document.createElement('div');
    footer.id = 'footer';
    footer.innerHTML = 'Characters owned by Nintendo';

    content.appendChild(footer);

    const home = document.querySelector('#home');
    const contact = document.querySelector('#contact');

    // Add event listeners to navigation tab buttons
    home.addEventListener('click', createHomePage);
    contact.addEventListener('click', createContactPage);
}