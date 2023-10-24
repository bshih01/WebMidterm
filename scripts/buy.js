var buy = [
        {
            src: '../media/buy/b1.jpg',
            desc: 'Classic light grey couch',
            price: 90,
            contact: '1(302)-456-7390'
            
        },
        {
            src: '../media/buy/b2.jpg',
            desc: 'Soft, very clean teal couch',
            price: 95,
            contact: '1(302)-125-6735'
            
        },
        {
            src: '../media/buy/b3.jpg',
            desc: 'Modern olive green bean shaped couch',
            price: 110,
            contact: '@john_bowery'
       },
        {
            src: '../media/buy/b4.jpg',
            desc: 'Delicate oak tree bed-side lamp',
            price: 25,
            contact: 'izzy.potter@gmail.com'
            
        },
        {
            src: '../media/buy/b5.jpg',
            desc: 'Classic marble print bed-side lamp',
            price: 25,
            contact: '@este_123'
            
        },
        {
            src: '../media/buy/b6.jpg',
            desc: 'Sun and moon bed-side lamp',
            price: 25,
            contact:'1(302)-472-8792'
        },
        {
            src: '../media/buy/b7.jpg',
            desc: 'White, circular, soft, fury rug',
            price: 45,
            contact: '1(323)-863-2349'
            
        },
        {
            src: '../media/buy/b8.jpg',
            desc: 'Fun egg rug',
            price: 30,
            contact: '1(781)-423-8763'
            
        },
        {
            src: '../media/buy/b9.jpg',
            desc: 'Classic dark grey fury rug',
            price: 40,
            contact: 'jakedonnovan@gmail.com'
            
        },
        {
            src: '../media/buy/b10.jpg',
            desc: 'Wavy stand floor lamp',
            price: 55,
            contact: 'jennygreen@gmail.com'
            
        },
        {
            src: '../media/buy/b11.jpg',
            desc: 'Vintage floor lamp',
            price: 70,
            contact: '1(781)-465-8762'
            
        },
        {
            src: '../media/buy/b12.jpg',
            desc: 'Hanging lamp shade floor lamp',
            price: 65,
            contact: '1(781)-421-6780'
            
        },
        {
            src: '../media/buy/b13.jpg',
            desc: 'Modern beige bed-side table',
            price: 45,
            contact: '@buymyfurnitureplease'
        },
        {
            src: '../media/buy/b14.jpg',
            desc: 'Minimalist white, light wood bed-side table',
            price: 40,
            contact: '@123letsgo'
            
        },
        {
            src: '../media/buy/b15.jpg',
            desc: 'Dark wood geometric bed-side table',
            price: 45,
            contact: 'richard@gmail.com'    
        }
    ];
    
    document.addEventListener('DOMContentLoaded', () => {
        const listingsContainer = document.querySelector('.available-furniture');

        function addAvailableFurniture(image, description, price, contact) {
            console.log(contact);
            const furniture = document.createElement("div");
            furniture.classList.add("furniture");

            const img = document.createElement("img");
            img.src = image;
            furniture.appendChild(img);

            const descript = document.createElement('p');
            descript.innerHTML = `<div class="furniture-text">${description}</div>`;
            furniture.appendChild(descript);

            const cost = document.createElement("p");
            cost.innerHTML = `<strong>Cost: </strong><div class="furniture-text">${price}</div>`;
            furniture.appendChild(cost);

            const contactinfo = document.createElement("p");
            contactinfo.innerHTML = `<strong>Contact: </strong><div class="furniture-text">${contact}</div>`;
            furniture.appendChild(contactinfo);
            
            listingsContainer.appendChild(furniture);
        }

        for (const item of buy) {
            addAvailableFurniture(item.src, item.desc, item.price, item.contact);
        }
    });
    
    