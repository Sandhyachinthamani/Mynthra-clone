let body = document.querySelector('body');

let men = document.querySelector('.men');
let women = document.querySelector('.women');
let kids= document.querySelector('.kids');
let beauty=document.querySelector('.beauty');
let home=document.querySelector('.home');
let studio=document.querySelector('.studio');

let container; // Declare container globally for access

men.addEventListener("mouseover", menFunction);
men.addEventListener("mouseout", hideOnMouseOut);

women.addEventListener("mouseover", womenFunction);
women.addEventListener("mouseout", hideOnMouseOut);

kids.addEventListener("mouseover", kidsFunction);
kids.addEventListener("mouseout", hideOnMouseOut);

home.addEventListener("mouseover", homeFunction);
home.addEventListener("mouseout", hideOnMouseOut);

beauty.addEventListener("mouseover", beautyFunction);
beauty.addEventListener("mouseout", hideOnMouseOut);

studio.addEventListener("mouseover", studioFunction);
studio.addEventListener("mouseout", hideOnMouseOut);

function menFunction() {
    if (!container) { // Only create container if it doesn't exist already
        container = document.createElement("div");
        transparent=document.createElement("div");
        transparent.classList.add("transparent");
        container.classList.add("hoverbox");
        container.innerHTML = `
            <div class="flex-row">
                <div>
                    <h3><a href="#">Topwear</a></h3>
                    <a class="item" href="#">T-Shirts</a>
                    <a class="item" href="#">Casual Shirts</a>
                    <a class="item" href="#">Formal Shirts</a>
                    <a class="item" href="#">Sweatshirts</a>
                    <a class="item" href="#">Sweaters</a>
                    <a class="item" href="#">Jackets</a>
                    <a class="item" href="#">Blazers & Coats</a>
                    <a class="item" href="#">Suits</a>
                    <a class="item" href="#">Rain Jackets</a>
                </div>
                <hr class="rowhr">
                <div>
                    <h3><a href="#">Indian & Festive Wear</a></h3>
                    <a class="item" href="#">Kurtas & Kurta Sets</a>
                    <a class="item" href="#">Sherwanis</a>
                    <a class="item" href="#">Nehru Jackets</a>
                    <a class="item" href="#">Dhotis</a>
                </div>
            </div>
            <div class="flex-row">
                <div>
                    <h3><a href="#">Bottomwear</a></h3>
                    <a class="item" href="#">Jeans</a>
                    <a class="item" href="#">Casual Trousers</a>
                    <a class="item" href="#">Formal Trousers</a>
                    <a class="item" href="#">Shorts</a>
                    <a class="item" href="#">Track Pants & Joggers</a>
                </div>
                <hr class="rowhr">
                <div>
                    <h3><a href="#">Innerwear & Sleepwear</a></h3>
                    <a class="item" href="#">Briefs & Trunks</a>
                    <a class="item" href="#">Boxers</a>
                    <a class="item" href="#">Vests</a>
                    <a class="item" href="#">Sleepwear & Loungewear</a>
                    <a class="item" href="#">Thermals</a>
                </div>
                <hr class="rowhr">
                <div>
                    <h3><a href="#">Plus Size</a></h3>
                </div>
            </div>
            <div class="flex-row">
                <div>
                    <h3><a href="#">Footwear</a></h3>
                    <a class="item" href="#">Casual Shoes</a>
                    <a class="item" href="#">Sports Shoes</a>
                    <a class="item" href="#">Formal Shoes</a>
                    <a class="item" href="#">Sneakers</a>
                    <a class="item" href="#">Sandals & Floaters</a>
                    <a class="item" href="#">Flip Flops</a>
                    <a class="item" href="#">Socks</a>
                </div>
                <hr class="rowhr">
                <div>
                    <h3><a href="#">Personal Care & Grooming</a></h3>
                    <h3><a href="#">Sunglasses & Frames</a></h3>
                    <h3><a href="#">Watches</a></h3>
                </div>
            </div>
            <div class="flex-row">
                <div>
                    <h3><a href="#">Sports & Active Wear</a></h3>
                    <a class="item" href="#">Sports Shoes</a>
                    <a class="item" href="#">Sports Sandals</a>
                    <a class="item" href="#">Active T-Shirts</a>
                    <a class="item" href="#">Track Pants & Shorts</a>
                    <a class="item" href="#">Tracksuits</a>
                    <a class="item" href="#">Jackets & Sweatshirts</a>
                    <a class="item" href="#">Sports Accessories</a>
                    <a class="item" href="#">Swimwear</a>
                </div>
                <hr class="rowhr">
                <div>
                    <h3><a href="#">Gadgets</a></h3>
                    <a class="item" href="#">Smart Wearables</a>
                    <a class="item" href="#">Fitness Gadgets</a>
                    <a class="item" href="#">Headphones</a>
                    <a class="item" href="#">Speakers</a>
                </div>
            </div>
            <div class="flex-row">
                <div>
                    <h3><a href="#">Fashion Accessories</a></h3>
                    <a class="item" href="#">Wallets</a>
                    <a class="item" href="#">Belts</a>
                    <a class="item" href="#">Perfumes & Body Mists</a>
                    <a class="item" href="#">Trimmers</a>
                    <a class="item" href="#">Deodorants</a>
                    <a class="item" href="#">Ties, Cufflinks & Pocket Squares</a>
                    <a class="item" href="#">Accessory Gift Sets</a>
                    <a class="item" href="#">Caps & Hats</a>
                    <a class="item" href="#">Mufflers, Scarves & Gloves</a>
                    <a class="item" href="#">Phone Cases</a>
                    <a class="item" href="#">Rings & Wristwear</a>
                    <a class="item" href="#">Helmets</a>
                </div>
                <hr class="rowhr">
                <div>
                    <h3><a href="#">Bags & Backpacks</a></h3>
                    <h3><a href="#">Luggages & Trolleys</a></h3>
                </div>
            </div>
        `;
        container.style.position = "absolute";
        container.style.top = men.getBoundingClientRect().bottom + "px"; // Place the hoverbox below the '.men' element
        container.addEventListener("mouseover", keepContainerVisible);
        container.addEventListener("mouseout", hideOnMouseOut);
        transparent.style.top = men.getBoundingClientRect().bottom + "px";
        body.append(transparent,container);
    }
}
function womenFunction() {
    if (!container) { // Only create container if it doesn't exist already
        container = document.createElement("div");
        transparent = document.createElement("div");
        transparent.classList.add("transparent");
        container.classList.add("hoverbox");
        container.innerHTML = `
            <div class="women flex-row">
                <div>
                    <h3><a href="#">Indian & Fusion Wear</a></h3>
                    <a class="item" href="#">Kurtas & Suits</a>
                    <a class="item" href="#">Kurtis, Tunics & Tops</a>
                    <a class="item" href="#">Sarees</a>
                    <a class="item" href="#">Ethnic Wear</a>
                    <a class="item" href="#">Leggings, Salwars & Churidars</a>
                    <a class="item" href="#">Skirts & Palazzos</a>
                    <a class="item" href="#">Dress Materials</a>
                    <a class="item" href="#">Lehenga Cholis</a>
                    <a class="item" href="#">Dupattas & Shawls</a>
                    <a class="item" href="#">Jackets</a>
                    <hr class="rowhr">
                    <h3><a href="#">Belts, Scarves & More</a></h3>
                    <h3><a href="#">Watches & Wearables</a></h3>
                </div>
            </div>
            <div class="women flex-row">
                    <div>
                    <h3><a href="#">Western Wear</a></h3>
                    <a class="item" href="#">Dresses</a>
                    <a class="item" href="#">Tops</a>
                    <a class="item" href="#">Tshirts</a>
                    <a class="item" href="#">Jeans</a>
                    <a class="item" href="#">Trousers & Capris</a>
                    <a class="item" href="#">Shorts & Skirts</a>
                    <a class="item" href="#">Co-ords</a>
                    <a class="item" href="#">Playsuits</a>
                    <a class="item" href="#">Jumpsuits</a>
                    <a class="item" href="#">Shrugs</a>
                    <a class="item" href="#">Sweaters & Sweatshirts</a>
                    <a class="item" href="#">Jackets & Coats</a>
                    <a class="item" href="#">Blazers & Waistcoats</a>
                </div>
                <hr class="rowhr">
                    <h3><a href="#">Plus Size</a></h3>
            </div>
            <div class="women flex-row">
                    <h3><a href="#">Maternity</a></h3>
                    <h3><a href="#">Sunglasses & Frames</a></h3>
                <div>
                    <h3><a href="#">Footwear</a></h3>
                    <a class="item" href="#">Flats</a>
                    <a class="item" href="#">Casual Shoes</a>
                    <a class="item" href="#">Heels</a>
                    <a class="item" href="#">Boots</a>
                    <a class="item" href="#">Sports Shoes & Floaters</a>
                </div>
                <hr class="rowhr">
                <div>
                    <h3><a href="#">Sports & Active Wear</a></h3>
                    <a class="item" href="#">Clothing</a>
                    <a class="item" href="#">Footwear</a>
                    <a class="item" href="#">Sports Accessories</a>
                    <a class="item" href="#">Sports Equipment</a>
                </div>
            </div>
            <div class="women flex-row">
                <div>
                    <h3><a href="#">Lingerie & Sleepwear</a></h3>
                    <a class="item" href="#">Bra</a>
                    <a class="item" href="#">Briefs</a>
                    <a class="item" href="#">Shapewear</a>
                    <a class="item" href="#">Sleepwear & Loungewear</a>
                    <a class="item" href="#">Swimwear</a>
                    <a class="item" href="#">Camisoles & Thermals</a>
                </div>
                <hr class="rowhr">
                <div>
                    <h3><a href="#">Beauty & Personal Care</a></h3>
                    <a class="item" href="#">Makeup</a>
                    <a class="item" href="#">Skincare</a>
                    <a class="item" href="#">Premium Beauty</a>
                    <a class="item" href="#">Lipsticks</a>
                    <a class="item" href="#">Fragrances</a>
                </div>
            </div>
            <div class="women flex-row">
                <div>
                    <h3><a href="#">Gadgets</a></h3>
                    <a class="item" href="#">Smart Wearables</a>
                    <a class="item" href="#">Fitness Gadgets</a>
                    <a class="item" href="#">Headphones</a>
                    <a class="item" href="#">Speakers</a>
                </div>
                <hr class="rowhr">
                <div>
                    <h3><a href="#">Jewellery</a></h3>
                    <a class="item" href="#">Fashion Jewellery</a>
                    <a class="item" href="#">Fine Jewellery</a>
                    <a class="item" href="#">Earrings</a>
                </div>
                <hr class="rowhr">
                    <h3><a href="#">Bags & Backpacks</a></h3>
                    <h3><a href="#">Handbags, Bags & Wallets</a></h3>
                    <h3><a href="#">Luggages & Trolleys</a></h3>
            </div>
        `;
        
        container.style.position = "absolute";
        container.style.top = women.getBoundingClientRect().bottom + "px"; // Place the hoverbox below the '.men' element
        container.addEventListener("mouseover", keepContainerVisible);
        container.addEventListener("mouseout", hideOnMouseOut);
        transparent.style.top = women.getBoundingClientRect().bottom + "px";
        body.append(transparent, container);
    }
}

