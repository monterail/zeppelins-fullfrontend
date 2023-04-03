import type { RadioOption } from '~/types/radio-options';
import { Database } from '~/types/generated-types';

export interface Order {
  userId: string | null;
  date: string | null;
  days: number | null;
  insurance: RadioOption | null;
  license: File | null;
}

export type PostingOrder =
  Database['public']['Tables']['reservations']['Insert'];

export interface ProfileOrder {
  id: string;
  title: string;
  image?: string | null;
  price?: number | null;
  date?: string | null;
  status?: string;
  insurance?: string | null;
}
