document.addEventListener('DOMContentLoaded', () => {
    const footerContainer = document.querySelector('[data-footer]');
    if (!footerContainer) return;

    footerContainer.innerHTML = `
    <footer class="site-footer">
        <div class="footer-content">
            <div class="footer-brand">
                <img src="../image/bshopewhite.png" alt="BShop Logo">
                <p>Bid smart, win big. BShope brings you trusted auctions, top products, and support around the clock.</p>
            </div>
            <div class="footer-links">
                <h3>Quick Links</h3>
                <a href="index.html">Home</a>
                <a href="auctions.html">Auctions</a>
                <a href="about.html">About Us</a>
                <a href="contact.html">Contact</a>
            </div>
            <div class="footer-contact">
                <h3>Contact</h3>
                <p>Email: support@bshope.com</p>
                <p>Phone: +251970490048</p>
                <p>Address: jemo 3, market place</p>
                <div class="social-links">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <div class="footer-links">
            <h3>Legal</h3>
               <a href="terms.html">Terms of Service</a>
                <a href="privacy.html">Privacy Policy</a>
            </div>
        </div>
        <div class="footer-bottom">© 2026 BShope. All rights reserved.</div>
    </footer>
    `;
});
