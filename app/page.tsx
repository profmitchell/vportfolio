'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Menu, X, ArrowRight, Download, Music } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <Link href="/" className="font-bold text-lg">
              MITCHELL COHEN
            </Link>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
            <div className="hidden md:flex space-x-6">
              {["Home", "Music", "Applications", "Resources", "Gallery", "Demo Reel", "About", "Contact"].map(
                (item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-white hover:text-gray-300 transition-colors"
                  >
                    {item}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-white/10">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {["Home", "Music", "Applications", "Resources", "Gallery", "Demo Reel", "About", "Contact"].map(
                  (item) => (
                    <Link
                      key={item}
                      href={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="text-sm text-white hover:text-gray-300 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center justify-center text-center px-4 pt-20">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold">Mitchell Cohen</h1>
          <p className="text-gray-400 text-lg">Music Producer • Developer • Visual Artist</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              className="bg-white text-black hover:bg-gray-200 rounded-full px-6"
              asChild
            >
              <Link href="/work">
                Explore My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="bg-black border border-white hover:bg-white/10 text-white rounded-full px-6"
              asChild
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Music Production */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Music Production</h2>
            <p className="text-gray-400 mb-4">
              Explore my portfolio of original music, collaborations, and sound design work.
            </p>
            <Button
              className="bg-white text-black hover:bg-gray-200 rounded-full"
              asChild
            >
              <Link href="/music">Listen Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Creative Apps */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-10">Creative Applications</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Audio to Keyframes",
                  description: "Convert audio into animation keyframes for visual sync",
                },
                {
                  title: "VST Manager",
                  description: "Organize and manage your VST plugins efficiently",
                },
                {
                  title: "MIDI Generator",
                  description: "AI-powered MIDI pattern generator",
                },
              ].map((app) => (
                <Card
                  key={app.title}
                  className="bg-[#111111] border-white/10 p-6 rounded-lg"
                >
                  <Music className="h-8 w-8 text-white mb-4" />
                  <h3 className="text-lg font-medium mb-2">{app.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{app.description}</p>
                  <Button
                    className="w-full bg-black border border-white/10 hover:bg-white/10 text-white"
                    asChild
                  >
                    <Link href={`/applications/${app.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      Launch Application
                    </Link>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resource Library */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold">Resource Library</h2>
              <p className="text-gray-400">
                Download free plugins, templates, samples, and presets
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "VST Plugins",
                "DAW Templates",
                "Sample Packs",
                "Presets",
              ].map((category) => (
                <Card
                  key={category}
                  className="bg-[#111111] border-white/10 p-4 rounded-lg"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Download className="h-5 w-5" />
                    <h3 className="text-white font-medium">{category}</h3>
                  </div>
                  <Button
                    className="w-full bg-black border border-white/10 hover:bg-white/10 text-white"
                    asChild
                  >
                    <Link href={`/resources/${category.toLowerCase().replace(/\s+/g, "-")}`}>
                      Browse {category}
                    </Link>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Book Lessons */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-[#111111] border-white/10 rounded-lg overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="aspect-square bg-black flex items-center justify-center">
                  <Music className="h-24 w-24 text-white/10" />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Book Lessons</h2>
                  <p className="text-gray-400 mb-6">
                    Learn music production, sound design, and more through personalized instruction.
                  </p>
                  <Button
                    className="bg-white text-black hover:bg-gray-200 rounded-full"
                    asChild
                  >
                    <Link href="/lessons">Schedule Now</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}