import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

// auto scroll to section on click
export const jumpTo = (e) => {
  const os = 50;
  const id = e.target.dataset.id;
  const trg = document.querySelector('div[data-id="' + id + '"]');
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: trg, offsetY: os },
    ease: 'expo.inOut',
  });
};

// turn section on/off based on scroll position
export const registerSection = (el) => {
  const os = 50;
  const elems = document.querySelectorAll(el);
  elems.forEach((elem) => {
    ScrollTrigger.create({
      trigger: elem,
      start: 'top top+=' + os,
      end: 'bottom top',
      onEnter: () => {
        elem.classList.add('on');
        //console.log('on section ' + elem.dataset.id);
      },
      onEnterBack: () => {
        elem.classList.add('on');
      },
      onLeaveBack: () => {
        elem.classList.remove('on');
      },
      onLeave: () => {
        elem.classList.remove('on');
      },
    });
  });
};

// pin side menu while scrolling
export const pinMenu = (el) => {
  ScrollTrigger.create({
    trigger: '.start-pin',
    endTrigger: '.end-pin',
    start: 'top top',
    end: 'bottom bottom',
    pin: el,
    pinSpacing: false,
  });
};

// toggle class with scroll
export const scrollUpToggle = (el, cl) => {
  const elems = document.querySelectorAll(el);
  elems.forEach((elem) => {
    ScrollTrigger.create({
      trigger: 'body',
      start: 'top top+=-10',
      end: 'bottom bottom',
      onEnter: () => {
        elem.classList.add(cl);
      },
      onLeaveBack: () => {
        elem.classList.remove(cl);
      },
    });
  });
};
