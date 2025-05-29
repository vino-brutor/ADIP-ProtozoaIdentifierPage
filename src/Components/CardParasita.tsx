import { useState } from "react";
import style from "../styles/Informations.module.css";

export type ParasitaProps = {
  nome: string;
  imagem: string;
  descricao: string;
  transmissao: string;
  exames: string[];
  sintomas: string[];
  atividade?: string[];
  gestante?: string[]; 
  moradia?: string[];   
  picadas?: string[];   
  animais?: string[];   
  hivRelacionado?: boolean;
};

type CardParasitaProps = {
  parasitas: ParasitaProps[];
};

export default function CardParasita({ parasitas }: CardParasitaProps) {
  return (
    <div className="row">
      {parasitas.map((p, i) => (
        <div className="col-12 mb-4" key={i}>
          <div className={"card shadow-lg border-0 rounded-4 overflow-hidden " + style.cardCustom}>
            <div className="row g-0">
              <div className="col-md-4 d-flex align-items-center justify-content-center bg-light p-3">
                <img
                  src={p.imagem}
                  alt={p.nome}
                  className="img-fluid rounded"
                  style={{ maxHeight: "280px", objectFit: "fill", width: "100%" }}
                />
              </div>
              <div className="col-md-8 p-4">
                <h3 className="mb-3">{p.nome}</h3>
                <Tabs
                  descricao={p.descricao}
                  transmissao={p.transmissao}
                  exames={p.exames}
                  sintomas={p.sintomas}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Tabs({descricao,transmissao,exames,sintomas,}: {descricao: string, transmissao: string, exames: string[], sintomas: string[]}) {
    const [aba, setAba] = useState("descricao");

    return (
        <div>
            <ul className="nav nav-tabs mb-3">
                <li className="nav-item">
                    <button className={`nav-link ${aba === "descricao" ? "active" : ""}`} onClick={() => setAba("descricao")}>
                        Descrição
                    </button>
                </li>
                <li className="nav-item">
                    <button className={`nav-link ${aba === "exames" ? "active" : ""}`} onClick={() => setAba("exames")}>
                        Exames Recomendados
                    </button>
                </li>
                <li className="nav-item">
                    <button className={`nav-link ${aba === "sintomas" ? "active" : ""}`} onClick={() => setAba("sintomas")}>
                        Sintomas
                    </button>
                </li>
            </ul>

            <div className="tab-content">
                {aba === "descricao" && (
                    <div className="d-flex justyfy-content-center flex-column">
                        <p><strong>Descrição:</strong> {descricao}</p>
                        <p><strong>Transmissão:</strong> {transmissao}</p>
                    </div>
                )}
                {aba === "exames" && (
                    <div>                        
                            {exames.map((exame, idx) => <span key={idx} className="badge bg-secondary fs-6 px-3 py-2 mx-2 my-1">
                {exame}
              </span>)}
                    </div>
                )}
                {aba === "sintomas" && (
                    <div>
                        {sintomas.map((s, idx) => <span key={idx} className="badge bg-secondary fs-6 px-3 py-2 mx-2 my-1">
                {s}
              </span>)}
                    </div>
                )}
            </div>
        </div>
    )
}