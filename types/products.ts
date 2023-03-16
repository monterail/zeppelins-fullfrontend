export interface Product {
  created_at?: string | null;
  description?: string | null;
  id?: string;
  image?: string | null;
  name?: string | null;
  price?: number | null;
}

export interface ProductSpecifications {
  cabins?: number | null;
  product_id?: string | null;
  range?: number | null;
}

export interface FullProduct extends Product {
  product_specifications: ProductSpecifications;
}
