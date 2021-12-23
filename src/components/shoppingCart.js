const ShoppingCart = ({totalPrice, selectedItems, fnAdd, fnRemove}) => {
    return (
        <div className="cartDiv">
            {selectedItems.map((x, index) =>
                x.amount > 0 &&
                <div key={index} className="itemInCart">
                    <img className="grow2" src={x.image} alt=""/>
                    <h2 className="grow1">{x.title}</h2>
                    <h2 className="grow1">{x.price}</h2>
                    <h2 className="grow1">Amount: {x.amount}</h2>
                    <div className="grow1">
                        <button onClick={() => fnAdd(x.id)}>+</button>
                        <button onClick={() => fnRemove(x.id)}>-</button>
                    </div>
                </div>)}

            <h1>Total price: {totalPrice}$</h1>
        </div>
    );
};

export default ShoppingCart;