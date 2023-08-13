let coffeeBtn = document.getElementById('coffeeHandler');
let souvenirBtn = document.getElementById('souvenirHandler');


let coffeeList = document.getElementById('coffee-list');
let souvenirList = document.getElementById('souvenir-list');
coffeeBtn.addEventListener('click', () => {
    coffeeList.style.display = "block";
    souvenirList.style.display = "none";

    coffeeBtn.classList.remove('addborder2');
    souvenirBtn.classList.remove('addborder');
});

souvenirBtn.addEventListener('click', () => {
    souvenirList.style.display = "block";
    coffeeList.style.display = "none";

    coffeeBtn.classList.add('addborder2');
    souvenirBtn.classList.add('addborder');
});






// ========================================


orders = [];

function addToOrder(img,name,price){
    let orderedItems = JSON.parse(localStorage.getItem("orderedItems")) || [];

    // let existingItem = orderedItems.find(item => item.productName === name);

    // if (existingItem) {
    //     existingItem.quantity += 1;
    //     existingItem.totalPrice += parseFloat(price);
    // } else {
    //     orderedItems.push({
    //         productImg: img,
    //         productName: name,
    //         productPrice: parseFloat(price),
    //         quantity: 1,
    //         totalPrice: parseFloat(price)
    //     });
    // }

    // <small class="coffee-price">$${items.totalPrice.toFixed(2)}</small>


    // adding new itme to array
     orderedItems.push({
        productImg: img,
        productName: name,
        productPrice: price
     });
     localStorage.setItem('orderedItems',JSON.stringify(orderedItems));
     orders = orderedItems;
     showOrder();
     let showAdded = document.getElementById('added-cont');
     let addedproductname = document.getElementById('added-product-name');
    //  alert(name + "Item Added");
    addedproductname.textContent = name;
    showAdded.classList.add('show-Added-prod');
    setTimeout(function (){
        showAdded.classList.remove('show-Added-prod');
    },1000);
  
}
    

// get  the id of where the added items will be display
let ListHolder = document.getElementById('ListHolder');

function showOrder(){
    ListHolder.innerHTML = "";
    let itemCount = 0; 

    orders.forEach(function(items){
        itemCount++;
        ListHolder.innerHTML +=
        `
        <li>
            <div class="coffee-img">
                <img src="${items.productImg}" alt="">
            </div>
            <label class="coffe-name">${items.productName}</label>
            <small class="coffee-price">$${items.productPrice}</small>
            <small class="remove-coffee" onclick="removeItem(${itemCount - 1})"><ion-icon name="close"></ion-icon></small>
        </li>

        `;
    });

    // function to total the amount
    let totalAmount  = 0;
    orders.forEach(function(items){
        totalAmount+= Number(items.productPrice);
        
    });
        document.getElementById('totalAmount').innerHTML = totalAmount.toLocaleString();
        document.getElementById('Quantity').innerHTML = itemCount;
        localStorage.setItem('TotalAmount',JSON.stringify(totalAmount));

}

// get the item from local storge
orders = JSON.parse(localStorage.getItem("orderedItems")) || [];
showOrder();



// function to remove the added item one by one
function removeItem(itemCount) {
    let orderedItems = JSON.parse(localStorage.getItem("orderedItems")) || [];

    if (itemCount >= 0 && itemCount < orderedItems.length) {
        let removedItem = orderedItems.splice(itemCount, 1)[0]; // Remove the item and get the removed item's details
        localStorage.setItem("orderedItems", JSON.stringify(orderedItems));
        orders = orderedItems;
        showOrder();

        let showRemove = document.getElementById('remove-cont');
        let addedproductname = document.getElementById('remove-product-name');

        addedproductname.textContent = removedItem.productName; // Set the removed item's name

        showRemove.classList.add('show-Added-prod');
        setTimeout(function (){
            showRemove.classList.remove('show-Added-prod');
        }, 1000);
    }
}








