/**
 * e-Auction Application - Main JavaScript File
 * Contains all the application logic, state management and UI interactions
 */

// App State
let currentUser = null;
let users = [
    { 
        username: 'admin', 
        password: 'admin', 
        balance: 10000,
        fullName: 'Admin User',
        email: 'admin@example.com',
        phone: '1234567890',
        totalBids: 0,
        auctionsSold: 0,
        auctionsUnsold: 0,
        joinDate: new Date()
    }
];
let auctions = [
    { 
        id: 1,
        name: "Antique Vase", 
        description: "Beautiful 19th century vase in excellent condition", 
        currentBid: 3000, 
        highestBidder: null, 
        endTime: Date.now() + 600000,
        sold: false,
        unsold: false,
        category: "antiques",
        creator: "admin",
        images: ["v1.png", "v2.png", "v3.png"]
    },
    { 
        id: 2, 
        name: "iPhone 4S", 
        description: "A Piece of History: Factory-Sealed Original iPhone - A Rare Opportunity!", 
        currentBid: 10000, 
        highestBidder: null, 
        endTime: Date.now() + 900000,
        sold: false,
        unsold: false,
        category: "electronics",
        creator: "admin",
        images: [
            "p1.png",
            "p2.png",
            "p3.png",
            "p4.png"
        ]
    },
    { 
        id: 3, 
        name: "Vintage Pocket Watch", 
        description: "Rare 1960s pocket watch, fully serviced", 
        currentBid: 5000, 
        highestBidder: null, 
        endTime: Date.now() + 1200000,
        sold: false,
        unsold: false,
        category: "collectibles",
        creator: "admin",
        images: [
            "w1.jpg",
            "w2.jpeg",
            "w3.png"
        ]
    },
    { 
        id: 4, 
        name: "Rare Coin Collection", 
        description: "Set of 10 rare coins from 1800s", 
        currentBid: 8000, 
        highestBidder: null, 
        endTime: Date.now() + 1500000,
        sold: false,
        unsold: false,
        category: "collectibles",
        creator: "admin",
        images: [
            "coin1.png",
            "coin2.png"
        ]
    },
    { 
        id: 5, 
        name: "Designer Handbag", 
        description: "Limited edition designer handbag", 
        currentBid: 15000, 
        highestBidder: null, 
        endTime: Date.now() + 1800000,
        sold: false,
        unsold: false,
        category: "fashion",
        creator: "admin",
        images: [
            "h1.png",
            "h2.png",
            "h3.png",
            "h4.png"
        ]
    },
    { 
        id: 6, 
        name: "Oil Painting", 
        description: "Original oil painting by local artist", 
        currentBid: 7000, 
        highestBidder: null, 
        endTime: Date.now() + 2000000,
        sold: false,
        unsold: false,
        category: "art",
        creator: "admin",
        images: [
            "op1.png",
            "op2.png"
        ]
    },
    { 
        id: 7, 
        name: "Vintage Camera", 
        description: "Classic film camera from 1970s", 
        currentBid: 4500, 
        highestBidder: null, 
        endTime: Date.now() + 1600000,
        sold: false,
        unsold: false,
        category: "collectibles",
        creator: "admin",
        images: [
            "c1.jpg",
            "c2.jpeg"
        ]
    },
    { 
        id: 8, 
        name: "Computer", 
        description: "iMac G3", 
        currentBid: 25000, 
        highestBidder: null, 
        endTime: Date.now() + 1400000,
        sold: false,
        unsold: false,
        category: "electronics",
        creator: "admin",
        images: [
            "l1.png",
            "l2.png",
            "l3.png"
        ]
    },
    { 
        id: 9, 
        name: "Sony Walkman TPS-L2", 
        description: " The original portable music revolution — a classic 1979 Sony Walkman in working condition", 
        currentBid: 5000, 
        highestBidder: null, 
        endTime: Date.now() + 1600000,
        sold: false,
        unsold: false,
        category: "electronics",
        creator: "admin",
        images: [
            "sony1.png",
            "sony2.png",
            "sony3.png"
        ]
    },
    { 
        id: 10, 
        name: "Victorian Era Oil Lamp", 
        description: " An elegant brass-and-glass oil lamp from the late 1800s, fully restored and functional.", 
        currentBid: 3500, 
        highestBidder: null, 
        endTime: Date.now() + 1600000,
        sold: false,
        unsold: false,
        category: "antiques",
        creator: "admin",
        images: [
            "lamp1.png",
            "lamp2.png",
            "lamp3.png"
        ]
    },
    { 
        id: 11, 
        name: "Ancient Persian Dagger", 
        description: "An authentic ceremonial dagger with engraved blade and ornate hilt, dated ~17th century.", 
        currentBid: 3500, 
        highestBidder: null, 
        endTime: Date.now() + 1600000,
        sold: false,
        unsold: false,
        category: "antiques",
        creator: "admin",
        images: [
            "knife1.png",
            "knife2.png",
            "knife3.png"
        ]
    },
    {
        id: 12, 
        name: "Abstract Canvas by Emerging Artist", 
        description: "A bold, colorful abstract painting on 36x24 canvas, signed and framed.", 
        currentBid: 3500, 
        highestBidder: null, 
        endTime: Date.now() + 1600000,
        sold: false,
        unsold: false,
        category: "art",
        creator: "admin",
        images: [
            "panit1.png",
            "paint2.png"
        ]
    },
    {
        id: 13, 
        name: "Ink Sketch of Old Town", 
        description: "Detailed pen-and-ink architectural sketch of a 19th-century European town.", 
        currentBid: 2500, 
        highestBidder: null, 
        endTime: Date.now() + 1600000,
        sold: false,
        unsold: false,
        category: "art",
        creator: "admin",
        images: [
            "paint3.jpg"
        ]
    },
    {
        id: 14, 
        name: "Designer Silk Scarf", 
        description: "Limited-edition silk scarf from a Parisian fashion house, hand-rolled edges.", 
        currentBid: 3000, 
        highestBidder: null, 
        endTime: Date.now() + 1600000,
        sold: false,
        unsold: false,
        category: "fashion",
        creator: "admin",
        images: [
            "scarf1.png",
            "scarf2.png",
            "scarf3.png"
        ]
    },
    {
        id: 15, 
        name: "Luxury Heels by Christian Louboutin", 
        description: "Iconic red-sole stilettos — genuine leather, size EU 39, lightly worn, with original box.", 
        currentBid: 8000, 
        highestBidder: null, 
        endTime: Date.now() + 1600000,
        sold: false,
        unsold: false,
        category: "fashion",
        creator: "admin",
        images: [
            "shopping.webp",
            "shopping2.webp"
        ]
    }
];
let history = [];
let lastAuctionCheck = Date.now();
let currentFullscreenIndex = 0;
let currentFullscreenAuctionId = null;

// DOM Elements
const paymentModal = document.getElementById('payment-modal');
const paymentForm = document.getElementById('payment-form');
const paymentMethodSelect = document.getElementById('payment-method');
const upiFields = document.getElementById('upi-fields');
const cardFields = document.getElementById('card-fields');
const netbankingFields = document.getElementById('netbanking-fields');
const mainApp = document.getElementById('main-app');
const homeContent = document.getElementById('home-content');
const authModal = document.getElementById('auth-modal');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginTab = document.getElementById('login-tab');
const registerTab = document.getElementById('register-tab');
const loginFormContainer = document.getElementById('login-form-container');
const registerFormContainer = document.getElementById('register-form-container');
const usernameError = document.getElementById('username-error');
const headerLoginBtn = document.getElementById('header-login');
const headerRegisterBtn = document.getElementById('header-register');
const headerLogoutBtn = document.getElementById('header-logout');
const usernameDisplay = document.getElementById('username-display');
const heroCtaButton = document.getElementById('hero-cta');
const heroSection = document.querySelector('.hero');
const logoHomeBtn = document.getElementById('logo-home-btn');

// Page Sections
const liveSection = document.getElementById('live-section');
const createSection = document.getElementById('create-section');
const depositSection = document.getElementById('deposit-section');
const historySection = document.getElementById('history-section');
const profileSection = document.getElementById('profile-section');
const auctionDetailSection = document.getElementById('auction-detail-section');

// List Containers
const auctionsList = document.getElementById('auctions-list');
const homeAuctionsList = document.getElementById('home-auctions-list');
const historyList = document.getElementById('history-list');
const balanceDisplay = document.getElementById('user-balance');
const imagePreviewContainer = document.getElementById('image-preview-container');
const imageError = document.getElementById('image-error');
const auctionDetailContainer = document.getElementById('auction-detail-container');
const backToAuctionsBtn = document.getElementById('back-to-auctions');
let currentAuctionDetailId = null;