function kidsFunction() {
    if (!container) { // Only create container if it doesn't exist already
        container = document.createElement("div");
        transparent = document.createElement("div");
        transparent.classList.add("transparent");
        container.classList.add("hoverbox");
        container.innerHTML = `
            <div class="kids flex-row">
                    <h3><a href="#">Boys Clothing</a></h3>
                    <a class="item" href="#">T-Shirts</a>
                    <a class="item" href="#">Shirts</a>
                    <a class="item" href="#">Shorts</a>
                    <a class="item" href="#">Jeans</a>
                    <a class="item" href="#">Trousers</a>
                    <a class="item" href="#">Clothing Sets</a>
                    <a class="item" href="#">Ethnic Wear</a>
                    <a class="item" href="#">Track Pants & Pyjamas</a>
                    <a class="item" href="#">Jacket, Sweater & Sweatshirts</a>
                    <a class="item" href="#">Party Wear</a>
                    <a class="item" href="#">Innerwear & Thermals</a>
                    <a class="item" href="#">Nightwear & Loungewear</a>
                    <a class="item" href="#">Value Packs</a>
            </div>
            <div class="kids flex-row">
                    <h3><a href="#">Girls Clothing</a></h3>
                    <a class="item" href="#">Dresses</a>
                    <a class="item" href="#">Tops</a>
                    <a class="item" href="#">Tshirts</a>
                    <a class="item" href="#">Clothing Sets</a>
                    <a class="item" href="#">Lehenga Choli</a>
                    <a class="item" href="#">Kurta Sets</a>
                    <a class="item" href="#">Party Wear</a>
                    <a class="item" href="#">Dungarees & Jumpsuits</a>
                    <a class="item" href="#">Skirts & Shorts</a>
                    <a class="item" href="#">Tights & Leggings</a>
                    <a class="item" href="#">Jeans, Trousers & Capris</a>
                    <a class="item" href="#">Jacket, Sweater & Sweatshirts</a>
                    <a class="item" href="#">Innerwear & Thermals</a>
                    <a class="item" href="#">Nightwear & Loungewear</a>
                    <a class="item" href="#">Value Packs</a>
            </div>
            <div class="kids flex-row">
                <div>
                    <h3><a href="#">Footwear</a></h3>
                    <a class="item" href="#">Casual Shoes</a>
                    <a class="item" href="#">Flipflops</a>
                    <a class="item" href="#">Sports Shoes</a>
                    <a class="item" href="#">Flats</a>
                    <a class="item" href="#">Sandals</a>
                    <a class="item" href="#">Heels</a>
                    <a class="item" href="#">School Shoes</a>
                    <a class="item" href="#">Socks</a>
                </div>
                <hr class="rowhr">
                <div>
                    <h3><a href="#">Toys & Games</a></h3>
                    <a class="item" href="#">Learning & Development</a>
                    <a class="item" href="#">Activity Toys</a>
                    <a class="item" href="#">Soft Toys</a>
                    <a class="item" href="#">Action Figure / Play Set</a>
                </div>
            </div>
            <div class="kids flex-row">
                <div>
                    <h3><a href="#">Infants</a></h3>
                    <a class="item" href="#">Bodysuits</a>
                    <a class="item" href="#">Rompers & Sleepsuits</a>
                    <a class="item" href="#">Clothing Sets</a>
                    <a class="item" href="#">Tshirts & Tops</a>
                    <a class="item" href="#">Dresses</a>
                    <a class="item" href="#">Bottom Wear</a>
                    <a class="item" href="#">Winter Wear</a>
                    <a class="item" href="#">Innerwear & Sleepwear</a>
                    <a class="item" href="#">Infant Care</a>
                </div>
                <hr class="rowhr">
                    <h3><a href="#">Home & Bath</a></h3>
                    <h3><a href="#">Personal Care</a></h3>
            </div>
            <div class="kids flex-row">
                <div>
                    <h3><a href="#">Kids Accessories</a></h3>
                    <a class="item" href="#">Bags & Backpacks</a>
                    <a class="item" href="#">Watches</a>
                    <a class="item" href="#">Jewellery & Hair Accessory</a>
                    <a class="item" href="#">Sunglasses</a>
                    <a class="item" href="#">Masks & Protective Gears</a>
                    <a class="item" href="#">Caps & Hats</a>
                </div>
                <hr class="rowhr">
                <div>
                    <h3><a href="#">Brands</a></h3>
                    <a class="item" href="#">H&M</a>
                    <a class="item" href="#">Max Kids</a>
                    <a class="item" href="#">Pantaloons</a>
                    <a class="item" href="#">United Colors Of Benetton Kids</a>
                    <a class="item" href="#">YK</a>
                    <a class="item" href="#">U.S. Polo Assn. Kids</a>
                    <a class="item" href="#">Mothercare</a>
                    <a class="item" href="#">HRX</a>
                </div>
            </div>
        `;

        container.style.position = "absolute";
        container.style.top = kids.getBoundingClientRect().bottom + "px"; // Place the hoverbox below the '.men' element
        container.addEventListener("mouseover", keepContainerVisible);
        container.addEventListener("mouseout", hideOnMouseOut);
        transparent.style.top = kids.getBoundingClientRect().bottom + "px";
        body.append(transparent, container);
    }
}

