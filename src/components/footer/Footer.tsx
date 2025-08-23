import { dataFooter } from "@/components/footer/footer.data"
import Link from "next/link";

const CURRENT_YEAR: Readonly<number> = (new Date()).getFullYear();

export default function Footer() {

    return (
        <footer className="w-full max-w-2xl pt-32 pb-8 px-4 lg:py-8 font-at-chrome flex flex-col gap-3 justify-center items-center text-xs text-center uppercase">
            <div className="flex flex-row gap-3">
                <Link href={dataFooter.privacy.href}>
                    {dataFooter.privacy.text}
                </Link>
                <Link href={dataFooter.terms.href}>
                    {dataFooter.terms.text}
                </Link>
            </div>
            <div>
                {dataFooter.text}
            </div>
            <div>
                {dataFooter.rightsReserved.textStart} {CURRENT_YEAR} {dataFooter.rightsReserved.textEnd}
            </div>
        </footer>
    );
}
