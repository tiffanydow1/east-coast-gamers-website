type CollectionType = {
  _id: string;
  createdAt: string;
  description: string;
  image: string;
  slug: string;
  title: string;
  updatedAt: string;
  products: Product[];
};

type ProductType = {
  id: string;
  title: string;
  description: string;
  updatedAt: string;
  tags: string[];
  sizes: [];
  price: number,
  media: string[];
  createdAt: string;
  colors: string[];
  collections: string[];
  category: string;
};
