import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

export default new ApolloClient({
  // Provide the URL to the API server.
  // link: new HttpLink({
  //   // uri: "http://localhost:8000/graphql",
  //   // uri: "https://localhost:8000/graphql",
  //   uri: "/graphql",
  link: new HttpLink({
    uri: process.env.VUE_APP_SERVER_URI,
    // uri: "http://localhost:8000/graphql",
    // uri: "https://localhost:8000/graphql",
    // uri: "https://sanctuary-app.herokuapp.com/graphql",
  }),
  // Using a cache for blazingly
  // fast subsequent queries.
  cache: new InMemoryCache(),
});
