import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { 
  PlayCircle, 
  DollarSign, 
  Zap, 
  Target, 
  Users, 
  TrendingUp, 
  Lightbulb,
  Rocket,
  Star,
  CheckCircle,
  ArrowRight,
  Bot,
  Video,
  Image,
  PenTool,
  Palette
} from 'lucide-react'
import sampleCharacter from './assets/sample_cartoon_character.png'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('overview')

  const monetizationStrategies = [
    {
      title: "AI-Powered Content Creation",
      description: "Create high-volume, niche-specific video content for YouTube, TikTok, and Instagram using AI for scripts, visuals, and narration.",
      potential: "$20,000-$35,000/month",
      icon: <Video className="w-6 h-6" />,
      advantages: ["Faceless channels", "Automated editing", "Scalable production"]
    },
    {
      title: "AI-Generated Digital Products",
      description: "Create and sell AI-generated stock footage, music, sound effects, 3D models, or animated loops.",
      potential: "$5,000-$15,000/month",
      icon: <Image className="w-6 h-6" />,
      advantages: ["Passive income", "Multiple platforms", "High margins"]
    },
    {
      title: "AI Influencer Management",
      description: "Create and manage virtual AI influencers for brands or personal projects with realistic AI models.",
      potential: "$10,000-$50,000/month",
      icon: <Users className="w-6 h-6" />,
      advantages: ["Brand partnerships", "Viral potential", "24/7 content"]
    },
    {
      title: "AI Consulting & Training",
      description: "Offer consulting services or create online courses teaching AI integration in filmmaking.",
      potential: "$8,000-$25,000/month",
      icon: <Lightbulb className="w-6 h-6" />,
      advantages: ["High value", "Recurring revenue", "Authority building"]
    }
  ]

  const aiTools = [
    {
      category: "Video Generation",
      tools: ["Runway ML", "Google Veo", "Synthesia", "Kling AI", "Pika"],
      description: "Create stunning videos from text prompts or existing media"
    },
    {
      category: "Image Generation", 
      tools: ["Midjourney", "Adobe Firefly", "Leonardo AI", "DALL-E"],
      description: "Generate concept art, characters, and visual assets"
    },
    {
      category: "Animation Tools",
      tools: ["Animaker", "Krikey.ai", "DeepMotion", "Cascadeur"],
      description: "Create animated content and character movements"
    },
    {
      category: "Writing & Scripts",
      tools: ["ChatGPT", "Claude.ai", "Copy.ai", "Jasper.ai"],
      description: "Generate scripts, marketing copy, and content ideas"
    }
  ]

  const implementationPhases = [
    {
      phase: "Foundation (Weeks 1-4)",
      tasks: [
        "Learn AI fundamentals and explore tools",
        "Select your content niche and strategy",
        "Set up basic workflow with chosen AI tools",
        "Create first test content pieces"
      ]
    },
    {
      phase: "Production (Months 2-6)",
      tasks: [
        "Produce content consistently",
        "Build audience and gather feedback",
        "Experiment with AI capabilities",
        "Set up basic monetization"
      ]
    },
    {
      phase: "Optimization (Months 7-12+)",
      tasks: [
        "Analyze performance and optimize",
        "Implement advanced monetization",
        "Scale operations and automate",
        "Diversify revenue streams"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Bot className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">AI Filmmaker Strategy</h1>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              $10K+ Monthly Goal
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Generate <span className="text-blue-600">$10,000+</span> Monthly
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A comprehensive strategy for filmmakers to leverage AI in content creation and achieve financial independence through innovative monetization methods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Rocket className="w-5 h-5 mr-2" />
              Start Your Journey
            </Button>
            <Button size="lg" variant="outline">
              <PlayCircle className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="strategies">Strategies</TabsTrigger>
            <TabsTrigger value="tools">AI Tools</TabsTrigger>
            <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
            <TabsTrigger value="examples">Examples</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="w-6 h-6 mr-2 text-blue-600" />
                    The Opportunity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    AI is revolutionizing content creation, enabling filmmakers to produce high-quality content at unprecedented speed and scale. Success stories show creators earning $20,000-$60,000 monthly using AI tools.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm">Reduce production time by 80%</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm">Lower costs significantly</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm">Scale content production</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-6 h-6 mr-2 text-green-600" />
                    Success Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Matt Par (YouTuber)</span>
                      <Badge variant="secondary">$20K-$35K/month</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Chase Reiner (Affiliate)</span>
                      <Badge variant="secondary">$50K-$60K/month</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Isabella Kotsias (Influencer)</span>
                      <Badge variant="secondary">$100K/month</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="strategies" className="space-y-6">
            <div className="grid gap-6">
              {monetizationStrategies.map((strategy, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          {strategy.icon}
                        </div>
                        <div>
                          <CardTitle className="text-xl">{strategy.title}</CardTitle>
                          <Badge variant="outline" className="mt-1">
                            {strategy.potential}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{strategy.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {strategy.advantages.map((advantage, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {advantage}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tools" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {aiTools.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      {category.category === "Video Generation" && <Video className="w-5 h-5 mr-2" />}
                      {category.category === "Image Generation" && <Image className="w-5 h-5 mr-2" />}
                      {category.category === "Animation Tools" && <Palette className="w-5 h-5 mr-2" />}
                      {category.category === "Writing & Scripts" && <PenTool className="w-5 h-5 mr-2" />}
                      {category.category}
                    </CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.tools.map((tool, i) => (
                        <Badge key={i} variant="outline">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="roadmap" className="space-y-6">
            <div className="space-y-6">
              {implementationPhases.map((phase, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        {index + 1}
                      </div>
                      {phase.phase}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3">
                      {phase.tasks.map((task, i) => (
                        <div key={i} className="flex items-center">
                          <ArrowRight className="w-4 h-4 text-blue-600 mr-3" />
                          <span className="text-gray-700">{task}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="examples" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Sample AI Character: "AI-Buddy"</CardTitle>
                  <CardDescription>
                    A friendly cartoon character designed for educational content
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <img 
                      src={sampleCharacter} 
                      alt="AI-Buddy Sample Character" 
                      className="w-48 h-48 mx-auto rounded-lg shadow-md"
                    />
                  </div>
                  <p className="text-gray-600 text-sm">
                    This character was generated using AI and can be animated for educational videos about AI monetization strategies.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Content Example</CardTitle>
                  <CardDescription>
                    "The AI Creator's Journey: From Idea to Income"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-2" />
                      <span className="text-sm">2-3 minute animated video</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-2" />
                      <span className="text-sm">AI-generated visuals and narration</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-2" />
                      <span className="text-sm">Optimized for YouTube/TikTok</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-2" />
                      <span className="text-sm">Multiple monetization opportunities</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 AI Filmmaker Monetization Strategy. Created by Manus AI.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

