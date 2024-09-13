class SupportBanner extends HTMLElement {
    static get observedAttributes() {
        return ['title', 'description', 'image']
    }

    constructor() {
        super()
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render()
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[propName] = newValue
        }
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/supportBanner/supportBanner.css">
        <section>
            <div class='soporteTodo'>
                <div class='bannercosotext'>
                    <h1>${this.title}</h1>
                    <p>${this.description}</p>
             <div class="botonver">
                <div class="botonlogin">
                    <a href="index.html">Loremp ipsum</a>
                </div>
            </div>
                </div>
                <div class='bannercosoimg'>
                    <img src="${this.image}" alt="bannersoporte" />
                </div>
            </div>
        </section>
        `
    }
}

customElements.define('support-banner', SupportBanner)
export default SupportBanner