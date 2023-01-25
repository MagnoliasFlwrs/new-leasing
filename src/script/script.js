const slides = document.querySelectorAll('.swiper-slide')
const sliderBtnPrev = document.querySelector('.slider_arrow--prev')
const sliderBtnNext = document.querySelector('.slider_arrow--next')
const burgerMenu = document.querySelector('.burger');
const burgerWrap = document.querySelector('.burger__wrap');
const newsSlider = document.querySelector('.news__swiper')
const scroll = document.querySelector('.scroll__to__top');
const linksToSecond = document.querySelectorAll('.link__to__second')
const secondMobileBack = document.querySelectorAll('.mobile__back__link__second')
const linkWraps = document.querySelectorAll('.link__wrapper')
const overlay = document.querySelector('.overlay');
const burgerLinks = document.querySelectorAll('.burger__navigation__item')
const promoBtns = document.querySelectorAll('.promo-card__action-btn')
const promoModal = document.querySelector('.modal__form')
const closeModal = document.querySelector('.modal__form-close')
const modalOverlay = document.querySelector('.modal__overlay')
const submenuWrapper = document.querySelector('.submenu__wrapper')


// slider
slides.forEach((slide) => {
  slide.addEventListener('mouseenter' ,() => {
    sliderBtnNext.style.visibility = 'visible'
    sliderBtnPrev.style.visibility = 'visible'
  })
})


newsSlider.addEventListener('mouseenter' , ()=> {
    if (sliderBtnNext.classList.contains('.swiper-button-disabled')) {
      sliderBtnPrev.style.visibility = 'visible'
    } else if (sliderBtnPrev.classList.contains('.swiper-button-disabled')) {
      sliderBtnNext.style.visibility = 'visible'
    } else {
      sliderBtnNext.style.visibility = 'visible'
      sliderBtnPrev.style.visibility = 'visible'
    }
})
newsSlider.addEventListener('mouseleave' , ()=> {
  sliderBtnNext.style.visibility = 'hidden'
  sliderBtnPrev.style.visibility = 'hidden'
})
// scroll

let scrollpos = window.scrollY

const header = document.querySelector("header")
const scrollChange = 10

const add_class_on_scroll = () => header.classList.add("_onscroll")
const remove_class_on_scroll = () => header.classList.remove("_onscroll")

window.addEventListener('scroll', function() {
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { add_class_on_scroll() }
  else { remove_class_on_scroll() }

})
//
overlay.addEventListener('click', () => {
    overlay.classList.remove('open');
});
if (burgerMenu) {
    burgerMenu.addEventListener('click' , (e) => {
    document.body.classList.toggle('_lock');
    burgerMenu.classList.toggle('_active');
    burgerWrap.classList.toggle('_active');
    overlay.classList.toggle('open');
        overlay.addEventListener('click', () => {
            burgerMenu.classList.remove('_active');
            burgerWrap.classList.remove('_active');
            overlay.classList.remove('open');
        });
    })
}

burgerLinks.forEach((link) => {
    link.addEventListener('click' , () => {
        burgerMenu.classList.remove('_active');
        burgerWrap.classList.remove('_active');
        overlay.classList.remove('open');
        document.body.classList.remove('_lock');
    })
})
function clearClasses(e) {
  if (e.target.classList.contains('mobile__back__link')) {
      e.preventDefault();
  e.target.closest('.burger__submenu').classList.remove('__transform');
  e.target.closest('.burger__wrap').querySelector('.burger__links').classList.remove('__transform');
  }
}
burgerWrap.addEventListener('click', (e) => {
if (e.target.classList.contains('burger__link__dropdown')) {
  e.preventDefault();
  e.target.closest('.burger__links').classList.add('__transform');
  e.target.closest('.burger__link__item').querySelector('.burger__submenu').classList.add('__transform');
}
  clearClasses(e)
});
linksToSecond.forEach((link) => {
  link.addEventListener('click' ,(e) => {
      clearClasses(e)
      e.target.closest('.burger__submenu__item').querySelector('.second__menu').classList.add('__transformation');
      linksToSecond.forEach((link) => {
          link.classList.remove('dropright')
      })
  })
})
secondMobileBack.forEach((link) => {
  link.addEventListener('click', (e) => {
      e.target.closest('.burger__submenu__item').querySelector('.second__menu').classList.remove('__transformation');
      e.target.closest('.burger__link__item').querySelector('.burger__submenu').classList.add('__transform');
      linksToSecond.forEach((link) => {
          link.classList.add('dropright')
      })
  })
})
// linksToSecond.forEach((link) => {
//   link.addEventListener('click' ,(e) => {
//       clearClasses(e)
//       e.target.closest('.burger__submenu__item').querySelector('.submenu3lvl').classList.add('__transformation');
//       linksToSecond.forEach((link) => {
//           link.classList.remove('dropright')
//       })
//   })
// })
// secondMobileBack.forEach((link) => {
//   link.addEventListener('click', (e) => {
//       e.target.closest('.burger__submenu__item').querySelector('.submenu3lvl').classList.remove('__transformation');
//       e.target.closest('.burger__link__item').querySelector('.burger__submenu').classList.add('__transform');
//       linksToSecond.forEach((link) => {
//           link.classList.add('dropright')
//       })
//   })
// })
// promo modal

promoBtns.forEach((btn) => {
  btn.addEventListener('click' , () => {
    modalOverlay.classList.add('open')
    promoModal.classList.add('opn')
  })
})
const modalClose = () => {
  closeModal.addEventListener('click' , () => {
    promoModal.classList.remove('opn')
    modalOverlay.classList.remove('open')
  })
  overlay.addEventListener('click' , () => {
    promoModal.classList.remove('opn')
    modalOverlay.classList.remove('open')
  })
}
modalClose()

// menu

const dropdowns = document.querySelectorAll('.dropdown')
const allSubmenues = document.querySelectorAll('.submenu')
let subMenu= "";

function clearIconClass() {
  let navlinks = document.querySelectorAll('.nav__link')
  navlinks.forEach((link) => {
      if (link.classList.contains('dropup')) {
          link.classList.remove('dropup')
      }
  })
}

linkWraps.forEach((link) => {
  link.addEventListener('mouseenter', (e) => {
      if (e.target.closest('.link__wrapper')) {
          subMenu = e.target.closest('.link__wrapper').querySelector('.submenu');
          if (!subMenu.classList.contains('open')) {
              clearIconClass()
              e.target.closest('.link__wrapper').querySelector('.dropdown').classList.add('dropup')
              hideSubmenu()
              showSubMenu(subMenu)
          } else {
              clearIconClass()
              hideSubmenu()
          }
      }
  })
})
const headerClass = document.querySelector('.header')
allSubmenues.forEach((item) => {
  item.addEventListener('mouseenter', ()=> {
    overlay.classList.add('open');
    // headerClass.classList.add('open__submenu')
  } )
  item.addEventListener('mouseleave', ()=> {
    clearIconClass()
    hideSubmenu()
  })
})
function hideSubmenu() {
  allSubmenues.forEach((item) => {
      if (item.classList.contains('open')) {
          item.classList.remove('open');
          item.closest('.submenu__wrapper').classList.remove('open')
          overlay.classList.remove('open');
      }
  })
}


function showSubMenu(subMenu) {
  subMenu.classList.add('open');
  overlay.classList.add('open');
  subMenu.closest('.submenu__wrapper').classList.add('open')
  // headerClass.classList.add('open__submenu')
  overlay.addEventListener('mouseenter', () => {
      clearIconClass()
      subMenu.classList.remove('open');
      overlay.classList.remove('open');
  });

}


