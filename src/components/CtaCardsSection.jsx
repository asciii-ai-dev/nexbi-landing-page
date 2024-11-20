import CtaCard from './CtaCard'

const CtaCardsSection = ({businessResponse}) => {
   
  return (
    <>
    <div className="flex justify-center">
    <h1 className="text-md md:text-2xl lg:text-3xl max-w-lg text-center text-white  font-[600] mb-6 md:!mb-12">
      Personalized insights tailored to help you meet your business goals
      </h1>
    </div>
    {
      !businessResponse ? (
         <div className="block md:hidden">
    <CtaCard />
    </div>
      ) : null
    }
    <section className="space-y-7 md:max-h-[600px] hidden md:block overflow-y-auto relative scrollbar-hide">
    {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-5 pointer-events-none backdrop-blur-[0.8px] z-5"></div> */}
    {
      !businessResponse ? (
         <div className="absolute inset-0 w-full h-[600px]">
         <div className="absolute top-[39%] left-[34%] z-10 w-[330px]">
              <CtaCard />
              </div>
         <div className="absolute top-0 left-0 w-full h-1/4 bg-[#060809] z-20 opacity-70 blur-lg"></div>
         <div className="absolute top-0 left-0 w-1/4 h-full bg-[#060809] z-20 opacity-50 blur-lg"></div>
         <div className="absolute bottom-0 left-0 w-full h-1/4 bg-[#060809] z-20 opacity-50 blur-lg"></div>
         <div className="absolute top-0 right-0 w-1/4 h-full bg-[#060809] z-20 opacity-50 blur-lg"></div>
       </div>
      ) : null
    }
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        <div className={`flex flex-col gap-4 ${businessResponse ?? "animate-scroll"}`}>
         <div className='bg-[#FFFFFF0D] rounded-3xl hidden md:flex p-6'>
            <p className='text-white text-sm text-opacity-60'>
           {" Competitor’s Trustpilot rating of 3.7, with more one-star than five-star reviews, indicates dissatisfaction in customer support and content quality. This presents an opportunity for your business to strengthen these areas, potentially attracting users seeking better service and reliable content. Additionally, by addressing link quality issues such as reducing 'nofollow' links and exploring underutilized platforms like news sites and message boards, your business can enhance its backlink profile and improve search rankings."}
            </p>
         </div>
         <div className='bg-[#FFFFFF0D] rounded-3xl hidden md:flex p-6'>
            <p className='text-white text-sm text-opacity-60'>
           {"Your business shows a strong backlink profile with over 2.1 million diverse backlinks, enhancing authority. There's a positive trend from October to November. Top pages perform well for low-competition keywords and feature snippets, indicating authoritative content."}
            </p>
         </div>
         <div className='bg-[#FFFFFF0D] rounded-3xl hidden md:flex p-6'>
            <p className='text-white text-sm text-opacity-60'>
           {"Your business's SEO performance has shown significant volatility, with a peak in traffic and keyword rankings in September 2024 followed by a decline in the subsequent months. This led to fewer online orders in October 2024."}
            </p>
         </div>
        </div>
        <div className={`flex flex-col gap-4 ${businessResponse ?? "animate-scroll-reverse"}`}>
        <div className='bg-[#FFFFFF0D] rounded-3xl hidden md:flex p-6'>
            <p className='text-white text-sm text-opacity-60'>
            Your recent Facebook ad campaign generated 1.2M impressions which is 1.5 times more than the last campaign. The major contribution came from the age group between 24 and 32 while the top geographic location was the Middle East. Focusing on targeted copy and narrowing demographics could further improve the results.            </p>
         </div>
         <div className='bg-[#FFFFFF0D] rounded-3xl hidden md:flex p-6'>
            <p className='text-white text-sm text-opacity-60'>
            Compared to competitors like WealthWise (1.8M backlinks from 87,687 domains), PinnaclePoint (2.2M backlinks from 54,982 domains), and SecureNest (18.9M backlinks from 54,353 domains), your backlink volume is modest but shows potential for growth. The presence of 951 broken backlinks and 131 broken pages highlights the need for regular maintenance.
            </p>
         </div>
         
         <div className='bg-[#FFFFFF0D] rounded-3xl hidden md:flex p-6'>
            <p className='text-white text-sm text-opacity-60'>
            There was a surge in new backlinks acquired by your competitors such as ByteWave (200 new backlinks) and TrendCrafters (130 new backlinks) in the month of October which led to higher traffic and improved keyword ranking. I have made a list of these new resources and also drafted outreach emails to acquire more backlinks for your business.  
            </p>
         </div>
        </div>
        <div className={`flex flex-col gap-4 ${businessResponse ?? "animate-scroll"}`}>
        <div className='bg-[#FFFFFF0D] rounded-3xl hidden md:flex p-6'>
            <p className='text-white text-sm text-opacity-60'>
            Opportunities lie in optimizing improved keywords to regain lost traffic, addressing broken backlinks, and expanding backlinks from high-authority platforms to boost visibility and rankings. Based on the competitor’s brand profile, there are 25 potential resources that could list your business. 
            </p>
         </div>
         <div className='bg-[#FFFFFF0D] rounded-3xl hidden md:flex p-6'>
            <p className='text-white text-sm text-opacity-60'>
            To rank on high-potential keywords, you need to create a series of new content following a consistent theme and also optimize existing blog posts such as “25 Top SaaS platforms for Dropshipping”, and “Boost your sales: How to find winning products in 2024”. Based on top-ranking resources on Google, I have curated a list of 25 new blog post topics that are highly relevant to your audience.
            </p>
         </div>
         <div className='bg-[#FFFFFF0D] rounded-3xl hidden md:flex p-6'>
            <p className='text-white text-sm text-opacity-60'>
            Your competitors were mentioned in 15 new threads across Reddit, Quora, and Facebook groups last week. Five discussions show negative sentiment about your competitors while 10 are neutral. Jump into these conversations with valuable insights that can help your brand gain further visibility. Based on these topics, I have created a list of topics for starting new discussions.  
            </p>
         </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default CtaCardsSection