function homeFunction() {
    if (!container) { // Only create container if it doesn't exist already
        container = document.createElement("div");
        transparent = document.createElement("div");
        transparent.classList.add("transparent");
        container.classList.add("hoverbox");
        container.innerHTML = `
            <div class="home flex-row">
                <div>
                    <h3><a href="#">Bed Linen & Furnishing</a></h3>
                    <a class="item" href="#">Bed Runners</a>
                    <a class="item" href="#">Mattress Protectors</a>
                    <a class="item" href="#">Bedsheets</a>
                    <a class="item" href="#">Bedding Sets</a>
                    <a class="item" href="#">Blankets, Quilts & Dohars</a>
                    <a class="item" href="#">Pillows & Pillow Covers</a>
                    <a class="item" href="#">Bed Covers</a>
                    <a class="item" href="#">Diwan Sets</a>
                    <a class="item" href="#">Chair Pads & Covers</a>
                    <a class="item" href="#">Sofa Covers</a>
                </div>
                <hr class="rowhr">
                <div>
                    <h3><a href="#">Flooring</a></h3>
                    <a class="item" href="#">Floor Runners</a>
                    <a class="item" href="#">Carpets</a>
                    <a class="item" href="#">Floor Mats & Dhurries</a>
                    <a class="item" href="#">Door Mats</a>
                </div>
            </div>
            <div class="home flex-row">
                <div>
                    <h3><a href="#">Bath</a></h3>
                    <a class="item" href="#">Bath Towels</a>
                    <a class="item" href="#">Hand & Face Towels</a>
                    <a class="item" href="#">Beach Towels</a>
                    <a class="item" href="#">Towels Set</a>
                    <a class="item" href="#">Bath Rugs</a>
                    <a class="item" href="#">Bath Robes</a>
                    <a class="item" href="#">Bathroom Accessories</a>
                    <a class="item" href="#">Shower Curtains</a>
                </div>
                <hr class="rowhr">
                <div>
                    <h3><a href="#">Lamps & Lighting</a></h3>
                    <a class="item" href="#">Floor Lamps</a>
                    <a class="item" href="#">Ceiling Lamps</a>
                    <a class="item" href="#">Table Lamps</a>
                    <a class="item" href="#">Wall Lamps</a>
                    <a class="item" href="#">Outdoor Lamps</a>
                    <a class="item" href="#">String Lights</a>
                </div>
            </div>
            <div class="home flex-row">
                <div>
                    <h3><a href="#">Home Décor</a></h3>
                    <a class="item" href="#">Plants & Planters</a>
                    <a class="item" href="#">Aromas & Candles</a>
                    <a class="item" href="#">Clocks</a>
                    <a class="item" href="#">Mirrors</a>
                    <a class="item" href="#">Wall Décor</a>
                    <a class="item" href="#">Festive Decor</a>
                    <a class="item" href="#">Pooja Essentials</a>
                    <a class="item" href="#">Wall Shelves</a>
                    <a class="item" href="#">Fountains</a>
                    <a class="item" href="#">Showpieces & Vases</a>
                    <a class="item" href="#">Ottoman</a>
                </div>
                <hr class="rowhr">
                    <h3><a class="item" href="#">Cushions & Cushion Covers</a></h3>
                    <h3><a class="item" href="#">Curtains</a></h3>
            </div>
            <div class="home flex-row">
                    <h3><a class="item" href="#">Home Gift Sets</a></h3>
                <div>
                    <h3><a href="#">Kitchen & Table</a></h3>
                    <a class="item" href="#">Table Runners</a>
                    <a class="item" href="#">Dinnerware & Serveware</a>
                    <a class="item" href="#">Cups and Mugs</a>
                    <a class="item" href="#">Bakeware & Cookware</a>
                    <a class="item" href="#">Kitchen Storage & Tools</a>
                    <a class="item" href="#">Bar & Drinkware</a>
                    <a class="item" href="#">Table Covers & Furnishings</a>
                </div>
                <hr class="rowhr">
                <div>
                    <h3><a href="#">Storage</a></h3>
                    <a class="item" href="#">Bins</a>
                    <a class="item" href="#">Hangers</a>
                    <a class="item" href="#">Organisers</a>
                    <a class="item" href="#">Hooks & Holders</a>
                    <a class="item" href="#">Laundry Bags</a>
                </div>
            </div>
            <div class="home flex-row">
                <div>
                    <h3><a href="#">Brands</a></h3>
                    <a class="item" href="#">H&M</a>
                    <a class="item" href="#">Marks & Spencer</a>
                    <a class="item" href="#">Home Centre</a>
                    <a class="item" href="#">Spaces</a>
                    <a class="item" href="#">D'Decor</a>
                    <a class="item" href="#">Story@Home</a>
                    <a class="item" href="#">Pure Home & Living</a>
                    <a class="item" href="#">Swayam</a>
                    <a class="item" href="#">Raymond Home</a>
                    <a class="item" href="#">Maspar</a>
                    <a class="item" href="#">My Trident</a>
                    <a class="item" href="#">Cortina</a>
                    <a class="item" href="#">Random</a>
                    <a class="item" href="#">Ellementry</a>
                    <a class="item" href="#">ROMEE</a>
                    <a class="item" href="#">SEJ by Nisha Gupta</a>
                </div>
            </div>
        `;

        container.style.position = "absolute";
        container.style.top = home.getBoundingClientRect().bottom + "px"; // Place the hoverbox below the '.men' element
        container.addEventListener("mouseover", keepContainerVisible);
        container.addEventListener("mouseout", hideOnMouseOut);
        transparent.style.top = home.getBoundingClientRect().bottom + "px";
        body.append(transparent, container);
    }
}

