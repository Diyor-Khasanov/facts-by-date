'use client'

import { useState } from 'react'
import { CalendarDays, ChevronRight, Sparkles, Globe2 } from 'lucide-react'
import DateFactsResult from '@/components/DateFactsResult'

export default function Home() {
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const handleSubmit = () => {
    if (!day || !month) return
    setSubmitted(false)
    // Mayin o'tish effekti uchun qisqa kechikish
    setTimeout(() => setSubmitted(true), 150)
  }

  const handleReset = () => {
    setSubmitted(false)
    setDay('')
    setMonth('')
  }

  return (
    <main className='min-h-screen bg-[#050505] text-slate-200 flex flex-col items-center justify-center px-6 py-20 font-sans selection:bg-emerald-500/30 selection:text-emerald-300'>
      <div className='fixed inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-emerald-900/10 blur-[120px] rounded-full' />
        <div className='absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-slate-900/20 blur-[120px] rounded-full' />
      </div>

      {!submitted && (
        <div className='relative z-10 w-full max-w-xl animate-in fade-in slide-in-from-bottom-6 duration-1000'>
          <div className='text-center mb-12'>
            <h1 className='text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-[0.9]'>
              Every date has <br />
              <span className='text-emerald-500 italic font-serif font-normal'>a legacy.</span>
            </h1>
            <p className='text-slate-500 text-lg md:text-xl max-w-md mx-auto font-light leading-relaxed tracking-tight'>
              Discover the historical records and pivotal events hidden within the folds of time.
            </p>
          </div>

          <div className='w-full max-w-[420px] mx-auto'>
            <div className='bg-[#0A0A0A]/80 border border-emerald-900/20 backdrop-blur-xl rounded-[40px] p-8 md:p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)]'>
              <div className='space-y-8'>
                <div className='grid grid-cols-12 gap-5'>
                  <div className='col-span-4 space-y-2.5'>
                    <label className='text-[10px] font-black text-emerald-500/60 uppercase tracking-[0.2em] ml-2'>
                      Day
                    </label>
                    <input
                      type='number'
                      min={1}
                      max={31}
                      value={day}
                      onChange={(e) => setDay(e.target.value)}
                      placeholder='01'
                      className='w-full bg-emerald-950/10 border border-emerald-900/30 text-white text-2xl font-semibold text-center py-4 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-slate-800'
                    />
                  </div>

                  <div className='col-span-8 space-y-2.5'>
                    <label className='text-[10px] font-black text-emerald-500/60 uppercase tracking-[0.2em] ml-2'>
                      Month
                    </label>
                    <div className='relative'>
                      <select
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                        className='w-full bg-emerald-950/10 border border-emerald-900/30 text-white text-base py-[1.1rem] px-6 rounded-[20px] focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all appearance-none cursor-pointer'
                      >
                        <option value='' disabled>
                          Select Month
                        </option>
                        {months.map((m, i) => (
                          <option
                            key={m}
                            value={String(i + 1).padStart(2, '0')}
                            className='bg-[#0A0A0A] text-slate-300'
                          >
                            {m}
                          </option>
                        ))}
                      </select>
                      <div className='absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-emerald-600/50'>
                        <CalendarDays size={18} />
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={!day || !month}
                  className='w-full bg-emerald-500 text-[#050505] font-black h-16 rounded-[22px] hover:bg-emerald-400 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)] active:scale-[0.97] transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-10 disabled:grayscale disabled:cursor-not-allowed'
                >
                  <span className='uppercase tracking-[0.15em] text-[11px]'>Reveal Archive</span>
                  <ChevronRight
                    size={16}
                    className='group-hover:translate-x-1 transition-transform'
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {submitted && (
        <div className='relative z-10 w-full max-w-3xl animate-in fade-in zoom-in-95 duration-500'>
          <DateFactsResult
            day={day}
            month={month}
            monthName={months[parseInt(month) - 1]}
            onReset={handleReset}
          />
        </div>
      )}
    </main>
  )
}
