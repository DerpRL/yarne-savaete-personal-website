import { EnvelopeIcon, HomeIcon, IdentificationIcon, PhoneIcon, TruckIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";


export const PersonalInformationSection = () => {
    return (
        <>
            <div className={'flex flex-col min-[1100px]:flex-row self-start justify-start mb-8'}>
                <div className={'flex flex-col items-start mr-16'}>
                    <div className={'flex flex-row items-center mb-2'}>
                        <div className={'p-2 bg-orange-accent rounded-full w-fit'}>
                            <HomeIcon className={'text-white w-5 h-5'}/>
                        </div>
                        <Link href={'https://www.google.be/maps/place/8210+Zedelgem/'} target={'_blank'} className={'pl-2'}>Zedelgem 8210, België</Link>
                    </div>
                    <div className={'flex flex-row items-center mb-2'}>
                        <div className={'p-2 bg-orange-accent rounded-full w-fit'}>
                            <TruckIcon className={'text-white w-5 h-5'}/>
                        </div>
                        <span className={'pl-2'}>Drivers license B</span>
                    </div>
                </div>
                <div className={'flex flex-col items-start mr-16'}>
                    <div className={'flex flex-row items-center mb-2'}>
                        <div className={'p-2 bg-orange-accent rounded-full w-fit'}>
                            <PhoneIcon className={'text-white w-5 h-5'}/>
                        </div>
                        <Link href={'tel:+32471606577'} prefetch={false} className={'pl-2'}>+32 471 60 65 77</Link>
                    </div>
                    <div className={'flex flex-row items-center mb-2'}>
                        <div className={'p-2 bg-orange-accent rounded-full w-fit'}>
                            <EnvelopeIcon className={'text-white w-5 h-5'}/>
                        </div>
                        <Link href={'mailto:contact@yarnesavaete.com'} prefetch={false} className={'pl-2'}>contact@yarnesavaete.com</Link>
                    </div>
                </div>
                <div className={'flex flex-col items-start'}>
                    <div className={'flex flex-row items-center mb-2'}>
                        <div className={'p-2 bg-orange-accent rounded-full w-fit'}>
                            <Image src={'/assets/images/web-icons/LinkedIn_White_Icon.png'} alt={'White LinkedIn Website Icon'} width={20} height={20} />
                        </div>
                        <Link href={'https://www.linkedin.com/in/yarne-savaete'} target={'_blank'} className={'pl-2'}>yarne-savaete</Link>
                    </div>
                    <div className={'flex flex-row items-center mb-2'}>
                        <div className={'p-2 bg-orange-accent rounded-full w-fit'}>
                            <IdentificationIcon className={'text-white w-5 h-5'}/>
                        </div>
                        <span className={'pl-2'}>Belgian</span>
                    </div>
                </div>
            </div>
        </>
    )
}