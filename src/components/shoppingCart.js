const ShoppingCart = ({cartItems, totalPrice, fnAdd, fnRemove}) => {
    return (
        <div>
            {cartItems.map((x, index) => <div className="itemInCart" key={index}>
                <img className="grow2" src={x.image} alt=""/>
                <h2 className="grow1">{x.title}</h2>
                <h2 className="grow1">{x.price}</h2>
                <h2 className="grow1">Amount: {x.amount}</h2>
                <div className="grow1">
                    <button onClick={() => fnAdd(index)}>+</button>
                    <button onClick={() => fnRemove(index)}>-</button>
                </div>
            </div>)}
            <h1>Total price: {totalPrice}</h1>

        </div>
    );
};

export default ShoppingCart;