import "./Products.scss";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { parse } from "papaparse";
import Loader from "../Loader/Loader";

const Products = (): React.ReactElement => {
  const { folderId } = useParams();
  const [products, setProducts] = useState<Record<string, string>[]>([]);

  const validateProduct = (product: Record<string, string>): boolean => {
    if (product.Nicchia !== folderId) return false;
    if (!product.Prodotto) return false;
    if (!product.LinkIT) return false;
    if (product.LinktreeIT !== "TRUE") return false;
    return true;
  };

  useEffect(() => {
    parse(
      "https://docs.google.com/spreadsheets/d/1uX6gZs-NDcID7uFzn7dbConMp_oy-YxSn4sRa5vPcns/pub?output=csv",
      {
        download: true,
        header: true,
        complete: (results) => {
          const productsList = results.data.filter((item) =>
            validateProduct(item as Record<string, string>),
          );

          setProducts(productsList as Record<string, string>[]);
        },
      },
    );
  }, []);

  if (!folderId) return <div>Folder not found</div>;

  return (
    <>
      <div className="back">
        <Link to="/">
          <img src={"/chevron-left.svg"} alt="arrow" />
          Torna alla home
        </Link>
      </div>
      {!products.length && <Loader />}
      <div className="products-wrapper">
        {products.map((product, i) => (
          <a
            className="product"
            key={product.Prodotto + i}
            href={product.LinkIT}
          >
            <span className="image">
              <img
                src="https://via.placeholder.com/150"
                alt="https://via.placeholder.com/150"
              />
            </span>
            <span className="title">{product.Prodotto}</span>
          </a>
        ))}
      </div>
    </>
  );
};

export default Products;
