const Toolbar = ({fnChange}) => {
    return (
        <div className="toolbar">
            <div onClick={() => fnChange(0)} className="homeToolbar grow1">
                Home
            </div>
            <div onClick={() => fnChange(1)} className="shopToolbar grow1">
                Shop
            </div>
            <div onClick={() => fnChange(2)} className="cartToolbar grow1 d-flex">
                <div>
                    Cart
                </div>
                <div className="productCountDiv">
                    0
                </div>

            </div>
        </div>
    );
};

export default Toolbar;