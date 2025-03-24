import { Menu } from "lucide-react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { House, Shirt, MessageCircle, Instagram } from "lucide-react";
import util from "@/data/utils";

const SidebarMenu = () => {
    const deleteStorage = () => {
        sessionStorage.clear()
    }

    return (
        <Sheet>
            <SheetTrigger><Menu className="text-white" /></SheetTrigger>
            <SheetContent className="rounded-l-xl bg-primary border-none">
                <SheetHeader>
                    <SheetTitle className="flex justify-start text-white">Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col w-full space-y-3 mt-4">
                    <SheetClose asChild>
                        <a href="/catalogo"
                            className="flex items-center gap-2 bg-gray-900 text-white text-center p-2 font-semibold rounded-xl w-full text-sm hover:scale-[103%]"
                            onClick={deleteStorage}
                        >
                            <House size={24} />
                            Início
                        </a>
                    </SheetClose>

                    <SheetClose asChild>
                        <a
                            href="/guia-de-medidas"
                            className="flex items-center gap-2 bg-gray-900 text-white text-center p-2 font-semibold rounded-xl w-full text-sm hover:scale-[103%]"
                        >
                            <Shirt size={24} />
                            Guia de Medidas
                        </a>
                    </SheetClose>

                    <SheetClose asChild>
                        <a
                            href={util.instagram} target="_blank"
                            className="flex items-center gap-2 bg-gray-900 text-white text-center p-2 font-semibold rounded-xl w-full text-sm hover:scale-[103%]"
                        >
                            <Instagram size={24} />
                            Redes Sociais
                        </a>
                    </SheetClose>

                    <SheetClose asChild>
                        <a
                            href={util.telNumber} target="_blank"
                            className="flex items-center gap-2 bg-gray-900 text-white text-center p-2 font-semibold rounded-xl w-full text-sm hover:scale-[103%]"
                        >
                            <MessageCircle size={24} />
                            Contato
                        </a>
                    </SheetClose>
                </div>
            </SheetContent>
        </Sheet>
    );
}

export default SidebarMenu;