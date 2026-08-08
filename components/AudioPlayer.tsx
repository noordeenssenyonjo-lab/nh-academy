import { useEffect, useRef, useState } from 'react'

type Props = {
  text: string
  lang?: 'en' | 'ar'
}

export default function AudioPlayer({ text, lang = 'en' }: Props) {
  const [loading, setLoading] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.src = ''
        audioRef.current = null
      }
      if (audioUrl) URL.revokeObjectURL(audioUrl)
    }
  }, [audioUrl])

  const play = async () => {
    if (!text) return
    setLoading(true)
    try {
      const r = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, lang })
      })
      const data = await r.json()
      if (data.fallback) {
        // Use browser SpeechSynthesis
        const utter = new SpeechSynthesisUtterance(text)
        utter.lang = lang === 'ar' ? 'ar-SA' : 'en-US'
        utter.onend = () => setPlaying(false)
        window.speechSynthesis.speak(utter)
        setPlaying(true)
        setLoading(false)
        return
      }

      if (data.audioContent) {
        // construct data URL
        const b64 = data.audioContent as string
        const audioDataUrl = `data:${data.mime || 'audio/mp3'};base64,${b64}`
        // create blob to allow download later
        const res = await fetch(audioDataUrl)
        const blob = await res.blob()
        const url = URL.createObjectURL(blob)
        setAudioUrl(url)
        // play
        if (!audioRef.current) audioRef.current = new Audio(url)
        else audioRef.current.src = url
        audioRef.current.onended = () => setPlaying(false)
        await audioRef.current.play()
        setPlaying(true)
      }
    } catch (err) {
      console.error('Play error', err)
      // fallback to browser TTS
      try {
        const utter = new SpeechSynthesisUtterance(text)
        utter.lang = lang === 'ar' ? 'ar-SA' : 'en-US'
        utter.onend = () => setPlaying(false)
        window.speechSynthesis.speak(utter)
        setPlaying(true)
      } catch (e) {
        console.error('SpeechSynthesis failed', e)
      }
    } finally {
      setLoading(false)
    }
  }

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      setPlaying(false)
    }
    if (window.speechSynthesis && window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel()
      setPlaying(false)
    }
  }

  return (
    <div className="mt-4">
      <div className="flex items-center gap-2">
        <button onClick={play} className="px-3 py-2 bg-nhgreen text-white rounded" disabled={loading || playing}>
          {loading ? 'Preparing...' : 'Play'}
        </button>
        <button onClick={pause} className="px-3 py-2 border rounded" disabled={!playing}>
          Pause
        </button>
        {audioUrl && (
          <a href={audioUrl} download="lesson.mp3" className="px-3 py-2 border rounded">Download</a>
        )}
      </div>
      <div className="text-sm text-gray-600 mt-2">{lang === 'ar' ? 'AI voice available in Arabic' : 'AI voice available in English'}</div>
    </div>
  )
}
