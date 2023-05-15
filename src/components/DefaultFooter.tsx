import Link from "next/link";


export const DefaultFooter = () => {
    return (
        <footer className={'bg-gray-200 py-8 w-full sm:mt-20 mt-8'}>
            <div className={'w-11/12 sm:w-10-12 md:w-9/12 mx-auto flex flex-col lg:flex-row items-center lg:items-end justify-between'}>
                <div className={'flex flex-col items-center lg:items-start mb-4 lg:mb-0'}>
                    <p className={'font-black text-2xl text-orange-accent'}>Yarne Savaete</p>
                    <span className={'font-medium text-gray-400 text-center mt-1'}>Copyright &copy; 2023 Yarne Savaete. All Rights Reserved.</span>
                </div>
                <div className={'flex flex-row items-center'}>
                    <Link href={'/terms-of-service'} className={'text-orange-accent'}>Terms of Service</Link>
                    <span className={'text-black text-sm font-black px-2'}>•</span>
                    <Link href={'/privacy-policy'} className={'text-orange-accent'}>Privacy Policy</Link>
                </div>
            </div>
        </footer>
    )
}