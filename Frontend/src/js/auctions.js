const auctionProducts = [
    {
        image: '../../public/airpod.jpg',
        alt: 'Airpod auction',
        title: 'Wireless Airbuds',
        bid: 'Starting bid: 59ETB'
    },
    {
        image: '../../public/iphone.jpg',
        alt: 'iPhone auction',
        title: 'Smartphone',
        bid: 'Starting bid: 199ETB'
    },
    {
        image: '../../public/mac.jpg',
        alt: 'Mac auction',
        title: 'Notebook',
        bid: 'Starting bid: 499ETB'
    },
    {
        image: '../../public/ps5.jpg',
        alt: 'PS5 auction',
        title: 'Gaming Console',
        bid: 'Starting bid: 299ETB'
    },
    {
        image: '../../public/speaker.jpg',
        alt: 'AXESS Speaker auction',
        title: 'Wireless Speaker',
        bid: 'Starting bid: 149ETB'
    },
    {
        image: '../../public/black.jpg',
        alt: 'Black auction',
        title: 'airpods',
        bid: 'Starting bid: 299ETB'
    },
    {
        image: '../../public/chair.jpg',
        alt: 'Chair auction',
        title: 'Gaming Chair',
        bid: 'Starting bid: 199ETB'
    },
    {
        image: '../../public/oven.jpg',
        alt: 'Oven auction',
        title: 'Electric Oven',
        bid: 'Starting bid: 299ETB'
    },
     {
        image: '../../public/keyboard.jpg',
        alt: 'Keyboard auction',
        title: 'Gaming Keyboard',
        bid: 'Starting bid: 99ETB'
    },
     {
        image: '../../public/fans.jpg',
        alt: 'Fans auction',
        title: 'Home Fans',
        bid: 'Starting bid: 49ETB'
    },
     {
        image: '../../public/TCL40.jpg',
        alt: 'TCL40 auction',
        title: '40-inch Smart TV',
        bid: 'Starting bid: 299ETB'
    },
     {
        image: '../../public/iron.jpg',
        alt: 'Iron auction',
        title: 'Electric Iron',
        bid: 'Starting bid: 299ETB'
    },
     {
        image: '../../public/powerbanker.jpg',
        alt: 'Powerbanker auction',
        title: 'Portable Power Bank',
        bid: 'Starting bid: 99ETB'
    },
     {
        image: '../../public/sonybluetooth.jpg',
        alt: 'Sony Bluetooth auction',
        title: 'Wireless Bluetooth Speaker',
        bid: 'Starting bid: 149ETB'
    },
     {
        image: '../../public/smartwatch.jpg',
        alt: 'Smartwatch auction',
        title: 'Smartwatch',
        bid: 'Starting bid: 199ETB'
    },
     {
        image: '../../public/sonicheadphone.jpg',
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
