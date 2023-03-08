import { useMutation } from 'vue-query';
import type { Database } from '~/types/generated-types';

export const useUserSignup = () => {
  const client = useSupabaseClient<Database>();

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

      const userProfileData = {
        id: user?.id,
        username: name,
      };

      const { error: dbError } = await client
        .from('test_profiles')
        .insert(userProfileData);

      if (dbError) {
        console.error(dbError);
        throw new Error(dbError.message);
      }

      return user?.id;
    },
  );
  return result;
};
