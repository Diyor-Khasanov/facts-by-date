import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const month = searchParams.get('month')
  const day = searchParams.get('day')

  if (!month || !day) {
    return NextResponse.json({ error: 'Missing month or day' }, { status: 400 })
  }

  const apiKey = process.env.API_NINJAS_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'API key not configured' }, { status: 500 })
  }

  const res = await fetch(
    `https://api.api-ninjas.com/v1/historicalevents?month=${month}&day=${day}`,
    { headers: { 'X-Api-Key': apiKey } }
  )

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: res.status })
  }

  const data = await res.json()
  return NextResponse.json(data)
}
