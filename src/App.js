import './App.css';
import Toolbar from "./components/toolbar";
import Home from "./components/home";
import Gallery from "./components/gallery";
import ShoppingCart from "./components/shoppingCart";
import {useState} from "react";

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
            price: 35.38
        },
        {
            image: "https://img80003444.weyesimg.com/uploads/uqe8s08c.allweyes.com/images/15819959503769.png?imageView2/2/w/1081/q/95/format/webp",
            title: "simple chair",
            price: 19.99
        },
        {
            image: "https://www.dubingiai.lt/10317/fotelis-goudafc-31.jpg",
            title: "fotelis chair",
            price: 55
        },
        {
            image: "https://ae01.alicdn.com/kf/HTB1ucoRXAL0gK0jSZFAq6AA9pXaG/Office-Chair-Multifunction-Office-Computer-Cowhide-Chair-Swivel-Reclining-Boss-Chair-Household-Gaming-Chaise-Silla-Oficina.jpg_Q90.jpg_.webp",
            title: "Boss chair",
            price: 128
        },
        {
            image: "https://demo.cosmoswp.com/demo-117/wp-content/uploads/sites/41/2020/09/product8.png",
            title: "king chair",
            price: 88.25
        },
    ];

  const [getChangeBar, setChangeBar] = useState(0);
  const [getCartAmount, setCartAmount] = useState(0);

  const [getAmountFirst, setAmountFirst] = useState(0);
  const [getAmountSecond, setAmountSecond] = useState(0);
  const [getAmountThird, setAmountThird] = useState(0);
  const [getAmountFourth, setAmountFourth] = useState(0);
  const [getAmountFifth, setAmountFifth] = useState(0);

  const [getTotalPrice, setTotalPrice] = useState(0);


  function changeBar(num) {
      setChangeBar(num);
  }

  const firstChair = products[0];
  const secondChair = products[1];
  const thirdChair = products[2];
  const fourthChair = products[3];
  const fifthChair = products[4];

  function selectItem(num) {

      if (num === 0) {
          setAmountFirst(getAmountFirst + 1);
          setCartAmount(getCartAmount + 1);
          setTotalPrice(getTotalPrice + firstChair.price);
      }
      if (num === 1) {
          setAmountSecond(getAmountSecond + 1);
          setCartAmount(getCartAmount + 1);
          setTotalPrice(getTotalPrice + secondChair.price);
      }
      if (num === 2) {
          setAmountThird(getAmountThird + 1);
          setCartAmount(getCartAmount + 1);
          setTotalPrice(getTotalPrice + thirdChair.price);
      }
      if (num === 3) {
          setAmountFourth(getAmountFourth + 1);
          setCartAmount(getCartAmount + 1);
          setTotalPrice(getTotalPrice + fourthChair.price);
      }
      if (num === 4) {
          setAmountFifth(getAmountFifth + 1);
          setCartAmount(getCartAmount + 1);
          setTotalPrice(getTotalPrice + fifthChair.price);
      }
  }

  function addOne(num) {
      if (num === 0) {
          setAmountFirst(getAmountFirst + 1);
          setCartAmount(getCartAmount + 1);
          setTotalPrice(getTotalPrice + firstChair.price);
      }
      if (num === 1) {
          setAmountSecond(getAmountSecond + 1);
          setCartAmount(getCartAmount + 1);
          setTotalPrice(getTotalPrice + secondChair.price);
      }
      if (num === 2) {
          setAmountThird(getAmountThird + 1);
          setCartAmount(getCartAmount + 1);
          setTotalPrice(getTotalPrice + thirdChair.price);
      }
      if (num === 3) {
          setAmountFourth(getAmountFourth + 1);
          setCartAmount(getCartAmount + 1);
          setTotalPrice(getTotalPrice + fourthChair.price);
      }
      if (num === 4) {
          setAmountFifth(getAmountFifth + 1);
          setCartAmount(getCartAmount + 1);
          setTotalPrice(getTotalPrice + fifthChair.price);
      }
  }

  function removeOne(num) {
      if (num === 0) {
          setAmountFirst(getAmountFirst - 1);
          setCartAmount(getCartAmount - 1);
          setTotalPrice(getTotalPrice - firstChair.price);
      }
      if (num === 1) {
          setAmountSecond(getAmountSecond - 1);
          setCartAmount(getCartAmount - 1);
          setTotalPrice(getTotalPrice - secondChair.price);
      }
      if (num === 2) {
          setAmountThird(getAmountThird - 1);
          setCartAmount(getCartAmount - 1);
          setTotalPrice(getTotalPrice - thirdChair.price);
      }
      if (num === 3) {
          setAmountFourth(getAmountFourth - 1);
          setCartAmount(getCartAmount - 1);
          setTotalPrice(getTotalPrice - fourthChair.price);
      }
      if (num === 4) {
          setAmountFifth(getAmountFifth - 1);
          setCartAmount(getCartAmount - 1);
          setTotalPrice(getTotalPrice - fifthChair.price);
      }
  }


  return (
    <div className="App">
        <div className="all">
            <Toolbar fnChange={changeBar} amount={getCartAmount}/>
            {getChangeBar === 0 && <Home/>}
            {getChangeBar === 1 && <Gallery products={products}
                                            fnSelect={selectItem}/>}
            {getChangeBar === 2 && <ShoppingCart totalPrice={getTotalPrice}
                                                 fnAdd={addOne}
                                                 fnRemove={removeOne}
                                                 first={firstChair}
                                                 second={secondChair}
                                                 third={thirdChair}
                                                 fourth={fourthChair}
                                                 fifth={fifthChair}
                                                 firstAmount={getAmountFirst}
                                                 secondAmount={getAmountSecond}
                                                 thirdAmount={getAmountThird}
                                                 fourthAmount={getAmountFourth}
                                                 fifthAmount={getAmountFifth}/>}
        </div>
    </div>
  );
}

export default App;