function beautyFunction() {
    if (!container) { // Only create container if it doesn't exist already
        container = document.createElement("div");
        transparent = document.createElement("div");
        transparent.classList.add("transparent");
        container.classList.add("hoverbox");
        container.innerHTML = `
            <div class="beauty flex-row">
                <div>
                    <h3><a href="#">Makeup</a></h3>
                    <a class="item" href="#">Lipstick</a>
                    <a class="item" href="#">Lip Gloss</a>
                    <a class="item" href="#">Lip Liner</a>
                    <a class="item" href="#">Mascara</a>
                    <a class="item" href="#">Eyeliner</a>
                    <a class="item" href="#">Kajal</a>
                    <a class="item" href="#">Eyeshadow</a>
                    <a class="item" href="#">Foundation</a>
                    <a class="item" href="#">Primer</a>
                    <a class="item" href="#">Concealer</a>
                    <a class="item" href="#">Compact</a>
                    <a class="item" href="#">Nail Polish</a>
                </div>
            </div>
            <div class="beauty flex-row">
                <div>
                    <h3><a href="#">Skincare, Bath & Body</a></h3>
                    <a class="item" href="#">Face Moisturiser</a>
                    <a class="item" href="#">Cleanser</a>
                    <a class="item" href="#">Masks & Peel</a>
                    <a class="item" href="#">Sunscreen</a>
                    <a class="item" href="#">Serum</a>
                    <a class="item" href="#">Face Wash</a>
                    <a class="item" href="#">Eye Cream</a>
                    <a class="item" href="#">Lip Balm</a>
                    <a class="item" href="#">Body Lotion</a>
                    <a class="item" href="#">Body Wash</a>
                    <a class="item" href="#">Body Scrub</a>
                    <a class="item" href="#">Hand Cream</a>
                </div>
                <hr class="rowhr">
                <div>
                    <h3><a href="#">Baby Care</a></h3>
                    <h3><a href="#">Masks</a></h3>
                </div>
            </div>
            <div class="beauty flex-row">
                <div>
                    <h3><a href="#">Haircare</a></h3>
                    <a class="item" href="#">Shampoo</a>
                    <a class="item" href="#">Conditioner</a>
                    <a class="item" href="#">Hair Cream</a>
                    <a class="item" href="#">Hair Oil</a>
                    <a class="item" href="#">Hair Gel</a>
                    <a class="item" href="#">Hair Color</a>
                    <a class="item" href="#">Hair Serum</a>
                    <a class="item" href="#">Hair Accessory</a>
                </div>
                <hr class="rowhr">
                <div>
                    <h3><a href="#">Fragrances</a></h3>
                    <a class="item" href="#">Perfume</a>
                    <a class="item" href="#">Deodorant</a>
                    <a class="item" href="#">Body Mist</a>
                </div>
            </div>
            <div class="beauty flex-row">
                <div>
                    <h3><a href="#">Appliances</a></h3>
                    <a class="item" href="#">Hair Straightener</a>
                    <a class="item" href="#">Hair Dryer</a>
                    <a class="item" href="#">Epilator</a>
                </div>
                <hr class="rowhr">
                <div>
                    <h3><a href="#">Men's Grooming</a></h3>
                    <a class="item" href="#">Trimmers</a>
                    <a class="item" href="#">Beard Oil</a>
                    <a class="item" href="#">Hair Wax</a>
                </div>
                <hr class="rowhr">
                <div>
                    <h3><a href="#">Beauty Gift & Makeup Set</a></h3>
                    <a class="item" href="#">Beauty Gift</a>
                    <a class="item" href="#">Makeup Kit</a>
                </div>
                <hr class="rowhr">
                    <h3><a href="#">Premium Beauty</a></h3>
                    <h3><a href="#">Wellness & Hygiene</a></h3>
            </div>
                <div class="beauty flex-row">
                    <h3><a href="#">Top Brands</a></h3>
                    <a class="item" href="#">Lakme</a>
                    <a class="item" href="#">Maybelline</a>
                    <a class="item" href="#">LOreal</a>
                    <a class="item" href="#">Philips</a>
                    <a class="item" href="#">Bath & Body Works</a>
                    <a class="item" href="#">THE BODY SHOP</a>
                    <a class="item" href="#">Biotique</a>
                    <a class="item" href="#">Mamaearth</a>
                    <a class="item" href="#">MCaffeine</a>
                    <a class="item" href="#">Nivea</a>
                    <a class="item" href="#">Lotus Herbals</a>
                    <a class="item" href="#">LOreal Professionnel</a>
                    <a class="item" href="#">KAMA AYURVEDA</a>
                    <a class="item" href="#">M.A.C</a>
                    <a class="item" href="#">Forest Essentials</a>
            </div>
        `;

        container.style.position = "absolute";
        container.style.top = beauty.getBoundingClientRect().bottom + "px"; // Place the hoverbox below the '.men' element
        container.addEventListener("mouseover", keepContainerVisible);
        container.addEventListener("mouseout", hideOnMouseOut);
        transparent.style.top = beauty.getBoundingClientRect().bottom + "px";
        body.append(transparent, container);
    }
}

