const games = [
    { name: "Mobile Legends", id: "mlbb", img: "mlbb.png", currency: "Diamonds", currencyImg: "up.png", basePrice: 12000 },
    { name: "Free Fire", id: "ff", img: "ff.png", currency: "Diamonds", currencyImg: "up.png", basePrice: 7000 },
    { name: "PUBG Mobile", id: "pubg", img: "pubg.png", currency: "UC", currencyImg: "up.png", basePrice: 10000 },
    { name: "Genshin Impact", id: "genshin", img: "genshin.png", currency: "Genesis Crystals", currencyImg: "up.png", basePrice: 15000 },
    { name: "Roblox", id: "roblox", img: "roblox.png", currency: "Robux", currencyImg: "up.png", basePrice: 5000 },
    { name: "Minecraft", id: "minecraft", img: "minecraft.png", currency: "Minecoins", currencyImg: "up.png", basePrice: 3000 },
    { name: "Valorant", id: "valorant", img: "valorant.png", currency: "Valorant Points", currencyImg: "up.png", basePrice: 10000 },
    { name: "Call of Duty Mobile", id: "codm", img: "codm.png", currency: "CP", currencyImg: "up.png", basePrice: 7000 },
    { name: "Point Blank", id: "pb", img: "pb.png", currency: "PB Cash", currencyImg: "up.png", basePrice: 6000 },
    { name: "Ragnarok", id: "ragnarok", img: "ragnarok.png", currency: "Zeny", currencyImg: "up.png", basePrice: 3000 },
    { name: "Modern Warships", id: "mw", img: "mw.png", currency: "Gold", currencyImg: "up.png", basePrice: 8000 },
    { name: "Guardian Tales", id: "gt", img: "gt.png", currency: "Gems", currencyImg: "up.png", basePrice: 9000 },
    { name: "Blockman Go", id: "bg", img: "bg.png", currency: "Gcubes", currencyImg: "up.png", basePrice: 5000 },
    { name: "Honor of Kings", id: "hok", img: "hok.png", currency: "Tokens", currencyImg: "up.png", basePrice: 7000 }
];

const gameListContainer = document.querySelector('.game-list');

games.forEach(game => {
    const gameContainer = document.createElement('div');
    gameContainer.classList.add('game-card');

    const img = document.createElement('img');
    img.src = `images/${game.img}`;
    img.alt = game.name;

    const title = document.createElement('h2');
    title.textContent = game.name;

    const select = document.createElement('select');
    select.classList.add('topup-option');
    select.id = game.id;

    let options = [];
    for (let i = 1; i <= 30; i++) {
        let price = game.basePrice + (i * 2000);
        let optionText = `${i * 50} ${game.currency} - Rp${price.toLocaleString()}`;
        const optionElement = document.createElement('option');
        optionElement.value = optionText;
        optionElement.textContent = optionText;
        select.appendChild(optionElement);
    }

    const button = document.createElement('button');
    button.classList.add('order-button');
    button.onclick = () => order(game.name, game.id);

    // Buat elemen gambar untuk logo mata uang
    const currencyImg = document.createElement('img');
    currencyImg.src = `currency/${game.currencyImg}`;
    currencyImg.alt = game.currency;
    currencyImg.classList.add('currency-icon');

    // Tambahkan gambar ke dalam tombol order
    button.appendChild(currencyImg);
    button.appendChild(document.createTextNode(' Order'));

    gameContainer.appendChild(img);
    gameContainer.appendChild(title);
    gameContainer.appendChild(select);
    gameContainer.appendChild(button);

    gameListContainer.appendChild(gameContainer);
});

function order(game, id) {
    const select = document.getElementById(id);
    const selectedOption = select.value;
    const phoneNumber = "6285715294026";
    const message = `Halo, saya ingin top-up ${game} dengan paket ${selectedOption}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
}