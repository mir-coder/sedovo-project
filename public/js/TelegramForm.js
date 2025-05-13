export default class TelegramForm {
    constructor() {
        this.init(); // Нет необходимости передавать токен и chatId
    }

    init() {
        const form = document.getElementById('feedbackForm');
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Предотвращаем стандартное поведение формы
            this.handleSubmit(form); // Обрабатываем отправку формы
        });

        // Обработчик для кнопки закрытия модального окна
        document.getElementById('close-modal').addEventListener('click', () => {
            document.getElementById('modal').style.display = 'none'; // Закрываем модальное окно
        });
    }

    handleSubmit(form) {
        const name = form['name'].value;
        const phone = form['phone'].value;
        const arrivalDate = form['arrivalDate'].value;
        const departureDate = form['departureDate'].value;
        const apartments = form['select-apartments'].value;
        const selectedApartmentText = form['select-apartments'].options[form['select-apartments'].selectedIndex].text;
        const carPresence = form.querySelector('.checkbox__input').checked ? 'Да' : 'Нет';
 
        const message = `
 Новый запрос на подбор номера:
 
 👤  <b>Ф.И.О:</b> ${name}
 ☎️  <b>Телефон:</b> ${phone}
 🗓  <b>Дата заезда:</b> ${arrivalDate}
 🗓  <b>Дата выезда:</b> ${departureDate}
 🏠  <b>Номер:</b> ${selectedApartmentText}
 🚘  <b>Наличие автомобиля:</b> ${carPresence}
        `;
 
        this.sendMessage(message).then(() => {
            document.getElementById('modal').style.display = 'block';
            form.reset(); // Сбросить форму
        });
    }
 

    sendMessage(message) {
        const data = {
            message: message,
        };
 
        return fetch('http://127.0.0.1:3000/send-message', { // Замените порт на 3000 или порт, на котором работает ваш сервер
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка при отправке сообщения в Telegram');
            }
            return response.json();
        })
        .catch(error => {
            console.error(error);
        });
    }
}
