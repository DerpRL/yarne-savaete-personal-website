import { PersonalInformationSection } from "@/components/resume/PersonalInformationSection";


export const IntroductionSection = () => {
    return (
        <div>
            <div className={'flex flex-col items-center sm:items-start'}>
                <div className={'flex flex-col items-center sm:items-start mb-4'}>
                    <h1 className={'text-5xl font-black text-orange-accent text-center'}>Yarne Savaete</h1>
                    <p className={'text-lg pt-1 text-gray-500 text-center'}>Software Engineer & Front-end Developer</p>
                </div>
                <PersonalInformationSection/>
                <p className={'text-lg'}>As a software engineer, coding programs and building websites has become my passion. Mainly, I prefer to do the front-end of a website with technologies such as React, Next.js, HTML, CSS, Tailwind CSS, JavaScript and TypeScript. I also have experience with back-end such as Express Server, REST API and MySQL.</p>
            </div>
        </div>
    )
}
