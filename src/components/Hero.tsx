
import React from 'react';
import { Button } from "@/components/ui/button";
import { FaDownload } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { FaTerminal } from 'react-icons/fa';

type HeroProps = {
  onDownloadClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onDownloadClick }) => {
  
  return (
    <section id='section-hero' className="py-16 px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
      <div id='div-hero' className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Monitore seu sistema com <span className="text-neoinfo-purple">precisão</span> e <span className="text-neoinfo-cyan">estilo</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl">
          Uma ferramenta moderna desenvolvida em Python para visualização detalhada de métricas do seu sistema, com interface elegante e informações em tempo real.
        </p>
        <div id='div-btn' className="flex flex-col sm:flex-row gap-4">
          <a href="/neorick-0.2.0.tar.gz" download>
            <Button onClick={onDownloadClick} id='btn-d' className="bg-neoinfo-purple hover:bg-opacity-90 text-white py-6 px-8 text-lg">
              <FaDownload/> Download Gratuito
            </Button>
          </a>
          <a href="https://github.com/Rickzinho3/neorick">
            <Button id='btn-doc' variant="outline" className="border-neoinfo-cyan text-neoinfo-cyan hover:bg-neoinfo-cyan/10 py-6 px-8 text-lg">
              <FaBook/> Ver Documentação
            </Button>
          </a>
        </div>
        <div className="ter">
          <div className="code"><FaTerminal/>
            <div className="rcode"><h1><span style={{color: 'rgb(176, 38, 255)'}}>pip</span> install neorick</h1>
            </div>
          </div>
          <div className="code"><FaTerminal/>
            <div className="rcode"><h1 style={{color: "rgb(176, 38, 255)"}}>neorick<span style={{color: 'grey'}}> // inicializa a interface</span></h1>
            </div>
          </div>
          <div className="code"><FaTerminal/>
            <div className="rcode">
              <h1 style={{color: "rgb(176, 38, 255)"}}>neorick-create <span style={{color: 'grey'}}>// gera um novo relatório</span></h1>
            </div>
          </div>
        </div>
      </div>
      <div id='div-img' className="flex-1 max-w-2xl shadow-xl rounded-lg overflow-hidden border border-neoinfo-purple/30">
        <img 
          src="/neorick-screenshot.png" 
          alt="NeoRick Screenshot" 
          className="img"
        />
      </div>
    </section>
  );
};

export default Hero;