/**
 * Initializes the application
 */
function init() {
    setupEventListeners();
    updateHeader();
    initPages();
    initAnimations();
    setupKeyboardNavigation();
    startAutoImageRotation();
    
    if (currentUser) {
        homeContent.classList.add('hidden');
        mainApp.classList.remove('hidden');
        heroSection.style.display = 'none';
        showSection(liveSection);
        renderCategoryTabs();
    } else {
        showHomePage();
    }
    
    renderHomeAuctions();
    setupThemeToggle();
    
    // Setup modal listeners from the new HTML content
    document.querySelector('.footer-link[onclick="showAboutModal()"]').addEventListener('click', showAboutModal);
    document.querySelector('.footer-link[onclick="showTermsModal()"]').addEventListener('click', showTermsModal);
    document.querySelector('.footer-link[onclick="showPrivacyModal()"]').addEventListener('click', showPrivacyModal);
    document.querySelector('.footer-link[onclick="showHelpModal()"]').addEventListener('click', showHelpModal);
    document.querySelector('.footer-link[onclick="showContactModal()"]').addEventListener('click', showContactModal);
}

/**
 * Shows the home page (for non-logged in users)
 */
function showHomePage() {
    homeContent.classList.remove('hidden');
    mainApp.classList.add('hidden');
    heroSection.style.display = 'block';
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    homeContent.classList.add('active');
    
    if (currentUser) {
        homeContent.classList.add('hidden');
        mainApp.classList.remove('hidden');
        heroSection.style.display = 'none';
        showSection(liveSection);
        renderCategoryTabs();
    }
}

/**
 * Initializes page states
 */
function initPages() {
    document.querySelectorAll('.page').forEach((page, index) => {
        if (index === 0) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });
}

/**
 * Initializes animation library
 */
function initAnimations() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
}

/**
 * Sets up keyboard navigation for fullscreen gallery
 */
function setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        if (document.querySelector('.fullscreen-overlay.active')) {
            switch(e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    navigateFullscreen(-1);
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    navigateFullscreen(1);
                    break;
                case 'Escape':
                    e.preventDefault();
                    closeFullscreenGallery();
                    break;
            }
        }
    });
}

/**
 * Sets up all event listeners for the application
 */
function setupEventListeners() {
    // Modal close buttons
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal').classList.add('hidden');
            document.body.style.overflow = '';
        });
    });
    
    // Header logo for home navigation
    logoHomeBtn?.addEventListener('click', showHomePage);

    // Change password button
    document.getElementById('change-password-btn')?.addEventListener('click', showChangePasswordModal);
    document.getElementById('change-password-form')?.addEventListener('submit', handleChangePassword);
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.classList.add('hidden');
            document.body.style.overflow = '';
        }
    });
    
    // Tab switching
    loginTab?.addEventListener('click', showLoginTab);
    registerTab?.addEventListener('click', showRegisterTab);
    
    // Form submissions
    loginForm?.addEventListener('submit', handleLogin);
    registerForm?.addEventListener('submit', handleRegister);
    document.getElementById('contact-form')?.addEventListener('submit', handleContactForm);
    
    // Navigation
    document.getElementById('nav-live')?.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(liveSection);
    });
    
    document.getElementById('nav-create')?.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(createSection);
    });
    
    document.getElementById('nav-deposit')?.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(depositSection);
    });
    
    document.getElementById('nav-history')?.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(historySection);
    });
    
    document.getElementById('nav-profile')?.addEventListener('click', (e) => {
        e.preventDefault();
        showSection(profileSection);
        renderProfile();
    });
    
    // Check username availability
    document.getElementById('new-username')?.addEventListener('input', checkUsernameAvailability);
    
    // Create Auction
    document.getElementById('create-auction-form')?.addEventListener('submit', handleCreateAuction);
    
    // Deposit Money
    document.getElementById('deposit-form')?.addEventListener('submit', handleDeposit);
    
    // Multiple image upload preview
    document.getElementById('item-images')?.addEventListener('change', handleImageUpload);
    
    // Logout button
    headerLogoutBtn?.addEventListener('click', handleLogout);
    
    // Back to auctions button
    backToAuctionsBtn?.addEventListener('click', () => showSection(liveSection));
    
    // Profile editing
    document.getElementById('edit-profile-btn')?.addEventListener('click', showEditProfileModal);
    document.getElementById('edit-profile-form')?.addEventListener('submit', handleEditProfile);
    
    // Payment method selection
    paymentMethodSelect?.addEventListener('change', showPaymentFields);
    paymentForm?.addEventListener('submit', handlePayment);
    
    // Card input formatting
    const cardInput = document.getElementById('card-number');
    if (cardInput) {
        cardInput.addEventListener('input', formatCardNumber);
    }
    
    // Expiry date formatting
    const expiryInput = document.getElementById('card-expiry');
    if (expiryInput) {
        expiryInput.addEventListener('input', formatExpiryDate);
    }
    
    // Delegated event listeners for dynamic elements
    document.addEventListener('click', function(e) {
        // Header login button
        if (e.target && e.target.id === 'header-login') {
            showLoginModal();
        }
        
        // Header register button
        if (e.target && e.target.id === 'header-register') {
            showRegisterModal();
        }
        
        // Hero CTA button
        if (e.target && e.target.id === 'hero-cta') {
            if (currentUser) {
                homeContent.classList.add('hidden');
                mainApp.classList.remove('hidden');
                heroSection.style.display = 'none';
                showSection(liveSection);
            } else {
                showLoginModal();
            }
        }
        
        // View all auctions button
        if (e.target && e.target.id === 'view-all-auctions') {
            if (!currentUser) {
                showLoginModal();
            } else {
                homeContent.classList.add('hidden');
                mainApp.classList.remove('hidden');
                heroSection.style.display = 'none';
                showSection(liveSection);
            }
        }

        // View auction details
        if (e.target && e.target.classList.contains('view-details-btn')) {
            const auctionId = parseInt(e.target.dataset.id);
            showAuctionDetails(auctionId);
        }

        // Bid button home page
        if (e.target && e.target.classList.contains('bid-button-home')) {
            if (!currentUser) {
                showLoginModal();
            } else {
                homeContent.classList.add('hidden');
                mainApp.classList.remove('hidden');
                heroSection.style.display = 'none';
                showSection(liveSection);
            }
        }
    });

    document.getElementById('home-auctions-list').addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('gallery-main-image')) {
            const auctionId = parseInt(target.dataset.auctionId);
            const index = parseInt(target.dataset.index);
            openFullscreenGallery(auctionId, index);
        }
    });

    document.getElementById('auctions-list').addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('gallery-main-image')) {
            const auctionId = parseInt(target.dataset.auctionId);
            const index = parseInt(target.dataset.index);
            openFullscreenGallery(auctionId, index);
        }
    });

    document.getElementById('auction-detail-container').addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('gallery-main-image')) {
            const auctionId = parseInt(target.dataset.auctionId);
            const index = parseInt(target.dataset.index);
            openFullscreenGallery(auctionId, index);
        }
    });
}

/**
 * Shows the appropriate payment fields based on selected payment method
 */
function showPaymentFields() {
    upiFields.classList.add('hidden');
    cardFields.classList.add('hidden');
    netbankingFields.classList.add('hidden');
    
    const method = paymentMethodSelect.value;
    if (method === 'upi') {
        upiFields.classList.remove('hidden');
    } else if (method === 'card') {
        cardFields.classList.remove('hidden');
    } else if (method === 'netbanking') {
        netbankingFields.classList.remove('hidden');
    }
}

/**
 * Validates UPI ID format
 */
function validateUPI(upiId) {
    const upiRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+$/;
    return upiRegex.test(upiId);
}

/**
 * Validates card number format
 */
function validateCard(cardNumber) {
    const cleaned = cardNumber.replace(/\s/g, '');
    return /^[0-9]{16}$/.test(cleaned);
}

/**
 * Formats card number input with spaces every 4 digits
 */
function formatCardNumber(e) {
    let value = e.target.value.replace(/\D/g, '').slice(0, 16);
    let formatted = value.replace(/(.{4})/g, '$1 ').trim();
    e.target.value = formatted;
}

/**
 * Validates expiry date format
 */
function validateExpiry(expiry) {
    const expiryRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    if (!expiryRegex.test(expiry)) return false;
    
    const [_, month, year] = expiry.match(expiryRegex);
    const now = new Date();
    const currentYear = now.getFullYear() % 100;
    const currentMonth = now.getMonth() + 1;
    
    if (parseInt(year) < currentYear) return false;
    if (parseInt(year) === currentYear && parseInt(month) < currentMonth) return false;
    return true;
}

