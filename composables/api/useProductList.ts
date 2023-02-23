import type { Database } from '~/types/generated-types';
import { useQuery } from 'vue-query';


export const useProductList = (count = Infinity) => {
  const client = useSupabaseClient<Database>();

  const result = useQuery(["productsList", count], async () => {
      const { data, error } = await client
        .from('products')
        .select('*, product_specifications (range)')
        .limit(count);
      if (error) throw new Error
      return data
  })
  
  return result
};