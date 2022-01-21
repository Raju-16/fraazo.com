var herbzone = [

    {
        image: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/602/original/data?1635155510",
        name: "Betel Leaf - 12 Pcs",
        quantity: "12 Pcs",
        price: "21"
    },

    {
        image: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/162/original/data?1598301503",
        name: "Amaranthus Red",
        quantity: "250 g",
        price: "29"
    },

    {
        image: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/380/original/data?1635063619",
        name: "Banana Stem",
        quantity: "1 Pc",
        price: "36"
    },

    {
        image: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/375/original/data?1623816989",
        name: "Turmeric",
        quantity: "250g",
        price: "22"
    },

    {
        image: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VGAR12.png",
        name: "Garlic Bunch",
        quantity: "100 g",
        price: "9"
    },

    {
        image: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VCHI22.png",
        name: "Chillies Green",
        quantity: "100 g",
        price: "11"
    },

    {
        image: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/379/original/data?1624022421",
        name: "Banana Leaf",
        quantity: "2 Pcs",
        price: "20"
    },

    {
        image: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/417/original/data?1628778604",
        name: "Aloevera",
        quantity: "1 Pc",
        price: "20"
    },

    {
        image: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/419/original/data?1635147438",
        name: "Colocasia Leaves",
        quantity: "1 Pc",
        price: "4"
    },

    {
        image: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/127/original/data?1603884053",
        name: "Masala Combo",
        quantity: "1 pkt",
        price: "9"
    },

    {
        image: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/LCUR11.png",
        name: "Curry Leaves",
        quantity: "50 g",
        price: "9"
    },

    {
        image: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/LMET1.png",
        name: "Methi (Fenugreek Leaves)",
        quantity: "100 g",
        price: "11"
    },

    {
        image: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/250/original/data?1642167498",
        name: "Lemon(100g)",
        quantity: "100g",
        price: "10"
    },

    {
        image: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/LCOR21.png",
        name: "Coriander Leaves",
        quantity: "100 g",
        price: "3"
    },

    {
        image: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VGIN12.png",
        name: "Ginger",
        quantity: "100 g",
        price: "5"
    },

    {
        image: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VGAR32.png",
        name: "Garlic Peeled",
        quantity: "100 g",
        price: "35"
    },

    {
        image: "https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/665/original/data?1636699760",
        name: "Tulsi",
        quantity: "50 g",
        price: "22"
    },

    {
        image: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/LSPI11.png",
        name: "Palak Spinach",
        quantity: "250g",
        price: "5"
    },

    {
        image: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/LMIN11.png",
        name: "Mint Leaves",
        quantity: "100g",
        price: "12"
    },

    {
        image: "https://fraazo-master.s3.ap-south-1.amazonaws.com/products/VAWL11.png",
        name: "Amla",
        quantity: "250g",
        price: "25"
    },
]

herbzone.map(function (data) {

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
    para1.textContent = data.desc;

    var para2 = document.createElement("p");
    para2.textContent = data.price;

    var btn = document.createElement("button");
    btn.textContent = "ADD";


    divup.append(image)
    divdown.append(name, div1);

    div1.append(div2, btn);
    div2.append(para1, para2);

    maindiv.append(divup, divdown)
    document.querySelector("#zherb").append(maindiv);
})