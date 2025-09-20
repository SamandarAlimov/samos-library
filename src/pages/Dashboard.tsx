import { useState } from "react";
import { 
  BookOpen, 
  Clock, 
  Star, 
  TrendingUp, 
  Heart, 
  Download, 
  Play,
  Calendar,
  Target,
  Award,
  BarChart3
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { sampleBooks } from "@/data/sampleBooks";

const Dashboard = () => {
  const [currentlyReading] = useState(sampleBooks.slice(0, 3));
  const [recentlyFinished] = useState(sampleBooks.slice(3, 6));
  const [savedBooks] = useState(sampleBooks.slice(6, 8));

  const stats = [
    {
      title: "Books Read",
      value: "127",
      change: "+12 this month",
      icon: BookOpen,
      color: "text-blue-600"
    },
    {
      title: "Reading Time",
      value: "2,450h",
      change: "+45h this month",
      icon: Clock,
      color: "text-green-600"
    },
    {
      title: "Average Rating",
      value: "4.6",
      change: "Given to books",
      icon: Star,
      color: "text-amber-500"
    },
    {
      title: "Reading Streak",
      value: "23 days",
      change: "Current streak",
      icon: TrendingUp,
      color: "text-purple-600"
    }
  ];

  const readingGoals = [
    {
      title: "Books This Year",
      current: 45,
      target: 50,
      percentage: 90
    },
    {
      title: "Reading Hours",
      current: 156,
      target: 200,
      percentage: 78
    }
  ];

  const achievements = [
    { title: "Speed Reader", description: "Read 5 books in a month", earned: true },
    { title: "Night Owl", description: "Read for 100 hours after 10 PM", earned: true },
    { title: "Genre Explorer", description: "Read books from 10 different categories", earned: false },
    { title: "Knowledge Seeker", description: "Read 25 research papers", earned: false }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Welcome back, Reader!</h1>
          <p className="text-xl text-muted-foreground">
            Continue your learning journey with personalized recommendations
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="card-soft border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      {stat.title}
                    </p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {stat.change}
                    </p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="reading" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="reading">Currently Reading</TabsTrigger>
                <TabsTrigger value="finished">Recently Finished</TabsTrigger>
                <TabsTrigger value="saved">Reading List</TabsTrigger>
              </TabsList>

              <TabsContent value="reading" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Continue Reading</h3>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
                <div className="grid gap-4">
                  {currentlyReading.map((book) => (
                    <Card key={book.id} className="card-soft border-0">
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <div className="w-16 h-20 bg-muted rounded overflow-hidden flex-shrink-0">
                            <img 
                              src={book.coverUrl} 
                              alt={`Cover of ${book.title}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold mb-1">{book.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{book.author}</p>
                            <div className="flex items-center gap-2 mb-2">
                              <Progress value={Math.random() * 80 + 10} className="flex-1" />
                              <span className="text-xs text-muted-foreground whitespace-nowrap">
                                {Math.floor(Math.random() * 80 + 10)}%
                              </span>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" className="btn-gradient">
                                <BookOpen className="h-4 w-4 mr-2" />
                                Continue
                              </Button>
                              {book.isAudiobook && (
                                <Button size="sm" variant="outline">
                                  <Play className="h-4 w-4" />
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="finished" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Recently Finished</h3>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
                <div className="grid gap-4">
                  {recentlyFinished.map((book) => (
                    <Card key={book.id} className="card-soft border-0">
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <div className="w-16 h-20 bg-muted rounded overflow-hidden flex-shrink-0">
                            <img 
                              src={book.coverUrl} 
                              alt={`Cover of ${book.title}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold mb-1">{book.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{book.author}</p>
                            <div className="flex items-center gap-2 mb-2">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`h-4 w-4 ${
                                      i < Math.floor(Math.random() * 2 + 4) 
                                        ? 'text-samos-amber fill-current' 
                                        : 'text-muted-foreground'
                                    }`} 
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-muted-foreground">
                                Finished 2 days ago
                              </span>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">
                                Write Review
                              </Button>
                              <Button size="sm" variant="ghost">
                                <Heart className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="saved" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Your Reading List</h3>
                  <Button variant="outline" size="sm">Manage List</Button>
                </div>
                <div className="grid gap-4">
                  {savedBooks.map((book) => (
                    <Card key={book.id} className="card-soft border-0">
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <div className="w-16 h-20 bg-muted rounded overflow-hidden flex-shrink-0">
                            <img 
                              src={book.coverUrl} 
                              alt={`Cover of ${book.title}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold mb-1">{book.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{book.author}</p>
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="secondary" className="text-xs">
                                {book.category}
                              </Badge>
                              <span className="text-xs text-muted-foreground">
                                Added 1 week ago
                              </span>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" className="btn-gradient">
                                <BookOpen className="h-4 w-4 mr-2" />
                                Start Reading
                              </Button>
                              <Button size="sm" variant="ghost">
                                Remove
                              </Button>
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

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Reading Goals */}
            <Card className="card-soft border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-samos-blue" />
                  Reading Goals 2024
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {readingGoals.map((goal, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{goal.title}</span>
                      <span className="text-sm text-muted-foreground">
                        {goal.current}/{goal.target}
                      </span>
                    </div>
                    <Progress value={goal.percentage} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="card-soft border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-samos-amber" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center gap-3 p-2 rounded-lg ${
                      achievement.earned ? 'bg-samos-amber/10' : 'bg-muted/30'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      achievement.earned ? 'bg-samos-amber text-white' : 'bg-muted'
                    }`}>
                      <Award className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`font-medium text-sm ${
                        achievement.earned ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {achievement.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Reading Activity */}
            <Card className="card-soft border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-green-600" />
                  This Week
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Pages Read</span>
                    <span className="font-semibold">1,247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Time Spent</span>
                    <span className="font-semibold">18.5h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Books Completed</span>
                    <span className="font-semibold">2</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;