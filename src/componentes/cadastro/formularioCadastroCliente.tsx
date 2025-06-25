import { Component } from "react";

type props = {
    tema: string
}

type state = {
    nome: string,
    nomeSocial: string,
    genero: string,
    telefone: string,
    rg: string,
    cpf: string
}

export default class FormularioCadastroCliente extends Component<props, state> {
    constructor(props: props) {
        super(props);
        this.state = {
            nome: '',
            nomeSocial: '',
            genero: '',
            telefone: '',
            rg: '',
            cpf: ''
        };
    }

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const { nome, nomeSocial, genero, telefone, rg, cpf } = this.state;
        const cliente = {
            nome,
            nomeSocial,
            genero,
            telefone,
            rg,
            cpf
        };

        console.log("Cliente cadastrado:", cliente);

        this.setState({
            nome: '',
            nomeSocial: '',
            genero: '',
            telefone: '',
            rg: '',
            cpf: ''
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
                                id="nome"
                                type="text"
                                value={this.state.nome}
                                onChange={e => this.setState({ nome: e.target.value })}
                            />
                            <label htmlFor="nome" className={this.state.nome ? "active" : ""}>Nome</label>
                        </div>
                        <div className="input-field col s6">
                            <input
                                id="nomeSocial"
                                type="text"
                                value={this.state.nomeSocial}
                                onChange={e => this.setState({ nomeSocial: e.target.value })}
                            />
                            <label htmlFor="nomeSocial" className={this.state.nomeSocial ? "active" : ""}>Nome Social</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input
                                id="genero"
                                type="text"
                                value={this.state.genero}
                                onChange={e => this.setState({ genero: e.target.value })}
                            />
                            <label htmlFor="genero" className={this.state.genero ? "active" : ""}>Gênero</label>
                        </div>
                        <div className="input-field col s6">
                            <input
                                id="telefone"
                                type="text"
                                value={this.state.telefone}
                                onChange={e => this.setState({ telefone: e.target.value })}
                            />
                            <label htmlFor="telefone" className={this.state.telefone ? "active" : ""}>Telefone</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <input
                                id="rg"
                                type="text"
                                value={this.state.rg}
                                onChange={e => this.setState({ rg: e.target.value })}
                            />
                            <label htmlFor="rg" className={this.state.rg ? "active" : ""}>RG</label>
                        </div>
                        <div className="input-field col s6">
                            <input
                                id="cpf"
                                type="text"
                                value={this.state.cpf}
                                onChange={e => this.setState({ cpf: e.target.value })}
                            />
                            <label htmlFor="cpf" className={this.state.cpf ? "active" : ""}>CPF</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} type="submit" name="action">
                                Cadastrar
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
