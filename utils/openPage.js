import gsap from 'gsap';

export default function (fullpath, name) {
  setPageType(fullpath);
  gsap.fromTo(
    '.cover',
    { xPercent: 0 },
    { duration: 0.5, xPercent: 100, ease: 'power3.inOut' }
  );
  unfreezePage('.wrapper');
  const page_title = useState('page_title');
  page_title.value = name;
}
