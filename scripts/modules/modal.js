export default class Modal {
    constructor(modal = "[data-modal]", closeButton = "[data-modal-close]") {
        this.modal = document.querySelector(modal);
        this.closeButton = document.querySelector(closeButton);
    }

    // Abre o modal...
    openModal() {
        this.modal.classList.add("active");
        return this;
    }

    // Fecha o modal...
    closeModal() {
        console.log(this.closeButton);
        this.modal.classList.remove("active");
        return this;
    }

    // Adiciona um evento no botão de fechar o modal...
    addEvents() {
        this.closeButton.addEventListener("click", this.closeModal);
        return this;
    }

    // Mantém a referência correta do método...
    bindEvents() {
        this.closeModal = this.closeModal.bind(this);
        return this;
    }

    // Inicializa a classe...
    init() {
        this.openModal();
        this.bindEvents();
        this.addEvents();
        return this;
    }
}
