import "./Products.scss";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { parse } from "papaparse";
import Loader from "../Loader/Loader";

const validateProduct = (
  product: Record<string, string>,
  folderId: string,
  uppercaseLocale: string,
): boolean => {
  if (product["Nicchia" + uppercaseLocale] !== folderId) return false;
  if (!product["Prodotto" + uppercaseLocale]) return false;
  if (!product["Link" + uppercaseLocale]) return false;
  if (product["Linktree" + uppercaseLocale] !== "TRUE") return false;
  return true;
};

const getBackText = (locale: string | undefined): string => {
  if (locale === "it") return "Torna alla home";
  return "Back to homepage";
};

const Products = (): React.ReactElement => {
  const { folderId, locale } = useParams();
  const [products, setProducts] = useState<Record<string, string>[]>([]);

  const uppercaseLocale = locale?.toUpperCase();

  useEffect(() => {
    parse(
      "https://docs.google.com/spreadsheets/d/1uX6gZs-NDcID7uFzn7dbConMp_oy-YxSn4sRa5vPcns/pub?output=csv",
      {
        download: true,
        header: true,
        complete: (results) => {
          const productsList = results.data.filter((item) =>
            validateProduct(
              item as Record<string, string>,
              folderId ?? "",
              uppercaseLocale ?? "US",
            ),
          );

          setProducts(productsList as Record<string, string>[]);
        },
      },
    );
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  if (!folderId) return <div>Folder not found</div>;

  return (
    <>
      <div className="back">
        <Link to={"/" + locale}>
          <img src={"/chevron-left.svg"} alt="arrow" />
          {getBackText(locale)}
        </Link>
      </div>
      {!products.length && <Loader />}
      <div className="products-wrapper">
        {products.map((product, i) => (
          <a
            className="product"
            key={product["Prodotto" + uppercaseLocale] + i}
            href={product["Link" + uppercaseLocale]}
          >
            <span className="image">
              {product["Immagine" + uppercaseLocale] && (
                <img
                  src={product["Immagine" + uppercaseLocale]}
                  alt={product["Prodotto" + uppercaseLocale]}
                />
              )}
            </span>
            <span className="title">
              {product["Prodotto" + uppercaseLocale]}
            </span>
          </a>
        ))}
      </div>
    </>
  );
};

export default Products;
