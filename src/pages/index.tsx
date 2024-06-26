import Blog from "@/components/elements/Blog";
import Introduction from "@/components/elements/Introduction";
import Work from "@/components/elements/work/Work";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Create T3 App</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Introduction />
                <div className="mx-auto grid max-w-7xl grid-cols-1 justify-items-center md:grid-cols-3">
                    <div className="col-span-2 w-full ">
                        <Blog />
                    </div>
                    <div className="w-full">
                        <Work/>
                    </div>
                </div>
            </main>
        </>
    );
}
