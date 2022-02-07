import Fetch from "./fetch.js";
import { linkAlbum } from "./regex.js";

export default class Value {
    constructor(
        input = "[data-input]",
        button = "[data-button]",
        wrong = "[data-wrong]"
    ) {
        this.input = document.querySelector(input);
        this.button = document.querySelector(button);
        this.wrong = document.querySelector(wrong);
    }

    // Checa a autenticidade do valor inserido...
    checkValue() {
        this.input.value = this.formatValue();
        return linkAlbum.test(this.input.value);
    }

    // Formata o valor inserido para evitar conflitos entre plataformas...
    formatValue() {
        return this.input.value.replace(linkAlbum, "$1");
    }

    // Exibe a mensagem de erro ao usuário...
    wrongValue(message) {
        this.wrong.classList.add("active");
        this.wrong.innerText = message;
        return this;
    }

    // Toma uma decisão com base na autenticidade do valor inserido...
    validateValue(e) {
        e.preventDefault();
        if (this.checkValue()) {
            new Fetch(this.input, this.wrong).init();
            this.wrong.classList.remove("active");
        } else {
            this.wrongValue("💀 URL inválida. Tente novamente!");
            this.input.value = "";
        }
        return this;
    }

    // Adiciona um evento ao botão do formulário...
    addEvents() {
        this.button.addEventListener("click", this.validateValue);
        return this;
    }

    // Mantém a referência correta do método...
    bindEvents() {
        this.validateValue = this.validateValue.bind(this);
        return this;
    }

    // Inicializa a classe...
    init() {
        this.bindEvents();
        this.addEvents();
        return this;
    }
}
