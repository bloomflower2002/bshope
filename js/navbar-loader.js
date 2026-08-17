document.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.querySelector('[data-navbar]');
    if (!navContainer) return;

    navContainer.innerHTML = `
        <nav class="navbar">
            <div class="logo">
                <a href="index.html">
                    <img src="../image/bshopewhite.png" alt="BShop Logo" class="bshope-img">
                </a>
            </div>
            <div class="mobile-actions">
                <!-- SVG operates as the combined toggle container node -->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="32" height="32" class="search-icon-btn mobile-search-btn menu-toggle" id="mobileSearchToggle" aria-label="Toggle navigation and search" aria-expanded="false" aria-controls="navlinks">
                    <line x1="25" y1="38" x2="37" y2="38" stroke="#ffffff" stroke-width="4" stroke-linecap="round" />
                    <line x1="25" y1="50" x2="37" y2="50" stroke="#ffffff" stroke-width="4" stroke-linecap="round" />
                    <line x1="25" y1="62" x2="37" y2="62" stroke="#ffffff" stroke-width="4" stroke-linecap="round" />
                    <circle cx="56" cy="46" r="12" stroke="#ffffff" stroke-width="4" fill="none" />
                    <line x1="64.5" y1="54.5" x2="75" y2="65" stroke="#ffffff" stroke-width="4" stroke-linecap="round" />
                </svg>
                <a href="#" class="language-btn mobile-language-btn">EN</a>
            </div>
            
            <ul class="navlinks" id="navlinks">
                <li><a href="auctions.html">Auctions</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li class="mobile-signin"><a href="signin.html" aria-label="Sign In"><i class="fas fa-user"></i></a></li>
            </ul>

            <div class="mobile-search-panel" id="mobileSearchPanel">
                <div class="search-toggle">
                    <select id="mobileCategorySelect" aria-label="Search category mobile">
                        <option value="all">All</option>
                        <option value="electronic">Electronic</option>
                        <option value="art">Art</option>
                        <option value="home-accessories">Home Accessories</option>
                        <option value="perfume">Perfume</option>
                        <option value="watch">Watch</option>
                    </select>
                    <input type="text" class="search-bar-inline" placeholder="Search..." id="mobileSearchInput">
                </div>
            </div>

            <div class="nav-actions">
                <div class="search-toggle desktop-search" id="desktopSearchContainer">
                    <select id="categorySelect" aria-label="Search category">
                        <option value="all">All</option>
                        <option value="electronic">Electronic</option>
                        <option value="art">Art</option>
                        <option value="home-accessories">Home Accessories</option>
                        <option value="perfume">Perfume</option>
                        <option value="watch">Watch</option>
                    </select>
                    <input type="text" class="search-bar-inline" placeholder="Search..." id="searchInput">
                    <a href="#" class="search-icon-btn" aria-label="Search" id="searchToggle">
                        <i class="fas fa-search"></i>
                    </a>
                </div>
                <a href="#" class="language-btn desktop-language">EN</a>
                <a href="signin.html" class="signin-btn">Sign In</a>
            </div>
        </nav>
    `;

    // 2. Query selectors NOW that elements exist within layout timeline context
    const searchToggle = document.getElementById('searchToggle');
    const desktopSearchContainer = document.getElementById('desktopSearchContainer');
    const searchInput = document.getElementById('searchInput');
    const mobileSearchToggle = document.getElementById('mobileSearchToggle');
    const mobileSearchPanel = document.getElementById('mobileSearchPanel');
    const mobileSearchInput = document.getElementById('mobileSearchInput');
    const navLinks = document.getElementById('navlinks');

    // Toggle menu dropdown and mobile panels on SVG click event
    if (mobileSearchToggle && navLinks && mobileSearchPanel) {
        mobileSearchToggle.addEventListener('click', (event) => {
            event.stopPropagation();
            event.preventDefault();

            const isMenuExpanded = mobileSearchToggle.getAttribute('aria-expanded') === 'true';
            
            if (!isMenuExpanded) {
                // First step open: show links list
                mobileSearchToggle.setAttribute('aria-expanded', 'true');
                navLinks.classList.add('active');
                mobileSearchPanel.classList.remove('active');
            } else if (navLinks.classList.contains('active')) {
                // Second step pivot: links to active search bar input field
                navLinks.classList.remove('active');
                mobileSearchPanel.classList.add('active');
                setTimeout(() => mobileSearchInput?.focus(), 50);
            } else {
                // Third step fallback: close state loops complete
                mobileSearchToggle.setAttribute('aria-expanded', 'false');
                mobileSearchPanel.classList.remove('active');
            }
        });
    }

    // Desktop search wrapper behavior mechanics
    if (searchToggle && desktopSearchContainer && searchInput) {
        searchToggle.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            const isActive = desktopSearchContainer.classList.toggle('active');
            if (isActive) {
                searchInput.focus();
            }
        });

        // Auto close inline wrapper input if focus leaves context fields
        document.addEventListener('click', (event) => {
            if (!desktopSearchContainer.contains(event.target)) {
                desktopSearchContainer.classList.remove('active');
            }
        });
    }

    // Global document outside-click capture node to collapse menus gracefully
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.navbar')) {
            navLinks?.classList.remove('active');
            mobileSearchPanel?.classList.remove('active');
            mobileSearchToggle?.setAttribute('aria-expanded', 'false');
        }
    });
});
