import { useQuery } from 'vue-query';
import type { Database } from '~/types/generated-types';
import type { FullProduct } from '~/types/products';

export const useProductList = (count = ref(Infinity)) => {
  const client = useSupabaseClient<Database>();

  const result = useQuery(
    ['productsList', count],
    async (): Promise<FullProduct[]> => {
      const { data, error } = await client
        .from('products')
        .select('*, product_specifications (*)')
        .limit(count.value);

      if (error) {
        console.error(error);
        throw new Error(error.message);
      }
      return data as FullProduct[];
    },
    { keepPreviousData: true },
  );

  onServerPrefetch(async () => {
    await result.suspense();
  });

  return result;
};
