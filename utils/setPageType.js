export default function (fullpath) {
  const page_type = useState('page_type');
  if (fullpath != '/') {
    page_type.value = 'tier';
  } else {
    page_type.value = 'home';
  }
  //console.log(page_type.value);
}
