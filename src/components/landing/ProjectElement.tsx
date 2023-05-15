import { ProjectMetaData, ProjectSocialMetaData } from "@/utils/types";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { TrophyIcon } from "@heroicons/react/24/solid";


export const ProjectElement: FC<ProjectMetaData> = ({ name, description, imageUrl, technologies, socialLinks, projectUrlLink, achievements, reverseOrder }) => {
    return (
        <div className={'w-full mb-6 min-[1600px]:mb-12'}>
            <div className={`flex flex-col-reverse items-start justify-between ${reverseOrder ? `min-[1600px]:flex-row-reverse` : `min-[1600px]:flex-row`}`}>
                <div className={`${reverseOrder ? `min-[1600px]:ml-4` : `min-[1600px]:mr-4`}`}>
                    <Image src={`/assets/images/projects/${imageUrl}`} alt={`Project preview image for ${name}`} width={1000} height={561} className={'rounded-md !max-w-full drop-shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out'}/>
                </div>
                <div className={'h-max w-full flex flex-col items-start'}>
                    <div className={'flex flex-col min-[1300px]:flex-row items-start min-[1300px]:items-center mb-4'}>
                        <h3 className={'text-2xl min-[1600px]:text-3xl font-bold mr-3'}>{ name }</h3>
                        { achievements && (
                            <>
                                <div className={'flex flex-row items-start flex-wrap'}>
                                    { achievements.map((achievement) => (
                                        <span key={achievement} className={'flex flex-row items-center px-2 py-1 mr-1 bg-yellow-300 text-gray-700 rounded text-sm'}><TrophyIcon className={'w-4 h-4 mr-1'}/> { achievement }</span>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    { technologies && (
                        <>
                            <p className={'text-gray-400 pb-1'}>Technologies used:</p>
                            <div className={'flex flex-row items-start flex-wrap mb-3'}>
                                { technologies.map((technology) => (
                                    <span key={technology} className={'px-2 py-1 mr-1 mb-1 bg-gray-500/10 text-orange-accent rounded text-sm'}>{ technology }</span>
                                ))}
                            </div>
                        </>
                    )}
                    <p className={'pb-2 text-gray-400'}>{ description }</p>
                    <div className={'flex flex-col min-[1600px]:flex-row w-full mb-3'}>
                        { socialLinks && (
                            <>
                                <div>
                                    <p className={'text-gray-400 pb-1'}>Visit on:</p>
                                    <div className={'flex flex-row items-start flex-wrap mb-3 min-[1600px]:mb-0'}>
                                        { socialLinks.map((socialLink: ProjectSocialMetaData) => (
                                            <Link href={socialLink.link} key={socialLink.name} className={'mr-2'} target={'_blank'}>
                                                <Image src={`/assets/images/project-socials/${socialLink.iconImageUrl}`} alt={ `Project social icon for ${socialLink.name}` } width={35} height={35} className={'rounded transition-all duration-300 ease-in-out hover:scale-110'}/>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
