import Head from "next/head";
import { ListAndInputWrapper } from "../components/ListAndInputWrapper";

export default function Home() {
    return (
        <div className="bg-black min-h-screen">
            <Head>
                <title>Hello</title>
                <meta name="description" content="An application for various lists" />
            </Head>

            <main className="container mx-auto py-10 px-4 flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-8 text-white" >HM&S list</h1>
                <ListAndInputWrapper />
            </main>
        </div>
    )
}
