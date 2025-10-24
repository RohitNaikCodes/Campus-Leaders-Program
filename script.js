// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    console.log('Campus Leaders Program website loaded successfully!');
    
    // Get button elements
    const userReportBtn = document.getElementById('userReportBtn');
    const whatsappBtn = document.getElementById('whatsappBtn');
    
    // Add click event listeners
    userReportBtn.addEventListener('click', handleUserReport);
    whatsappBtn.addEventListener('click', handleWhatsAppCommunity);
    
    // Add animation effects to QR cards
    const qrCards = document.querySelectorAll('.qr-card');
    qrCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
    });
});

// User Report button handler
function handleUserReport() {
    // Add button click animation
    animateButton(this);
    
    // Open Google Forms for user report
    const reportFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScloI5v48Qvi6FktuZvoqDL4cqAqXkm0a3PuuYHFHo8MBF8pQ/viewform?usp=dialog';
    
    // Open the form in a new tab
    window.open(reportFormUrl, '_blank');
    
    console.log('User Report form opened:', reportFormUrl);
}

// WhatsApp Community button handler
function handleWhatsAppCommunity() {
    // Add button click animation
    animateButton(this);
    
    // WhatsApp group link
    const whatsappGroupLink = 'https://chat.whatsapp.com/Ek0LbWgTFW5H1jg4e5k1Mw';
    
    // Open WhatsApp group directly
    window.open(whatsappGroupLink, '_blank');
    
    console.log('WhatsApp Community opened:', whatsappGroupLink);
}

// Button click animation
function animateButton(button) {
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = '';
    }, 150);
}

// Add fade-in animation CSS dynamically
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 0;
        transform: translateY(20px);
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// QR Code click handlers (for future functionality)
document.addEventListener('DOMContentLoaded', function() {
    const qrImages = document.querySelectorAll('.qr-image');
    
    qrImages.forEach((img, index) => {
        img.addEventListener('click', function() {
            console.log(`QR Code ${index + 1} clicked`);
            
            // Add click effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Placeholder functionality for QR code interaction
            alert(`QR Code ${index + 1} clicked!\n\nFunctionality can be added here:\n• Open specific links\n• Download resources\n• Show additional information`);
        });
        
        // Add hover effect cursor
        img.style.cursor = 'pointer';
    });
});

// Utility function to update QR codes (for future use)
function updateQRCode(index, newSrc, newLabel) {
    const qrImages = document.querySelectorAll('.qr-image');
    const qrLabels = document.querySelectorAll('.qr-label');
    
    if (index >= 0 && index < qrImages.length) {
        qrImages[index].src = newSrc;
        if (newLabel && qrLabels[index]) {
            qrLabels[index].textContent = newLabel;
        }
        console.log(`QR Code ${index + 1} updated`);
    }
}

// Function to replace all QR codes (for when actual QR codes are provided)
function replaceAllQRCodes(qrCodeData) {
    /*
    Expected format for qrCodeData:
    [
        { src: 'path/to/qr1.png', label: 'Registration' },
        { src: 'path/to/qr2.png', label: 'Resources' },
        { src: 'path/to/qr3.png', label: 'Feedback' },
        { src: 'path/to/qr4.png', label: 'Contact' },
        { src: 'path/to/qr5.png', label: 'Social' }
    ]
    */
    
    qrCodeData.forEach((qr, index) => {
        updateQRCode(index, qr.src, qr.label);
    });
}

// Console welcome message
console.log(`
🎉 SSPMCOE X GSA X SkillSync - Campus Leaders Program 🎉
Website loaded successfully!

Features:
✅ Responsive design
✅ Interactive QR codes
✅ Action buttons
✅ Modern animations

To customize:
• Replace QR code placeholders with actual images
• Update button functionality
• Modify WhatsApp group link
`);