// This file contains the DOM maniplation to display the home page of a restaurant webpage

import createMenuPage from './menu.js';
import createContactPage from './contact.js';
import Bricks from './bricks.png';

// Function to create and display the home page
export default function createHomePage() {

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

    // The following code displays the description box information
    const information = document.createElement('div');
    information.id = 'information';

    const infoHeaderContainer = document.createElement('div');
    infoHeaderContainer.id = 'info-header-container';
    const infoHeader = document.createElement('div');
    infoHeader.id = 'info-header';
    const infoTitle = document.createElement('h1');
    infoTitle.innerHTML = "Mario Bros Pizzeria";
    infoHeader.appendChild(infoTitle);
    infoHeaderContainer.appendChild(infoHeader);

    information.appendChild(infoHeaderContainer);

    const infoDescContainer = document.createElement('div');
    infoDescContainer.id = 'info-desc-container';
    const infoDesc = document.createElement('div');
    infoDesc.id = 'info-desc';
    const descTitle = document.createElement('h3');
    descTitle.innerHTML = 'Description';
    const desc = document.createElement('p');
    desc.classList.add('desc');
    desc.innerHTML = "Mario Bros has the best pizza in the Mushroom Kingdom! The atmosphere and customer service make you feel like you are sitting in the middle of Italy! This is exactly the kind of place that I like to return to again and again.";
    const customer = document.createElement('p');
    customer.classList.add('customer');
    customer.innerHTML = 'Toad'
    infoDesc.appendChild(descTitle);
    infoDesc.appendChild(desc);
    infoDesc.appendChild(customer);
    infoDescContainer.appendChild(infoDesc);

    information.appendChild(infoDescContainer);

    // The following code displays the hours box information
    const infoHoursContainer = document.createElement('div');
    infoHoursContainer.id = 'info-hours-container';
    const infoHours = document.createElement('div');
    infoHours.id = 'info-hours';
    const hoursTitle = document.createElement('h3');
    hoursTitle.innerHTML = 'Hours';
    const hours = document.createElement('ul');
    const hour1 = document.createElement('li');
    hour1.innerHTML = 'Sunday: 9am - 5pm';
    const hour2 = document.createElement('li');
    hour2.innerHTML = 'Monday: 8am - 8pm';
    const hour3 = document.createElement('li');
    hour3.innerHTML = 'Tuesday: 8am - 8pm';
    const hour4 = document.createElement('li');
    hour4.innerHTML = 'Wednesday: 8am - 8pm';
    const hour5 = document.createElement('li');
    hour5.innerHTML = 'Thursday: 8am - 8pm';
    const hour6 = document.createElement('li');
    hour6.innerHTML = 'Friday: 8am - 10pm';
    const hour7 = document.createElement('li');
    hour7.innerHTML = 'Saturday: 9am - 10pm';
    hours.appendChild(hour1);
    hours.appendChild(hour2);
    hours.appendChild(hour3);
    hours.appendChild(hour4);
    hours.appendChild(hour5);
    hours.appendChild(hour6);
    hours.appendChild(hour7);
    infoHours.appendChild(hoursTitle);
    infoHours.appendChild(hours);
    infoHoursContainer.appendChild(infoHours);

    information.appendChild(infoHoursContainer);

    // The following code displays the location box information
    const infoLocContainer = document.createElement('div');
    infoLocContainer.id = 'info-location-container';
    const infoLoc = document.createElement('div');
    infoLoc.id = 'info-location';
    const locTitle = document.createElement('h3');
    locTitle.innerHTML = 'Location';
    const loc = document.createElement('p');
    loc.innerHTML = '123 Koopa Way, Toad Town, Mushroom Kingdom';
    infoLoc.appendChild(locTitle);
    infoLoc.appendChild(loc);
    infoLocContainer.appendChild(infoLoc);

    information.appendChild(infoLocContainer);

    content.appendChild(information);

    // Display footer at bottom of page
    const footer = document.createElement('div');
    footer.id = 'footer';
    footer.innerHTML = 'Characters owned by Nintendo';

    content.appendChild(footer);

    const menu = document.querySelector('#menu');
    const contact = document.querySelector('#contact');

    // Add event listeners to navigation tab buttons
    menu.addEventListener('click', createMenuPage);
    contact.addEventListener('click', createContactPage);
}