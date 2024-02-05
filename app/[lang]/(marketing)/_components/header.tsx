import {MainNav} from "@/app/[lang]/(marketing)/_components/main-nav";
import {Logo} from "@/app/[lang]/(marketing)/_components/logo";
import {Locale} from "@/i18n-config";

export const Header = ({
    lang
                          }: {
    lang: Locale
                       }) => {
    return (
        <header
            className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center space-x-2">
                <Logo/>
                <MainNav lang={lang}/>
            </div>
        </header>
    )
}