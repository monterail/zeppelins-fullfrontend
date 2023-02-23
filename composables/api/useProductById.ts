import type { Database } from '~/types/generated-types';
import { useQuery } from 'vue-query';

const route = useRoute();

export const useProductById = (id: string | string[]) => {
  const client = useSupabaseClient<Database>();

  const result = useQuery(['productById', id], async () => {
    const { data, error } = await client
      .from('products')
      .select('*, product_specifications (range)')
      .eq('product_id', id);

    if (error) {
      console.error(error);
      throw new Error(error.message);
    }
    if (data) return data[0];
  });

  return result;
};
