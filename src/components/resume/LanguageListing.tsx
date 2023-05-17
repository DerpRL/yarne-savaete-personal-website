import { LanguageIcon } from "@heroicons/react/24/solid";
import { LanguageElement } from "@/components/resume/LanguageElement";


export const LanguageListing = () => {
    return (
        <>
            <div className={'flex flex-col items-start my-16'}>
                <div className={'flex flex-row items-center mb-6'}>
                    <div className={'p-2 bg-orange-accent rounded-full w-fit relative'}>
                        <LanguageIcon className={'text-white w-8 h-8'}/>
                        <div className={'absolute h-full w-[2px] left-[23px] top-[47px] bg-gray-500/50'}></div>
                    </div>
                    <h2 className={'font-bold text-orange-accent text-3xl pl-4'}>Languages</h2>
                </div>
                <div className={'flex flex-col items-start'}>
                    <LanguageElement
                        locale={'Dutch'}
                        languageRating={5}
                    />
                    <LanguageElement
                        locale={'English'}
                        languageRating={4}
                    />
                    <LanguageElement
                        locale={'French'}
                        languageRating={2}
                        isLastElement={true}
                    />
                </div>
            </div>
        </>
    )
}
