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
  _id: string;
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

type CustomerType = {
  id: string;
  name: string;
  email: string;
}

type OrderColumnType = {
  _id: string;
  customer: string;
  products: number;
  totalAmount: number;
  createdAt: string;
}

type OrderItemType = {
  product: ProductType
  color: string;
  size: string;
  quantity: number;
}
