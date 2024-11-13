'use client'

import { useState } from 'react'
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
  shaderId?: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    type: 'image',
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B4C40204-B73A-4678-94B2-5952594A8A03.JPG-njuMIcIrLorMDjo9Y7yCuZHc0e6tE0.jpeg",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B4C40204-B73A-4678-94B2-5952594A8A03.JPG-njuMIcIrLorMDjo9Y7yCuZHc0e6tE0.jpeg",
    alt: "Minimalist architectural photograph of a cube in fog",
    title: "Cube in Fog",
    category: "Architecture"
  },
  {
    id: '2',
    type: 'image',
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SEQ_PillarFogFar_0000_Ultra.jpg-mqiy25UYGxyIAHifDIgaxImM2Hqkr9.jpeg",
    thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SEQ_PillarFogFar_0000_Ultra.jpg-mqiy25UYGxyIAHifDIgaxImM2Hqkr9.jpeg",
    alt: "3D render of mountains with figure on cube",
    title: "Mountain Cube",
    category: "3D Render"
  },
  {
    id: '3',
    type: 'video',
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FOggyroom-tQB3JCBUNhVqaMZvyx9urHF7YiVCc1.mov",
    thumbnail: "/placeholder.svg?height=400&width=400",
    alt: "Foggy room in a brutalist building",
    title: "Foggy Room",
    category: "Video Art"
  },
  {
    id: '4',
    type: 'video',
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LVL_PillarFog_(2)-Fud0RRIPwLckFoyjnkLDXZ64sxP4FI.mp4",
    thumbnail: "/placeholder.svg?height=400&width=400",
    alt: "Pillar in fog",
    title: "Pillar Fog",
    category: "Video Art"
  },
  {
    id: '5',
    type: 'shader',
    src: "https://shaderpark.com/embed/-O9oklw-mfI2Rvnw3YzL",
    thumbnail: "/placeholder.svg?height=400&width=400",
    alt: "Abstract shader art",
    title: "Shader 1",
    category: "Shader Art",
    shaderId: "-O9oklw-mfI2Rvnw3YzL"
  },
  {
    id: '6',
    type: 'shader',
    src: "https://shaderpark.com/embed/-O9lgV0A2KUUj1BUED0u",
    thumbnail: "/placeholder.svg?height=400&width=400",
    alt: "Abstract shader art",
    title: "Shader 2",
    category: "Shader Art",
    shaderId: "-O9lgV0A2KUUj1BUED0u"
  }
]

export default function Component() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [activeTab, setActiveTab] = useState('all')

  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.type === activeTab)

  const openLightbox = (item: GalleryItem) => {
    setSelectedItem(item)
    document.body.style.overflow = 'hidden'
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
  }

  return (
    <section className="py-12 px-4 bg-[#0A0A0A]">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2">Gallery</h1>
        <p className="text-muted-foreground text-center mb-8">Explore my work across different mediums</p>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full grid grid-cols-4 mb-8 bg-[#111111] p-1 rounded-lg">
            <TabsTrigger value="all" className="rounded data-[state=active]:bg-[#1A1A1A]">All</TabsTrigger>
            <TabsTrigger value="image" className="rounded data-[state=active]:bg-[#1A1A1A]">Images</TabsTrigger>
            <TabsTrigger value="video" className="rounded data-[state=active]:bg-[#1A1A1A]">Videos</TabsTrigger>
            <TabsTrigger value="shader" className="rounded data-[state=active]:bg-[#1A1A1A]">Shaders</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {filteredItems.map((item) => (
                <Card 
                  key={item.id} 
                  className="bg-[#111111] border-0 overflow-hidden cursor-pointer group"
                  onClick={() => openLightbox(item)}
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-square">
                      <Image
                        src={item.thumbnail}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {item.type === 'video' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Play className="w-12 h-12 text-white opacity-70" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="text-center text-white p-4">
                          <h3 className="text-xl font-bold">{item.title}</h3>
                          <p className="text-sm mt-2">{item.category}</p>
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
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 text-white hover:bg-white/20"
              onClick={() => navigateItem('prev')}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <div className="relative w-full h-full max-w-7xl max-h-[90vh] mx-4">
              {selectedItem.type === 'video' ? (
                <video 
                  src={selectedItem.src}
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                />
              ) : selectedItem.type === 'shader' ? (
                <iframe 
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
                <p className="text-sm mt-1">{selectedItem.category}</p>
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 text-white hover:bg-white/20"
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