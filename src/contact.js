import createHomePage from './home.js';
import createMenuPage from './menu.js';

export default function createContactPage() {

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
    infoTitle.innerHTML= "Contact Us";
    infoHeader.appendChild(infoTitle);
    infoHeaderContainer.appendChild(infoHeader);

    information.appendChild(infoHeaderContainer);

    let infoContactContainer = document.createElement('div');
    infoContactContainer.id = 'info-contact-container';
    let infoContact = document.createElement('div');
    infoContact.id = 'info-contact';
    let contactTitle = document.createElement('h3');
    contactTitle.innerHTML = 'Contact 1';
    let contact = document.createElement('p');
    contact.classList.add('contact');
    contact.innerHTML = "Contact 1 info goes here";
    infoContact.appendChild(contactTitle);
    infoContact.appendChild(contact);
    infoContactContainer.appendChild(infoContact);

    information.appendChild(infoContactContainer);

    infoContactContainer = document.createElement('div');
    infoContactContainer.id = 'info-contact-container';
    infoContact = document.createElement('div');
    infoContact.id = 'info-contact';
    contactTitle = document.createElement('h3');
    contactTitle.innerHTML = 'Contact 2';
    contact = document.createElement('p');
    contact.classList.add('contact');
    contact.innerHTML = "Contact 2 info goes here";
    infoContact.appendChild(contactTitle);
    infoContact.appendChild(contact);
    infoContactContainer.appendChild(infoContact);

    information.appendChild(infoContactContainer);

    infoContactContainer = document.createElement('div');
    infoContactContainer.id = 'info-contact-container';
    infoContact = document.createElement('div');
    infoContact.id = 'info-contact';
    contactTitle = document.createElement('h3');
    contactTitle.innerHTML = 'Contact 3';
    contact = document.createElement('p');
    contact.classList.add('contact');
    contact.innerHTML = "Contact 3 info goes here";
    infoContact.appendChild(contactTitle);
    infoContact.appendChild(contact);
    infoContactContainer.appendChild(infoContact);

    information.appendChild(infoContactContainer);

    content.appendChild(information);

    const footer = document.createElement('div');
    footer.id = 'footer';
    footer.innerHTML = 'Restaurant';

    content.appendChild(footer);

    const home = document.querySelector('#home');
    const menu = document.querySelector('#menu');
    
    home.addEventListener('click', createHomePage);
    menu.addEventListener('click', createMenuPage);
}