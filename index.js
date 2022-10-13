


var products = [
    { id: 1, name: "glass", price: 20, size: "M" },
    { id: 2, name: "saree", price: 80, size: "32" },
    { id: 3, name: "shirt", price: 200, size: "s" },
    { id: 4, name: "pant", price: 50, size: "L" },
    { id: 5, name: "umberlla", price: 10, size: "medium" },
    { id: 6, name: "mug", price: 40, size: "M" },
];
var cart = []

var addtocart = document.getElementById("clickme");
var increment = document.getElementById("inc");
var decrement = document.getElementById("dec");


addtocart.addEventListener("click", function () {
    var show = parseInt(prompt("enter"))


    if (cart == "") {
        var res = products.find((item) => {
            return item.id == show;
        })
        if (res) {
            res.qty = 1;
            cart.push(res)
        }
        console.log(cart)

    } else {


        let store = cart.find((item) => {
            return item.id === show;
        })
        if (store) {
            store.qty += 1;
            console.log(cart)
        } else {
            let add = products.find((item) => {
                return item.id == show;
            })
            add.qty = 1;
            cart.push(add)
            console.log(cart)

        }

    }

})


function incre() {
    var id = parseInt(prompt("increment protect"))

    cart.map((item) => {
        if (item.id == id) {

            return {
                ...item,
                qty: item.qty + 1
            }
        } else return item;
    });
    console.log(cart);
}
increment.addEventListener("click", incre)

function decrem() {
    var id = parseInt(prompt("decrement"))
    const selectedprod = cart.find((item) => item.id == id)
    if (selectedprod) {
        if (selectedprod.qty == 1) {
            cart.filter((item) => item.id != id)
            console.log(cart);
        } else {
            cart.map((item) => {
                if (item.id == a) {

                    return {
                        ...item,
                        qty: item.qty - 1
                    }
                } else return item;
            });
            console.log(cart);
        }
    }
}

decrement.addEventListener("click", decrem)


