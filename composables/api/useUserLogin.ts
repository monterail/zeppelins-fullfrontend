import { useMutation } from 'vue-query';

export const useUserLogin = () => {
  const authClient = useSupabaseAuthClient();

  const result = useMutation(
    async (credentials: { email: string; password: string }) => {
      const {
        data: { user },
        error,
      } = await authClient.auth.signInWithPassword(credentials);

      if (error) {
        console.error(error);
        throw new Error(error.message);
      }

      return user?.id;
    },
  );
  return result;
};
