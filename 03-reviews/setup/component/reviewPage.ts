import { reviewData } from '../app';

type OnPrevListener = () => void;
type OnNextListener = () => void;
type OnSurpriseListener = () => void; 

export default class ReveiwPage  {
    private index = 0;
    private readonly element : HTMLElement;
    prevListener?: OnPrevListener;
    nextListener?: OnNextListener;
    surpriseListener?: OnSurpriseListener;

    constructor(private data: reviewData) {
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

        this.element = template.content.firstElementChild! as HTMLElement;

        const prevBtn = this.element.querySelector('.prev-btn')! as HTMLButtonElement;
        prevBtn.onclick = () => { 
            this.prevListener && this.prevListener();
        }

        const nextBtn = this.element.querySelector('.next-btn')! as HTMLButtonElement;
        nextBtn.onclick = () => {
            this.nextListener && this.nextListener();
        }

        const surpriseBtn = this.element.querySelector('.random-btn')! as HTMLButtonElement;
        surpriseBtn.onclick = () => {
            this.surpriseListener && this.surpriseListener();
        }
    }

    setOnPrevListener(listener: OnPrevListener) {
        this.prevListener = listener;
    }

    setOnNextListener(listener: OnNextListener) {
        this.nextListener = listener;
    }

    setOnSurpriseListener(listener: OnSurpriseListener) {
        this.surpriseListener = listener;
    }

    get reviewPage(): HTMLElement {
        return this.element;
    }
}