import myChart from "../component/myChart.js";

class InputDate extends HTMLElement {
  constructor() {
    super();
    this.shadowDom = this.attachShadow({
      mode: "open",
    });

    this.val = "";
  }

  connectedCallback() {
    this.render();
  }

  /**
   * @param {any} event
   */
  set value(event) {
    this.val = event;
  }

  get value() {
    return this.val;
  }

  render() {
    let tahun = new Date().getUTCFullYear();
    let mon = new Date().getDate();
    this.shadowDom.innerHTML = `
                    <style>
                    .tgl {
                        padding: .25em;
                        width:85%;
                        outline: none;
                        color: grey;
                        border: 1px solid lightgreen;
                        border-radius: 5px;
                        }
                    </style>
                    <input type="month" class="tgl" placeholder="${this.tahun}-${this.bulan}" required>
                    `;
    let bulan = this.shadowDom.querySelectorAll(".tgl");

    bulan.forEach((v) => {
      v.min = `${tahun}-01`;
      v.max = `${tahun}-12`;
      v.value = `${tahun}-${mon}`;
      let ll = v.addEventListener("change", (e) => {
        this.value = e.target.value;
        myChart.charts(this.value);
        // console.log(this.value)
      });
    });
    // console.log(this.shadowDom);
  }
}

customElements.define("input-date", InputDate);