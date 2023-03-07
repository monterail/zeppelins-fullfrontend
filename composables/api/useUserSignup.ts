import { useMutation } from 'vue-query';

export const useUserSignup = () => {
  const authClient = useSupabaseAuthClient();

  const result = useMutation(
    async (credentials: { email: string; password: string }) => {
      const { data, error } = await authClient.auth.signUp(credentials);

      if (error) {
        console.error(error);
        throw new Error(error.message);
      }

      return data;
    },
  );
  return result;
};
