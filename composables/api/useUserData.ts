import { useQuery } from 'vue-query';
import type { Database } from '~/types/generated-types';

export const useUserData = () => {
  const client = useSupabaseClient<Database>();
  const user = useSupabaseUser();

  const result = useQuery(['userData', user], async () => {
    if (!user.value?.id) {
      return null;
    }

    const { data: userData, error: dbError } = await client
      .from('test_profiles')
      .select()
      .eq('id', user.value.id);

    if (dbError) {
      console.error(dbError);
      throw new Error(dbError.message);
    }

    return userData[0];
  });

  onServerPrefetch(async () => {
    await result.suspense();
  });

  return result;
};
