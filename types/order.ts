import type { RadioOption } from '~/types/radio-options';

export interface Order {
  date: string | null;
  days: number | null;
  insurance: RadioOption | null;
  license: File | null;
}

export interface ProfileOrder {
  id: string;
  title?: string | null;
  image?: string | null;
  price?: number | null;
  date?: string | null;
  status?: string;
  insurance?: string | null;
}
