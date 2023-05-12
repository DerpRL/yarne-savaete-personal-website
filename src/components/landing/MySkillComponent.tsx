import Image from "next/image";
import {StarIcon} from "@heroicons/react/24/solid";

export const MySkillComponent = ({ skillName, imageName, skillRating }) => {
    return (
        <div className={'w-full min-[1000px]:min-w-[150px] h-[150px] flex flex-col items-center justify-center bg-gray-500/10 my-2 mx-0 min-[1000px]:mx-2 motion-safe:hover:scale-105 hover:bg-orange-accent/40 transition-all duration-300 ease-in-out rounded-md'}>
            <div className={`flex flex-col items-center w-full`}>
                <Image src={`/assets/images/skills/${imageName}`} alt={`Icon for ${skillName}`} width={40} height={40} className={'rounded-md mb-4'}/>
                <p className={'font-bold text-base text-center pb-1'}>{ skillName }</p>
                <div className={`flex flex-row items-center justify-between`}>
                    {Array.from({ length: skillRating }).map((_, i) => (
                        <div key={i}>
                            <StarIcon className={`w-4 h-4 text-yellow-400 ${(skillRating - 1) !== i ? `mr-1` : ``}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
