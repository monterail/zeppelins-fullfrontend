import { useMutation } from 'vue-query';

export const useUserUpdate = () => {
  const authClient = useSupabaseAuthClient();

  const result = useMutation(
    async (updateData: { email?: string; password?: string }) => {
      const { error } = await authClient.auth.updateUser(updateData);

      if (error) {
        console.error(error);
        throw new Error(error.message);
      }
    },
  );

  return result;
};
