const AddProduct = () => {
    return (
        <div className="addDiv">

            <div className="inputsDiv">
                <input type="text" placeholder="Image"/>
                <input type="text" placeholder="Title"/>
                <input type="number" placeholder="Price"/>
            </div>

            <button className="addProductBtn">Add</button>



        </div>
    );
};

export default AddProduct;