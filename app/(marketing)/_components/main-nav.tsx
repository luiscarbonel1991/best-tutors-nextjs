import {Button} from "@/components/ui/button";
import Link from "next/link";


export const MainNav = () => {
    return (
        <nav className="md:ml-auto justify-end  w-full flex items-center gap-x-2">
            <Button asChild variant={"outline"} className="border-2 border-primary rounded-3xl shadow-2xl transition-transform hover:translate-y-[-1px] hover:scale-[1.01] hover:border-b-2 hover:border-primary">
                <Link href={"/auth/login"}>Sign In</Link>
            </Button>
        </nav>
    );
}
