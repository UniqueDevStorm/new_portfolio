import MainPage from "@page/MainPage";
import SecondPage from "@page/SecondPage";
import Navigation from "@components/Navigation";
import { NextSeo } from "next-seo";
import {useEffect, useState} from "react";
import Footer from "@components/Footer";

export default function Home() {
    const [ isDarkMode, setIsDarkMode ] = useState(false);
    useEffect(() => {
        setIsDarkMode(localStorage.getItem('theme') !== null)
    })
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <NextSeo
                title='STORM'
                description="Storm's Portfolio page."
                openGraph={{
                    title: 'STORM',
                    description: "Storm's Portfolio page.",
                    images: [
                        {
                            url: 'https://cdn.discordapp.com/avatars/299895531701010442/101ec0911a02ac584e82e8b2e34cfca5.webp?size=256',
                            width: 1000,
                            height: 1000,
                            alt: 'STORM'
                        }
                    ]
                }}
            />
            <Navigation />
            <MainPage />
            <SecondPage />
            <div className='flex-grow md:mb-24 mb-0' />
            <Footer />
        </div>
    )
}