"use client";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FaGithub, FaInstagram, FaExternalLinkAlt, FaLink, FaHome, FaCode, FaInfo, FaFolderOpen, FaLinkedin } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import neorick from "../../public/neorick-screenshot.png";
import Image from "next/image";
import Ferramentas from "./Ferramentas"
import Tecnologias from "./Tecnologais"

export default function Hero() {

    return (
        <main className="flex border-l border-r border-border border-dashed min-h-screen ml-5 mr-5 text-text md:ml-40 md:mr-40 mt-12">
            <section className="border-r border-border border-dashed w-[25%] hidden md:flex">
                <nav className="h-full w-full mx-5 my-7">
                    <ul className="flex flex-col gap-[1.5px]">
                        <li className="hover:bg-nav-hover rounded-md p-2 transition-all cursor-pointer"><a href="/" className="flex items-center gap-2"><FaHome /> Home</a></li>
                        <li className="hover:bg-nav-hover rounded-md p-2 transition-all cursor-pointer"><a href="#Recursos" className="flex items-center gap-2"><FaFolderOpen /> Recursos</a></li>
                        <li className="hover:bg-nav-hover rounded-md p-2 transition-all cursor-pointer"><a href="#Tecnologias" className="flex items-center gap-2"><FaCode /> Tecnologias</a></li>

                        <Separator className="my-2" />
                        <Button className="bg-text text-slate-950 mt-2 w-full cursor-pointer hover:bg-white/80 transition-all"><a href="https://github.com/Rickzinho3/neorick">Ver documentação</a><FaExternalLinkAlt /></Button>
                    </ul>
                </nav>
            </section>

            <section className="px-3 pt-10 overflow-y-auto h-[calc(100vh-32px)] scroll-invisivel w-full md:w-flex-1">
                <code className="text-sm text-text/30">Estilizado com TailwindCSS V4</code>
                <h1 className="text-5xl text-text font-bold opacity-0 animate-fade-in-up">
                    Monitore seu sistema com uma interface limpa e moderna
                </h1>
                <Separator className="my-5" />
                <p className="text-lg opacity-0 animate-fade-in-up">
                    Faça uso de uma interface moderna e de código aberto, além
                    de uma ferramenta que gera relatórios completos sobre o uso
                    do seu sistema
                </p>
                <Separator className="my-5" />

                <div className="flex flex-col">
                    <code className="text-sm text-text/30 ml-1">Neorick V1</code>
                    <Image
                        src={neorick}
                        alt="NeoRick"
                        className="w-full opacity-0 animate-fade-in-up"
                    />
                </div>

                <Separator className="my-5" />

                <div className="w-full">
                    <h1 className="text-5xl font-bold opacity-0 animate-fade-in-up mb-10">
                        Instalação
                    </h1>
                    <div>
                        <p className="text-lg font-medium opacity-0 animate-fade-in-up">
                            1. Instale a biblioteca via pip
                        </p>

                        <div className="border border-border max-w-[400px] mt-2 rounded-md px-1 pb-1 pt-[.5px] opacity-0 animate-fade-in-up">
                            <p className="text-sm mb-[.5px] text-text/30">
                                Terminal
                            </p>
                            <div className="bg-[#27272a80] rounded-sm p-2">
                                <code>
                                    $ <span className="text-rick">pip </span>install neorick
                                </code>
                            </div>
                        </div>

                        <p className="text-lg font-medium mt-3 opacity-0 animate-fade-in-up">
                            2. Faça a chamada da interface
                        </p>

                        <div className="border border-border max-w-[400px] mt-2 rounded-md px-1 pb-1 pt-[.5px] opacity-0 animate-fade-in-up">
                            <p className="text-sm mb-[.5px] text-text/30">
                                Terminal
                            </p>
                            <div className="bg-[#27272a80] rounded-sm p-2">
                                <code>
                                    $ <span className="text-rick">neorick</span>
                                </code>
                            </div>
                        </div>

                        <p className="text-lg font-medium mt-3 opacity-0 animate-fade-in-up">
                            3. Crie um relatório de uso do sistema
                        </p>

                        <div className="border border-border max-w-[400px] mt-2 rounded-md px-1 pb-1 pt-[.5px] opacity-0 animate-fade-in-up">
                            <p className="text-sm mb-[.5px] text-text/30">
                                Terminal
                            </p>
                            <div className="bg-[#27272a80] rounded-sm p-2">
                                <code>
                                    $ <span className="text-rick">neorick-create</span><span className="text-text/30"> =&gt; C:\downloads</span>
                                </code>
                            </div>
                        </div>
                    </div>
                </div>
                <Separator className="my-5" />
                <div className="flex items-center mb-10 gap-5">
                    <FaFolderOpen className="text-5xl" />
                    <h1 className="text-5xl font-bold opacity-0 animate-fade-in-up">Recursos</h1>
                </div>
                <Ferramentas />

                <Separator className="my-5" />
                <div className="flex items-center mb-10 gap-5">
                    <FaCode className="text-5xl" />
                    <h1 className="text-5xl font-bold opacity-0 animate-fade-in-up">Tecnologias</h1>
                </div>
                <Tecnologias />
            </section>

            <section className="w-[25%] ml-auto hidden md:flex md:mr-5">
                <div className="ml-10 mr-10 mt-10 h-[400px] flex flex-col gap-10">
                    <div className="flex flex-col gap-4">
                        <p className="font-medium">Utilizado nesta página</p>

                        <ul className="flex flex-col gap-2">
                            <a href="https://tailwindcss.com/">
                                <li className="text-[#ffffff70]">Frameworks</li>
                            </a>
                            <a href="https://www.typescriptlang.org/">
                                <li className="text-[#ffffff70] w-20 hover:text-white transition-all">
                                    TypeScript
                                </li>
                            </a>
                            <a href="https://nextjs.org/">
                                <li className="text-[#ffffff70] w-20 hover:text-white transition-all">
                                    Next.js
                                </li>
                            </a>
                        </ul>
                    </div>

                    <Card className="border border-border lg:w-[300px]">
                        <CardHeader>
                            <CardTitle>
                                <h1>NeoRick</h1>
                            </CardTitle>
                            <CardDescription>
                                <p>
                                    Uma interface de terminal moderna e
                                    minimalista, inspirada no Neofetch.
                                </p>
                            </CardDescription>
                        </CardHeader>

                        <CardFooter className="flex flex-col gap-3">
                            <div className="flex gap-3">
                                <a href="https://github.com/rickzinho3" className="hover:bg-nav-hover/70 p-1 rounded-md transition-all">
                                    <FaGithub className="w-7 h-7" />
                                </a>
                                <a href="https://www.instagram.com/henrique.ilf" className="hover:bg-nav-hover/70 p-1 rounded-md transition-all">
                                    <FaInstagram className="w-7 h-7" />
                                </a>
                                <a href="https://www.linkedin.com/in/jos%C3%A9-henrique-/?trk=opento_sprofile_details" className="hover:bg-nav-hover/70 p-1 rounded-md transition-all">
                                    <FaLinkedin className="w-7 h-7" />
                                </a>
                            </div>
                            <Button className="bg-white text-black w-full cursor-pointer mt-3 hover:bg-white/80 transition-all">
                                <a href="mailto:neorick.network@gmail.com?subject=Contato&body=Ol%C3%A1,%20gostaria%20de%20fazer%20parte%20do%20projeto" className="flex items-center gap-2">Faça parte <FaLink /></a>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </section>
        </main>
    );
}
