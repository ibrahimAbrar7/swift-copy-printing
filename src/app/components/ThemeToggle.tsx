'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isLight = theme === 'light'

  return (
    <button
      aria-label="Toggle Theme"
      onClick={() => setTheme(isLight ? 'dark' : 'light')}
      className="fixed top-71 lg:top-52 right-7 p-3 rounded-full shadow-lg z-50
                 bg-white dark:bg-gray-800
                 hover:bg-gray-100 dark:hover:bg-gray-700
                 border border-gray-400 dark:border-gray-400
                 transition-colors duration-300 ease-in-out"
    >
      {isLight ? (
        <MdDarkMode className="w-6 h-6 text-blue-500" />
      ) : (
        <MdLightMode className="w-6 h-6 text-yellow-400" />
      )}
    </button>
  )
}
