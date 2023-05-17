import { BriefcaseIcon } from "@heroicons/react/24/solid";
import { WorkHistoryElement } from "@/components/resume/WorkHistoryElement";


export const WorkHistoryListing = () => {
    return (
        <>
            <div className={'flex flex-col items-start my-16'}>
                <div className={'flex flex-row items-center mb-6'}>
                    <div className={'p-2 bg-orange-accent rounded-full w-fit relative'}>
                        <BriefcaseIcon className={'text-white w-8 h-8'}/>
                        <div className={'absolute h-full w-[2px] left-[23px] top-[47px] bg-gray-500/50'}></div>
                    </div>
                    <h2 className={'font-bold text-orange-accent text-3xl pl-4'}>Work History</h2>
                </div>
                <div className={'flex flex-col items-start'}>
                    <WorkHistoryElement
                        placeName={'Software Engineer • Internship'}
                        location={'Group Van Damme (Skkills), Oostkamp'}
                        description={'Continued working on existing projects or starting projects for the internship with your influence on the technologies. Worked with HTML, CSS, JavaScript, React, WordPress, MySQL, PHP and Flutter'}
                        beginDate={'September 2022'}
                        endDate={'December 2022'}
                    />
                    <WorkHistoryElement
                        placeName={'Checkout & Stocking • Vacation Job'}
                        location={'Colruyt Group, Colruyt, Torhout'}
                        description={'Stocking products in the store and warehouse. Serving customers at the cash register.'}
                        beginDate={'March, 2022'}
                        endDate={'August, 2022'}
                    />
                    <WorkHistoryElement
                        placeName={'Cleaning • Vacation Job'}
                        location={'AZ Sint-Lucas, Bruges'}
                        description={'Cleaning up rooms and desks. In doing so, had a lot of social contact with both patients and staff.'}
                        beginDate={'July, 2021'}
                        endDate={'July, 2021'}
                    />
                    <WorkHistoryElement
                        placeName={'Cleaning • Vacation Job'}
                        location={'AZ Sint-Lucas, Bruges'}
                        description={'Cleaning up rooms and desks. Hereby had a lot of social contact with the patients as staff of the different departments in the hospital.'}
                        beginDate={'August, 2020'}
                        endDate={'August, 2020'}
                    />
                    <WorkHistoryElement
                        placeName={'Checkout & Stocking • Vacation Job'}
                        location={'Colruyt Group - Okay, Loppem'}
                        description={'Stocking products in the store and warehouse. Serving customers at the cash register.'}
                        beginDate={'July, 2019'}
                        endDate={'August, 2019'}
                    />
                    <WorkHistoryElement
                        placeName={'Electrician • Internship'}
                        location={'Steen, Zedelgem'}
                        description={'Installing electrical installation but more focused on industrial.'}
                        beginDate={'April, 2019'}
                        endDate={'May, 2019'}
                    />
                    <WorkHistoryElement
                        placeName={'Cleaning • Vacation Job'}
                        location={'AZ Sint-Lucas, Bruges'}
                        description={'Cleaning up rooms and desks. Hereby had a lot of social contact with the patients as staff of the different departments in the hospital.'}
                        beginDate={'August, 2018'}
                        endDate={'August, 2018'}
                    />
                    <WorkHistoryElement
                        placeName={'Electrician • Internship'}
                        location={'De Ridder, Zedelgem'}
                        description={'Installing electrical installation and troubleshooting electrical problems with a focus on residential.'}
                        beginDate={'April, 2018'}
                        endDate={'May, 2018'}
                        isLastElement={true}
                    />
                </div>
            </div>
        </>
    )
}