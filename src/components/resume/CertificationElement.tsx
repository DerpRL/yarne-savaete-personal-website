import { FC } from "react";
import { CertificationMetaData } from "@/utils/types";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";


export const CertificationElement: FC<CertificationMetaData> = ({ certName, company, achieveDate, isLastElement }) => {
    return (
        <>
            <div className={'flex flex-row-start items-start ml-2 my-2 relative'}>
                { !isLastElement && (
                    <div className={'absolute h-full w-[2px] left-[15px] top-[23px] bg-gray-500/50'}></div>
                )}
                <div className={'p-2 bg-orange-accent rounded-full w-fit z-10'}>
                    <PaperAirplaneIcon className={'text-white w-4 h-4'}/>
                </div>
                <div className={'flex flex-col items-start pl-8'}>
                    <div className={'flex flex-col items-start'}>
                        <h4 className={'text-black text-xl'}>{ certName }</h4>
                        <span className={'text-gray-500 italic text-sm'}>{ company } • { achieveDate }</span>
                    </div>
                </div>
            </div>
        </>
    )
}