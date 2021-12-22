const Toolbar = () => {
    return (
        <div className="toolbar">
            <div className="homeToolbar grow1">
                Home
            </div>
            <div className="shopToolbar grow1">
                Shop
            </div>
            <div className="cartToolbar grow1 d-flex">
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