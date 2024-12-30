import Link from "next/link";

const DocumentoTecnico: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 py-16">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-8">
          Documento Técnico do Chapada Token
        </h1>

        <p className="text-lg mb-4">
          O Chapada Token é uma inovadora memecoin desenvolvida no coração da Chapada dos Veadeiros, Brasil, um lugar repleto de belezas naturais, cachoeiras deslumbrantes e uma rica história relacionada a fenômenos extraterrestres.
        </p>

        <p className="text-lg mb-4">
          Inspirado pela magia e misticismo da região, o Chapada Token não é apenas uma moeda digital; ele é um símbolo de conexão entre a natureza, a cultura local e a tecnologia moderna. A Chapada dos Veadeiros, famosa por seu ecoturismo e suas paisagens de tirar o fôlego, oferece um terreno fértil para o crescimento do Chapada Token.
        </p>

        <p className="text-lg mb-4">
          A criptomoeda visa atrair turistas e entusiastas da tecnologia, proporcionando uma nova forma de interação com o ambiente local. Com um foco em sustentabilidade e desenvolvimento comunitário, o Chapada Token pretende fomentar o turismo responsável, incentivando visitantes a explorarem a região enquanto utilizam a moeda para apoiar negócios locais.
        </p>

        <p className="text-lg mb-4">
          Além de seu apelo turístico, a Chapada Token incorpora elementos de gamificação e interação social, permitindo que os usuários participem de eventos, promoções e recompensas exclusivas. A conexão com a história de encontros extraterrestres cria um aspecto lúdico e intrigante, atraindo tanto os curiosos quanto os investidores.
        </p>

        <p className="text-lg mb-4">
          Em suma, o Chapada Token é mais do que uma criptomoeda; é uma nova forma de viver e explorar a Chapada dos Veadeiros, unindo tecnologia, cultura e natureza em uma experiência única e transformadora.
        </p>
      </div>

      {/* Botão de Voltar */}
      <Link
        href="/"
        className="mt-12 px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-orange-400 to-red-500 rounded-md shadow-lg button-with-lantern-documento transition-all duration-300 transform hover:scale-105"
      >
        Voltar
      </Link>
    </div>
  );
};

export default DocumentoTecnico;
