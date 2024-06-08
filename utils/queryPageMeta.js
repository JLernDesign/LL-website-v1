export default async function (title, slug) {
  const QUERY = /* GraphQL */ `
    query {
      page(filter: { slug: { eq: ${slug} } }) {
        seoMeta {
          description
          title
        }
      }
    }
  `;
  const { data, error } = await useGraphqlQuery({ query: QUERY });
  const seo_data = toRaw(data.value.page.seo);

  return setupPageMeta(title, seo_data);
}
