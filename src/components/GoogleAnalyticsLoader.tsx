import Script from "next/script";
import { GOOGLE_ANALYTIC_TAG_ID } from "@/utils/constants";
import React from "react";


export const GoogleAnalyticsLoader = () => {
    return (
        <>
            <Script async={true} src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTIC_TAG_ID}`}/>
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                            
                                gtag('config', '${GOOGLE_ANALYTIC_TAG_ID}');
                            `,
                }}
            />
        </>
    )
}