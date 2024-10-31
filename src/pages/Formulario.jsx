import React, {useState} from 'react';
import styles from '../assets/css/formulario.module.css'
import axios from 'axios'
import { Link } from 'react-router-dom';
function Formulario() {
    {/* Primeiro passo: */}
    {/* Pegar todos os valores dos campos, pode ser input ou textarea */}
    const [nome, setNome] = useState('')
    const [codCid, setCodCid] = useState('')
    const [obsLaudo, setObsLaudo] = useState('')
    const [dataLaudo, setDataLaudo] = useState('')

    {/* Segundo passo: */} 
    {/* Criar uma função para cada campo */}

    {/* Esse é para o nome, faça o mesmo com todos */}
    const handleInputNome = (event) => {
        setNome(event.target.value)
    }

    const handleInputCod = (event) => {
        setCodCid(event.target.value)
    }
    const handleInputObs = (event) => {
        setObsLaudo(event.target.value)
    }
    const handleInputData = (event) => {
        setDataLaudo(event.target.value)
    }

    {/* Terceiro passo: */}
    {/* Adicionar o value e o onChange nos campos */}
    {/* Exemplo: */}
    {/* <input type="text" value={nome} onChange={handleInputNome} /> */}
    {/* <input type="text" value={rmAluno} onChange={handleInputRm} /> */}

    {/* Retomando: no 'const [nome, setNome]', criamos duas variaveis,
        uma será para o valor, a outra para definir o valor.
        Usamos a função para definir esse valor e o value para mudar 
        o campo. */}

    {/* Quarto passo: */}
    {/* Criar Objeto que irá salvar todos os dados */}
    const laudo = {
        id: 1, // esse id é só para teste, ele será gerado automaticamente, então depois remova-o
        nome_laudo: nome,
        cod_cid: codCid,
        obs_laudo: obsLaudo,
        data_laudo: dataLaudo,
    }
    
    {/* Quinto passo: */}
    {/* Criar uma função para salvar os dados */}
    const salvarLaudo = async(event) => {
     event.preventDefault()
     console.log(laudo)
     try {
        const response = await axios.post('http://localhost:8080/laudo', laudo) // aqui é a rota que irá salvar
        console.log(response)
    }
    catch (error) {
        console.error(error)
    }

}

    

    return (
        // isso aqui se chama ccs.module, é um css que só funciona nesse arquivo
        // ele é importado no import styles from '../assets/css/formulario.module.css'
        // e é chamado no className={styles.laudoContainer}
        <div className={`container-fluid ${styles.laudoContainer}`}>
            <h4>Cadastro de Laudo</h4>
            <Link to='/'>Voltar</Link>
            <form>
                <div className="laudoContent form-group mt-4">
                    <div className={styles.gridItens}>
                        {/* Aqui é o primeiro campo, ele altera a variavel 'nome' e irá salvar nosso nome */}
                        <div className="item1">
                            <label htmlFor="nome">Nome:</label>
                            <input
                            type="text"
                            className="form-control"
                            id="nome" 
                            placeholder="Nome do Laudo"
                            value={nome}
                            onChange={handleInputNome} />
                        </div>
                        <div className="item2">
                            <label htmlFor="codigoCID">Código CID:</label>
                            <input 
                            id="codigoCID"
                            className="form-control"
                            placeholder="Código CID"
                            value={codCid}
                            onChange={handleInputCod}/>
                        </div>
                    </div>
                    <div className="inputGrande">
                        <label htmlFor="obsLaudo">Observações:</label>
                        <textarea 
                        className="form-control"
                        id="obsLaudo" 
                        value={obsLaudo}
                        onChange={handleInputObs}
                        placeholder="Observações do Laudo" />
                    </div>
                    <div className="inoutGrandeData">
                        <label htmlFor="dataLaudo">Data:</label>
                        <input
                        type="date"
                        className="form-control"
                        id="dataLaudo"
                        value={dataLaudo}
                        onChange={handleInputData}/>
                    </div>
                    <button type="submit" onClick={salvarLaudo} className="btn btn-primary mt-4">Salvar</button>
                </div>
            </form>
        </div>
    );
}

export default Formulario