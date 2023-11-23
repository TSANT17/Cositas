import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

import { Container, Row, Col } from "reactstrap";

import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";


import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";



import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";
import Category from "../components/UI/category/Category.jsx";

import "../styles/all-foods.css";
import "../styles/pagination.css";
import RestaurantCard from "../components/UI/product-card/RestaurantCard";

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [pageNumber, setPageNumber] = useState(0);

  
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "15 años");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "BODAS") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bodas"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "15 AÑOS") {
      const filteredProducts = products.filter(
        (item) => item.category === "15 años"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "CUMPLEAÑOS") {
      const filteredProducts = products.filter(
        (item) => item.category === "Cumpleaños"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  const searchedProduct = products.filter((item) => {
    if (searchTerm.value === "") {
      return item;
    }
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    } else {
      return console.log("not found");
    }
  });

  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Helmet title="Restaurante">
      <CommonSection title="Salones" />

      <section>
      <Container>
          <Row>
           

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  Todos
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BODAS" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BODAS")}
                >
                 
                  Bodas
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "15 AÑOS" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("15 AÑOS")}
                >
                 
                  15 años
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "CUMPLEAÑOS" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("CUMPLEAÑOS")}
                >
                 
                  Cumpleaños
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <RestaurantCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>

        <Container>
          <Row>
            
           

            {displayPage.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                <RestaurantCard item={item} />
              </Col>
            ))}

            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName=" paginationBttns "
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
