// На сторінці є форма "Новий користувач"
// У форму вже введені дані користувача
// Потрібно отримати дані з усіх полів та повернути та подати у вигляді наступних змінних
// name, phoneNumber, dataOfBirth, emailAddress
// 

function getUserData() {
    const form = document.querySelector('.array fieldset');
    
    const name = form.querySelector('[name="fio"]').value;
    const phoneNumber = form.querySelector('[name="phone"]').value;
    const dataOfBirth = form.querySelector('[name="birthday"]').value;
    const emailAddress = form.querySelector('[name="email"]').value;
    
    return {
        name,
        phoneNumber,
        dataOfBirth, 
        emailAddress
    };
}


module.exports = getUserData;