function studioFunction(){
    if (!container) {
    container = document.createElement("div");
        transparent = document.createElement("div");
        transparent.classList.add("transparent");
        container.classList.add("studiobox");
        container.innerHTML = `
        <div class="mynthra_studio">
        <img class="mynthra_studio_img" src="../images/Myntra_logo.png"> 
        <h4>Studio</h4>
        </div>
        <p>Your daily inspiration for everything fashion</p>
        <div class="studioimgs">
        <img src="../images/bargains/1.shirts.jfif">
        <img src="../images/bargains/2. jeans.jfif">
        <img src="../images/bargains/3.Tshirts.jfif">
        <img src="../images/bargains/9.kurta sets.webp" alt="explore studio" />
        </div>
        <a href="#" class="studiolink">EXPLORE STUDIO  <span style="font-size:20px;"> > </span> </a>
    `
    container.style.position = "absolute";
        container.style.top = studio.getBoundingClientRect().bottom + "px"; // Place the hoverbox below the '.men' element
        container.style.left = studio.getBoundingClientRect().left-100 + "px"; 
        container.addEventListener("mouseover", keepContainerVisible);
        container.addEventListener("mouseout", hideOnMouseOut);
        transparent.style.top = studio.getBoundingClientRect().bottom + "px";
        body.append(transparent, container);
}
}
function hideOnMouseOut(event) {
    // Check if mouse is outside both the '.men' element and the container
    if (!men.contains(event.relatedTarget) && !container.contains(event.relatedTarget)) {
        container.remove(); // Remove container only when mouse is out of both
        transparent.remove();
        container = null; // Reset container to be created again on hover
    }
}

