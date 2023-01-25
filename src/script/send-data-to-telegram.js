
function addMaskFromInputCallBackForm(path, maskValue) {
    function setCursorPosition(pos, elem) {
        elem.focus();
        if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
        else if (elem.createTextRange) {
            let range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select();
        }
    }

    function mask(event) {
        let matrix = maskValue,
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");

        if (def.length >= val.length) val = def;

        this.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
        });

        if (event.type === "blur") {
            if (this.value.length === 2) this.value = "";
        } else setCursorPosition(this.value.length, this);
    }

    let input = document.querySelector(path);

    if (input) {

        input.addEventListener("input", mask, false);

        input.addEventListener("focus", mask, false);

        input.addEventListener("blur", mask, false);
    }



}
console.log(window.location.host)

addMaskFromInputCallBackForm('.contacts__page__info .contact__form input[type="tel"]', '___________________________________________________')


function sendData() {

    const inputName = document.querySelector('.contacts__page__info .contact__form input[name="username"]')
    const inputPhone = document.querySelector('.contacts__page__info .contact__form input[name="usernumber"]')
    const inputEmail = document.querySelector('.contacts__page__info .contact__form input[name="useremail"]')
    const inputComment = document.querySelector('.contacts__page__info .contact__form textarea')
    const homePageInputEmail = document.querySelector('.news .news__form input[name="news__email"]')


    let formData = new FormData()

    if (inputName) {
        formData.append('name', inputName.value)
    }
    if (inputPhone) {
        formData.append('phone', inputPhone.value)
    }
    if (inputEmail) {
        formData.append('email', inputEmail.value)
    }
    if (inputComment) {
        formData.append('comment', inputComment.value)
    }
    if (homePageInputEmail) {
        formData.append('email', homePageInputEmail.value)
    }




    fetch('/send-data-telegram', {
        method: 'POST',
        body: formData,
    })
        .then((response) => {
            if (response.status == 200) {
                alert('Спасибо, данные успешно отправлены')
            }
            response.json()
        })
        .catch((error) => {
            alert('Ошибка отправки')
            console.error('Error:', error);
        });
}

function isValidEmail() {
    const inputEmail = document.querySelector('.news .form__container .news__form input')

    return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(inputEmail.value);
}

function clearValueInputs() {
    const inputName = document.querySelector('.contacts__page__info .contact__form input[name="username"]')
    const inputPhone = document.querySelector('.contacts__page__info .contact__form input[name="usernumber"]')
    const inputEmail = document.querySelector('.contacts__page__info .contact__form input[name="useremail"]')
    const inputComment = document.querySelector('.contacts__page__info .contact__form textarea')
    const homePageInputEmail = document.querySelector('.news .news__form input[name="news__email"]')

    const inputsArr = [inputName,inputPhone,inputEmail,inputComment,homePageInputEmail]

    inputsArr.forEach((el)=>{
        if (el) {
            el.value=''
        }
    })
}

const inputName = document.querySelector('.contacts__page__info .contact__form input[name="username"]')
const inputPhone = document.querySelector('.contacts__page__info .contact__form input[name="usernumber"]')
const inputEmail = document.querySelector('.contacts__page__info .contact__form input[name="useremail"]')
const inputComment = document.querySelector('.contacts__page__info .contact__form textarea')
const homePageInputEmail = document.querySelector('.news .news__form input[name="news__email"]')
const contactForm = document.querySelector('contact__form')

function addClickToBtnSend() {
    const btnSend = document.querySelector('.contacts__page__info .contact__form .btn__wrap button')
    const homePageBtnSend = document.querySelector('.news .form__container .news__form button')
    if (btnSend) {
        btnSend.addEventListener('click', (e) => {
            e.preventDefault()
            let error = formValidate(contactForm)
            if (error === 0) {
                sendData()
                clearValueInputs()
            } else {
                alert('Заполните обязательные поля!')
            }


        })
    }
    if (homePageBtnSend) {
        homePageBtnSend.addEventListener('click', (e) => {
            e.preventDefault()
            console.log();
            if (isValidEmail()) {
                sendData()
                clearValueInputs()
            } else {
                alert('Не верно указан Email')
            }

        })
    }

}

addClickToBtnSend()



function formValidate(contactForm) {
    let error = 0

    function addFormError(input) {
        input.parentElement.classList.add('_error')
        input.classList.add('_error')
    }
    function removeFormError(input) {
        input.parentElement.classList.remove('_error')
        input.classList.remove('_error')
    }

    let formReq = document.querySelectorAll('.required')

    for (let i = 0; i < formReq.length; i++) {
        const input = formReq[i]
        removeFormError(input)

        if (input.classList.contains('usernumber')) {
            if (!input.value === 11) {
                addFormError(input)
                error++
            }
        } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
            addFormError(input)
            error++
        } else {
            if (input.value === '') {
                addFormError(input)
                error++
            }
        }


    }
    return error
}