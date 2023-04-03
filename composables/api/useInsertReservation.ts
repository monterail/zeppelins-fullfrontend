import { useMutation } from 'vue-query';
import type { Database } from '~/types/generated-types';
import { PostingOrder } from '~~/types/order';

export const useInsertReservation = () => {
  const client = useSupabaseClient<Database>();

  const result = useMutation(async (payload: PostingOrder) => {
    const { error, status } = await client.from('reservations').insert([
      {
        user_id: payload.userId,
        date: payload.date,
        duration: payload.days,
        insurance: payload.insurance,
        status: payload.status,
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
