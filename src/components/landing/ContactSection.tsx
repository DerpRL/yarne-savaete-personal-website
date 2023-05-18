import Link from "next/link";

export const ContactSection = () => {
    return (
        <>
            <div className={'w-full mx-auto flex flex-col items-center py-8 sm:py-12 md:py-20'}>
                <h3 className={'font-black text-gray-500 text-4xl md:text-5xl text-center'}>Let&apos;s build something together!</h3>
                <Link href={'mailto:contact@yarnesavaete.com'} prefetch={false} className={'w-full sm:w-fit bg-orange-accent text-lg rounded text-center py-3 px-16 text-white mt-5 transition-all duration-300 ease-in-out hover:scale-105'}>
                    Contact Me
                </Link>
            </div>
        </>
    )
}