/**
 * Formats expiry date input
 */
function formatExpiryDate(e) {
    let value = e.target.value.replace(/\D/g, '').slice(0, 4);
    if (value.length >= 3) {
        e.target.value = value.substring(0, 2) + '/' + value.substring(2);
    } else {
        e.target.value = value;
    }
}

/**
 * Validates CVV format
 */
function validateCVV(cvv) {
    return /^[0-9]{3,4}$/.test(cvv);
}

/**
 * Handles payment form submission
 */
function handlePayment(e) {
    e.preventDefault();
    
    const amount = parseInt(document.getElementById('deposit-amount').value);
    const fullName = document.getElementById('deposit-full-name').value.trim();
    const phone = document.getElementById('deposit-phone').value.trim();
    const method = paymentMethodSelect.value;
    
    // Validate inputs
    if (!amount || amount <= 0) {
        showNotification('Please enter a valid amount', 'error');
        return;
    }
    
    if (!fullName) {
        showNotification('Please enter your full name', 'error');
        return;
    }
    
    if (!phone || !/^[0-9]{10}$/.test(phone)) {
        showNotification('Please enter a valid 10-digit phone number', 'error');
        return;
    }
    
    // Validate payment method specific fields
    if (method === 'upi') {
        const upiId = document.getElementById('upi-id').value.trim();
        if (!validateUPI(upiId)) {
            showNotification('Please enter a valid UPI ID (e.g. name@bank)', 'error');
            return;
        }
    } else if (method === 'card') {
        const cardNumber = document.getElementById('card-number').value.trim();
        const expiry = document.getElementById('card-expiry').value.trim();
        const cvv = document.getElementById('card-cvv').value.trim();
        const cardName = document.getElementById('card-name').value.trim();
        
        if (!validateCard(cardNumber)) {
            showNotification('Please enter a valid card number', 'error');
            return;
        }
        
        if (!validateExpiry(expiry)) {
            showNotification('Please enter a valid expiry date (MM/YY)', 'error');
            return;
        }
        
        if (!validateCVV(cvv)) {
            showNotification('Please enter a valid CVV (3 or 4 digits)', 'error');
            return;
        }
        
        if (!cardName) {
            showNotification('Please enter name on card', 'error');
            return;
        }
    } else if (method === 'netbanking') {
        const bank = document.getElementById('bank-select').value;
        const userId = document.getElementById('netbanking-userid').value.trim();
        const password = document.getElementById('netbanking-password').value.trim();
        
        if (!bank) {
            showNotification('Please select your bank', 'error');
            return;
        }
        
        if (!userId) {
            showNotification('Please enter your user ID', 'error');
            return;
        }
        
        if (!password) {
            showNotification('Please enter your password', 'error');
            return;
        }
    }
    
    // Show loading indicator
    document.getElementById('payment-loader')?.classList.remove('hidden');
    paymentForm.querySelector('input[type="submit"]').disabled = true;
    
    // Simulate payment processing
    setTimeout(() => {
        // Process payment
        currentUser.balance += amount;
        updateBalance();
        
        // Add to history
        history.push({
            type: 'deposit',
            amount: amount,
            method: method,
            time: new Date()
        });
        
        // Reset forms
        paymentForm.reset();
        document.getElementById('deposit-form').reset();
        
        // Hide loading indicator
        document.getElementById('payment-loader')?.classList.add('hidden');
        paymentForm.querySelector('input[type="submit"]').disabled = false;
        
        // Close modal
        paymentModal.classList.add('hidden');
        document.body.style.overflow = '';
        
        // Show success message
        showNotification(`₹${amount} deposited successfully!`, 'success');
        
        // Update balance display with animation
        balanceDisplay.classList.add('animate__animated', 'animate__bounce');
        setTimeout(() => {
            balanceDisplay.classList.remove('animate__animated', 'animate__bounce');
        }, 1000);
    }, 2000);
}

/**
 * Shows the change password modal
 */
