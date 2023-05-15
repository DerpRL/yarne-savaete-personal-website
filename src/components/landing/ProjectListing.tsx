import { ProjectElement } from "@/components/landing/ProjectElement";


export const ProjectListing = () => {
    return (
        <div className={'flex flex-col w-full my-8'}>
            <h2 className={'font-bold text-center sm:text-left text-4xl sm:text-5xl my-6'} id={'my-skills-header'}>Projects</h2>
            <div className={'flex flex-col items-center'}>
                <ProjectElement
                    name={'Server Manager'}
                    description={'Server Manager is a multi-purpose Discord bot that helps improve management and security in servers. Our user-friendly dashboard makes managing settings a breeze. Experience the ultimate control over your Discord server\'s safety and moderation!'}
                    imageUrl={'Server_Manager_Web_Dashboard.png'}
                    technologies={['JavaScript', 'TypeScript', 'Next.js', 'MySQL', 'Node.js', 'Google Analytics', 'React', 'Tailwind CSS', 'HTML', 'CSS', 'Digital Ocean', 'Git', 'Express', 'REST']}
                    socialLinks={[
                        { name: 'Server Manager', link: 'https://servermanager.me', iconImageUrl: 'External_Website_Icon.png' },
                        { name: 'Top.gg', link: 'https://top.gg/bot/904847963413676102', iconImageUrl: 'Top.gg_Icon.png' },
                        { name: 'Discordlist.gg', link: 'https://discordlist.gg/bot/904847963413676102', iconImageUrl: 'Discordlist_Icon.png' }
                    ]}
                    achievements={[ '150k+ Users' ]}
                    projectUrlLink={'https://servermanager.me'}
                    reverseOrder={false}
                />
                <ProjectElement
                    name={'Personal Website'}
                    description={'Server Manager is a multi-purpose Discord bot that helps improve management and security in servers. Our user-friendly dashboard makes managing settings a breeze. Experience the ultimate control over your Discord server\'s safety and moderation!'}
                    imageUrl={'Yarne_Savaete_Personal.png'}
                    technologies={['JavaScript', 'TypeScript', 'Node.js', 'Google Analytics', 'Next.js', 'React', 'Tailwind CSS', 'HTML', 'CSS', 'Digital Ocean', 'Git', 'Headless UI']}
                    socialLinks={[
                        { name: 'Yarne Savaete', link: 'https://yarnesavaete.com', iconImageUrl: 'External_Website_Icon.png' },
                        { name: 'GitHub', link: 'https://github.com/DerpRL/yarne-savaete-personal-website', iconImageUrl: 'GitHub_Icon.png' },
                    ]}
                    projectUrlLink={'https://yarnesavaete.com'}
                    reverseOrder={true}
                />
            </div>
        </div>
    )
}
