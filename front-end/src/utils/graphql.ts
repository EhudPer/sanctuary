// @ts-nocheck

import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { getProductionPortAndHost } from "@/helper-functions/server-help";

// export default new ApolloClient({
//   // Provide the URL to the API server.
//   link: new HttpLink({
//     uri: await getProductionPortAndHost(),
//     // uri: "http://localhost:8000/graphql",
//     // uri: "https://localhost:433/graphql",
//   }),
//   // Using a cache for blazingly
//   // fast subsequent queries.
//   cache: new InMemoryCache(),
// });

export default new ApolloClient({
  // Provide the URL to the API server.
  link: new HttpLink({
    uri: getProductionPortAndHost(),
    // uri: "http://localhost:8000/graphql",
    // uri: "https://localhost:433/graphql",
  }),
  // Using a cache for blazingly
  // fast subsequent queries.
  cache: new InMemoryCache(),
});
