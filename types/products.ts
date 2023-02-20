export interface Product {
  cabins?: number | null;
  created_at?: string | null;
  image?: string | null;
  name?: string | null;
  price?: number | null;
  product_id?: number;
}

export interface ProductSpecifications {
  product_id?: number;
  range?: number | null;
}

export interface FullProduct extends Product, ProductSpecifications {}
