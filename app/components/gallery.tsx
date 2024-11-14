'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react'

interface GalleryItem {
  id: string;
  type: 'image' | 'video' | 'shader';
  src: string;
  thumbnail: string;
  alt: string;
  title: string;
  category: string;
  videoId?: string;
  shaderId?: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    type: 'image',
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-1731018672697-ce4be5b8a5c7%20copy-M34NXDqbss3haNFjPS9ML2f1ZzUaCe.jpeg",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-1731018672697-ce4be5b8a5c7%20copy-M34NXDqbss3haNFjPS9ML2f1ZzUaCe.jpeg",
    alt: "Person walking in a foggy landscape",
    title: "Foggy Journey",
    category: "Photography"
  },
  {
    id: '2',
    type: 'image',
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-1731017794075-df88e8141beb%202-gZbuGJKU8lAR6bXQ21LdBsvuoK409F.jpeg",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-1731017794075-df88e8141beb%202-gZbuGJKU8lAR6bXQ21LdBsvuoK409F.jpeg",
    alt: "Silhouette of a person in a misty environment",
    title: "Misty Silhouette",
    category: "Photography"
  },
  {
    id: '3',
    type: 'image',
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-1731018682433-674d8bab6f18-FeYdGFODULdx1s2xXZXSdfsS6w8zjA.jpeg",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-1731018682433-674d8bab6f18-FeYdGFODULdx1s2xXZXSdfsS6w8zjA.jpeg",
    alt: "Person standing in front of geometric shapes",
    title: "Geometric Encounter",
    category: "Digital Art"
  },
  {
    id: '4',
    type: 'image',
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-1731018674088-aff350977d03%202-MVIM9GBEG11YEyhy06cT5kwLDfvnQM.jpeg",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-1731018674088-aff350977d03%202-MVIM9GBEG11YEyhy06cT5kwLDfvnQM.jpeg",
    alt: "Abstract geometric shapes in a dark environment",
    title: "Geometric Abstraction",
    category: "Digital Art"
  },
  {
    id: '5',
    type: 'video',
    src: "https://www.youtube.com/embed/fWZnUzkPM6w",
    thumbnail: "https://img.youtube.com/vi/fWZnUzkPM6w/0.jpg",
    alt: "Walk",
    title: "Walk",
    category: "Video Art",
    videoId: "fWZnUzkPM6w"
  },
  {
    id: '6',
    type: 'video',
    src: "https://www.youtube.com/embed/lunHW1b4wds",
    thumbnail: "https://img.youtube.com/vi/lunHW1b4wds/0.jpg",
    alt: "All Alone (Vertical)",
    title: "All Alone (Vertical)",
    category: "Video Art",
    videoId: "lunHW1b4wds"
  },
  {
    id: '7',
    type: 'video',
    src: "https://www.youtube.com/embed/Ktyvv3P2fsc",
    thumbnail: "https://img.youtube.com/vi/Ktyvv3P2fsc/0.jpg",
    alt: "Particle System",
    title: "Particle System",
    category: "Video Art",
    videoId: "Ktyvv3P2fsc"
  },
  {
    id: '8',
    type: 'video',
    src: "https://www.youtube.com/embed/nCVaUMuXq_o",
    thumbnail: "https://img.youtube.com/vi/nCVaUMuXq_o/0.jpg",
    alt: "Brutalist Tunnel",
    title: "Brutalist Tunnel",
    category: "Video Art",
    videoId: "nCVaUMuXq_o"
  },
  {
    id: '9',
    type: 'video',
    src: "https://www.youtube.com/embed/HRXSiahwpWI",
    thumbnail: "https://img.youtube.com/vi/HRXSiahwpWI/0.jpg",
    alt: "Purple Block",
    title: "Purple Block",
    category: "Video Art",
    videoId: "HRXSiahwpWI"
  },
  {
    id: '10',
    type: 'video',
    src: "https://www.youtube.com/embed/R2P-vxgBMtk",
    thumbnail: "https://img.youtube.com/vi/R2P-vxgBMtk/0.jpg",
    alt: "Descent",
    title: "Descent",
    category: "Video Art",
    videoId: "R2P-vxgBMtk"
  },
  {
    id: '11',
    type: 'video',
    src: "https://www.youtube.com/embed/OtEcKycbIUI",
    thumbnail: "https://img.youtube.com/vi/OtEcKycbIUI/0.jpg",
    alt: "Process 360",
    title: "Process 360",
    category: "Video Art",
    videoId: "OtEcKycbIUI"
  },
  {
    id: '12',
    type: 'video',
    src: "https://www.youtube.com/embed/0Skbeg1-fVU",
    thumbnail: "https://img.youtube.com/vi/0Skbeg1-fVU/0.jpg",
    alt: "Monolith Music Video",
    title: "Monolith Music Video",
    category: "Music Video",
    videoId: "0Skbeg1-fVU"
  },
  {
    id: '13',
    type: 'video',
    src: "https://www.youtube.com/embed/fE4QEv86kPk",
    thumbnail: "https://img.youtube.com/vi/fE4QEv86kPk/0.jpg",
    alt: "Sand 360",
    title: "Sand 360",
    category: "Video Art",
    videoId: "fE4QEv86kPk"
  },
  {
    id: '14',
    type: 'shader',
    src: "https://shaderpark.com/embed/-O9oldSvo2zAbo-H2Ri9",
    thumbnail: "https://shaderpark.com/embed/-O9oldSvo2zAbo-H2Ri9",
    alt: "Abstract shader art",
    title: "Shader 1",
    category: "Shader Art",
    shaderId: "-O9oldSvo2zAbo-H2Ri9"
  }
]

