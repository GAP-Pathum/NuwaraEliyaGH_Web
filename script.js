/*script.js*/
document.addEventListener('DOMContentLoaded', function () {
    const slideShowContainer = document.querySelector('.background-slide-show');
    const images = ['wallpaper1', 'wallpaper2', 'wallpaper3', 'wallpaper4', 'wallpaper5'];
    let currentSlide = 0;

    function showSlide(index) {
        const newImage = document.createElement('img');
        newImage.src = images[index];
        newImage.classList.add('active');

        if (slideShowContainer.children.length > 0) {
            slideShowContainer.insertBefore(newImage, slideShowContainer.firstChild);
        } else {
            slideShowContainer.appendChild(newImage);
        }

        setTimeout(() => {
            const previousImage = slideShowContainer.lastChild;
            previousImage.classList.remove('active');
            setTimeout(() => {
                previousImage.remove();
            }, 1000);
        }, 100);

        currentSlide = (currentSlide + 1) % images.length;
    }

    setInterval(() => {
        showSlide(currentSlide);
    }, 5000); // Change slide every 5 seconds

    // Initial slide
    showSlide(currentSlide);
});

    // Add JavaScript code for the popup
    const clinicRows = document.querySelectorAll('.clinic-row');

    clinicRows.forEach(row => {
        row.addEventListener('click', function () {
            const popupContent = this.getAttribute('data-popup');
            showPopup(popupContent);
        });

        row.addEventListener('mouseover', function () {
            const tooltipContent = this.getAttribute('data-tooltip');
            showTooltip(tooltipContent, event.clientX, event.clientY);
        });

        row.addEventListener('mouseout', function () {
            hideTooltip();
        });
    });

    // Hide popup when clicking outside
    window.addEventListener('click', function (event) {
        const popup = document.querySelector('.popup');
        if (event.target !== popup && !popup.contains(event.target)) {
            hidePopup();
        }
    });

    function showPopup(content) {
        const popup = document.querySelector('.popup');
        popup.innerHTML = content;
        popup.style.display = 'block';
        positionPopup();
    }

    function hidePopup() {
        const popup = document.querySelector('.popup');
        popup.style.display = 'none';
    }

    function positionPopup() {
        const popup = document.querySelector('.popup');
        const activeRow = document.querySelector('.clinic-row:hover');
        if (activeRow) {
            const rect = activeRow.getBoundingClientRect();
            popup.style.top = rect.bottom + 'px';
            popup.style.left = rect.left + 'px';
        }
    }

    function showTooltip(content, x, y) {
        const tooltip = document.getElementById('tooltip');
        tooltip.innerHTML = content;
        tooltip.style.top = y + 'px';
        tooltip.style.left = x + 'px';
        tooltip.style.display = 'block';
    }

    function hideTooltip() {
        const tooltip = document.getElementById('tooltip');
        tooltip.style.display = 'none';
    }

/*----------appointment------------*/
function navigateToAppointment() {
    window.location.href = "appointment.html";
}
 /*------signin/up------*/
 function navigateTosignin() {
    window.location.href = "signin.html";
}
function navigateTosignup() {
    window.location.href = "signup.html";
}

/*--------staff page------------*/
// Function to show doctors based on category
document.addEventListener('DOMContentLoaded', function () {
    const categoryCards = document.querySelectorAll('.category-card');

    categoryCards.forEach(card => {
        card.addEventListener('click', function () {
            // Remove previous selection
            categoryCards.forEach(prevCard => {
                prevCard.classList.remove('selected');
            });

            // Add selected class to the clicked category
            this.classList.add('selected');

            const category = this.getAttribute('data-category');
            showDoctorCards(category);
        });
    });
});

function showDoctorCards(category) {
    const doctorCards = document.querySelectorAll('.doctor-card');
    
    doctorCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (cardCategory === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    // Scroll to the first doctor card in the selected category
    const firstDoctorCard = document.querySelector(`.doctor-card[data-category="${category}"]:first-child`);
    if (firstDoctorCard) {
        firstDoctorCard.scrollIntoView({ behavior: 'smooth' });
    }
}

// Function to show doctor details popup
function showDoctorDetails(name, position, description) {
    const popup = document.getElementById('doctorPopup');
    const popupName = document.getElementById('popupDoctorName');
    const popupPosition = document.getElementById('popupDoctorPosition');
    const popupDescription = document.getElementById('popupDoctorDescription');

    popupPhoto.src = `doctor_${name.toLowerCase().replace(' ', '_')}.jpg`;
    popupName.textContent = name;
    popupPosition.textContent = position;
    popupDescription.textContent = description;

    popup.style.display = 'block';
}

// Function to close the popup
function closePopup() {
    const popup = document.getElementById('doctorPopup');
    popup.style.display = 'none';
}

/*--------------News page--------------------*/
function toggleDetails(elementId) {
    const detailsElement = document.getElementById(elementId);
    detailsElement.classList.toggle('expanded');
}

/*---------------about us page--------------*/

function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.toggle('details-section');

    const btn = section.previousElementSibling.querySelector('.expand-btn');
    btn.innerText = section.classList.contains('details-section') ? 'Expand' : 'Collapse';
}

/*-----contact us page----------*/
document.addEventListener('DOMContentLoaded', function () {
    // Add any contact form validation or submission logic here
});

/*----donate page--------*/

document.addEventListener('DOMContentLoaded', function () {
    // Add specific donation page JavaScript logic here (if needed)
});