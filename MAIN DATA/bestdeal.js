displaybestdeal = [

    {
        image: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/249/original/data?1642069956",
        name: "1kg Onion at Rs.1",
        quantity: "1 unit",
        price: "1",
    },
    {
        image: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/LCOR21.png",
        name: "Coriander Leaves",
        quantity: "100 g",
        price: "2",
    },
    {
        image: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/BTOM11.png",
        name: "Tomato",
        quantity: "500 g",
        price: "9",
    },
    {
        image: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VFRE12.png",
        name: "Beans French",
        quantity: "250 g",
        price: "9",
    },
    {
        image: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/BPOT11.png",
        name: "Potato",
        quantity: "1 kg",
        price: "24",
    },
    {
        image: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FSTR12.png",
        name: "Strawberry",
        quantity: "approx 180-200 gm",
        price: "69",
    },
    {
        image: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VPEA11.png",
        name: "Green Peas (Matar)",
        quantity: "250 g",
        price: "9",
    },
    {
        image: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VLAD12.png",
        name: "Ladies Finger (Okra)",
        quantity: "250 g",
        price: "13",
    },
    {
        image: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/BONI11.png",
        name: "Onion",
        quantity: "1 kg",
        price: "32",
    },
    {
        image: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/200/original/data?1602516452",
        name: "Super Saver Combo (1 Kg Potato+ 1 Kg Tomato)",
        quantity: "1 unit",
        price: "40",
    },
    {
        image: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/373/original/data?1623093890",
        name: "Smart Saver Combo (1 Kg Potato+ 1 Kg Onion)",
        quantity: "1 unit",
        price: "51",
    },
    {
        image: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/204/original/data?1621240725",
        name: "Cooler Fruit Combo (1 Pc Each Watermelon + Papaya)",
        quantity: "1 Unit",
        price: "158",
    },
    {
        image: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VC004.png",
        name: "3 Kg POT(1 Kg Each, Potato + Tomato + Onion)",
        quantity: "1 unit",
        price: "72",
    },
]


displaybestdeal.map(function (data) {

    var maindiv = document.createElement("div");
    maindiv.setAttribute("class", "mainitem");

    var divup = document.createElement("div");
    divup.setAttribute("class", "up");

    var image = document.createElement("img");
    image.setAttribute("src", data.image);

    var divdown = document.createElement("div");
    divdown.setAttribute("class", "down");

    var name = document.createElement("p");
    name.textContent = data.name;

    var div1 = document.createElement("div");
    div1.setAttribute("class", "inner");

    var div2 = document.createElement("div");

    var para1 = document.createElement("p");
    para1.textContent = data.quantity;

    var para2 = document.createElement("p");
    para2.textContent = data.price;

    var btn = document.createElement("button");
    btn.textContent = "ADD";


    divup.append(image)
    divdown.append(name, div1);

    div1.append(div2, btn);
    div2.append(para1, para2);

    maindiv.append(divup, divdown)
    document.querySelector("#bestdesls").append(maindiv);
})