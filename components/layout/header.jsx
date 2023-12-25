"use client";
import useScroll from "@/lib/hooks/use-scroll";
export default function Header() {
    const scrolled = useScroll(50);
    return <div className={`text-white fixed invisible w-full ${scrolled
        ? " bg-black/50 backdrop-blur-xl"
        : "bg-white/0"
        } z-30 transition-all xl:visible`}>
        <div className="flex max-w-screen-xl text-2xl mx-auto items-center justify-center ">
            <div className="py-10 mx-10">
                <a href="/">
                    <p className="hover:text-gray-400 transition-all duration-300 ease-in-out">О САЙТЕ</p>
                </a>
            </div>
            <div className="py-10 mx-10">
                <a href="/read">
                    <p className="hover:text-gray-400 transition-all duration-300 ease-in-out">ЧИТАТЬ</p>
                </a>
            </div>
            <div className="py-10 mx-10">
                <p className="hover:text-gray-400 transition-all duration-300 ease-in-out">РЕДАКТИРОВАТЬ</p>
            </div>
        </div>
    </div>
}