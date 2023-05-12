import { MySkillComponent } from "@/components/landing/MySkillComponent";


export const SkillsListing = () => {
    return (
        <div className={'flex flex-col items-center w-full my-8'}>
            <h2 className={'font-bold text-4xl my-5'}>My Skills</h2>
            <div className={'flex flex-col min-[1000px]:flex-row items-center w-full min-[1000px]:w-11/12 mx-auto justify-center'}>
                <MySkillComponent skillName={'JavaScript'} imageName={'JavaScript.png'} skillRating={4}/>
                <MySkillComponent skillName={'TypeScript'} imageName={'TypeScript.png'} skillRating={4}/>
                <MySkillComponent skillName={'Python'} imageName={'Python.png'} skillRating={3}/>
                <MySkillComponent skillName={'MySQL'} imageName={'MySQL.png'} skillRating={4}/>
            </div>
            <div className={'flex flex-col min-[1000px]:flex-row items-center w-full min-[1000px]:w-11/12 mx-auto justify-center'}>
                <MySkillComponent skillName={'React'} imageName={'React.png'} skillRating={4}/>
                <MySkillComponent skillName={'Next.js'} imageName={'NextJS.png'} skillRating={4}/>
                <MySkillComponent skillName={'Tailwind CSS'} imageName={'TailwindCSS.png'} skillRating={4}/>
                <MySkillComponent skillName={'Digital Ocean'} imageName={'DigitalOcean.png'} skillRating={3}/>
                <MySkillComponent skillName={'.NET'} imageName={'DotNet.png'} skillRating={2}/>
            </div>
            <div className={'flex flex-col min-[1000px]:flex-row items-center w-full min-[1000px]:w-11/12 mx-auto justify-center'}>
                <MySkillComponent skillName={'HTML'} imageName={'HTML.png'} skillRating={5}/>
                <MySkillComponent skillName={'CSS'} imageName={'CSS.png'} skillRating={4}/>
                <MySkillComponent skillName={'Git'} imageName={'Git.png'} skillRating={3}/>
                <MySkillComponent skillName={'Flutter'} imageName={'Flutter.png'} skillRating={2}/>
            </div>
        </div>
    )
}
