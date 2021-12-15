import createHomePage from './home.js';
import createMenuPage from './menu.js';
import Bricks from './bricks.png';
import Mario from './mario.png';
import Luigi from './luigi.png';
import Peach from './princess.png';

export default function createContactPage() {

    const content = document.querySelector('#content')
    const Background = new Image();
    Background.src = Bricks;

    content.appendChild(Background);

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
    infoTitle.innerHTML= "Contact Us";
    infoHeader.appendChild(infoTitle);
    infoHeaderContainer.appendChild(infoHeader);

    information.appendChild(infoHeaderContainer);

    let infoContactContainer = document.createElement('div');
    infoContactContainer.id = 'info-contact-container';
    let infoContact = document.createElement('div');
    infoContact.id = 'info-contact';
    let contactTitle = document.createElement('h3');
    contactTitle.innerHTML = 'Mario';
    let position = document.createElement('p');
    let phone = document.createElement('p');
    let email = document.createElement('p');
    position.innerHTML = "Owner/Waiter";
    phone.innerHTML = "555-555-5555";
    email.innerHTML = "Mario@MarioBros.com";
    let pictureBox = document.createElement('div');
    pictureBox.classList.add('picture-box');
    let picture = new Image();
    picture.src = Mario;
    pictureBox.appendChild(picture);
    infoContact.appendChild(contactTitle);
    infoContact.appendChild(position);
    infoContact.appendChild(phone);
    infoContact.appendChild(email);
    infoContactContainer.appendChild(infoContact);
    infoContactContainer.appendChild(pictureBox);

    information.appendChild(infoContactContainer);

    infoContactContainer = document.createElement('div');
    infoContactContainer.id = 'info-contact-container';
    infoContact = document.createElement('div');
    infoContact.id = 'info-contact';
    contactTitle = document.createElement('h3');
    contactTitle.innerHTML = 'Luigi';
    position = document.createElement('p');
    phone = document.createElement('p');
    email = document.createElement('p');
    position.innerHTML = "Owner/Waiter";
    phone.innerHTML = "555-555-5556";
    email.innerHTML = "Luigi@MarioBros.com";
    pictureBox = document.createElement('div');
    pictureBox.classList.add('picture-box');
    picture = new Image();
    picture.src = Luigi;
    pictureBox.appendChild(picture);
    infoContact.appendChild(contactTitle);
    infoContact.appendChild(position);
    infoContact.appendChild(phone);
    infoContact.appendChild(email);
    infoContactContainer.appendChild(infoContact);
    infoContactContainer.appendChild(pictureBox);

    information.appendChild(infoContactContainer);

    infoContactContainer = document.createElement('div');
    infoContactContainer.id = 'info-contact-container';
    infoContact = document.createElement('div');
    infoContact.id = 'info-contact';
    contactTitle = document.createElement('h3');
    contactTitle.innerHTML = 'Peach';
    position = document.createElement('p');
    phone = document.createElement('p');
    email = document.createElement('p');
    position.innerHTML = "Chef/Manager";
    phone.innerHTML = "555-555-5557";
    email.innerHTML = "Peach@MarioBros.com";
    pictureBox = document.createElement('div');
    pictureBox.classList.add('picture-box');
    picture = new Image();
    picture.src = Peach;
    pictureBox.appendChild(picture);
    infoContact.appendChild(contactTitle);
    infoContact.appendChild(position);
    infoContact.appendChild(phone);
    infoContact.appendChild(email);
    infoContactContainer.appendChild(infoContact);
    infoContactContainer.appendChild(pictureBox);

    information.appendChild(infoContactContainer);

    content.appendChild(information);

    const footer = document.createElement('div');
    footer.id = 'footer';
    footer.innerHTML = 'Characters owned by Nintendo';

    content.appendChild(footer);

    const home = document.querySelector('#home');
    const menu = document.querySelector('#menu');
    
    home.addEventListener('click', createHomePage);
    menu.addEventListener('click', createMenuPage);
}