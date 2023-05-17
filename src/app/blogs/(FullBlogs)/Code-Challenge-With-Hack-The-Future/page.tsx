import { Metadata } from "next";
import React from "react";
import { GoogleAnalyticsLoader } from "@/components/GoogleAnalyticsLoader";


export const metadata: Metadata = {
    title: 'Code Challenge With Hack The Future | Blogs',
}

export default async function CodeChallengeWithHackTheFutureBlogPost() {
    return (
        <>
            <GoogleAnalyticsLoader/>
            <h1>Code-Challenge-With-Hack-The-Future</h1>
        </>
    )
}
