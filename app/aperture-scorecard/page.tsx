'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import IntakeForm from '@/components/IntakeForm'
import Link from 'next/link'

export default function ApertureScorecardPage() {
  const mobileStyles = `
    @media (max-width: 768px) {
      .scorecard-grid {
        grid-template-columns: 1fr !important;
      }
    }
  `

  const steps = [
    {
      stage: 'ACQUISITION',
      number: '1',
      title: 'Prospect',
      percentage: '5–20%',
      question: 'How consistently can buyers who find you on Google, Yelp, Facebook, or other directories get responses to messages and inquiries?',
      cost: 'Unanswered messages send buyers to competitors.'
    },
    {
      stage: 'ACQUISITION',
      number: '2',
      title: 'Visitor',
      percentage: '5–20%',
      question: 'How consistently can people get answers to their questions about your services, pricing, availability, etc. when they visit your website?',
      cost: 'Unanswered questions become exits.'
    },
    {
      stage: 'ACQUISITION',
      number: '3',
      title: 'MQL',
      percentage: '25–35%',
      question: 'How consistently do you and/or your team collect contact information from people who show interest but aren't yet ready to book?',
      cost: 'Interest disappears before you can follow up.'
    },
    {
      stage: 'ACTIVATION',
      number: '4',
      title: 'SQL',
      percentage: '30–40%',
      question: 'How consistently do you and/or your team respond to buyers looking to book within 5 minutes — including after hours?',
      cost: 'Ready buyers wait while the owner is busy serving customers.'
    },
    {
      stage: 'ACTIVATION',
      number: '5',
      title: 'Opportunity',
      percentage: '50–62%',
      question: 'How consistently do you and/or your team follow up with buyers who received pricing information but haven't yet made a purchase decision?',
      cost: 'Most deals die in the silence.'
    },
    {
      stage: 'ACTIVATION',
      number: '6',
      title: 'Customer',
      percentage: '15–30%',
      question: 'How consistently are you and/or your team available to collect payments from customers when they're ready to pay — including after hours?',
      cost: 'Payment friction costs sales you already won.'
    },
    {
      stage: 'AMPLIFICATION',
      number: '7',
      title: 'Advocate',
      percentage: '60–70%',
      question: 'How consistently do you and/or your team respond to every review your business receives?',
      cost: 'Review silence weakens trust before new buyers ever call.'
    },
    {
      stage: 'AMPLIFICATION',
      number: '8',
      title: 'Fan',
      percentage: '60–70%',
      question: 'How consistently do you and/or your team reach out to past customers to bring them back for their next purchase?',
      cost: 'Repeat demand gets left to chance.'
    },
    {
      stage: 'AMPLIFICATION',
      number: '9',
      title: 'Promoter',
      percentage: '60–80%',
      question: 'How consistently do you and/or your team reach out to fans about sending others to your business?',
      cost: 'Your best leads never get invited in.'
    }
  ]

  const stageInfo = {
    ACQUISITION: {
      title: 'Acquisition',
      subtitle: 'Acquire Leads',
      description: 'Discovery, website answers, and contact capture before the buyer is ready.'
    },
    ACTIVATION: {
      title: 'Activation',
      subtitle: 'Convert Customers',
      description: 'Speed, follow-up, and finish-line friction when someone is close to buying.'
    },
    AMPLIFICATION: {
      title: 'Amplification',
      subtitle: 'Earn Promoters',
      description: 'Reviews, repeat purchases, and referrals from people who already know you.'
    }
  }

  return (
    <>
      <style>{mobileStyles}</style>
      <Nav />

      {/* HERO */}
      <section style={{
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 4vw, 4rem)',
        background: '#1C1A17',
        borderBottom: '1px solid #2e2b26'
      }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
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
              color: '#F0EDE6'
            }}>Diagnostic Framework</span>
          </div>

          <div style={{ maxWidth: '900px' }}>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              fontWeight: 300,
              lineHeight: 1.2,
              color: '#F0EDE6',
              marginBottom: '1.5rem'
            }}>
              The Revenue <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Leak Audit</em>
            </h1>

            <p style={{
              fontSize: '1.25rem',
              fontWeight: 300,
              lineHeight: 1.7,
              color: '#F0EDE6',
              marginBottom: '1.5rem'
            }}>
              Fix the right leak first.
            </p>

            <p style={{
              fontSize: '1.0625rem',
              fontWeight: 300,
              lineHeight: 1.8,
              color: '#F0EDE6',
              marginBottom: '2.5rem',
              maxWidth: '700px'
            }}>
              A 9-step map of where demand is earned, converted, and acquired — and where your business is leaking revenue today.
            </p>

            <p style={{
              fontSize: '0.9375rem',
              fontWeight: 300,
              lineHeight: 1.8,
              color: '#B8924A',
              marginBottom: '2.5rem',
              fontStyle: 'italic'
            }}>
              Read all 9 steps below. Find where your system is weakest and where the potential win-back is largest.
            </p>
          </div>
        </div>
      </section>

      {/* ACQUISITION STAGE */}
      <section style={{
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 4vw, 4rem)',
        background: '#F0EDE6',
        borderBottom: '1px solid #D4CFC6'
      }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ marginBottom: '4rem' }}>
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#6B6760',
              display: 'block',
              marginBottom: '1rem'
            }}>Steps 1–3</span>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)',
              fontWeight: 300,
              lineHeight: 1.15,
              color: '#1C1A17',
              margin: 0,
              marginBottom: '1rem'
            }}>
              <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Acquisition</em>
            </h2>
            <p style={{
              fontSize: '1rem',
              fontWeight: 300,
              lineHeight: 1.7,
              color: '#6B6760',
              margin: 0
            }}>
              {stageInfo.ACQUISITION.description}
            </p>
          </div>

          <div className="scorecard-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem'
          }}>
            {steps.slice(0, 3).map((step, i) => (
              <div key={i} style={{
                background: '#E8E4DB',
                padding: '2rem',
                border: '1px solid #D4CFC6',
                borderRadius: '2px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.75rem',
                  marginBottom: '1.5rem'
                }}>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '2rem',
                    fontWeight: 300,
                    color: '#B8924A'
                  }}>#{step.number}</span>
                  <div>
                    <div style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#6B6760',
                      marginBottom: '0.25rem'
                    }}>{step.title}</div>
                    <div style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.6875rem',
                      fontWeight: 400,
                      color: '#B8924A'
                    }}>{step.percentage}</div>
                  </div>
                </div>

                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9375rem',
                  fontWeight: 300,
                  lineHeight: 1.6,
                  color: '#1C1A17',
                  margin: 0,
                  marginBottom: '1rem'
                }}>
                  {step.question}
                </p>

                <div style={{
                  borderTop: '1px solid #D4CFC6',
                  paddingTop: '1rem'
                }}>
                  <div style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#6B6760',
                    marginBottom: '0.5rem'
                  }}>Cost of Leak:</div>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.875rem',
                    fontWeight: 300,
                    lineHeight: 1.5,
                    color: '#6B6760',
                    margin: 0
                  }}>
                    {step.cost}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVATION STAGE */}
      <section style={{
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 4vw, 4rem)',
        background: '#1C1A17',
        borderBottom: '1px solid #2e2b26'
      }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ marginBottom: '4rem' }}>
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#6B6760',
              display: 'block',
              marginBottom: '1rem'
            }}>Steps 4–6</span>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)',
              fontWeight: 300,
              lineHeight: 1.15,
              color: '#F0EDE6',
              margin: 0,
              marginBottom: '1rem'
            }}>
              <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Activation</em>
            </h2>
            <p style={{
              fontSize: '1rem',
              fontWeight: 300,
              lineHeight: 1.7,
              color: '#6B6760',
              margin: 0
            }}>
              {stageInfo.ACTIVATION.description}
            </p>
          </div>

          <div className="scorecard-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem'
          }}>
            {steps.slice(3, 6).map((step, i) => (
              <div key={i} style={{
                background: '#2a2520',
                padding: '2rem',
                border: '1px solid #2e2b26',
                borderRadius: '2px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.75rem',
                  marginBottom: '1.5rem'
                }}>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '2rem',
                    fontWeight: 300,
                    color: '#B8924A'
                  }}>#{step.number}</span>
                  <div>
                    <div style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#6B6760',
                      marginBottom: '0.25rem'
                    }}>{step.title}</div>
                    <div style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.6875rem',
                      fontWeight: 400,
                      color: '#B8924A'
                    }}>{step.percentage}</div>
                  </div>
                </div>

                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9375rem',
                  fontWeight: 300,
                  lineHeight: 1.6,
                  color: '#F0EDE6',
                  margin: 0,
                  marginBottom: '1rem'
                }}>
                  {step.question}
                </p>

                <div style={{
                  borderTop: '1px solid #2e2b26',
                  paddingTop: '1rem'
                }}>
                  <div style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#6B6760',
                    marginBottom: '0.5rem'
                  }}>Cost of Leak:</div>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.875rem',
                    fontWeight: 300,
                    lineHeight: 1.5,
                    color: '#6B6760',
                    margin: 0
                  }}>
                    {step.cost}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMPLIFICATION STAGE */}
      <section style={{
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 4vw, 4rem)',
        background: '#F0EDE6',
        borderBottom: '1px solid #D4CFC6'
      }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ marginBottom: '4rem' }}>
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#6B6760',
              display: 'block',
              marginBottom: '1rem'
            }}>Steps 7–9</span>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)',
              fontWeight: 300,
              lineHeight: 1.15,
              color: '#1C1A17',
              margin: 0,
              marginBottom: '1rem'
            }}>
              <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Amplification</em>
            </h2>
            <p style={{
              fontSize: '1rem',
              fontWeight: 300,
              lineHeight: 1.7,
              color: '#6B6760',
              margin: 0
            }}>
              {stageInfo.AMPLIFICATION.description}
            </p>
          </div>

          <div className="scorecard-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem'
          }}>
            {steps.slice(6, 9).map((step, i) => (
              <div key={i} style={{
                background: '#E8E4DB',
                padding: '2rem',
                border: '1px solid #D4CFC6',
                borderRadius: '2px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.75rem',
                  marginBottom: '1.5rem'
                }}>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '2rem',
                    fontWeight: 300,
                    color: '#B8924A'
                  }}>#{step.number}</span>
                  <div>
                    <div style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#6B6760',
                      marginBottom: '0.25rem'
                    }}>{step.title}</div>
                    <div style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.6875rem',
                      fontWeight: 400,
                      color: '#B8924A'
                    }}>{step.percentage}</div>
                  </div>
                </div>

                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9375rem',
                  fontWeight: 300,
                  lineHeight: 1.6,
                  color: '#1C1A17',
                  margin: 0,
                  marginBottom: '1rem'
                }}>
                  {step.question}
                </p>

                <div style={{
                  borderTop: '1px solid #D4CFC6',
                  paddingTop: '1rem'
                }}>
                  <div style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#6B6760',
                    marginBottom: '0.5rem'
                  }}>Cost of Leak:</div>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.875rem',
                    fontWeight: 300,
                    lineHeight: 1.5,
                    color: '#6B6760',
                    margin: 0
                  }}>
                    {step.cost}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
            margin: 0,
            marginBottom: '1.5rem'
          }}>
            Where Is Your Business <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Leaking?</em>
          </h2>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.0625rem',
            fontWeight: 300,
            lineHeight: 1.8,
            color: '#F0EDE6',
            margin: 0,
            marginBottom: '2rem',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Identify which steps are costing you the most revenue, and let's build a plan to fix them.
          </p>

          <Link href="/contact" style={{
            display: 'inline-block',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.875rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#1C1A17',
            background: '#B8924A',
            padding: '0.875rem 2rem',
            textDecoration: 'none',
            transition: 'all 0.3s ease'
          }} onMouseEnter={(e) => {
            (e.target as HTMLElement).style.background = '#9a7a3e'
          }} onMouseLeave={(e) => {
            (e.target as HTMLElement).style.background = '#B8924A'
          }}>
            Get Your Personal Audit
          </Link>
        </div>
      </section>

      <IntakeForm />
      <Footer />
    </>
  )
}
