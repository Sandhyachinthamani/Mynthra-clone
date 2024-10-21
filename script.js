let searchbar=document.querySelector('.search_bar');
let searchinput=document.querySelector('.search_input');
searchinput.addEventListener('focus', backgroundcolor);
searchinput.addEventListener('blur', backgroundcolor); 

function backgroundcolor(){
    searchbar.classList.toggle('searchbarhighlight');
}
let body = document.querySelector('body');
let men=document.querySelector('.men');
let menhoverbox = document.querySelector('.menhoverbox');
let transparentLayer;

men.addEventListener("mouseover", menFunction);
men.addEventListener("mouseout", menhideOnMouseOut);

function menFunction() {
    // Create and append the transparent layer if it doesn't already exist
    if (!transparentLayer) {
        transparentLayer = document.createElement("div");
        transparentLayer.classList.add("transparent");
        body.append(transparentLayer);
    }
    
    // Position hoverbox below the men element
    menhoverbox.style.display = 'flex';  // Make hoverbox visible
    menhoverbox.style.top = men.getBoundingClientRect().bottom + "px";
}

function menhideOnMouseOut(event) {
    // Hide hoverbox and remove transparent layer when mouse leaves
    if (!men.contains(event.relatedTarget) && !menhoverbox.contains(event.relatedTarget)) {
        menhoverbox.style.display = 'none';  // Hide hoverbox
        if (transparentLayer) {
            transparentLayer.remove();  // Remove transparent layer
            transparentLayer = null;    // Reset transparentLayer to null
        }
    }
}

// Ensure hoverbox stays visible when hovering over it
menhoverbox.addEventListener("mouseover", function() {
    menhoverbox.style.display = 'flex';  // Keep hoverbox visible
});

menhoverbox.addEventListener("mouseout", menhideOnMouseOut);


let women = document.querySelector('.women');
let womenhoverbox = document.querySelector('.womenhoverbox');

women.addEventListener("mouseover", womenFunction);
women.addEventListener("mouseout", womenhideOnMouseOut);

function womenFunction() {
    // Create and append the transparent layer if it doesn't already exist
    if (!transparentLayer) {
        transparentLayer = document.createElement("div");
        transparentLayer.classList.add("transparent");
        body.append(transparentLayer);
    }
    
    // Position hoverbox below the men element
    womenhoverbox.style.display = 'flex';  // Make womenhoverbox visible
    womenhoverbox.style.top = men.getBoundingClientRect().bottom + "px";
}

function womenhideOnMouseOut(event) {
    // Hide womenhoverbox and remove transparent layer when mouse leaves
    if (!women.contains(event.relatedTarget) && !womenhoverbox.contains(event.relatedTarget)) {
        womenhoverbox.style.display = 'none';  // Hide womenhoverbox
        if (transparentLayer) {
            transparentLayer.remove();  // Remove transparent layer
            transparentLayer = null;    // Reset transparentLayer to null
        }
    }
}

// Ensure womenhoverbox stays visible when hovering over it
womenhoverbox.addEventListener("mouseover", function() {
    womenhoverbox.style.display = 'flex';  // Keep womenhoverbox visible
});

womenhoverbox.addEventListener("mouseout", womenhideOnMouseOut);

let kids = document.querySelector('.kids');
let kidshoverbox = document.querySelector('.kidshoverbox');

kids.addEventListener("mouseover", kidsFunction);
kids.addEventListener("mouseout", kidshideOnMouseOut);

function kidsFunction() {
    // Create and append the transparent layer if it doesn't already exist
    if (!transparentLayer) {
        transparentLayer = document.createElement("div");
        transparentLayer.classList.add("transparent");
        body.append(transparentLayer);
    }
    
    // Position hoverbox below the kids elekidst
    kidshoverbox.style.display = 'flex';  // Make hoverbox visible
    kidshoverbox.style.top = kids.getBoundingClientRect().bottom + "px";
}

function kidshideOnMouseOut(event) {
    // Hide hoverbox and remove transparent layer when mouse leaves
    if (!kids.contains(event.relatedTarget) && !kidshoverbox.contains(event.relatedTarget)) {
        kidshoverbox.style.display = 'none';  // Hide hoverbox
        if (transparentLayer) {
            transparentLayer.remove();  // Remove transparent layer
            transparentLayer = null;    // Reset transparentLayer to null
        }
    }
}

// Ensure hoverbox stays visible when hovering over it
kidshoverbox.addEventListener("mouseover", function() {
    kidshoverbox.style.display = 'flex';  // Keep hoverbox visible
});

kidshoverbox.addEventListener("mouseout", kidshideOnMouseOut);

let home = document.querySelector('.home');
let homehoverbox = document.querySelector('.homehoverbox');

home.addEventListener("mouseover", homeFunction);
home.addEventListener("mouseout", homehideOnMouseOut);

