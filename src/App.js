import './App.css';
import Toolbar from "./components/toolbar";
import Home from "./components/home";
import Gallery from "./components/gallery";
import ShoppingCart from "./components/shoppingCart";
import {useState} from "react";
import AddProduct from "./components/addProducts";

// create simple web shop page
// there should be three pages - home page, shop page and user cart
// in home page put dummy data, some text and maybe photo
// in shop page you will show all products, each product should have title, price, photo and button
// - when clicked button will add that product to shopping cart
// in shopping cart you show added products in table, each product should have title, price, photo, quantity
// - product quantity can be changed, depending on that total price changes also
// also make global toolbar where you can navigate through pages
// / in toolbar by shopping card link you will show number of products in shopping cart

function App() {

    const products = [
        {
            image: "https://cdn.shopify.com/s/files/1/0253/8255/1597/products/CHAIR-ARM01-GREEN-1_1024x1024@2x.png?v=1579480939",
            title: "green chair",
            price: 35.38,
            id: 0
        },
        {
            image: "https://img80003444.weyesimg.com/uploads/uqe8s08c.allweyes.com/images/15819959503769.png?imageView2/2/w/1081/q/95/format/webp",
            title: "simple chair",
            price: 19.99,
            id: 1
        },
        {
            image: "https://www.dubingiai.lt/10317/fotelis-goudafc-31.jpg",
            title: "fotelis chair",
            price: 55,
            id: 2
        },
        {
            image: "https://ae01.alicdn.com/kf/HTB1ucoRXAL0gK0jSZFAq6AA9pXaG/Office-Chair-Multifunction-Office-Computer-Cowhide-Chair-Swivel-Reclining-Boss-Chair-Household-Gaming-Chaise-Silla-Oficina.jpg_Q90.jpg_.webp",
            title: "Boss chair",
            price: 128,
            id: 3
        },
        {
            image: "https://demo.cosmoswp.com/demo-117/wp-content/uploads/sites/41/2020/09/product8.png",
            title: "king chair",
            price: 88.25,
            id: 4
        }
    ];

    const [getChangeBar, setChangeBar] = useState(0);
    const [getCartAmount, setCartAmount] = useState(0);
    const [getTotalPrice, setTotalPrice] = useState(0);
    const [getSelectedItems, setSelectedItems] = useState([]);
    const [getQuantities, setQuantities] = useState([0, 0, 0, 0, 0]);
    const [getAddProduct, setAddProduct] = useState(true);

    function changeBar(num) {
        setChangeBar(num);
    }


    function selectItem(num) {
        getQuantities[num] += 1;
        setQuantities(getQuantities);
        setSelectedItems([...getSelectedItems,
            {...products[num], amount: getQuantities[num]}]);
        setCartAmount(getCartAmount + 1);
        setTotalPrice(getTotalPrice + products[num].price);
        setAddProduct(true);
    }

    if (getSelectedItems.length > 1) {
        for (let i = 0; i < getSelectedItems.length; i++) {
            for (let j = i+1; j < getSelectedItems.length; j++) {
                if (getSelectedItems[i].image === getSelectedItems[j].image) {
                    if (getAddProduct) {
                        getSelectedItems[i].amount ++;
                    } else {
                        if (getSelectedItems[i].amount > 0) {
                            getSelectedItems[i].amount --;
                        }
                    }
                    setSelectedItems(getSelectedItems.splice(j, 1));
                }
            }
        }
    }

    function removeOne(num) {

        if (getQuantities[num] > 0) {
            setCartAmount(getCartAmount - 1);
            setTotalPrice(getTotalPrice - products[num].price);
        }

        setSelectedItems([...getSelectedItems,
            {...products[num], amount: getQuantities[num]}]);

        setAddProduct(false);

    }

    return (
        <div className="App">
            <div className="all">
                <Toolbar fnChange={changeBar} amount={getCartAmount}/>
                {getChangeBar === 0 && <Home/>}
                {getChangeBar === 1 && <Gallery products={products}
                                                fnSelect={selectItem}/>}
                {getChangeBar === 2 && <ShoppingCart totalPrice={getTotalPrice}
                                                     selectedItems={getSelectedItems}
                                                     fnAdd={selectItem}
                                                     fnRemove={removeOne}/>}
                {getChangeBar === 3 && <AddProduct/>}
            </div>
        </div>
    );
}

export default App;
