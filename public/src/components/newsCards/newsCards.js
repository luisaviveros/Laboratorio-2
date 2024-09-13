class NewsCards extends HTMLElement {
    static get observedAttributes() {
        return ['image', 'date', 'title', 'description', 'more'];
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[propName] = newValue;
            this.render();
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/newsCards/newsCards.css">
        <section class="container">
            <div class="contenedorimg">
                <img src="${this.image}" alt="Noticias imagen"/>
            </div>
            <div class="contenedordeTexto">
                <p>${this.date}</p>
                <h2>${this.title}</h2>
                <p>${this.description}</p>
                <button>${this.more}</button>
            </div>
        </section>
        `;
    }
}

customElements.define('news-cards', NewsCards);
export default NewsCards;