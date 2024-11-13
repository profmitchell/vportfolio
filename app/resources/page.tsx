'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Download, File, Menu, X } from 'lucide-react'

interface Resource {
  id: string
  title: string
  description: string
  tags: string[]
  fileSize: string
  downloads: number
  category: string
  driveLink: string
  relatedResources?: Resource[]
}

const resources: Resource[] = [
  {
    id: '1',
    title: 'Infinite Mellow',
    description: 'A free instrument for Logic Pro X, offering mellow and ambient sounds',
    tags: ['Logic Pro X', 'Ambient'],
    fileSize: '450 MB',
    downloads: 1234,
    category: 'plugins',
    driveLink: 'https://drive.google.com/drive/folders/1h7lQt4OY5KmBLR5XVBGK3oJdz311HwjE',
    relatedResources: [
      {
        id: '2',
        title: 'Badman Bass',
        description: 'A bass instrument tailored for Logic Pro, delivering robust and deep bass tones',
        tags: ['Logic Pro X', 'Bass Music'],
        fileSize: '380 MB',
        downloads: 987,
        category: 'plugins',
        driveLink: 'https://drive.google.com/drive/folders/1h7lQt4OY5KmBLR5XVBGK3oJdz311HwjE'
      },
      {
        id: '4',
        title: 'Nomad Guitar',
        description: 'Custom-made software sampler instrument featuring eclectic guitar sounds',
        tags: ['Guitar', 'Sampler'],
        fileSize: '480 MB',
        downloads: 543,
        category: 'plugins',
        driveLink: 'https://drive.google.com/drive/folders/1h7lQt4OY5KmBLR5XVBGK3oJdz311HwjE'
      }
    ]
  },
  {
    id: '2',
    title: 'Badman Bass',
    description: 'A bass instrument tailored for Logic Pro, delivering robust and deep bass tones',
    tags: ['Logic Pro X', 'Bass Music'],
    fileSize: '380 MB',
    downloads: 987,
    category: 'plugins',
    driveLink: 'https://drive.google.com/drive/folders/1h7lQt4OY5KmBLR5XVBGK3oJdz311HwjE'
  },
  {
    id: '3',
    title: 'Cosmic Drum Loops',
    description: 'A collection of futuristic drum loops for electronic music production',
    tags: ['Drums', 'Electronic'],
    fileSize: '250 MB',
    downloads: 756,
    category: 'samples',
    driveLink: 'https://drive.google.com/drive/folders/1h7lQt4OY5KmBLR5XVBGK3oJdz311HwjE'
  },
  {
    id: '4',
    title: 'Nomad Guitar',
    description: 'Custom-made software sampler instrument featuring eclectic guitar sounds',
    tags: ['Guitar', 'Sampler'],
    fileSize: '480 MB',
    downloads: 543,
    category: 'plugins',
    driveLink: 'https://drive.google.com/drive/folders/1h7lQt4OY5KmBLR5XVBGK3oJdz311HwjE'
  }
]

export default function Component() {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null)
  const [showEmailForm, setShowEmailForm] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitted:', { email, name, resourceId: selectedResource?.id })
    window.open(selectedResource?.driveLink, '_blank')
    setShowEmailForm(false)
    setEmail('')
    setName('')
  }

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

      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Resource Library</h1>
          <p className="text-gray-400">
            Download free plugins, templates, samples, and presets for music production
          </p>
        </div>

        <Tabs defaultValue="plugins" className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-[400px] mx-auto mb-8">
            <TabsTrigger value="plugins">Plugins</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="samples">Samples</TabsTrigger>
            <TabsTrigger value="presets">Presets</TabsTrigger>
          </TabsList>

          {['plugins', 'templates', 'samples', 'presets'].map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid gap-6 md:grid-cols-2">
                {resources
                  .filter((resource) => resource.category === category)
                  .map((resource) => (
                    <Card 
                      key={resource.id} 
                      className="bg-zinc-900 border-zinc-800 cursor-pointer transition-colors hover:bg-zinc-800"
                      onClick={() => setSelectedResource(resource)}
                    >
                      <CardHeader className="flex flex-row items-start gap-4">
                        <File className="w-8 h-8 mt-1" />
                        <div className="space-y-1">
                          <CardTitle className="text-white">{resource.title}</CardTitle>
                          <p className="text-sm text-gray-400">{resource.description}</p>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {resource.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center">
                        <div className="text-sm text-gray-400">
                          {resource.fileSize} • {resource.downloads} downloads
                        </div>
                        <Badge variant="secondary">Free</Badge>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <Dialog open={selectedResource !== null} onOpenChange={(open) => !open && setSelectedResource(null)}>
          <DialogContent className="bg-zinc-900 border-zinc-800 text-white p-0 max-w-2xl">
            {selectedResource && (
              <div className="relative">
                <div className="aspect-video bg-zinc-800 flex items-center justify-center">
                  <File className="w-16 h-16 text-zinc-600" />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{selectedResource.title}</h2>
                  <p className="text-gray-400 mb-4">{selectedResource.description}</p>
                  <div className="text-sm text-gray-400 mb-6">
                    Size: {selectedResource.fileSize}
                  </div>
                  
                  {showEmailForm ? (
                    <form onSubmit={handleDownload} className="space-y-4">
                      <Input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="bg-zinc-800 border-zinc-700"
                      />
                      <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-zinc-800 border-zinc-700"
                      />
                      <Button type="submit" className="w-full">
                        Download Resource
                      </Button>
                    </form>
                  ) : (
                    <Button 
                      className="w-full" 
                      onClick={() => setShowEmailForm(true)}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  )}

                  {selectedResource.relatedResources && (
                    <div className="mt-8">
                      <h3 className="text-lg font-semibold mb-4">Related Resources</h3>
                      <div className="grid gap-4">
                        {selectedResource.relatedResources.map((related) => (
                          <div
                            key={related.id}
                            className="flex items-start gap-4 p-4 rounded-lg bg-zinc-800 cursor-pointer"
                            onClick={() => setSelectedResource(related)}
                          >
                            <File className="w-6 h-6 mt-1" />
                            <div>
                              <h4 className="font-medium mb-1">{related.title}</h4>
                              <p className="text-sm text-gray-400">{related.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}