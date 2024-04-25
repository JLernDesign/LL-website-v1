export default function (id) {
  const site_data = useState('site_data');
  const raw_data = toRaw(site_data.value);
  const page_data = raw_data.filter((item) => item.id == id)[0];
  //console.log(page_data);
  return page_data;
}
