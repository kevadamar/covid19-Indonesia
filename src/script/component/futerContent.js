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
                h6{
                    padding: 13.9px;
                    background: #e60649;
                    color: white;
                    text-align:center;
                    letter-spacing: 2px
                }
                a {
                    text-decoration:none;
                    color:white
                }
                </style>
                <h6>&copy;2020 <a href="https://www.linkedin.com/in/keva-damar-galih-10708b190/" target="_blank">Keva</a></h6>
            `

    }
}

customElements.define('futer-content', FuterContent)