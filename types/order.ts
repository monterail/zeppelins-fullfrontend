import type { RadioOption } from '~/types/radio-options';

export interface Order {
  date: string | null;
  days: number | null;
  insurance: RadioOption | null;
  license: File | null;
}
