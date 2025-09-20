import { useState, useMemo } from "react";
import { Search, Filter, Grid, List, BookOpen, Play, Download, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from "@/components/ui/dropdown-menu";
import { sampleBooks, categories } from "@/data/sampleBooks";

const Library = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("relevance");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  const filteredBooks = useMemo(() => {
    let filtered = sampleBooks;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(book => 
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter(book => book.category === selectedCategory);
    }

    // Sort
    switch (sortBy) {
      case "rating":
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        filtered = [...filtered].sort((a, b) => b.publishedYear - a.publishedYear);
        break;
      case "price-low":
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case "title":
        filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        // relevance - keep original order
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  const BookCard = ({ book }: { book: typeof sampleBooks[0] }) => (
    <Card className="card-soft border-0 overflow-hidden group hover:shadow-lg transition-all duration-300">
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
            <Button size="sm" variant="secondary">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
        {book.isPremium && (
          <Badge className="absolute top-3 right-3 bg-samos-amber text-samos-blue">
            Premium
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-3 w-3 ${
                  i < Math.floor(book.rating) 
                    ? 'text-samos-amber fill-current' 
                    : 'text-muted-foreground'
                }`} 
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            ({book.reviewCount})
          </span>
        </div>
        <h3 className="font-bold text-sm mb-1 line-clamp-2">{book.title}</h3>
        <p className="text-muted-foreground text-xs mb-2">{book.author}</p>
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
  );

  const BookListItem = ({ book }: { book: typeof sampleBooks[0] }) => (
    <Card className="card-soft border-0 p-4">
      <div className="flex gap-4">
        <div className="w-20 h-28 bg-muted rounded flex-shrink-0 relative overflow-hidden">
          <img 
            src={book.coverUrl} 
            alt={`Cover of ${book.title}`}
            className="w-full h-full object-cover"
          />
          {book.isPremium && (
            <Badge className="absolute -top-2 -right-2 bg-samos-amber text-samos-blue text-xs">
              Premium
            </Badge>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-bold text-lg mb-1">{book.title}</h3>
              <p className="text-muted-foreground">{book.author}</p>
            </div>
            <div className="text-lg font-medium">
              {book.price === 0 ? 'Free' : `$${book.price}`}
            </div>
          </div>
          
          <div className="flex items-center gap-4 mb-3">
            <div className="flex items-center gap-1">
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
              <span className="text-sm text-muted-foreground ml-1">
                ({book.reviewCount})
              </span>
            </div>
            <Badge variant="secondary">{book.category}</Badge>
            <span className="text-sm text-muted-foreground">
              {book.pageCount} pages
            </span>
            <span className="text-sm text-muted-foreground">
              {book.publishedYear}
            </span>
          </div>
          
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {book.description}
          </p>
          
          <div className="flex gap-2">
            <Button size="sm" className="btn-gradient">
              <BookOpen className="h-4 w-4 mr-2" />
              Read Now
            </Button>
            {book.isAudiobook && (
              <Button size="sm" variant="outline">
                <Play className="h-4 w-4 mr-2" />
                Listen
              </Button>
            )}
            <Button size="sm" variant="ghost">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Digital Library</h1>
          <p className="text-xl text-muted-foreground">
            Explore our collection of {sampleBooks.length.toLocaleString()}+ books, research papers, and audiobooks
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search books, authors, topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-muted/50 border-0 focus-visible:ring-2 focus-visible:ring-samos-amber"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-2">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.name} value={category.name}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="title">Title A-Z</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex border rounded-lg">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-r-none"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            {filteredBooks.length} {filteredBooks.length === 1 ? 'book' : 'books'} found
            {searchQuery && ` for "${searchQuery}"`}
            {selectedCategory !== "all" && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Books Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredBooks.map((book) => (
              <BookListItem key={book.id} book={book} />
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredBooks.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No books found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search criteria or browse our categories
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSortBy("relevance");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Library;
