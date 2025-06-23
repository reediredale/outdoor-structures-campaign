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
    <div className={`bg-gradient-to-br from-brand-primary to-brand-secondary p-6 rounded-2xl text-white text-center hover-lift ${className}`}>
      <span className="text-4xl font-bold block">{number}</span>
      <span className="text-sm mt-2 block">{label}</span>
    </div>
  )

  const BudgetItem = ({ title, amount, description }: { title: string, amount: string, description: string }) => (
    <div className="bg-gradient-to-r from-brand-light/20 to-brand-primary/20 p-6 rounded-2xl border-l-4 border-brand-primary">
      <h4 className="font-semibold text-brand-secondary mb-2">{title}</h4>
      <div className="text-2xl font-bold text-brand-primary mb-2">{amount}</div>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  )

  const ChannelCard = ({ icon: Icon, title, items }: { icon: any, title: string, items: string[] }) => (
    <div className="bg-white border-2 border-gray-200 p-6 rounded-2xl text-center hover-lift hover:border-brand-primary transition-all duration-300">
      <Icon className="w-12 h-12 mx-auto mb-4 text-brand-primary" />
      <h4 className="font-semibold text-brand-secondary mb-4">{title}</h4>
      <ul className="text-left text-sm space-y-1">
        {items.map((item, index) => (
          <li key={index} className="text-gray-700">• {item}</li>
        ))}
      </ul>
    </div>
  )

  const TimelineItem = ({ date, title, description }: { date: string, title: string, description: string }) => (
    <div className="flex items-center mb-6 p-4 bg-white rounded-xl shadow-md">
      <div className="bg-brand-primary text-white px-4 py-2 rounded-full font-semibold mr-6 min-w-fit text-sm">
        {date}
      </div>
      <div>
        <h4 className="font-semibold text-brand-secondary mb-1">{title}</h4>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  )

  const KPICard = ({ value, label }: { value: string, label: string }) => (
    <div className="bg-gradient-to-br from-brand-primary to-brand-secondary text-white p-6 rounded-2xl text-center">
      <span className="text-3xl font-bold block">{value}</span>
      <span className="text-sm mt-2 block">{label}</span>
    </div>
  )

  const TeamCard = ({ title, items }: { title: string, items: string[] }) => (
    <div className="bg-gradient-to-br from-brand-primary to-brand-secondary text-white p-6 rounded-2xl">
      <h4 className="font-semibold mb-4">{title}</h4>
      <ul className="space-y-2 text-sm">
        {items.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </div>
  )

  const slides = [
    // Slide 1: Title
    (
      <div className="text-center">
        <h1 className="text-6xl font-bold text-brand-secondary mb-6 text-shadow">Fair Dinkum Builds</h1>
        <h2 className="text-4xl text-brand-primary mb-12">Q1 FY26 Brand Campaign Strategy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <StatCard number="$100K" label="Campaign Budget" />
          <StatCard number="Q1" label="FY26 Launch" />
          <StatCard number="70%" label="Male Primary Contact" />
        </div>
        <div className="bg-gradient-to-r from-brand-light/30 to-brand-primary/30 p-8 rounded-2xl border-l-4 border-brand-primary">
          <h3 className="text-2xl font-semibold text-brand-secondary mb-4">Campaign Objective</h3>
          <p className="text-lg text-gray-700">Drive qualified lead generation and premium brand awareness for high-end sheds, garages, barns, storage, carports and patios across Australia.</p>
        </div>
      </div>
    ),

    // Slide 2: Market Analysis
    (
      <div>
        <h2 className="text-4xl font-bold text-brand-secondary mb-8">Market Analysis & Opportunity</h2>
        <h3 className="text-2xl text-brand-primary mb-6">Australian Outdoor Structure Market</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <BudgetItem title="Market Size" amount="$2,800,000,000" description="Australian home improvement market growing 8.2% annually" />
          <BudgetItem title="Premium Segment" amount="25%" description="Of market seeks quality over price point" />
        </div>

        <h3 className="text-2xl text-brand-primary mb-6">Key Market Drivers</h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-brand-primary">
            <span className="font-semibold text-brand-secondary">Work-from-home trend:</span>
            <span className="text-gray-700 ml-2">Increased demand for home office sheds and multipurpose structures</span>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-brand-primary">
            <span className="font-semibold text-brand-secondary">Property investment:</span>
            <span className="text-gray-700 ml-2">Homeowners adding value through premium outdoor structures</span>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-brand-primary">
            <span className="font-semibold text-brand-secondary">Lifestyle evolution:</span>
            <span className="text-gray-700 ml-2">Outdoor living and entertainment spaces prioritised</span>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-brand-primary">
            <span className="font-semibold text-brand-secondary">Storage needs:</span>
            <span className="text-gray-700 ml-2">Growing vehicle ownership and hobby equipment storage requirements</span>
          </div>
        </div>
      </div>
    ),

    // Slide 3: Target Audience
    (
      <div>
        <h2 className="text-4xl font-bold text-brand-secondary mb-8">Target Audience Strategy</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
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

        <div className="bg-gradient-to-r from-brand-light/30 to-brand-primary/30 p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold text-brand-secondary mb-4">Audience Insights</h3>
          <div className="space-y-4">
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
      <div>
        <h2 className="text-4xl font-bold text-brand-secondary mb-8">$100K Budget Allocation Strategy</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      <div>
        <h2 className="text-4xl font-bold text-brand-secondary mb-8">Multi-Channel Campaign Strategy</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
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

        <div className="bg-gradient-to-r from-brand-light/30 to-brand-primary/30 p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold text-brand-secondary mb-4">Channel Synergy Approach</h3>
          <p className="text-lg text-gray-700">Create consistent messaging across all touchpoints with tailored content for each channel's unique audience behavior and expectations.</p>
        </div>
      </div>
    ),

    // Slide 6: Campaign Execution
    (
      <div>
        <h2 className="text-4xl font-bold text-brand-secondary mb-8">Q1 FY26 Campaign Execution</h2>
        
        <div className="bg-gradient-to-r from-brand-light/20 to-brand-primary/20 p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold text-brand-secondary mb-6">90-Day Rollout Timeline</h3>
          <div className="space-y-4">
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
      <div>
        <h2 className="text-4xl font-bold text-brand-secondary mb-8">Brand Messaging Strategy</h2>
        
        <div className="bg-gradient-to-r from-brand-light/30 to-brand-primary/30 p-8 rounded-2xl mb-8">
          <h3 className="text-2xl font-semibold text-brand-secondary mb-4">Primary Brand Promise</h3>
          <p className="text-2xl font-bold text-brand-primary mb-4">"Premium Outdoor Structures Built to Last a Lifetime"</p>
          <p className="text-lg text-gray-700">Emphasising superior craftsmanship, durability, and long-term value investment.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
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

        <h3 className="text-2xl text-brand-primary mb-4">Content Pillars</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-brand-primary">
            <span className="font-semibold text-brand-secondary">Quality & Craftsmanship:</span>
            <p className="text-gray-700 text-sm">Behind-the-scenes build process, material sourcing</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-brand-primary">
            <span className="font-semibold text-brand-secondary">Customer Success Stories:</span>
            <p className="text-gray-700 text-sm">Before/after transformations, testimonials</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-brand-primary">
            <span className="font-semibold text-brand-secondary">Design Inspiration:</span>
            <p className="text-gray-700 text-sm">Styling ideas, functional layouts, property integration</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-brand-primary">
            <span className="font-semibold text-brand-secondary">Technical Expertise:</span>
            <p className="text-gray-700 text-sm">Engineering insights, weather resistance, compliance</p>
          </div>
        </div>
      </div>
    ),

    // Slide 8: Internal Collaboration
    (
      <div>
        <h2 className="text-4xl font-bold text-brand-secondary mb-8">Internal Team Collaboration Strategy</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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

        <div className="bg-gradient-to-r from-brand-light/30 to-brand-primary/30 p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold text-brand-secondary mb-4">Cross-Functional Campaign Meetings</h3>
          <p className="text-lg text-gray-700">Bi-weekly campaign performance reviews with all stakeholders to ensure marketing efforts align with business capacity and customer experience excellence.</p>
        </div>
      </div>
    ),

    // Slide 9: KPIs & Measurement
    (
      <div>
        <h2 className="text-4xl font-bold text-brand-secondary mb-8">Success Metrics & KPIs</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <KPICard value="450+" label="Qualified Leads" />
          <KPICard value="15%" label="Lead Conversion Rate" />
          <KPICard value="$220" label="Cost Per Lead" />
          <KPICard value="3.5:1" label="ROAS Target" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl text-brand-primary mb-4">Brand Awareness Metrics</h3>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg border-l-4 border-brand-primary">
                <span className="font-semibold text-brand-secondary">Website Traffic:</span>
                <p className="text-gray-700 text-sm">40% increase in organic and paid traffic</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-brand-primary">
                <span className="font-semibold text-brand-secondary">Brand Search Volume:</span>
                <p className="text-gray-700 text-sm">60% increase in branded search queries</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-brand-primary">
                <span className="font-semibold text-brand-secondary">Social Engagement:</span>
                <p className="text-gray-700 text-sm">200% increase in social media engagement</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-brand-primary">
                <span className="font-semibold text-brand-secondary">Share of Voice:</span>
                <p className="text-gray-700 text-sm">25% increase in industry conversation mentions</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl text-brand-primary mb-4">Lead Quality Indicators</h3>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg border-l-4 border-brand-primary">
                <span className="font-semibold text-brand-secondary">Sales Qualified Leads:</span>
                <p className="text-gray-700 text-sm">70% of marketing leads progress to sales qualification</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-brand-primary">
                <span className="font-semibold text-brand-secondary">Pipeline Value:</span>
                <p className="text-gray-700 text-sm">Average deal size maintains premium positioning</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-brand-primary">
                <span className="font-semibold text-brand-secondary">Geographic Distribution:</span>
                <p className="text-gray-700 text-sm">Lead generation monitoring across geography</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-brand-primary">
                <span className="font-semibold text-brand-secondary">Channel Attribution:</span>
                <p className="text-gray-700 text-sm">Multi-touch journey analysis and optimisation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    // Slide 10: Next Steps
    (
      <div>
        <h2 className="text-4xl font-bold text-brand-secondary mb-8">Next Steps & Implementation</h2>
        
        <div className="bg-gradient-to-r from-brand-light/30 to-brand-primary/30 p-8 rounded-2xl mb-8">
          <h3 className="text-2xl font-semibold text-brand-secondary mb-4">Immediate Actions (Week 1)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <p className="text-gray-700">• Stakeholder alignment meeting and campaign brief approval</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-gray-700">• Creative agency briefing and asset production timeline</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-gray-700">• Website audit and optimisation priority identification</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-gray-700">• Tracking and analytics setup implementation</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
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

        <div className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-semibold mb-4">Expected Outcomes</h3>
          <p className="text-lg">This integrated campaign strategy positions the brand as the premium choice for Australian homeowners seeking quality outdoor structures, while building a sustainable lead generation engine for long-term growth.</p>
        </div>
      </div>
    )
  ]

  return (
    <div className="min-h-screen relative">
      {/* Slide Counter */}
      <div className="fixed top-6 right-6 z-50 glass-effect px-4 py-2 rounded-full font-semibold text-brand-secondary">
        <span>{currentSlide}</span> / <span>{totalSlides}</span>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden mt-8">
        <div className="slide-transition">
          <div className="p-12 lg:p-20 min-h-[600px]">
            {slides[currentSlide - 1]}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="glass-effect px-6 py-4 rounded-full flex items-center gap-4">
          {/* Slide Numbers */}
          <div className="flex gap-2">
            {Array.from({ length: totalSlides }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => goToSlide(i + 1)}
                className={`w-8 h-8 rounded-full font-semibold text-sm transition-all duration-300 ${
                  currentSlide === i + 1
                    ? 'bg-brand-primary text-white'
                    : 'bg-white/50 text-brand-secondary hover:bg-brand-light'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          {/* Arrow Navigation */}
          <div className="flex gap-2 ml-4 border-l border-white/30 pl-4">
            <button
              onClick={previousSlide}
              className="flex items-center justify-center w-10 h-10 bg-brand-primary text-white rounded-full hover:bg-brand-secondary transition-all duration-300 hover-lift"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="flex items-center justify-center w-10 h-10 bg-brand-primary text-white rounded-full hover:bg-brand-secondary transition-all duration-300 hover-lift"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PresentationSlides