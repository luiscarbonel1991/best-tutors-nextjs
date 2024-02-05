import {Header} from "@/app/[lang]/(marketing)/_components/header";
import {Locale} from "@/i18n-config";


const MarketingLayout = ({
    children,
    params
}: { children: React.ReactNode, params: { lang: Locale} }) => {
    return (
        <>
            <div className="relative flex min-h-screen flex-col bg-background">
                <Header lang={params.lang}/>
                <main className="flex-1">
                    {children}
                </main>
            </div>
        </>
    )
}

export default MarketingLayout