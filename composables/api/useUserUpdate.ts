import { useMutation } from 'vue-query';
import type { Database } from '~/types/generated-types';

export const useUserUpdate = () => {
  const client = useSupabaseClient<Database>();

  const result = useMutation(
    async (updateData: { email?: string; password?: string }) => {
      const { error } = await client.auth.updateUser(updateData);

      if (error) {
        console.error(error);
        throw new Error(error.message);
      }
    },
  );

  return result;
};
