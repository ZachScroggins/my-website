import { Documents } from 'lib/generated/schema'

/**
 * Helper function to return the correct version of the document
 * If we're in "preview mode" and have multiple documents, return the draft
 */
export const filterDataToSingleItem = <T extends Documents>(
  data: T | T[],
  preview: boolean
): T => {
  if (!Array.isArray(data)) {
    return data
  }

  if (data.length === 1) {
    return data[0]
  }

  if (preview) {
    return data.find(item => item._id.startsWith(`drafts.`)) || data[0]
  }

  return data[0]
}
