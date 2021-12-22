const Gallery = ({products}) => {
    return (
        <div className="galleryDiv">
            {products.map(x => <div>
                <img src={x.image} alt=""/>
                <h2>{x.title}</h2>
                <h2>{x.price}</h2>
                <button className="addBtn">Add to cart</button>
            </div>)}

        </div>
    );
};

export default Gallery;