function showChangePasswordModal() {
    document.getElementById('change-password-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

/**
 * Hides the change password modal
 */
function hideChangePasswordModal() {
    document.getElementById('change-password-modal').classList.add('hidden');
    document.body.style.overflow = '';
}

/**
 * Handles change password form submission
 */
function handleChangePassword(e) {
    e.preventDefault();
    const currentPassword = document.getElementById('current-password').value.trim();
    const newPassword = document.getElementById('change-new-password').value.trim();
    const confirmNewPassword = document.getElementById('change-confirm-new-password').value.trim();

    if (!currentUser) {
        showNotification('Please login to change password', 'error');
        return;
    }

    // Verify current password
    if (currentUser.password !== currentPassword) {
        showNotification('Current password is incorrect', 'error');
        return;
    }

    if (newPassword === currentPassword) {
        showNotification('New password must be different from current password', 'error');
        return;
    }

    // Validate new password
    if (newPassword.length < 8) {
        showNotification('Password must be at least 8 characters long', 'error');
        return;
    }

    if (!/[a-zA-Z]/.test(newPassword)) {
        showNotification('Password must contain at least one letter', 'error');
        return;
    }

    if (!/[^a-zA-Z0-9]/.test(newPassword)) {
        showNotification('Password must contain at least one symbol', 'error');
        return;
    }

    if (newPassword !== confirmNewPassword) {
        showNotification('New passwords do not match', 'error');
        return;
    }

    // Update password
    currentUser.password = newPassword;
    const userIndex = users.findIndex(user => user.username === currentUser.username);
    if (userIndex !== -1) {
        users[userIndex].password = newPassword;
    }

    // Reset form and close modal
    e.target.reset();
    hideChangePasswordModal();
    
    showNotification('Password changed successfully!', 'success');
}

/**
 * Shows detailed view of an auction
 */
function showAuctionDetails(auctionId) {
    currentAuctionDetailId = auctionId; 
    const auction = auctions.find(a => a.id === auctionId);
    if (!auction) return;

    const now = Date.now();
    const timeLeft = auction.sold || auction.unsold ? 'Auction ended' :
        `Time left: <span class='time-left' data-id='${auction.id}'>${formatTimeLeft(auction.endTime - now)}</span>`;

    // Build gallery HTML
    let galleryHTML = '';
    if (auction.images && auction.images.length > 0) {
        galleryHTML = `
            <div class="auction-gallery">
                <div class="gallery-main-container">
                    <img src="${auction.images[0]}" class="gallery-main-image" 
                        data-auction-id="${auction.id}" data-index="0" alt="${auction.name}">
                </div>
                ${auction.images.length > 1 ? `
                    <div class="gallery-thumbnails">
                        ${auction.images.map((img, index) => `
                            <img src="${img}" class="gallery-thumbnail ${index === 0 ? 'active' : ''}" 
                                data-index="${index}" data-auction-id="${auction.id}" alt="Thumbnail ${index + 1}">
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        `;
    }

    // Build bid form if auction is active
    let bidFormHTML = '';
    if (!auction.sold && !auction.unsold) {
        const isCreator = currentUser && auction.creator === currentUser.username;
        const isHighestBidder = currentUser && auction.highestBidder === currentUser.username;
        const minBid = auction.currentBid + 1;
        const effectiveBidLimit = isHighestBidder ? currentUser.balance + auction.currentBid : currentUser.balance;
        const canBid = currentUser && !isCreator && effectiveBidLimit >= minBid;

        bidFormHTML = `
            <div class="bid-section">
                <h3>Place Your Bid</h3>
                <form class="bid-form" data-id="${auction.id}">
                    <div class="form-group">
                        <label for="bid-amount-${auction.id}">Your Bid (Minimum ₹${minBid})</label>
                        <input type="number" id="bid-amount-${auction.id}" min="${minBid}" 
                            placeholder="Enter ₹${minBid} or more" required>
                    </div>
                    <button type="submit" ${!canBid ? 'disabled' : ''} class="btn btn-gradient bid-button">
                        <i class="fas fa-gavel"></i> Place Bid
                    </button>
                    ${!currentUser ? '<p class="error-message"><i class="fas fa-exclamation-circle"></i> Please login to bid</p>' : 
                    isCreator ? '<p class="error-message"><i class="fas fa-exclamation-circle"></i> You created this auction</p>' :
                    !canBid ? '<p class="error-message"><i class="fas fa-exclamation-circle"></i> Insufficient funds</p>' : ''}
                </form>
            </div>
        `;
    }

    // Build auction status
    let statusHTML = '';
    if (auction.sold) {
        statusHTML = `
            <div class="auction-status sold">
                <i class="fas fa-check-circle"></i>
                <h3>This item has been sold</h3>
                ${auction.highestBidder === currentUser?.username ? 
                    '<p>You won this auction for ₹' + auction.currentBid + '</p>' : 
                    '<p>Sold for ₹' + auction.currentBid + ' to ' + auction.highestBidder + '</p>'}
            </div>
        `;
    } else if (auction.unsold) {
        statusHTML = `
            <div class="auction-status unsold">
                <i class="fas fa-times-circle"></i>
                <h3>This auction ended without a sale</h3>
            </div>
        `;
    }

    auctionDetailContainer.innerHTML = `
        <div class="auction-detail-header">
            <div class="auction-category">${auction.category.toUpperCase()}</div>
            <h2>${auction.name}</h2>
            <p class="auction-time">${timeLeft}</p>
        </div>
        
        <div class="auction-detail-content">
            <div class="auction-detail-left">
                ${galleryHTML}
                
                <div class="auction-description">
                    <h3>Description</h3>
                    <p>${auction.description}</p>
                </div>
            </div>
            
            <div class="auction-detail-right">
                <div class="auction-bid-info">
                    <div class="current-bid">
                        <span>Current Bid:</span>
                        <span class="bid-amount">₹ ${auction.currentBid.toLocaleString()}</span>
                    </div>
                    ${auction.highestBidder ? `
                        <div class="highest-bidder">
                            <span>Highest Bidder:</span>
                            <span>${auction.highestBidder}</span>
                        </div>
                    ` : ''}
                </div>
                
                ${statusHTML || bidFormHTML}
            </div>
        </div>
    `;

    // Set up gallery interactions
    setupGalleryInteractions();

    // Add event listener for bid form
    const bidForm = auctionDetailContainer.querySelector('.bid-form');
    if (bidForm) {
        bidForm.addEventListener('submit', function(e) {
            if (currentUser) {
                const user = users.find(u => u.username === currentUser.username);
                if (user) {
                    const userBidsEl = document.getElementById('user-bids-display');
                    if (userBidsEl) userBidsEl.innerText = `Your Total Bids: ${user.totalBids}`;
                }
             }
            e.preventDefault();
            const bidAmount = parseInt(this.querySelector('input').value);
            if (!isNaN(bidAmount)) {
                placeBid(auction.id, bidAmount);
            } else {
                showNotification('Please enter a valid bid amount', 'error');
            }
        });

        // Set initial input state
        const bidInput = bidForm.querySelector('input');
        if (bidInput) {
            bidInput.min = auction.currentBid + 1;
            bidInput.placeholder = `Minimum bid: ₹${auction.currentBid + 1}`;
            
            // Live validation
            bidInput.addEventListener('input', function() {
                const minBid = parseInt(this.min) || auction.currentBid + 1;
                const currentBid = parseInt(this.value) || 0;
                
                if (currentBid < minBid) {
                    this.setCustomValidity(`Bid must be at least ₹${minBid}`);
                } else {
                    this.setCustomValidity('');
                }
            });
        }
    }

    showSection(auctionDetailSection);
}

/**
 * Handles contact form submission
 */
function handleContactForm(e) {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const subject = document.getElementById('contact-subject').value;
    const message = document.getElementById('contact-message').value;

    // Show success message
    showNotification('Your message has been sent! We will get back to you soon.', 'success');

    // Reset form
    e.target.reset();
    hideContactModal();
}

/**
 * Shows the login modal
 */
function showLoginModal() {
    authModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    showLoginTab();
}

/**
 * Shows the register modal
 */
function showRegisterModal() {
    authModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    showRegisterTab();
}

/**
 * Hides the auth modal
 */
function hideAuthModal() {
    authModal.classList.add('hidden');
    document.body.style.overflow = '';
}

/**
 * Shows the login tab in auth modal
 */
function showLoginTab(e) {
    if (e) e.preventDefault();
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
    loginFormContainer.classList.remove('hidden');
    registerFormContainer.classList.add('hidden');
}

/**
 * Shows the register tab in auth modal
 */
function showRegisterTab(e) {
    if (e) e.preventDefault();
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
    registerFormContainer.classList.remove('hidden');
    loginFormContainer.classList.add('hidden');
}

/**
 * Updates the header based on login state
 */
function updateHeader() {
    const authButtons = document.getElementById('auth-buttons');
    const userInfo = document.getElementById('user-info');
    
    if (currentUser) {
        authButtons.classList.add('hidden');
        userInfo.classList.remove('hidden');
        usernameDisplay.textContent = currentUser.username;
        document.getElementById('profile-username').textContent = currentUser.username;
        document.getElementById('member-since').textContent = currentUser.joinDate ? new Date(currentUser.joinDate).toLocaleDateString() : new Date().toLocaleDateString();
    } else {
        authButtons.classList.remove('hidden');
        userInfo.classList.add('hidden');
        usernameDisplay.textContent = '';
    }
}

/**
 * Handles login form submission
 */
function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        currentUser = user;
        hideAuthModal();
        updateHeader();
        updateBalance();
        homeContent.classList.add('hidden');
        mainApp.classList.remove('hidden');
        heroSection.style.display = 'none';
        showSection(liveSection);
        renderCategoryTabs();
        
        // Reset login form
        e.target.reset();
    } else {
        document.getElementById('login-form').classList.add('animate__animated', 'animate__shakeX');
        setTimeout(() => {
            document.getElementById('login-form').classList.remove('animate__animated', 'animate__shakeX');
        }, 1000);
        showNotification('Invalid credentials', 'error');
    }
}

/**
 * Checks if a username is available during registration
 */
function checkUsernameAvailability() {
    const username = this.value.trim();
    const userExists = users.some(user => user.username === username);
    
    if (userExists) {
        usernameError.textContent = 'Username already exists';
        usernameError.classList.remove('hidden');
    } else {
        usernameError.classList.add('hidden');
    }
}

/**
 * Handles registration form submission
 */

function handleRegister(e) {
    e.preventDefault();
    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    if (users.some(user => user.username === username)) {
        usernameError.textContent = 'Username already exists';
        usernameError.classList.remove('hidden');
        return;
    }

    if (!phone || !/^[0-9]{10}$/.test(phone)) {
        showNotification('Please enter a valid 10-digit phone number', 'error');
        return;
    }
    
    if (password.length < 8) {
        showNotification('Password must be at least 8 characters long', 'error');
        return;
    }
    
    if (!/[a-zA-Z]/.test(password)) {
        showNotification('Password must contain at least one letter', 'error');
        return;
    }
    
    if (!/[^a-zA-Z0-9]/.test(password)) {
        showNotification('Password must contain at least one symbol', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showNotification('Passwords do not match', 'error');
        return;
    }
    
    const newUser = {
        username: username,
        password: password,
        balance: 0,
        fullName: fullName,
        email: email,
        phone: phone,
        totalBids: 0,
        auctionsSold: 0,  // Initialize to 0
        auctionsUnsold: 0, // Initialize to 0
        joinDate: new Date()
    };
    users.push(newUser);
    currentUser = newUser;
    
    document.getElementById('register-form').classList.add('animate__animated', 'animate__fadeOut');
    setTimeout(() => {
        document.getElementById('register-form').classList.remove('animate__animated', 'animate__fadeOut');
        showNotification(`Account created for ${username}. You've been automatically logged in.`, 'success');
        
        hideAuthModal();
        updateHeader();
        updateBalance();
        homeContent.classList.add('hidden');
        mainApp.classList.remove('hidden');
        heroSection.style.display = 'none';
        showSection(liveSection);
        renderCategoryTabs();
        
        // Reset register form
        e.target.reset();
    }, 500);
}

/**
 * Handles logout
 */
function handleLogout() {
    mainApp.classList.add('animate__animated', 'animate__fadeOut');
    setTimeout(() => {
        mainApp.classList.remove('animate__animated', 'animate__fadeOut');
        currentUser = null;
        showHomePage();
        updateHeader();
    }, 500);
}

/**
 * Handles image upload and preview
 */
function handleImageUpload(e) {
    const files = e.target.files;
    imagePreviewContainer.innerHTML = '';
    
    if (files.length < 2 || files.length > 5) {
        imageError.style.display = 'block';
        return;
    } else {
        imageError.style.display = 'none';
    }
    
    Array.from(files).forEach((file, index) => {
        const reader = new FileReader();
        reader.onload = function(event) {
            const previewContainer = document.createElement('div');
            previewContainer.className = 'image-preview-container';
            
            const preview = document.createElement('img');
            preview.src = event.target.result;
            preview.className = 'auction-image-preview';
            
            const removeBtn = document.createElement('button');
            removeBtn.className = 'remove-image';
            removeBtn.innerHTML = '&times;';
            removeBtn.addEventListener('click', () => {
                previewContainer.remove();
                const newFiles = Array.from(document.getElementById('item-images').files);
                newFiles.splice(index, 1);
                
                const dataTransfer = new DataTransfer();
                newFiles.forEach(file => dataTransfer.items.add(file));
                document.getElementById('item-images').files = dataTransfer.files;
                
                if (newFiles.length < 2) {
                    imageError.style.display = 'block';
                }
            });
            
            previewContainer.appendChild(preview);
            previewContainer.appendChild(removeBtn);
            imagePreviewContainer.appendChild(previewContainer);
        };
        reader.readAsDataURL(file);
    });
}

/**
 * Handles create auction form submission
 */
function handleCreateAuction(e) {
    e.preventDefault();
    const name = document.getElementById('item-name').value;
    const desc = document.getElementById('item-description').value;
    const price = parseInt(document.getElementById('start-price').value);
    const days = parseInt(document.getElementById('duration-days').value) || 0;
    const hours = parseInt(document.getElementById('duration-hours').value) || 0;
    const minutes = parseInt(document.getElementById('duration-minutes').value) || 0;
    const category = document.getElementById('item-category').value;
    const imageInput = document.getElementById('item-images');
    
    if (!imageInput.files || imageInput.files.length < 2 || imageInput.files.length > 5) {
        imageError.style.display = 'block';
        document.getElementById('create-auction-form').classList.add('animate__animated', 'animate__shakeX');
        setTimeout(() => {
            document.getElementById('create-auction-form').classList.remove('animate__animated', 'animate__shakeX');
        }, 1000);
        return;
    }
    
    // Calculate total duration in minutes
    const totalMinutes = (days * 24 * 60) + (hours * 60) + minutes;
    
    if (totalMinutes <= 0) {
        showNotification('Please enter a valid duration (at least 1 minute)', 'error');
        return;
    }
    
    const images = [];
    Array.from(imageInput.files).forEach(file => {
        const reader = new FileReader();
        reader.onload = function(e) {
            images.push(e.target.result);
            
            if (images.length === imageInput.files.length) {
                createAuctionWithImages(name, desc, price, totalMinutes, category, images);
            }
        };
        reader.readAsDataURL(file);
    });
}

/**
 * Creates a new auction with uploaded images
 */
function createAuctionWithImages(name, desc, price, duration, category, images) {
    auctions.push({
        id: auctions.length + 1,
        name: name,
        description: desc,
        currentBid: price,
        highestBidder: null,
        endTime: Date.now() + duration * 60000,
        sold: false,
        unsold: false,
        category: category,
        creator: currentUser.username,
        images: images
    });
    
    document.getElementById('create-auction-form').reset();
    imagePreviewContainer.innerHTML = '';
    showSection(liveSection);
    renderAuctions();
    
    showNotification('Auction created successfully!', 'success');
}

/**
 * Handles deposit form submission
 */
function handleDeposit(e) {
    e.preventDefault();
    const amount = parseInt(document.getElementById('deposit-amount').value);
    
    if (amount <= 0) {
        showNotification('Please enter a valid amount', 'error');
        return;
    }
    
    // Show payment modal
    paymentModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Pre-fill amount in the modal title
    paymentModal.querySelector('h2').textContent = `Deposit ₹${amount}`;
    
    // Reset payment method fields on open to prevent old data from showing
    paymentMethodSelect.value = '';
    showPaymentFields();
}

/**
 * Shows a specific section and hides others
 */
function showSection(section) {
    // Reset forms when switching sections
    if (section === createSection) {
        document.getElementById('create-auction-form').reset();
        imagePreviewContainer.innerHTML = '';
    } else if (section === depositSection) {
        document.getElementById('deposit-form').reset();
    }

    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    section.classList.add('active');
    
    document.querySelectorAll('#main-nav a').forEach(link => {
        link.classList.remove('active');
    });
    
    if (section === liveSection) {
        document.getElementById('nav-live').classList.add('active');
        renderCategoryTabs();
        renderAuctions();
    } else if (section === createSection) {
        document.getElementById('nav-create').classList.add('active');
    } else if (section === depositSection) {
        document.getElementById('nav-deposit').classList.add('active');
    } else if (section === historySection) {
        document.getElementById('nav-history').classList.add('active');
        renderHistory();
    } else if (section === profileSection) {
        document.getElementById('nav-profile').classList.add('active');
        renderProfile();
    } else if (section === auctionDetailSection) {
        // No nav link active for detail page
    }
}

/**
 * Updates the user balance display
 */
function updateBalance() {
    if (currentUser) {
        balanceDisplay.textContent = currentUser.balance;
        document.getElementById('user-balance-profile-stat').textContent = currentUser.balance;
    }
}

/**
 * Checks auction statuses and updates if needed
 */

function checkAuctionStatus() {
    const now = Date.now();
    let needsUpdate = false;
    
    auctions.forEach(auction => {
        if (!auction.sold && !auction.unsold && auction.endTime <= now) {
            const creator = users.find(user => user.username === auction.creator);
            
            if (auction.highestBidder) {
                auction.sold = true;
                if (creator) {
                    creator.balance += auction.currentBid;
                    creator.auctionsSold = (creator.auctionsSold || 0) + 1;
                }
                
                history.push({
                    type: 'sale',
                    itemId: auction.id,
                    itemName: auction.name,
                    amount: auction.currentBid,
                    time: new Date(),
                    username: auction.highestBidder,
                    creator: auction.creator
                });
            } else {
                auction.unsold = true;
                if (creator) {
                    creator.auctionsUnsold = (creator.auctionsUnsold || 0) + 1;
                }
            }
            needsUpdate = true;
        }
    });
    
    return needsUpdate;
}

/**
 * Renders category tabs for filtering auctions
 */
function renderCategoryTabs() {
    const categories = ['all', 'electronics', 'collectibles', 'antiques', 'art', 'fashion'];
    const categoryNames = {
        'all': 'All Items',
        'electronics': 'Electronics',
        'collectibles': 'Collectibles',
        'antiques': 'Antiques',
        'art': 'Art',
        'fashion': 'Fashion'
    };
    
    // Remove existing tabs if they exist
    const existingTabs = document.querySelector('.category-tabs');
    if (existingTabs) {
        existingTabs.remove();
    }
    
    const tabsContainer = document.createElement('div');
    tabsContainer.className = 'category-tabs';
    
    categories.forEach(category => {
        const tab = document.createElement('button');
        tab.className = `category-tab ${category === 'all' ? 'active' : ''}`;
        tab.textContent = categoryNames[category];
        tab.dataset.category = category;
        tab.addEventListener('click', () => filterAuctionsByCategory(category));
        tabsContainer.appendChild(tab);
    });
    
    // Insert tabs before the auctions list
    const auctionsList = document.getElementById('auctions-list');
    if (auctionsList) {
        auctionsList.parentNode.insertBefore(tabsContainer, auctionsList);
    }
}

/**
 * Filters auctions by category
 */
function filterAuctionsByCategory(category) {
    // Update active tab
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.category === category);
    });
    
    // Render filtered auctions
    renderAuctions(category);
}

