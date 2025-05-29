import CardParasita from "../Components/CardParasita";
import type { ParasitaProps } from "../Components/CardParasita";


const parasitas: ParasitaProps[] = [
    {
      nome: "Ascaris lumbricoides",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIYkQYnB8M-6TTwhchnURQ-UHars4gP0PtzQ&s",
      descricao: "Nematódeo intestinal causador da ascaridíase. O ciclo é monoxênico, e envolve migração das larvas por pulmões, faringe e retorno ao intestino, onde atingem forma adulta. Pode atingir até 31 cm.",
      transmissao: "Ingestão de ovos infectantes em alimentos ou água contaminados, ou por contato com solo contaminado.",
      exames: ["Exame parasitológico de fezes", "Visualização de ovos ou adultos"],
      sintomas: [
      "Pneumonite larval",
      "Obstrução intestinal",
      "Migração para vias biliares",
      "Reações alérgicas",
      "Asma",
      "Febre"
      ],
      atividade: ["Agricultura", "Doméstica", "Manipulação de alimentos"],
      moradia: ["rural", "urbano"],
      picadas: [], 
      animais: [], 
      hivRelacionado: false 
    },
    {
    nome: "Leishmania spp.",
    imagem: "https://sbmt.org.br/wp-content/uploads/2019/07/img-03-1.jpg",
    descricao: "Parasitas intracelulares obrigatórios do gênero Leishmania, causadores das leishmanioses. As formas clínicas mais comuns são a leishmaniose cutânea (tegumentar) e visceral (calazar). Transmitidas por picadas de flebotomíneos infectados, especialmente em áreas tropicais e subtropicais.",
    transmissao: "Picada de fêmeas infectadas de flebotomíneos (mosquito-palha), como Lutzomyia longipalpis. Cães e animais silvestres funcionam como reservatórios.",
    exames: [
      "Biópsia ou punção (medula, linfonodo, baço, fígado)",
      "Esfregaço, histologia, cultura",
      "Inoculação em animais",
      "Testes sorológicos: DAT, ELISA, RIFI",
      "Teste rápido RK-39"
    ],
    sintomas: [
      "Febre prolongada e irregular",
      "Anemia",
      "Perda de peso",
      "Falta de apetite",
      "Palidez",
      "Indisposição",
      "Aumento abdominal (hepatomegalia e esplenomegalia)",
      "Feridas ulceradas na pele",
      "Lesões em mucosas (nariz, boca, garganta)"
    ],
    atividade: [
      "Garimpagem",
      "Turismo em áreas florestais",
      "Exploração vegetal",
      "Agricultura"
    ],
    moradia: ["rural", "ambos"],
    picadas: ["mosquito"], 
    animais: ["cachorro", "cavalo", "roedor", "tamanduá", "raposa", "preguiça"],
    hivRelacionado: true 
  },
  {
    nome: "Schistosoma mansoni",
  imagem: "https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/08/schistosoma-mansoni.jpg",
  descricao:
    "Verme platelminto da classe Trematoda, agente etiológico da esquistossomose. Possui ciclo de vida indireto com caramujo Biomphalaria como hospedeiro intermediário. Transmite-se por penetração ativa de cercárias pela pele em contato com água contaminada.",
  transmissao:
    "Contato da pele com água doce contaminada com cercárias liberadas por caramujos infectados do gênero Biomphalaria. Não é transmitido por ingestão nem entre pessoas.",
  exames: [
    "Exame parasitológico de fezes (Kato-Katz)",
    "Sorologia (ELISA, RIFI)",
    "Ultrassonografia (avaliação hepatoesplênica)",
    "Histórico clínico e epidemiológico"
  ],
  sintomas: [
    "Coceira e vermelhidão no local de penetração",
    "Febre",
    "Dor de cabeça",
    "Dor muscular",
    "Calafrios",
    "Falta de apetite",
    "Tosse",
    "Diarreia",
    "Sangue nas fezes",
    "Constipação alternada com diarreia",
    "Palpitações",
    "Tontura",
    "Perda de peso",
    "Aumento do fígado",
    "Barriga d’água (ascite)",
    "Hipertensão portal",
    "Hemorragia digestiva",
    "Aumento do baço"
  ],
  atividade: [
    "Pesca",
    "Agricultura",
    "Lavação de roupas em rios",
    "Trabalho rural",
    "Coleta de água"
  ],
  moradia: ["rural"],
  picadas: [],
  animais: [], 
  hivRelacionado: false 
  },
  {
    nome: "Toxoplasma gondii",
  imagem: "https://upload.wikimedia.org/wikipedia/commons/3/39/Toxoplasma_gondii_tachy.jpg",
  descricao:
    "Protozoário intracelular obrigatório causador da toxoplasmose, uma zoonose cosmopolita. Infecta felinos como hospedeiros definitivos e todos os animais de sangue quente como intermediários, incluindo humanos. Pode causar quadros graves em imunossuprimidos e infecções congênitas.",
  transmissao:
    "Ingestão de alimentos ou água contaminados por oocistos, consumo de carnes cruas ou malcozidas (suína, ovina), transmissão congênita (via transplacentária), transfusão sanguínea ou transplantes. Contato com fezes de gatos infectados também é fonte de risco.",
  exames: [
    "Sorologia (IgM e IgG): ELISA, RIFI",
    "PCR (líquor, sangue, líquido amniótico)",
    "Exames oftalmológicos",
    "Punção de líquor",
    "Biópsia (casos raros)"
  ],
  sintomas: [
    "Febre",
    "Fadiga",
    "Dores musculares",
    "Linfadenopatia",
    "Sintomas semelhantes à gripe",
    "Uveíte",
    "Retinocoroidite",
    "Convulsões",
    "Confusão mental",
    "Falta de coordenação",
    "Icterícia (forma congênita)",
    "Hidrocefalia",
    "Calcificações cerebrais",
    "Retardo mental"
  ],
  atividade: [
    "Criação de suínos e/ou ovinos",
    "Trabalho rural",
    "Manuseio de carnes cruas",
    "Trabalho veterinário",
    "Jardinagem"
  ],
  moradia: ["urbano", "rural"],
  picadas: [], 
  animais: ["gato", "roedor", "ovelha", "cão", "suíno", "pássaros"],
  hivRelacionado: true 
  },
  {
  nome: "Giardia duodenalis",
  imagem: "https://upload.wikimedia.org/wikipedia/commons/0/08/Giardia_lamblia_SEM_8698_lores.jpg",
  descricao:
    "Protozoário flagelado intestinal, causador da giardíase. Possui ciclo monoxênico, com formas evolutivas em cisto (infectante) e trofozoíto (forma ativa). Transmissão fecal-oral, especialmente via água e alimentos contaminados. Altamente prevalente em regiões com saneamento precário, especialmente em crianças.",
  transmissao:
    "Ingestão de cistos em água, alimentos crus, mãos contaminadas, fômites ou contato interpessoal. Pode ser transmitido por contato com fezes de animais domésticos infectados.",
  exames: [
    "Exame parasitológico de fezes (microscopia)",
    "Método de sedimentação (Hoffman)",
    "Imunofluorescência indireta",
    "ELISA (antígenos fecais)"
  ],
  sintomas: [
    "Diarreia (com ou sem esteatorreia)",
    "Dor abdominal",
    "Gases",
    "Náuseas e vômitos",
    "Fadiga",
    "Perda de apetite",
    "Desidratação",
    "Desnutrição",
    "Déficit de crescimento",
    "Anemia",
    "Déficit cognitivo (em crianças)",
    "Irritabilidade",
    "Insônia"
  ],
  atividade: [
    "Trabalho com manipulação de alimentos",
    "Cuidado infantil (creches, orfanatos)",
    "Criação de animais domésticos",
    "Trabalho rural",
    "Tratamento e análise de água"
  ],
  moradia: ["rural", "urbano", "subúrbio", "área sem saneamento"],
  picadas: [], 
  animais: ["gato", "cão", "bovino", "ovino", "roedor"], 
  hivRelacionado: false 
  },
    {
    nome: "Taenia solium",
    imagem: "https://media.discordapp.net/attachments/1362547412345815415/1377079058914869330/73bac39b-a390-4baa-b72b-6836d5fe8e47.png?ex=68385110&is=6836ff90&hm=7417dcfa525086a498e0e7032ace917f6265efaecab8d62d1d63387842119f07&=&format=webp&quality=lossless&width=1400&height=934",
    descricao: "Cestódeo causador da teníase e, em casos graves, cisticercose. Pode ser assintomático ou causar desnutrição e obstrução intestinal.",
    transmissao: "Ingestão de carne de porco crua ou mal cozida, ou ovos presentes em fontes contaminadas.",
    exames: ["Exame parasitológico de fezes", "Sorologia", "Exames de imagem para cisticercose"],
    sintomas: ["Anorexia", "Desnutrição", "Diarreia", "Presença de vermes nas fezes", "Obstrução intestinal", "Cisticercose"],
    moradia: ["rural"],
    atividade: ["Manipulação de carne suína", "Trabalho rural"],
    picadas: [],
    animais: ["suíno"],
    hivRelacionado: false
  },
  {
    nome: "Taenia saginata",
    imagem: "https://media.discordapp.net/attachments/1362547412345815415/1377078996445036544/image.png?ex=68385101&is=6836ff81&hm=7bc67f8d223bc6de7d5e3375a8802c29ac6ef9eced38d2562ef8656d15c99450&=&format=webp&quality=lossless&width=1196&height=794",
    descricao: "Cestódeo intestinal, similar à T. solium, mas não causa cisticercose. Associado ao consumo de carne bovina crua.",
    transmissao: "Ingestão de carne bovina crua ou mal cozida com cisticerco.",
    exames: ["Exame parasitológico de fezes"],
    sintomas: ["Anorexia", "Desnutrição", "Diarreia", "Presença de vermes nas fezes", "Obstrução intestinal"],
    moradia: ["rural"],
    atividade: ["Manipulação de carne bovina", "Trabalho rural"],
    picadas: [],
    animais: ["bovino"],
    hivRelacionado: false
  },
  {
    nome: "Entamoeba histolytica",
    imagem: "https://media.discordapp.net/attachments/1362547412345815415/1377430543141965885/file-GkWPDZBmYxsAK7YqDheWiq.png?ex=6838efa8&is=68379e28&hm=2a9c856779ee173929eb4ed801ece0726f33836f04634de777603ce958e6e9d5&=&format=webp&quality=lossless&width=994&height=942",
    descricao: "Protozoário causador da amebíase. Pode causar desde diarreia leve até abscesso hepático grave.",
    transmissao: "Ingestão de alimentos e água contaminados. Transmissão fecal-oral direta (má higiene).",
    exames: ["Exame parasitológico de fezes", "Sorologia", "Ultrassonografia (abscesso hepático)"],
    sintomas: ["Diarreia com sangue", "Tenesmo", "Perda de peso", "Fadiga", "Febre", "Dor no hipocôndrio direito", "Hepatomegalia", "Sudorese", "Mal-estar"],
    moradia: ["urbano", "rural"],
    atividade: ["Trabalho com saneamento", "Manipulação de alimentos"],
    picadas: [],
    animais: [],
    hivRelacionado: false
  },
  {
    nome: "Ancylostoma duodenale / Necator americanus",
    imagem: "https://media.discordapp.net/attachments/1362547412345815415/1377431117103370261/image.png?ex=6838f031&is=68379eb1&hm=600fbd80443c0891cfa9b62b99ffee55169057690a0d7657907fb4e2b577d5b4&=&format=webp&quality=lossless&width=1444&height=1052",
    descricao: "Nematódeos causadores da ancilostomose. Penetram ativamente pela pele, migrando pelos pulmões até o intestino.",
    transmissao: "Contato direto com solo contaminado, especialmente sem calçados.",
    exames: ["Exame parasitológico de fezes"],
    sintomas: ["Coceira intensa", "Vermelhidão na pele com trajetos tortuosos", "Inflamação local", "Tosse (fase pulmonar)"],
    moradia: ["rural"],
    atividade: ["Trabalho rural", "Andar descalço em solo úmido"],
    picadas: [],
    animais: [],
    hivRelacionado: false
  },
  {
    nome: "Enterobius vermicularis",
    imagem: "https://media.discordapp.net/attachments/1362547412345815415/1377431439145963660/image.png?ex=6838f07e&is=68379efe&hm=c2a286f030c0e1dbbfe541ed70c7ffcd38ca4990b3eaaaf28e26e9a0fcf522c2&=&format=webp&quality=lossless&width=1506&height=1002",
    descricao: "Nematódeo causador da enterobíase. Parasita comum em crianças, provoca coceira anal intensa à noite.",
    transmissao: "Ingestão de ovos embrionados presentes em objetos, roupas, poeira ou mãos contaminadas.",
    exames: ["Teste da fita gomada", "Exame de fezes"],
    sintomas: ["Coceira intensa no ânus", "Sono ruim", "Irritação", "Dor abdominal", "Enjoo leve", "Falta de apetite"],
    moradia: ["urbano", "subúrbio"],
    atividade: ["Ambiente escolar ou creches"],
    picadas: [],
    animais: [],
    hivRelacionado: false
  }
];
export { parasitas };

export default function Informations() {

  return (
    <div className="container py-5" data-aos="fade-up">
      <h1 className="text-center mb-5">Informações sobre Protozoários</h1>
      <CardParasita parasitas={[...parasitas].sort((a, b) => a.nome.localeCompare(b.nome))} />
    </div>
  )
}