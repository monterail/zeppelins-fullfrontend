import { useQuery } from 'vue-query';
import type { Database } from '~/types/generated-types';

export const useInsuranceOptions = () => {
  const client = useSupabaseClient<Database>();

  const result = useQuery(['insuranceOptions'], async () => {
    const { data, error } = await client
      .from('insurance')
      .select('id, title, description, detail');

    if (error) {
      console.error(error);
      throw new Error(error.message);
    }
    return data;
  });

  onServerPrefetch(async () => {
    await result.suspense();
  });

  return result;
};
