// Restaurant Data
const restaurants = [
    {
        id: 1,
        name: "Pizza Paradise",
        cuisine: "Pizza, Italian, Fast Food",
        rating: 4.5,
        deliveryTime: "30-35",
        priceRange: "₹300",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500",
        discount: "50% OFF up to ₹100",
        category: "pizza",
        isVeg: false,
        fastDelivery: true,
        menu: [
            {
                id: 101,
                name: "Margherita Pizza",
                description: "Classic pizza with tomato sauce, mozzarella, and basil",
                price: 299,
                image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300",
                type: "veg",
                category: "Pizza"
            },
            {
                id: 102,
                name: "Pepperoni Pizza",
                description: "Loaded with pepperoni and extra cheese",
                price: 399,
                image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300",
                type: "non-veg",
                category: "Pizza"
            },
            {
                id: 103,
                name: "Vegetarian Supreme",
                description: "Bell peppers, onions, olives, mushrooms, and tomatoes",
                price: 349,
                image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=300",
                type: "veg",
                category: "Pizza"
            },
            {
                id: 104,
                name: "Garlic Bread",
                description: "Crispy garlic bread with herbs and butter",
                price: 149,
                image: "https://images.unsplash.com/photo-1573140401552-3fab0b24f2b6?w=300",
                type: "veg",
                category: "Sides"
            }
        ]
    },
    {
        id: 2,
        name: "Burger House",
        cuisine: "Burgers, American, Fast Food",
        rating: 4.3,
        deliveryTime: "25-30",
        priceRange: "₹250",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500",
        discount: "40% OFF up to ₹80",
        category: "burger",
        isVeg: false,
        fastDelivery: true,
        menu: [
            {
                id: 201,
                name: "Classic Beef Burger",
                description: "Juicy beef patty with lettuce, tomato, and special sauce",
                price: 249,
                image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300",
                type: "non-veg",
                category: "Burgers"
            },
            {
                id: 202,
                name: "Veggie Burger",
                description: "Plant-based patty with fresh vegetables",
                price: 199,
                image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=300",
                type: "veg",
                category: "Burgers"
            },
            {
                id: 203,
                name: "Chicken Burger",
                description: "Crispy chicken with mayo and pickles",
                price: 229,
                image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=300",
                type: "non-veg",
                category: "Burgers"
            }
        ]
    },
    {
        id: 3,
        name: "Biryani Bliss",
        cuisine: "Biryani, North Indian, Mughlai",
        rating: 4.6,
        deliveryTime: "35-40",
        priceRange: "₹350",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500",
        discount: "60% OFF up to ₹120",
        category: "biryani",
        isVeg: false,
        fastDelivery: false,
        menu: [
            {
                id: 301,
                name: "Hyderabadi Chicken Biryani",
                description: "Aromatic basmati rice with tender chicken pieces",
                price: 349,
                image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=300",
                type: "non-veg",
                category: "Biryani"
            },
            {
                id: 302,
                name: "Vegetable Biryani",
                description: "Mixed vegetables with fragrant spices and basmati rice",
                price: 279,
                image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300",
                type: "veg",
                category: "Biryani"
            },
            {
                id: 303,
                name: "Mutton Biryani",
                description: "Succulent mutton pieces in aromatic biryani",
                price: 449,
                image: "https://images.unsplash.com/photo-1642821373181-696a54913e93?w=300",
                type: "non-veg",
                category: "Biryani"
            }
        ]
    },
    {
        id: 4,
        name: "Chinese Wok",
        cuisine: "Chinese, Asian, Noodles",
        rating: 4.4,
        deliveryTime: "30-35",
        priceRange: "₹280",
        image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=500",
        discount: "30% OFF",
        category: "chinese",
        isVeg: false,
        fastDelivery: true,
        menu: [
            {
                id: 401,
                name: "Hakka Noodles",
                description: "Stir-fried noodles with vegetables and sauces",
                price: 249,
                image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=300",
                type: "veg",
                category: "Noodles"
            },
            {
                id: 402,
                name: "Chicken Fried Rice",
                description: "Fried rice with chicken and mixed vegetables",
                price: 279,
                image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300",
                type: "non-veg",
                category: "Rice"
            },
            {
                id: 403,
                name: "Manchurian",
                description: "Crispy vegetable balls in tangy sauce",
                price: 229,
                image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=300",
                type: "veg",
                category: "Starters"
            }
        ]
    },
    {
        id: 5,
        name: "Sweet Treats",
        cuisine: "Desserts, Bakery, Ice Cream",
        rating: 4.7,
        deliveryTime: "20-25",
        priceRange: "₹200",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500",
        discount: "Buy 1 Get 1",
        category: "dessert",
        isVeg: true,
        fastDelivery: true,
        menu: [
            {
                id: 501,
                name: "Chocolate Cake",
                description: "Rich chocolate cake with creamy frosting",
                price: 299,
                image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300",
                type: "veg",
                category: "Cakes"
            },
            {
                id: 502,
                name: "Ice Cream Sundae",
                description: "Three scoops with chocolate sauce and nuts",
                price: 199,
                image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300",
                type: "veg",
                category: "Ice Cream"
            },
            {
                id: 503,
                name: "Cheesecake",
                description: "Classic New York style cheesecake",
                price: 349,
                image: "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=300",
                type: "veg",
                category: "Cakes"
            }
        ]
    },
    {
        id: 6,
        name: "Juice Junction",
        cuisine: "Beverages, Healthy, Juices",
        rating: 4.5,
        deliveryTime: "15-20",
        priceRange: "₹150",
        image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=500",
        discount: "20% OFF",
        category: "drinks",
        isVeg: true,
        fastDelivery: true,
        menu: [
            {
                id: 601,
                name: "Fresh Orange Juice",
                description: "Freshly squeezed orange juice",
                price: 129,
                image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300",
                type: "veg",
                category: "Juices"
            },
            {
                id: 602,
                name: "Mango Smoothie",
                description: "Thick mango smoothie with yogurt",
                price: 149,
                image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=300",
                type: "veg",
                category: "Smoothies"
            }
        ]
    },
    {
        id: 7,
        name: "Health Bowl",
        cuisine: "Healthy, Salads, Bowl",
        rating: 4.6,
        deliveryTime: "25-30",
        priceRange: "₹300",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500",
        discount: "15% OFF",
        category: "healthy",
        isVeg: true,
        fastDelivery: true,
        menu: [
            {
                id: 701,
                name: "Caesar Salad",
                description: "Fresh lettuce with parmesan and caesar dressing",
                price: 249,
                image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300",
                type: "veg",
                category: "Salads"
            },
            {
                id: 702,
                name: "Quinoa Bowl",
                description: "Quinoa with roasted vegetables and tahini",
                price: 299,
                image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=300",
                type: "veg",
                category: "Bowls"
            }
        ]
    },
    {
        id: 8,
        name: "Spice Garden",
        cuisine: "Indian, Curry, Tandoor",
        rating: 4.4,
        deliveryTime: "35-40",
        priceRange: "₹320",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500",
        discount: "40% OFF up to ₹100",
        category: "indian",
        isVeg: false,
        fastDelivery: false,
        menu: [
            {
                id: 801,
                name: "Butter Chicken",
                description: "Creamy tomato-based curry with tender chicken",
                price: 349,
                image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=300",
                type: "non-veg",
                category: "Main Course"
            },
            {
                id: 802,
                name: "Paneer Tikka",
                description: "Marinated cottage cheese grilled to perfection",
                price: 279,
                image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300",
                type: "veg",
                category: "Starters"
            },
            {
                id: 803,
                name: "Dal Makhani",
                description: "Creamy black lentils slow-cooked overnight",
                price: 249,
                image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300",
                type: "veg",
                category: "Main Course"
            }
        ]
    }
];

