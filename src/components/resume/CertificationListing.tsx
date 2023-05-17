import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { CertificationElement } from "@/components/resume/CertificationElement";


export const CertificationListing = () => {
    return (
        <>
            <div className={'flex flex-col items-start my-16'}>
                <div className={'flex flex-row items-center mb-6'}>
                    <div className={'p-2 bg-orange-accent rounded-full w-fit relative'}>
                        <CheckBadgeIcon className={'text-white w-8 h-8'}/>
                        <div className={'absolute h-full w-[2px] left-[23px] top-[47px] bg-gray-500/50'}></div>
                    </div>
                    <h2 className={'font-bold text-orange-accent text-3xl pl-4'}>Certifications</h2>
                </div>
                <div className={'flex flex-col items-start'}>
                    <CertificationElement
                        certName={'Intermediate Python'}
                        company={'DataCamp'}
                        achieveDate={'April, 2021'}
                    />
                    <CertificationElement
                        certName={'Pandas Foundations'}
                        company={'DataCamp'}
                        achieveDate={'April, 2021'}
                    />
                    <CertificationElement
                        certName={'Supervised Learning with scikit-learn'}
                        company={'DataCamp'}
                        achieveDate={'April, 2021'}
                    />
                    <CertificationElement
                        certName={'Manipulating DataFrames with pandas'}
                        company={'DataCamp'}
                        achieveDate={'April, 2021'}
                        isLastElement={true}
                    />
                </div>
            </div>
        </>
    )
}