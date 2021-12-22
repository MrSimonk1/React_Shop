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

  const [getChangeBar, setChangeBar] = useState(0);

  function changeBar(num) {
      setChangeBar(num);
  }

  const products = [
        {
            image: "https://www.smow.com/pics/vt-078-000/a/vitra-panton-chair-dark-lime_zoom.jpg",
            title: "green chair",
            price: 35.38
        },
        {
            image: "https://img80003444.weyesimg.com/uploads/uqe8s08c.allweyes.com/images/15819959503769.png?imageView2/2/w/1081/q/95/format/webp",
            title: "simple chair",
            price: 19.99
        },
        {
            image: "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/87344_XXX_v1.tif&qlt=50&wid=650&cvt=jpeg",
            title: "fotelis chair",
            price: 55
        },
        {
            image: "https://5.imimg.com/data5/YF/OU/MY-18325580/revolving-office-chair-500x500.jpg",
            title: "Boss chair",
            price: 128
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Set_of_fourteen_side_chairs_MET_DP110780.jpg/220px-Set_of_fourteen_side_chairs_MET_DP110780.jpg",
            title: "king chair",
            price: 88.25
        },
    ]

  return (
    <div className="App">
        <div className="all">
            <Toolbar fnChange={changeBar}/>
            {getChangeBar === 0 && <Home/>}
            {getChangeBar === 1 && <Gallery products={products}/>}
            {getChangeBar === 2 && <ShoppingCart/>}
        </div>


    </div>
  );
}

export default App;
