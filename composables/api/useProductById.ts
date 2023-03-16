import { useQuery } from 'vue-query';
import type { Database } from '~/types/generated-types';
import { FullProduct } from '~~/types/products';

export const useProductById = (id: string | string[]) => {
  const client = useSupabaseClient<Database>();

  const result = useQuery(
    ['productById', id],
    async (): Promise<FullProduct | null> => {
      const { data, error } = await client
        .from('products')
        .select('*, product_specifications (*)')
        .in('id', Array.isArray(id) ? id : [id]);

      if (error) {
        console.error(error);
        throw new Error(error.message);
      }
      return data[0] ? (data[0] as FullProduct) : null;
    },
  );

  onServerPrefetch(async () => {
    await result.suspense();
  });
  return result;
};
