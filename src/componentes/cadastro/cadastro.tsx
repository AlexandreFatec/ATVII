// src/componentes/cadastro/Cadastro.tsx
import { Component } from "react";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroServico from "./formularioCadastroServico";

type props = {
    tema: string
};

type state = {
    opcaoSelecionada: "cliente" | "produto" | "servico" | null
};

export default class Cadastro extends Component<props, state> {
    constructor(props: props) {
        super(props);
        this.state = {
            opcaoSelecionada: null
        };
    }

    selecionarFormulario(opcao: "cliente" | "produto" | "servico") {
        this.setState({ opcaoSelecionada: opcao });
    }

    render() {
        const { opcaoSelecionada } = this.state;
        const estiloBotao = `btn waves-effect waves-light ${this.props.tema}`;

        if (opcaoSelecionada === "cliente") {
            return <FormularioCadastroCliente tema={this.props.tema} />;
        }

        if (opcaoSelecionada === "produto") {
            return <FormularioCadastroProduto tema={this.props.tema} />;
        }

        if (opcaoSelecionada === "servico") {
            return <FormularioCadastroServico tema={this.props.tema} />;
        }

        return (
            <div className="container">
                <h5>Escolha uma opção de cadastro:</h5>
                <button
                    className={estiloBotao}
                    onClick={() => this.selecionarFormulario("cliente")}
                >
                    Cadastrar Cliente
                </button>{" "}
                <button
                    className={estiloBotao}
                    onClick={() => this.selecionarFormulario("produto")}
                >
                    Cadastrar Produto
                </button>{" "}
                <button
                    className={estiloBotao}
                    onClick={() => this.selecionarFormulario("servico")}
                >
                    Cadastrar Serviço
                </button>
            </div>
        );
    }
}
