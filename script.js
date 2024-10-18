let searchbar=document.querySelector('.search_bar');
let searchinput=document.querySelector('.search_input');
searchinput.addEventListener('focus', backgroundcolor);
searchinput.addEventListener('blur', backgroundcolor); 

function backgroundcolor(){
    searchbar.classList.toggle('searchbarhighlight');
}
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
                    <h3><a href="products.html">Topwear</a></h3>
                    <a class="item" href="products.html">T-Shirts</a>
                    <a class="item" href="products.html">Casual Shirts</a>
                    <a class="item" href="products.html">Formal Shirts</a>
                    <a class="item" href="products.html">Sweatshirts</a>
                    <a class="item" href="products.html">Sweaters</a>
                    <a class="item" href="products.html">Jackets</a>
                    <a class="item" href="products.html">Blazers & Coats</a>
                    <a class="item" href="products.html">Suits</a>
                    <a class="item" href="products.html">Rain Jackets</a>
                </div>
                <hr class="rowhr">
                <div>
                    <h3><a href="products.html">Indian & Festive Wear</a></h3>
                    <a class="item" href="products.html">Kurtas & Kurta Sets</a>
                    <a class="item" href="products.html">Sherwanis</a>
                    <a class="item" href="products.html">Nehru Jackets</a>
                    <a class="item" href="products.html">Dhotis</a>
                </div>
            </div>
            <div class="flex-row">
                <div>
                    <h3><a href="products.html">Bottomwear</a></h3>
                    <a class="item" href="products.html">Jeans</a>
                    <a class="item" href="products.html">Casual Trousers</a>
                    <a class="item" href="products.html">Formal Trousers</a>
                    <a class="item" href="products.html">Shorts</a>
                    <a class="item" href="products.html">Track Pants & Joggers</a>
                </div>
                <hr class="rowhr">
                <div>
                    <h3><a href="products.html">Innerwear & Sleepwear</a></h3>
                    <a class="item" href="products.html">Briefs & Trunks</a>
                    <a class="item" href="products.html">Boxers</a>
                    <a class="item" href="products.html">Vests</a>
                    <a class="item" href="products.html">Sleepwear & Loungewear</a>
                    <a class="item" href="products.html">Thermals</a>
                </div>
                <hr class="rowhr">
                <div>
                    <h3><a href="products.html">Plus Size</a></h3>
                </div>
            </div>
            <div class="flex-row">
                <div>
                    <h3><a href="products.html">Footwear</a></h3>
                    <a class="item" href="products.html">Casual Shoes</a>
                    <a class="item" href="products.html">Sports Shoes</a>
                    <a class="item" href="products.html">Formal Shoes</a>
                    <a class="item" href="products.html">Sneakers</a>
                    <a class="item" href="products.html">Sandals & Floaters</a>
                    <a class="item" href="products.html">Flip Flops</a>
                    <a class="item" href="products.html">Socks</a>
                </div>
                <hr class="rowhr">
                <div>
                    <h3><a href="products.html">Personal Care & Grooming</a></h3>
                    <h3><a href="products.html">Sunglasses & Frames</a></h3>
                    <h3><a href="products.html">Watches</a></h3>
                </div>
            </div>
            <div class="flex-row">
                <div>
                    <h3><a href="products.html">Sports & Active Wear</a></h3>
                    <a class="item" href="products.html">Sports Shoes</a>
                    <a class="item" href="products.html">Sports Sandals</a>
                    <a class="item" href="products.html">Active T-Shirts</a>
                    <a class="item" href="products.html">Track Pants & Shorts</a>
                    <a class="item" href="products.html">Tracksuits</a>
                    <a class="item" href="products.html">Jackets & Sweatshirts</a>
                    <a class="item" href="products.html">Sports Accessories</a>
                    <a class="item" href="products.html">Swimwear</a>
                </div>
                <hr class="rowhr">
                <div>
                    <h3><a href="products.html">Gadgets</a></h3>
                    <a class="item" href="products.html">Smart Wearables</a>
                    <a class="item" href="products.html">Fitness Gadgets</a>
                    <a class="item" href="products.html">Headphones</a>
                    <a class="item" href="products.html">Speakers</a>
                </div>
            </div>
            <div class="flex-row">
                <div>
                    <h3><a href="products.html">Fashion Accessories</a></h3>
                    <a class="item" href="products.html">Wallets</a>
                    <a class="item" href="products.html">Belts</a>
                    <a class="item" href="products.html">Perfumes & Body Mists</a>
                    <a class="item" href="products.html">Trimmers</a>
                    <a class="item" href="products.html">Deodorants</a>
                    <a class="item" href="products.html">Ties, Cufflinks & Pocket Squares</a>
                    <a class="item" href="products.html">Accessory Gift Sets</a>
                    <a class="item" href="products.html">Caps & Hats</a>
                    <a class="item" href="products.html">Mufflers, Scarves & Gloves</a>
                    <a class="item" href="products.html">Phone Cases</a>
                    <a class="item" href="products.html">Rings & Wristwear</a>
                    <a class="item" href="products.html">Helmets</a>
                </div>
                <hr class="rowhr">
                <div>
                    <h3><a href="products.html">Bags & Backpacks</a></h3>
                    <h3><a href="products.html">Luggages & Trolleys</a></h3>
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
                    <h3><a href="products.html">Indian & Fusion Wear</a></h3>
                    <a class="item" href="products.html">Kurtas & Suits</a>
                    <a class="item" href="products.html">Kurtis, Tunics & Tops</a>
                    <a class="item" href="products.html">Sarees</a>
                    <a class="item" href="products.html">Ethnic Wear</a>
                    <a class="item" href="products.html">Leggings, Salwars & Churidars</a>
                    <a class="item" href="products.html">Skirts & Palazzos</a>
                    <a class="item" href="products.html">Dress Materials</a>
                    <a class="item" href="products.html">Lehenga Cholis</a>
                    <a class="item" href="products.html">Dupattas & Shawls</a>
                    <a class="item" href="products.html">Jackets</a>
                    <hr class="rowhr">
                    <h3><a href="products.html">Belts, Scarves & More</a></h3>
                    <h3><a href="products.html">Watches & Wearables</a></h3>
                </div>
            </div>
            <div class="women flex-row">
                    <div>
                    <h3><a href="products.html">Western Wear</a></h3>
                    <a class="item" href="products.html">Dresses</a>
                    <a class="item" href="products.html">Tops</a>
                    <a class="item" href="products.html">Tshirts</a>
                    <a class="item" href="products.html">Jeans</a>
                    <a class="item" href="products.html">Trousers & Capris</a>
                    <a class="item" href="products.html">Shorts & Skirts</a>
                    <a class="item" href="products.html">Co-ords</a>
                    <a class="item" href="products.html">Playsuits</a>
                    <a class="item" href="products.html">Jumpsuits</a>
                    <a class="item" href="products.html">Shrugs</a>
                    <a class="item" href="products.html">Sweaters & Sweatshirts</a>
                    <a class="item" href="products.html">Jackets & Coats</a>
                    <a class="item" href="products.html">Blazers & Waistcoats</a>
                </div>
                <hr class="rowhr">
                    <h3><a href="products.html">Plus Size</a></h3>
            </div>
            <div class="women flex-row">
                    <h3><a href="products.html">Maternity</a></h3>
                    <h3><a href="products.html">Sunglasses & Frames</a></h3>
                <div>
                    <h3><a href="products.html">Footwear</a></h3>
                    <a class="item" href="products.html">Flats</a>
                    <a class="item" href="products.html">Casual Shoes</a>
                    <a class="item" href="products.html">Heels</a>
                    <a class="item" href="products.html">Boots</a>
                    <a class="item" href="products.html">Sports Shoes & Floaters</a>
                </div>
                <hr class="rowhr">
                <div>
                    <h3><a href="products.html">Sports & Active Wear</a></h3>
                    <a class="item" href="products.html">Clothing</a>
                    <a class="item" href="products.html">Footwear</a>
                    <a class="item" href="products.html">Sports Accessories</a>
                    <a class="item" href="products.html">Sports Equipment</a>
                </div>
            </div>
            <div class="women flex-row">
                <div>
                    <h3><a href="products.html">Lingerie & Sleepwear</a></h3>
                    <a class="item" href="products.html">Bra</a>
                    <a class="item" href="products.html">Briefs</a>
                    <a class="item" href="products.html">Shapewear</a>
                    <a class="item" href="products.html">Sleepwear & Loungewear</a>
                    <a class="item" href="products.html">Swimwear</a>
                    <a class="item" href="products.html">Camisoles & Thermals</a>
                </div>
                <hr class="rowhr">
                <div>
                    <h3><a href="products.html">Beauty & Personal Care</a></h3>
                    <a class="item" href="products.html">Makeup</a>
                    <a class="item" href="products.html">Skincare</a>
                    <a class="item" href="products.html">Premium Beauty</a>
                    <a class="item" href="products.html">Lipsticks</a>
                    <a class="item" href="products.html">Fragrances</a>
                </div>
            </div>
            <div class="women flex-row">
                <div>
                    <h3><a href="products.html">Gadgets</a></h3>
                    <a class="item" href="products.html">Smart Wearables</a>
                    <a class="item" href="products.html">Fitness Gadgets</a>
                    <a class="item" href="products.html">Headphones</a>
                    <a class="item" href="products.html">Speakers</a>
                </div>
                <hr class="rowhr">
                <div>
                    <h3><a href="products.html">Jewellery</a></h3>
                    <a class="item" href="products.html">Fashion Jewellery</a>
                    <a class="item" href="products.html">Fine Jewellery</a>
                    <a class="item" href="products.html">Earrings</a>
                </div>
                <hr class="rowhr">
                    <h3><a href="products.html">Bags & Backpacks</a></h3>
                    <h3><a href="products.html">Handbags, Bags & Wallets</a></h3>
                    <h3><a href="products.html">Luggages & Trolleys</a></h3>
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
                    <h3><a href="products.html">Boys Clothing</a></h3>
                    <a class="item" href="products.html">T-Shirts</a>
                    <a class="item" href="products.html">Shirts</a>
                    <a class="item" href="products.html">Shorts</a>
                    <a class="item" href="products.html">Jeans</a>
                    <a class="item" href="products.html">Trousers</a>
                    <a class="item" href="products.html">Clothing Sets</a>
                    <a class="item" href="products.html">Ethnic Wear</a>
                    <a class="item" href="products.html">Track Pants & Pyjamas</a>
                    <a class="item" href="products.html">Jacket, Sweater & Sweatshirts</a>
                    <a class="item" href="products.html">Party Wear</a>
                    <a class="item" href="products.html">Innerwear & Thermals</a>
                    <a class="item" href="products.html">Nightwear & Loungewear</a>
                    <a class="item" href="products.html">Value Packs</a>
            </div>
            <div class="kids flex-row">
                    <h3><a href="products.html">Girls Clothing</a></h3>
                    <a class="item" href="products.html">Dresses</a>
                    <a class="item" href="products.html">Tops</a>
                    <a class="item" href="products.html">Tshirts</a>
                    <a class="item" href="products.html">Clothing Sets</a>
                    <a class="item" href="products.html">Lehenga Choli</a>
                    <a class="item" href="products.html">Kurta Sets</a>
                    <a class="item" href="products.html">Party Wear</a>
                    <a class="item" href="products.html">Dungarees & Jumpsuits</a>
                    <a class="item" href="products.html">Skirts & Shorts</a>
                    <a class="item" href="products.html">Tights & Leggings</a>
                    <a class="item" href="products.html">Jeans, Trousers & Capris</a>
                    <a class="item" href="products.html">Jacket, Sweater & Sweatshirts</a>
                    <a class="item" href="products.html">Innerwear & Thermals</a>
                    <a class="item" href="products.html">Nightwear & Loungewear</a>
                    <a class="item" href="products.html">Value Packs</a>
            </div>
            <div class="kids flex-row">
                <div>
                    <h3><a href="products.html">Footwear</a></h3>
                    <a class="item" href="products.html">Casual Shoes</a>
                    <a class="item" href="products.html">Flipflops</a>
                    <a class="item" href="products.html">Sports Shoes</a>
                    <a class="item" href="products.html">Flats</a>
                    <a class="item" href="products.html">Sandals</a>
                    <a class="item" href="products.html">Heels</a>
                    <a class="item" href="products.html">School Shoes</a>
                    <a class="item" href="products.html">Socks</a>
                </div>
                <hr class="rowhr">
                <div>
                    <h3><a href="products.html">Toys & Games</a></h3>
                    <a class="item" href="products.html">Learning & Development</a>
                    <a class="item" href="products.html">Activity Toys</a>
                    <a class="item" href="products.html">Soft Toys</a>
                    <a class="item" href="products.html">Action Figure / Play Set</a>
                </div>
            </div>
            <div class="kids flex-row">
                <div>
                    <h3><a href="products.html">Infants</a></h3>
                    <a class="item" href="products.html">Bodysuits</a>
                    <a class="item" href="products.html">Rompers & Sleepsuits</a>
                    <a class="item" href="products.html">Clothing Sets</a>
                    <a class="item" href="products.html">Tshirts & Tops</a>
                    <a class="item" href="products.html">Dresses</a>
                    <a class="item" href="products.html">Bottom Wear</a>
                    <a class="item" href="products.html">Winter Wear</a>
                    <a class="item" href="products.html">Innerwear & Sleepwear</a>
                    <a class="item" href="products.html">Infant Care</a>
                </div>
                <hr class="rowhr">
                    <h3><a href="products.html">Home & Bath</a></h3>
                    <h3><a href="products.html">Personal Care</a></h3>
            </div>
            <div class="kids flex-row">
                <div>
                    <h3><a href="products.html">Kids Accessories</a></h3>
                    <a class="item" href="products.html">Bags & Backpacks</a>
                    <a class="item" href="products.html">Watches</a>
                    <a class="item" href="products.html">Jewellery & Hair Accessory</a>
                    <a class="item" href="products.html">Sunglasses</a>
                    <a class="item" href="products.html">Masks & Protective Gears</a>
                    <a class="item" href="products.html">Caps & Hats</a>
                </div>
                <hr class="rowhr">
                <div>
                    <h3><a href="products.html">Brands</a></h3>
                    <a class="item" href="products.html">H&M</a>
                    <a class="item" href="products.html">Max Kids</a>
                    <a class="item" href="products.html">Pantaloons</a>
                    <a class="item" href="products.html">United Colors Of Benetton Kids</a>
                    <a class="item" href="products.html">YK</a>
                    <a class="item" href="products.html">U.S. Polo Assn. Kids</a>
                    <a class="item" href="products.html">Mothercare</a>
                    <a class="item" href="products.html">HRX</a>
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
                    <h3><a href="products.html">Bed Linen & Furnishing</a></h3>
                    <a class="item" href="products.html">Bed Runners</a>
                    <a class="item" href="products.html">Mattress Protectors</a>
                    <a class="item" href="products.html">Bedsheets</a>
                    <a class="item" href="products.html">Bedding Sets</a>
                    <a class="item" href="products.html">Blankets, Quilts & Dohars</a>
                    <a class="item" href="products.html">Pillows & Pillow Covers</a>
                    <a class="item" href="products.html">Bed Covers</a>
                    <a class="item" href="products.html">Diwan Sets</a>
                    <a class="item" href="products.html">Chair Pads & Covers</a>
                    <a class="item" href="products.html">Sofa Covers</a>
                </div>
                <hr class="rowhr">
                <div>
                    <h3><a href="products.html">Flooring</a></h3>
                    <a class="item" href="products.html">Floor Runners</a>
                    <a class="item" href="products.html">Carpets</a>
                    <a class="item" href="products.html">Floor Mats & Dhurries</a>
                    <a class="item" href="products.html">Door Mats</a>
                </div>
            </div>
            <div class="home flex-row">
                <div>
                    <h3><a href="products.html">Bath</a></h3>
                    <a class="item" href="products.html">Bath Towels</a>
                    <a class="item" href="products.html">Hand & Face Towels</a>
                    <a class="item" href="products.html">Beach Towels</a>
                    <a class="item" href="products.html">Towels Set</a>
                    <a class="item" href="products.html">Bath Rugs</a>
                    <a class="item" href="products.html">Bath Robes</a>
                    <a class="item" href="products.html">Bathroom Accessories</a>
                    <a class="item" href="products.html">Shower Curtains</a>
                </div>
                <hr class="rowhr">
                <div>
                    <h3><a href="products.html">Lamps & Lighting</a></h3>
                    <a class="item" href="products.html">Floor Lamps</a>
                    <a class="item" href="products.html">Ceiling Lamps</a>
                    <a class="item" href="products.html">Table Lamps</a>
                    <a class="item" href="products.html">Wall Lamps</a>
                    <a class="item" href="products.html">Outdoor Lamps</a>
                    <a class="item" href="products.html">String Lights</a>
                </div>
            </div>
            <div class="home flex-row">
                <div>
                    <h3><a href="products.html">Home Décor</a></h3>
                    <a class="item" href="products.html">Plants & Planters</a>
                    <a class="item" href="products.html">Aromas & Candles</a>
                    <a class="item" href="products.html">Clocks</a>
                    <a class="item" href="products.html">Mirrors</a>
                    <a class="item" href="products.html">Wall Décor</a>
                    <a class="item" href="products.html">Festive Decor</a>
                    <a class="item" href="products.html">Pooja Essentials</a>
                    <a class="item" href="products.html">Wall Shelves</a>
                    <a class="item" href="products.html">Fountains</a>
                    <a class="item" href="products.html">Showpieces & Vases</a>
                    <a class="item" href="products.html">Ottoman</a>
                </div>
                <hr class="rowhr">
                    <h3><a class="item" href="products.html">Cushions & Cushion Covers</a></h3>
                    <h3><a class="item" href="products.html">Curtains</a></h3>
            </div>
            <div class="home flex-row">
                    <h3><a class="item" href="products.html">Home Gift Sets</a></h3>
                <div>
                    <h3><a href="products.html">Kitchen & Table</a></h3>
                    <a class="item" href="products.html">Table Runners</a>
                    <a class="item" href="products.html">Dinnerware & Serveware</a>
                    <a class="item" href="products.html">Cups and Mugs</a>
                    <a class="item" href="products.html">Bakeware & Cookware</a>
                    <a class="item" href="products.html">Kitchen Storage & Tools</a>
                    <a class="item" href="products.html">Bar & Drinkware</a>
                    <a class="item" href="products.html">Table Covers & Furnishings</a>
                </div>
                <hr class="rowhr">
                <div>
                    <h3><a href="products.html">Storage</a></h3>
                    <a class="item" href="products.html">Bins</a>
                    <a class="item" href="products.html">Hangers</a>
                    <a class="item" href="products.html">Organisers</a>
                    <a class="item" href="products.html">Hooks & Holders</a>
                    <a class="item" href="products.html">Laundry Bags</a>
                </div>
            </div>
            <div class="home flex-row">
                <div>
                    <h3><a href="products.html">Brands</a></h3>
                    <a class="item" href="products.html">H&M</a>
                    <a class="item" href="products.html">Marks & Spencer</a>
                    <a class="item" href="products.html">Home Centre</a>
                    <a class="item" href="products.html">Spaces</a>
                    <a class="item" href="products.html">D'Decor</a>
                    <a class="item" href="products.html">Story@Home</a>
                    <a class="item" href="products.html">Pure Home & Living</a>
                    <a class="item" href="products.html">Swayam</a>
                    <a class="item" href="products.html">Raymond Home</a>
                    <a class="item" href="products.html">Maspar</a>
                    <a class="item" href="products.html">My Trident</a>
                    <a class="item" href="products.html">Cortina</a>
                    <a class="item" href="products.html">Random</a>
                    <a class="item" href="products.html">Ellementry</a>
                    <a class="item" href="products.html">ROMEE</a>
                    <a class="item" href="products.html">SEJ by Nisha Gupta</a>
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
                    <h3><a href="products.html">Makeup</a></h3>
                    <a class="item" href="products.html">Lipstick</a>
                    <a class="item" href="products.html">Lip Gloss</a>
                    <a class="item" href="products.html">Lip Liner</a>
                    <a class="item" href="products.html">Mascara</a>
                    <a class="item" href="products.html">Eyeliner</a>
                    <a class="item" href="products.html">Kajal</a>
                    <a class="item" href="products.html">Eyeshadow</a>
                    <a class="item" href="products.html">Foundation</a>
                    <a class="item" href="products.html">Primer</a>
                    <a class="item" href="products.html">Concealer</a>
                    <a class="item" href="products.html">Compact</a>
                    <a class="item" href="products.html">Nail Polish</a>
                </div>
            </div>
            <div class="beauty flex-row">
                <div>
                    <h3><a href="products.html">Skincare, Bath & Body</a></h3>
                    <a class="item" href="products.html">Face Moisturiser</a>
                    <a class="item" href="products.html">Cleanser</a>
                    <a class="item" href="products.html">Masks & Peel</a>
                    <a class="item" href="products.html">Sunscreen</a>
                    <a class="item" href="products.html">Serum</a>
                    <a class="item" href="products.html">Face Wash</a>
                    <a class="item" href="products.html">Eye Cream</a>
                    <a class="item" href="products.html">Lip Balm</a>
                    <a class="item" href="products.html">Body Lotion</a>
                    <a class="item" href="products.html">Body Wash</a>
                    <a class="item" href="products.html">Body Scrub</a>
                    <a class="item" href="products.html">Hand Cream</a>
                </div>
                <hr class="rowhr">
                <div>
                    <h3><a href="products.html">Baby Care</a></h3>
                    <h3><a href="products.html">Masks</a></h3>
                </div>
            </div>
            <div class="beauty flex-row">
                <div>
                    <h3><a href="products.html">Haircare</a></h3>
                    <a class="item" href="products.html">Shampoo</a>
                    <a class="item" href="products.html">Conditioner</a>
                    <a class="item" href="products.html">Hair Cream</a>
                    <a class="item" href="products.html">Hair Oil</a>
                    <a class="item" href="products.html">Hair Gel</a>
                    <a class="item" href="products.html">Hair Color</a>
                    <a class="item" href="products.html">Hair Serum</a>
                    <a class="item" href="products.html">Hair Accessory</a>
                </div>
                <hr class="rowhr">
                <div>
                    <h3><a href="products.html">Fragrances</a></h3>
                    <a class="item" href="products.html">Perfume</a>
                    <a class="item" href="products.html">Deodorant</a>
                    <a class="item" href="products.html">Body Mist</a>
                </div>
            </div>
            <div class="beauty flex-row">
                <div>
                    <h3><a href="products.html">Appliances</a></h3>
                    <a class="item" href="products.html">Hair Straightener</a>
                    <a class="item" href="products.html">Hair Dryer</a>
                    <a class="item" href="products.html">Epilator</a>
                </div>
                <hr class="rowhr">
                <div>
                    <h3><a href="products.html">Men's Grooming</a></h3>
                    <a class="item" href="products.html">Trimmers</a>
                    <a class="item" href="products.html">Beard Oil</a>
                    <a class="item" href="products.html">Hair Wax</a>
                </div>
                <hr class="rowhr">
                <div>
                    <h3><a href="products.html">Beauty Gift & Makeup Set</a></h3>
                    <a class="item" href="products.html">Beauty Gift</a>
                    <a class="item" href="products.html">Makeup Kit</a>
                </div>
                <hr class="rowhr">
                    <h3><a href="products.html">Premium Beauty</a></h3>
                    <h3><a href="products.html">Wellness & Hygiene</a></h3>
            </div>
                <div class="beauty flex-row">
                    <h3><a href="products.html">Top Brands</a></h3>
                    <a class="item" href="products.html">Lakme</a>
                    <a class="item" href="products.html">Maybelline</a>
                    <a class="item" href="products.html">LOreal</a>
                    <a class="item" href="products.html">Philips</a>
                    <a class="item" href="products.html">Bath & Body Works</a>
                    <a class="item" href="products.html">THE BODY SHOP</a>
                    <a class="item" href="products.html">Biotique</a>
                    <a class="item" href="products.html">Mamaearth</a>
                    <a class="item" href="products.html">MCaffeine</a>
                    <a class="item" href="products.html">Nivea</a>
                    <a class="item" href="products.html">Lotus Herbals</a>
                    <a class="item" href="products.html">LOreal Professionnel</a>
                    <a class="item" href="products.html">KAMA AYURVEDA</a>
                    <a class="item" href="products.html">M.A.C</a>
                    <a class="item" href="products.html">Forest Essentials</a>
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
        <a href="products.html" class="studiolink">EXPLORE STUDIO  <span class="studiolink link"> > </span> </a>
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
let freeshippingbannercontainer=document.querySelector('.freeshippingbanner');
aside.addEventListener("click", expandFunction);


