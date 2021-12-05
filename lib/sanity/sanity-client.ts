import { createClient } from 'next-sanity'
import { createClient as createTypedClient } from 'sanity-codegen'
import PicoSanity from 'picosanity'

import { config } from './config'

import { Documents } from 'lib/generated/schema'

// ------------------------------------------

import { GraphQLClient } from 'graphql-request'
import { getSdk } from 'lib/generated'

const graphqlRequestClient = new GraphQLClient(
  'https://pg6c9qr0.apicdn.sanity.io/v1/graphql/production/default'
)
const graphqlRequestPreviewClient = new GraphQLClient(
  'https://pg6c9qr0.api.sanity.io/v1/graphql/production/default',
  {
    headers: {
      authorization: `Bearer ${process.env.SANITY_API_TOKEN}`
    }
  }
)

export const sanityProductionClient = getSdk(graphqlRequestClient)
export const sanityPreviewClient = getSdk(graphqlRequestPreviewClient)

export const sanityClient = (preview?: boolean) =>
  preview ? sanityPreviewClient : sanityProductionClient

// ------------------------------------------

/**
 * picosanity client for browser use
 */
export const picoClient = new PicoSanity(config)

/**
 * Full Sanity client from next-sanity,
 * for fetching data in the getProps page functions
 */
// export const sanityClient = createClient(config)

/**
 * Full Sanity preview client from next-sanity,
 * with serverless authentication for drafts
 */
// export const previewClient = createClient({
//   ...config,
//   useCdn: false,
//   token: process.env.SANITY_API_TOKEN
// })

/**
 * Typed Sanity client from sanity-codegen,
 * for fetching data in the getProps page functions
 */
export const typedClient = createTypedClient<Documents>({
  ...config,
  fetch
})

/**
 * Typed Sanity preview client from sanity-codegen,
 * with serverless authentication for drafts
 */
export const previewTypedClient = createTypedClient<Documents>({
  ...config,
  fetch,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  previewMode: true
})

/**
 * Helper function for easily switching between normal client and preview client
 */
export const getClient = (usePreview?: boolean) =>
  usePreview ? previewTypedClient : typedClient
