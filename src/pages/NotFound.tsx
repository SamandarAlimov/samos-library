import { Link } from "react-router-dom";
import { BookOpen, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-md mx-auto">
          {/* SAMOS Logo */}
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-samos-blue to-samos-blue/80">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-samos-blue">SAMOS</h1>
              <p className="text-sm text-muted-foreground -mt-1">Digital Library</p>
            </div>
          </div>

          {/* 404 Error */}
          <div className="mb-8">
            <h1 className="text-8xl font-bold text-samos-blue mb-4">404</h1>
            <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
            <p className="text-muted-foreground mb-8">
              Sorry, the page you're looking for doesn't exist in our digital library. 
              It might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="btn-gradient">
              <Link to="/">
                <Home className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/library">
                <Search className="h-4 w-4 mr-2" />
                Browse Library
              </Link>
            </Button>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t">
            <p className="text-sm text-muted-foreground mb-4">Popular destinations:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/categories">Categories</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/audiobooks">Audiobooks</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/research">Research Papers</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/dashboard">My Dashboard</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
