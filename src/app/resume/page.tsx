import { Metadata } from "next";
import React from "react";
import { GoogleAnalyticsLoader } from "@/components/GoogleAnalyticsLoader";
import { IntroductionSection } from "@/components/resume/introductionSection";
import { ResumeSkillListing } from "@/components/resume/ResumeSkillListing";
import { WorkHistoryListing } from "@/components/resume/WorkHistoryListing";
import { EducationListing } from "@/components/resume/EducationListing";
import { CertificationListing } from "@/components/resume/CertificationListing";
import { LanguageListing } from "@/components/resume/LanguageListing";
import { HobbyListing } from "@/components/resume/HobbyListing";


export const metadata: Metadata = {
    title: 'Resume',
}

export default async function ProjectsPage() {
    return (
        <>
            <GoogleAnalyticsLoader/>
            <IntroductionSection />
            <ResumeSkillListing/>
            <WorkHistoryListing/>
            <EducationListing/>
            <CertificationListing/>
            <LanguageListing/>
            <HobbyListing/>
        </>
    )
}
