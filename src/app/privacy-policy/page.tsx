import { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { GoogleAnalyticsLoader } from "@/components/GoogleAnalyticsLoader";


export const metadata: Metadata = {
    title: 'Privacy Policy',
}

export default async function PrivacyPolicyPage() {
    return (
        <>
            <GoogleAnalyticsLoader/>
            <p className={'text-black mb-8 text-base'}>Effective: May 13, 2023</p>
            <div className={'flex flex-col mb-10'}>
                <h1 className={'font-black text-3xl mb-2'}>Privacy Policy</h1>
                <p>We at yarnesavaete.com respect your privacy and are committed to protecting it through our compliance with this Privacy Policy. This policy describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.</p>
            </div>
            <div className={'flex flex-col mb-6'}>
                <h2 className={'font-bold text-2xl mb-2'}>Information We Collect</h2>
                <p>We only collect information from Google Analytics and Cloudflare. Google Analytics and Cloudflare collect and process the following types of information:</p>
                <div className={'flex flex-row my-1'}>
                    <span className={'text-orange-accent'}>- </span>
                    <p className={'ml-2'}>Personal information such as your IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access our website.</p>
                </div>
                <div className={'flex flex-row mt-1'}>
                    <span className={'text-orange-accent'}>- </span>
                    <p className={'ml-2'}>Usage information such as information about how you use our website and the pages you visit.</p>
                </div>
            </div>
            <div className={'flex flex-col mb-6'}>
                <h2 className={'font-bold text-2xl mb-2'}>Use of Information</h2>
                <p>We use the information collected by Google Analytics and Cloudflare for various purposes, including:</p>
                <div className={'flex flex-row my-1'}>
                    <span className={'text-orange-accent'}>- </span>
                    <p className={'ml-2'}>To analyze and improve our website and our products and services.</p>
                </div>
            </div>
            <div className={'flex flex-col mb-6'}>
                <h2 className={'font-bold text-2xl mb-2'}>Sharing of Information</h2>
                <p>We may share the information collected by Google Analytics and Cloudflare with third-party service providers who perform services on our behalf, such as hosting and maintenance services, data analysis, and customer service. We may also share the information collected with our affiliates or with third parties for marketing purposes or as otherwise required by law.</p>
            </div>
            <div className={'flex flex-col mb-6'}>
                <h2 className={'font-bold text-2xl mb-2'}>Cookies and Other Tracking Technologies</h2>
                <p>Google Analytics and Cloudflare use cookies and other tracking technologies to collect information about your use of our website. Cookies are small text files that are placed on your device when you access our website. They allow us to recognize your device and remember your preferences and other information about your visit. We may also use web beacons, which are small images that allow us to track the actions of users on our website.</p>
            </div>
            <div className={'flex flex-col mb-6'}>
                <h2 className={'font-bold text-2xl mb-2'}>Data Security</h2>
                <p>We have implemented reasonable measures to secure the information we collect from Google Analytics and Cloudflare against unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet, or method of electronic storage, is completely secure.</p>
            </div>
            <div className={'flex flex-col mb-6'}>
                <h2 className={'font-bold text-2xl mb-2'}>Changes to this Privacy Policy</h2>
                <p>We may update this Privacy Policy from time to time. We will post any changes on our website with the updated Privacy Policy effective date.</p>
            </div>
            <div className={'flex flex-col mb-6'}>
                <h2 className={'font-bold text-2xl mb-2'}>Contact Us</h2>
                <p>If you have any questions or concerns about this Privacy Policy or our practices, please <Link className={'text-orange-accent font-bold'} prefetch={false} href={'mailto:contact@yarnesavaete.com'}>contact us</Link>.</p>
            </div>
        </>
    )
}
