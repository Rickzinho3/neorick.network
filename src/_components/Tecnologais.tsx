// imports

import { FaPython, FaHandSparkles, FaHackerNewsSquare, FaBookOpen, FaBoxOpen, FaGrinTears, FaTools, FaToolbox } from "react-icons/fa";

export default function Tecnologias() {

    return (
        <section id="Tecnologias" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full select-none md:gap-2 md:text-sm">
            <div className="border border-border rounded-md p-5 h-[250px] flex flex-col hover:bg-hover transition-all cursor-pointer">
                <div className="flex flex-col gap-2">
                    <FaPython className="text-2xl" />
                    <p className="text-2xl font-medium">Python</p>
                </div>
                <div className="mt-auto">
                    <p className="text-[16px]">A base de todo o projeto, python é uma linguagem simples e versátil, que facilita a implementação de funcionalidades complexas.</p>
                </div>
            </div>

            <div className="border border-border rounded-md p-5 h-[250px] flex flex-col hover:bg-hover transition-all cursor-pointer">
                <div className="flex flex-col gap-2">
                    <FaToolbox className="text-2xl" />
                    <p className="text-2xl font-medium">WMI</p>
                </div>
                <div className="mt-auto">
                    <p className="text-[16px]">WMI é uma biblioteca python poderosa que permitea coleta de dados detalhados sobre hardware e software.</p>
                </div>
            </div>

            <div className="border border-border rounded-md p-5 h-[250px] flex flex-col hover:bg-hover transition-all cursor-pointer">
                <div className="flex flex-col gap-2">
                    <FaTools className="text-2xl" />
                    <p className="text-2xl font-medium">PSUTIL</p>
                </div>
                <div className="mt-auto">
                    <p className="text-[16px]">PSUTIL é uma biblioteca python poderosa que permite a coleta de dados sobre o uso de CPU, memória, disco e outros recursos do sistema.</p>
                </div>
            </div>

            <div className="border border-border rounded-md p-5 h-[250px] flex flex-col hover:bg-hover transition-all cursor-pointer">
                <div className="flex flex-col gap-2">
                    <FaBookOpen className="text-2xl" />
                    <p className="text-2xl font-medium">Rich</p>
                </div>
                <div className="mt-auto">
                    <p className="text-[16px]">Rich é uma biblioteca python poderosa que permite a criação de interfaces de usuário modernas e estilizadas.</p>
                </div>
            </div>

            <div className="border border-border rounded-md p-5 h-[250px] flex flex-col hover:bg-hover transition-all cursor-pointer">
                <div className="flex flex-col gap-2">
                    <FaBoxOpen className="text-2xl" />
                    <p className="text-2xl font-medium">Poetry</p>
                </div>
                <div className="mt-auto">
                    <p className="text-[16px]">Poetry é uma ferramenta de gerenciamento de dependências python que facilita a instalação e a manutenção de pacotes.</p>
                </div>
            </div>
        </section>
    );
}