function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [activeTab, setActiveTab] = useState('all')
  const [iframeKey, setIframeKey] = useState(0)

  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.type === activeTab)

  const openLightbox = (item: GalleryItem) => {
    setSelectedItem(item)
    document.body.style.overflow = 'hidden'
    setIframeKey(prevKey => prevKey + 1)
  }

  const closeLightbox = () => {
    setSelectedItem(null)
    document.body.style.overflow = 'unset'
  }

  const navigateItem = (direction: 'prev' | 'next') => {
    if (!selectedItem) return
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id)
    const newIndex = direction === 'prev'
      ? (currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1)
      : (currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0)
    setSelectedItem(filteredItems[newIndex])
    setIframeKey(prevKey => prevKey + 1)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeLightbox()
      } else if (event.key === 'ArrowLeft') {
        navigateItem('prev')
      } else if (event.key === 'ArrowRight') {
        navigateItem('next')
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedItem])

  return (
    <section className="py-12 px-4 bg-[#0A0A0A]">
      <div className="container mx-auto">
        <p className="text-muted-foreground text-center mb-8">Explore my work across different mediums</p>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full grid grid-cols-4 mb-8 bg-[#111111] p-1 rounded-lg">
            <TabsTrigger value="all" className="rounded data-[state=active]:bg-[#1A1A1A]">All</TabsTrigger>
            <TabsTrigger value="image" className="rounded data-[state=active]:bg-[#1A1A1A]">Images</TabsTrigger>
            <TabsTrigger value="video" className="rounded data-[state=active]:bg-[#1A1A1A]">Videos</TabsTrigger>
            <TabsTrigger value="shader" className="rounded data-[state=active]:bg-[#1A1A1A]">Shaders</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {filteredItems.map((item) => (
                <Card 
                  key={item.id} 
                  className="bg-[#111111] border-0 overflow-hidden cursor-pointer group"
                  onClick={() => openLightbox(item)}
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-square">
                      {item.type === 'shader' ? (
                        <iframe
                          src={item.thumbnail}
                          title={item.title}
                          className="w-full h-full"
                          frameBorder="0"
                        />
                      ) : (
                        <Image
                          src={item.thumbnail}
                          alt={item.alt}
                          fill
                          className="object-cover"
                        />
                      )}
                      {item.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Play className="w-12 h-12 text-white opacity-70" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="text-center text-white p-4">
                          <h3 className="text-lg font-bold line-clamp-1">{item.title}</h3>
                          <p className="text-sm mt-2 opacity-80">{item.category}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <div 
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 z-50 text-white hover:bg-white/20"
              onClick={() => navigateItem('prev')}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <div className="relative w-full h-full max-w-7xl max-h-[90vh] mx-4">
              {selectedItem.type === 'video' ? (
                <iframe
                  key={iframeKey}
                  width="100%"
                  height="100%"
                  src={`${selectedItem.src}?autoplay=1`}
                  title={selectedItem.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : selectedItem.type === 'shader' ? (
                <iframe 
                  key={iframeKey}
                  src={selectedItem.src}
                  className="w-full h-full"
                  frameBorder="0"
                  title={selectedItem.title}
                />
              ) : (
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                <h3 className="text-xl font-bold">{selectedItem.title}</h3>
                <p className="text-sm mt-1 opacity-80">{selectedItem.category}</p>
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 z-50 text-white hover:bg-white/20"
              onClick={() => navigateItem('next')}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      )}
    </section>
  )
}

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <h1 className="text-4xl font-bold text-center py-8">My Portfolio</h1>
      <Gallery />
    </main>
  )
}