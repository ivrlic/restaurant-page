import header from './header';
import { mainContainer, showMainContent } from './renderMain';
import footer from './footer'

const allContent = document.getElementById('content');
// const mainContainer = document.createElement('main');

// // Function to show content for the selected tab
// const showMainContent = (tabId) => {
//   mainContainer.innerHTML = '';
//   mainContainer.appendChild(tabs[tabId].content());
// }
  
document.addEventListener('DOMContentLoaded', ()=>{
    allContent.appendChild(header.content());
    allContent.append(mainContainer)
    allContent.appendChild(footer.content())

    // Initialize with the "Home" tab
    showMainContent('home');
})