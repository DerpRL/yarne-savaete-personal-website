import { BlogMetaData } from "@/utils/types";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";


export const BlogElement: FC<BlogMetaData> = ({ name, description, blogPostData, imageUrl, detailedBlogUrl, reverseOrder }) => {
    return (
        <div className={'w-full mb-6 min-[1600px]:mb-12'}>
            <div className={`flex flex-col-reverse items-start justify-between ${reverseOrder ? `min-[1600px]:flex-row-reverse` : `min-[1600px]:flex-row`}`}>
                <div className={`${reverseOrder ? `min-[1600px]:ml-4` : `min-[1600px]:mr-4`}`}>
                    <Image src={`/assets/images/blogs/${imageUrl}`} alt={`Project preview image for ${name}`} width={1000} height={561} className={'rounded-md !max-w-full drop-shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out'}/>
                </div>
                <div className={'h-max w-full flex flex-col items-start'}>
                    <div className={'flex flex-col items-start mb-4'}>
                        <h3 className={'text-2xl min-[1600px]:text-3xl font-bold mr-3'}>{ name }</h3>
                        <span className={'text-gray-500 py-1 text-sm'}>{ blogPostData }</span>
                    </div>
                    <p className={'pb-2 text-gray-400'}>{ description }</p>
                    <Link href={detailedBlogUrl} className={'w-full md:w-fit md:px-5 py-2 my-2 rounded-md bg-green-500 text-white text-center transition-all duration-300 ease-in-out hover:scale-105'}>
                        See full blog
                    </Link>
                </div>
            </div>
        </div>
    )
}
