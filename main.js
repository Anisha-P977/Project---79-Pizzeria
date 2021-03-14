menu_list_array = [
    "Chicken Olives Pizza",
    "Veg Paneer Pizza",
    "Cheese Veg Pizza",
    "Double Cheese Margherita",
    "CHEESE N CORN.",
    "Mexican Green Wave"
]

function getmenu() {
    var htmldata;
    htmldata = "<ol class = 'menulist'>"
    menu_list_array.sort();
    for (var i = 0; i < menu_list_array.length; i++) {
        htmldata = htmldata + '<li>' + menu_list_array[i] + '</li>'

    }
    htmldata = htmldata + '</ol>'
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item() {
    var htmldata;
    item = document.getElementById("add_item").value;
    menu_list_array.push(item);

    menu_list_array.sort();
    htmldata = "<section class='cards'>"
    for (var i = 0; i < menu_list_array.length; i++) {
        htmldata = htmldata + "<div class='card'>" + "<img src='images/pizzaImg.png'/>" + menu_list_array[i] + '</div>'
    }

    htmldata = htmldata + "</section>"
    document.getElementById("display_addedmenu").innerHTML = htmldata;
}