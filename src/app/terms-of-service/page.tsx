import { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { GoogleAnalyticsLoader } from "@/components/GoogleAnalyticsLoader";


export const metadata: Metadata = {
    title: 'Terms of Service',
}

export default async function TermsOfServicePage() {
    return (
        <>
            <GoogleAnalyticsLoader/>
            <p className={'text-black mb-8 text-base'}>Effective: May 13, 2023</p>
            <div className={'flex flex-col mb-10'}>
                <h1 className={'font-black text-3xl mb-2'}>Terms of Service</h1>
                <p>Welcome to our website! These terms of service (&quot;Terms&quot;) govern your access and use of our website, and any services or content available on or through our website. By using our website, you agree to these Terms.</p>
            </div>
            <div className={'flex flex-col mb-6'}>
                <h2 className={'font-bold text-2xl mb-2'}>Google Analytics</h2>
                <p>Our website uses Google Analytics to collect and analyze information about how visitors use our website. Google Analytics uses cookies to collect information such as how often users visit our website, what pages they visit when they do so, and what other websites they visited prior to coming to our website. We use the information we get from Google Analytics to improve our website. By using our website, you consent to the processing of data about you by Google Analytics in the manner and for the purposes set out above.</p>
            </div>
            <div className={'flex flex-col mb-6'}>
                <h2 className={'font-bold text-2xl mb-2'}>Cloudflare</h2>
                <p>Our website uses Cloudflare to improve performance and security. Cloudflare may collect certain information about visitors to our website, including IP address, device type, and browser type. This information may be used to analyze and improve the performance and security of our website. By using our website, you consent to the processing of data about you by Cloudflare in the manner and for the purposes set out above.</p>
            </div>
            <div className={'flex flex-col mb-6'}>
                <h2 className={'font-bold text-2xl mb-2'}>Contact Us</h2>
                <p>If you have any questions or suggestions about our Terms, please <Link className={'text-orange-accent font-bold'} href={'mailto:contact@yarnesavaete.com'}>contact us</Link>.</p>
            </div>
        </>
    )
}
