'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function IntakeForm() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    business_name: '',
    business_type: '',
    industry: '',
    revenue: '',
    employees: '',
    location: '',
    interested_in: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!response.ok) throw new Error('Failed to submit')
      
      setSubmitted(true)
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        business_name: '',
        business_type: '',
        industry: '',
        revenue: '',
        employees: '',
        location: '',
        interested_in: ''
      })
    } catch (err) {
      setError('Something went wrong. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section style={{ background: '#F0EDE6', borderTop: '1px solid #D4CFC6' }}>
      <div style={{
        maxWidth: '1140px',
        margin: '0 auto',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)',
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: '6rem',
        alignItems: 'start'
      }}>

        {/* LEFT */}
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontSize: '0.6875rem',
            fontWeight: 500,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#6B6760',
            marginBottom: '2rem'
          }}>
            <div style={{
              width: '2px',
              height: '1.25rem',
              background: '#B8924A',
              flexShrink: 0
            }}></div>
            Contact
          </div>

          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
            fontWeight: 300,
            lineHeight: 1.1,
            margin: 0,
            marginBottom: '1.5rem'
          }}>
            Let's talk about<br/>your <span style={{ fontStyle: 'italic', color: '#B8924A' }}>business.</span>
          </h2>

          <p style={{
            fontSize: '0.9375rem',
            fontWeight: 300,
            lineHeight: 1.75,
            color: '#6B6760',
            marginBottom: '2.5rem'
          }}>
            Tell us a little about where you are and what you're working on. Brandon reviews every submission personally and follows up within one business day.
          </p>

          <div style={{
            paddingTop: '2rem',
            borderTop: '1px solid #D4CFC6'
          }}>
            <div style={{
              fontSize: '0.625rem',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#6B6760',
              marginBottom: '0.5rem'
            }}>Prefer email directly?</div>
            <a href="mailto:inquiries@aperturehospitality.com" style={{
              fontSize: '0.875rem',
              fontWeight: 300,
              color: '#B8924A',
              textDecoration: 'none'
            }} onMouseEnter={(e) => {
              (e.target as HTMLElement).style.textDecoration = 'underline'
            }} onMouseLeave={(e) => {
              (e.target as HTMLElement).style.textDecoration = 'none'
            }}>
              inquiries@aperturehospitality.com
            </a>
          </div>
        </div>

        {/* RIGHT: FORM */}
        {!submitted ? (
          <form onSubmit={handleSubmit}>

            {/* YOUR INFORMATION */}
            <div style={{
              fontSize: '0.625rem',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#B8924A',
              marginBottom: '1.25rem'
            }}>Your Information</div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
              <div>
                <label style={{
                  fontSize: '0.6875rem',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#6B6760',
                  display: 'block',
                  marginBottom: '0.5rem'
                }}>First Name <span style={{ color: '#B8924A' }}>*</span></label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder="First"
                  required
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    background: '#E8E4DB',
                    border: '1px solid #D4CFC6',
                    color: '#1C1A17',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.9375rem',
                    fontWeight: 300,
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1C1A17'}
                  onBlur={(e) => e.target.style.borderColor = '#D4CFC6'}
                />
              </div>
              <div>
                <label style={{
                  fontSize: '0.6875rem',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#6B6760',
                  display: 'block',
                  marginBottom: '0.5rem'
                }}>Last Name <span style={{ color: '#B8924A' }}>*</span></label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  placeholder="Last"
                  required
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    background: '#E8E4DB',
                    border: '1px solid #D4CFC6',
                    color: '#1C1A17',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.9375rem',
                    fontWeight: 300,
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1C1A17'}
                  onBlur={(e) => e.target.style.borderColor = '#D4CFC6'}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
              <div>
                <label style={{
                  fontSize: '0.6875rem',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#6B6760',
                  display: 'block',
                  marginBottom: '0.5rem'
                }}>Email <span style={{ color: '#B8924A' }}>*</span></label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@yourbusiness.com"
                  required
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    background: '#E8E4DB',
                    border: '1px solid #D4CFC6',
                    color: '#1C1A17',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.9375rem',
                    fontWeight: 300,
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1C1A17'}
                  onBlur={(e) => e.target.style.borderColor = '#D4CFC6'}
                />
              </div>
              <div>
                <label style={{
                  fontSize: '0.6875rem',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#6B6760',
                  display: 'block',
                  marginBottom: '0.5rem'
                }}>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (310) 000-0000"
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    background: '#E8E4DB',
                    border: '1px solid #D4CFC6',
                    color: '#1C1A17',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.9375rem',
                    fontWeight: 300,
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1C1A17'}
                  onBlur={(e) => e.target.style.borderColor = '#D4CFC6'}
                />
              </div>
            </div>

            {/* YOUR BUSINESS */}
            <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid #D4CFC6' }}>
              <div style={{
                fontSize: '0.625rem',
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#B8924A',
                marginBottom: '1.25rem'
              }}>Your Business</div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  fontSize: '0.6875rem',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#6B6760',
                  display: 'block',
                  marginBottom: '0.5rem'
                }}>Business Name <span style={{ color: '#B8924A' }}>*</span></label>
                <input
                  type="text"
                  name="business_name"
                  value={formData.business_name}
                  onChange={handleChange}
                  placeholder="Your company name"
                  required
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    background: '#E8E4DB',
                    border: '1px solid #D4CFC6',
                    color: '#1C1A17',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.9375rem',
                    fontWeight: 300,
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1C1A17'}
                  onBlur={(e) => e.target.style.borderColor = '#D4CFC6'}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{
                    fontSize: '0.6875rem',
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#6B6760',
                    display: 'block',
                    marginBottom: '0.5rem'
                  }}>Business Type <span style={{ color: '#B8924A' }}>*</span></label>
                  <select
                    name="business_type"
                    value={formData.business_type}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      paddingRight: '2.5rem',
                      background: '#E8E4DB url("data:image/svg+xml,%3Csvg width=\'10\' height=\'6\' viewBox=\'0 0 10 6\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 1L5 5L9 1\' stroke=\'%236B6760\' stroke-width=\'1.2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      border: '1px solid #D4CFC6',
                      color: '#1C1A17',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.9375rem',
                      fontWeight: 300,
                      appearance: 'none',
                      cursor: 'pointer',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#1C1A17'}
                    onBlur={(e) => e.target.style.borderColor = '#D4CFC6'}
                  >
                    <option value="">Select one</option>
                    <option value="b2b">B2B</option>
                    <option value="b2c">B2C</option>
                    <option value="b2b-b2c">B2B & B2C</option>
                  </select>
                </div>
                <div>
                  <label style={{
                    fontSize: '0.6875rem',
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#6B6760',
                    display: 'block',
                    marginBottom: '0.5rem'
                  }}>Industry <span style={{ color: '#B8924A' }}>*</span></label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      paddingRight: '2.5rem',
                      background: '#E8E4DB url("data:image/svg+xml,%3Csvg width=\'10\' height=\'6\' viewBox=\'0 0 10 6\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 1L5 5L9 1\' stroke=\'%236B6760\' stroke-width=\'1.2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      border: '1px solid #D4CFC6',
                      color: '#1C1A17',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.9375rem',
                      fontWeight: 300,
                      appearance: 'none',
                      cursor: 'pointer',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#1C1A17'}
                    onBlur={(e) => e.target.style.borderColor = '#D4CFC6'}
                  >
                    <option value="">Select one</option>
                    <option value="travel-hospitality">Travel & Hospitality</option>
                    <option value="wine-spirits">Wine & Spirits</option>
                    <option value="consumer-goods">Consumer Goods</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="hotel">Hotel</option>
                    <option value="small-business">Small Business Operator</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{
                    fontSize: '0.6875rem',
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#6B6760',
                    display: 'block',
                    marginBottom: '0.5rem'
                  }}>Annual Revenue <span style={{ color: '#B8924A' }}>*</span></label>
                  <select
                    name="revenue"
                    value={formData.revenue}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      paddingRight: '2.5rem',
                      background: '#E8E4DB url("data:image/svg+xml,%3Csvg width=\'10\' height=\'6\' viewBox=\'0 0 10 6\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 1L5 5L9 1\' stroke=\'%236B6760\' stroke-width=\'1.2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      border: '1px solid #D4CFC6',
                      color: '#1C1A17',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.9375rem',
                      fontWeight: 300,
                      appearance: 'none',
                      cursor: 'pointer',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#1C1A17'}
                    onBlur={(e) => e.target.style.borderColor = '#D4CFC6'}
                  >
                    <option value="">Select range</option>
                    <option value="under-1m">Under $1M</option>
                    <option value="1m-5m">$1M – $5M</option>
                    <option value="5m-10m">$5M – $10M</option>
                    <option value="10m-plus">$10M+</option>
                  </select>
                </div>
                <div>
                  <label style={{
                    fontSize: '0.6875rem',
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#6B6760',
                    display: 'block',
                    marginBottom: '0.5rem'
                  }}>Number of Employees <span style={{ color: '#B8924A' }}>*</span></label>
                  <select
                    name="employees"
                    value={formData.employees}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      paddingRight: '2.5rem',
                      background: '#E8E4DB url("data:image/svg+xml,%3Csvg width=\'10\' height=\'6\' viewBox=\'0 0 10 6\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 1L5 5L9 1\' stroke=\'%236B6760\' stroke-width=\'1.2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      border: '1px solid #D4CFC6',
                      color: '#1C1A17',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.9375rem',
                      fontWeight: 300,
                      appearance: 'none',
                      cursor: 'pointer',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#1C1A17'}
                    onBlur={(e) => e.target.style.borderColor = '#D4CFC6'}
                  >
                    <option value="">Select range</option>
                    <option value="1-10">1 – 10</option>
                    <option value="10-25">10 – 25</option>
                    <option value="25-50">25 – 50</option>
                    <option value="50-100">50 – 100</option>
                    <option value="100-plus">100+</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{
                    fontSize: '0.6875rem',
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#6B6760',
                    display: 'block',
                    marginBottom: '0.5rem'
                  }}>Business Location <span style={{ color: '#B8924A' }}>*</span></label>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      paddingRight: '2.5rem',
                      background: '#E8E4DB url("data:image/svg+xml,%3Csvg width=\'10\' height=\'6\' viewBox=\'0 0 10 6\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 1L5 5L9 1\' stroke=\'%236B6760\' stroke-width=\'1.2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      border: '1px solid #D4CFC6',
                      color: '#1C1A17',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.9375rem',
                      fontWeight: 300,
                      appearance: 'none',
                      cursor: 'pointer',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#1C1A17'}
                    onBlur={(e) => e.target.style.borderColor = '#D4CFC6'}
                  >
                    <option value="">Select state</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                    <option value="DC">Washington D.C.</option>
                  </select>
                </div>
                <div>
                  <label style={{
                    fontSize: '0.6875rem',
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#6B6760',
                    display: 'block',
                    marginBottom: '0.5rem'
                  }}>Interested In <span style={{ color: '#B8924A' }}>*</span></label>
                  <select
                    name="interested_in"
                    value={formData.interested_in}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      paddingRight: '2.5rem',
                      background: '#E8E4DB url("data:image/svg+xml,%3Csvg width=\'10\' height=\'6\' viewBox=\'0 0 10 6\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 1L5 5L9 1\' stroke=\'%236B6760\' stroke-width=\'1.2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/%3E%3C/svg%3E")',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      border: '1px solid #D4CFC6',
                      color: '#1C1A17',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.9375rem',
                      fontWeight: 300,
                      appearance: 'none',
                      cursor: 'pointer',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#1C1A17'}
                    onBlur={(e) => e.target.style.borderColor = '#D4CFC6'}
                  >
                    <option value="">Select one</option>
                    <option value="ai-employee">AI Employee</option>
                    <option value="digital-marketing">Digital Marketing Solutions</option>
                    <option value="commercial-strategy">Commercial Strategy</option>
                    <option value="marketing-strategy">Marketing Strategy</option>
                    <option value="operations">Operations</option>
                    <option value="forecasting-planning">Forecasting & Planning</option>
                  </select>
                </div>
              </div>
            </div>

            {/* SUBMIT */}
            <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid #D4CFC6' }}>
              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '1rem 2rem',
                  background: loading ? '#999' : '#1C1A17',
                  color: '#F0EDE6',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.6875rem',
                  fontWeight: 500,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  border: 'none',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => {
                  if (!loading) (e.target as HTMLElement).style.background = '#2e2b26'
                }}
                onMouseLeave={(e) => {
                  if (!loading) (e.target as HTMLElement).style.background = '#1C1A17'
                }}
              >
                {loading ? 'Sending...' : 'Submit Inquiry'}
              </button>
              <p style={{
                fontSize: '0.75rem',
                fontWeight: 300,
                color: '#6B6760',
                textAlign: 'center',
                marginTop: '1rem',
                lineHeight: 1.6
              }}>
                No spam. No added to a list. Brandon reads every submission personally.
              </p>
              {error && <p style={{ color: '#d32f2f', marginTop: '1rem', textAlign: 'center' }}>{error}</p>}
            </div>

          </form>
        ) : (
          <div style={{
            padding: '3rem',
            border: '1px solid #D4CFC6',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '2rem',
              fontWeight: 300,
              marginBottom: '1rem'
            }}>
              Thank you.
            </h3>
            <p style={{
              fontSize: '0.9375rem',
              fontWeight: 300,
              color: '#6B6760'
            }}>
              Your inquiry has been received. Brandon will follow up within one business day.
            </p>
          </div>
        )}

      </div>
    </section>
  )
}
