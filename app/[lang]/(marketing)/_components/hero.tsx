import Link from "next/link";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {getDictionary} from "@/lib/dictionary";


export const Hero = ({dictionary}: { dictionary: Awaited<ReturnType<typeof getDictionary>>["marketing_page"]; }) => {

    return (

        <>
            <main className="isolate container grid lg:grid-cols-2 place-items-center pt-32 md:pb-24 px-4 md:px-10">

                <div className="py-6 md:order-1 hidden md:block">
                    <Image
                        priority={true}
                        src="/static/image/hero_v2.webp"
                        alt="A studend and a tutor in front of a computer teaching and learning"
                        height={440}
                        width={440}
                        className="rounded-2xl shadow-md"
                    />
                </div>

                <aside>
                    <Button variant="secondary" className="mb-2 rounded-tl-2xl rounded-br-2xl"
                            size="sm">
                        {dictionary.welcome}
                    </Button>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
                        {dictionary.find_the_best} {` `} <span
                        className="bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">{dictionary.tutor.toLowerCase()}</span>
                    </h1>
                    <p className="mt-6 text-xl text-gray-600 dark:text-gray-400">
                        {dictionary.upgrade_your_skills}
                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <Button asChild variant="default"
                                className="rounded-3xl transition ease-in-out delay-150 hover:-translate-y-1 scale-105 font-bold"
                                size="lg">
                            <Link
                                href="/auth/login"
                                aria-label="Get Started"
                            >
                                {dictionary.get_started}
                            </Link>
                        </Button>
                    </div>
                </aside>
            </main>
        </>
    );
}