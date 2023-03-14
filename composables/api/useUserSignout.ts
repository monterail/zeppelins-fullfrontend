import { useMutation } from 'vue-query';

export const useUserSignout = () => {
  const authClient = useSupabaseAuthClient();

  const result = useMutation(async () => {
    const { error } = await authClient.auth.signOut();

    if (error) {
      console.error(error);
      throw new Error(error.message);
    }
  });

  return result;
};
