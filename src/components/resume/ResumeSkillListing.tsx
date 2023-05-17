import { Squares2X2Icon } from "@heroicons/react/24/solid";
import { ResumeSkillElement } from "@/components/resume/ResumeSkillElement";


export const ResumeSkillListing = () => {
    return (
        <>
            <div className={'flex flex-col items-start my-16'}>
                <div className={'flex flex-row items-center mb-6'}>
                    <div className={'p-2 bg-orange-accent rounded-full w-fit relative'}>
                        <Squares2X2Icon className={'text-white w-8 h-8'}/>
                        <div className={'absolute h-full w-[2px] left-[23px] top-[47px] bg-gray-500/50'}></div>
                    </div>
                    <h2 className={'font-bold text-orange-accent text-3xl pl-4'}>Skills</h2>
                </div>
                <div className={'flex flex-col items-start'}>
                    <ResumeSkillElement
                        skillName={'HTML'}
                        skillRating={5}
                    />
                    <ResumeSkillElement
                        skillName={'JavaScript'}
                        skillRating={4}
                    />
                    <ResumeSkillElement
                        skillName={'TypeScript'}
                        skillRating={4}
                    />
                    <ResumeSkillElement
                        skillName={'CSS'}
                        skillRating={4}
                    />
                    <ResumeSkillElement
                        skillName={'Tailwind CSS'}
                        skillRating={4}
                    />
                    <ResumeSkillElement
                        skillName={'React'}
                        skillRating={4}
                    />
                    <ResumeSkillElement
                        skillName={'Next.js'}
                        skillRating={4}
                    />
                    <ResumeSkillElement
                        skillName={'MySQL'}
                        skillRating={4}
                    />
                    <ResumeSkillElement
                        skillName={'Digital Ocean'}
                        skillRating={3}
                    />
                    <ResumeSkillElement
                        skillName={'Git'}
                        skillRating={3}
                        isLastElement={true}
                    />
                </div>
            </div>
        </>
    )
}