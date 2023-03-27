import { useMutation } from 'vue-query';
import type { Database } from '~/types/generated-types';

export const useUserUpdate = () => {
  const client = useSupabaseClient<Database>();

  const result = useMutation(
    async (updateData: { email?: string; password?: string }) => {
      console.warn('THE UPDATE DATA: ', updateData);

      const { data, error } = await client.auth.updateUser(updateData);

      if (error) {
        console.error(error);
        throw new Error(error.message);
      }

      console.log(data);
    },
  );

  return result;
};
