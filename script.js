const pistol = document.getElementById('pistol');
const holster = document.getElementById('holster');
const slide = document.getElementById('slide');
const frame = document.getElementById('frame');
const bullet = document.getElementById('bullet');

const navName = document.getElementById('nav-name');

const contentContainer = document.getElementById('content-container');
const content = document.getElementById('content');
const content1btn = document.getElementById('content-1-btn');
const content2btn = document.getElementById('content-2-btn');
const content3btn = document.getElementById('content-3-btn');
const content4btn = document.getElementById('content-4-btn');

const content1 = `
<div id="content-1" class="content">
  <section>
    <h3>Start Somewhere</h3>
    <p>
      Come as you are.<br>
      Equipment can be provided.<br>
      9mm ammunition will be available for sale.<br>
      Expect to shoot ~150 rounds.
    </p>
  </section>
  <section>
    <h3>Principles Covered</h3>
    <p>
      Safety<br>
      Equipment Operation<br>
      Shooting Fundamentals<br>
      Concealed Carrying<br>
      Firearm Selection<br>
      Legalities<br>
    </p>
  </section>
  <section>
    <h3>Sequence of Events</h3>
    <p>
      Safety Briefing<br>
      Equipment Operations Overview<br>
      Shooting Fundamentals Overview<br>
      Move to Shooting Positions<br>
      Range Hot / Make Ready<br>
      Shooting / Instruction<br>
      Range Cold / Reset<br>
      Repeat Hot / Cold<br>
      Debrief<br>
    </p>
  </section>
  <section>
    <h3>Schedule & Payment</h3>
    <p>
      Saturdays<br>
      0900 to 1300<br>
      At Okeechobee Shooting Sports<br>
      <br>
      Accomodations of different days and times can be made for private sessions and complete groups of 4+<br>
      <br>
      Public Sessions: $100/shooter<br>
      Private Sessions: starting at $400<br>
      <br>
      Cash / Zelle / Venmo / Barter<br>
    </p>
  </section>
</div>
`;
const content2 = `
<div id="content-2" class="content">
  <section>
    <h3>Train</h3>
    <p>
      Bring your EDC pistol, home defense weapon, and SHTF loadout.<br>
      9mm ammunition will be available for sale.<br>
      Expect to shoot 250+ rounds.<br>
    </p>
  </section>
  <section>
    <h3>Principles Covered</h3>
    <p>
      Safety<br>
      Shooting From Concealment<br>
      Target Transitions<br>
      Utilizing Cover / Concealment<br>
      Shooting on the Move<br>
      Weapon Transitions<br>
    </p>
  </section>
  <section>
    <h3>Sequence of Events</h3>
    <p>
      Safety Briefing<br>
      Drills<br>
      Debrief<br>
    </p>
  </section>
  <section>
    <h3>Running Drills</h3>
    <p>
      
    </p>
  </section>
  <section>
    <h3>Schedule & Payment</h3>
    <p>
      Saturdays<br>
      0900 to 1300<br>
      At Okeechobee Shooting Sports<br>
      <br>
      Accomodations of different days and times can be made for private sessions and complete groups of 4+<br>
      <br>
      Public Sessions: $100/shooter<br>
      Private Sessions: starting at $400<br>
      <br>
      Cash / Zelle / Venmo / Barter<br>
    </p>
  </section>
</div>
`;
const content3 = `
<div id="content-3" class="content">
  <p>
    Magazine pouches
  </p>
</div>
`;
const content4 = `
<div id="content-4" class="content">
  <p>
    Contact me
  </p>
</div>
`;

const contents = {
  'Home': '',
  'Firearms Instruction': content1,
  'Run Drills': content2,
  'Custom Gear': content3,
  'Contact': content4
}

// const activeBtn = 'Home';

