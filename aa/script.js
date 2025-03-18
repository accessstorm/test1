// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');
    const body = document.querySelector('body');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            // Toggle nav menu
            navLinks.classList.toggle('active');
            
            // Animate hamburger icon
            hamburger.classList.toggle('toggle');
            
            // Prevent scrolling when menu is open
            body.classList.toggle('menu-open');
        });
    }

    // Close mobile menu when clicking a link
    if (links) {
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('toggle');
                body.classList.remove('menu-open');
            });
        });
    }
    
    // Currency Selector for Touch Devices
    const currencySelector = document.querySelector('.currency-selector');
    const currencyOptions = document.querySelectorAll('.currency-option');
    const currencyHeader = document.querySelector('.currency-selector .header');
    
    if (currencySelector) {
        currencyHeader.addEventListener('click', function(e) {
            currencySelector.classList.toggle('touch-active');
            e.stopPropagation();
        });
        
        if (currencyOptions) {
            currencyOptions.forEach(option => {
                option.addEventListener('click', function() {
                    const selectedCurrency = this.textContent;
                    const currentCurrency = currencyHeader.textContent.split('/')[0];
                    const otherCurrency = currencyHeader.textContent.split('/')[1];
                    
                    if (selectedCurrency === currentCurrency) {
                        return;
                    }
                    
                    currencyHeader.textContent = selectedCurrency + '/' + (selectedCurrency === currentCurrency ? otherCurrency : currentCurrency);
                    currencySelector.classList.remove('touch-active');
                    
                    // Here you would typically update prices throughout the site
                    console.log('Currency changed to: ' + selectedCurrency);
                });
            });
        }
        
        // Close dropdown when clicking elsewhere
        document.addEventListener('click', function(e) {
            if (currencySelector && !currencySelector.contains(e.target)) {
                currencySelector.classList.remove('touch-active');
            }
        });
    }
    
    // Responsive adjustments
    function handleResize() {
        if (window.innerWidth > 768) {
            // Reset mobile menu state on desktop
            if (navLinks) {
                navLinks.classList.remove('active');
            }
            if (hamburger) {
                hamburger.classList.remove('toggle');
            }
            body.classList.remove('menu-open');
        }
    }
    
    // Initial call and event listener
    handleResize();
    window.addEventListener('resize', handleResize);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                hamburger.classList.remove('toggle');
                navLinks.classList.remove('active');
                body.classList.remove('menu-open');
            }
        }
    });
});

// Add animation to hero section
window.addEventListener('load', () => {
    document.querySelector('.hero-content').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.hero-content').style.transition = 'opacity 1s ease-in';
        document.querySelector('.hero-content').style.opacity = '1';
    }, 500);
});

// Modal Popup on Load
window.onload = function() {
    var modal = document.getElementById("customPopup");
    var span = document.getElementsByClassName("custom-close")[0];

    modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
};

// Vehicle Slider Functionality
document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".vehicle-track");
    const prevBtn = document.querySelector(".left-btn");
    const nextBtn = document.querySelector(".right-btn");
    
    let cardWidth = document.querySelector(".vehicle-card").offsetWidth + 24; // Adjust for spacing

    // Clone first few cards to create an infinite loop effect
    const cards = document.querySelectorAll(".vehicle-card");
    cards.forEach((card) => {
        let clone = card.cloneNode(true);
        track.appendChild(clone);
    });

    let scrollAmount = 0;

    nextBtn.addEventListener("click", function () {
        scrollAmount += cardWidth;
        track.style.transition = "transform 0.5s ease-in-out";
        track.style.transform = `translateX(-${scrollAmount}px)`;

        // Reset when reaching the cloned section (infinite loop effect)
        setTimeout(() => {
            if (scrollAmount >= track.scrollWidth / 2) {
                track.style.transition = "none"; // Remove animation for instant reset
                scrollAmount = 0;
                track.style.transform = `translateX(0)`;
            }
        }, 500);
    });

    prevBtn.addEventListener("click", function () {
        scrollAmount -= cardWidth;
        track.style.transition = "transform 0.5s ease-in-out";
        track.style.transform = `translateX(-${scrollAmount}px)`;

        // Reset when scrolling too far left
        setTimeout(() => {
            if (scrollAmount < 0) {
                track.style.transition = "none";
                scrollAmount = track.scrollWidth / 2 - cardWidth;
                track.style.transform = `translateX(-${scrollAmount}px)`;
            }
        }, 500);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxClose = document.querySelector(".lightbox-close");

    galleryItems.forEach((item) => {
        item.addEventListener("click", function () {
            lightbox.style.display = "flex";
            lightboxImg.src = this.src;
        });
    });

    lightboxClose.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function (e) {
        if (e.target !== lightboxImg) {
            lightbox.style.display = "none";
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
