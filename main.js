
let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');



//get total
function getTotal() {
    // Vérifie si les valeurs des champs sont des nombres valides
    if (!isNaN(price.value) && !isNaN(taxes.value) && !isNaN(ads.value) && !isNaN(discount.value)) {
        // Effectue le calcul uniquement si les valeurs sont des nombres valides
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = result;
    } else {
        // Affiche un message d'erreur si l'une des valeurs n'est pas un nombre valide
        total.innerHTML = "Veuillez saisir des nombres valides";
    }
}

//creat product
//save localstorage
//clear inputs
//read
//read
//count
//delete
//update
//search
//clean data