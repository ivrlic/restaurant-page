const tabs = {

    home: {
      content: () => {
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('cont');
        contentDiv.classList.add('home-cont');
        contentDiv.classList.add('tab-content-cont');
        const image = document.createElement('img');
        image.src = './img/chef1.jpg';
        image.style.width = '80%';
        image.style.borderRadius = '50%'
        image.style.borderBottom = '2px solid #000'
        const description1 = document.createElement('p');
        const description2 = document.createElement('p');
        description1.textContent = "Welcome to Evening Secret, where unforgettable dining experiences await.";
        description2.textContent = "Our chef's creations are sure to tantalize your taste buds.";
        contentDiv.appendChild(description1);                
        contentDiv.appendChild(image);
        contentDiv.appendChild(description2);                
        return contentDiv;
      },
    },

    menu: {
      content: () => {
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('tab-content-cont');
        contentDiv.classList.add('menu-cont');
        const menuHeading = document.createElement('h2');
        menuHeading.textContent = 'Our Offer';
        const menuDescription = document.createElement('p');
        menuDescription.textContent = 'At Evening Secret, we pride ourselves on serving homemade dishes of exceptional quality and taste. Explore our menu and savor the flavors.';
        const menuList = document.createElement('div');
        const dishes = [
          { name: "Rice Ball", price: "9€", img: "./img/rice-ball.jpg" },
          { name: "Rice Pork", price: "11€", img: "./img/rice-pork.jpg" },
          { name: "Raw Beef", price: "13€", img: "./img/raw-beef.jpg" },
          { name: "Raw Fish", price: "9€", img: "./img/raw-fish.jpg" },
          { name: "Omelette", price: "8€", img: "./img/omelette.jpg" },
          { name: "Pizza", price: "10€", img: "./img/pizza.jpg" }
        ];
        dishes.forEach(dish => {
          const dishDiv = document.createElement('div');
          dishDiv.classList.add('dish-div')
          const dishName = document.createElement('h3');
          dishName.textContent = dish.name;
          const dishPrice = document.createElement('p');
          dishPrice.textContent = `Price: ${dish.price}`;
          const dishImage = document.createElement('img');
          dishImage.src = dish.img;
          dishImage.alt = dish.name;
          dishImage.classList.add('dish-img')
          dishDiv.appendChild(dishName);
          dishDiv.appendChild(dishPrice);
          dishDiv.appendChild(dishImage);
          menuList.appendChild(dishDiv);
        });
        contentDiv.appendChild(menuHeading);
        contentDiv.appendChild(menuDescription);
        contentDiv.appendChild(menuList);
        return contentDiv;
      },
    },

    contact: {
      content: () => {
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('tab-content-cont');
        contentDiv.classList.add('contact-cont');
        const contactInfo = document.createElement('div');
        const chefName = document.createElement('div');
        chefName.innerHTML = `
          <span><strong>Chef Marcus</strong></span>
          <i class="fa fa-address-book"></i>
        `;
        const chefAddress = document.createElement('div');
        chefAddress.innerHTML = `
          <i class="fa fa-crosshairs"></i>
          <span> Secret Alley 36, MoonStadt</span>  
        `
        'Secret Alley 36, MoonStadt';
        const chefPhone = document.createElement('div');
        chefPhone.innerHTML = `
          <i class="fa fa-phone"></i>
          <span> 00 989 11 22 33</span>  
        `;
        const chefEmail = document.createElement('div');
        chefEmail.innerHTML = `
          <i class="fa fa-envelope"></i>
          <span> 
            <a href="mailto:eveningsecret@gmail.com"> eveningsecret@gmail.com</a>
          </span>
        `;
        contactInfo.appendChild(chefName);
        contactInfo.appendChild(chefAddress);
        contactInfo.appendChild(chefPhone);
        contactInfo.appendChild(chefEmail);
        const sendInquiryButton = document.createElement('button');
        sendInquiryButton.textContent = 'Send Inquiry';
        sendInquiryButton.addEventListener('click', () => {
          // Handle sending an inquiry
            sendInquiryButton.classList.add('animate')
            setTimeout(()=>{
                sendInquiryButton.classList.remove('animate')
                window.open('mailto:eveningsecret@gmail.com');
            }, 500)
        });
        contentDiv.appendChild(contactInfo);
        contentDiv.appendChild(sendInquiryButton);
        return contentDiv;
      },
    },
};

export default tabs