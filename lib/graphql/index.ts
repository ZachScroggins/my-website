import { GraphQLClient } from 'graphql-request'
import { getSdk } from 'lib/generated'

const graphqlRequestClient = new GraphQLClient(
  'https://pg6c9qr0.api.sanity.io/v1/graphql/production/default',
  {
    headers: {
      authorization: `Bearer ${process.env.SANITY_API_TOKEN}`
    }
  }
)

const client = getSdk(graphqlRequestClient)

export default client
