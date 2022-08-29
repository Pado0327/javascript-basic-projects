
export default class ReveiwPage  {
    private template; 
    constructor(private data: object) {
        this.template = document.createElement('template');
        this.template.innerHTML = ` <article class="review">
            <div class="img-container">
                <img src="" id="" alt="" />
            </div>
            <h4 id="author"></h4>
            <p id="job"></p>
            <p id="info">
            </p>
            <div class="button-container">
                <button class="prev-btn">
                <i class="fas fa-chevron-left"></i>
                </button>
                <button class="prev-btn">
                <i class="fas fa-chevron-right"></i>
                </button>
            </div>
            <button class="random-btn">Surprise Me</button>
        </article>`;
    }

    get reviewPage(): HTMLElement {
        return this.template.content.firstElementChild! as HTMLElement;
    }
}