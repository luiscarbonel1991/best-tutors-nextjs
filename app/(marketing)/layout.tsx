import {Header} from "@/app/(marketing)/_components/header";


const MarketingLayout = ({
    children
}: { children: React.ReactNode }) => {
    return (
        <>
            <div className="relative flex min-h-screen flex-col bg-background">
                <Header />
                <main className="flex-1">
                    {children}
                </main>
            </div>
        </>
    )
}

export default MarketingLayout