"use strict";

const menu = {
    drinks: ["Water", "Tea", "Sweet Tea", "Coke", "Dr. Pepper", "Sprite"],
    entrees: ["Hamburger w/ Fries", "Grilled Cheese w/ Tater Tots", "Grilled Chicken w/ Veggies", "Chicken Fried Steak w/ Mashed Potatoes", "Fried Shrimp w/ Coleslaw", "Veggie Plate"],
    desserts: ["Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"]
};

initializeMenuItem()

function initializeMenuItem() {

    const categoryDropDown = document.getElementById("category").value;
    const menuItemListBox = document.getElementById("menuItems");

    menuItemListBox.innerHTML = "";
    let menuofCategory = menu[categoryDropDown]

    for (const item of menuofCategory) {
        const option = document.createElement("option");
        option.innerHTML = item;
        menuItemListBox.appendChild(option);
    }
}