/**
 * Renders auctions list
 */
function renderAuctions(category = 'all') {
    const now = Date.now();
    
    if (now - lastAuctionCheck >= 5000) {
        const needsUpdate = checkAuctionStatus();
        lastAuctionCheck = now;
        
        if (!needsUpdate && !liveSection.classList.contains('active')) {
            return;
        }
    }

    auctionsList.innerHTML = '';
    
    // Filter auctions by category if not 'all'
    const filteredAuctions = category === 'all' 
        ? auctions 
        : auctions.filter(auction => auction.category === category);
    
    if (filteredAuctions.length === 0) {
        auctionsList.innerHTML = `
            <div class="no-auctions">
                <i class="fas fa-box-open"></i>
                <p>No auctions found in this category</p>
            </div>
        `;
        return;
    }
    
    filteredAuctions.forEach((auction, index) => {
        const auctionEl = document.createElement('div');
        auctionEl.className = `auction-item ${auction.sold ? 'sold-out' : ''} ${auction.unsold ? 'unsold' : ''}`;
        auctionEl.style.animationDelay = `${index * 0.1}s`;
        
        let statusBadge = '';
        if (auction.sold) {
            statusBadge = '<span class="sold-out-badge"><i class="fas fa-gavel"></i> SOLD OUT</span>';
        } else if (auction.unsold) {
            statusBadge = '<span class="unsold-badge"><i class="fas fa-times-circle"></i> UNSOLD</span>';
        }
        
        const timeLeft = auction.sold || auction.unsold ? 'Auction ended' :
            `Time left: <span class='time-left' data-id='${auction.id}'>${formatTimeLeft(auction.endTime - now)}</span>`;
        
        let galleryHTML = '';
        if (auction.images && auction.images.length > 0) {
            galleryHTML = `
                <div class="gallery-container">
                    <img src="${auction.images[0]}" class="gallery-main-image" 
                        data-auction-id="${auction.id}" data-index="0">
                </div>
            `;
        }
        
        const isCreator = currentUser && auction.creator === currentUser.username;
        const isHighestBidder = currentUser && auction.highestBidder === currentUser.username;
        const minBid = auction.currentBid + 1;
        const effectiveBidLimit = isHighestBidder ? currentUser.balance + auction.currentBid : currentUser.balance;
        const canBid = currentUser && !isCreator && effectiveBidLimit >= minBid;

        
        auctionEl.innerHTML = `
            ${galleryHTML}
            <div class="auction-content">
                <div class="auction-category">${auction.category.toUpperCase()}</div>
                <h3>${auction.name} ${statusBadge}</h3>
                <p>${auction.description}</p>
                <p><i class="far fa-clock"></i> ${timeLeft} | Current bid: ₹ ${auction.currentBid}</p>
                ${auction.sold || auction.unsold ? '' : `
                    <form class="bid-form" data-id="${auction.id}">
                        <input type="number" min="${auction.currentBid + 1}" required>
                        <button type="submit" ${!canBid ? 'disabled' : ''} class="bid-button">
                            <i class="fas fa-gavel"></i> Place Bid
                        </button>
                            ${!currentUser ? '<span class="error-message"><i class="fas fa-exclamation-circle"></i> Please login to bid</span>' : 
                            isCreator ? '<span class="error-message"><i class="fas fa-exclamation-circle"></i> You created this auction</span>' :
                            !canBid ? '<span class="error-message"><i class="fas fa-exclamation-circle"></i> Insufficient funds</span>' : ''}
                    </form>
                `}
                <button class="btn btn-secondary view-details-btn" data-id="${auction.id}">View Details</button>
            </div>
        `;
        auctionsList.appendChild(auctionEl);
    });

    // Initialize gallery interactions
    setupGalleryInteractions();
    
    // Add bid form event listeners
    document.querySelectorAll('.bid-form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const auctionId = parseInt(this.getAttribute('data-id'));
            const bidAmount = parseInt(this.querySelector('input').value);
            placeBid(auctionId, bidAmount);
        });
    });
}

