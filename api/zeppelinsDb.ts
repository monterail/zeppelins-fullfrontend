import { createClient } from '@supabase/supabase-js';
import type { Database } from '~/types/generated-types';

const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;

export const zeppelinsDb = createClient<Database>(supabaseUrl, supabaseAnonKey);

/* EXAMPLE USAGE

import { zeppelinsDb } from '~/api/zeppelinsDb';

try {
  const { data: products, error } = await supabase.from('products').select('*');

  error
    ? console.log(error)
    : console.log(products.sort((a, b) => a.product_id - b.product_id));
} catch (err) {
  console.log(err);
}

*/
