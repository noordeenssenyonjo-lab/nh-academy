Updated: Added on-demand TTS API and UI.

- New API: POST /api/tts accepts { text, lang } and returns base64 audio when Google TTS is configured, otherwise responds with { fallback: true } so the client uses the browser SpeechSynthesis API.
- New component: components/AudioPlayer.tsx — Play/Pause/Download controls for lesson audio. Uses server-side TTS when available and falls back to browser TTS.
- Course pages now include the audio player for lesson descriptions.
- Added TTS_PROVIDER and GOOGLE_TTS_API_KEY placeholders to .env.example.

Next steps:
- If you want Google TTS, add GOOGLE_TTS_API_KEY to .env.local or configure server env variables in your host.
- Consider caching generated audio in cloud storage for repeated playback and cost savings.
