# 4. API communication

Date: 2023-02-28

## Status

Accepted

## Context

We have SSR app which is connected directly with [Supabase](https://supabase.com/).
We have two sides of communication with API - public part of the app and for logged in user.
As we have SSR app we can communicate with API directly from the client side or through the API routes in Nuxt codebase. First approach seems to be faster to implement because there is less code to write. The second one seems to be easier to maintain and change in the future (for example in case we want to change DB from Supabase to custom one).

## Decision

We decided to test both approaches in the app.
For public API we will call Supabase directly from the client side. For logged in user data we will create API routes in our Nuxt app.
To communicate with Supabase we use [@nuxtjs/supabase](https://nuxt.com/modules/supabase) module. To handle API calls in the client app from both sides - server and client - we decide to use [vue-query](https://vue-query.vercel.app/).

## Consequences

Vue query provides some composables to handle async functions and provides many helpful states and methods. It also gives us cache mechanism for the data so we don't need to use other tools to store them (like `Pinia`).
Nuxt Supabase module provides us connection with our Supabase instance and generates types for data from DB.
Our composables with API calls should be placed in `@/composables/api/` catalog and they are imported automatically by Nuxt. Public api calls uses Supabase api inside vue-query. For logged in users Supabase api will be used inside API routes in Nuxt. Vue query will handle calls with Nuxt native `$fetch` function goes to API routes.

Our composable for public call would look like this:

```
import type { Database } from '~/types/generated-types';
import { useQuery } from 'vue-query';

export const useProductList = (count = Infinity) => {
  const client = useSupabaseClient<Database>();

  const getProductsList = async () => {
    const { data, error } = await client
      .from('products')
      .select('*, product_specifications (range)')
      .limit(count);

    if (error) {
      console.error(error);
      throw new Error(error.message);
    }

    return data;
  }

  const result = useQuery(['productsList', count], getProductsList);

  onServerPrefetch(async () => {
    await result.suspense();
  });

  return result;
};
```

Usage:

```
const { data: productsList, isLoading } = useProductList();
```

Remember to use unique key for the query and use dynamic parameters if needed. [more info about keys](https://vue-query.vercel.app/#/guides/query-keys)
