import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, GraduationCap, Laptop, Music, Wrench } from 'lucide-react'
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container px-4 py-12 mx-auto">
        {/* Header Section */}
        <div className="space-y-4 text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About Me</h1>
          <p className="text-gray-300 max-w-[700px] mx-auto">
            Electronic Sound Designer, Producer and Professor with over 12 years of experience in music and sound production
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="bg-white/10 text-white hover:bg-white/20" asChild>
              <Link href="mailto:mrcohen@berklee.edu">
                Contact Me
              </Link>
            </Button>
            <Button className="bg-white text-black hover:bg-white/90" asChild>
              <Link href="https://www.linkedin.com/in/mitchellcohenhp/">
                LinkedIn
              </Link>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="experience" className="space-y-12">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-4">
            <TabsTrigger value="experience" className="space-x-2">
              <Briefcase className="h-4 w-4" />
              <span>Experience</span>
            </TabsTrigger>
            <TabsTrigger value="education" className="space-x-2">
              <GraduationCap className="h-4 w-4" />
              <span>Education</span>
            </TabsTrigger>
            <TabsTrigger value="skills" className="space-x-2">
              <Laptop className="h-4 w-4" />
              <span>Skills</span>
            </TabsTrigger>
            <TabsTrigger value="tools" className="space-x-2">
              <Wrench className="h-4 w-4" />
              <span>Tools</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="experience" className="space-y-6">
            <Card className="bg-[#1A1A1A] border-white/10 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Music className="h-5 w-5" />
                  Assistant Professor at Berklee College of Music
                </CardTitle>
                <p className="text-sm text-muted-foreground">2021 - Present</p>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>Teaching classes in Logic Pro X, Synth Programming, and Music Technology</p>
                <p>Fostering inclusive, collaborative education of over 130 students per semester</p>
              </CardContent>
            </Card>
            <Card className="bg-[#1A1A1A] border-white/10 text-white">
              <CardHeader>
                <CardTitle>Freelance Sound Designer & Producer</CardTitle>
                <p className="text-sm text-muted-foreground">2014 - Present</p>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>Developed VST plugins and digital musical instruments</p>
                <p>Created engaging audio content for various media projects</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="education">
            <Card className="bg-[#1A1A1A] border-white/10 text-white">
              <CardHeader>
                <CardTitle>Berklee College of Music</CardTitle>
                <p className="text-sm text-muted-foreground">Bachelor of Music in Electronic Production and Design</p>
              </CardHeader>
              <CardContent>
                <p>GPA: 3.6</p>
                <p>Graduated: 2016</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills" className="grid gap-8 md:grid-cols-2">
            <Card className="bg-[#1A1A1A] border-white/10 text-white">
              <CardHeader>
                <CardTitle>Audio Production</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge className="bg-white/20 hover:bg-white/30 text-white">Sound Design</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white">Music Production</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white">Mixing</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white">Mastering</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white">Recording</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white">Music Theory</Badge>
              </CardContent>
            </Card>
            <Card className="bg-[#1A1A1A] border-white/10 text-white">
              <CardHeader>
                <CardTitle>Development</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge className="bg-white/20 hover:bg-white/30 text-white">VST Development</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white">UI/UX Design</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white">Kontakt Scripting</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white">JavaScript</Badge>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tools" className="grid gap-8 md:grid-cols-2">
            <Card className="bg-[#1A1A1A] border-white/10 text-white">
              <CardHeader>
                <CardTitle>Software</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge className="bg-white/20 hover:bg-white/30 text-white">Logic Pro X</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white">Ableton Live</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white">Unreal Engine 5</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white">Adobe Suite</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white">Native Instruments</Badge>
              </CardContent>
            </Card>
            <Card className="bg-[#1A1A1A] border-white/10 text-white">
              <CardHeader>
                <CardTitle>Hardware</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge className="bg-white/20 hover:bg-white/30 text-white">Nord</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white">APC40</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white">UAD Apollo</Badge>
                <Badge className="bg-white/20 hover:bg-white/30 text-white">Neumann TLM103</Badge>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}