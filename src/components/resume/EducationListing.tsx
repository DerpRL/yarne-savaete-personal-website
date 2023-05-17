import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { EducationElement } from "@/components/resume/EducationElement";


export const EducationListing = () => {
    return (
        <>
            <div className={'flex flex-col items-start my-16'}>
                <div className={'flex flex-row items-center mb-6'}>
                    <div className={'p-2 bg-orange-accent rounded-full w-fit relative'}>
                        <AcademicCapIcon className={'text-white w-8 h-8'}/>
                        <div className={'absolute h-full w-[2px] left-[23px] top-[47px] bg-gray-500/50'}></div>
                    </div>
                    <h2 className={'font-bold text-orange-accent text-3xl pl-4'}>Education</h2>
                </div>
                <div className={'flex flex-col items-start'}>
                    <EducationElement
                        educationName={'Bachelor of Science: Applied Computer Science'}
                        location={'HoWest Campus Bruges Station - Bruges'}
                        beginDate={'September, 2019'}
                        endDate={'February, 2023'}
                    />
                    <EducationElement
                        educationName={'TSO Electricity'}
                        location={'VTI Torhout Sint-Aloysius - Torhout'}
                        beginDate={'September, 2015'}
                        endDate={'June, 2019'}
                    />
                    <EducationElement
                        educationName={'Electricity'}
                        location={'Spes Nostra Instituut - Zedelgem'}
                        beginDate={'September, 2013'}
                        endDate={'June, 2015'}
                        isLastElement={true}
                    />
                </div>
            </div>
        </>
    )
}