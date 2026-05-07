'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <span className="text-primary font-bold text-lg">▶</span>
            </div>
            <span className="font-bold text-xl text-foreground">短剧平台</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground/80 hover:text-foreground transition-colors">
              首页
            </Link>
            <Link href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
              功能
            </Link>
            <Link href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
              关于
            </Link>
            <Link href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">
              联系我们
            </Link>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2">
            <Link href="/" className="block px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-secondary rounded-lg transition-colors">
              首页
            </Link>
            <Link href="#features" className="block px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-secondary rounded-lg transition-colors">
              功能
            </Link>
            <Link href="#about" className="block px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-secondary rounded-lg transition-colors">
              关于
            </Link>
            <Link href="#contact" className="block px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-secondary rounded-lg transition-colors">
              联系我们
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
