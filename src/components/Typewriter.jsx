import { useEffect, useState } from "react"

const phrases = ["Connect.", "Chat.", "Get hired."]

export default function Typewriter() {
  const [text, setText] = useState("")
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]
    const timeout = setTimeout(() => {
      if (charIndex < currentPhrase.length) {
        setText((prev) => prev + currentPhrase[charIndex])
        setCharIndex((prev) => prev + 1)
      } else {
        setTimeout(() => {
          setText("")
          setCharIndex(0)
          setPhraseIndex((prev) => (prev + 1) % phrases.length)
        }, 1000)
      }
    }, 100)

    return () => clearTimeout(timeout)
  }, [charIndex, phraseIndex])

  return (
    <p className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-scienceBlue font-bold text-center md:text-justify min-h-[1.5rem] sm:min-h-[2rem] md:min-h-[2.5rem]">
      {text}
      <span className="animate-pulse">|</span>
    </p>
  )
}