function expandFunction(){
    freeshippingbannersidebar.classList.toggle('expand');
    freeshippingbannerarrow.classList.toggle('FreeShippingBanner-arrow-expanded');
    freeshippingbannerarrow.classList.toggle('FreeShippingBanner-arrow-collapsed');
    freeshippingbannercontainer.classList.toggle('freeshippingbanner-container')
    freeshippingbannercontainer.classList.toggle('show');
}
const navigationDots = document.querySelectorAll('.dot');
const slideContainer = document.querySelector('.carousel-slide');
let currentSlideIndex = 0; // Start at the first slide
const totalSlidesCount = 4; // Total slides (24 images divided by 6 images per slide)

// Function to update the carousel and active dot
function updateCarouselPosition() {
    const slideOffset = -currentSlideIndex * 100; // Shift the carousel by 100% per slide
    slideContainer.style.transform = `translateX(${slideOffset}%)`;

    // Update active navigation dot
    navigationDots.forEach(dot => dot.classList.remove('active'));
    navigationDots[currentSlideIndex].classList.add('active');
}

// Auto-scroll every 3 seconds
let autoScrollSlides = setInterval(() => {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlidesCount; // Loop back after the last slide
    updateCarouselPosition();
}, 3000); // Change the slide every 3 seconds

// Manual dot navigation
navigationDots.forEach((dot, index) => {
    dot.addEventListener('click', function () {
        clearInterval(autoScrollSlides); // Stop auto-scroll when manually navigating
        currentSlideIndex = index;
        updateCarouselPosition();

        // Restart auto-scroll after user interaction
        autoScrollSlides = setInterval(() => {
            currentSlideIndex = (currentSlideIndex + 1) % totalSlidesCount;
            updateCarouselPosition();
        }, 3000);
    });
});

