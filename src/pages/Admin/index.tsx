import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Admin(){
    
    const [nomePais, setNomePais] = useState<any>('');
    const parametros = useParams()

    useEffect(() => {
        if(parametros.id){
            axios.get(`https://restcountries.com/v3.1/alpha/${parametros.id}`).then(
                res => setNomePais(res.data[0].name.common)
            )
        }
    }, [parametros]);    

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return(
        <>
            <div className="container">
                <div className="row justify-content-center w-100">
                    <div className="col-lg-6">
                        <h2 className="text-center mb-4">Editar</h2>
                        <form>
                            <div className="form-control">
                                <input
                                    type="text"
                                    placeholder="Nome"
                                    className="w-100"
                                    value={nomePais}
                                    onChange={e => setNomePais(e.target.value)}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}