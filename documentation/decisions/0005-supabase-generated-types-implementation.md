# 5. Supabase-generated-types-implementation

Date: 2023-03-17

## Status

Accepted

## Context

Supebase allows for automatic types generation using:

```bash
npx supabase gen types typescript --project-id <project-id> --schema <schema-name> > ~/types/generated-types.ts
```

We can use them to determine types of data returned by `useSupabaseClient` like in example below:

```ts
import type { Database } from '~/types';

const client = useSupabaseClient<Database>();
```

On frontend application level we still need additional type / interface definitions to use in for example props. We can either define those from scratch or construct using already provided definitions from `Supabase` making it more dynamic and less error prone.

## Decision

We can implement type & interface definition in following manner:

```ts
import { Database } from '~/types/generated-types';

export type Product = Database['public']['Tables']['products']['Row'];
export type ProductSpecifications =
  Database['public']['Tables']['product_specifications']['Row'];

export interface FullProduct extends Product {
  product_specifications: ProductSpecifications;
}
```

## Consequences

Thanks to tying our definitions with ones generated from `Supabase` we have seamless integration between data models on BE and typing on FE.

Full implementation example using `vueQuery` and inferring return types to prevent TS issues:

```ts
import { useQuery } from 'vue-query';
import type { Database } from '~/types/generated-types';
import type { FullProduct } from '~/types/products';

export const useProductById = (id: string | string[]) => {
  const client = useSupabaseClient<Database>();

  const result = useQuery(
    ['productById', id],
    async (): Promise<FullProduct | null> => {
      const { data, error } = await client
        .from('products')
        .select('*, product_specifications (*)')
        .in('id', Array.isArray(id) ? id : [id]);

      if (error) {
        console.error(error);
        throw new Error(error.message);
      }
      return data[0] ? (data[0] as FullProduct) : null;
    },
  );

  return result;
};
```
