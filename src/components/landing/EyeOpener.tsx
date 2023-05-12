import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";


export const EyeOpener = () => {
    return (
        <div className={'flex flex-col min-[1350px]:flex-row items-center justify-between w-full'}>
            <div className={'mr-6 min-[1350px]:mr-0 my-3'}>
                <h1 className={'text-gray-400 text-3xl font-medium text-center min-[1350px]:text-left'}>I&apos;M <span className={'text-orange-accent text-5xl font-bold relative'}>Yarne Savaete</span></h1>
                <p className={'text-gray-400 font-bold text-xl text-center min-[1350px]:text-left'}>Software Engineer & Front-end Developer</p>
                <div className={'flex flex-row justify-evenly min-[1350px]:justify-start items-center mt-4'}>
                    <Link href={'/assets/pdf/Yarne_Savaete_Resume.pdf'} target={'_blank'} download={true} className={'px-5 py-2 font-bold bg-purple-accent text-white rounded-md text-center'}>
                        Download CV
                    </Link>
                    <Link href={'/projects'} className={'flex flex-row items-center font-bold ml-6 px-5 py-2 rounded-md hover:bg-gray-500/10 h-full'}>
                        Projects <ArrowTopRightOnSquareIcon className={'w-4 h-4 text-black ml-2'}/>
                    </Link>
                </div>
                <div className={'flex flex-row items-center min-[1350px]:justify-start justify-evenly my-6 min-[1350px]:mt-12'}>
                    <Link href={'https://www.linkedin.com/in/yarne-savaete/'} target={'_blank'}>
                        <Image src={'/assets/images/LinkedIn_Icon.png'} alt={'LinkedIn Website Icon'} className={'min-[1350px]:mr-3 rounded hover:scale-110 transition-all duration-300 ease-in-out'} height={25} width={25}/>
                    </Link>
                    <Link href={'https://github.com/DerpRL'} target={'_blank'}>
                        <Image src={'/assets/images/GitHub_Icon.png'} alt={'LinkedIn Website Icon'} className={'min-[1350px]:mr-3 rounded hover:scale-110 transition-all duration-300 ease-in-out'} height={25} width={25}/>
                    </Link>
                    <Link href={'https://www.instagram.com/yarnesavaete/'} target={'_blank'}>
                        <Image src={'/assets/images/Instagram_Icon.png'} alt={'LinkedIn Website Icon'} className={'min-[1350px]:mr-3 rounded hover:scale-110 transition-all duration-300 ease-in-out'} height={25} width={25}/>
                    </Link>
                    <Link href={'https://twitter.com/yarne_savaete'} target={'_blank'}>
                        <Image src={'/assets/images/Twitter_Icon.png'} alt={'LinkedIn Website Icon'} className={'rounded hover:scale-110 transition-all duration-300 ease-in-out'} height={25} width={25}/>
                    </Link>
                </div>
            </div>
            <Image className={'max-w-full'} src={'/assets/images/profile-background.png'} alt={'Background image for the profile picture.'} height={600} width={750} priority={true}/>
        </div>
    )
}