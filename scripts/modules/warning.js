export default class Warning {
    constructor(
        area = '[data-warning="area"]',
        close = '[data-warning="close"]'
    ) {
        this.area = document.querySelector(area);
        this.close = document.querySelector(close);
    }

    // Fecha o aviso...
    closeWarning(e) {
        e.preventDefault();
        this.area.classList.remove("active");
    }

    // Adiciona um evento ao botão...
    addEvents() {
        this.close.addEventListener("click", this.closeWarning);
    }

    // Mantém a referência correta do método...
    bindEvents() {
        this.closeWarning = this.closeWarning.bind(this);
    }

    // Inicializa a classe...
    init() {
        this.bindEvents();
        this.addEvents();
        return this;
    }
}
