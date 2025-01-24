const bloomButton = document.getElementById('bloomButton');
const animationArea = document.getElementById('animationArea');

// Function to create a random lavender shade
function getRandomLavenderShade() {
    const shades = [
        '#E6E6FA', // Light Lavender
        '#D8BFD8', // Thistle
        '#DDA0DD', // Plum
        '#DA70D6', // Orchid
        '#BA55D3', // Medium Orchid
    ];
    return shades[Math.floor(Math.random() * shades.length)];
}

// Function to create a lavender flower
function createLavender(x, y) {
    const stem = document.createElement('div');
    stem.classList.add('stem');
    stem.style.left = `${x}px`;
    stem.style.bottom = `${y}px`;

    // Append petals dynamically along the stem
    const petalCount = 10; // Total number of petals along the stem
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');

        // Position petals symmetrically along the stem
        const heightPosition = i * 12 + 5; // Space petals evenly along the height
        const side = i % 2 === 0 ? -1 : 1; // Alternate left and right of the stem
        const xOffset = side * 1.5; // Fixed offset to align petals closer to the stem

        petal.style.bottom = `${heightPosition}px`; // Place petal at specific height
        petal.style.left = `calc(10% + ${xOffset}px)`; // Shift petal symmetrically left/right of the stem
        petal.style.background = getRandomLavenderShade(); // Assign a random lavender shade
        petal.style.animationDelay = `${i * 0.2}s`; // Stagger bloom effect for each petal

        stem.appendChild(petal);
    }

    animationArea.appendChild(stem);

    // Remove the lavender after animation to prevent clutter
    setTimeout(() => {
        stem.remove();
    }, 10000); // Remove after 5 seconds
}

// Add click event to the button
bloomButton.addEventListener('click', () => {
    // Create multiple lavender stems at random positions
    for (let i = 0; i < 5; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * 100; // Limit height near the bottom of the screen
        createLavender(x, y);
    }
});
