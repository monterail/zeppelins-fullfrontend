import { useMutation } from 'vue-query';
import type { Database } from '~/types/generated-types';

export const useUserProfileUpdate = () => {
  const client = useSupabaseClient<Database>();
  const user = useSupabaseUser();

  const result = useMutation(async (profileData: { profile_name?: string }) => {
    if (!user.value?.id) {
      return null;
    }

    const { error: dbError } = await client
      .from('profiles')
      .update(profileData)
      .eq('id', user.value.id);

    if (dbError) {
      console.error(dbError);
      throw new Error(dbError.message);
    }
  });

  return result;
};
