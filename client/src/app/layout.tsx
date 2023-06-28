import './globals.css'
import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: ["400", "600"],
    subsets: ["latin"]
    
});
export const metadata = {
    title: 'List',
    description: 'Application for various lists',
    keywords: ["list"]
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={poppins.className}>{children}</body>
        </html>
    )
}