/**
 * Sets up gallery interactions for all auction images
 */
function setupGalleryInteractions() {
    // Clear any existing mouseenter/mouseleave listeners to prevent duplicates
    document.querySelectorAll('.gallery-main-image').forEach(img => {
        img.removeEventListener('mouseenter', handleGalleryMouseEnter);
        img.removeEventListener('mouseleave', handleGalleryMouseLeave);
        img.removeEventListener('click', handleGalleryClick);
    });

    // Set up new event listeners for all gallery images
    document.querySelectorAll('.gallery-main-image').forEach(img => {
        // Pause auto-rotation on hover
        img.addEventListener('mouseenter', handleGalleryMouseEnter);
        
        // Resume auto-rotation when mouse leaves
        img.addEventListener('mouseleave', handleGalleryMouseLeave);
        
        // Handle click for fullscreen gallery
        img.addEventListener('click', handleGalleryClick);
    });

    // Set up thumbnail click handlers
    document.querySelectorAll('.gallery-thumbnail').forEach(thumb => {
        thumb.addEventListener('click', function() {
            const auctionId = parseInt(this.getAttribute('data-auction-id'));
            const index = parseInt(this.getAttribute('data-index'));
            
            // Update main image
            const auction = auctions.find(a => a.id === auctionId);
            if (auction && auction.images[index]) {
                const mainImage = this.closest('.auction-gallery').querySelector('.gallery-main-image');
                mainImage.src = auction.images[index];
                mainImage.setAttribute('data-index', index);
                
                // Update active thumbnail
                this.closest('.gallery-thumbnails').querySelectorAll('.gallery-thumbnail').forEach(t => {
                    t.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });

    // Initialize auto-rotation
    startAutoImageRotation();
}

/**
 * Opens fullscreen gallery view
 */
function openFullscreenGallery(auctionId, startIndex) {
    // Clear existing overlay and listeners
    const existingOverlay = document.querySelector('.fullscreen-overlay');
    if (existingOverlay) existingOverlay.remove();
    document.removeEventListener('keydown', handleFullscreenKeydown);

    const auction = auctions.find(a => a.id === auctionId);
    if (!auction?.images?.length) return;

    // Set current state
    currentFullscreenIndex = Math.max(0, Math.min(startIndex, auction.images.length - 1));
    currentFullscreenAuctionId = auctionId;

    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'fullscreen-overlay';
    overlay.innerHTML = `
        <img class="fullscreen-image" src="${auction.images[currentFullscreenIndex]}" alt="${auction.name}">
        <button class="fullscreen-close" aria-label="Close gallery">&times;</button>
        ${auction.images.length > 1 ? `
            <button class="fullscreen-nav fullscreen-prev" aria-label="Previous image">
                <i class="fas fa-chevron-left"></i>
            </button>
            <button class="fullscreen-nav fullscreen-next" aria-label="Next image">
                <i class="fas fa-chevron-right"></i>
            </button>
            <div class="fullscreen-counter">
                ${currentFullscreenIndex + 1}/${auction.images.length}
            </div>
        ` : ''}
    `;

    // Add event listeners
    overlay.querySelector('.fullscreen-close').addEventListener('click', closeFullscreenGallery);
    if (auction.images.length > 1) {
        overlay.querySelector('.fullscreen-prev').addEventListener('click', () => navigateFullscreen(-1));
        overlay.querySelector('.fullscreen-next').addEventListener('click', () => navigateFullscreen(1));
    }
    overlay.addEventListener('click', (e) => e.target === overlay && closeFullscreenGallery());

    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleFullscreenKeydown);

    setTimeout(() => overlay.classList.add('active'), 10);
}

/**
 * Closes fullscreen gallery
 */
function closeFullscreenGallery() {
    const overlay = document.querySelector('.fullscreen-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        setTimeout(() => {
            overlay.remove();
            document.body.style.overflow = '';
            document.removeEventListener('keydown', handleFullscreenKeydown);
        }, 300);
    }
}

/**
 * Handles mouse enter on gallery images
 */
function handleGalleryMouseEnter() {
    clearInterval(window.autoRotateInterval);
    this.style.transform = 'scale(1.03)';
    this.style.transition = 'transform 0.3s ease';
}

/**
 * Handles mouse leave on gallery images
 */
function handleGalleryMouseLeave() {
    this.style.transform = 'scale(1)';
    startAutoImageRotation();
}

/**
 * Navigates between images in fullscreen gallery
 */
function navigateFullscreen(direction) {
    const overlay = document.querySelector('.fullscreen-overlay.active');
    if (!overlay) return;

    const auction = auctions.find(a => a.id === currentFullscreenAuctionId);
    if (!auction?.images) return;

    // Corrected logic for cycling through images
    const imagesCount = auction.images.length;
    let newIndex = (currentFullscreenIndex + direction + imagesCount) % imagesCount;
    
    // Check if navigation is actually needed
    if (newIndex === currentFullscreenIndex && imagesCount > 1) {
        return;
    }

    currentFullscreenIndex = newIndex;
    const img = overlay.querySelector('.fullscreen-image');
    const counter = overlay.querySelector('.fullscreen-counter');

    img.style.opacity = 0;
    setTimeout(() => {
        img.src = auction.images[currentFullscreenIndex];
        img.alt = `Auction item: ${auction.name} (${currentFullscreenIndex + 1}/${auction.images.length})`;
        img.style.opacity = 1;
        if (counter) counter.textContent = `${currentFullscreenIndex + 1}/${auction.images.length}`;
    }, 200);
}

/**
 * Places a bid on an auction
 */

function placeBid(auctionId, amount) {
    if (!currentUser) {
        showNotification('Please login to place a bid', 'error');
        return;
    }

    const auction = auctions.find(a => a.id === auctionId);
    const bidForm = document.querySelector(`.bid-form[data-id="${auctionId}"]`);
    const bidButton = bidForm ? bidForm.querySelector('button[type="submit"]') : null;

    try {
        // Set loading state
        if (bidButton) {
            const originalText = bidButton.innerHTML;
            bidButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            bidButton.disabled = true;
        }

        // Validate bid
        if (!auction) {
            throw new Error('Auction not found');
        }

        if (auction.creator === currentUser.username) {
            throw new Error("You can't bid on your own auction");
        }

        if (amount <= auction.currentBid) {
            if (bidForm) {
                bidForm.classList.add('animate__animated', 'animate__shakeX');
                bidForm.querySelector('input').style.borderColor = '#dc3545';
                
                setTimeout(() => {
                    bidForm.classList.remove('animate__animated', 'animate__shakeX');
                    bidForm.querySelector('input').style.borderColor = '';
                }, 1000);
            }
            throw new Error(`Your bid must be higher than ₹${auction.currentBid}`);
        }

        // Calculate required payment
        let paymentRequired;
        let refundAmount = 0;
        let isSameBidder = auction.highestBidder === currentUser.username;

        if (isSameBidder) {
            paymentRequired = amount - auction.currentBid;
        } else {
            paymentRequired = amount;
            
            // Refund previous bidder if exists
            if (auction.highestBidder) {
                const prevBidder = users.find(u => u.username === auction.highestBidder);
                if (prevBidder) {
                    refundAmount = auction.currentBid;
                    prevBidder.balance += refundAmount;
                    
                    history.push({
                        type: 'refund',
                        itemId: auction.id,
                        itemName: auction.name,
                        amount: refundAmount,
                        time: new Date(),
                        username: auction.highestBidder,
                        creator: auction.creator
                    });
                }
            }
        }

        // Check balance
        if (currentUser.balance < paymentRequired) {
            throw new Error(`Insufficient funds. You need ₹${paymentRequired} more to place this bid.`);
        }

        // Process payment
        currentUser.balance -= paymentRequired;
        
        // Update auction
        auction.currentBid = amount;
        auction.highestBidder = currentUser.username;

        // Update user's bid count in both currentUser and users array
        // currentUser.totalBids = (currentUser.totalBids || 0) + 1;
        const userIndex = users.findIndex(u => u.username === currentUser.username);
        if (userIndex !== -1) {
            users[userIndex].totalBids = (users[userIndex].totalBids || 0) + 1;
        }

        // Add to history
        history.push({
            type: 'bid',
            itemId: auction.id,
            itemName: auction.name,
            amount: amount,
            time: new Date(),
            username: currentUser.username,
            creator: auction.creator,
            isBidIncrease: isSameBidder,
            previousBid: isSameBidder ? auction.currentBid : 0
        });

        // UI feedback
        if (bidButton) {
            bidButton.innerHTML = '<i class="fas fa-check"></i> Bid Placed!';
            bidButton.style.backgroundColor = '#28a745';
            
            setTimeout(() => {
                bidButton.innerHTML = '<i class="fas fa-gavel"></i> Place Bid';
                bidButton.style.backgroundColor = '';
                bidButton.disabled = false;
            }, 2000);
        }

        // Update UI
        updateBalance();
        renderAuctions();
        
        // Refresh details page if active
        if (auctionDetailSection.classList.contains('active')) {
            showAuctionDetails(auctionId);
        }

        // Show notifications
        showNotification('Bid placed successfully!', 'success');
        if (refundAmount > 0) {
            setTimeout(() => {
                showNotification(`₹${refundAmount} refunded to previous bidder`, 'info');
            }, 3000);
        }

        // Update the bid input minimum value
        const bidInput = bidForm ? bidForm.querySelector('input') : null;
        if (bidInput) {
            bidInput.min = amount + 1;
            bidInput.value = '';
        }

        // Update profile stats if profile is active
        if (profileSection.classList.contains('active')) {
            renderProfile();
        }

    } catch (error) {
        showNotification(error.message, 'error');
        console.error('Bid placement error:', error);
        
        // Reset button state on error
        if (bidButton) {
            bidButton.innerHTML = '<i class="fas fa-gavel"></i> Place Bid';
            bidButton.disabled = false;
        }
    }
}

/**
 * Renders user history
 */
function renderHistory() {
    if (!currentUser) return;
    
    const userHistory = history.filter(item => {
        if (item.type === 'bid') {
            // Only the bidder sees their bid
            return item.username === currentUser.username;
        } else if (item.type === 'refund') {
            // Only the refunded user sees the refund
            return item.username === currentUser.username;
        } else if (item.type === 'sale') {
            // Both buyer and seller see the sale
            return item.username === currentUser.username || item.creator === currentUser.username;
        }
        return false; // default fallback
    });

    if (userHistory.length === 0) {
        historyList.innerHTML = `
            <div class="no-history">
                <i class="fas fa-history"></i>
                <p>No history yet</p>
            </div>
        `;
        return;
    }
    
    // Sort history by time (newest first)
    userHistory.sort((a, b) => new Date(b.time) - new Date(a.time));
    
    historyList.innerHTML = userHistory.map(item => {
        const isBid = item.type === 'bid';
        const isSale = item.type === 'sale';
        const isRefund = item.type === 'refund';
        const isCreator = item.creator === currentUser.username;
        
        let icon = '';
        let description = '';
        let amountClass = '';
        
        if (isBid) {
            icon = '<i class="fas fa-gavel"></i>';
            description = `Bid placed on ${item.itemName}`;
            amountClass = 'text-primary';
        } else if (isSale) {
            icon = '<i class="fas fa-check-circle"></i>';
            if (isCreator) {
                description = `Item sold to ${item.username}`;
                amountClass = 'text-success';
            } else {
                description = `Item purchased from ${item.creator}`;
                amountClass = 'text-success';
            }
        } else if (isRefund) {
            icon = '<i class="fas fa-undo"></i>';
            description = `Refund received for outbid on ${item.itemName}`;
            amountClass = 'text-success';
        }
        
        return `
            <div class="history-item ${isBid ? 'history-bid' : isSale ? 'history-sale' : 'history-refund'} animate__animated animate__fadeIn">
                <div class="history-header">
                    ${icon}
                    <div>
                        <h4>${item.itemName}</h4>
                        <small>${new Date(item.time).toLocaleString()}</small>
                    </div>
                    <div class="history-amount ${amountClass}">₹ ${item.amount}</div>
                </div>
                <p class="history-description">${description}</p>
                ${isSale ? `<p class="history-status"><i class="fas fa-check"></i> Payment completed</p>` : ''}
                <hr>
            </div>
        `;
    }).join('');
}

/**
 * Renders auctions for the home page
 */
function renderHomeAuctions() {
    const now = Date.now();
    if (!homeAuctionsList) return;
    
    // Clear existing content
    homeAuctionsList.innerHTML = '';
    
    // Filter active auctions (not sold/unsold) and limit to 3
    const activeAuctions = auctions.filter(a => !a.sold && !a.unsold).slice(0, 3);
    
    if (activeAuctions.length === 0) {
        homeAuctionsList.innerHTML = '<p class="no-auctions">No live auctions at the moment. Check back later!</p>';
        return;
    }
    
    activeAuctions.forEach((auction, index) => {
        const auctionEl = document.createElement('div');
        auctionEl.className = 'auction-item';
        auctionEl.style.animationDelay = `${index * 0.1}s`;
        
        const timeLeft = `Time left: <span class='time-left' data-id='${auction.id}'>${formatTimeLeft(auction.endTime - now)}</span>`;
        
        // Create gallery HTML with proper data attributes
        let galleryHTML = '';
        if (auction.images && auction.images.length > 0) {
            galleryHTML = `
                <div class="gallery-container">
                    <img src="${auction.images[0]}" 
                         class="gallery-main-image" 
                         data-auction-id="${auction.id}" 
                         data-index="0"
                         alt="${auction.name}">
                </div>
            `;
        }
        
        // Create auction item HTML
        auctionEl.innerHTML = `
            ${galleryHTML}
            <div class="auction-content">
                <div class="auction-category">${auction.category.toUpperCase()}</div>
                <h3>${auction.name}</h3>
                <p class="auction-description">${auction.description.substring(0, 100)}...</p>
                <p><i class="far fa-clock"></i> ${timeLeft} | Current bid: ₹ ${auction.currentBid}</p>
                <button class="bid-button-home btn btn-gradient hover-grow" data-id="${auction.id}">
                    <i class="fas fa-gavel"></i> Place Bid
                </button>
            </div>
        `;
        
        homeAuctionsList.appendChild(auctionEl);
        
        // Add fade-in animation
        setTimeout(() => {
            auctionEl.classList.add('animate__animated', 'animate__fadeInUp');
        }, 10);
    });

    // Set up gallery interactions for the home page
    setupGalleryInteractions();

    // Add event listeners to home page bid buttons
    document.querySelectorAll('.bid-button-home').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            if (!currentUser) {
                showLoginModal();
            } else {
                homeContent.classList.add('hidden');
                mainApp.classList.remove('hidden');
                heroSection.style.display = 'none';
                showSection(liveSection);
            }
        });
    });

    // Restart auto-rotation for the new images
    startAutoImageRotation();
}

