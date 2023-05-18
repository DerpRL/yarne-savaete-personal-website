import { BlogElement } from "@/components/landing/BlogElement";


export const BlogListing = () => {
    return (
        <div className={'flex flex-col w-full my-8'}>
            <h2 className={'font-bold text-center sm:text-left text-4xl sm:text-5xl my-6'} id={'my-skills-header'}>Blogs</h2>
            <div className={'flex flex-col items-center'}>
                <BlogElement
                    name={'HoWest Goes USA'}
                    description={'Welcome to an exciting week-long school trip to San Francisco, California, where we explored some of the most innovative and iconic companies in the tech industry. During our visit, we had the opportunity to tour the headquarters of Microsoft, Cloudflare, Palo Alto Networks, Apple Visitor Center, Alumni, Odoo, and Oracle.'}
                    blogPostData={'3 April, 2023 - 10 April, 2023'}
                    imageUrl={'San_Fransisco_Thumb.png'}
                    detailedBlogUrl={'/blogs/HoWest-Goes-USA'}
                    reverseOrder={false}
                />
                <BlogElement
                    name={'Code challenge with Hack The Future'}
                    description={'Together with Simon Plyson, we participated in the code challenges of Hack The Future. We both signed up for the Zinderlabs challenges. The code challenge was that we had to find the murderer and the murder weapon with certain factors to take in.'}
                    blogPostData={'2 December, 2021'}
                    imageUrl={'Hack_The_Future_Thumb.png'}
                    reverseOrder={true}
                />
            </div>
        </div>
    )
}
