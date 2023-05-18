import { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { GoogleAnalyticsLoader } from "@/components/GoogleAnalyticsLoader";


export const metadata: Metadata = {
    title: 'HoWest Goes USA | Blogs',
}

export default async function HoWestGoesUsaBlogPost() {
    return (
        <>
            <GoogleAnalyticsLoader/>
            <div>
                <h1 className={'text-5xl font-black text-orange-accent mb-6 text-center md:text-left'}>HoWest Goes USA</h1>
                <div className={'flex flex-col items-start mb-16'}>
                    <p className={'text-black text-base italic'}>Table of content:</p>
                    <Link href={'/blogs/HoWest-Goes-USA/#getting-to-san-francisco-header'} className={'hover:underline hover:text-orange-accent text-gray-500 font-bold text-base sm:text-lg'}>
                        • Getting to San Francisco, California
                    </Link>
                    <Link href={'/blogs/HoWest-Goes-USA/#visiting-golden-gate-network-microsoft-apple-header'} className={'hover:underline hover:text-orange-accent text-gray-500 font-bold text-base sm:text-lg'}>
                        • Golden Gate Bridge, Palo Alto Networks, Microsoft and Apple Visitor Center
                    </Link>
                    <Link href={'/blogs/HoWest-Goes-USA/#alumni-odoo-oracle-header'} className={'hover:underline hover:text-orange-accent text-gray-500 font-bold text-base sm:text-lg'}>
                        • Alumni Event, Odoo and Oracle
                    </Link>
                    <Link href={'/blogs/HoWest-Goes-USA/#cloudflare-alcatraz-others-header'} className={'hover:underline hover:text-orange-accent text-gray-500 font-bold text-base sm:text-lg'}>
                        • Security at Cloudflare and Alcatraz
                    </Link>
                </div>
                <div className={'my-12'}>
                    <div className={'mb-6'}>
                        <h2 className={'text-3xl font-bold text-orange-accent pb-2'} id={'getting-to-san-francisco-header'}>Getting to San Francisco, California</h2>
                        <p>The first day began bright and early, marking the start of a long but exciting day. Our journey began in Bruges, where we had to be at the airport by 1 AM for our 9 AM flight. The flight itself lasted 11 hours, and upon arrival, we experienced a time difference of 9 hours. In San Francisco, we took leisurely strolls and made use of the convenient public transportation system.</p>
                    </div>
                    <div className={'mb-6'}>
                        <h3 className={'text-2xl font-bold text-orange-accent pb-2'}>Going to San Francisco</h3>
                        <p>It all began on a serene Monday morning at 1 AM. We embarked on a bus journey from Bruges to Kortrijk to gather the rest of our group. Once everyone was assembled, we continued our adventure by driving to Paris, where we caught a flight to San Francisco. The flight departure was scheduled for 9 AM and lasted a comfortable 11 hours. During the flight, we were treated to a delightful breakfast, followed by a light snack, and then another breakfast, as we had traveled back 9 hours and greeted the morning once again. I spent most of the flight relaxing, sleeping and indulging in a few movies.</p>
                    </div>
                    <div className={'mb-6'}>
                        <h3 className={'text-2xl font-bold text-orange-accent pb-2'}>Arriving at San Francisco</h3>
                        <p>Upon our arrival at the hostel following our flight, the organizers promptly proceeded to collect the room keys. However, after a brief wait, it became apparent that the rooms were not yet prepared for our stay. As an alternative plan, we decided to visit a nearby mobile provider to ensure that everyone without a SIM card could acquire one. With that task accomplished, we embarked on a delightful adventure aboard one of the city&apos;s historic streetcars, which took us to the picturesque pier. On the pier, we captured a memorable group photo before granting everyone the freedom to explore and find a satisfying meal.</p>
                    </div>
                </div>
                <div className={'my-12'}>
                    <div className={'mb-6'}>
                        <h2 className={'text-3xl font-bold text-orange-accent pb-2'} id={'visiting-golden-gate-network-microsoft-apple-header'}>Visiting Golden Gate Bridge, Palo Alto Networks, Microsoft and Apple Visitor Center</h2>
                        <p>Day 2 proved to be a remarkable day, filled with incredible experiences. We kicked it off with an awe-inspiring crossing of the iconic Golden Gate Bridge. Following this unforgettable sight, our journey took us to Palo Alto Networks, where we delved into the world of cutting-edge cybersecurity. From there, we ventured to Microsoft, immersing ourselves in the innovative technologies they had to offer. And finally, we wrapped up the day at the Apple Visitor Center, where we had the opportunity to explore and appreciate the remarkable creations of this renowned tech giant.</p>
                    </div>
                    <div className={'mb-6'}>
                        <h3 className={'text-2xl font-bold text-orange-accent pb-2'}>Golden Gate Bridge and Palo Alto Networks</h3>
                        <p className={'pb-3'}>The day commenced at a pleasant 7:30 in the morning. We embarked on a bus ride that took us to the starting point of the magnificent Golden Gate Bridge. With enthusiasm in our hearts, we embarked on a leisurely stroll, relishing the breathtaking views that surrounded us. The bridge itself left us in awe with its sheer size and grandeur. Once we all successfully crossed the bridge, we boarded the bus again and headed towards Palo Alto Networks.</p>
                        <p>Upon arrival, we gathered in a meeting room where we were warmly welcomed and introduced to the company. Additionally, we had the privilege of listening to three individuals who shared their personal journeys of joining the company. This informative session provided us with valuable insights. Subsequently, we embarked on an engaging tour of the campus. It was a glimpse into the vibrant work culture of a large corporation, where we marveled at amenities such as a dedicated fitness room, four distinct restaurants, a recreational playroom, and even special office spaces designed for remote employees who don&apos;t require a traditional desk.</p>
                    </div>
                    <div className={'mb-6'}>
                        <h3 className={'text-2xl font-bold text-orange-accent pb-2'}>Microsoft and Apple Visitor Center</h3>
                        <p className={'pb-3'}>After soaking in all the valuable insights at Palo Alto, our next destination was Microsoft. We had the pleasure of meeting Nills, a fellow Belgian who had relocated to the USA. Nills began by sharing his personal journey and offered invaluable advice on how to shape our own careers. He emphasized the importance of networking and maintaining a positive mindset in all circumstances.</p>
                        <p className={'pb-3'}>Next, we had the privilege of hearing from another remarkable employee named Emilio. Emilio shared his own career trajectory and provided us with enlightening information about low-code solutions and the Microsoft Power Platform. His insights shed light on the immense potential of these technologies.</p>
                        <p className={'pb-3'}>To conclude the session, Nills enlightened us about Github Copilot and its future within the Microsoft ecosystem. He enthralled us with visions of Copilot&apos;s integration with popular tools such as PowerPoint and Word, offering exciting possibilities.</p>
                        <p>In addition to our enriching visits, we also had the opportunity to explore the Apple Visitor Center. It was a delightful Apple store adorned with an augmented reality (AR) table, where an iPad brought the display to life, adding an extra touch of magic to the experience.</p>
                    </div>
                </div>
                <div className={'my-12'}>
                    <div className={'mb-6'}>
                        <h2 className={'text-3xl font-bold text-orange-accent pb-2'} id={'alumni-odoo-oracle-header'}>Alumni Event, Odoo and Oracle</h2>
                        <p className={'pb-3'}>The third day greeted us with a captivating lineup of three speakers who shared their inspiring stories of transitioning from Belgium to the USA. Their experiences were filled with valuable insights, and they also provided interesting information about themselves.</p>
                        <p className={'pb-3'}>Later in the afternoon, our exploration led us to the prestigious Barkley University, where we were granted a remarkable opportunity to delve into their educational offerings and immerse ourselves in the vibrant campus atmosphere.</p>
                        <p className={'pb-3'}>Continuing our journey on Day 4, we had the pleasure of visiting Odoo, where we were exposed to their innovative solutions and learned about their cutting-edge technologies. Our adventure then led us to Oracle, a renowned powerhouse in the tech industry, where we were able to witness firsthand their groundbreaking developments and gain further knowledge.</p>
                        <p>Each day of our expedition brought us new encounters and valuable experiences, leaving us inspired and eager to explore more.</p>
                    </div>
                    <div className={'mb-6'}>
                        <h3 className={'text-2xl font-bold text-orange-accent pb-2'}>Alumni Event</h3>
                        <p className={'pb-3'}>Day 3 commenced with a delightful stroll to the alumni event, held in the heart of downtown San Francisco. The gracious hosts, Storied, extended a warm invitation to us. We had the pleasure of hearing from the esteemed CEO of Storied, Lee Ali Shirani. He captivated our attention as he shared the fascinating story of how he established his company, offering valuable insights into the world of storytelling.</p>
                        <p className={'pb-3'}>Adding to the enriching experience, two remarkable Belgian alumni, Christian Vuerings and Thomas Degry, took the stage. Christian shared his expertise on the art of creating and maintaining exceptional designs, providing us with invaluable tips and tricks. Thomas, on the other hand, shared his journey of building a successful career, including his application process for renowned companies and his contributions in creating captivating animations, with many of them being featured prominently at Stripe. The insights shared by Thomas were particularly captivating and left us inspired.</p>
                        <p>The day was filled with engaging conversations and intriguing narratives, further fueling our excitement for the adventures yet to come.</p>
                    </div>
                    <div className={'mb-6'}>
                        <h3 className={'text-2xl font-bold text-orange-accent pb-2'}>Odoo and Oracle</h3>
                        <p className={'pb-3'}>Day 4 began with a pleasant bus ride that took us to Odoo, a renowned Belgian company specializing in open ERP software solutions. We were warmly greeted by Fabrice Henrion, who captivated our attention with a comprehensive explanation of Odoo&apos;s offerings. To further illustrate the power of the Odoo platform, we were treated to an engaging demo that showcased its functionalities. The experience left us intrigued and impressed by the company&apos;s capabilities.</p>
                        <p className={'pb-3'}>After absorbing all the fascinating information, Odoo graciously provided us with a delicious meal, fueling us for the exciting next part of our day. Our journey then led us to Oracle, where we were welcomed by Scott Lang, who not only extended his warm greetings but also enlightened us about Oracle Academy, offering valuable insights into their educational initiatives.</p>
                        <p className={'pb-3'}>The informative session continued as Ashish Mohindroo took the stage, providing us with a comprehensive overview of low-code development and introducing us to Oracle APEX, their remarkable low-code solution. The presentation was both enlightening and inspiring, showcasing the immense potential of low-code technology. We were then treated to an intriguing explanation of Oracle Analytics Cloud by Samar Lotia, which added another layer of depth to our understanding of Oracle&apos;s cutting-edge offerings.</p>
                        <p>Each visit on Day 4 expanded our knowledge and left us with a deeper appreciation for the innovative technologies presented by Odoo and Oracle. The day was filled with valuable insights, engaging discussions, and delicious food, making it a truly memorable experience.</p>
                    </div>
                </div>
                <div className={'my-12'}>
                    <div className={'mb-6'}>
                        <h2 className={'text-3xl font-bold text-orange-accent pb-2'} id={'cloudflare-alcatraz-others-header'}>Security at Cloudflare and Alcatraz</h2>
                        <p>The last three days of our itinerary offered a more relaxed pace, with two exciting highlights: Cloudflare and Alcatraz. With plenty of free time at our disposal, we had the opportunity to explore a myriad of delightful activities. Some of us chose to indulge in the enchanting world of cinema, enjoying captivating films at the local movie theater. Others immersed themselves in the energetic atmosphere of a baseball game, cheering on their favorite teams and savoring the thrill of the sport. These were just a few examples of the countless experiences we embraced during our leisurely days. From delightful local cuisine to vibrant cultural excursions, our free time was filled with joyful discoveries and memorable moments that added a delightful touch to our journey.</p>
                    </div>
                    <div className={'mb-6'}>
                        <h3 className={'text-2xl font-bold text-orange-accent pb-2'}>Security at Cloudflare</h3>
                        <p className={'pb-3'}>Day 4 began with a delightful morning walk, leading us to a local marketplace where we had the opportunity to explore and acquire some delicious food. Energized and satisfied, we continued our journey to the highly anticipated visit to Cloudflare.</p>
                        <p className={'pb-3'}>Cloudflare, a leading company offering an array of content delivery network services, DDoS mitigation, Internet security, and distributed domain name server services, welcomed us with open arms. Rebecca Weekly, a warm and knowledgeable host, greeted us and provided an insightful overview of Cloudflare&apos;s mission and their remarkable contributions to the digital landscape. With passion and expertise, she delved into the intricacies of their hardware infrastructure, enlightening us on the cutting-edge technologies that power their services. Rebecca also shared fascinating insights about the future of hardware and the potential impact of quantum computing on our world.</p>
                        <p className={'pb-3'}>Immersing ourselves further in the Cloudflare experience, we embarked on a captivating tour of their office, offering a glimpse into the diverse departments and the dynamic work environment. This firsthand exploration allowed us to witness the collaborative spirit and innovation that define Cloudflare.</p>
                        <p>Day 4 left us inspired and eager to continue our journey, with our minds filled with knowledge and admiration for the remarkable achievements of Cloudflare.</p>
                    </div>
                    <div className={'mb-6'}>
                        <h3 className={'text-2xl font-bold text-orange-accent pb-2'}>Alcatraz and other events</h3>
                        <p className={'pb-3'}>Apart from our visit to Cloudflare, the day offered a more flexible schedule with exciting options for leisure activities. We decided to make our way to the local movie theater, eagerly anticipating the screening of the highly anticipated new Super Mario movie. It was a pleasant surprise to discover that the theater had taken notes from American theaters, providing comfortable seating and offering a delightful variety of food options. Immersed in the cinematic world, we were captivated by the film&apos;s magic and enjoyed a truly enjoyable movie-watching experience.</p>
                        <p className={'pb-3'}>Continuing our day of exploration, we ventured to witness the exhilarating atmosphere of a Giants baseball game. As someone who had never attended a baseball game before, it was an exceptional experience. The game unfolded at a leisurely pace, providing ample time to absorb the unique strategies and dynamics of the sport. Although the Giants were not victorious, the excitement and energy of the game left an indelible mark, making it a memorable occasion.</p>
                        <p className={'pb-3'}>On the final day of our journey, we embarked on a captivating visit to Alcatraz. Situated on an island in San Francisco Bay, Alcatraz was once a formidable federal prison operating from 1934 to 1963, earning its notorious nickname, &quot;The Rock.&quot; Today, it stands as a historic landmark, attracting countless visitors as a museum and popular tourist destination. Our guided tour led us through the corridors and cells, offering a glimpse into the harsh realities of prison life and the treatment of inmates. It was a thought-provoking and enlightening experience, providing valuable insights into the facility&apos;s history.</p>
                        <p>As our journey drew to a close, we were left with cherished memories of engaging activities, diverse experiences, and a deeper understanding of the historical significance surrounding Alcatraz.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
