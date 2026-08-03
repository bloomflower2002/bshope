document.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.querySelector('[data-navbar]');
    if (!navContainer) return;

    navContainer.innerHTML = `
    <nav class="navbar">
        <div class="logo">
           <a href="dashboard.html"><img src="../../public/bshopewhite.png" alt="BShop Logo" class="bshope-img"></a>
        </div>
        <ul class="navlinks">
            <li><a href="auctions.html">Auctions</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="contact.html">Contact</a></li>
           <a href="signin.html" class="signin-btn">Sign In</a>
        </ul>
    
    </nav>
    `;
});
