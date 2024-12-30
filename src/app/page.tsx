// src/app/page.tsx
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 py-16">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-8">
          Bem-vindo ao Chapada Token
        </h1>

        <p className="text-xl mb-8">
          O Chapada Token é uma criptomoeda única, criada para conectar a tecnologia digital com as belezas naturais da Chapada dos Veadeiros. Junte-se a nós e faça parte de uma revolução verde e inovadora no ecoturismo e na economia local.
        </p>

        <div className="space-y-6 text-lg mb-12">
          <p>
            🌿 <strong>O que é o Chapada Token?</strong>
            <br />
            O Chapada Token é uma moeda digital desenvolvida com o objetivo de fomentar a economia sustentável da Chapada dos Veadeiros, incentivando o turismo responsável e a colaboração entre a comunidade local e os entusiastas da tecnologia.
          </p>

          <p>
            🌍 <strong>Porque investir no Chapada Token?</strong>
            <br />
            Além de ser uma criptomoeda inovadora, o Chapada Token tem como foco o desenvolvimento sustentável da região, oferecendo aos investidores a chance de fazer parte de um projeto que conecta ecoturismo, sustentabilidade e tecnologia.
          </p>

          <p>
            💡 <strong>Tecnologia e Inovação</strong>
            <br />
            A Chapada Token é uma plataforma baseada em blockchain que oferece total transparência e segurança nas transações, criando um ecossistema digital que apoia tanto os turistas quanto os moradores locais.
          </p>

          <p>
            🌱 <strong>Impacto Ambiental</strong>
            <br />
            Investir no Chapada Token é também investir em um futuro sustentável. Parte dos lucros serão revertidos em projetos de preservação ambiental e apoio a iniciativas de ecoturismo na Chapada dos Veadeiros.
          </p>
        </div>

        <div className="flex justify-center space-x-8 mb-8">
          <Link
            href="https://puppy.fun/coins/522"
            className="relative px-8 py-4 text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 rounded-md shadow-lg button-with-lantern-comprar"
          >
            <span className="relative z-10">Comprar</span>
          </Link>

          <Link
            href="/documento-tecnico"
            className="relative px-8 py-4 text-lg font-bold bg-gradient-to-r from-orange-400 to-red-500 rounded-md shadow-lg button-with-lantern-documento"
          >
            <span className="relative z-10">Documento Técnico</span>
          </Link>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Junte-se à Revolução Verde!</h2>
          <p className="text-lg mb-4">
            O Chapada Token é mais do que uma criptomoeda. Ele é um movimento que une tecnologia, cultura e sustentabilidade. Ao investir no Chapada Token, você não está apenas comprando uma moeda digital, mas se tornando parte de um futuro mais verde, justo e próspero para a Chapada dos Veadeiros.
          </p>
          <p className="text-lg mb-4">
            🚀 <strong>A hora de investir é agora!</strong> Aproveite esta oportunidade única de se envolver em um projeto que está mudando a forma como as pessoas interagem com o ecossistema local e o mundo digital.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
