import Link from "next/link";
import {siteConfig} from "@/config/site";
import {FiActivity} from "react-icons/fi";

export const Logo = () => {
    return (
        <Link href="/public" className="mr-6 flex items-center space-x-2 w-full">
            {/*<Icons.logo className="h-6 w-6" />*/}
            <FiActivity className="h-6 w-6" />
            <span className="font-bold sm:inline-block">
                {siteConfig.name}
            </span>
        </Link>
    );
};