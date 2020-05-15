class SearchBar extends HTMLElement {
    constructor() {
        super()
        this.shadowDom = this.attachShadow({
            mode: 'open'
        })
    }

    connectedCallback() {
        this.render()
    }

    set clickEvent(event) {
        this._clickEvent = event
        this.render()
    }

    get value() {
        return this.shadowDom.querySelector('#searchElement').value
    }

    render() {

        this.shadowDom.innerHTML = `
        <style>
        .search-container {
                max-width: 800px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                padding: 16px;
                border-radius: 5px;
                display: flex;
                position: sticky;
                top: 10px;
                background-color: white;
            }

            .search-container > input {
                width: 100% ;
                padding: 16px;
                border: 0;
                border-bottom: 1px solid cornflowerblue;
                font-weight: bold;
            }

            .search-container > input: focus {
                outline: 0;
                border-bottom: 2px solid cornflowerblue;
            }

            .search-container > input: focus::placeholder {
                font-weight: bold;
            }

            .search-container > input::placeholder {
                color: cornflowerblue;
                font-weight: normal;
            }

        @media screen and(max-width: 550px) {
            .search-container {
                    flex-direction: column;
                    position: static;
                }

                .search-container > input {
                    width: 100 % ;
                    margin-bottom: 12px;
                }
        }
        </style>
        <div id="search-container" class="search-container">
            <input placeholder="Search football club" id="searchElement" type="search">
        </div>`
        // <button id="searchButtonElement" type="submit">Search</button>

        let kadal = this.shadowDom.querySelector('#searchElement').addEventListener('keyup', this._clickEvent)

    }
}

customElements.define('search-bar', SearchBar)