// Global Variables
let cart = [];
let currentUser = null;
let filteredRestaurants = [...restaurants];
let currentFilter = 'all';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    displayRestaurants(restaurants);
    loadCart();
    loadUser();
    attachEventListeners();
});

// Display Restaurants
function displayRestaurants(restaurantList) {
    const grid = document.getElementById('restaurant-grid');
    grid.innerHTML = '';

    restaurantList.forEach(restaurant => {
        const card = document.createElement('div');
        card.className = 'restaurant-card';
        card.onclick = () => openRestaurant(restaurant.id);
        
        card.innerHTML = `
            <div class="restaurant-image">
                <img src="${restaurant.image}" alt="${restaurant.name}">
                ${restaurant.discount ? `<div class="discount-badge">${restaurant.discount}</div>` : ''}
            </div>
            <div class="restaurant-info">
                <h3 class="restaurant-name">${restaurant.name}</h3>
                <p class="restaurant-cuisine">${restaurant.cuisine}</p>
                <div class="restaurant-meta">
                    <span class="rating">
                        <i class="fas fa-star"></i>
                        ${restaurant.rating}
                    </span>
                    <span class="delivery-time">${restaurant.deliveryTime} mins</span>
                    <span class="price-range">${restaurant.priceRange} for one</span>
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// Open Restaurant Modal
function openRestaurant(restaurantId) {
    const restaurant = restaurants.find(r => r.id === restaurantId);
    if (!restaurant) return;

    const modal = document.getElementById('restaurant-modal');
    const details = document.getElementById('restaurant-details');
    
    // Group menu items by category
    const menuByCategory = {};
    restaurant.menu.forEach(item => {
        if (!menuByCategory[item.category]) {
            menuByCategory[item.category] = [];
        }
        menuByCategory[item.category].push(item);
    });

    details.innerHTML = `
        <div class="restaurant-header">
            <img src="${restaurant.image}" alt="${restaurant.name}">
            <div class="restaurant-header-info">
                <h2>${restaurant.name}</h2>
                <p>${restaurant.cuisine}</p>
                <div style="display: flex; gap: 20px; margin-top: 15px;">
                    <span class="rating">
                        <i class="fas fa-star"></i>
                        ${restaurant.rating}
                    </span>
                    <span>${restaurant.deliveryTime} mins</span>
                    <span>${restaurant.priceRange} for one</span>
                </div>
            </div>
        </div>
        <div class="restaurant-menu">
            ${Object.keys(menuByCategory).map(category => `
                <div class="menu-section">
                    <h3>${category}</h3>
                    ${menuByCategory[category].map(item => `
                        <div class="menu-item">
                            <div class="menu-item-info">
                                <span class="menu-item-type ${item.type}">${item.type === 'veg' ? '🟢' : '🔴'} ${item.type.toUpperCase()}</span>
                                <h4 class="menu-item-name">${item.name}</h4>
                                <p class="menu-item-description">${item.description}</p>
                                <p class="menu-item-price">₹${item.price}</p>
                            </div>
                            <div class="menu-item-right">
                                <img src="${item.image}" alt="${item.name}" class="menu-item-image">
                                <button class="add-to-cart-btn" onclick="addToCart(${restaurant.id}, ${item.id})">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `).join('')}
        </div>
    `;

    modal.classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

// Close Restaurant Modal
function closeRestaurantModal() {
    document.getElementById('restaurant-modal').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

// Add to Cart
function addToCart(restaurantId, itemId) {
    const restaurant = restaurants.find(r => r.id === restaurantId);
    const item = restaurant.menu.find(i => i.id === itemId);
    
    const existingItem = cart.find(c => c.itemId === itemId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            itemId: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            restaurant: restaurant.name,
            quantity: 1
        });
    }
    
    updateCart();
    saveCart();
    showNotification('Item added to cart!');
}

// Update Cart Display
function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartFooter = document.getElementById('cart-footer');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
                <small>Add items to get started</small>
            </div>
        `;
        cartFooter.style.display = 'none';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-restaurant">${item.restaurant}</div>
                    <div class="cart-item-controls">
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="updateQuantity(${item.itemId}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity(${item.itemId}, 1)">+</button>
                        </div>
                        <span class="cart-item-price">₹${item.price * item.quantity}</span>
                    </div>
                </div>
            </div>
        `).join('');
        
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const deliveryFee = 40;
        const taxes = Math.round(subtotal * 0.05);
        const total = subtotal + deliveryFee + taxes;
        
        document.getElementById('subtotal').textContent = `₹${subtotal}`;
        document.getElementById('delivery-fee').textContent = `₹${deliveryFee}`;
        document.getElementById('taxes').textContent = `₹${taxes}`;
        document.getElementById('grand-total').textContent = `₹${total}`;
        
        cartFooter.style.display = 'block';
    }
}

// Update Quantity
function updateQuantity(itemId, change) {
    const item = cart.find(c => c.itemId === itemId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        cart = cart.filter(c => c.itemId !== itemId);
    }
    
    updateCart();
    saveCart();
}

// Toggle Cart Sidebar
function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('overlay');
    
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Checkout
function checkout() {
    if (!currentUser) {
        toggleCart();
        toggleAuth();
        showNotification('Please login to continue');
        return;
    }
    
    if (cart.length === 0) {
        showNotification('Your cart is empty');
        return;
    }
    
    const modal = document.getElementById('checkout-modal');
    const checkoutItems = document.getElementById('checkout-items');
    
    checkoutItems.innerHTML = cart.map(item => `
        <div class="checkout-item">
            <span>${item.name} x ${item.quantity}</span>
            <span>₹${item.price * item.quantity}</span>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) + 40 + Math.round(cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) * 0.05);
    document.getElementById('checkout-total').textContent = `₹${total}`;
    
    modal.classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

// Close Checkout
function closeCheckout() {
    document.getElementById('checkout-modal').classList.remove('active');
    if (!document.getElementById('cart-sidebar').classList.contains('active')) {
        document.getElementById('overlay').classList.remove('active');
    }
}

// Place Order
function placeOrder() {
    const address = document.getElementById('delivery-address').value;
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    
    if (!address) {
        showNotification('Please enter delivery address');
        return;
    }
    
    const orderId = 'ORD' + Math.random().toString(36).substr(2, 9).toUpperCase();
    
    // Clear cart
    cart = [];
    updateCart();
    saveCart();
    
    // Close checkout
    closeCheckout();
    toggleCart();
    
    // Show success modal
    document.getElementById('order-id').textContent = orderId;
    document.getElementById('success-modal').classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

// Close Success Modal
function closeSuccessModal() {
    document.getElementById('success-modal').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

// Filter Restaurants
function filterRestaurants(filterType) {
    currentFilter = filterType;
    
    let filtered = [...restaurants];
    
    switch(filterType) {
        case 'rating':
            filtered = filtered.filter(r => r.rating >= 4.0);
            break;
        case 'fast':
            filtered = filtered.filter(r => r.fastDelivery);
            break;
        case 'offers':
            filtered = filtered.filter(r => r.discount);
            break;
        case 'veg':
            filtered = filtered.filter(r => r.isVeg);
            break;
        case 'price-low':
            filtered.sort((a, b) => parseInt(a.priceRange.replace('₹', '')) - parseInt(b.priceRange.replace('₹', '')));
            break;
        case 'price-high':
            filtered.sort((a, b) => parseInt(b.priceRange.replace('₹', '')) - parseInt(a.priceRange.replace('₹', '')));
            break;
    }
    
    filteredRestaurants = filtered;
    displayRestaurants(filtered);
}

// Category Filter
function filterByCategory(category) {
    const filtered = restaurants.filter(r => r.category === category);
    displayRestaurants(filtered);
}

// Search Functionality
function searchRestaurants(query) {
    const filtered = restaurants.filter(r => 
        r.name.toLowerCase().includes(query.toLowerCase()) ||
        r.cuisine.toLowerCase().includes(query.toLowerCase())
    );
    displayRestaurants(filtered);
}

// Slide Categories
function slideCategories(direction) {
    const list = document.getElementById('category-list');
    const scrollAmount = 300;
    
    if (direction === 'next') {
        list.scrollLeft += scrollAmount;
    } else {
        list.scrollLeft -= scrollAmount;
    }
}

// Auth Functions
function toggleAuth() {
    const modal = document.getElementById('auth-modal');
    const overlay = document.getElementById('overlay');
    
    modal.classList.toggle('active');
    
    if (!document.getElementById('cart-sidebar').classList.contains('active')) {
        overlay.classList.toggle('active');
    }
}

function switchAuthTab(tab) {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const tabs = document.querySelectorAll('.auth-tab');
    
    tabs.forEach(t => t.classList.remove('active'));
    
    if (tab === 'login') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        tabs[0].classList.add('active');
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        tabs[1].classList.add('active');
    }
}

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    if (!email || !password) {
        showNotification('Please fill all fields');
        return;
    }
    
    currentUser = { email, name: email.split('@')[0] };
    saveUser();
    updateAuthUI();
    toggleAuth();
    showNotification('Login successful!');
}

function signup() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const phone = document.getElementById('signup-phone').value;
    const password = document.getElementById('signup-password').value;
    
    if (!name || !email || !phone || !password) {
        showNotification('Please fill all fields');
        return;
    }
    
    currentUser = { name, email, phone };
    saveUser();
    updateAuthUI();
    toggleAuth();
    showNotification('Account created successfully!');
}

function updateAuthUI() {
    const authText = document.getElementById('auth-text');
    if (currentUser) {
        authText.textContent = currentUser.name;
    } else {
        authText.textContent = 'Sign In';
    }
}

// Detect Location
function detectLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                document.getElementById('location-input').value = `Lat: ${position.coords.latitude.toFixed(2)}, Lng: ${position.coords.longitude.toFixed(2)}`;
                showNotification('Location detected!');
            },
            (error) => {
                showNotification('Could not detect location');
            }
        );
    } else {
        showNotification('Geolocation not supported');
    }
}

// Local Storage
function saveCart() {
    localStorage.setItem('foodhub_cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('foodhub_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}

function saveUser() {
    localStorage.setItem('foodhub_user', JSON.stringify(currentUser));
}

function loadUser() {
    const savedUser = localStorage.getItem('foodhub_user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateAuthUI();
    }
}

// Notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: #1c1c1c;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Attach Event Listeners
function attachEventListeners() {
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterRestaurants(this.dataset.filter);
        });
    });
    
    // Category items
    document.querySelectorAll('.category-item').forEach(item => {
        item.addEventListener('click', function() {
            filterByCategory(this.dataset.category);
        });
    });
    
    // Search input
    document.getElementById('search-input').addEventListener('input', function(e) {
        searchRestaurants(e.target.value);
    });
    
    // Close modal on overlay click
    document.getElementById('overlay').addEventListener('click', function() {
        document.querySelectorAll('.modal').forEach(modal => modal.classList.remove('active'));
        document.getElementById('cart-sidebar').classList.remove('active');
        this.classList.remove('active');
    });
    
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(400px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(400px); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}
