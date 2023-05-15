import { Metadata } from "next";
import React from "react";
import { GoogleAnalyticsLoader } from "@/components/GoogleAnalyticsLoader";


export const metadata: Metadata = {
    title: 'Projects | Yarne Savaete',
}

export default async function ProjectsPage() {
    return (
        <>
            <GoogleAnalyticsLoader/>
            <h1>Projects</h1>
        </>
    )
}
