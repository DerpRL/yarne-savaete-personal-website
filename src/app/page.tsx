import { Metadata } from "next";
import React from "react";
import { EyeOpener } from "@/components/landing/EyeOpener";


export const metadata: Metadata = {
    title: 'Home',
}

export default async function LandingPage() {

    return (
        <>
            <EyeOpener/>
        </>
    )
}
