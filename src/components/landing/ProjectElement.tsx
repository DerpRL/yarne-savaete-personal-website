import { ProjectMetaData } from "@/utils/types";
import { FC } from "react";
import Image from "next/image";


export const ProjectElement: FC<ProjectMetaData> = ({ name, description, imageUrl, socialLinks}) => {
    return (
        <div className={'w-full'}>
            <div className={'flex flex-col md:flex-row items-start justify-between'}>
                <Image src={`/assets/images/projects/${imageUrl}`} alt={`Project preview image for ${name}`} width={600} height={337} className={'rounded-t-2xl rounded-b-md md:rounded-l-2xl md:rounded-r-md mr-2'}/>
                <div className={'bg-gray-500/10 rounded-b-2xl rounded-t-md md:rounded-r-2xl md:rounded-l-md h-max w-full ml-2'}>
                    <h3 className={'font-medium text-2xl'}>{ name }</h3>
                </div>
            </div>
        </div>
    )
}
