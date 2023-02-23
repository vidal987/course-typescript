export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    //OBRIGAÇÃO DA CLASSE PAI DEFINIR O QUE OCORRE 
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
