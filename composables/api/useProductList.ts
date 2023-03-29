import { useQuery } from 'vue-query';
import type { Database } from '~/types/generated-types';
import type { FullProduct } from '~/types/products';

export const useProductList = (amount = ref(Infinity)) => {
  const client = useSupabaseClient<Database>();
  const maxAmount = ref<number | null>(0);

  const result = useQuery(
    ['productsList', amount],
    async (): Promise<FullProduct[]> => {
      const { data, error, count } = await client
        .from('products')
        .select('*, product_specifications (*)', { count: 'exact' })
        .limit(amount.value);

      if (error) {
        console.error(error);
        throw new Error(error.message);
      }

      maxAmount.value = count;

      return data as FullProduct[];
    },
    { keepPreviousData: true },
  );

  onServerPrefetch(async () => {
    await result.suspense();
  });

  return { ...result, maxAmount };
};
