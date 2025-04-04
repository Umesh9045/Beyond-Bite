function showPaymentOptions() {
    document.getElementById('paymentBox').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function hidePaymentOptions() {
    document.getElementById('paymentBox').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function payCOD() {
    window.open('https://wa.me/message/V5PA4DEGARK7P1', '_blank');
}


function whatsapp1() {
    var message1 = document.getElementById("message1").value;
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (message1 == "") {
        alert("Please enter your message!");
        return false;
    }

    var url = "https://wa.me/+919359889291?text=" +
        "*Message :* " + message1 + "%0a" + "%0a" +
        "*- Requested from BeyondBite Web -*";

    window.open(url, '_blank').focus();
    return true;
}

var pdfPopup_buttons = document.querySelectorAll('.pdfPopup_button');
var pdfPopup_popups = document.querySelectorAll('.pdfPopup_popup');
var pdfPopup_iframes = document.querySelectorAll('.pdfPopup_myIframe');
var navbar = document.querySelector('#header_section'); // Replace '.navbar' with your header's actual class or ID
// var scrollPosition = 0; // To store the scroll position
var tagLine = document.querySelector('#tag-line');

// Open popup and disable scrolling on the outer page
pdfPopup_buttons.forEach((button) => {
    button.addEventListener('click', function () {
        var buttonPDFLink = this.getAttribute("data-href"); // Get the PDF link
        // scrollPosition = window.scrollY;  // Store the current scroll position
        pdfPopup_popups.forEach((popup) => {
            popup.style.display = 'flex'; // Show the popup
        });
        pdfPopup_iframes.forEach((iframe) => {
            iframe.setAttribute("src", buttonPDFLink); // Set the iframe source
        });
        // document.body.classList.add('pdfPopup_noScroll'); // Disable outer page scrolling
        // if (navbar) navbar.style.display = 'none';
        // if (tagLine) tagLine.style.display = 'none';
    });
});

// Close popup when clicking the close button
pdfPopup_popups.forEach((popup) => {
    popup.addEventListener('click', function (event) {
        // Check if the clicked element is the close button  OR  click outside the popuparea
        if (event.target.classList.contains('pdfPopup_close')) {
            popup.style.display = 'none'; // Hide the popup
            pdfPopup_iframes.forEach((iframe) => {
                iframe.removeAttribute("src"); // Clear iframe source
            });
            // document.body.classList.remove('pdfPopup_noScroll'); // Re-enable scrolling
            // window.scrollTo(0, scrollPosition);
            // if (navbar) navbar.style.display = '';
            // if (tagLine) tagLine.style.display = '';
        }

        // || event.target === popup
    });
});