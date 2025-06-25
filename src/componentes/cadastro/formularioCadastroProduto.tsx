import { Component } from "react";

type props = {
    tema: string
}

type state = {
    nome: string,
    valor: string
}

export default class FormularioCadastroProduto extends Component<props, state> {
    constructor(props: props) {
        super(props);
        this.state = {
            nome: '',
            valor: ''
        };
    }

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const produto = {
            nome: this.state.nome,
            valor: parseFloat(this.state.valor)
        };

        console.log("Produto cadastrado:", produto);

        this.setState({
            nome: '',
            valor: ''
        });
    }

    render() {
        const estiloBotao = `btn waves-effect waves-light ${this.props.tema}`;

        return (
            <div className="row">
                <form className="col s12" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input
                                id="nomeProduto"
                                type="text"
                                value={this.state.nome}
                                onChange={e => this.setState({ nome: e.target.value })}
                            />
                            <label htmlFor="nomeProduto" className={this.state.nome ? "active" : ""}>Nome do Produto</label>
                        </div>
                        <div className="input-field col s6">
                            <input
                                id="valorProduto"
                                type="number"
                                value={this.state.valor}
                                onChange={e => this.setState({ valor: e.target.value })}
                            />
                            <label htmlFor="valorProduto" className={this.state.valor ? "active" : ""}>Valor (R$)</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} type="submit" name="action">
                                Cadastrar Produto
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
