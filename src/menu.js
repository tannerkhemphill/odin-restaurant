import createHomePage from './home.js';
import createContactPage from './contact.js';

export default function createMenuPage() {

    const content = document.querySelector('#content')

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    };

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

    const infoHeaderContainer = document.createElement('div');
    infoHeaderContainer.id = 'info-header-container';
    const infoHeader = document.createElement('div');
    infoHeader.id = 'info-header';
    const infoTitle = document.createElement('h1');
    infoTitle.innerHTML= "Menu";
    infoHeader.appendChild(infoTitle);
    infoHeaderContainer.appendChild(infoHeader);

    information.appendChild(infoHeaderContainer);

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
    itemTitle.innerHTML = 'Item 1';
    let item = document.createElement('p');
    item.classList.add('item');
    item.innerHTML = "Description of item 1";
    infoItem.appendChild(itemTitle);
    infoItem.appendChild(item);
    infoItemContainer.appendChild(infoItem);

    information.appendChild(infoItemContainer);

    infoItemContainer = document.createElement('div');
    infoItemContainer.id = 'info-item-container';
    infoItem = document.createElement('div');
    infoItem.id = 'info-item';
    itemTitle = document.createElement('h3');
    itemTitle.innerHTML = 'Item 2';
    item = document.createElement('p');
    item.classList.add('item');
    item.innerHTML = "Description of item 2";
    infoItem.appendChild(itemTitle);
    infoItem.appendChild(item);
    infoItemContainer.appendChild(infoItem);

    information.appendChild(infoItemContainer);

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
    itemTitle.innerHTML = 'Item 3';
    item = document.createElement('p');
    item.classList.add('item');
    item.innerHTML = "Description of item 3";
    infoItem.appendChild(itemTitle);
    infoItem.appendChild(item);
    infoItemContainer.appendChild(infoItem);

    information.appendChild(infoItemContainer);

    infoItemContainer = document.createElement('div');
    infoItemContainer.id = 'info-item-container';
    infoItem = document.createElement('div');
    infoItem.id = 'info-item';
    itemTitle = document.createElement('h3');
    itemTitle.innerHTML = 'Item 4';
    item = document.createElement('p');
    item.classList.add('item');
    item.innerHTML = "Description of item 4";
    infoItem.appendChild(itemTitle);
    infoItem.appendChild(item);
    infoItemContainer.appendChild(infoItem);

    information.appendChild(infoItemContainer);

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
    itemTitle.innerHTML = 'Item 5';
    item = document.createElement('p');
    item.classList.add('item');
    item.innerHTML = "Description of item 5";
    infoItem.appendChild(itemTitle);
    infoItem.appendChild(item);
    infoItemContainer.appendChild(infoItem);

    information.appendChild(infoItemContainer);

    infoItemContainer = document.createElement('div');
    infoItemContainer.id = 'info-item-container';
    infoItem = document.createElement('div');
    infoItem.id = 'info-item';
    itemTitle = document.createElement('h3');
    itemTitle.innerHTML = 'Item 6';
    item = document.createElement('p');
    item.classList.add('item');
    item.innerHTML = "Description of item 6";
    infoItem.appendChild(itemTitle);
    infoItem.appendChild(item);
    infoItemContainer.appendChild(infoItem);

    information.appendChild(infoItemContainer);

    content.appendChild(information);

    const footer = document.createElement('div');
    footer.id = 'footer';
    footer.innerHTML = 'Restaurant';

    content.appendChild(footer);

    const home = document.querySelector('#home');
    const contact = document.querySelector('#contact');

    home.addEventListener('click', createHomePage);
    contact.addEventListener('click', createContactPage);
}