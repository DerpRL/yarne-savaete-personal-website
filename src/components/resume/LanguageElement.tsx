import { FC } from "react";
import { LanguageMetaData } from "@/utils/types";
import { PaperAirplaneIcon, StarIcon } from "@heroicons/react/24/solid";


export const LanguageElement: FC<LanguageMetaData> = ({ locale, languageRating, isLastElement }) => {
    return (
        <>
            <div className={'flex flex-row-start items-center ml-2 my-2 relative'}>
                { !isLastElement && (
                    <div className={'absolute h-full w-[2px] left-[15px] top-[23px] bg-gray-500/50'}></div>
                )}
                <div className={'p-2 bg-orange-accent rounded-full w-fit z-10'}>
                    <PaperAirplaneIcon className={'text-white w-4 h-4'}/>
                </div>
                <div className={'flex flex-col items-start pl-8'}>
                    <p className={'text-black text-xl'}>{ locale }</p>
                    <div className={`flex flex-row items-start`}>
                        { Array.from({ length: languageRating }).map((_, i) => (
                            <div key={i}>
                                <StarIcon className={`w-4 h-4 text-yellow-400 ${(languageRating - 1) !== i ? `mr-1` : ``}`} />
                            </div>
                        )) }
                    </div>
                </div>
            </div>
        </>
    )
}