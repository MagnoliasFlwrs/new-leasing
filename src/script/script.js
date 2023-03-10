const slides = document.querySelectorAll('.swiper-slide')
const sliderBtnPrev = document.querySelector('.slider_arrow--prev')
const sliderBtnNext = document.querySelector('.slider_arrow--next')
const sliderBtnPrev2 = document.querySelector('.slider_arrow--prev2')
const sliderBtnNext2 = document.querySelector('.slider_arrow--next2')
const burgerMenu = document.querySelector('.burger');
const burgerWrap = document.querySelector('.burger__wrap');
const newsSlider = document.querySelector('.news__swiper')
const scroll = document.querySelector('.scroll__to__top');
const linksToSecond = document.querySelectorAll('.link__to__second')
const secondMobileBack = document.querySelectorAll('.mobile__back__link__second')
const linkWraps = document.querySelectorAll('.link__wrapper')
const overlay = document.querySelector('.overlay');
const burgerLinks = document.querySelectorAll('.burger__navigation__item')
const submenuWrapper = document.querySelector('.submenu__wrapper')
const newsSlides = document.querySelectorAll('.news__slide')


// slider
slides.forEach((slide) => {
  slide.addEventListener('mouseenter' ,() => {
    sliderBtnNext.style.visibility = 'visible'
    sliderBtnPrev.style.visibility = 'visible'
  })
})
newsSlides.forEach((slide) => {
  slide.addEventListener('mouseenter' ,() => {
    sliderBtnNext2.style.visibility = 'visible'
    sliderBtnPrev2.style.visibility = 'visible'
  })
})

