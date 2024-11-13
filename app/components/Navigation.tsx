import Link from 'next/link'

export function Navigation() {
  const links = [
    // ... other navigation links
    {
      href: '/applications',
      label: 'Applications'
    }
  ]

  return (
    <nav>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="hover:text-gray-300 transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
} 