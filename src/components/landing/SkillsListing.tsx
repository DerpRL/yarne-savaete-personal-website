import { MySkillComponent } from "@/components/landing/MySkillComponent";


export const SkillsListing = () => {
    return (
        <div className={'flex flex-col items-center w-full my-8'}>
            <h2 className={'font-bold text-4xl sm:text-5xl my-5 text-center sm:text-left sm:mr-auto'} id={'my-skills-header'}>My Skills</h2>
            <div className={'flex flex-col min-[1000px]:flex-row items-center w-full justify-center'}>
                <MySkillComponent skillName={'HTML'} imageName={'HTML.png'} skillRating={5} skillInfoUrl={'https://www.w3schools.com/html/'}/>
                <MySkillComponent skillName={'JavaScript'} imageName={'JavaScript.png'} skillRating={4} skillInfoUrl={'https://www.w3schools.com/js/'}/>
                <MySkillComponent skillName={'TypeScript'} imageName={'TypeScript.png'} skillRating={4} skillInfoUrl={'https://www.w3schools.com/typescript/typescript_intro.php'}/>
                <MySkillComponent skillName={'CSS'} imageName={'CSS.png'} skillRating={4} lastElement={true} skillInfoUrl={'https://www.w3schools.com/css/default.asp'}/>
            </div>
            <div className={'flex flex-col min-[1000px]:flex-row items-center w-full justify-center'}>
                <MySkillComponent skillName={'React'} imageName={'React.png'} skillRating={4} skillInfoUrl={'https://react.dev/'}/>
                <MySkillComponent skillName={'Next.js'} imageName={'NextJS.png'} skillRating={4} skillInfoUrl={'https://nextjs.org/'}/>
                <MySkillComponent skillName={'Tailwind CSS'} imageName={'TailwindCSS.png'} skillRating={4} skillInfoUrl={'https://tailwindcss.com/'}/>
                <MySkillComponent skillName={'MySQL'} imageName={'MySQL.png'} skillRating={4} skillInfoUrl={'https://www.mysql.com/'}/>
                <MySkillComponent skillName={'Digital Ocean'} imageName={'DigitalOcean.png'} skillRating={3} lastElement={true} skillInfoUrl={'https://www.digitalocean.com/'}/>
            </div>
            <div className={'flex flex-col min-[1000px]:flex-row items-center w-full justify-center'}>
                <MySkillComponent skillName={'Python'} imageName={'Python.png'} skillRating={3} skillInfoUrl={'https://www.python.org/'}/>
                <MySkillComponent skillName={'Git'} imageName={'Git.png'} skillRating={3} skillInfoUrl={'https://git-scm.com/'}/>
                <MySkillComponent skillName={'.NET'} imageName={'DotNet.png'} skillRating={2} skillInfoUrl={'https://dotnet.microsoft.com/en-us/'}/>
                <MySkillComponent skillName={'Flutter'} imageName={'Flutter.png'} skillRating={2} lastElement={true} skillInfoUrl={'https://flutter.dev/'}/>
            </div>
        </div>
    )
}