function toggleActiveContent(btn) {
  // activeBtn = btn;
  contentContainer.style.background = 'var(--half-background)';
  content.innerHTML = contents[btn];

  content1btn.classList.remove('active-btn');
  content2btn.classList.remove('active-btn');
  content3btn.classList.remove('active-btn');
  content4btn.classList.remove('active-btn');

  navName.style.fontSize = '0.5rem';
  navName.style.letterSpacing = '0.5rem';
  navName.style.marginTop = '1.5rem';

  if (btn === 'Home') {
    contentContainer.style.background = 'transparent';

    navName.style.fontSize = '1rem';
    navName.style.letterSpacing = '1rem';
    navName.style.marginTop = '3rem';
  } else if (btn === 'Firearms Instruction') {
    content1btn.classList.add('active-btn');
  } else if (btn === 'Run Drills') {
    content2btn.classList.add('active-btn');
  } else if (btn === 'Custom Gear') {
    content3btn.classList.add('active-btn');
  } else if (btn === 'Contact') {
    content4btn.classList.add('active-btn');
  }
}

navName.addEventListener('click', () => {
  toggleActiveContent('Home');
});

content1btn.addEventListener('click', () => {
  toggleActiveContent('Firearms Instruction');
});

content2btn.addEventListener('click', () => {
  toggleActiveContent('Run Drills');
});

content3btn.addEventListener('click', () => {
  toggleActiveContent('Custom Gear');
});

content4btn.addEventListener('click', () => {
  toggleActiveContent('Contact');
});


// function navigateTo(path) {
//   // Add a new entry to the history and update the URL
//   history.pushState(null, null, path);
//   // Update the content dynamically based on the selected path
//   updateContent(path);
// }
// function updateContent(path) {
//   // Fetch content from the server or perform other actions based on the path
//   // For simplicity, let's just update the content in the example
//   document.getElementById('content').innerHTML = `Content for ${path}`;
// }
// // Handle the popstate event to detect changes in the browsing history
// window.addEventListener("popstate", function(event) {
//   // Update the content based on the state object
//   const path = window.location.pathname;
//   updateContent(path);
// });

window.onscroll = () => {
  let scroll = document.documentElement.scrollTop;

  // console.log(scroll);

  // if (scroll < 500) {
  //   navName.style.fontSize = 1 - (scroll / 1000) + 'rem';
  //   navName.style.letterSpacing = 1 - (scroll / 1000) + 'rem';
  //   navName.style.marginTop = 3 - (scroll / 333) + 'rem';
  // } else {
  //   navName.style.fontSize = '0.5rem';
  //   navName.style.letterSpacing = '0.5rem';
  //   navName.style.marginTop = '1.5rem';
  // }

  // if (scroll < 333) {
  //   pistol.style.transform = `translateY(-${ scroll * 1.2 }px) rotate(-90deg)`;
  // } else if (scroll < 600) {
  //   pistol.style.transform = `translateY(-400px) rotate(${ -90 + ((scroll - 333) / 3) }deg)`;
  // } else {
  //   pistol.style.transform = `translateY(-400px)`;
  // }

  // if (scroll > 700) {
  //   bullet.style.transform = `translateX(-${ (scroll - 700) * 1.1 }px)`;
  // } else {
  //   bullet.style.transform = `translateX(0px)`;
  // }

  // if (scroll > 700 && scroll < 750) {
  //   slide.style.transform = `translateX(${ (scroll - 700) }px) rotate(-0.66deg) translateY(1px)`;
  // } else if (scroll >= 750 && scroll < 800) {
  //   slide.style.transform = `translateX(${ 50 + (750 - scroll) }px) rotate(-0.66deg) translateY(1px)`;
  // } else {
  //   slide.style.transform = `translateX(0px) rotate(-0.66deg) translateY(1px)`;
  // }

  // if (scroll > 900 && scroll < 1175) {
  //   pistol.style.transform = `translateY(-400px) rotate(${(900 - scroll) / 3 }deg)`;
  // } else if (scroll >= 1175 && scroll < 1575) {
  //   pistol.style.transform = `translateY(-${ 400 - (scroll - 1175) }px) rotate(-90deg)`;
  // } else if (scroll >= 1575) {
  //   pistol.style.transform = `translateY(0px) rotate(-90deg)`;
  // }

  // console.log(slide.style.transform);
  // holster.style.transform = `translateY(${ scroll / 2 }px)`;
}