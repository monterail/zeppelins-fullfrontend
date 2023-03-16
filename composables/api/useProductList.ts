import { useQuery } from 'vue-query';
import type { Database } from '~/types/generated-types';
import { FullProduct } from '~~/types/products';

export const useProductList = (count = Infinity) => {
  const client = useSupabaseClient<Database>();

  const result = useQuery(
    ['productsList', count],
    async (): Promise<FullProduct[]> => {
      const { data, error } = await client
        .from('products')
        .select('*, product_specifications (*)')
        .limit(count);

      if (error) {
        console.error(error);
        throw new Error(error.message);
      }
      return data as FullProduct[];
    },
  );

  onServerPrefetch(async () => {
    await result.suspense();
  });

  return result;
};
