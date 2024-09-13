class Bar extends HTMLElement {

    static get observedAttributes(){
    }
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }
    connectedCallback(){
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue){
        if(oldValue !== newValue){
            this[propName] = newValue;
        }
    }
    render(){
        this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="./src/components/Bar/bar.css">

    <header class = 'container'>

        <div class ='Todo'>
            <div class = 'contenedorlogoimg'>
                <a href="./index.html"><img src="./src/assets/img/Activision.png" alt="Activision Logo"></a>
            </div>

            <nav>
                <ul class = 'listabarra'>
                    <li><a href="#">Games</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
            </nav>
        </div>

            <div class = 'botones'>

                <div class = 'botonregister'>
                    <a href="index.html">Sing up</a>
                </div>

                <div class = 'botonlogin'>
                    <a href="index.html">LogIn</a>
                </div>

            </div>

        </header>
    `;
    }
}
customElements.define('navbar-component', Bar);
export default Bar;