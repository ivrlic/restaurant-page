const footer = {
    content: () => {
      const contentDiv = document.createElement('footer');
      const text = document.createElement('p');
      text.textContent = 'Made by ivrlic';
      contentDiv.appendChild(text);
      return contentDiv;
    },
}

export default footer

