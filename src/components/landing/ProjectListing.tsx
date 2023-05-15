import { ProjectElement } from "@/components/landing/ProjectElement";


export const ProjectListing = () => {
    return (
        <div className={'flex flex-col w-full my-8'}>
            <h2 className={'font-bold text-center sm:text-left text-4xl sm:text-5xl my-5'} id={'my-skills-header'}>Projects</h2>
            <div className={'flex flex-col items-center'}>
                <ProjectElement name={'Server Manager'} description={'Server Manager is a multi-purpose Discord bot that helps improve management and security in servers.'} imageUrl={'Server_Manager_Web_Dashboard.png'}/>
            </div>
        </div>
    )
}
