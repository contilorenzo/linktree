import "./Products.scss";
import { MOCK_FOLDERS } from "../../__fixtures/mocks";
import { Link, useParams } from "react-router-dom";

const Products = (): React.ReactElement => {
  const { folderId } = useParams();
  console.log(folderId);

  if (!folderId) return <div>Folder not found</div>;

  const products = MOCK_FOLDERS[+folderId - 1].products;

  return (
    <>
      <div className="back">
        <Link to="/">
          <img src={"/chevron-left.svg"} alt="arrow" />
          Torna alla home
        </Link>
      </div>
      <div className="products-wrapper">
        {products.map((product, i) => (
          <a className="product" key={product.title + i} href={product.link}>
            <span className="image">
              <img src={product.image.src} alt={product.image.alt} />
            </span>
            <span className="title">{product.title}</span>
          </a>
        ))}
      </div>
    </>
  );
};

export default Products;
