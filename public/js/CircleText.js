class CircleText {
    constructor(selector = '.circle__text', text = 'АРЕНДА ДОМИКОВ') {
        this.selector = selector;

        // Дублируем текст три раза и добавляем пробел после каждого
        this.text = (text + ' ').repeat(3); // Убираем trim(), чтобы сохранить последний пробел
        this.circleElement = document.querySelector(this.selector);
        this.render();
    }

    createSpan(char, index) {
        const angle = (360 / this.text.length) * index; // Угол для текущего символа
        return `<span style="--rot:${angle}deg">${char}</span>`;
    }

    render() {
        const spans = this.text.split('').map((char, index) => this.createSpan(char, index)).join('');
        this.circleElement.innerHTML = spans;
    }
}

export default CircleText;
