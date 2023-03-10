import { useMutation } from 'vue-query';
import type { Database } from '~/types/generated-types';

export const useUserSignup = () => {
  const client = useSupabaseClient<Database>();

  const createUserProfile = async (id: string, username: string) => {
    const userProfileData = {
      id,
      profile_name: username,
    };

    const { error: dbError } = await client
      .from('profiles')
      .insert(userProfileData);

    if (dbError) {
      console.error(dbError);
      throw new Error(dbError.message);
    }
  };

  const result = useMutation(
    async (credentials: { email: string; password: string; name: string }) => {
      const { email, password, name } = credentials;

      const {
        data: { user },
        error,
      } = await client.auth.signUp({ email, password });

      if (error) {
        console.error(error);
        throw new Error(error.message);
      }

      if (user?.id) {
        createUserProfile(user.id, name);
      }

      return user?.id;
    },
  );
  return result;
};
