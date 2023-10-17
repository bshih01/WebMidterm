var rooms = [
    {
        src: '../media/rooms/r1.jpg',
        desc: 'Very clean white room with fresh scent.',
        roommates: ['Janet', 'Sarah', 'Mafeese'],
        cost: 1100,
        date: 'May to September'
    },
    {
        src: '../media/rooms/r2.jpg',
        desc: 'Wooden cabin vibe by the forest.',
        roommates: ['Tom', 'Raphael'],
        cost: 700,
        date: 'May to September'
    },
    {
        src: '../media/rooms/r3.jpg',
        desc: 'This room is like a fancy white castle. Live the life of royalty',
        roommates: ['Princess Diane'],
        cost: 2000,
        date: 'June to September'
    },
    {
        src: '../media/rooms/r4.jpg',
        desc: 'Crisp AC in this room. Clean deskspace and good sunlight.',
        roommates: ['Sherry'],
        cost: 1200,
        date: 'May to September'
    },
    {
        src: '../media/rooms/r5.jpg',
        desc: 'Skyscraper room. Wonderful view of the city of Boston.',
        roommates: ['Perry', 'Dahplatapus'],
        cost: 1800,
        date: 'June to September'
    },
    {
        src: '../media/rooms/r6.jpg',
        desc: 'Nice spacious room. Great for couples.',
        roommates: ['Jadasha', 'Harris'],
        cost: 1300,
        date: 'May to September'
    },
    {
        src: '../media/rooms/r7.jpg',
        desc: 'Futuristic lights pre-installed to give a really nice feel.',
        roommates: ['Mark', 'Sheldon', 'Noah', 'Milod'],
        cost: 1500,
        date: 'June to September'
    },
    {
        src: '../media/rooms/r8.jpg',
        desc: 'Cozy glow of warm light surrounding all of the room. Welcome!',
        roommates: ['Stella', 'Favion'],
        cost: 1400,
        date: 'May to August'
    },
    {
        src: '../media/rooms/r9.jpg',
        desc: 'I love the vibes of this room. I hope you do too.',
        roommates: ['Datkoolkid'],
        cost: 1400,
        date: 'May to September'
    },
    {
        src: '../media/rooms/r10.jpg',
        desc: 'Natural cozy warmth is all you will feel in this room.',
        roommates: ['Rylee', 'Brandon'],
        cost: 1000,
        date: 'June to September'
    },
    {
        src: '../media/rooms/r11.jpg',
        desc: 'Honestly, I just love trees so much, and you should too. Com elive here',
        roommates: ['Luv', 'Yosista', 'Elizabeth'],
        cost: 900,
        date: 'March to July'
    },
    {
        src: '../media/rooms/r12.jpg',
        desc: 'For all of you astrophysics majors out there, this is the room.',
        roommates: ['Ramon', 'Rossi'],
        cost: 800,
        date: 'May to September'
    },
    {
        src: '../media/rooms/r13.jpg',
        desc: 'Medieval vibes in this room.',
        roommates: ['William', 'Shakespeare'],
        cost: 500,
        date: 'June to September'
    },
    {
        src: '../media/rooms/r14.jpg',
        desc: 'Okay ngl I leased this place. It was a mistake so I am giving it away for free :skull:',
        roommates: ['Casper', 'Dahfrenly', 'Gost'],
        cost: 0,
        date: '24/7 all day everyday'
    },
    {
        src: '../media/rooms/r15.jpg',
        desc: 'Cloudy dreams are made here. Come sleep on this fluffy bed.',
        roommates: ['Taresa'],
        cost: 1200,
        date: 'May to September'
    },
    {
        src: '../media/rooms/r16.jpg',
        desc: 'Modern room that is relatively close to Tufts campus.',
        roommates: ['Shark', 'Meldon'],
        cost: 1700,
        date: 'June to September'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const listingsContainer = document.querySelector('.listings-container');
    const addListingBtn = document.getElementById('addListingBtn');
    const formContainer = document.getElementById('formContainer');
    const subletForm = document.getElementById('subletForm');
    
    // Function to create and add a new listing
    function addListing(image, description, roommates, cost, availability) {
        const listing = document.createElement('div');
        listing.classList.add('listing');
        
        const img = document.createElement('img');
        img.src = image
        listing.appendChild(img);
        
        const descEl = document.createElement('p');
        descEl.textContent = description;
        listing.appendChild(descEl);
        
        const roommateEl = document.createElement('p');
        roommateEl.textContent = `Roommates: ${roommates}`;
        listing.appendChild(roommateEl);
        
        const costEl = document.createElement('p');
        costEl.textContent = `Cost: ${cost}`;
        listing.appendChild(costEl);
        
        const availEl = document.createElement('p');
        availEl.textContent = `Available: ${availability}`;
        listing.appendChild(availEl);
        
        listingsContainer.appendChild(listing);
    }

    // Initialize the page with 16 default listings
    for (const room of rooms) {
        addListing(room.src, room.desc, room.roommates, room.cost, room.date);
    }

    // Event Listener to show the form when 'Add Listing' button is clicked
    addListingBtn.addEventListener('click', function() {
        formContainer.classList.toggle('hidden');
    });

    // Event Listener to handle form submission
    subletForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const image = document.getElementById('imageUpload').value;
        const description = document.getElementById('description').value;
        const roommates = document.getElementById('roommates').value;
        const cost = document.getElementById('cost').value;
        const availability = document.getElementById('availability').value;

        addListing(image, description, roommates, cost, availability);

        // Reset the form
        subletForm.reset();
        formContainer.classList.add('hidden');
    });
});
