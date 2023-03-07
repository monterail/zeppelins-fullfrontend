import { useMutation } from 'vue-query';
import type { Database } from '~/types/generated-types';

export const useLoginUser = () => {
  const client = useSupabaseClient<Database>();

  const result = useMutation(
    async (credentials: { email: string; password: string }) => {
      const { email, password } = credentials;
      const { data, error } = await client.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error(error);
        throw new Error(error.message);
      }

      return data;
    },
  );
  return result;
};
