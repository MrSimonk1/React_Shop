const Gallery = ({products, fnSelect}) => {
    return (
        <div className="galleryDiv">
            {products.map((x, index) => <div key={index}>
                <img src={x.image} alt=""/>
                <h2>{x.title}</h2>
                <h2>{x.price}</h2>
                <button onClick={() => fnSelect(index)} className="addBtn">Add to cart</button>
            </div>)}

        </div>
    );
};

export default Gallery;