import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4sj6m62264d01z1aj055qoh/master',
    cache: new InMemoryCache()
})