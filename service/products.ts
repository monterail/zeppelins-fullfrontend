import { zeppelinsDb } from '~/api/zeppelinsDb';
import { Product } from '~/types/products';

export const getProductList = async () => {
  try {
    const { data } = await zeppelinsDb
      .from('products')
      .select('*, product_specifications (range)');
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getProductById = async (id: number) => {
  try {
    const { data } = await zeppelinsDb
      .from('products')
      .select('*')
      .eq('product_id', id);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const postProduct = async (payload: Product | Product[]) => {
  let load = null;
  Array.isArray(payload) ? (load = payload) : (load = new Array(payload));
  try {
    const { data } = await zeppelinsDb.from('products').insert(load);
    return data;
  } catch (err) {
    console.error(err);
  }
};

// TODO: include nadling of product_scpeficiation in this step
export const updateProduct = async (id: number, paylaod: Product) => {
  try {
    const { data } = await zeppelinsDb
      .from('products')
      .update(paylaod)
      .eq('product_id', id);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const deleteProduct = async (id: number) => {
  try {
    const { data } = await zeppelinsDb
      .from('products')
      .delete()
      .eq('product_id', id);
    return data;
  } catch (err) {
    console.error(err);
  }
};
