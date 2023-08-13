let placeOrder = document.getElementById('placeOrder');

placeOrder.addEventListener('click', (e) => {
    e.preventDefault();

    let fullname = document.getElementById('fullname').value;
    let email = document.getElementById('email').value;
    let contact = document.getElementById('contact').value;

    let orderedItems = JSON.parse(localStorage.getItem("orderedItems")) || [];
    let totalAmount = JSON.parse(localStorage.getItem("TotalAmount")) || [];

 
    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function isValidPhoneNumber(phoneNumber) {
        const phonePattern = /^[0-9]{11}$/; // Assuming a 10-digit phone number format
        return phonePattern.test(phoneNumber);
    }

    if (!fullname || !email || !contact || orderedItems.length === 0) {
        let warningCont = document.getElementById('warning-cont');
        let warningMessage = document.getElementById('warning-message');
    
        warningMessage.textContent = "Please fill in all required fields.";
        warningCont.classList.add('show-warning-cont');
    
        setTimeout(function () {
            warningCont.classList.remove('show-warning-cont');
        }, 3000); // Set the time in milliseconds (e.g., 3000ms or 3 seconds)
    
    } else if (!isValidEmail(email)) {
        let warningCont = document.getElementById('warning-cont');
        let warningMessage = document.getElementById('warning-message');
    
        warningMessage.textContent = "Please enter a valid email address.";
        warningCont.classList.add('show-warning-cont');
    
        setTimeout(function () {
            warningCont.classList.remove('show-warning-cont');
        }, 3000);
    
    } else if (!isValidPhoneNumber(contact)) {
        let warningCont = document.getElementById('warning-cont');
        let warningMessage = document.getElementById('warning-message');
    
        warningMessage.textContent = "Please enter a valid 11-digit phone number.";
        warningCont.classList.add('show-warning-cont');
    
        setTimeout(function () {
            warningCont.classList.remove('show-warning-cont');
        }, 3000);
    
    }else{

    let orderedItems = JSON.parse(localStorage.getItem("orderedItems")) || [];

    console.log("Fullname: " + fullname);
    console.log("Email: " + email);
    console.log("Contact:" + contact);
    console.log("Total Amount: " + totalAmount);
    // Log each product name from the orderedItems array
    orderedItems.forEach(item => {
        console.log("Name: " + item.productName + " Price:" + item.productPrice);
    });

    let orderPlace = document.getElementById('orderPlace');
        orderPlace.classList.add('show-Added-prod');
        setTimeout(function (){
            orderPlace.classList.remove('show-Added-prod');
    },5000);


    document.getElementById('fullname').value = "";
    document.getElementById('email').value = "";
    document.getElementById('contact').value = "";

    // Clear only the current order from the orderedItems array
    orderedItems = [];
    orders = orderedItems;
    showOrder();
    localStorage.setItem("orderedItems", JSON.stringify(orderedItems));
}
});

