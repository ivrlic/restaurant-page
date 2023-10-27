import tabs from './tabs';

export const mainContainer = document.createElement('main');

// Function to show content for the selected tab
export const showMainContent = (tabId) => {
  mainContainer.innerHTML = '';
  mainContainer.appendChild(tabs[tabId].content());
}
