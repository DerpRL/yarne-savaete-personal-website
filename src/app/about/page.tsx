import { Metadata } from "next";
import React from "react";
import { GoogleAnalyticsLoader } from "@/components/GoogleAnalyticsLoader";


export const metadata: Metadata = {
    title: 'About | Yarne Savaete',
}

export default async function AboutPage() {
    return (
        <>
            <GoogleAnalyticsLoader/>
            <h1>About</h1>
        </>
    )
}
