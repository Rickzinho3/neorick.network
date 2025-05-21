import { Button } from "@/components/ui/button"
import { FaDownload, FaBookOpen } from "react-icons/fa";
import { BsActivity } from "react-icons/bs"

export default function Header() {

    return (
        <header className="text-text w-full border-b border-border border-dashed md:w-full fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
            <div className="flex items-center justify-between p-3 ml-5 mr-5 border-l border-r border-border border-dashed md:ml-40 md:mr-40">
                <a href="https://github.com/rickzinho3/"><h1 className="text-3xl font-bold">NR</h1></a>

                <nav className="hidden md:flex md:items-center md:gap-4">
                    <BsActivity className="text-2xl text-text"/>
                    <p className="text-lg font-medium">Neorick V1.0</p>
                </nav>
            <Button asChild className="border border-border rounded-md px-6 py-5 cursor-pointer hover:bg-hover transition-all">
            <a href="/docs/neorick-1.2.2.tar.gz" download className="flex items-center gap-2">
                <FaDownload />
                Download .tar.gz
            </a>
            </Button>
            </div>
        </header>
    );
}