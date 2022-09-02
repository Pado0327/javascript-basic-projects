import ReveiwPage from './component/reviewPage.js';

export type reviewData = Array<{
    id: number,
    name: string,
    job: string,
    img: string,
    text: string
}>

const reviews : reviewData = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];
  
class App {
    private index : number = 0;

    constructor(appRoot: HTMLElement) {
        const reviewPage = new ReveiwPage(reviews);
        appRoot.appendChild(reviewPage.reviewPage);

        reviewPage.setOnPrevListener(this.handlePrevBtnEvent);
        reviewPage.setOnNextListener(this.handleNextBtnEvent);
        reviewPage.setOnSurpriseListener(this.handleSupriseBtnEvent);
    }

    handlePrevBtnEvent = () => {
      if(this.index > 0) {
        this.index--;
        this.updateContents(this.index);
      } else if (this.index === 0 ) {
        this.index = reviews.length - 1;
        this.updateContents(this.index);
      }
    }

    handleNextBtnEvent = () => {
      if(this.index < 3) {
        this.index++;
        this.updateContents(this.index);
      } else if (this.index === 3 ) {
        this.index = 0;
        this.updateContents(this.index);
      }
    }

    handleSupriseBtnEvent = () => {
      this.index = Math.floor(Math.random() * 4);
      this.updateContents(this.index);
    }

    updateContents = (index : number) => {
      const img = document.querySelector('#person-img')! as HTMLImageElement;
      const author = document.querySelector('#author')! as HTMLHeadingElement;
      const job = document.querySelector('#job')! as HTMLParagraphElement;
      const text = document.querySelector('#info')! as HTMLParagraphElement;
      img.src = reviews[index].img;
      author.textContent = reviews[index].name;
      job.textContent = reviews[index].job;
      text.textContent = reviews[index].text;
    }
}

new App(document.querySelector('.container')! as HTMLElement);