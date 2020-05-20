class FuterContent extends HTMLElement {

    constructor() {
        super()
        this.shadowDom = this.attachShadow({
            mode: 'closed'
        })
    }

    connectedCallback() {
        this.render()
    }

    render() {

        this.shadowDom.innerHTML = `
                <style>
                *{
                    margin:0;
                    padding:0;
                    border-sizing:border-box
                }
                h5{
                    margin-top:.7em;
                    text-align:center;
                    letter-spacing: 2px
                }
                a {
                    text-decoration:none;
                    color:white
                }
                </style>
                <h5 id="futer-1">&copy;2020 Keva</h5>
            `
    }
}

customElements.define('futer-content', FuterContent)