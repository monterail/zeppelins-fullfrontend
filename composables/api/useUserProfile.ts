import { useQuery } from 'vue-query';
import type { Database } from '~/types/generated-types';

export const useUserProfile = () => {
  const client = useSupabaseClient<Database>();
  const user = useSupabaseUser();

  const userSignoutOnMissingProfile = async () => {
    const { error } = await client.auth.signOut();

    console.error(
      'Zeppelins Error: No matching profile for logged user. Signing out.',
    );

    if (error) {
      console.error(error);
      throw new Error(error.message);
    }
  };

  const result = useQuery(['userProfile', user], async () => {
    if (!user.value?.id) {
      return null;
    }

    const { data: userProfile, error: dbError } = await client
      .from('profiles')
      .select()
      .eq('id', user.value.id);

    if (dbError) {
      console.error(dbError);
      throw new Error(dbError.message);
    }

    if (!userProfile || userProfile.length === 0) {
      userSignoutOnMissingProfile();
      return null;
    }

    return userProfile[0];
  });

  onServerPrefetch(async () => {
    await result.suspense();
  });

  return result;
};
