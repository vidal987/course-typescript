
export abstract class View<T>{

    // o modificador protected permite com oque os filhos 
    // que herdam da classe pai acessem uma propriedade
    protected elemento: HTMLElement;

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor);
    }

    //Obriga as classes filhas implementar o método
    //OBRIGAÇÃO DA CLASSE FILHA DEFINIR 
    abstract template(model: T): string;


    //OBRIGAÇÃO DA CLASSE PAI DEFINIR O QUE OCORRE 
    update(model: T) : void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}