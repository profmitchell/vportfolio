import Link from 'next/link'

export function Navigation() {
  const links = [
    {
      href: '/',
      label: 'Home'
    },
    {
      href: '/music',
      label: 'Music'
    },
    {
      href: '/applications',
      label: 'Applications'
    },
    {
      href: '/resources',
      label: 'Resources'
    },
    {
      href: '/gallery',
      label: 'Gallery'
    },
    {
      href: '/demo-reel',
      label: 'Demo Reel'
    },
    {
      href: '/about',
      label: 'About'
    },
    {
      href: '/contact',
      label: 'Contact'
    }
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-black border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="font-bold text-lg">
            MITCHELL COHEN
          </Link>
          <div className="hidden md:flex space-x-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white hover:text-gray-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
} 