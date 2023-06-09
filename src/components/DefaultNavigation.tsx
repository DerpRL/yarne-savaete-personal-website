'use client'

import Link from "next/link";
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";


export const DefaultNavigation = () => {
    const pathname = usePathname();

    return (
        <Popover>
            <nav className={'flex flex-row items-center justify-between my-6 sm:mb-20 mb-8 w-11/12 sm:w-10-12 md:w-9/12 mx-auto '}>
                <Link href={'/'} className={'font-black text-2xl md:text-3xl text-orange-accent flex flex-row items-center'}>
                    YS <span className={'text-gray-400 font-bold pl-1'}>.</span>
                </Link>
                <div className={'flex flex-row items-center'}>
                    <div className={'flex flex-col sm:flex-row items-center justify-between w-fit hidden min-[1150px]:flex mr-16'}>
                        <Link href={'/resume'} className={`px-4 py-2 mr-4 rounded-md hover:bg-gray-100 ${pathname.startsWith('/resume') ? `text-orange-accent` : `text-black`}`}>Resume</Link>
                        <Link href={'/blogs'} className={`px-4 py-2 rounded-md hover:bg-gray-100 ${pathname.startsWith('/blogs') ? `text-orange-accent` : `text-black`}`}>Blog</Link>
                    </div>
                    <Link href={'mailto:contact@yarnesavaete.com'} prefetch={false} className={'hidden min-[1150px]:flex border border-2 rounded-md border-purple-accent px-5 py-2 font-bold motion-safe:hover:scale-110 hover:bg-purple-accent hover:text-white transition-all duration-300 ease-in-out'}>
                        Contact
                    </Link>
                </div>
                <div className="min-[1150px]:hidden">
                    <Popover.Button className="p-2 rounded-md outline-none border-none focus:ring-2 focus:ring-purple-accent text-black hover:bg-gray-500/10">
                        <span className="sr-only">Open menu</span>
                        <Bars3BottomRightIcon className="w-6 h-6"/>
                    </Popover.Button>
                </div>
            </nav>
            <Transition
                as={ Fragment }
                enter="transition-transform ease-out duration-300"
                enterTo="opacity-100 translate-x-0"
                leave="transition-transform ease-out duration-100"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 -translate-x-full"
                enterFrom="opacity-0 -translate-x-full"
            >
                <Popover.Panel focus className="fixed inset-x-0 h-screen top-0 origin-top-right transform transition min-[1150px]:hidden overflow-y-auto z-50 bg-white">
                    {({ close }) => (
                        <>
                            <div className="my-6 pb-2 w-11/12 sm:w-10-12 md:w-9/12 mx-auto">
                                <div className="flex items-center justify-between">
                                    <p className={'text-3xl text-black font-bold'}>Menu</p>
                                    <Popover.Button className="inline-flex items-center justify-center rounded-md outline-none border-none focus:ring-2 focus:ring-purple-accent p-2 text-black focus:ring-inset hover:bg-gray-500/10">
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className={'h-6 w-6'}/>
                                    </Popover.Button>
                                </div>
                                <div className={'flex flex-col items-start mt-10 mb-4'}>
                                    <p className={'text-gray-400 font-bold text-sm mb-4'}>DISCOVER</p>
                                    <Link href={'/'} onClick={() => { close() }} className={`text-lg mb-2 ${pathname.startsWith('/') && pathname.length === 1 ? `text-gray-400 font-black` : `font-bold text-orange-accent`}`}>
                                        Home
                                    </Link>
                                    <Link href={'/resume'} onClick={() => { close() }} className={`font-bold text-lg mb-2 ${pathname.startsWith('/resume') ? `text-gray-400 font-black` : `font-bold text-orange-accent`}`}>
                                        Resume
                                    </Link>
                                    <Link href={'/blogs'} onClick={() => { close() }} className={`font-bold text-lg mb-10 ${pathname.startsWith('/blogs') ? `text-gray-400 font-black` : `font-bold text-orange-accent`}`}>
                                        Blog
                                    </Link>
                                    <p className={'text-gray-400 font-bold text-sm mb-4'}>LEGAL</p>
                                    <Link href={'/terms-of-service'} onClick={() => { close() }} className={`font-bold text-lg mb-2 ${pathname.startsWith('/terms-of-service') ? `text-gray-400 font-black` : `font-bold text-orange-accent`}`}>
                                        Terms of Service
                                    </Link>
                                    <Link href={'/privacy-policy'} onClick={() => { close() }} className={`font-bold text-lg mb-8 ${pathname.startsWith('/privacy-policy') ? `text-gray-400 font-black` : `font-bold text-orange-accent`}`}>
                                        Privacy Policy
                                    </Link>
                                    <Link href={'mailto:contact@yarnesavaete.com'} prefetch={false} className={'w-full text-center rounded-md bg-purple-accent px-5 py-2 font-bold text-lg text-white'}>
                                        Contact Me
                                    </Link>
                                    <p className={'font-medium text-gray-400 text-center mx-auto mt-2'}>Copyright &copy; 2023 Yarne Savaete. All Rights Reserved.</p>
                                </div>
                            </div>
                        </>
                    )}
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}