import { FooterSection } from "@/components/Footerforauth"
import Header from "@/components/HeaderforAuth"

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header />
            {children}
            <FooterSection/>
        </>
    )
}
