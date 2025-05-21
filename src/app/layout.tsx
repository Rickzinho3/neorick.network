import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Neorick",
    description: "Uma interface moderna e estilosa com gerenciaamento de sistema e geração de relatórios.",
    openGraph: {
        title: "Neorick",
        description: "Uma interface moderna e estilosa com gerenciaamento de sistema e geração de relatórios.",
        type: "website",
        locale: "pt_BR",
        images: [
            {
                url: "/og-image.jpg", // Você precisará adicionar esta imagem na pasta public
                width: 1200,
                height: 630,
                alt: "Preview da página",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Neorick",
        description: "Uma interface moderna e estilosa com gerenciaamento de sistema e geração de relatórios.",
        images: ["/RC.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br" className="scroll-smooth">
            <body
                className={`${geistSans.variable} ${geistMono.variable} bg-foreground min-h-screen selection:bg-white selection:text-black scroll-smooth`}
            >
                {children}
            </body>
        </html>
    );
}
