import { dataHeader } from "@/components/header/header.data"

export default function Header() {
    return (
        <header className="w-full py-4 bg-orange-custom font-at-chrome font-bold text-2xl text-background
        flex justify-center items-center uppercase">
            {dataHeader.title}
        </header>
    );
}
