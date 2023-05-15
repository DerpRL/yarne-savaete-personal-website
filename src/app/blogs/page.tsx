import { Metadata } from "next";
import React from "react";
import { GoogleAnalyticsLoader } from "@/components/GoogleAnalyticsLoader";


export const metadata: Metadata = {
    title: 'Blogs | Yarne Savaete',
}

export default async function BlogsPage() {
    return (
        <>
            <GoogleAnalyticsLoader/>
            <h1>Blogs</h1>
        </>
    )
}
