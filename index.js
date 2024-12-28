//////////////////////////////loader/////////////////////////////


//////////////////////// loader end //////////////////////////////

document.addEventListener("DOMContentLoaded", (event) => {
	const menuToggle = document.querySelector('.menu-toggle');
	const menu = document.querySelector('.menu');
	const menuClose = document.querySelector('.menu-close');
	const overlay = document.createElement('div');
	overlay.classList.add('menu-overlay');
	document.body.appendChild(overlay);

	const links = document.querySelectorAll('.menu a');

	function closeMenu() {
		menu.classList.remove('show');
		overlay.classList.remove('show');
	}

	menuToggle.addEventListener('click', function () {
		menu.classList.toggle('show');
		overlay.classList.toggle('show');
	});

	menuClose.addEventListener('click', closeMenu);
	overlay.addEventListener('click', closeMenu);

	links.forEach(link => {
		link.addEventListener('click', closeMenu);
	});
});

//------------------ introduction page ------------------------------//

//------------------GSAP starts from Here ---------------------------//
gsap.registerPlugin(ScrollTrigger);

// Menu Item Animation
gsap.from("#menu-item", {
	scrollTrigger: {
		trigger: "#menu-item",
		start: "top 80%",  // Animation starts when the top of #menu-item is 80% from the top of the viewport
		end: "bottom 60%",  // Animation ends when the bottom of #menu-item is 60% from the top of the viewport
		toggleActions: "play none none none",
	},
	duration: 1,
	y: -80,
	opacity: 0,
	stagger: 0.25
});

// Benz Image Animation
gsap.from("#benz-image", {
	scrollTrigger: {
		trigger: "#benz-image",
		start: "top 80%",
		end: "bottom 60%",
		toggleActions: "restart none none none",
	},
	duration: 1,
	y: -200,
	opacity: 0
});

// Benz Bio Animation
gsap.from("#benz-bio", {
	scrollTrigger: {
		trigger: "#benz-bio",
		start: "top 80%",
		end: "bottom 60%",
		toggleActions: "restart none none none",
	},
	duration: 1,
	y: 200,
	opacity: 0,
});

// Tech Stack Box Animation
gsap.from(".tech-stack-box", {
	scrollTrigger: {
		trigger: ".tech-stack-box",
		start: "top 80%",
		end: "bottom 60%",
		toggleActions: "restart none none none",
	},
	duration: 1.5,
	ease: "back.out(2.5)",
	y: 150,
	opacity: 0,
	stagger:0.15
});
gsap.from("#cards", {
	scrollTrigger: {
		trigger: ".tech-stack-box",
		start: "top 80%",
		end: "bottom 60%",
		toggleActions: "restart none none none",
	},
	duration: 1,
	y: 300,
	opacity: 0,
});
gsap.from("#footer-text1", {
	scrollTrigger: {
		trigger: ".project-card",
		start: "top 80%",
		end: "bottom 60%",
		toggleActions: "restart none none none",
	},
	duration: 1,
	y: 100,
	opacity: 0,
	stagger: 0.1
});
gsap.from("#contact-part", {
	scrollTrigger: {
		trigger: "#contact-part",
		markers: false,
		start: "top bottom", // When the top of #contact-part hits the bottom of the viewport
		toggleActions: "restart none none none",
	},
	duration: 1,
	y: 100,
	opacity: 0,
	stagger: 0.1
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll('.filter button');
    const cardContainer = document.getElementById('card-container');
    const cards = document.querySelectorAll('.card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            const filteredCards = Array.from(cards).filter(card => 
                filter === 'all' || card.classList.contains(filter)
            );

            // Clear the container
            cardContainer.innerHTML = '';

            // Append filtered cards
            filteredCards.forEach(card => cardContainer.appendChild(card));

            // Update active class
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Get the upword button
let goToTopBtn = document.getElementById("goToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
		goToTopBtn.style.display = "block";
	} else {
		goToTopBtn.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
goToTopBtn.onclick = function () {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Ensure the button is hidden when the page loads
document.addEventListener("DOMContentLoaded", function () {
	goToTopBtn.style.display = "none";
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// typer for hello
window.onload = function () {
	var elements = document.getElementsByClassName('txt-rotate');
	for (var i = 0; i < elements.length; i++) {
		var toRotate = elements[i].getAttribute('data-rotate');
		var period = elements[i].getAttribute('data-period');
		if (toRotate) {
			new TxtRotate(elements[i], JSON.parse(toRotate), period);
		}
	}
	// INJECT CSS
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = ".txt-rotate > .wrap { border-right: 10px solid #40E0D0 }";
	document.body.appendChild(css);
};

var TxtRotate = function (el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 1) || 1000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];

	if (this.isDeleting) {
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

	var that = this;
	var delta = 200 - Math.random() * 100;

	if (this.isDeleting) {
		delta /= 2;
	}

	if (!this.isDeleting && this.txt === fullTxt) {
		delta = this.period;
		this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		this.loopNum++;
		delta = 200;
	}

	setTimeout(function () {
		that.tick();
	}, delta);
};


//////////////////////////////////  project section ///////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
	const carousel = document.querySelector(".project-carousel");
	const arrowBtns = document.querySelectorAll(".project-wrapper i");
	const wrapper = document.querySelector(".project-wrapper");

	const firstCard = carousel.querySelector(".project-card");
	const firstCardWidth = firstCard.offsetWidth;

	let isDragging = false,
		startX,
		startScrollLeft,
		timeoutId;

	const dragStart = (e) => {
		isDragging = true;
		carousel.classList.add("dragging");
		startX = e.pageX;
		startScrollLeft = carousel.scrollLeft;
	};

	const dragging = (e) => {
		if (!isDragging) return;

		// Calculate the new scroll position 
		const newScrollLeft = startScrollLeft - (e.pageX - startX);

		// Check if the new scroll position exceeds 
		// the carousel boundaries 
		if (newScrollLeft <= 0 || newScrollLeft >=
			carousel.scrollWidth - carousel.offsetWidth) {

			// If so, prevent further dragging 
			isDragging = false;
			return;
		}

		// Otherwise, update the scroll position of the carousel 
		carousel.scrollLeft = newScrollLeft;
	};

	const dragStop = () => {
		isDragging = false;
		carousel.classList.remove("dragging");
	};

	const autoPlay = () => {

		// Return if window is smaller than 800 
		if (window.innerWidth < 800) return;

		// Calculate the total width of all cards 
		const totalCardWidth = carousel.scrollWidth;

		// Calculate the maximum scroll position 
		const maxScrollLeft = totalCardWidth - carousel.offsetWidth;

		// If the carousel is at the end, stop autoplay 
		if (carousel.scrollLeft >= maxScrollLeft) return;

		// Autoplay the carousel after every 2500ms 
		timeoutId = setTimeout(() =>
			carousel.scrollLeft += firstCardWidth, 2500);
	};

	carousel.addEventListener("mousedown", dragStart);
	carousel.addEventListener("mousemove", dragging);
	document.addEventListener("mouseup", dragStop);
	wrapper.addEventListener("mouseenter", () =>
		clearTimeout(timeoutId));
	wrapper.addEventListener("mouseleave", autoPlay);

	// Add event listeners for the arrow buttons to 
	// scroll the carousel left and right 
	arrowBtns.forEach(btn => {
		btn.addEventListener("click", () => {
			carousel.scrollLeft += btn.id === "left" ?
				-firstCardWidth : firstCardWidth;
		});
	});
});
/////////////////////////////////////// email section ////////////////////////////////////////
