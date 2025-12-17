import { Negociacao } from "./negociacao.js";

// private negociacoes: Array<Negociacao> = [];
// lista(): ReadonlyArray<Negociacao> {

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}

