# 5. SUPABSE GENERATED TYPES USAGE

Date: 15-03-2023

## Status

Accepted

## Context

Superbase allows for automatic types generation using:

```
npx supabase gen types typescript --project-id <project-id> --schema <schema-name> > types.ts
```

We can use them to determine types of data returned by `useSupabaseClient` like in example below:

```
import type { Database } from '~/types';

const client = useSupabaseClient<Database>();
```

The issue arises when we have to have to provide typings to props sent to the components or define data structures created on frontend. We can construct our own interface definitions from scratch or use provided definitions to define those.

## Decision

Since this project is using composables utilizing `vueQuery` we decided to implement strong typing using created types on `vueQuery` level to support TypeScript implementaion in the project. Example below:

> type definition

```
export interface FullProduct {
  created_at?: string | null;
  description?: string | null;
  id?: string;
  image?: string | null;
  name?: string | null;
  price?: number | null;
}
```

> useProduct.ts

```
import { useQuery } from 'vue-query';
import type { Database } from '~/types/generated-types';
import { FullProduct } from '~/types/products';

export const useProductList = (count = Infinity) => {
  const client = useSupabaseClient<Database>();

  const result = useQuery(
    ['productsList', count],
    // define vueQuery async function return type
    async (): Promise<FullProduct[]> => {
      const { data, error } = await client
        .from('products')
        .select('*, product_specifications (*)')
        .limit(count);

      // infer composable return type
      return data as FullProduct[];
    },
  );

  return result;
};

```

## Consequences

We need additional interfaces / types declared to make sure data coming from `Supabase` and consumed on frontend is matching and now throwing TS errors.
