import React from 'react';
import Header from './Header';
import Footer from './Footer';

const SobreNos = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-100 pt-8 pb-8">
        <div className="container mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl font-bold mb-6">Conhece a nossa equipa</h1>
              <p className="text-lg leading-relaxed mb-6">
                Somos uma equipe apaixonada por criar experiências incríveis para nossos clientes. Nossos talentosos designers, desenvolvedores e especialistas em marketing trabalham juntos para oferecer soluções inovadoras que impulsionam o seu negócio.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id nisi vel nunc aliquam eleifend at vel leo. Cras eu dui non ligula dictum lobortis. Donec ac bibendum leo, in ullamcorper dolor. Sed vel lobortis erat. Vestibulum efficitur, mauris sit amet faucibus posuere, neque ligula dictum ligula, eget congue purus nisl sed lectus.
              </p>
              <a
                href="#contato"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg inline-block"
              >
                Entre em contato
              </a>
            </div>
            <div className="flex justify-end">
              <img
                src="/Sobre.png"
                alt="Equipe"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SobreNos;
