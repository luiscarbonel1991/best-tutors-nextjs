import {Hero} from "@/app/[lang]/(marketing)/_components/hero";
import {Locale} from "@/i18n-config";
import {getDictionary} from "@/lib/dictionary";


const MarketingPage = async ({
                           params: {lang}
                       }: { params: { lang: Locale} }
) => {

    const dictionary = await getDictionary(lang)
    return (
        <>
            <Hero dictionary={dictionary.marketing_page}/>
        </>
    );
}

export default MarketingPage;