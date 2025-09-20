import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Globe, Star, Play, Download, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { sampleBooks, featuredCollections, categories } from "@/data/sampleBooks";

const Home = () => {
  const featuredBooks = sampleBooks.slice(0, 6);
  const stats = [
    { label: "Books Available", value: "2.5M+", icon: BookOpen },
    { label: "Active Readers", value: "850K+", icon: Users },
    { label: "Countries Served", value: "120+", icon: Globe },
    { label: "Average Rating", value: "4.8", icon: Star },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-samos-amber text-samos-blue hover:bg-samos-amber/90">
              Over 2.5 Million Books Available
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Your Gateway to
              <span className="block bg-gradient-to-r from-samos-amber to-yellow-300 bg-clip-text text-transparent">
                Global Knowledge
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Access millions of books, research papers, audiobooks, and educational resources 
              from the world's largest digital library platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="btn-gradient text-lg px-8 py-4 h-auto"
                asChild
              >
                <Link to="/library">
                  Explore Library
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 h-auto border-white/30 text-white hover:bg-white hover:text-samos-blue"
                asChild
              >
                <Link to="/premium">
                  Start Free Trial
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-samos-blue/10 text-samos-blue mb-4">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold text-samos-blue mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Collections</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover curated collections handpicked by our expert librarians
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredCollections.map((collection) => (
              <Card key={collection.id} className="card-soft border-0 overflow-hidden group cursor-pointer">
                <div className={`h-32 ${collection.color} relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">{collection.title}</h3>
                    <p className="text-white/90 text-sm">{collection.description}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex -space-x-2 mb-4">
                    {collection.bookIds.slice(0, 3).map((bookId) => {
                      const book = sampleBooks.find(b => b.id === bookId);
                      return book ? (
                        <div key={bookId} className="w-12 h-16 bg-muted rounded border-2 border-white shadow-sm" />
                      ) : null;
                    })}
                  </div>
                  <Button variant="ghost" className="w-full justify-between p-0 h-auto">
                    View Collection
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Trending Books</h2>
              <p className="text-xl text-muted-foreground">
                Most popular books this month
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/library">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBooks.map((book) => (
              <Card key={book.id} className="card-soft border-0 overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="aspect-[3/4] bg-muted relative overflow-hidden">
                  <img 
                    src={book.coverUrl} 
                    alt={`Cover of ${book.title}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex gap-2">
                      <Button size="sm" className="btn-gradient flex-1">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Read
                      </Button>
                      {book.isAudiobook && (
                        <Button size="sm" variant="secondary">
                          <Play className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                  {book.isPremium && (
                    <Badge className="absolute top-3 right-3 bg-samos-amber text-samos-blue">
                      Premium
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${
                            i < Math.floor(book.rating) 
                              ? 'text-samos-amber fill-current' 
                              : 'text-muted-foreground'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({book.reviewCount})
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{book.title}</h3>
                  <p className="text-muted-foreground mb-3">{book.author}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {book.category}
                    </Badge>
                    <div className="text-sm font-medium">
                      {book.price === 0 ? 'Free' : `$${book.price}`}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
            <p className="text-xl text-muted-foreground">
              Explore our extensive collection across all subjects
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.slice(0, 10).map((category) => (
              <Link
                key={category.name}
                to={`/library?category=${encodeURIComponent(category.name)}`}
                className="group"
              >
                <Card className="card-soft border-0 text-center p-6 group-hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {category.count.toLocaleString()} books
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-samos-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join millions of readers worldwide and get unlimited access to our premium collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-gradient text-lg px-8 py-4 h-auto">
              Start Free Trial
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-4 h-auto border-white/30 text-white hover:bg-white hover:text-samos-blue"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;