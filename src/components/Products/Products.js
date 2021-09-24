import React, { useEffect, useState } from "react";
import "./Products.css";
import ReactPaginate from "react-paginate";

const Products = ({ productItems, handleAddToCart }) => {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(3);
  const [pageCount, setPageCount] = useState(0);

  const getData = () => {
    const data = productItems;
    const slice = data.slice(offset, offset + perPage);

    const postData = slice.map((pd) => (
      <div className="card">
        <div className="img-box">
          <img className="product-img" src={pd.image} alt="No preview" />
        </div>
        <div className="product-name">
          <h3>{pd.name}</h3>
        </div>
        <div className="product-price">
          <p>Rs. {pd.price}</p>
        </div>
        <div className="btn-div">
          <button className="add-btn" onClick={() => handleAddToCart(pd)}>
            Add to cart
          </button>
        </div>
      </div>
    ));
    setData(postData);
    setPageCount(Math.ceil(data.length / perPage));
  };

  useEffect(() => {
    getData();
  }, [offset]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  return (
    <div className="products">
      {data}
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Products;
