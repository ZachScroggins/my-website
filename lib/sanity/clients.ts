import { GraphQLClient } from 'graphql-request'
import { getSdk } from 'lib/generated/sanity'

import PicoSanity from 'picosanity'

import { config } from './config'

// use cdn if in production
const graphqlRequestClient =
  process.env.NODE_ENV === 'production'
    ? new GraphQLClient(
        'https://pg6c9qr0.apicdn.sanity.io/v1/graphql/production/default'
      )
    : new GraphQLClient(
        'https://pg6c9qr0.api.sanity.io/v1/graphql/production/default'
      )

// provide authorization for fetching drafts
const graphqlRequestPreviewClient = new GraphQLClient(
  'https://pg6c9qr0.api.sanity.io/v1/graphql/production/default',
  {
    headers: {
      authorization: `Bearer ${process.env.SANITY_API_TOKEN}`
    }
  }
)

const client = getSdk(graphqlRequestClient)
const previewClient = getSdk(graphqlRequestPreviewClient)

/**
 * returns appropriate version of sanity client
 */
export const sanityClient = (preview?: boolean) =>
  preview ? previewClient : client

/**
 * picosanity client for next-sanity-image in browser
 */
export const picoClient = new PicoSanity(config)
