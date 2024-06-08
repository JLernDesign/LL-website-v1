export default function (title, seo_data) {
  // global seo data
  let meta_title = title;
  let meta_desc = useState('site_desc').value;

  // grab custom seo data from individual page
  if (seo_data != null) {
    if (seo_data.description != null) {
      meta_desc = seo_data.description;
    }
    if (seo_data.title != null) {
      meta_title = seo_data.title;
    }
  }

  // add to head
  return useHead({
    title: 'Lindsey Lerner PsyD | ' + meta_title,
    meta: [{ name: 'description', content: meta_desc }],
  });
}
