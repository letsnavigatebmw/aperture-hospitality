'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function AISolutionsPage() {
  const capabilities = [
    {
      number: '01',
      title: 'Revenue Forecasting',
      description: 'Predictive AI models that forecast demand, optimize pricing, and identify expansion opportunities with unprecedented accuracy.'
    },
    {
      number: '02',
      title: 'Customer Intelligence',
      description: 'Advanced analytics that segment customers, predict churn, and identify high-value opportunities before competitors do.'
    },
    {
      number: '03',
      title: 'Dynamic Optimization',
      description: 'Real-time AI-driven recommendations for inventory allocation, channel strategy, and rate optimization across all properties.'
    },
    {
      number: '04',
      title: 'Competitive Intelligence',
      description: 'AI-powered market analysis that tracks competitor pricing, positioning, and strategy in real time.'
    },
    {
      number: '05',
      title: 'Demand Planning',
      description: 'Machine learning models that predict demand patterns, optimize staffing, and align operations with revenue opportunities.'
    },
    {
      number: '06',
      title: 'Strategic Insights',
      description: 'Custom AI dashboards that translate complex data into actionable insights for C-suite decision-making.'
    }
  ]

  return (
    <>
      <Nav />

      {/* HERO */}
      <section style={{
        padding: 'clamp(4rem, 10vw, 8rem) clamp(1.5rem, 4vw, 4rem)',
        background: '#1C1A17',
        borderBottom: '1px solid #2e2b26'
      }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          {/* Section label */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '2.5rem'
          }}>
            <div style={{
              width: '2px',
              height: '1.25rem',
              background: '#B8924A',
              flexShrink: 0
            }}></div>
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#6B6760'
            }}>AI Intelligence Layer</span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            fontWeight: 300,
            lineHeight: 1.1,
            color: '#F0EDE6',
            marginBottom: '1.5rem'
          }}>
            AI-Powered Revenue <span style={{ fontStyle: 'italic', color: '#B8924A' }}>Optimization</span>
          </h1>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.25rem',
            fontWeight: 300,
            lineHeight: 1.8,
            color: '#6B6760',
            maxWidth: '700px',
            margin: 0
          }}>
            Integrate advanced artificial intelligence into your revenue factory. We apply machine learning, predictive analytics, and strategic insights to unlock growth, optimize operations, and stay ahead of market changes.
          </p>

        </div>
      </section>

      {/* WHAT IS AN AI EMPLOYEE */}
      <section style={{
        padding: 'clamp(4rem, 10vw, 8rem) clamp(1.5rem, 4vw, 4rem)',
        background: '#FFFFFF',
        borderBottom: '1px solid #D4CFC6'
      }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#6B6760'
            }}>Your AI Workforce</span>
            
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.5rem, 4vw, 3.75rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: '#1C1A17',
              marginTop: '1rem',
              marginBottom: '2rem'
            }}>
              What Is An AI Employee?
            </h2>
            
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              fontWeight: 300,
              lineHeight: 1.75,
              color: '#6B6760',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              Your AI Employee specializes in 3 specific business roles. Use one, or use them all to produce more cash in your business. The perfect solution for local service business owners who don&apos;t want to sacrifice potential sales opportunities because they&apos;re busy serving customers. Your AI Employee is an always on, 24/7 member of your team responsible for handling incoming calls, social messages, web chats, and reviews. All with natural conversation that feels human, not robotic.
            </p>
          </div>

          {/* Three Columns */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {/* Phone Conversations */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '1.5rem',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>📞</div>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.5rem',
                fontWeight: 400,
                color: '#1C1A17',
                marginBottom: '1rem'
              }}>Phone Conversations</h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                textAlign: 'left'
              }}>
                {[
                  'Answers every incoming call 24/7',
                  'Transfers calls to the right team member based on your rules',
                  'Captures caller details and creates instant follow-up reminders',
                  'Sends call transcripts for your records'
                ].map((item, i) => (
                  <li key={i} style={{
                    fontSize: '0.875rem',
                    fontWeight: 300,
                    color: '#6B6760',
                    paddingLeft: '1.5rem',
                    marginBottom: '0.75rem',
                    position: 'relative'
                  }}>
                    <span style={{ position: 'absolute', left: 0, color: '#B8924A' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Text Conversations */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '1.5rem',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>💬</div>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.5rem',
                fontWeight: 400,
                color: '#1C1A17',
                marginBottom: '1rem'
              }}>Text Conversations</h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                textAlign: 'left'
              }}>
                {[
                  'Handles multiple text conversations at a time across website, social, and mobile',
                  'Books appointments directly into your calendar with instant confirmations',
                  'Sends automated SMS follow-ups so appointments do not turn into no-shows'
                ].map((item, i) => (
                  <li key={i} style={{
                    fontSize: '0.875rem',
                    fontWeight: 300,
                    color: '#6B6760',
                    paddingLeft: '1.5rem',
                    marginBottom: '0.75rem',
                    position: 'relative'
                  }}>
                    <span style={{ position: 'absolute', left: 0, color: '#B8924A' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Reviews Conversations */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '1.5rem',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>⭐</div>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.5rem',
                fontWeight: 400,
                color: '#1C1A17',
                marginBottom: '1rem'
              }}>Reviews Conversations</h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                textAlign: 'left'
              }}>
                {[
                  'Requests Google & Facebook reviews from satisfied customers automatically',
                  'Responds to reviews across Google and Facebook to maintain your online presence'
                ].map((item, i) => (
                  <li key={i} style={{
                    fontSize: '0.875rem',
                    fontWeight: 300,
                    color: '#6B6760',
                    paddingLeft: '1.5rem',
                    marginBottom: '0.75rem',
                    position: 'relative'
                  }}>
                    <span style={{ position: 'absolute', left: 0, color: '#B8924A' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Features Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {[
              { icon: '⏰', title: 'Never Sleeps' },
              { icon: '❤️', title: 'Never Gets Sick' },
              { icon: '✈️', title: 'Never Needs Vacation' },
              { icon: '⚡', title: 'Replies Right Away' }
            ].map((feature, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '1.5rem', background: '#F5F5F5', borderRadius: '4px' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{feature.icon}</div>
                <h4 style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.25rem',
                  fontWeight: 400,
                  color: '#1C1A17',
                  margin: 0
                }}>
                  {feature.title}
                </h4>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div>
              <Link href="#" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem 2rem',
                background: '#0066CC',
                color: '#FFFFFF',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                borderRadius: '4px',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = '#0052A3'
              }} onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = '#0066CC'
              }}>
                Buy Now
              </Link>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 300,
                color: '#6B6760',
                marginTop: '0.5rem',
                textAlign: 'center'
              }}>
                Yes, I'm Ready To Grow
              </p>
            </div>

            <div>
              <Link href="#" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem 2rem',
                background: 'transparent',
                color: '#1C1A17',
                border: '1px solid #1C1A17',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                borderRadius: '4px',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = '#1C1A17'
                ;(e.target as HTMLElement).style.color = '#FFFFFF'
              }} onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = 'transparent'
                ;(e.target as HTMLElement).style.color = '#1C1A17'
              }}>
                Try Now
              </Link>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 300,
                color: '#6B6760',
                marginTop: '0.5rem',
                textAlign: 'center'
              }}>
                Click, Call, or Text 786-706-8231
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* REVENUE FACTORY CERTIFIED */}
      <section style={{
        padding: 'clamp(4rem, 10vw, 8rem) clamp(1.5rem, 4vw, 4rem)',
        background: '#1a1a1a',
        borderBottom: '1px solid #2e2b26'
      }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          {/* Header */}
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#6B6760'
            }}>FEATURES</span>
            
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 300,
              lineHeight: 1.2,
              color: '#F0EDE6',
              margin: 0,
              marginTop: '1rem',
              marginBottom: '1.5rem'
            }}>
              Revenue Factory-Certified AI Employee
            </h2>
            
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9375rem',
              fontWeight: 300,
              lineHeight: 1.75,
              color: '#6B6760',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              Some AI Employees Only Handle Calls, Texts, Or Reviews. Revenue Factory-certified AI Employees do all three, with AI Employee training, onboarding, and performance management included. Plus, VIP 24/7 live support (typically $599/month) with average response time under 4 minutes.
            </p>
          </div>

          {/* Comparison Table */}
          <div style={{
            overflowX: 'auto',
            borderRadius: '8px',
            border: '1px solid #2e2b26'
          }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontFamily: "'Inter', sans-serif"
            }}>
              <thead>
                <tr style={{ background: '#2e2b26', borderBottom: '1px solid #3a3731' }}>
                  <th style={{
                    padding: '1.5rem 2rem',
                    textAlign: 'left',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#F0EDE6',
                    borderRight: '1px solid #3a3731'
                  }}>AI Employee Skills You Get</th>
                  <th style={{
                    padding: '1.5rem 2rem',
                    textAlign: 'left',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#F0EDE6',
                    borderRight: '1px solid #3a3731'
                  }}>What Others Charge</th>
                  <th style={{
                    padding: '1.5rem 2rem',
                    textAlign: 'center',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#F0EDE6'
                  }}>Included</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { skill: 'Inbound/Outbound Phone Conversations', desc: 'Answers every call, every channel', cost: 'Typically $999/month' },
                  { skill: 'Request & Respond To Reviews', desc: 'Review requests + replies, automated', cost: 'Typically $299/month' },
                  { skill: 'Conversational AI Texting', desc: 'Back-and-forth SMS handling', cost: 'Typically $499/month' },
                  { skill: 'Expert Onboarding & Setup', desc: 'We build it with you', cost: 'Typically $297 one-time' },
                  { skill: 'Recordings & Transcriptions', desc: 'Every conversation, accessible anytime', cost: 'Typically $99/month' },
                  { skill: 'Real-Time Notifications', desc: 'Calls & reviews, text or email instantly', cost: 'Priceless' },
                  { skill: '24/7 VIP Support', desc: 'Live response, avg. under 4 minutes', cost: 'Typically $99/month' }
                ].map((row, i) => (
                  <tr key={i} style={{
                    borderBottom: i < 6 ? '1px solid #2e2b26' : 'none',
                    background: i % 2 === 0 ? '#1a1a1a' : '#202020'
                  }}>
                    <td style={{
                      padding: '1.5rem 2rem',
                      fontSize: '0.9375rem',
                      fontWeight: 500,
                      color: '#F0EDE6',
                      borderRight: '1px solid #2e2b26'
                    }}>
                      <div>{row.skill}</div>
                      <div style={{
                        fontSize: '0.75rem',
                        fontWeight: 300,
                        color: '#6B6760',
                        marginTop: '0.25rem'
                      }}>{row.desc}</div>
                    </td>
                    <td style={{
                      padding: '1.5rem 2rem',
                      fontSize: '0.9375rem',
                      fontWeight: 300,
                      color: '#6B6760',
                      borderRight: '1px solid #2e2b26'
                    }}>
                      {row.cost}
                    </td>
                    <td style={{
                      padding: '1.5rem 2rem',
                      textAlign: 'center',
                      fontSize: '1.5rem',
                      color: '#B8924A'
                    }}>
                      ✓
                    </td>
                  </tr>
                ))}
                <tr style={{
                  background: '#2e2b26',
                  borderTop: '1px solid #3a3731',
                  fontWeight: 600
                }}>
                  <td style={{
                    padding: '1.5rem 2rem',
                    fontSize: '0.9375rem',
                    color: '#F0EDE6',
                    borderRight: '1px solid #3a3731'
                  }}>
                    Total if purchased separately
                  </td>
                  <td style={{
                    padding: '1.5rem 2rem',
                    fontSize: '0.9375rem',
                    color: '#F0EDE6',
                    borderRight: '1px solid #3a3731'
                  }}>
                    ~$4,000/month
                  </td>
                  <td style={{
                    padding: '1.5rem 2rem',
                    textAlign: 'center',
                    color: '#B8924A'
                  }}>
                    —
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* BONUSES SECTION */}
      <section style={{
        padding: 'clamp(4rem, 10vw, 8rem) clamp(1.5rem, 4vw, 4rem)',
        background: '#FFFFFF',
        borderBottom: '1px solid #D4CFC6'
      }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#666666'
            }}>Bonuses</span>
            
            <h2 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(2rem, 3.5vw, 3.5rem)',
              fontWeight: 400,
              lineHeight: 1.2,
              color: '#1C1A17',
              margin: 0,
              marginTop: '1rem',
              marginBottom: '1rem'
            }}>
              Resources To Make You More Successful With Your AI Employee From Day 1
            </h2>
            
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              fontWeight: 300,
              lineHeight: 1.6,
              color: '#666666',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              Four resources built to make you more successful with your AI Employee from day one — and yours to keep forever.
            </p>
          </div>

          {/* Bonus Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {[
              { icon: '📋', title: 'AI Employee Job Description Template', value: '$350', desc: 'Pre-written scope of work for your AI Receptionist role — ready to customize with your hours, offer, and call rules. Walk into your onboarding call with this completed and your setup time gets cut in half.' },
              { icon: '☎️', title: 'Inbound Call Script Playbook', value: '$250', desc: 'The 12 most common questions your AI Employee will get — with tested response frameworks. Covers pricing objections, availability questions, emergency calls, and appointment booking. Yours to edit, own, and reuse for every new AI Employee you hire.' },
              { icon: '✅', title: '30-Day AI Employee Quick-Start Checklist', value: '$150', desc: 'The exact sequence of actions — in the right order — for your first 30 days. No guessing what to do next. No skipping steps that matter. Your AI Employee goes live faster and performs better from day one.' },
              { icon: '📊', title: 'Weekly Performance Scorecard Template', value: '$200', desc: 'The five numbers that tell you whether your AI Employee is working — calls answered, appointments booked, reviews requested, reviews responded to, and leads followed up. One glance, every Monday morning.' }
            ].map((bonus, i) => (
              <div key={i} style={{
                padding: '2rem',
                border: '1px solid #E0E0E0',
                borderRadius: '4px',
                background: '#FAFAFA'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{bonus.icon}</div>
                <h3 style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: '#1C1A17',
                  margin: 0,
                  marginBottom: '0.5rem'
                }}>
                  {bonus.title}
                </h3>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#0066CC',
                  marginBottom: '1rem'
                }}>
                  Value: {bonus.value}
                </div>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.875rem',
                  fontWeight: 300,
                  lineHeight: 1.6,
                  color: '#666666',
                  margin: 0
                }}>
                  {bonus.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Total Value */}
          <div style={{
            border: '1px solid #E0E0E0',
            background: '#F5F5F5',
            padding: '2rem',
            borderRadius: '4px',
            textAlign: 'center'
          }}>
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.875rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#666666',
              marginBottom: '0.5rem'
            }}>
              Total Toolkit Value:
            </div>
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '2rem',
              fontWeight: 600,
              color: '#1C1A17',
              marginBottom: '0.5rem'
            }}>
              <span style={{ textDecoration: 'line-through', color: '#999999' }}>$950</span>
            </div>
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.125rem',
              fontWeight: 600,
              color: '#0066CC'
            }}>
              ✓ Your Cost: Included free with any plan
            </div>
          </div>

        </div>
      </section>

      {/* VALUE SECTION */}
      <section style={{
        padding: 'clamp(4rem, 10vw, 8rem) clamp(1.5rem, 4vw, 4rem)',
        background: '#1A1A1A',
        borderBottom: '1px solid #2e2b26'
      }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#6B6760'
            }}>Value</span>
            
            <h2 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              fontWeight: 300,
              lineHeight: 1.2,
              color: '#F0EDE6',
              margin: 0,
              marginTop: '1rem',
              marginBottom: '1rem'
            }}>
              Three Full-Time Jobs. One Monthly Price.
            </h2>
            
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              fontWeight: 300,
              lineHeight: 1.6,
              color: '#6B6760',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              Get your AI Employee for less than the cost of an additional full-time employee and less than the cost of missing your next sales opportunities.
            </p>
          </div>

          {/* Job Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {[
              { number: '01', title: 'Full-Time Receptionist', salary: '40K-$50K', note: '$40K-$50K annually + payroll taxes + benefits + training time' },
              { number: '02', title: 'Full-Time Customer Service Rep', salary: '35K-$45K', note: '$35K-$45K annually + payroll taxes + benefits + training time' },
              { number: '03', title: 'Full-Time Reputation Manager', salary: '15K-$25K', note: '$15K-$25K annually + payroll taxes + benefits + training time' }
            ].map((job, i) => (
              <div key={i} style={{
                border: '1px solid #2e2b26',
                padding: '2.5rem',
                borderRadius: '4px',
                background: '#222222'
              }}>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#6B6760',
                  marginBottom: '1rem'
                }}>
                  {job.number}
                </div>
                <h3 style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#F0EDE6',
                  margin: 0,
                  marginBottom: '0.5rem'
                }}>
                  {job.title}
                </h3>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '1.75rem',
                  fontWeight: 600,
                  color: '#0066CC',
                  marginBottom: '1rem'
                }}>
                  {job.salary}
                </div>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.875rem',
                  fontWeight: 300,
                  lineHeight: 1.6,
                  color: '#6B6760',
                  margin: 0
                }}>
                  {job.note}
                </p>
              </div>
            ))}
          </div>

          {/* Total Cost Box */}
          <div style={{
            border: '1px solid #2e2b26',
            background: '#222222',
            padding: '3rem',
            borderRadius: '4px',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.875rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#6B6760',
              marginBottom: '1rem'
            }}>
              Total Annual Cost
            </div>
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '3.5rem',
              fontWeight: 600,
              color: '#F0EDE6',
              margin: 0,
              marginBottom: '0.5rem'
            }}>
              90K-$120K+
            </div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.875rem',
              fontWeight: 300,
              color: '#6B6760',
              margin: 0
            }}>
              (plus ongoing management overhead)
            </p>
          </div>

          {/* CTAs */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            justifyContent: 'center'
          }}>
            <Link href="#" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.25rem 2.5rem',
              background: '#0066CC',
              color: '#FFFFFF',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9375rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: '4px',
              transition: 'all 0.3s ease'
            }} onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background = '#0052A3'
            }} onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = '#0066CC'
            }}>
              Buy Now
            </Link>
            <div style={{ textAlign: 'center' }}>
              <Link href="#" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.25rem 2.5rem',
                background: 'transparent',
                color: '#F0EDE6',
                border: '1px solid #6B6760',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.9375rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                borderRadius: '4px',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = '#2e2b26'
              }} onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = 'transparent'
              }}>
                Try Now
              </Link>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.75rem',
                fontWeight: 300,
                color: '#6B6760',
                margin: '0.5rem 0 0 0'
              }}>
                Click, Call, Or Text 786-706-8231
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section style={{
        padding: 'clamp(4rem, 10vw, 8rem) clamp(1.5rem, 4vw, 4rem)',
        background: '#FFFFFF',
        borderBottom: '1px solid #D4CFC6'
      }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#666666'
            }}>Frequently Asked Questions</span>
            
            <h2 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 400,
              lineHeight: 1.2,
              color: '#1C1A17',
              margin: 0,
              marginTop: '1rem'
            }}>
              Your AI Employee Questions, Answered
            </h2>
          </div>

          {/* FAQ Accordion */}
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {[
              { q: 'What is an AI Employee?' },
              { q: 'How much does my AI Employee Cost?' },
              { q: 'Do I need technical skills to manage my AI Employee?' },
              { q: 'How is my AI Employee different from other AI Tools?' },
              { q: 'What\'s included with my AI Employee?' },
              { q: 'Can I customize my AI Employee to fit my brand?' },
              { q: 'Which platforms will my AI Employee work on?' },
              { q: 'Will my AI Employee replace my team?' },
              { q: 'Can I try out my AI Employee risk-free?' }
            ].map((faq, i) => (
              <div key={i} style={{
                borderBottom: i < 8 ? '1px solid #E0E0E0' : 'none',
                padding: '1.5rem 0'
              }}>
                <button
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#1C1A17',
                    textAlign: 'left'
                  }}
                  onClick={(e) => {
                    const parent = (e.currentTarget as HTMLElement).parentElement
                    const answer = parent?.querySelector('[data-answer]') as HTMLElement
                    if (answer) {
                      answer.style.display = answer.style.display === 'none' ? 'block' : 'none'
                    }
                  }}
                >
                  <span>{faq.q}</span>
                  <span style={{ fontSize: '1.5rem' }}>▼</span>
                </button>
                <div
                  data-answer
                  style={{
                    display: 'none',
                    marginTop: '1rem',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.9375rem',
                    fontWeight: 300,
                    lineHeight: 1.6,
                    color: '#666666'
                  }}
                >
                  {/* Answer content here */}
                  Answer to: {faq.q}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CAPABILITIES GRID */}
      <section style={{
        padding: 'clamp(4rem, 10vw, 8rem) clamp(1.5rem, 4vw, 4rem)',
        background: '#1C1A17',
        borderBottom: '1px solid #2e2b26'
      }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          
          {/* Section intro */}
          <div style={{ marginBottom: '4rem' }}>
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#6B6760'
            }}>Six Core Capabilities</span>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.5rem, 4vw, 3.75rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: '#F0EDE6',
              marginTop: '1rem'
            }}>
              What AI <span style={{ fontStyle: 'italic', color: '#B8924A' }}>Unlocks</span>
            </h2>
          </div>

          {/* Divider */}
          <div style={{
            width: '100%',
            height: '1px',
            background: '#2e2b26',
            marginBottom: '3rem'
          }}></div>

          {/* Capabilities grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {capabilities.map((capability, index) => (
              <div key={index} style={{
                padding: '2.5rem 0',
                borderBottom: '1px solid #2e2b26',
                paddingBottom: index % 3 === 2 ? '2.5rem' : '2.5rem'
              }}>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.625rem',
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#B8924A',
                  marginBottom: '1.25rem'
                }}>
                  {capability.number}
                </div>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.5rem',
                  fontWeight: 400,
                  color: '#F0EDE6',
                  marginBottom: '0.875rem',
                  lineHeight: 1.2
                }}>
                  {capability.title}
                </h3>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9375rem',
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: '#6B6760',
                  margin: 0
                }}>
                  {capability.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{
        padding: 'clamp(4rem, 10vw, 8rem) clamp(1.5rem, 4vw, 4rem)',
        background: '#1C1A17',
        textAlign: 'center',
        borderBottom: '1px solid #2e2b26'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 300,
            lineHeight: 1.2,
            color: '#F0EDE6',
            marginBottom: '2rem'
          }}>
            Ready to unlock AI-powered growth?
          </h2>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.0625rem',
            fontWeight: 300,
            lineHeight: 1.8,
            color: '#6B6760',
            marginBottom: '2.5rem'
          }}>
            Let's explore how AI can accelerate your revenue strategy and give you a competitive edge in today's market.
          </p>

          <Link href="/contact" style={{
            display: 'inline-block',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.9375rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#F0EDE6',
            background: '#B8924A',
            padding: '1rem 2rem',
            textDecoration: 'none',
            transition: 'all 0.3s ease'
          }} onMouseEnter={(e) => {
            (e.target as HTMLElement).style.background = '#A67A3A'
          }} onMouseLeave={(e) => {
            (e.target as HTMLElement).style.background = '#B8924A'
          }}>
            Schedule a Consultation
          </Link>

        </div>
      </section>

      <Footer />
    </>
  )
}
