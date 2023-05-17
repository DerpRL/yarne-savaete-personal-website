import { Metadata } from "next";
import React from "react";
import { GoogleAnalyticsLoader } from "@/components/GoogleAnalyticsLoader";


export const metadata: Metadata = {
    title: 'HoWest Goes USA | Blogs',
}

export default async function HoWestGoesUsaBlogPost() {
    return (
        <>
            <GoogleAnalyticsLoader/>
            <h1>HoWest Goes USA</h1>
        </>
    )
}
