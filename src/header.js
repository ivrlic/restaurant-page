import tabs from './tabs';
import { showMainContent } from './renderMain';

const header = {
    content: () => {
      const contentDiv = document.createElement('header');
      const container = document.createElement('div');
      container.classList.add('cont');
      const heading = document.createElement('h1');
      heading.textContent = 'Evening Secret';
      container.appendChild(heading);
      contentDiv.appendChild(container);

      // Create tabs and add event listeners
      const tabContainer = document.createElement('nav');
      tabContainer.classList.add('tab-container');

      for (const tabName in tabs) {
          const tab = document.createElement('div');
          if(tabName==='home')tab.classList.add('tab-chosen')
          tab.classList.add('tab');      
          tab.textContent = tabName.charAt(0).toUpperCase() + tabName.slice(1);
          tab.addEventListener('click', (e) => {

            for (let i=0; i < tab.parentElement.children.length; i++) {
                const checkTab = tab.parentElement.children[i]
                if(e.target.textContent === checkTab.textContent) {
                    checkTab.classList.add('tab-chosen');
                } else {
                    checkTab.classList.remove('tab-chosen')
                }
            }
            showMainContent(tabName);
          });
          tabContainer.appendChild(tab);
      }
      container.appendChild(tabContainer);      
      return contentDiv;
    },
}

export default header