function homeFunction() {
    // Create and append the transparent layer if it doesn't already exist
    if (!transparentLayer) {
        transparentLayer = document.createElement("div");
        transparentLayer.classList.add("transparent");
        body.append(transparentLayer);
    }
    
    // Position hoverbox below the home elehomet
    homehoverbox.style.display = 'flex';  // Make hoverbox visible
    homehoverbox.style.top = home.getBoundingClientRect().bottom + "px";
}

function homehideOnMouseOut(event) {
    // Hide hoverbox and remove transparent layer when mouse leaves
    if (!home.contains(event.relatedTarget) && !homehoverbox.contains(event.relatedTarget)) {
        homehoverbox.style.display = 'none';  // Hide hoverbox
        if (transparentLayer) {
            transparentLayer.remove();  // Remove transparent layer
            transparentLayer = null;    // Reset transparentLayer to null
        }
    }
}

// Ensure hoverbox stays visible when hovering over it
homehoverbox.addEventListener("mouseover", function() {
    homehoverbox.style.display = 'flex';  // Keep hoverbox visible
});

homehoverbox.addEventListener("mouseout", homehideOnMouseOut);

let beauty = document.querySelector('.beauty');
let beautyhoverbox = document.querySelector('.beautyhoverbox');

beauty.addEventListener("mouseover", beautyFunction);
beauty.addEventListener("mouseout", beautyhideOnMouseOut);

function beautyFunction() {
    // Create and append the transparent layer if it doesn't already exist
    if (!transparentLayer) {
        transparentLayer = document.createElement("div");
        transparentLayer.classList.add("transparent");
        body.append(transparentLayer);
    }
    
    // Position hoverbox below the beauty elebeautyt
    beautyhoverbox.style.display = 'flex';  // Make hoverbox visible
    beautyhoverbox.style.top = beauty.getBoundingClientRect().bottom + "px";
}

function beautyhideOnMouseOut(event) {
    // Hide hoverbox and remove transparent layer when mouse leaves
    if (!beauty.contains(event.relatedTarget) && !beautyhoverbox.contains(event.relatedTarget)) {
        beautyhoverbox.style.display = 'none';  // Hide hoverbox
        if (transparentLayer) {
            transparentLayer.remove();  // Remove transparent layer
            transparentLayer = null;    // Reset transparentLayer to null
        }
    }
}

// Ensure hoverbox stays visible when hovering over it
beautyhoverbox.addEventListener("mouseover", function() {
    beautyhoverbox.style.display = 'flex';  // Keep hoverbox visible
});

beautyhoverbox.addEventListener("mouseout", beautyhideOnMouseOut);

let studio=document.querySelector('.studio');
let studiohoverbox = document.querySelector('.studiohoverbox');

studio.addEventListener("mouseover", studioFunction);
studio.addEventListener("mouseout", studiohideOnMouseOut);

function studioFunction() {
    // Create and append the transparent layer if it doesn't already exist
    if (!transparentLayer) {
        transparentLayer = document.createElement("div");
        transparentLayer.classList.add("transparent");
        body.append(transparentLayer);
    }
    
    // Position hoverbox below the studio elestudiot
    studiohoverbox.style.display = 'flex';  // Make hoverbox visible
    studiohoverbox.style.top = studio.getBoundingClientRect().bottom + "px";
}

function studiohideOnMouseOut(event) {
    // Hide hoverbox and remove transparent layer when mouse leaves
    if (!studio.contains(event.relatedTarget) && !studiohoverbox.contains(event.relatedTarget)) {
        studiohoverbox.style.display = 'none';  // Hide hoverbox
        if (transparentLayer) {
            transparentLayer.remove();  // Remove transparent layer
            transparentLayer = null;    // Reset transparentLayer to null
        }
    }
}

// Ensure hoverbox stays visible when hovering over it
studiohoverbox.addEventListener("mouseover", function() {
    studiohoverbox.style.display = 'flex';  // Keep hoverbox visible
});

studiohoverbox.addEventListener("mouseout", studiohideOnMouseOut);

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
if (slideContainer && navigationDots.length > 0) {
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
}
const branddots = document.querySelectorAll('.branddot');
const carouselSlide1 = document.querySelector('.carousel-slide1');
if (carouselSlide1 && branddots.length > 0) {
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
}


let bagitemscount=document.querySelector('.bagitemscount');

let bagproductsStr = localStorage.getItem('bagproducts');
let bagproducts = bagproductsStr ? JSON.parse(bagproductsStr) : [];

let wishlistproductstr = localStorage.getItem('wishlistproducts');
let wishlistproducts = wishlistproductstr ? JSON.parse(wishlistproductstr) : [];
onload();
function onload(){
    displayproducts();
    displaybagitemscount();
    displaywishlist();
    displaybagitems();
}

function addtobag(productId){
    bagproducts.push(productId);
    displaybagitems();
    displaybagitemscount();
    localStorage.setItem('bagproducts', JSON.stringify(bagproducts));
}

function displaybagitemscount(){
    if(bagproducts.length>0){
        bagitemscount.innerText=bagproducts.length;
        bagitemscount.style.visibility='visible';
    }
    else{
        bagitemscount.style.visibility='hidden';
    }
}

