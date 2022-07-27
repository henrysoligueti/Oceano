import { useState, useEffect } from 'react';
import axios from 'axios';
import { TbEdit } from 'react-icons/tb';
import Title from '../src/components/Title';
import Link from 'next/link';

export default function Lista(){
    const [paises, setPaises] = useState([]);
    const [filtroNome, setFiltroNome] = useState('');
    const [buscar, setBuscar] = useState('');    

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all').then(res => {
            setPaises(res.data)
        })
    },[]);

    const paisesFiltrados = (
        buscar?
            paises.filter((pais) => pais.name.common.toLowerCase().includes(buscar.toLowerCase()))            
        :paises
    );

    return(
        <>
            <div className="container">
                <div className="row justify-content-center w-100">
                    <div className="col-lg-6 my-5">
                        <div className="filtro mt-5 mb-4">
                            <Title>Países</Title>

                            <div className="form-control">
                                <form onSubmit={(e) => (e.preventDefault(), setBuscar(filtroNome))}>
                                    <div className="d-flex">
                                        <input
                                            type="text"
                                            value={filtroNome}
                                            placeholder="Filtro por nome"
                                            onChange={
                                                (e) => setFiltroNome(e.target.value)
                                            }
                                        />
                                        <button type="submit">
                                            Buscar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div>
                            <div className="card">
                                <table>
                                    {paisesFiltrados.length>0?(
                                        <thead>
                                            <tr>
                                                <th>Nome</th>
                                                <th className="text-center nowrap">Editar</th>
                                            </tr>
                                        </thead>
                                    ):('')}
                                    <tbody>
                                        {paisesFiltrados.length>0?(
                                            paisesFiltrados?.map(pais =>
                                                <tr key={pais.cca3}>
                                                    <td>
                                                        <img src={pais.flags.png} />
                                                        {pais.name.common}
                                                    </td>
                                                    <td className="text-center nowrap" width={1}>
                                                        <Link href="/admin">
                                                            <a><TbEdit title="Editar" /></a>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            )
                                        ):(
                                            <tr>
                                                <td className="text-center">
                                                    Nenhum resultado encontrado, faça uma nova busca.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>                
                    </div>
                </div>
            </div>
        </>
    );
}