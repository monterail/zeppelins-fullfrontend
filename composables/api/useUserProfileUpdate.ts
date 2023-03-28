import { useMutation } from 'vue-query';
import type { Database } from '~/types/generated-types';

export const useUserProfileUpdate = () => {
  const client = useSupabaseClient<Database>();
  const user = useSupabaseUser();

  const result = useMutation(
    async (profileData: { profileName?: string; file?: File | null }) => {
      if (!user.value?.id) {
        console.warn('You are not allowed to perform this action.');
        return;
      }

      const { profileName, file } = profileData;
      let licensePath;

      if (file) {
        const filePath = `${user.value.id}/${file.name}`;
        const { data: uploadData, error: uploadError } = await client.storage
          .from('license-files')
          .upload(filePath, file, { upsert: true });

        if (uploadError) {
          console.error(uploadError);
          throw new Error(uploadError.message);
        }

        licensePath = uploadData.path;
      }

      const { error: dbError } = await client
        .from('profiles')
        .update({ profile_name: profileName, current_license: licensePath })
        .eq('id', user.value.id);

      if (dbError) {
        console.error(dbError);
        throw new Error(dbError.message);
      }
    },
  );

  return result;
};
