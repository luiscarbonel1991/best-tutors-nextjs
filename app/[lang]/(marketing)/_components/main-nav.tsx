import {Button} from "@/components/ui/button";
import Link from "next/link";
import LocaleSwitcher from "@/components/locale-switcher";
import {Locale} from "@/i18n-config";
import {getDictionary} from "@/lib/dictionary";


export const MainNav = async ({
    lang
                        }
                        : {
    lang: Locale
                        }
                        ) => {

    const dictionary = await getDictionary(lang)
    return (
        <nav className="md:ml-auto justify-end  w-full flex items-center gap-x-2">
            <LocaleSwitcher lang={lang} dictionary={dictionary.languages}/>
            <Button asChild variant={"outline"} className="border-2 border-primary rounded-3xl shadow-2xl transition-transform hover:translate-y-[-1px] hover:scale-[1.01] hover:border-b-2 hover:border-primary">
                <Link href={"/auth/login"}>Sign In</Link>
            </Button>
        </nav>
    );
}
