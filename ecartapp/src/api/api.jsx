import React, { useState, useEffect } from 'react';
import data from './product.json';
import '../api/api.css';

const ApiData = () => {
  const [productData, setProductData] = useState([]);
  const [visibleCategory, setVisibleCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setProductData(data.productData);
  }, []);

  const toggleCategory = (catName) => {
    if (visibleCategory === catName) {
      setVisibleCategory(null);
    } else {
      setVisibleCategory(catName);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const ProductDetailsModal = ({ product, onClose }) => (
    <div className='model'>
    <div className="product-details-modal">
      <h2>{product.productName}</h2>
      <img src={product.catImg} alt={product.productName} />
      <p>Brand: {product.brand}</p>
      <button onClick={onClose}>Close
      </button>
    </div>
    </div>
  );

  const filteredProductData = productData.map((category) => ({
    ...category,
    items: category.items.filter((item) =>
      item.products.some((product) =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    ),
  })).filter((category) => category.items.length > 0);





// add to cart
const addToCart = (product) => {
    setCartItems([...cartItems, product]);    
    setSelectedProduct(product); 

  };


  
  return (
    <>
    <div className='herosection'>
      

      {filteredProductData.map((category) => (
        <div key={category.id} className='products'>
          <div onClick={() => toggleCategory(category.cat_name)} className='products-types'>
            <img src={category.image} alt={category.cat_name} style={{ width: '100px', height: '100px' }} />
            <h2>{category.cat_name}</h2>
          </div>
          
          {visibleCategory === category.cat_name && (
            <div className='product-categeries'>
                <div className='searchbox'>
              <input
        type='text'
        placeholder='Search products...'
        value={searchTerm}
        onChange={handleSearch}
        className='search-input'
      /><button>Search</button>
              </div>
                <div className='product-lists'>
              {category.items.map((item) => (
                <div key={item.id} className='product-box'>
                  <h3>{item.cat_name}</h3>
                  <div className='d-flex'>
                    
                    {item.products.map((product) => (
                      <div key={product.id} className='product-image-box'>
                          <h4>Brand: {product.brand}</h4>

                        <img src={product.catImg} width={100} alt={product.productName}  onClick={() => setSelectedProduct(product)}/>
                        <p>{product.productName}</p>
                        <button onClick={()=>addToCart(product)} >Add 
                        To Cart</button>

                      </div>
                    ))}
                    {item.products.length > 1 && (
                      <button onClick={() => loadMoreProducts(item.cat_name)}>More</button>
                    )}
                  </div>
                </div>
              ))}
              </div>
              
            </div>
          )}
        </div>
      ))}

      {selectedProduct && (
        <ProductDetailsModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
    <div>

    </div>
    </>
  );
};

export default ApiData;
