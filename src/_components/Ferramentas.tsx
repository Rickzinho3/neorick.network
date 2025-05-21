import { FaBell, 
        FaChartLine, 
        FaFilePdf, 
        FaHistory, 
        FaMicrochip, 
        FaPaintBrush 
       } from "react-icons/fa";

export default function Ferramentas() {
    return (
        <section id="Recursos" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:text-[16px] gap-8 w-full select-none md:gap-2 md:text-sm">
            <div className="border border-border rounded-md hover:bg-hover transition-all p-5 h-[250px] cursor-pointer">
                <div className="flex flex-col gap-2 h-full">
                    <FaMicrochip className="text-2xl" />
                    <h1 className="text-xl font-medium">Detecção de hardware</h1>
                    <p className="text-md mt-auto">Exibe automaticamente os principais componentes do sistema, incluindo processador, GPU, arquitetura, rede, armazenamento e muito mais.</p>
                </div>
            </div>

            <div className="border border-border rounded-md hover:bg-hover transition-all p-5 h-[250px] cursor-pointer">
                <div className="flex flex-col gap-2 h-full">
                    <FaChartLine className="text-2xl" />
                    <h1 className="text-xl font-medium">Monitoramento</h1>
                    <p className="text-md mt-auto">Acompanhe o uso de CPU, memória RAM, GPU e armazenamento com atualizações rápidas diretamente no terminal, utilizando barras visuais estilizadas.</p>
                </div>
            </div>

            <div className="border border-border rounded-md hover:bg-hover transition-all p-5 h-[250px] cursor-pointer">
                <div className="flex flex-col gap-2 h-full">
                    <FaPaintBrush className="text-2xl" />
                    <h1 className="text-xl font-medium">Visual estilizado</h1>
                    <p className="text-md mt-auto">Inspirado no Neofetch, o NeoRick combina informações detalhadas do sistema com uma apresentação visual atrativa, sem depender de interface gráfica.</p>
                </div>
            </div>

            <div className="border border-border rounded-md hover:bg-hover transition-all p-5 h-[250px] cursor-pointer">
                <div className="flex flex-col gap-2 h-full">
                    <FaBell className="text-2xl" />
                    <h1 className="text-xl font-medium">Alertas inteligentes</h1>
                    <p className="text-md mt-auto">Planejo implementar alertas simples para informar sobre picos de uso ou possíveis gargalos no sistema, diretamente no terminal.</p>
                </div>
            </div>

            <div className="border border-border rounded-md hover:bg-hover transition-all p-5 h-[250px] cursor-pointer">
                <div className="flex flex-col gap-2 h-full">
                    <FaHistory className="text-2xl" />
                    <h1 className="text-xl font-medium">Histórico de desempenho</h1>
                    <p className="text-md mt-auto">O sistema conta com um módulo de histórico de uso, que registra e organiza as atividades realizadas ao longo do tempo.</p>
                </div>
            </div>

            <div className="border border-border rounded-md hover:bg-hover transition-all p-5 h-[250px] cursor-pointer">
                <div className="flex flex-col gap-2 h-full">
                    <FaFilePdf className="text-2xl" />
                    <h1 className="text-xl font-medium">Exportação de relatórios</h1>
                    <p className="text-md mt-auto">É possível gerar relatórios completos com base nas informações registradas, no formato PDF.</p>
                </div>
            </div>
        </section>
    )
}