// Initialize the first dot as active
navigationDots[0].classList.add('active');

const branddots = document.querySelectorAll('.branddot');
const carouselSlide1 = document.querySelector('.carousel-slide1');
let currentIndex = 0; // Keeps track of the current slide
const totalSlides = 2; // Since you have 12 images, showing 6 per slide means 2 slides

// Function to update the carousel and the active dot
function updateCarousel() {
    const offset = -currentIndex * 100; // Shift the carousel by 100% per slide
    carouselSlide1.style.transform = `translateX(${offset}%)`;

    // Update active dot
    branddots.forEach(dot => dot.classList.remove('active'));
    branddots[currentIndex].classList.add('active');
}

// Set up auto-scroll every 3 seconds
const autoScroll = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide after the last one
    updateCarousel();
}, 3000); // Auto-scroll every 3 seconds

// Manual dot navigation
branddots.forEach((dot, index) => {
    dot.addEventListener('click', function () {
        clearInterval(autoScroll); // Stop auto-scrolling when user clicks
        currentIndex = index;
        updateCarousel();

        // Optionally, restart auto-scrolling after manual navigation
        setTimeout(() => {
            setInterval(() => {
                currentIndex = (currentIndex + 1) % totalSlides;
                updateCarousel();
            }, 3000);
        }, 3000);
    });
});

// Initialize the first dot as active
branddots[0].classList.add('active');
