"use client";
import { useEffect, useState } from "react";
import Footer from "../../../components/footer";
import Breadcrumb from "../../../components/breadcrumb";
import ProductsFeatured from "../../../components/products-featured";
import Gallery from "../../../components/product-single/gallery";
import Content from "../../../components/product-single/content";
import Description from "../../../components/product-single/description";
import Reviews from "../../../components/product-single/reviews";
import { server } from "../../../utils/server";
import { ProductType } from "types";
import { useParams } from "next/navigation";
import ProductsLoading from "components/products-content/list/loading";


const Product = () => {
  const { pid } = useParams();
  const [showBlock, setShowBlock] = useState("description");
  const [product, setProduct] = useState<ProductType | null>(null)

   const getProduct = async (pid: string) => {
    const res = await fetch(`${server}/api/product/${pid}`);
    const product = await res.json();
    setProduct(product)
  };

  useEffect(()=> {
    if(!pid) return;
    getProduct(pid as string);
  },[pid])
  
  if(!product) return <ProductsLoading />

  return (
    <>
      <Breadcrumb />

      <section className="product-single">
        <div className="container">
          <div className="product-single__content">
            <Gallery images={product?.images??[]} />
            {product && <Content product={product} />}
          </div>

          <div className="product-single__info">
            <div className="product-single__info-btns">
              <button
                type="button"
                onClick={() => setShowBlock("description")}
                className={`btn btn--rounded ${
                  showBlock === "description" ? "btn--active" : ""
                }`}
              >
                Description
              </button>
              <button
                type="button"
                onClick={() => setShowBlock("reviews")}
                className={`btn btn--rounded ${
                  showBlock === "reviews" ? "btn--active" : ""
                }`}
              >
                Reviews (2)
              </button>
            </div>

            <Description show={showBlock === "description"} />
            {product && <Reviews product={product} show={showBlock === "reviews"} />}
          </div>
        </div>
      </section>

      <div className="product-single-page">
        <ProductsFeatured />
      </div>
      <Footer />
    </>
  );
};

export default Product;
