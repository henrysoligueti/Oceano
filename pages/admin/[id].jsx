import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Title from '../../src/components/Title';
import Link from 'next/link';

export default function Lista(){
    const [pais, setPais] = useState([]);
    const [nome, setNome] = useState([]);
    const [continente, setContinente] = useState([]);
    const [regiao, setRegiao] = useState([]);
    const [populacao, setPopulacao] = useState([]);
    const router = useRouter();

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/alpha/'+router.query.id).then(res => {
            setPais(res.data);
            setNome(res.data[0].name.common);
            setContinente(res.data[0].region);
            setRegiao(res.data[0].subregion);
            setPopulacao(res.data[0].population);
        })
    },[]);

    return(
        <>
            <div className="container">
                <div className="row justify-content-center w-100">
                    <div className="col-lg-5 my-5">
                        <div className="filtro mt-5 mb-4">
                            <Title>Editar</Title>

                            <div className="form-control">
                                <form onSubmit={(e) => (e.preventDefault(), setBuscar(filtroNome))}>
                                    <div class="form-input">
                                        <label for="nome">Nome</label>
                                        <input
                                            type="text"
                                            value={nome}
                                            name="nome"
                                            id="nome"
                                            onChange={(e) => setNome(e.target.value)}
                                        />
                                    </div>

                                    <div class="form-input">
                                        <label for="continente">Continente</label>
                                        <input
                                            type="text"
                                            value={continente}
                                            name="continente"
                                            id="continente"
                                            onChange={(e) => setContinente(e.target.value)}
                                        />
                                    </div>

                                    <div class="form-input">
                                        <label for="regiao">Região</label>
                                        <input
                                            type="text"
                                            value={regiao}
                                            name="regiao"
                                            id="regiao"
                                            onChange={(e) => setRegiao(e.target.value)}
                                        />
                                    </div>

                                    <div class="form-input">
                                        <label for="populacao">População</label>
                                        <input
                                            type="text"
                                            value={populacao}
                                            name="populacao"
                                            id="populacao"
                                            onChange={(e) => setPopulacao(e.target.value)}
                                        />
                                    </div>

                                    <div className="row mt-4">
                                        <div className="col-lg-6">
                                            <Link href="/">
                                                <a>
                                                    <button className="w-100 mx-0 bg-secondary">
                                                        Voltar
                                                    </button>
                                                </a>
                                            </Link>
                                        </div>

                                        <div className="col-lg-6">
                                            <button type="submit" className="w-100 mx-0">
                                                Salvar
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>             
                    </div>
                </div>
            </div>
        </>
    );
}