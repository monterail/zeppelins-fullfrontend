import { Database } from '~/types/generated-types';

export type Product = Database['public']['Tables']['products']['Row'];
export type ProductSpecifications =
  Database['public']['Tables']['product_specifications']['Row'];

export interface FullProduct extends Product {
  product_specifications: ProductSpecifications;
}
