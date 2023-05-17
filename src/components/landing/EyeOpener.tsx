import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";


export const EyeOpener = () => {
    return (
        <div className={'flex flex-col min-[1350px]:flex-row items-center justify-between w-full my-8 md:my-24'}>
            <div className={'mr-0 min-[1350px]:mr-6 motion-safe:animate-text-reveal'}>
                <div className={'motion-safe:animate-text-reveal flex flex-col'}>
                    <h1 className={'text-gray-400 text-3xl font-medium text-center min-[1350px]:text-left min-[1350px]:items-start flex flex-col min-[1600px]:flex-row min-[1600px]:items-end items-center'}>I&apos;M <span className={'text-orange-accent text-4xl sm:text-5xl font-bold relative ml-2 min-[1350px]:ml-0 min-[1600px]:ml-2'}>Yarne Savaete</span></h1>
                    <p className={'text-gray-400 font-bold text-lg sm:text-xl text-center min-[1350px]:text-left'}>Software Engineer & Front-end Developer</p>
                </div>
                <div className={'flex flex-row justify-evenly min-[1350px]:justify-start items-center mt-4 motion-safe:animate-text-reveal'}>
                    <Link href={'/resume'} className={'px-5 py-2 font-bold bg-purple-accent text-white rounded-md text-center'}>
                        View Resume
                    </Link>
                    <Link href={'/projects'} className={'flex flex-row items-center font-bold ml-6 px-5 py-2 rounded-md hover:bg-gray-500/10 h-full'}>
                        Projects <ArrowTopRightOnSquareIcon className={'w-4 h-4 text-black ml-2'}/>
                    </Link>
                </div>
                <div className={'flex flex-row items-center min-[1350px]:justify-start justify-evenly my-6 min-[1350px]:mt-12 motion-safe:animate-text-reveal'}>
                    <Link href={'https://www.linkedin.com/in/yarne-savaete/'} target={'_blank'} className={'motion-safe:animate-text-reveal-1'}>
                        <Image src={'/assets/images/LinkedIn_Icon.png'} alt={'LinkedIn Website Icon'} className={'min-[1350px]:mr-3 motion-safe:hover:scale-110 transition-all duration-300 ease-in-out'} height={25} width={25}/>
                    </Link>
                    <Link href={'https://discordapp.com/users/360461859800875008'} target={'_blank'} className={'motion-safe:animate-text-reveal-2'}>
                        <Image src={'/assets/images/Discord_Icon.png'} alt={'Discord App Website Icon'} className={'min-[1350px]:mr-3 motion-safe:hover:scale-110 transition-all duration-300 ease-in-out'} height={25} width={25}/>
                    </Link>
                    <Link href={'https://github.com/DerpRL'} target={'_blank'} className={'motion-safe:animate-text-reveal-3'}>
                        <Image src={'/assets/images/GitHub_Icon.png'} alt={'GitHub Website Icon'} className={'min-[1350px]:mr-3 motion-safe:hover:scale-110 transition-all duration-300 ease-in-out'} height={25} width={25}/>
                    </Link>
                    <Link href={'https://www.instagram.com/yarnesavaete/'} target={'_blank'} className={'motion-safe:animate-text-reveal-4'}>
                        <Image src={'/assets/images/Instagram_Icon.png'} alt={'Instagram Website Icon'} className={'min-[1350px]:mr-3 motion-safe:hover:scale-110 transition-all duration-300 ease-in-out'} height={25} width={25}/>
                    </Link>
                    <Link href={'https://www.facebook.com/yarne.savaete'} target={'_blank'} className={'motion-safe:animate-text-reveal-5'}>
                        <Image src={'/assets/images/Facebook_Icon.png'} alt={'Facebook Website Icon'} className={'min-[1350px]:mr-3 motion-safe:hover:scale-110 transition-all duration-300 ease-in-out'} height={25} width={25}/>
                    </Link>
                    <Link href={'https://twitter.com/yarne_savaete'} target={'_blank'} className={'motion-safe:animate-text-reveal-6'}>
                        <Image src={'/assets/images/Twitter_Icon.png'} alt={'Twitter Website Icon'} className={'motion-safe:hover:scale-110 transition-all duration-300 ease-in-out'} height={25} width={25}/>
                    </Link>
                </div>
            </div>
            <Image className={'max-w-full motion-safe:animate-text-reveal'} src={'/assets/images/Profile-Background.png'} alt={'Background image for the profile picture.'} height={600} width={750} priority={true}/>
        </div>
    )
}