/**
 * Sets up theme toggle functionality
 */
function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or use media query
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    }
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            icon.classList.replace('fa-sun', 'fa-moon');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            icon.classList.replace('fa-moon', 'fa-sun');
        }
    });
}

/**
 * Renders user profile
 */

function renderProfile() {
    if (!currentUser) return;
    
    document.getElementById('profile-username').textContent = currentUser.username;
    document.getElementById('profile-full-name').textContent = currentUser.fullName || 'Not provided';
    document.getElementById('profile-email').textContent = currentUser.email || 'Not provided';
    document.getElementById('profile-phone').textContent = currentUser.phone || 'Not provided';
    document.getElementById('member-since').textContent = currentUser.joinDate ? new Date(currentUser.joinDate).toLocaleDateString() : new Date().toLocaleDateString();
    
    // Count user's created auctions
    const userAuctions = auctions.filter(a => a.creator === currentUser.username);
    const auctionsSold = userAuctions.filter(a => a.sold).length;
    const auctionsUnsold = userAuctions.filter(a => a.unsold).length;
    
    // Count won auctions (where user is highest bidder and auction is sold)
    const wonAuctions = auctions.filter(a => a.highestBidder === currentUser.username && a.sold).length;
    
    // Update the stat cards
    document.getElementById('user-balance-profile-stat').textContent = currentUser.balance;
    document.getElementById('total-bids').textContent = currentUser.totalBids || 0;
    document.getElementById('auctions-created').textContent = userAuctions.length;
    document.getElementById('auctions-won').textContent = wonAuctions;
    document.getElementById('auctions-sold').textContent = auctionsSold;
    document.getElementById('auctions-unsold').textContent = auctionsUnsold; // Fix: Added auctions-unsold
    
    document.querySelectorAll('.stat-card').forEach(card => {
        card.classList.add('animate__animated', 'animate__pulse');
        setTimeout(() => {
            card.classList.remove('animate__animated', 'animate__pulse');
        }, 1000);
    });
}

