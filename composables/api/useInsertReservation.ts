import { useMutation } from 'vue-query';
import type { Database } from '~/types/generated-types';
import { PostingOrder } from '~~/types/order';

export const useInsertReservation = () => {
  const client = useSupabaseClient<Database>();

  const result = useMutation(async (payload: PostingOrder) => {
    const { error, status } = await client.from('reservations').insert([
      {
        user_id: payload.user_id,
        date: payload.date,
        duration: payload.duration,
        insurance: payload.insurance,
        status: payload.status,
        title: payload.title,
        prod_id: payload.prod_id,
      },
    ]);

    if (error) {
      console.error(error);
      throw new Error(error.message);
    }

    return status;
  });

  return result;
};
