import type { NextApiRequest, NextApiResponse } from 'next'

// POST /api/tts
// Body: { text: string, lang?: 'en'|'ar', voice?: string, speed?: number }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).end('Method Not Allowed')
  }

  const { text, lang = 'en', voice, speed = 1.0 } = req.body || {}
  if (!text || typeof text !== 'string') return res.status(400).json({ error: 'Missing text' })

  const provider = process.env.TTS_PROVIDER || process.env.NEXT_PUBLIC_TTS_PROVIDER || 'google'

  try {
    if (provider === 'google' && process.env.GOOGLE_TTS_API_KEY) {
      // Call Google Cloud Text-to-Speech REST API
      const apiKey = process.env.GOOGLE_TTS_API_KEY
      const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`
      const body = {
        input: { text },
        voice: {
          languageCode: lang === 'ar' ? 'ar-XA' : 'en-US',
          name: voice || (lang === 'ar' ? 'ar-XA-Wavenet-D' : 'en-US-Wavenet-D')
        },
        audioConfig: { audioEncoding: 'MP3', speakingRate: Number(speed) || 1.0 }
      }

      const r = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })

      if (!r.ok) {
        const txt = await r.text()
        console.error('Google TTS error', r.status, txt)
        return res.status(502).json({ error: 'TTS provider error', details: txt })
      }

      const data = await r.json()
      // data.audioContent is base64 encoded audio
      if (!data.audioContent) return res.status(502).json({ error: 'No audio returned from provider' })

      return res.status(200).json({ audioContent: data.audioContent, mime: 'audio/mp3', source: 'google' })
    }

    // If no provider configured or provider unknown, tell client to fallback to browser TTS
    return res.status(200).json({ fallback: true })
  } catch (err: any) {
    console.error('TTS error', err)
    return res.status(500).json({ error: 'Internal TTS error' })
  }
}
