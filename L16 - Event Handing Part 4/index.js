// Show current window dimensions when resizing

const dimensions = document.getElementById('dimensions');

function updateDimensions() {
    dimensions.textContent = `Width: ${window.innerWidth}px, Height: ${window.innerHeight}px`;
}

// Initial display
updateDimensions();

// Update on window resize
window.addEventListener('resize', updateDimensions);