import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./cadastro/formularioCadastroCliente";
import ListaCliente from "./clientes/listaCliente";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log("Mudando para:", novaTela)
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = (
            <BarraNavegacao
                seletorView={this.selecionarView}
                tema="purple lighten-4"
                botoes={['Clientes', 'Cadastros', 'Produtos', 'Servicos']}
            />
        )

        switch (this.state.tela) {
            case 'Clientes':
                return (
                    <>
                        {barraNavegacao}
                        <ListaCliente tema="purple lighten-4" />
                    </>
                )
            case 'Cadastros':
                return (
                    <>
                        {barraNavegacao}
                        <FormularioCadastroCliente tema="purple lighten-4" />
                    </>
                )
            case 'Produtos':
                return (
                    <>
                        {barraNavegacao}
                        <div className="container"><h5>Cadastro de Produtos (em breve)</h5></div>
                    </>
                )
            case 'Servicos':
                return (
                    <>
                        {barraNavegacao}
                        <div className="container"><h5>Cadastro de Serviços (em breve)</h5></div>
                    </>
                )
            default:
                return (
                    <>
                        {barraNavegacao}
                        <div className="container"><h5>Bem-vindo!</h5></div>
                    </>
                )
        }
    }
}
