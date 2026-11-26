
/* Update the footer year automatically */

const footer = document.querySelector("footer");

if (footer) {
    footer.innerHTML = `
        <p>&copy; ${new Date().getFullYear()}
        Reese Kabui. Built with HTML, CSS and JavaScript.</p>
    `;
}

/* Welcome message in the browser console */

console.log("Welcome to Reese's technology portfolio!");
