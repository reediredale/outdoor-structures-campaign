'use client'

import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Target, Home, Newspaper, Users, TrendingUp, Calendar, MessageSquare, BarChart3 } from 'lucide-react'

const PresentationSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(1)
  const totalSlides = 10

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        nextSlide()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        previousSlide()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide])

  const nextSlide = () => {
    setCurrentSlide(prev => prev < totalSlides ? prev + 1 : 1)
  }

  const previousSlide = () => {
    setCurrentSlide(prev => prev > 1 ? prev - 1 : totalSlides)
  }

  const goToSlide = (n: number) => {
    setCurrentSlide(n)
  }

  const StatCard = ({ number, label, className = "" }: { number: string, label: string, className?: string }) => (
    <div className={`bg-gradient-to-br from-brand-primary to-brand-secondary p-8 rounded-2xl text-white text-center hover-lift ${className}`}>
      <span className="text-5xl font-bold block">{number}</span>
      <span className="text-base mt-3 block">{label}</span>
    </div>
  )

  const BudgetItem = ({ title, amount, description }: { title: string, amount: string, description: string }) => (
    <div className="bg-gradient-to-r from-brand-light/20 to-brand-primary/20 p-8 rounded-2xl border-l-4 border-brand-primary">
      <h4 className="font-semibold text-brand-secondary mb-3 text-xl">{title}</h4>
      <div className="text-3xl font-bold text-brand-primary mb-3">{amount}</div>
      <p className="text-base text-gray-700">{description}</p>
    </div>
  )

  const ChannelCard = ({ icon: Icon, title, items }: { icon: any, title: string, items: string[] }) => (
    <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl text-center hover-lift hover:border-brand-primary transition-all duration-300">
      <Icon className="w-16 h-16 mx-auto mb-6 text-brand-primary" />
      <h4 className="font-semibold text-brand-secondary mb-6 text-xl">{title}</h4>
      <ul className="text-left text-base space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-gray-700">• {item}</li>
        ))}
      </ul>
    </div>
  )

  const TimelineItem = ({ date, title, description }: { date: string, title: string, description: string }) => (
    <div className="flex items-center mb-8 p-6 bg-white rounded-xl shadow-md">
      <div className="bg-brand-primary text-white px-6 py-3 rounded-full font-semibold mr-8 min-w-fit text-base">
        {date}
      </div>
      <div>
        <h4 className="font-semibold text-brand-secondary mb-2 text-lg">{title}</h4>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  )

  const KPICard = ({ value, label }: { value: string, label: string }) => (
    <div className="bg-gradient-to-br from-brand-primary to-brand-secondary text-white p-8 rounded-2xl text-center">
      <span className="text-4xl font-bold block">{value}</span>
      <span className="text-base mt-3 block">{label}</span>
    </div>
  )

  const TeamCard = ({ title, items }: { title: string, items: string[] }) => (
    <div className="bg-gradient-to-br from-brand-primary to-brand-secondary text-white p-8 rounded-2xl">
      <h4 className="font-semibold mb-6 text-xl">{title}</h4>
      <ul className="space-y-3 text-base">
        {items.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </div>
  )

  const slides = [
    // Slide 1: Title
    (
      <div className="text-center h-full flex flex-col justify-center">
        <h1 className="text-7xl font-bold text-brand-secondary mb-8 text-shadow">Fair Dinkum Builds</h1>
        <h2 className="text-5xl text-brand-primary mb-16">Q1 FY26 Brand Campaign Strategy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <StatCard number="$100K" label="Campaign Budget" />
          <StatCard number="Q1" label="FY26 Launch" />
          <StatCard number="70%" label="Male Primary Contact" />
        </div>
        <div className="bg-gradient-to-r from-brand-light/30 to-brand-primary/30 p-12 rounded-2xl border-l-4 border-brand-primary max-w-5xl mx-auto">
          <h3 className="text-3xl font-semibold text-brand-secondary mb-6">Campaign Objective</h3>
          <p className="text-xl text-gray-700">Drive qualified lead generation and premium brand awareness for high-end sheds, garages, barns, storage, carports and patios across Australia.</p>
        </div>
      </div>
    ),

    // Slide 2: Market Analysis
    (
      <div className="h-full flex flex-col justify-center">
        <h2 className="text-5xl font-bold text-brand-secondary mb-10">Market Analysis & Opportunity</h2>
        <h3 className="text-3xl text-brand-primary mb-8">Australian Outdoor Structure Market</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <BudgetItem title="Market Size" amount="$2,800,000,000" description="Australian home improvement market growing 8.2% annually" />
          <BudgetItem title="Premium Segment" amount="25%" description="Of market seeks quality over price point" />
        </div>

        <h3 className="text-3xl text-brand-primary mb-8">Key Market Drivers</h3>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border-l-4 border-brand-primary">
            <span className="font-semibold text-brand-secondary text-lg">Work-from-home trend:</span>
            <span className="text-gray-700 ml-2 text-lg">Increased demand for home office sheds and multipurpose structures</span>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-brand-primary">
            <span className="font-semibold text-brand-secondary text-lg">Property investment:</span>
            <span className="text-gray-700 ml-2 text-lg">Homeowners adding value through premium outdoor structures</span>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-brand-primary">
            <span className="font-semibold text-brand-secondary text-lg">Lifestyle evolution:</span>
            <span className="text-gray-700 ml-2 text-lg">Outdoor living and entertainment spaces prioritised</span>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-brand-primary">
            <span className="font-semibold text-brand-secondary text-lg">Storage needs:</span>
            <span className="text-gray-700 ml-2 text-lg">Growing vehicle ownership and hobby equipment storage requirements</span>
          </div>
        </div>
      </div>
    ),

    // Slide 3: Target Audience
    (
      <div className="h-full flex flex-col justify-center">
        <h2 className="text-5xl font-bold text-brand-secondary mb-10">Target Audience Strategy</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <ChannelCard 
            icon={Users} 
            title="Primary Target" 
            items={["Males 35-55", "Property owners", "Trade-aware", "Value quality builds"]} 
          />
          <ChannelCard 
            icon={Users} 
            title="Secondary Target" 
            items={["Females 30-50", "Household decision influencers", "Design-focused", "Research-driven"]} 
          />
          <ChannelCard 
            icon={Target} 
            title="Online Passives" 
            items={["Research-driven", "Compare extensively", "Delay contact", "Need proof points"]} 
          />
        </div>

        <div className="bg-gradient-to-r from-brand-light/30 to-brand-primary/30 p-10 rounded-2xl">
          <h3 className="text-3xl font-semibold text-brand-secondary mb-6">Audience Insights</h3>
          <div className="space-y-6 text-lg">
            <div>
              <span className="font-semibold text-brand-secondary">Thoughtfully Informed Buyers:</span>
              <p className="text-gray-700">Spend 3-6 months researching before purchase. Value craftsmanship, warranty, and local reputation. Influenced by peer recommendations and case studies.</p>
            </div>
            <div>
              <span className="font-semibold text-brand-secondary">Online Passive Researchers:</span>
              <p className="text-gray-700">Consume content extensively but delay contact. Seek detailed specifications, pricing transparency, and visual proof of quality.</p>
            </div>
          </div>
        </div>
      </div>
    ),

    // Slide 4: Budget Allocation
    (
      <div className="h-full flex flex-col justify-center">
        <h2 className="text-5xl font-bold text-brand-secondary mb-12">$100K Budget Allocation Strategy</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BudgetItem 
            title="Paid Digital Advertising" 
            amount="$45,000" 
            description="Google Ads, Facebook/Instagram, LinkedIn, YouTube" 
          />
          <BudgetItem 
            title="Content & Creative Production" 
            amount="$25,000" 
            description="Photography, video, case studies, website updates" 
          />
          <BudgetItem 
            title="PR & Earned Media" 
            amount="$15,000" 
            description="Industry publications, trade shows, influencer partnerships" 
          />
          <BudgetItem 
            title="Marketing Tools & Analytics" 
            amount="$10,000" 
            description="CRM integration, tracking, automation platforms" 
          />
          <BudgetItem 
            title="Contingency & Testing" 
            amount="$5,000" 
            description="A/B testing budget and campaign optimisations" 
          />
        </div>
      </div>
    ),

    // Slide 5: Channel Strategy
    (
      <div className="h-full flex flex-col justify-center">
        <h2 className="text-5xl font-bold text-brand-secondary mb-10">Multi-Channel Campaign Strategy</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <ChannelCard 
            icon={Target} 
            title="PAID CHANNELS" 
            items={[
              "Google Ads (Search & Display)",
              "Facebook & Instagram Ads", 
              "LinkedIn Sponsored Content",
              "YouTube Pre-roll - Optional",
              "Trade Publication Ads - Optional"
            ]} 
          />
          <ChannelCard 
            icon={Home} 
            title="OWNED CHANNELS" 
            items={[
              "Website & Landing Pages",
              "Email Marketing",
              "Social Media Profiles", 
              "Customer Database",
              "Showroom Displays"
            ]} 
          />
          <ChannelCard 
            icon={Newspaper} 
            title="EARNED CHANNELS" 
            items={[
              "PR & Media Coverage",
              "Customer Reviews",
              "Word-of-mouth",
              "Industry Awards", 
              "Partner Referrals"
            ]} 
          />
        </div>

        <div className="bg-gradient-to-r from-brand-light/30 to-brand-primary/30 p-10 rounded-2xl">
          <h3 className="text-3xl font-semibold text-brand-secondary mb-6">Channel Synergy Approach</h3>
          <p className="text-xl text-gray-700">Create consistent messaging across all touchpoints with tailored content for each channel's unique audience behavior and expectations.</p>
        </div>
      </div>
    ),

    // Slide 6: Campaign Execution
    (
      <div className="h-full flex flex-col justify-center">
        <h2 className="text-5xl font-bold text-brand-secondary mb-10">Q1 FY26 Campaign Execution</h2>
        
        <div className="bg-gradient-to-r from-brand-light/20 to-brand-primary/20 p-10 rounded-2xl">
          <h3 className="text-3xl font-semibold text-brand-secondary mb-8">90-Day Rollout Timeline</h3>
          <div className="space-y-6">
            <TimelineItem 
              date="Week 1-2" 
              title="Foundation Setup" 
              description="Website optimisation, tracking implementation, creative asset production, team briefings, passive profiling, lean market research" 
            />
            <TimelineItem 
              date="Week 3-4" 
              title="Soft Launch" 
              description="Google Ads launch, email campaign to existing database, social media content series begins" 
            />
            <TimelineItem 
              date="Week 5-8" 
              title="Full Campaign" 
              description="All paid channels active, PR outreach, trade show participation, influencer partnerships" 
            />
            <TimelineItem 
              date="Week 9-12" 
              title="Optimise & Scale" 
              description="Performance analysis, budget reallocation, successful tactic amplification" 
            />
          </div>
        </div>
      </div>
    ),

    // Slide 7: Key Messaging
    (
      <div className="h-full flex flex-col justify-center">
        <h2 className="text-5xl font-bold text-brand-secondary mb-10">Brand Messaging Strategy</h2>
        
        <div className="bg-gradient-to-r from-brand-light/30 to-brand-primary/30 p-10 rounded-2xl mb-12">
          <h3 className="text-3xl font-semibold text-brand-secondary mb-6">Primary Brand Promise</h3>
          <p className="text-3xl font-bold text-brand-primary mb-6">"Premium Outdoor Structures Built to Last a Lifetime"</p>
          <p className="text-xl text-gray-700">Emphasising superior craftsmanship, durability, and long-term value investment.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <TeamCard 
            title="For Quality-Seekers" 
            items={[
              "Australian-engineered for Australian conditions",
              "Lifetime warranty confidence",
              "Premium materials, master craftsmanship", 
              "Custom solutions for unique properties"
            ]} 
          />
          <TeamCard 
            title="For Online Researchers" 
            items={[
              "Transparent pricing, no hidden costs",
              "3D design visualisation included",
              "Detailed specifications available",
              "Customer project galleries"
            ]} 
          />
        </div>

        <h3 className="text-3xl text-brand-primary mb-6">Content Pillars</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border-l-4 border-brand-primary">
            <span className="font-semibold text-brand-secondary text-lg">Quality & Craftsmanship:</span>
            <p className="text-gray-700 text-base">Behind-the-scenes build process, material sourcing</p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-brand-primary">
            <span className="font-semibold text-brand-secondary text-lg">Customer Success Stories:</span>
            <p className="text-gray-700 text-base">Before/after transformations, testimonials</p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-brand-primary">
            <span className="font-semibold text-brand-secondary text-lg">Design Inspiration:</span>
            <p className="text-gray-700 text-base">Styling ideas, functional layouts, property integration</p>
          </div>
          <div className="bg-white p-6 rounded-lg border-l-4 border-brand-primary">
            <span className="font-semibold text-brand-secondary text-lg">Technical Expertise:</span>
            <p className="text-gray-700 text-base">Engineering insights, weather resistance, compliance</p>
          </div>
        </div>
      </div>
    ),

    // Slide 8: Internal Collaboration
    (
      <div className="h-full flex flex-col justify-center">
        <h2 className="text-5xl font-bold text-brand-secondary mb-10">Internal Team Collaboration Strategy</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <TeamCard 
            title="Sales Team Partnership" 
            items={[
              "Weekly lead quality reviews",
              "Sales feedback loop integration",
              "Joint customer journey mapping", 
              "Objection handling content creation"
            ]} 
          />
          <TeamCard 
            title="Design & Engineering Team" 
            items={[
              "Technical content validation",
              "Project photography coordination",
              "Innovation story development",
              "Specification sheet optimisation"
            ]} 
          />
          <TeamCard 
            title="Customer Service Team" 
            items={[
              "FAQ content development",
              "Review response strategies",
              "Customer story collection",
              "Satisfaction survey insights"
            ]} 
          />
          <TeamCard 
            title="Operations Team" 
            items={[
              "Capacity planning alignment",
              "Regional availability updates", 
              "Installation timeline communication",
              "Supply chain transparency"
            ]} 
          />
        </div>

        <div className="bg-gradient-to-r from-brand-light/30 to-brand-primary/30 p-10 rounded-2xl">
          <h3 className="text-3xl font-semibold text-brand-secondary mb-6">Cross-Functional Campaign Meetings</h3>
          <p className="text-xl text-gray-700">Bi-weekly campaign performance reviews with all stakeholders to ensure marketing efforts align with business capacity and customer experience excellence.</p>
        </div>
      </div>
    ),

    // Slide 9: KPIs & Measurement
    (
      <div className="h-full flex flex-col justify-center">
        <h2 className="text-5xl font-bold text-brand-secondary mb-10">Success Metrics & KPIs</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <KPICard value="450+" label="Qualified Leads" />
          <KPICard value="15%" label="Lead Conversion Rate" />
          <KPICard value="$220" label="Cost Per Lead" />
          <KPICard value="3.5:1" label="ROAS Target" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-3xl text-brand-primary mb-6">Brand Awareness Metrics</h3>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border-l-4 border-brand-primary">
                <span className="font-semibold text-brand-secondary text-lg">Website Traffic:</span>
                <p className="text-gray-700 text-base">40% increase in organic and paid traffic</p>
              </div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-brand-primary">
                <span className="font-semibold text-brand-secondary text-lg">Brand Search Volume:</span>
                <p className="text-gray-700 text-base">60% increase in branded search queries</p>
              </div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-brand-primary">
                <span className="font-semibold text-brand-secondary text-lg">Social Engagement:</span>
                <p className="text-gray-700 text-base">200% increase in social media engagement</p>
              </div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-brand-primary">
                <span className="font-semibold text-brand-secondary text-lg">Share of Voice:</span>
                <p className="text-gray-700 text-base">25% increase in industry conversation mentions</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl text-brand-primary mb-6">Lead Quality Indicators</h3>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border-l-4 border-brand-primary">
                <span className="font-semibold text-brand-secondary text-lg">Sales Qualified Leads:</span>
                <p className="text-gray-700 text-base">70% of marketing leads progress to sales qualification</p>
              </div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-brand-primary">
                <span className="font-semibold text-brand-secondary text-lg">Pipeline Value:</span>
                <p className="text-gray-700 text-base">Average deal size maintains premium positioning</p>
              </div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-brand-primary">
                <span className="font-semibold text-brand-secondary text-lg">Geographic Distribution:</span>
                <p className="text-gray-700 text-base">Lead generation monitoring across geography</p>
              </div>
              <div className="bg-white p-6 rounded-lg border-l-4 border-brand-primary">
                <span className="font-semibold text-brand-secondary text-lg">Channel Attribution:</span>
                <p className="text-gray-700 text-base">Multi-touch journey analysis and optimisation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    // Slide 10: Next Steps
    (
      <div className="h-full flex flex-col justify-center">
        <h2 className="text-5xl font-bold text-brand-secondary mb-10">Next Steps & Implementation</h2>
        
        <div className="bg-gradient-to-r from-brand-light/30 to-brand-primary/30 p-10 rounded-2xl mb-12">
          <h3 className="text-3xl font-semibold text-brand-secondary mb-6">Immediate Actions (Week 1)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <p className="text-gray-700 text-lg">• Stakeholder alignment meeting and campaign brief approval</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-gray-700 text-lg">• Creative agency briefing and asset production timeline</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-gray-700 text-lg">• Website audit and optimisation priority identification</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <p className="text-gray-700 text-lg">• Tracking and analytics setup implementation</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <BudgetItem 
            title="Success Factors" 
            amount="🎯" 
            description="Strong cross-team collaboration • Consistent brand messaging • Data-driven optimisation • Customer-centric approach"
          />
          <BudgetItem 
            title="Risk Mitigation" 
            amount="🛡️" 
            description="Weekly performance monitoring • Flexible budget reallocation • Multiple traffic source strategy • Seasonal demand planning"
          />
        </div>

        <div className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white p-10 rounded-2xl text-center">
          <h3 className="text-3xl font-semibold mb-6">Expected Outcomes</h3>
          <p className="text-xl">This integrated campaign strategy positions the brand as the premium choice for Australian homeowners seeking quality outdoor structures, while building a sustainable lead generation engine for long-term growth.</p>
        </div>
      </div>
    )
  ]

  return (
    <div className="min-h-screen relative p-4">
      {/* Slide Counter */}
      <div className="fixed top-8 right-8 z-50 glass-effect px-6 py-3 rounded-full font-semibold text-brand-secondary text-lg">
        <span>{currentSlide}</span> / <span>{totalSlides}</span>
      </div>

      {/* Main Content */}
      <div className="max-w-[85vw] h-[85vh] mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
        <div className="slide-transition h-full">
          <div className="p-16 lg:p-20 h-full overflow-y-auto">
            <div className="max-w-none">
              {slides[currentSlide - 1]}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50">
        <div className="glass-effect px-8 py-6 rounded-full flex items-center gap-6">
          {/* Slide Numbers */}
          <div className="flex gap-3">
            {Array.from({ length: totalSlides }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => goToSlide(i + 1)}
                className={`w-12 h-12 rounded-full font-semibold text-base transition-all duration-300 ${
                  currentSlide === i + 1
                    ? 'bg-brand-primary text-white scale-110'
                    : 'bg-white/50 text-brand-secondary hover:bg-brand-light hover:scale-105'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          {/* Arrow Navigation */}
          <div className="flex gap-3 ml-6 border-l border-white/30 pl-6">
            <button
              onClick={previousSlide}
              className="flex items-center justify-center w-14 h-14 bg-brand-primary text-white rounded-full hover:bg-brand-secondary transition-all duration-300 hover-lift"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
            <button
              onClick={nextSlide}
              className="flex items-center justify-center w-14 h-14 bg-brand-primary text-white rounded-full hover:bg-brand-secondary transition-all duration-300 hover-lift"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PresentationSlides