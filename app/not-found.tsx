import Link from "next/link";
import {Button} from "@/components/ui/button";


export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center md:flex-row md:items-center md:justify-center md:space-x-6">
            <div className="space-x-2 md:space-y-5">
                <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
                    404 😵
                </h1>
            </div>
            <div className="max-w-md">
                <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Sorry we couldn't find this page.
                </p>
                <p className="mb-8">
                    But dont worry, you can find plenty of other things on our homepage.
                </p>
                <Button asChild variant="default" >

                    <Link
                        href="/"
                    >
                        Back to homepage
                    </Link>
                </Button>
            </div>
        </div>
    )
}
