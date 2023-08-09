window.onscroll = function() {scrollFunction()};

let navigationBg = document.getElementById('navigation-section');

function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    navigationBg.classList.add('navigation-bg');
  } else {
    navigationBg.classList.remove('navigation-bg');

  }
}





let showVideo = document.getElementById('show-video-cont');
let videoPopup = document.getElementById('video-Popup');
showVideo.addEventListener('click', () => {
  videoPopup.classList.add('show-video');
});

let closeVidBtn = document.getElementById('close-vid');
  closeVidBtn.addEventListener('click', () => {
  videoPopup.classList.remove('show-video');
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' || event.key === 'Esc') {
    videoPopup.classList.remove('show-video');
  }
});


// navlink and menu bar function
let menuBtn = document.getElementById("menuBar");
let navlinkOverlay = document.getElementById('navlinks-overlay');
let navlinks = document.getElementById('navlinks');
menuBtn.addEventListener('click', () => {
  navlinkOverlay.classList.toggle('show-navlinkOverlay');
  navlinks.classList.toggle('show-navlinks');
});

function closeMenu(){
  navlinkOverlay.classList.remove('show-navlinkOverlay');
  navlinks.classList.remove('show-navlinks');
}