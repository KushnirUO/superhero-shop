tinymce.init({
  selector: '.form-wysiwyg',
  height: "100%",
  menubar: false,
  branding: false,
  statusbar: false,
  plugins: [
    'a11ychecker','advlist','advcode','advtable','autolink','checklist','export',
    'lists','link','image','charmap','preview','anchor','searchreplace','visualblocks',
    'powerpaste','fullscreen','formatpainter','insertdatetime','media','table','help','wordcount'
  ],
  toolbar: 'bold italic underline bullist alignjustify alignleft alignright forecolor',

});

document.getElementById('big-input-label__input').addEventListener('blur', (e) => {
  e.target.value = '';
})

function createColorCard(colorCard) {
  const img = colorCard.querySelector(".color-card__img");
  const el = document.createElement("div");
  el.className = "color-card__gradient";
  if (img.src === "http://127.0.0.1:5500/" || img.src === "" || !img.src) {
    img.src = "https://picsum.photos/200/300";
  } else {
    let rgb = getAverageRGB(img);
    el.style.background = `linear-gradient(to top, rgba(${rgb.r}
      ,${rgb.g}
      ,${rgb.b}
      , 1), rgba(${rgb.r}
        ,${rgb.g}
        ,${rgb.b}
        , 0))`;
  }
  colorCard.appendChild(el);
}

function getAverageRGB(img) {
  let blockSize = 5, // only visit every 5 pixels
    defaultRGB = { r: 0, g: 0, b: 0 }, // for non-supporting envs
    canvas = document.createElement("canvas"),
    context = canvas.getContext && canvas.getContext("2d"),
    data,
    width,
    height,
    i = -4,
    length,
    rgb = { r: 0, g: 0, b: 0 },
    imgHeight = img.offsetParent,
    count = 0;

  if (!context) {
    return defaultRGB;
  }

  height = imgHeight.offsetHeight;
  width = canvas.width;

  context.drawImage(img, 0, 0);

  try {
    data = context.getImageData(0, 0, width, height);
  } catch (e) {
    /* security error, img on diff domain */ alert("x");
    return defaultRGB;
  }

  length = data.data.length;
  while ((i += blockSize * 4) < length) {
    if (
      (data.data[i] > 210 &&
        data.data[i + 1] > 210 &&
        data.data[i + 2] > 210) ||
      (data.data[i] < 40 && data.data[i + 1] < 40 && data.data[i + 2] < 40)
    ) {
      continue;
    }

    ++count;
    rgb.r += data.data[i];
    rgb.g += data.data[i + 1];
    rgb.b += data.data[i + 2];
  }

  // ~~ used to floor values
  rgb.r = ~~(rgb.r / count);
  rgb.g = ~~(rgb.g / count);
  rgb.b = ~~(rgb.b / count);

  return rgb;
}

window.addEventListener("load", () => {
  const colorCards = document.querySelectorAll(".color-card");
  for (let i = 0; i < colorCards.length; i++) {
    createColorCard(colorCards[i]);
  }
});



let position = 0;
const slideToScroll=1;
const container = document.querySelector('.sliderTrack__cardImgInfo');
const track = document.querySelector('.sliderTrack');
const btnPrev = document.querySelector('.navSliderBtn__controlPrev');
const btnNext = document.querySelector('.navSliderBtn__controlNext');
const items =document.querySelectorAll('.sliderTrack__cardImgInfo');
const itemsCount = items.length;
const itemWidth = container.clientWidth;
const movePosition = itemWidth;


btnPrev.addEventListener('click',() => {
  findPrevPosition();
  setPosition();
  makeTimer();
});

btnNext.addEventListener('click',() => {
  findNextPosition();
  setPosition();
  makeTimer();
});

const findNextPosition = () => {
  if(position === -(itemsCount-slideToScroll)*itemWidth)position=555;
  const itemsRight = itemsCount - (Math.abs(position) / itemWidth) - slideToScroll;
  if(itemsRight >= slideToScroll)position -= movePosition;
};

const findPrevPosition = () => {
  if(position === 0)position=-(itemsCount*itemWidth);
  const itemsLeft = Math.abs(position) / itemWidth;
  if(itemsLeft >= slideToScroll)position += movePosition;
};

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
};

var timer = 0;
makeTimer();
function makeTimer(){
  clearInterval(timer)
  timer = setInterval(function(){
    findNextPosition();
    setPosition();
  },5000);
}

const buttonslide1 = document.querySelector('.navRowBtn__item1');
const buttonslide2 = document.querySelector('.navRowBtn__item2');
const buttonslide3 = document.querySelector('.navRowBtn__item3');
const buttonslide4 = document.querySelector('.navRowBtn__item4');

const changeSlide = (val) => {
  position=-(val*itemWidth);
  setPosition();
  makeTimer();
}
buttonslide1.addEventListener('click',() => {changeSlide(buttonslide1.value);});
buttonslide2.addEventListener('click',() => {changeSlide(buttonslide2.value);});
buttonslide3.addEventListener('click',() => {changeSlide(buttonslide3.value);});
buttonslide4.addEventListener('click',() => {changeSlide(buttonslide4.value);});

const anchors = document.querySelectorAll('a.nav-menu__item_skrol')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href')

    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

const btn_signIn = document.getElementById("signIn");
const btn_signUp = document.getElementById("signUp");
function lookAtSignInForm(){
  document.getElementById('signupFormId').style.display='none';
  document.getElementById('signinFormId').style.display='';
}
function lookAtSignUpForm(){
  document.getElementById('signinFormId').style.display='none';
  document.getElementById('signupFormId').style.display='';
}
btn_signIn.addEventListener('click',() => {lookAtSignInForm();})
btn_signUp.addEventListener('click',() => {lookAtSignUpForm();})


const btn_register = document.getElementById("button_register");
const btn_login = document.getElementById("button_login");
function autorization(){
  document.getElementById('header__user-areaId').style.display='';
  document.getElementById('userControlsId').style.display='none';
  document.getElementById('signupFormId').style.display='none';
  document.getElementById('signinFormId').style.display='none';
}
btn_register.addEventListener('click',() => {autorization()})
btn_login.addEventListener('click',() => {autorization()})


function hideAll(){
  document.getElementById('jkHolderPromoId').style.display='none';
  document.getElementById('fourGridWrapperId').style.display='none';
  document.getElementById('threeGridCardId').style.display='none';
  document.getElementById('heroGridCardId').style.display='none';

}

const buttonSeeDetailsComics = document.querySelector('.seeDetailsButton');
buttonSeeDetailsComics.addEventListener('click',() => {
  hideAll();
})
const userAvatar = document.querySelector('.user-avatar__img');
userAvatar.addEventListener('click',() => {
  hideAll();
  document.getElementById('profileUserContainerId').style.display='flex';
  document.getElementById('jkProfileInfoId').style.display='flex';


})
