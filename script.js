function openGift() {
    // Create and animate falling elements
    const fallingElementsContainer = document.getElementById('falling-elements');
    
    for (let i = 0; i < 30; i++) { // Adjust the number of elements as needed
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.animationDelay = Math.random() * 2 + 's';
        fallingElementsContainer.appendChild(flower);
        
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.animationDelay = Math.random() * 2 + 's';
        fallingElementsContainer.appendChild(balloon);
    }

    // Show the closed gift box after a delay
    const giftBox = document.getElementById('gift-box');
    const giftBoxImg = document.getElementById('gift-box-closed');
    giftBoxImg.src = 'https://raw.githubusercontent.com/sonokkkk/bday-link/main/gift-box-closed.png'; // URL for closed gift box image
    giftBox.style.opacity = 1;
}

function openBox() {
    const giftBox = document.getElementById('gift-box');
    const giftBoxImg = document.getElementById('gift-box-closed');
    const kitten = document.getElementById('kitten');

    // Change to open gift box image
    giftBoxImg.src = 'https://raw.githubusercontent.com/sonokkkk/bday-link/main/gift-box-opened.png'; // URL for open gift box image

   



    // Change to open gift box image
    giftBoxImg.src = 'https://raw.githubusercontent.com/sonokkkk/bday-link/main/kitten.png'; // URL for open gift box image
    
    // Show the kitten after a delay
    setTimeout(() => {
        kitten.style.opacity = 1;
    }, 0); // Adjust timing as needed

    // Fade out the gift box
    setTimeout(() => {
        giftBox.style.opacity = 0;
    }, 1500); // Adjust timing as needed
}


function moveLeaveButton() {
    var leaveButton = document.getElementById('leave-btn');
    var container = document.getElementById('buttons-container');

    // Calculate random positions
    var randomLeft = Math.random() * (window.innerWidth - 100); // Subtract button width
    var randomTop = Math.random() * (window.innerHeight - 50); // Subtract button height

    leaveButton.style.position = 'absolute';
    leaveButton.style.left = randomLeft + 'px';
    leaveButton.style.top = randomTop + 'px';

    // Prevent page from closing
    leaveButton.onclick = function() {
        moveLeaveButton(); // Move button again on subsequent clicks
        return false; // Prevent default action (closing page)
    };
}