function displayproducts() {
            let productscontainer=document.querySelector('.productscontainer');
        if(productscontainer){
            let innerhtml='';
            productslist.forEach(product=>{
                innerhtml+=`
                    <div class="product">
                            <div class="productinfo">
                                <img class="product-img" src="${product.product_img}" alt="saree">
                                <p class="rating">${product.rating.star}⭐ | ${product.rating.views}</p>
                                <img id="${product.id}" onclick="addtowishlist(${product.id});" class="wishlist" src="../images/wishlist_heart.svg">
                            </div>
                            <h3 class="product-store">${product.product_store}</h3>
                            <p class="product-name">${product.product_name}</p>
                            <div class="product-price">
                                <span class="current-price">Rs.${product.current_price}</span>
                                <span class="original-price">Rs.${product.original_price}</span>
                                <span class="discount">(${product.discount}% Off)</span>
                            </div>
                            <button class="addtobag" onclick="addtobag(${product.id});">Add to Bag</button>
                        </div>
                `
            })
            productscontainer.innerHTML=innerhtml;
        }
}

function addtowishlist(productId) {
    let heartred = document.getElementById(productId);
    const defaultHeartSrc = "../images/wishlist_heart.svg"; // Default heart image source
    const redHeartSrc = "../images/wishlist_heart_red.svg"; // Red heart image source

    // Check the current source of the heart image to toggle
    if (heartred.src.endsWith("wishlist_heart_red.svg")) {
        heartred.src = defaultHeartSrc; // Switch to default heart
        // Remove the product ID from the wishlist array
        wishlistproducts = wishlistproducts.filter(id => id !== productId); 
    } else {
        heartred.src = redHeartSrc; // Switch to red heart
        // Add the product ID to the wishlist array if not already present
        if (!wishlistproducts.includes(productId)) {
            wishlistproducts.push(productId);
        }
    }

    // Save the updated wishlist to localStorage
    localStorage.setItem('wishlistproducts', JSON.stringify(wishlistproducts));
    displaywishlist(productId); // Call to update the displayed wishlist
}

function displaywishlist() {
    let wishlistcontainer = document.querySelector('.wishlistcontainer');
    if (wishlistcontainer) {
        let innerhtml = '';
        // Loop through the product IDs in the wishlist and create the display
        wishlistproducts.forEach(productId => {
            const product = productslist.find(p => p.id === productId); // Get the product details from the original list
            if (product) { // Ensure the product exists
                innerhtml += `
                    <div class="product">
                        <div class="productinfo">
                            <img class="product-img" src="${product.product_img}" alt="saree">
                            <p class="rating">${product.rating.star}⭐ | ${product.rating.views}</p>
                            <img id="${productId}" onclick="addtowishlist(${productId});" class="wishlist" src="../images/wishlist_heart_red.svg"> <!-- Default to red heart if it's in wishlist -->
                        </div>
                        <h3 class="product-store">${product.product_store}</h3>
                        <p class="product-name">${product.product_name}</p>
                        <div class="product-price">
                            <span class="current-price">Rs.${product.current_price}</span>
                            <span class="original-price">Rs.${product.original_price}</span>
                            <span class="discount">(${product.discount}% Off)</span>
                        </div>
                        <button class="addtobag" onclick="addtobag(${productId});">Add to Bag</button>
                    </div>
                `;
            }
        });
        wishlistcontainer.innerHTML = innerhtml; // Update the container with the new innerHTML
    }
}

function displaybagitems(){
    let bagcontainer=document.querySelector('.bagcontainer');
        if(bagcontainer){
            let innerhtml='';
            bagproducts.forEach(productId=>{
                const product = productslist.find(p => p.id === productId);
                if(product){
                innerhtml+=`
                    <div class="product">
                            <div class="productinfo">
                                <img class="product-img" src="${product.product_img}" alt="saree">
                                <p class="rating">${product.rating.star}⭐ | ${product.rating.views}</p>
                                <p class="no_of_items"><button class="_ve">-</button><span class="no_of_items_count">1</span><button class="+ve">+</button></p>
                            </div>
                            <h3 class="product-store">${product.product_store}</h3>
                            <p class="product-name">${product.product_name}</p>
                            <div class="product-price">
                                <span class="current-price">Rs.${product.current_price}</span>
                                <span class="original-price">Rs.${product.original_price}</span>
                                <span class="discount">(${product.discount}% Off)</span>
                            </div>
                            <button class="removefrombag" onclick="removefrombag(${product.id});">Delete</button>
                        </div>
                `
            }
            })
            bagcontainer.innerHTML=innerhtml;
        }
}

function removefrombag(productId) {
    // Filter out the product ID from the bagproducts array
    bagproducts = bagproducts.filter(id => id !== productId);
    
    // Update localStorage with the new bagproducts array
    localStorage.setItem('bagproducts', JSON.stringify(bagproducts));
    
    // Update the displayed bag items
    displaybagitems();
    displaybagitemscount(); // Update the bag item count
}

onload();

