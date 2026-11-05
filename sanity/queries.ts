import { defineQuery } from 'next-sanity';

const tagFields = /* groq */ `_id, name, "slug": slug.current`;

const postListFields = /* groq */ `
  _id,
  kind,
  title,
  "slug": slug.current,
  publishedAt,
  description,
  tags[]->{${tagFields}}
`;

/** The home page Portfolio jobs: company -> ordered roles -> ordered accomplishments. */
export const COMPANY_JOBS_QUERY = defineQuery(`
  *[_type == "company" && slug.current == $company][0]{
    _id,
    name,
    roles[]->{
      _id,
      title,
      accomplishments[]->{
        _id,
        accomplishment,
        "slug": slug.current,
        tags[]->{${tagFields}}
      }
    }
  }
`);

export const POSTS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc, _createdAt asc){${postListFields}}
`);

export const POST_SLUGS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)]{"slug": slug.current}
`);

export const POST_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0]{
    ${postListFields},
    accomplishment,
    image,
    body,
    "role": *[_type == "role" && references(^._id)][0]{
      _id,
      title,
      "company": *[_type == "company" && references(^._id)][0]{
        _id,
        name,
        url,
        logo
      }
    }
  }
`);

export const TAGS_QUERY = defineQuery(`
  *[_type == "tag" && defined(slug.current)] | order(lower(name) asc){${tagFields}}
`);

export const TAG_SLUGS_QUERY = defineQuery(`
  *[_type == "tag" && defined(slug.current)]{"slug": slug.current}
`);

export const TAG_QUERY = defineQuery(`
  *[_type == "tag" && slug.current == $slug][0]{
    ${tagFields},
    description,
    homepageUrl,
    repoUrl,
    docsUrl,
    icon,
    logo,
    "posts": *[_type == "post" && references(^._id) && defined(slug.current)]
      | order(publishedAt desc, _createdAt asc){${postListFields}}
  }
`);

export const SITEMAP_QUERY = defineQuery(`{
  "posts": *[_type == "post" && defined(slug.current)]{"slug": slug.current, _updatedAt},
  "tags": *[_type == "tag" && defined(slug.current)]{"slug": slug.current, _updatedAt}
}`);

export const RSS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc, _createdAt asc)[0...50]{
    title,
    "slug": slug.current,
    publishedAt,
    description
  }
`);
