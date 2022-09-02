export default class ReveiwPage {
    constructor(data) {
        this.data = data;
        this.index = 0;
        const template = document.createElement('template');
        template.innerHTML = ` <article class="review">
            <div class="img-container">
                <img src="${this.data[0].img}" id="person-img" alt="" />
            </div>
            <h4 id="author">${this.data[this.index].name}</h4>
            <p id="job">${this.data[this.index].job}</p>
            <p id="info">
                ${this.data[this.index].text}
            </p>
            <div class="button-container">
                <button class="prev-btn">
                <i class="fas fa-chevron-left"></i>
                </button>
                <button class="next-btn">
                <i class="fas fa-chevron-right"></i>
                </button>
            </div>
            <button class="random-btn">Surprise Me</button>
        </article>`;
        this.element = template.content.firstElementChild;
        const prevBtn = this.element.querySelector('.prev-btn');
        prevBtn.onclick = () => {
            this.prevListener && this.prevListener();
        };
        const nextBtn = this.element.querySelector('.next-btn');
        nextBtn.onclick = () => {
            this.nextListener && this.nextListener();
        };
        const surpriseBtn = this.element.querySelector('.random-btn');
        surpriseBtn.onclick = () => {
            this.surpriseListener && this.surpriseListener();
        };
    }
    setOnPrevListener(listener) {
        this.prevListener = listener;
    }
    setOnNextListener(listener) {
        this.nextListener = listener;
    }
    setOnSurpriseListener(listener) {
        this.surpriseListener = listener;
    }
    get reviewPage() {
        return this.element;
    }
}
