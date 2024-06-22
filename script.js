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
