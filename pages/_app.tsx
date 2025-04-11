import "@/styles/app.sass";
import type { AppProps } from "next/app";
import { Manrope } from "@next/font/google";
import { TooltipProvider } from "react-tooltip";

const manrope = Manrope({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    display: "block",
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <style jsx global>{`
                html {
                    font-family: ${manrope.style.fontFamily};
                }
            `}</style>
            <TooltipProvider>
                <Component {...pageProps} />
            </TooltipProvider>
        </>
    );
}
