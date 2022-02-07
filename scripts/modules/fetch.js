import Modal from "./modal.js";
import Value from "./value.js";
import { linkCover } from "./regex.js";

export default class Fetch {
    constructor(input, wrong) {
        this.input = input;
        this.wrong = wrong;
    }

    // Encontra a URL da capa do álbum requisitado...
    findAlbumCover(text) {
        return text.match(linkCover)[0];
    }

    // Coloca o resultado encontrado na tela...
    putOnScreen(text) {
        const image = document.querySelector('[data-result="image"]');
        const download = document.querySelector('[data-result="download"]');
        image.src = this.findAlbumCover(text);
        download.href = this.findAlbumCover(text);
        return this;
    }

    // Faz a requisição da URL inserida pelo usuário...
    fetch() {
        fetch(`https://cors-anywhere.herokuapp.com/${this.input.value}`)
            .then((response) => response.text())
            .then((text) => {
                new Modal().init();
                this.putOnScreen(text);
                this.input.value = "";
            })
            .catch((err) => {
                new Value().wrongValue("💀 Capa não encontrada.");
                console.log(err);
                this.input.value = "";
            });
        return this;
    }

    // Inicializa a classe...
    init() {
        this.fetch();
        return this;
    }
}
