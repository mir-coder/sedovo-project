import 'dotenv/config';  
import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import cors from 'cors'; // Импортируем cors

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware для обработки JSON
const allowedOrigins = ['http://127.0.0.1:5500'];

app.use(cors({
    origin: function(origin, callback) {
        // Разрешаем запросы без источника (например, для мобильных приложений)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'Этот источник не разрешен';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));
app.use(bodyParser.json());
app.use(express.static('public'));

// Эндпоинт для отправки сообщения в Telegram
app.post('/send-message', async (req, res) => {
    const { message } = req.body;
    const chatId = process.env.CHAT_ID;
    const token = process.env.BOT_TOKEN;

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: 'HTML' 
            })
        });
        
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({ error: 'Failed to send message' });
    }
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
