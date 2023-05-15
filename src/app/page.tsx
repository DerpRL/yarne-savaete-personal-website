import { Metadata } from "next";
import React from "react";
import { EyeOpener } from "@/components/landing/EyeOpener";
import { SkillsListing } from "@/components/landing/SkillsListing";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import Script from "next/script";
import { ProjectListing } from "@/components/landing/ProjectListing";
import { GoogleAnalyticsLoader } from "@/components/GoogleAnalyticsLoader";


export const metadata: Metadata = {
    title: 'Home | Yarne Savaete',
}

export default async function LandingPage() {
    return (
        <>
            <GoogleAnalyticsLoader/>
            <Script src="/assets/js/script.js" />
            <EyeOpener/>
            <div className={'w-full motion-safe:animate-text-reveal-1'}>
                <div className={'p-3 rounded-full bg-gray-500/5 w-fit motion-safe:animate-bounce mx-auto border-gray-800 border cursor-pointer'} id={'buttonToMySkills'}>
                    <ArrowDownIcon className={'w-5 h-5 text-gray-700'}/>
                </div>
            </div>
            <SkillsListing/>
            <ProjectListing/>
        </>
    )
}
