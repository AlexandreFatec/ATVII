import { Component } from "react";

type props = {
    tema: string
}

type state = {
    nome: string,
    valor: string
}

export default class FormularioCadastroServico extends Component<props, state> {
    constructor(props: props) {
        super(props);
        this.state = {
            nome: '',
            valor: ''
        };
    }

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const servico = {
            nome: this.state.nome,
            valor: parseFloat(this.state.valor)
        };

        console.log("Serviço cadastrado:", servico);

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
                                id="nomeServico"
                                type="text"
                                value={this.state.nome}
                                onChange={e => this.setState({ nome: e.target.value })}
                            />
                            <label htmlFor="nomeServico" className={this.state.nome ? "active" : ""}>Nome do Serviço</label>
                        </div>
                        <div className="input-field col s6">
                            <input
                                id="valorServico"
                                type="number"
                                value={this.state.valor}
                                onChange={e => this.setState({ valor: e.target.value })}
                            />
                            <label htmlFor="valorServico" className={this.state.valor ? "active" : ""}>Valor (R$)</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} type="submit" name="action">
                                Cadastrar Serviço
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
