'use client'

import { useEffect, useState } from 'react'
import { ArrowLeft, RefreshCcw, Clock, AlertCircle, CalendarDays } from 'lucide-react'

interface Props {
  day: string
  month: string
  monthName: string
  onReset: () => void
}
interface Event {
  year: string
  event: string
}

export default function DateFactsResult({ day, month, monthName, onReset }: Props) {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const ordinal = (n: number) => {
    const s = ['th', 'st', 'nd', 'rd']
    const v = n % 100
    return n + (s[(v - 20) % 10] || s[v] || s[0])
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`/api/facts?month=${parseInt(month)}&day=${parseInt(day)}`)
      if (!res.ok) throw new Error('Archive connection failed')
      const data: Event[] = await res.json()
      setEvents(
        data
          .filter((e) => e.year && e.event)
          .sort((a, b) => parseInt(a.year) - parseInt(b.year))
          .slice(0, 10)
      )
    } catch (err) {
      setError("We couldn't retrieve the records for this date.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='w-full max-w-2xl mx-auto py-4 selection:bg-emerald-500/20 selection:text-emerald-400'>
      <div className='mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700'>
        <div className='flex-1'>
          <button
            onClick={onReset}
            className='flex items-center gap-2 text-slate-500 hover:text-emerald-400 mb-6 transition-all group'
          >
            <ArrowLeft size={16} className='group-hover:-translate-x-1 transition-transform' />
            <span className='text-[10px] font-bold uppercase tracking-[0.2em]'>
              Back to Chronos
            </span>
          </button>

          <div className='flex items-center gap-4 justify-center md:justify-start'>
            <h2 className='text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none'>
              {monthName}
              <span className='text-emerald-500 font-serif italic ml-3'>
                {ordinal(parseInt(day))}
              </span>
            </h2>
          </div>
        </div>

        <div className='flex flex-col items-center md:items-end gap-2'>
          <div className='hidden md:block h-px w-24 bg-slate-800 mb-2' />
          <span className='text-slate-500 text-[10px] font-mono tracking-widest'>
            REF_ID: {month}
            {day}_LOG
          </span>
        </div>
      </div>

      {loading ? (
        <div className='flex flex-col items-center py-32 space-y-6'>
          <div className='relative'>
            <RefreshCcw size={32} className='text-emerald-500 animate-spin' />
            <div className='absolute inset-0 blur-lg bg-emerald-500/20 animate-pulse' />
          </div>
          <p className='text-emerald-500/60 text-xs font-bold tracking-[0.3em] uppercase'>
            Syncing Temporal Data
          </p>
        </div>
      ) : error ? (
        <div className='bg-red-500/[0.03] border border-red-500/10 rounded-[40px] p-12 text-center backdrop-blur-sm'>
          <AlertCircle size={32} className='mx-auto text-red-500/50 mb-4' />
          <p className='text-slate-400 text-sm mb-8 font-medium'>{error}</p>
          <button
            onClick={fetchEvents}
            className='px-8 py-3 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-red-50 transition-colors'
          >
            Reconnect
          </button>
        </div>
      ) : (
        <div className='space-y-4'>
          {events.map((ev, i) => (
            <div
              key={i}
              className='group relative flex flex-col md:flex-row gap-6 p-8 md:p-10 rounded-[32px] bg-[#0A0A0A] border border-slate-800/40 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)]'
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className='flex items-center gap-3 md:w-24 flex-shrink-0'>
                <div className='h-2 w-2 rounded-full bg-emerald-500/20 group-hover:bg-emerald-500 transition-colors' />
                <span className='text-xl font-black text-white group-hover:text-emerald-500 transition-colors'>
                  {ev.year.startsWith('-') ? `${ev.year.slice(1)} BC` : ev.year}
                </span>
              </div>

              <div className='flex-1 space-y-4'>
                <p className='text-slate-400 text-lg md:text-xl leading-relaxed group-hover:text-emerald-50 transition-colors font-light'>
                  {ev.event}
                </p>
              </div>

              <span className='absolute top-8 right-8 text-[10px] font-mono text-slate-800 group-hover:text-emerald-900/50 transition-colors'>
                0{i + 1}
              </span>
            </div>
          ))}

          <div className='mt-20 flex flex-col items-center gap-8'>
            <div className='h-px w-16 bg-slate-800' />
            <button
              onClick={fetchEvents}
              className='group flex items-center gap-3 px-10 py-5 rounded-full bg-emerald-500 text-black hover:bg-emerald-400 transition-all active:scale-95 shadow-xl shadow-emerald-500/10'
            >
              <RefreshCcw
                size={16}
                className='group-hover:rotate-180 transition-transform duration-700'
              />
              <span className='text-[10px] font-black uppercase tracking-[0.2em]'>
                Refresh History
              </span>
            </button>
            <p className='text-slate-600 text-[10px] tracking-widest uppercase'>End of records</p>
          </div>
        </div>
      )}
    </div>
  )
}