function keepContainerVisible() {
    // Keep the container visible when hovered over
}


let aside=document.querySelector('aside');
let freeshippingbannersidebar=document.querySelector('.FreeShippingBanner-sidebar');
let freeshippingbannerarrow=document.querySelector('.FreeShippingBanner-arrow');

// freeshippingbannersidebar.addEventListener("click", expandFunction);
// freeshippingbannerarrow.addEventListener("click", expandFunction);

// function expandFunction(){
//     if (!container) {
//     container=document.createElement("div");
//     container.classList.add('freeshippingbanner-container');
//     container.innerHTML=`
//                 <div class="banner" id="promotionalBanner">
//                     <div class="top">
//                         <div class="left-side">
//                             <div>
//                                 <h5>Avail Flat</h5>
//                                 <h1>300 OFF</h1>
//                             </div>
//                             <div>
//                                 <h4>Coupon Code: <span style="font-size:20px;">&nbspMYNTRA300</span></h4>
//                                 <p>Applicable on your first order</p>
//                             </div>
//                         </div>
//                         <div class="right-side">
//                             <img src="../images/free banner/300off.png" alt="Promotional Graphic">
//                             <a href="#" class="sign-up-btn">SIGN UP NOW ></a>
//                         </div>
//                     </div>
//                     <hr class="freebannerhr">
//                     <div class="bottom">
//                         <p><span class="material-symbols-outlined">verified</span>Genuine Products</p>
//                         <p><span class="material-symbols-outlined">apparel</span>Try & Buy</p>
//                         <p><span class="material-symbols-outlined">swap_horiz</span>Easy Exchange & Returns</p>
//                     </div>
//                 </div>
//     `
//         aside.append(container);
//     }
// }