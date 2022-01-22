/*
* Veriables
* */
const fieldErrors = document.querySelectorAll('span.field-error');
const controls = document.querySelector('div.controls');
const firstStepinputFields = document.querySelectorAll('div.step:first-child div.field-wrapper input.field');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const mainForm = document.getElementById('mainForm');

/*
* Secondary functions
* */
function ajax(params) {
    var xhr = new XMLHttpRequest();
    var url = params.url || '';
    var body = params.body || '';
    var success = params.success;
    var error = params.error;

    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(body);
    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200 && typeof success === 'function') {
            success(xhr.response);
        } else if (xhr.readyState === 4 && xhr.status !== 200 && typeof error === 'function') {
            error(xhr.response);
        }
    };
    xhr.onerror = error || null;
}

/*
* Validation
* */
function checkRegExp(pattern, message, value) {
    return pattern.test(value) ? true : message;  
}

var validations = {
    firstName: [
        checkRegExp.bind(null, /^[A-Zа-я]{2,}$/i, 'Field may contain only letters and not be less than 2 letters'),
        checkRegExp.bind(null, /^[A-Zа-я]{2,64}$/i, 'Field may contain only letters and not be more than 64 letters'),
    ],
    lastName: [
        checkRegExp.bind(null, /^[A-Zа-я]{2,}$/i, 'Field may contain only letters and not be less than 2 letters'),
        checkRegExp.bind(null, /^[A-Zа-я]{2,64}$/i, 'Field may contain only letters and not be more than 64 letters'),
    ],
    email: [
        checkRegExp.bind(null,
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please enter valid email'),
    ],
    phone: [
        checkRegExp.bind(null, /^[0-9]{8}$/, 'Field may contain only 8 digits'),
    ],
    password: [
        checkRegExp.bind(null,
            /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\!\@\#\$\%\^\&\*\-])/,
            'Required at least one number (0-9), uppercase and lowercase letters (a-Z) and at least one special character (!@#$%^&*-)'),
            validatePasswords.bind(null,password2,"Must be equal to passwords"),
    ],
    zip: [
        checkRegExp.bind(null, /^[0-9]{5}$/, 'Field must include 5 digits and only consist of numeric values'),
    ],
    password2: [
        checkRegExp.bind(null,
            /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\!\@\#\$\%\^\&\*\-])/,
            'Required at least one number (0-9), uppercase and lowercase letters (a-Z) and at least one special character (!@#$%^&*-)'),
        validatePasswords.bind(null,password2,"Must be equal to passwords"),
    ]
};

function validateField(element) {
    let fieldValidation = validations[element.id];
    let result = {
        valid: true,
        element: element,
        message: ''
    };

    if (fieldValidation) {
        for (var i = 0, len = fieldValidation.length; i < len; i++) {
            let validationFunction = fieldValidation[i];
            let answer = validationFunction(element.value);
            if (typeof answer === 'string') {
                result.valid = false;
                result.message = answer;
                break;
            }
        }
    }

    return result;
}

/*

* Other function
* */
function toggleError(element, message) {
    var errorMessageElement = element.nextElementSibling && element.nextElementSibling.classList.contains('field-error')
        ? element.nextElementSibling
        : null;

    if(message === "Must be equal to passwords") {
        password2.nextElementSibling.innerHTML = "Must be equal to passwords"
    }
    else {
        errorMessageElement && message && (errorMessageElement.innerHTML = message);
        errorMessageElement && !message && (errorMessageElement.innerHTML = '');
    }
}

function changeSteps(element) {
    if (element.target.classList.contains('control_next')) {
        validateErrFields();
        /* isEmpty(firstStepinputFields); */
    }
    else if (element.target.classList.contains('control_prev')) {
        console.log("вернуть назад")
    }
}

function validatePasswords(pattern, message, value){
    /* console.log(pattern.value, value)
    if(pattern.value === value){
        return true;
    }
    return message; */
    console.log(password2.value, password.value)
    /* toggleError(password2,"message"); */
   if(password.value !== password2.value){
    return message;
    }
    password2.nextElementSibling.innerHTML = "";
    
}

function validateErrFields() {
    for(let i = 0; i < firstStepinputFields.length; i++) {
        toggleError(firstStepinputFields[i], validateField(firstStepinputFields[i]).message);
    }

    for (let i = 0; i < fieldErrors.length; i++){
        if (fieldErrors[i].innerHTML !== '') {
           /*  alert("Заполните все поля корректно"); */
            return;
        }
    }
}


function formOnchange(e) {
    if (e.target.dataset && e.target.dataset.validation !== undefined) {
        toggleError(e.target, validateField(e.target).message);
    }
}

function isEmpty(inputFields) {
    for (let i = 0; i < firstStepinputFields.length; i++) {
        if (inputFields[i].value === "") {
            /* alert("Заполните пустые поля"); */
            return false;
        }
    }
}


/*
* Listeners
* */
mainForm.addEventListener('change', formOnchange);
controls.addEventListener('click', changeSteps);