// newsSlider.forEach((slide) => {
//   slide.addEventListener('mouseenter' ,() => {
//     sliderBtnNext.style.visibility = 'visible'
//     sliderBtnPrev.style.visibility = 'visible'
//   })
// })
// newsSlider.addEventListener('mouseenter' , ()=> {
//     if (sliderBtnNext.classList.contains('.swiper-button-disabled')) {
//       sliderBtnPrev.style.visibility = 'visible'
//     } else if (sliderBtnPrev.classList.contains('.swiper-button-disabled')) {
//       sliderBtnNext.style.visibility = 'visible'
//     } else {
//       sliderBtnNext.style.visibility = 'visible'
//       sliderBtnPrev.style.visibility = 'visible'
//     }
// })
// newsSlider.addEventListener('mouseleave' , ()=> {
//   sliderBtnNext.style.visibility = 'hidden'
//   sliderBtnPrev.style.visibility = 'hidden'
// })
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
      e.target.closest('.burger__submenu__item').querySelector('.submenu3lvl').classList.add('__transformation');
      linksToSecond.forEach((link) => {
          link.classList.remove('dropright')
      })
  })
})
secondMobileBack.forEach((link) => {
  link.addEventListener('click', (e) => {
      e.target.closest('.burger__submenu__item').querySelector('.submenu3lvl').classList.remove('__transformation');
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


// modal

const domain = window.location.host

function showModal(params) {
    const modalBlock = document.querySelector('.modal-block ')
    const buttonsShowModal = document.querySelectorAll('.v-promo-poster')
    const modalInfo = document.querySelector('.modal__info-block')
    const menuLinks = document.querySelectorAll('.second__submenu__li')
    buttonsShowModal.forEach((el)=>{
        el.addEventListener('click', (e) => {
            const title = e.target.closest('.v-promo-poster').querySelector('.promo-poster__title').innerHTML
            const inner = e.target.closest('.v-promo-poster').querySelector('.promo-poster__content').innerHTML
            const image = e.target.closest('.v-promo-poster').querySelector('.promo-poster__image').src
            const modalBlockInfoWrap = document.createElement('div')
            modalBlockInfoWrap.classList.add('modal__info-wrap')
            const modalTitle = document.createElement('p')
            modalTitle.classList.add('modal_title')
            modalTitle.innerHTML = title
            const modalInfoItems = document.createElement('div')
            modalInfoItems.classList.add('modal__info-items')
            modalInfoItems.innerHTML = inner
            const modalInfoImg = document.createElement('img')
            modalInfoImg.classList.add('modal__info-imgage')
            modalInfoImg.classList.add('mdl')
            modalInfoImg.src = image
            modalBlockInfoWrap.append(modalTitle, modalInfoItems ,modalInfoImg)
            modalInfo.appendChild(modalBlockInfoWrap)

            modalBlock.classList.remove('hide-modal')
            document.querySelector('html').style.overflow='hidden'
        })
    })

    menuLinks.forEach((link) => {
      link.addEventListener('click' ,  (e) => {
        if (e.target.closest('.submenu__item').querySelector('.submenu__item-title-h').innerHTML === '??????????/?????????? ??????????????'  ) {
            const modalBlockInfoWrap = document.createElement('div')
            modalBlockInfoWrap.classList.add('modal__info-wrap')
            const modalTitle = document.createElement('p')
            modalTitle.classList.add('modal_title')
            modalTitle.innerHTML = '??????????/?????????? ??????????????'
            const modalInfoItems = document.createElement('div')
            modalInfoItems.classList.add('modal__info-items')
            modalInfoItems.innerHTML = `
            <ul>
            <li>???????????????? </li>
            <li>????????????????<br></li>
            <li>????????????????????</li>
        </ul>
            `
            const modalInfoImg = document.createElement('img')
            modalInfoImg.classList.add('modal__info-imgage')
            modalInfoImg.classList.add('mdl')
            modalInfoImg.src = './src/images/promo/tv.png'
            modalBlockInfoWrap.append(modalTitle, modalInfoItems ,modalInfoImg)
            modalInfo.appendChild(modalBlockInfoWrap)

            modalBlock.classList.remove('hide-modal')
            document.querySelector('html').style.overflow='hidden'
        }
        if (e.target.closest('.submenu__item').querySelector('.submenu__item-title-h').innerHTML ==='?????????????? ??????????????' ) {
          const modalBlockInfoWrap = document.createElement('div')
          modalBlockInfoWrap.classList.add('modal__info-wrap')
          const modalTitle = document.createElement('p')
          modalTitle.classList.add('modal_title')
          modalTitle.innerHTML = '?????????????? ??????????????'
          const modalInfoItems = document.createElement('div')
          modalInfoItems.classList.add('modal__info-items')
          modalInfoItems.innerHTML = `
          <ul>
          <li>???????????????????????? ?????????????? </li>
          <li>????????????????<br></li>
          <li>????????????????????????</li>
      </ul>
          `
          const modalInfoImg = document.createElement('img')
          modalInfoImg.classList.add('modal__info-imgage')
          modalInfoImg.classList.add('mdl')
          modalInfoImg.src = './src/images/promo/stiralka.png'
          modalBlockInfoWrap.append(modalTitle, modalInfoItems ,modalInfoImg)
          modalInfo.appendChild(modalBlockInfoWrap)

          modalBlock.classList.remove('hide-modal')
          document.querySelector('html').style.overflow='hidden'
      }
      if (e.target.closest('.submenu__item').querySelector('.submenu__item-title-h').innerHTML ==='??????, ????????, ????????????' ) {
        const modalBlockInfoWrap = document.createElement('div')
        modalBlockInfoWrap.classList.add('modal__info-wrap')
        const modalTitle = document.createElement('p')
        modalTitle.classList.add('modal_title')
        modalTitle.innerHTML = '??????, ????????, ????????????'
        const modalInfoItems = document.createElement('div')
        modalInfoItems.classList.add('modal__info-items')
        modalInfoItems.innerHTML = `
        <ul>
                                                            <li>?????????????????? ?? ????????????????</li>
                                                            <li>??????????????????????????????????</li>
                                                            <li>?????????????? ??????????????<br></li>

                                                        </ul>
        `
        const modalInfoImg = document.createElement('img')
        modalInfoImg.classList.add('modal__info-imgage')
        modalInfoImg.classList.add('mdl')
        modalInfoImg.src = './src/images/promo/home.png'
        modalBlockInfoWrap.append(modalTitle, modalInfoItems ,modalInfoImg)
        modalInfo.appendChild(modalBlockInfoWrap)

        modalBlock.classList.remove('hide-modal')
        document.querySelector('html').style.overflow='hidden'
    }
    if (e.target.closest('.submenu__item').querySelector('.submenu__item-title-h').innerHTML ==='?????????? ??????????????????' ) {
      const modalBlockInfoWrap = document.createElement('div')
      modalBlockInfoWrap.classList.add('modal__info-wrap')
      const modalTitle = document.createElement('p')
      modalTitle.classList.add('modal_title')
      modalTitle.innerHTML = '?????????? ??????????????????'
      const modalInfoItems = document.createElement('div')
      modalInfoItems.classList.add('modal__info-items')
      modalInfoItems.innerHTML = `
      <ul>
                                                            <li>??????????????????</li>
                                                            <li>?????? ?????????????????? ????????????<br></li>
                                                            <li>?????????????? ?? ????????????????????</li>
                                                        </ul>
      `
      const modalInfoImg = document.createElement('img')
      modalInfoImg.classList.add('modal__info-imgage')
      modalInfoImg.classList.add('mdl')
      modalInfoImg.src = './src/images/promo/sport.webp'
      modalBlockInfoWrap.append(modalTitle, modalInfoItems ,modalInfoImg)
      modalInfo.appendChild(modalBlockInfoWrap)

      modalBlock.classList.remove('hide-modal')
      document.querySelector('html').style.overflow='hidden'
    }
    if (e.target.closest('.submenu__item').querySelector('.submenu__item-title-h').innerHTML ==='?????????????????????????? ????????????' ) {
      const modalBlockInfoWrap = document.createElement('div')
      modalBlockInfoWrap.classList.add('modal__info-wrap')
      const modalTitle = document.createElement('p')
      modalTitle.classList.add('modal_title')
      modalTitle.innerHTML = '?????????????????????????? ????????????'
      const modalInfoItems = document.createElement('div')
      modalInfoItems.classList.add('modal__info-items')
      modalInfoItems.innerHTML = `
      <ul>
      <li>??????????????????</li>
      <li>????????????????????????<br></li>
      <li>????????????????????</li>
    </ul>
      `
      const modalInfoImg = document.createElement('img')
      modalInfoImg.classList.add('modal__info-imgage')
      modalInfoImg.classList.add('mdl')
      modalInfoImg.src = './src/images/promo/wheel.png'
      modalBlockInfoWrap.append(modalTitle, modalInfoItems ,modalInfoImg)
      modalInfo.appendChild(modalBlockInfoWrap)

      modalBlock.classList.remove('hide-modal')
      document.querySelector('html').style.overflow='hidden'
    }
    if (e.target.innerHTML ==='???????? ?????????? ??????????????????' || e.target.closest('.submenu__item').querySelector('.submenu__item-title-h').innerHTML ==='?? ???????? ????????????'   ) {
      console.log(e.target.closest('.submenu__item').querySelector('.submenu__item-title-h').innerHTML)
      const modalBlockInfoWrap = document.createElement('div')
      modalBlockInfoWrap.classList.add('modal__info-wrap')
      const modalTitle = document.createElement('p')
      modalTitle.classList.add('modal_title')
      modalTitle.innerHTML = '?????????? ??????????????????'
      const modalInfoImg = document.createElement('img')
      modalInfoImg.classList.add('modal__info-imgage')
      modalInfoImg.classList.add('mdl')
      modalInfoImg.src = './src/images/partners.png'
      modalBlockInfoWrap.append(modalTitle ,modalInfoImg)
      modalInfo.appendChild(modalBlockInfoWrap)

      modalBlock.classList.remove('hide-modal')
      document.querySelector('html').style.overflow='hidden'
    }
    if (e.target.innerHTML ==='????????????') {
      console.log(e.target.closest('.submenu__item').querySelector('.submenu__item-title-h').innerHTML)
      modalInfo.innerHTML = ""
      const modalBlockInfoWrap = document.createElement('div')
      modalBlockInfoWrap.classList.add('modal__info-wrap')
      const modalTitle = document.createElement('p')
      modalTitle.classList.add('modal_title')
      modalTitle.innerHTML = '????????????'
      const modalInfoImg = document.createElement('img')
      modalInfoImg.classList.add('modal__info-imgage')
      modalInfoImg.classList.add('mdl')
      modalInfoImg.src = './src/images/job.png'
      modalBlockInfoWrap.append(modalTitle ,modalInfoImg)
      modalInfo.appendChild(modalBlockInfoWrap)

      modalBlock.classList.remove('hide-modal')
      document.querySelector('html').style.overflow='hidden'
    }
      })

    })
}

showModal()

function closeModal(params) {
    const modalBlock = document.querySelector('.modal-block ')
    modalBlock.addEventListener('click', (e) => {
        if (e.target.className === 'modal-block shadow-block' || e.target.className == 'button-modal-close' || e.target.className =='close-modal'){
            modalBlock.classList.add('hide-modal')
            const modalInfo = document.querySelector('.modal__info-block')
            modalInfo.innerHTML = ""
            document.querySelector('html').style.overflow='unset'
        }
    })
}

closeModal()
function checkBurgerMenu() {
  const modalBlock = document.querySelector('.modal-block ')
    const buttonsShowModal = document.querySelectorAll('.v-promo-poster')
    const modalInfo = document.querySelector('.modal__info-block')
  const burgerSubLinks = document.querySelectorAll('.burger__link')
  burgerSubLinks.forEach((link) => {
    link.addEventListener('click' ,(e) => {
      if (e.target.closest('.burger__submenu__item').querySelector('.link__to__second').innerHTML ==='??????????/?????????? ??????????????' ) {
        const modalBlockInfoWrap = document.createElement('div')
        modalBlockInfoWrap.classList.add('modal__info-wrap')
        const modalTitle = document.createElement('p')
        modalTitle.classList.add('modal_title')
        modalTitle.innerHTML = '??????????/?????????? ??????????????'
        const modalInfoItems = document.createElement('div')
        modalInfoItems.classList.add('modal__info-items')
        modalInfoItems.innerHTML = `
        <ul>
        <li>???????????????? </li>
        <li>????????????????<br></li>
        <li>????????????????????</li>
    </ul>
        `
        const modalInfoImg = document.createElement('img')
        modalInfoImg.classList.add('modal__info-imgage')
        modalInfoImg.classList.add('mdl')
        modalInfoImg.src = './src/images/promo/tv.png'
        modalBlockInfoWrap.append(modalTitle, modalInfoItems ,modalInfoImg)
        modalInfo.appendChild(modalBlockInfoWrap)

        modalBlock.classList.remove('hide-modal')
        document.querySelector('html').style.overflow='hidden'
    }
    if (e.target.closest('.burger__submenu__item').querySelector('.link__to__second').innerHTML ==='?????????????? ??????????????' ) {
      const modalBlockInfoWrap = document.createElement('div')
      modalBlockInfoWrap.classList.add('modal__info-wrap')
      const modalTitle = document.createElement('p')
      modalTitle.classList.add('modal_title')
      modalTitle.innerHTML = '?????????????? ??????????????'
      const modalInfoItems = document.createElement('div')
      modalInfoItems.classList.add('modal__info-items')
      modalInfoItems.innerHTML = `
      <ul>
      <li>???????????????????????? ?????????????? </li>
      <li>????????????????<br></li>
      <li>????????????????????????</li>
  </ul>
      `
      const modalInfoImg = document.createElement('img')
      modalInfoImg.classList.add('modal__info-imgage')
      modalInfoImg.classList.add('mdl')
      modalInfoImg.src = './src/images/promo/stiralka.png'
      modalBlockInfoWrap.append(modalTitle, modalInfoItems ,modalInfoImg)
      modalInfo.appendChild(modalBlockInfoWrap)

      modalBlock.classList.remove('hide-modal')
      document.querySelector('html').style.overflow='hidden'
  }
  if (e.target.closest('.burger__submenu__item').querySelector('.link__to__second').innerHTML ==='??????, ????????, ????????????' ) {
    const modalBlockInfoWrap = document.createElement('div')
    modalBlockInfoWrap.classList.add('modal__info-wrap')
    const modalTitle = document.createElement('p')
    modalTitle.classList.add('modal_title')
    modalTitle.innerHTML = '??????, ????????, ????????????'
    const modalInfoItems = document.createElement('div')
    modalInfoItems.classList.add('modal__info-items')
    modalInfoItems.innerHTML = `
    <ul>
                                                        <li>?????????????????? ?? ????????????????</li>
                                                        <li>??????????????????????????????????</li>
                                                        <li>?????????????? ??????????????<br></li>

                                                    </ul>
    `
    const modalInfoImg = document.createElement('img')
    modalInfoImg.classList.add('modal__info-imgage')
    modalInfoImg.classList.add('mdl')
    modalInfoImg.src = './src/images/promo/home.png'
    modalBlockInfoWrap.append(modalTitle, modalInfoItems ,modalInfoImg)
    modalInfo.appendChild(modalBlockInfoWrap)

    modalBlock.classList.remove('hide-modal')
    document.querySelector('html').style.overflow='hidden'
}
if (e.target.closest('.burger__submenu__item').querySelector('.link__to__second').innerHTML ==='?????????? ??????????????????' ) {
  const modalBlockInfoWrap = document.createElement('div')
  modalBlockInfoWrap.classList.add('modal__info-wrap')
  const modalTitle = document.createElement('p')
  modalTitle.classList.add('modal_title')
  modalTitle.innerHTML = '?????????? ??????????????????'
  const modalInfoItems = document.createElement('div')
  modalInfoItems.classList.add('modal__info-items')
  modalInfoItems.innerHTML = `
  <ul>
                                                        <li>??????????????????</li>
                                                        <li>?????? ?????????????????? ????????????<br></li>
                                                        <li>?????????????? ?? ????????????????????</li>
                                                    </ul>
  `
  const modalInfoImg = document.createElement('img')
  modalInfoImg.classList.add('modal__info-imgage')
  modalInfoImg.classList.add('mdl')
  modalInfoImg.src = './src/images/promo/sport.webp'
  modalBlockInfoWrap.append(modalTitle, modalInfoItems ,modalInfoImg)
  modalInfo.appendChild(modalBlockInfoWrap)

  modalBlock.classList.remove('hide-modal')
  document.querySelector('html').style.overflow='hidden'
}
if (e.target.closest('.burger__submenu__item').querySelector('.link__to__second').innerHTML ==='?????????????????????????? ????????????' ) {
  const modalBlockInfoWrap = document.createElement('div')
  modalBlockInfoWrap.classList.add('modal__info-wrap')
  const modalTitle = document.createElement('p')
  modalTitle.classList.add('modal_title')
  modalTitle.innerHTML = '?????????????????????????? ????????????'
  const modalInfoItems = document.createElement('div')
  modalInfoItems.classList.add('modal__info-items')
  modalInfoItems.innerHTML = `
  <ul>
  <li>??????????????????</li>
  <li>????????????????????????<br></li>
  <li>????????????????????</li>
</ul>
  `
  const modalInfoImg = document.createElement('img')
  modalInfoImg.classList.add('modal__info-imgage')
  modalInfoImg.classList.add('mdl')
  modalInfoImg.src = './src/images/promo/wheel.png'
  modalBlockInfoWrap.append(modalTitle, modalInfoItems ,modalInfoImg)
  modalInfo.appendChild(modalBlockInfoWrap)

  modalBlock.classList.remove('hide-modal')
  document.querySelector('html').style.overflow='hidden'
}
if (e.target.innerHTML ==='???????? ?????????? ??????????????????' || e.target.innerHTML ==='?????????? ??????????????????'   ) {
  const modalBlockInfoWrap = document.createElement('div')
  modalBlockInfoWrap.classList.add('modal__info-wrap')
  const modalTitle = document.createElement('p')
  modalTitle.classList.add('modal_title')
  modalTitle.innerHTML = '?????????? ??????????????????'
  const modalInfoImg = document.createElement('img')
  modalInfoImg.classList.add('modal__info-imgage')
  modalInfoImg.classList.add('mdl')
  modalInfoImg.src = './src/images/partners.png'
  modalBlockInfoWrap.append(modalTitle ,modalInfoImg)
  modalInfo.appendChild(modalBlockInfoWrap)

  modalBlock.classList.remove('hide-modal')
  document.querySelector('html').style.overflow='hidden'
}
if (e.target.innerHTML ==='????????????') {
  modalInfo.innerHTML = ""
  const modalBlockInfoWrap = document.createElement('div')
  modalBlockInfoWrap.classList.add('modal__info-wrap')
  const modalTitle = document.createElement('p')
  modalTitle.classList.add('modal_title')
  modalTitle.innerHTML = '????????????'
  const modalInfoImg = document.createElement('img')
  modalInfoImg.classList.add('modal__info-imgage')
  modalInfoImg.classList.add('mdl')
  modalInfoImg.src = './src/images/job.png'
  modalBlockInfoWrap.append(modalTitle ,modalInfoImg)
  modalInfo.appendChild(modalBlockInfoWrap)

  modalBlock.classList.remove('hide-modal')
  document.querySelector('html').style.overflow='hidden'
}

    })
  })
}
checkBurgerMenu()


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

//footer menu

const openMenu = document.querySelectorAll('.arrow__item');
openMenu.forEach((el) => {
  el.addEventListener('click', () => {
    el.classList.toggle('arrow__item-open')
    el.nextElementSibling.classList.toggle('open-content--show')
  });
})



