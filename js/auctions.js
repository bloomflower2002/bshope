const auctionProducts = [
    {
        image: '../image/airpod.jpg',
        alt: 'Airpod auction',
        title: 'Wireless Airbuds',
        bid: 'Starting bid: 59ETB'
    },
    {
        image: '../image/iphone.jpg',
        alt: 'iPhone auction',
        title: 'Smartphone',
        bid: 'Starting bid: 199ETB'
    },
    {
        image: '../image/mac.jpg',
        alt: 'Mac auction',
        title: 'Notebook',
        bid: 'Starting bid: 499ETB'
    },
    {
        image: '../image/ps5.jpg',
        alt: 'PS5 auction',
        title: 'Gaming Console',
        bid: 'Starting bid: 299ETB'
    },
    {
        image: '../image/speaker.jpg',
        alt: 'AXESS Speaker auction',
        title: 'Wireless Speaker',
        bid: 'Starting bid: 149ETB'
    },
    {
        image: '../image/black.jpg',
        alt: 'Black auction',
        title: 'airpods',
        bid: 'Starting bid: 299ETB'
    },
    {
        image: '../image/chair.jpg',
        alt: 'Chair auction',
        title: 'Gaming Chair',
        bid: 'Starting bid: 199ETB'
    },
    {
        image: '../image/oven.jpg',
        alt: 'Oven auction',
        title: 'Electric Oven',
        bid: 'Starting bid: 299ETB'
    },
     {
        image: '../image/keyboard.jpg',
        alt: 'Keyboard auction',
        title: 'Gaming Keyboard',
        bid: 'Starting bid: 99ETB'
    },
     {
        image: '../image/fans.jpg',
        alt: 'Fans auction',
        title: 'Home Fans',
        bid: 'Starting bid: 49ETB'
    },
     {
        image: '../image/TCL40.jpg',
        alt: 'TCL40 auction',
        title: '40-inch Smart TV',
        bid: 'Starting bid: 299ETB'
    },
     {
        image: '../image/iron.jpg',
        alt: 'Iron auction',
        title: 'Electric Iron',
        bid: 'Starting bid: 299ETB'
    },
     {
        image: '../image/powerbanker.jpg',
        alt: 'Powerbanker auction',
        title: 'Portable Power Bank',
        bid: 'Starting bid: 99ETB'
    },
     {
        image: '../image/sonybluetooth.jpg',
        alt: 'Sony Bluetooth auction',
        title: 'Wireless Bluetooth Speaker',
        bid: 'Starting bid: 149ETB'
    },
     {
        image: '../image/smartwatch.jpg',
        alt: 'Smartwatch auction',
        title: 'Smartwatch',
        bid: 'Starting bid: 199ETB'
    },
     {
        image: '../image/sonicheadphone.jpg',
        alt: 'Sonic Headphone auction',
        title: 'Wireless Headphones',
        bid: 'Starting bid: 199ETB'
    }

];

const auctionContainer = document.getElementById('auction-products');

if (auctionContainer) {
    auctionContainer.innerHTML = auctionProducts.map(product => `
        <article class="product-card">
            <img src="${product.image}" alt="${product.alt}">
            <h3>${product.title}</h3>
            <p>${product.bid}</p>
        </article>
    `).join('');
}
