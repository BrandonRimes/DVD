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
  <p>
    Craft beer kale chips solarpunk farm-to-table unicorn consectetur in hell of lo-fi dolore cupping brunch four loko dreamcatcher. Nisi tofu next level ugh grailed, neutra DSA. Sint cardigan shoreditch bruh vaporware trust fund. Flexitarian sus chillwave man braid mlkshk, enim voluptate laborum et. Schlitz aliqua culpa ad everyday carry.
  </p>
  <p>
    Marxism glossier seitan, offal excepteur aute laborum. Chicharrones sunt narwhal adaptogen yes plz af etsy in ut. Keytar irure try-hard wayfarers hashtag enim esse velit lyft jianbing. Palo santo quis truffaut, ut jawn succulents organic lorem sustainable affogato try-hard. Consectetur venmo try-hard dolore eiusmod. Photo booth magna narwhal blog, succulents eu jean shorts fixie qui.
  </p>
  <p>
    Literally proident dolor meditation. Vibecession sed ut grailed ramps wolf migas squid ad nisi before they sold out lorem. Narwhal banjo direct trade vape church-key edison bulb hexagon ugh, cliche biodiesel. Distillery pop-up marxism, fit waistcoat fanny pack squid in wayfarers irony eiusmod mustache. Tumeric 8-bit 3 wolf moon, poutine shoreditch 90's. Tofu 8-bit ut, 3 wolf moon shoreditch.
  </p>
</div>
`;
const content2 = `
<div id="content-2" class="content">
  <p>
    Put a bird on it mixtape poutine iPhone. Aliquip direct trade ullamco farm-to-table, cornhole DSA elit hashtag. Sriracha artisan proident seitan, commodo chillwave typewriter. Mixtape truffaut trust fund, adaptogen vibecession farm-to-table gatekeep affogato dolore. Ascot ea paleo locavore disrupt sus master cleanse Brooklyn bruh PBR&B keffiyeh fashion axe. Copper mug hoodie same subway tile mukbang roof party everyday carry irony. Sint anim narwhal umami cillum green juice.
  </p>
</div>
`;
const content3 = `
<div id="content-3" class="content">
  <p>
    Magazine pouches
  </p>
  <p>
    Enamel pin incididunt succulents, banh mi wolf art party bicycle rights. Hammock small batch vexillologist, bitters mukbang distillery enim lomo ugh palo santo before they sold out pop-up shabby chic bodega boys. Thundercats umami shabby chic, YOLO live-edge echo park bushwick pour-over portland. Vinyl before they sold out pickled, tumblr blue bottle mlkshk fashion axe tempor.
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