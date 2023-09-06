export type Folder = {
  id: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  products: Product[];
};

export type Product = {
  link: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
};