/**
 * Shows edit profile modal
 */
function showEditProfileModal() {
    const modal = document.getElementById('edit-profile-modal');
    if (!currentUser) return;
    
    document.getElementById('edit-full-name').value = currentUser.fullName || '';
    document.getElementById('edit-email').value = currentUser.email || '';
    document.getElementById('edit-phone').value = currentUser.phone || '';
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

/**
 * Handles edit profile form submission
 */
function handleEditProfile(e) {
    e.preventDefault();
    const fullName = document.getElementById('edit-full-name').value;
    const email = document.getElementById('edit-email').value;
    const phone = document.getElementById('edit-phone').value;
    
    if (!currentUser) return;
    
    currentUser.fullName = fullName;
    currentUser.email = email;
    currentUser.phone = phone;
    
    hideEditProfileModal();
    renderProfile();
    showNotification('Profile updated successfully!', 'success');
}

/**
 * Hides edit profile modal
 */
function hideEditProfileModal() {
    document.getElementById('edit-profile-modal').classList.add('hidden');
    document.body.style.overflow = '';
}

/**
 * Shows about modal
 */
function showAboutModal() {
    document.getElementById('about-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

/**
 * Shows terms modal
 */
function showTermsModal() {
    document.getElementById('terms-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

/**
 * Shows privacy modal
 */
function showPrivacyModal() {
    document.getElementById('privacy-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

/**
 * Shows help modal
 */
function showHelpModal() {
    document.getElementById('help-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

/**
 * Shows contact modal
 */
function showContactModal() {
    document.getElementById('contact-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

/**
 * Hides contact modal
 */
function hideContactModal() {
    document.getElementById('contact-modal').classList.add('hidden');
    document.body.style.overflow = '';
}

/**
 * Handles gallery image click
 */
function handleGalleryClick(e) {
    e.stopPropagation();
    const auctionId = parseInt(this.getAttribute('data-auction-id'));
    const currentIndex = parseInt(this.getAttribute('data-index') || 0);
    
    openFullscreenGallery(auctionId, currentIndex);
}

/**
 * Handles keyboard navigation in fullscreen gallery
 */
function handleFullscreenKeydown(e) {
    const overlay = document.querySelector('.fullscreen-overlay.active');
    if (!overlay) return;

    switch(e.key) {
        case 'ArrowLeft':
            e.preventDefault();
            navigateFullscreen(-1);
            break;
        case 'ArrowRight':
            e.preventDefault();
            navigateFullscreen(1);
            break;
        case 'Escape':
            e.preventDefault();
            closeFullscreenGallery();
            break;
    }
}

/**
 * Formats time left in human readable format
 */
function formatTimeLeft(ms) {
    const totalSeconds = Math.max(0, Math.floor(ms / 1000));
    const days = Math.floor(totalSeconds / (24 * 3600));
    const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    let parts = [];
    if (days > 0) parts.push(`${days}d`);
    if (hours > 0 || days > 0) parts.push(`${hours}h`);
    if (minutes > 0 || hours > 0 || days > 0) parts.push(`${minutes}m`);
    parts.push(`${seconds}s`);
    return parts.join(' ');
}

/**
 * Shows a notification message
 */
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification animate__animated animate__fadeInUp notification-${type}`;
    notification.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i> ${message}`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('animate__fadeOut');
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

/**
 * Starts auto rotation of auction images
 */
function startAutoImageRotation() {
    clearInterval(window.autoRotateInterval);
    
    window.autoRotateInterval = setInterval(() => {
        rotateAllAuctionImages();
    }, 3000);
}

/**
 * Rotates all auction images in galleries with a fade effect.
 */
function rotateAllAuctionImages() {
    document.querySelectorAll('.gallery-main-image').forEach(img => {
        const auctionId = parseInt(img.getAttribute('data-auction-id'));
        const auction = auctions.find(a => a.id === auctionId);
        if (!auction?.images || auction.images.length <= 1) return;

        const currentIndex = parseInt(img.getAttribute('data-index') || 0);
        const nextIndex = (currentIndex + 1) % auction.images.length;
        
        // Apply fade-out effect
        img.style.opacity = '0';

        setTimeout(() => {
            // Change image source
            img.src = auction.images[nextIndex];
            img.setAttribute('data-index', nextIndex);
            
            // Apply fade-in effect
            img.style.opacity = '1';
        }, 300); // Wait for the fade-out transition to complete
    });
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Update auctions every 5 seconds
setInterval(() => {
    if (liveSection.classList.contains('active') || historySection.classList.contains('active') || homeContent.classList.contains('active')) {
        const needsUpdate = checkAuctionStatus();
        if (needsUpdate) {
            renderAuctions();
            renderHistory();
            renderHomeAuctions();
            if (profileSection.classList.contains('active')) {
                renderProfile();
            }
        }
    }

    if (auctionDetailSection.classList.contains('active') && typeof currentAuctionDetailId === 'number') {
        const needsUpdate = checkAuctionStatus();
        if (needsUpdate) {
            const bidForm = document.querySelector(`.bid-form[data-id="${currentAuctionDetailId}"]`);
            const oldInput = bidForm?.querySelector('input');
            const savedValue = oldInput?.value || '';

            renderAuctions();
            renderHistory();
            renderHomeAuctions();
            showAuctionDetails(currentAuctionDetailId);

            requestAnimationFrame(() => {
                const newBidForm = document.querySelector(`.bid-form[data-id="${currentAuctionDetailId}"]`);
                const newInput = newBidForm?.querySelector('input');
                if (newInput) newInput.value = savedValue;
            });
        }
    }
}, 5000);

// Update time left counters every second
setInterval(() => {
    const now = Date.now();
    document.querySelectorAll('.time-left').forEach(el => {
        const id = parseInt(el.getAttribute('data-id'));
        const auction = auctions.find(a => a.id === id);
        if (auction && !auction.sold && !auction.unsold) {
            el.textContent = formatTimeLeft(auction.endTime - now);
        } else {
            el.textContent = 'Auction ended';
        }
    });
}, 1000);