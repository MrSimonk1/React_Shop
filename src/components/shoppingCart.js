const ShoppingCart = ({totalPrice, fnAdd, fnRemove,
                          first, second, third, fourth, fifth,
                          firstAmount, secondAmount, thirdAmount,
                          fourthAmount, fifthAmount}) => {
    return (
        <div>
            {firstAmount > 0 && <div className="itemInCart">
                <img className="grow2" src={first.image} alt=""/>
                <h2 className="grow1">{first.title}</h2>
                <h2 className="grow1">{first.price}</h2>
                <h2 className="grow1">Amount: {firstAmount}</h2>
                <div className="grow1">
                    <button onClick={() => fnAdd(0)}>+</button>
                    <button onClick={() => fnRemove(0)}>-</button>
                </div>
            </div>}

            {secondAmount > 0 && <div className="itemInCart">
                <img className="grow2" src={second.image} alt=""/>
                <h2 className="grow1">{second.title}</h2>
                <h2 className="grow1">{second.price}</h2>
                <h2 className="grow1">Amount: {secondAmount}</h2>
                <div className="grow1">
                    <button onClick={() => fnAdd(1)}>+</button>
                    <button onClick={() => fnRemove(1)}>-</button>
                </div>
            </div>}


            {thirdAmount > 0 && <div className="itemInCart">
                <img className="grow2" src={third.image} alt=""/>
                <h2 className="grow1">{third.title}</h2>
                <h2 className="grow1">{third.price}</h2>
                <h2 className="grow1">Amount: {thirdAmount}</h2>
                <div className="grow1">
                    <button onClick={() => fnAdd(2)}>+</button>
                    <button onClick={() => fnRemove(2)}>-</button>
                </div>
            </div>}


            {fourthAmount > 0 && <div className="itemInCart">
                <img className="grow2" src={fourth.image} alt=""/>
                <h2 className="grow1">{fourth.title}</h2>
                <h2 className="grow1">{fourth.price}</h2>
                <h2 className="grow1">Amount: {fourthAmount}</h2>
                <div className="grow1">
                    <button onClick={() => fnAdd(3)}>+</button>
                    <button onClick={() => fnRemove(3)}>-</button>
                </div>
            </div>}


            {fifthAmount > 0 && <div className="itemInCart">
                <img className="grow2" src={fifth.image} alt=""/>
                <h2 className="grow1">{fifth.title}</h2>
                <h2 className="grow1">{fifth.price}</h2>
                <h2 className="grow1">Amount: {fifthAmount}</h2>
                <div className="grow1">
                    <button onClick={() => fnAdd(4)}>+</button>
                    <button onClick={() => fnRemove(4)}>-</button>
                </div>
            </div>}

            <h1>Total price: {totalPrice}$</h1>

        </div>
    );
};

export default ShoppingCart;