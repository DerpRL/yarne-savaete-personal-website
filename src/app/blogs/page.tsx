import { Metadata } from "next";
import React from "react";
import { GoogleAnalyticsLoader } from "@/components/GoogleAnalyticsLoader";
import { BlogElement } from "@/components/landing/BlogElement";


export const metadata: Metadata = {
    title: 'Blogs',
}

export default async function BlogsPage() {
    return (
        <>
            <GoogleAnalyticsLoader/>
            <h1 className={'text-5xl font-black text-orange-accent mb-16 text-center md:text-left'}>Blogs</h1>
            <div className={'flex flex-col items-center'}>
                <BlogElement
                    name={'HoWest Goes USA'}
                    description={'Welcome to an exciting week-long school trip to San Francisco, California, where we explored some of the most innovative and iconic companies in the tech industry. During our visit, we had the opportunity to tour the headquarters of Microsoft, Cloudflare, Palo Alto Networks, Apple Visitor Center, Alumni, Odoo, and Oracle.'}
                    blogPostData={'3 April, 2023 - 10 April, 2023'}
                    imageUrl={'San_Fransisco_Thumb.png'}
                    detailedBlogUrl={'/blogs/HoWest-Goes-USA'}
                    reverseOrder={false}
                />
                <BlogElement
                    name={'Code challenge with Hack The Future'}
                    description={'Together with Simon Plyson, we participated in the code challenges of Hack The Future. We both signed up for the Zinderlabs challenges. The code challenge was that we had to find the murderer and the murder weapon with certain factors to take in.'}
                    blogPostData={'2 December, 2021'}
                    imageUrl={'Hack_The_Future_Thumb.png'}
                    reverseOrder={true}
                />
            </div>
        </>
    )
}
