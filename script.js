const pistol = document.getElementById('pistol');
const holster = document.getElementById('holster');
const slide = document.getElementById('slide');
const frame = document.getElementById('frame');
const bullet = document.getElementById('bullet');

window.onscroll = () => {
  let scroll = document.documentElement.scrollTop;

  if (scroll < 400) {
    pistol.style.transform = `translateY(-${ scroll / 2 }px) rotate(-90deg)`;
  } else if (scroll < 675) {
    pistol.style.transform = `translateY(-200px) rotate(${ -90 + ((scroll - 400) / 3) }deg)`;
  } else {
    pistol.style.transform = `translateY(-200px)`;
  }

  if (scroll > 700) {
    bullet.style.transform = `translateX(-${ (scroll - 700) / 2 }px)`;
  } else {
    bullet.style.transform = `translateX(0px)`;
  }

  if (scroll > 700 && scroll < 800) {
    slide.style.transform = `translateX(${ (scroll - 700) / 2 }px) rotate(-0.66deg) translateY(1px)`;
  } else if (scroll > 800 && scroll < 900) {
    slide.style.transform = `translateX(${ 50 + (800 - scroll) / 2 }px) rotate(-0.66deg) translateY(1px)`;
  } else {
    slide.style.transform = `translateX(0px) rotate(-0.66deg) translateY(1px)`;
  }

  console.log(slide.style.transform);
  // holster.style.transform = `translateY(${ scroll / 2 }px)`;
}