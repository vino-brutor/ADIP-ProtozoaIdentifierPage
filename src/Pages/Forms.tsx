import { useState } from "react";
import InputsField from "../Components/InputsField";
import SelectField from "../Components/SelectField";
import CheckBoxes from "../Components/checkBoxesSintomas";
import style from "../styles/globals.module.css";
import { parasitas } from "./Informations"; 
import CardParasita from "../Components/CardParasita";
import type { ParasitaProps } from "../Components/CardParasita";
import { useRef } from "react";

export default function Forms() {
  const [sintomas, setSintomas] = useState<string[]>([]);
  const [sexo, setSexo] = useState("");
  const [gestante, setGestante] = useState("");
  const [moradia, setMoradia] = useState("");
  const [deslocamento, setDeslocamento] = useState("nao");
  const [destino, setDestino] = useState("");
  const [animais, setAnimais] = useState("");
  const [animalOutro, setAnimalOutro] = useState("");
  const [picadas, setPicadas] = useState("");
  const [hiv, setHiv] = useState("");
  const [atividade, setAtividade] = useState<string[]>([]);
  const [possiveisParasitas, setPossiveisParasitas] = useState<ParasitaProps[]>([]);

  const todosSintomas = Array.from(new Set(parasitas.flatMap(p => p.sintomas)));
  const todasAtividades = Array.from(new Set(parasitas.flatMap(p => p.atividade ?? [])));
  const todosAnimais = Array.from(
  new Set(parasitas.flatMap(p => p.animais ?? []))
);

  const handleSintomasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setSintomas((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

 const filtrarParasitas = () => {
  return parasitas.filter((parasita) => {

    const matchSintomas = sintomas.length > 0 && sintomas.some(s => parasita.sintomas.includes(s));
    if (!matchSintomas) return false;

    const matchAtividade = parasita.atividade
      ? atividade.some(a => parasita.atividade!.includes(a))
      : false;

    const matchMoradia = parasita.moradia
      ? parasita.moradia.includes(moradia)
      : false;

    const matchPicadas = parasita.picadas
      ? parasita.picadas.includes(picadas)
      : false;

    const matchAnimais = parasita.animais
      ? parasita.animais.includes(animais)
      : false;

    const matchHiv = parasita.hivRelacionado ? hiv === "sim" : true;

    return (
      matchAtividade ||
      matchMoradia ||
      matchPicadas ||
      matchAnimais ||
      matchHiv
    );
  });
};

const resultaRef = useRef<HTMLDivElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const matches = filtrarParasitas();
    setPossiveisParasitas(matches);

    setTimeout(() => {
      resultaRef.current?.scrollIntoView({behavior: 'smooth'});
    }, 100);
  };

  const handleAtividadeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setAtividade((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  return (
    <div className="container my-4">
      <h1 className="mb-4">Ficha De Caso</h1>
      <form className="row g-4" onSubmit={handleSubmit}>
        
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-secondary mb-3">Dados Pessoais</h5>
              <div className="row">
                <div className="col-md-6">
                  <InputsField name="nome" label="Nome" />
                </div>
                <div className="col-md-6">
                  <InputsField name="email" label="Email" type="email" />
                </div>
                <div className="col-md-4">
                  <InputsField name="uf" label="UF" />
                </div>
                <div className="col-md-4">
                  <InputsField name="municipio" label="Município" />
                </div>
                <div className="col-md-4">
                  <InputsField name="dataNascimento" label="Data de nascimento" type="date" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-secondary mb-3">Saúde</h5>
              <div className="row">
                <div className="col-md-4">
                  <SelectField
                    label="Sexo"
                    name="sexo"
                    value={sexo}
                    onChange={(e) => setSexo(e.target.value)}
                    options={[
                      { value: "masculino", label: "Masculino" },
                      { value: "feminino", label: "Feminino" },
                      { value: "outro", label: "Outro" },
                    ]}
                  />
                </div>
                <div className="col-md-4">
                  <SelectField
                    label="Gestante"
                    name="gestante"
                    value={gestante}
                    onChange={(e) => setGestante(e.target.value)}
                    options={[
                      { value: "sim", label: "Sim" },
                      { value: "nao", label: "Não" },
                    ]}
                  />
                </div>
                <div className="col-md-4">
                  <SelectField
                    label="Co-infecção com HIV"
                    name="hiv"
                    value={hiv}
                    onChange={(e) => setHiv(e.target.value)}
                    options={[
                      { value: "sim", label: "Sim" },
                      { value: "nao", label: "Não" },
                    ]}
                  />
                </div>
              </div>
              <CheckBoxes
                label="Sintomas apresentados"
                options={todosSintomas}
                selected={sintomas}
                onChange={handleSintomasChange}
              />
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-secondary mb-3">Histórico de Vida</h5>
              <div className="row">
                <div className="col-md-6">
                  <SelectField
                    label="Ambiente de moradia"
                    name="moradia"
                    value={moradia}
                    onChange={(e) => setMoradia(e.target.value)}
                    options={[
                      { value: "urbano", label: "Urbano" },
                      { value: "rural", label: "Rural" },
                      { value: "ambos", label: "Ambos" },
                    ]}
                  />
                </div>
                <div className="col-md-6">
                  <SelectField
                    label="Deslocamentos nos últimos 15 dias"
                    name="deslocamento"
                    value={deslocamento}
                    onChange={(e) => setDeslocamento(e.target.value)}
                    options={[
                      { value: "nao", label: "Não" },
                      { value: "sim", label: "Sim" },
                    ]}
                  />
                </div>

                {deslocamento === "sim" && (
                  <div className="col-md-6">
                    <InputsField
                      name="destino"
                      label="Para onde?"
                      type="text"
                    />
                  </div>
                )}

                <div className="col-md-6">
                  <SelectField
                    label="Possui mordidas ou picadas"
                    name="picadas"
                    value={picadas}
                    onChange={(e) => setPicadas(e.target.value)}
                    options={[
                      { value: "mosquito", label: "Mosquito" },
                      { value: "barbeiro", label: "Barbeiro" },
                      { value: "nenhuma", label: "Nenhuma" },
                    ]}
                  />
                </div>

                <div className="col-md-6">
                  <SelectField
                    label="Possui animais de estimação"
                    name="animais"
                    value={animais}
                    onChange={(e) => setAnimais(e.target.value)}
                    options={[
                      ...todosAnimais.map(a => ({ value: a, label: a.charAt(0).toUpperCase() + a.slice(1) })),
                      { value: "outro", label: "Outro" },
                      { value: "nao", label: "Não" }
                    ]}
                  />
                </div>

                {animais === "outro" && (
                  <div className="col-md-6">
                    <InputsField
                      name="animalOutro"
                      label="Qual animal?"
                      type="text"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-secondary mb-3">Atividade nos últimos 15 dias</h5>
              <CheckBoxes
                label="Selecione as atividades"
                options={todasAtividades}
                selected={atividade}
                onChange={handleAtividadeChange}
              />
            </div>
          </div>
        </div>

        <div className="col-12 d-flex justify-content-end">
          <button type="submit" className={`btn btn-primary px-5 py-2 ${style.btnCustom}`}>
            Enviar Informações
          </button>
        </div>

        {possiveisParasitas.length > 0 && (
          <div className="mt-5">
          <h3>Possíveis Parasitas Relacionados:</h3>
          <CardParasita parasitas={possiveisParasitas} />
        </div>
)}
      {possiveisParasitas.length === 0 && (
        <h3>Nenhum parasita correspondente com os dados informados</h3>
      )}
      </form>
    </div>
  );
}