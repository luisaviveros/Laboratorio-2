import * as components from './components/indexpapa.js';
import { NoticiasCardsData } from './data/NoticiasCardsData/NoticiasCardsData.js';

class Container extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const container = document.createElement('div'); 
    container.classList.add('noticiascardcontenedor'); 

    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="./src/components/newsCards/newsCards.css">
      <navbar-component></navbar-component>

      <banner-component
        img="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/08/call-duty-modern-warfare-3-3106382.jpg"
        alt="image 1"
        logo="./src/assets/img/logote.png"
        description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."
        button00="lorem ipsum"
        button01="lorem ipsum"
      ></banner-component>

      <news-logos
        text="lorem impsum dolor"
        img="./src/assets/img/logo.png"
        img1="./src/assets/img/logo.png"
        img2="./src/assets/img/logo.png"
        img3="./src/assets/img/logo.png"
        img4="./src/assets/img/logo.png"
      ></news-logos>
    `;

    NoticiasCardsData.forEach((e) => {
      const newsCard = document.createElement('news-cards');
      newsCard.setAttribute('image', e.image);
      newsCard.setAttribute('date', e.date);
      newsCard.setAttribute('title', e.title);
      newsCard.setAttribute('description', e.description);
      newsCard.setAttribute('more', 'Read More');
      container.appendChild(newsCard); 
    });

    this.shadowRoot.appendChild(container);


    this.shadowRoot.innerHTML += `
      <support-banner
        title="loremp ipsum!"
        description='loremp ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.'
        image='https://www.elespectador.com/resizer/v2/P2PD4BBGERENJMVJ7EG7OCRPHA.png?auth=38ee835ecc5c34b2c26b1eb633eb7c044ec60dd81f12fb19ca10e538ed196927&width=920&height=613&smart=true&quality=60'>
      </support-banner>
    `;

  
    this.shadowRoot.innerHTML += `
     <section class="sombracontenedor">     
    <h1 class="title-community">COMMUNITY</h1>   
    <div class="sombra card">
        <community-component
            picture="https://www.elespectador.com/resizer/v2/P2PD4BBGERENJMVJ7EG7OCRPHA.png?auth=38ee835ecc5c34b2c26b1eb633eb7c044ec60dd81f12fb19ca10e538ed196927&width=920&height=613&smart=true&quality=60"
            username="loremp ipsum"
            icon="./src/assets/img/Ig.png"
        ></community-component>

        <community-component
            picture="https://www.elespectador.com/resizer/v2/P2PD4BBGERENJMVJ7EG7OCRPHA.png?auth=38ee835ecc5c34b2c26b1eb633eb7c044ec60dd81f12fb19ca10e538ed196927&width=920&height=613&smart=true&quality=60"
            username="loremp ipsum"
            icon="./src/assets/img/Ig.png"
        ></community-component>

        <community-component
            picture="https://www.elespectador.com/resizer/v2/P2PD4BBGERENJMVJ7EG7OCRPHA.png?auth=38ee835ecc5c34b2c26b1eb633eb7c044ec60dd81f12fb19ca10e538ed196927&width=920&height=613&smart=true&quality=60"
            username="loremp ipsum"
            icon="./src/assets/img/Ig.png"
        ></community-component>
    </div>
</section>
    `;

    this.shadowRoot.innerHTML += `
      <havefun-component
        h2="Lorem ipsum dolor"
        description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
        teams="lorem ipsum"
        li00="lorem ipsum"
        li01="loremp ipsum"
        li02="loremp ipsum"
        li03="loremp ipsum"
        li04="loremp ipsum"
        li05="loremp ipsum"
        li06="loremp ipsum"
        li07="loremp ipsum"
        li08="loremp ipsum"
        li09="loremp ipsum"
      ></havefun-component>
    `;
  }
}

customElements.define('app-container', Container);