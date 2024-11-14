import { ExternalLink, Mail, Music, Github, Linkedin, Instagram, Youtube } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  const links = [
    { href: "https://college.berklee.edu/electronic-production-design/faculty/mitchell-cohen", icon: Music, label: "Berklee Faculty Page" },
    { href: "https://www.linkedin.com/in/mitchellcohenhp", icon: Linkedin, label: "LinkedIn" },
    { href: "https://github.com/profmitchell", icon: Github, label: "GitHub" },
    { href: "https://soundcloud.com/mitchellrcohen", icon: ExternalLink, label: "SoundCloud" },
    { href: "https://www.instagram.com/mitchellrcohen/", icon: Instagram, label: "Instagram" },
    { href: "https://www.youtube.com/@mitchellrcohen", icon: Youtube, label: "YouTube" },
  ]

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Contact</h1>
        <p className="text-gray-400 text-center mb-8">Get in touch or follow my work</p>
        
        <div className="bg-zinc-900 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Email</h2>
          <a href="mailto:mrcohen@alumni.berklee.edu" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
            <span>mrcohen@alumni.berklee.edu</span>
          </a>
        </div>

        <div className="bg-zinc-900 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Links</h2>
          <div className="space-y-4">
            {links.map((link, index) => (
              <Link key={index} href={link.href} className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <link.icon className="w-5 h-5" />
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}