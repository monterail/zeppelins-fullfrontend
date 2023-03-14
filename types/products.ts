export interface Product {
  cabins?: number | null;
  created_at?: string | null;
  image?: string | null;
  name?: string | null;
  price?: number | null;
  id?: string;
}

export interface ProductSpecifications {
  product_id?: number;
  range?: number | null;
  description?: string;
}

export interface FullProduct extends Product, ProductSpecifications {}
