import { Button } from "@/components/ui/button";
import { FaHeart, FaLink } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="border-t border-border border-dashed min-w-full h-[50px]">
            <div className="flex justify-between mx-5 md:mx-40 border-l border-r border-border border-dashed h-full p-2">
                <p className="flex items-center gap-2 font-medium mx-3 text-text/40">Made with <FaHeart /> by <a href="https://github.com/Rickzinho3" className="text-text border-b-[.1px] border-white">Rick</a></p>
                <Button className="bg-white text-black md:hidden"><a href="mailto:neorick.network@gmail.com?subject=Contato&body=Ol%C3%A1,%20gostaria%20de%20fazer%20parte%20do%20projeto
" className="flex items-center gap-2">Faça parte <FaLink /></a></Button>
            </div>
        </footer>
    )
}