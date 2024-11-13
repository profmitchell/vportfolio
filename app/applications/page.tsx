import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code2, FileCode, Film, AudioWaveformIcon } from 'lucide-react'

export default function ApplicationsPage() {
  const apps = [
    {
      title: "Shader Park Builder",
      description: "Library based code generator for Shader Park syntax",
      icon: <Code2 className="w-6 h-6 text-white" />,
      href: "https://shaderparkcomposer.tiiny.site",
      isLive: true
    },
    {
      title: "JiffStudio",
      description: "Video to GIF maker, with filesize in mind",
      icon: <Film className="w-6 h-6 text-white" />,
      href: "#",
      isLive: false
    },
    {
      title: "Project Scanner",
      description: "Scan and export codebases into AI-friendly text formats",
      icon: <FileCode className="w-6 h-6 text-white" />,
      href: "#",
      isLive: false
    },
    {
      title: "AudioTo3dScene",
      description: "macOS app for 3D audio visualization using SwiftUI and SceneKit",
      icon: <AudioWaveformIcon className="w-6 h-6 text-white" />,
      href: "https://github.com/profmitchell/AudioTo3DScene",
      isLive: true
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-2">Applications</h1>
          <p className="text-gray-400 text-center mb-12">
            Explore my collection of creative tools and applications
          </p>
          <div className="grid gap-4">
            {apps.map((app) => (
              <div
                key={app.title}
                className="bg-[#111111] border border-white/10 rounded-lg p-6"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-black/50 rounded-lg">
                    {app.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">{app.title}</h3>
                    <p className="text-gray-400 text-sm">{app.description}</p>
                  </div>
                </div>
                <Button
                  className={`w-full ${app.isLive ? 'bg-white text-black hover:bg-gray-200' : 'bg-[#111111] border border-white/10 hover:bg-white/10'}`}
                  asChild
                  disabled={!app.isLive}
                >
                  <Link href={app.href}>
                    {app.isLive ? "Launch App" : "Coming Soon"}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
