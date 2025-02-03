const games = [
    { name: "Mobile Legends", id: "mlbb", img: "mlbb.png", currency: "Diamonds", basePrice: 12000 },
    { name: "Free Fire", id: "ff", img: "ff.png", currency: "Diamonds", basePrice: 7000 },
    { name: "PUBG Mobile", id: "pubg", img: "pubg.png", currency: "UC", basePrice: 10000 },
    { name: "Genshin Impact", id: "genshin", img: "genshin.png", currency: "Genesis Crystals", basePrice: 15000 },
    { name: "Roblox", id: "roblox", img: "roblox.png", currency: "Robux", basePrice: 5000 },
    { name: "Minecraft", id: "minecraft", img: "minecraft.png", currency: "Minecoins", basePrice: 3000 },
    { name: "Valorant", id: "valorant", img: "valorant.png", currency: "Valorant Points", basePrice: 10000 },
    { name: "Call of Duty Mobile", id: "codm", img: "codm.png", currency: "CP", basePrice: 7000 },
    { name: "Point Blank", id: "pb", img: "pb.png", currency: "PB Cash", basePrice: 6000 },
    { name: "Ragnarok", id: "ragnarok", img: "ragnarok.png", currency: "Zeny", basePrice: 3000 },
    { name: "Modern Warships", id: "mw", img: "mw.png", currency: "Gold", basePrice: 8000 },
    { name: "Guardian Tales", id: "gt", img: "gt.png", currency: "Gems", basePrice: 9000 },
    { name: "Blockman Go", id: "bg", img: "bg.png", currency: "Gcubes", basePrice: 5000 },
    { name: "Honor of Kings", id: "hok", img: "hok.png", currency: "Tokens", basePrice: 7000 }
];

function generateOptions(basePrice, currency) {
    let options = [];
    for (let i = 1; i <= 30; i++) {
        let price = basePrice + (i * 2000); // Harga bertambah bertahap
        options.push(`${i * 50} ${currency} - Rp${price.toLocaleString()}`);
    }
    return options;
}

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
    
    let options = generateOptions(game.basePrice, game.currency);
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        select.appendChild(optionElement);
    });
    
    const button = document.createElement('button');
    button.textContent = 'Order';
    button.onclick = () => order(game.name, game.id);
    
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