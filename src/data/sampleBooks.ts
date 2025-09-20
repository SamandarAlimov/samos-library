// Book cover imports
import aiModernApproachCover from "@/assets/book-covers/ai-modern-approach.jpg";
import quantumUniverseCover from "@/assets/book-covers/quantum-universe.jpg";
import digitalTransformationCover from "@/assets/book-covers/digital-transformation.jpg";
import renaissanceArtCover from "@/assets/book-covers/renaissance-art.jpg";
import introAlgorithmsCover from "@/assets/book-covers/intro-algorithms.jpg";
import climateChangeCover from "@/assets/book-covers/climate-change.jpg";
import modernPoetryCover from "@/assets/book-covers/modern-poetry.jpg";
import behavioralEconomicsCover from "@/assets/book-covers/behavioral-economics.jpg";

export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  description: string;
  coverUrl: string;
  rating: number;
  reviewCount: number;
  publishedYear: number;
  pageCount: number;
  isbn: string;
  price: number;
  isPremium: boolean;
  isAudiobook: boolean;
  readingTime: string;
  tags: string[];
  downloadUrl?: string;
  audioUrl?: string;
}

export const sampleBooks: Book[] = [
  {
    id: "1",
    title: "Artificial Intelligence: A Modern Approach",
    author: "Stuart Russell & Peter Norvig",
    category: "Technology",
    description: "The most comprehensive, up-to-date introduction to the theory and practice of artificial intelligence. This authoritative textbook provides a foundation for understanding AI and its applications.",
    coverUrl: aiModernApproachCover,
    rating: 4.8,
    reviewCount: 1247,
    publishedYear: 2020,
    pageCount: 1152,
    isbn: "978-0134610993",
    price: 49.99,
    isPremium: true,
    isAudiobook: true,
    readingTime: "38 hours",
    tags: ["AI", "Machine Learning", "Computer Science", "Textbook"]
  },
  {
    id: "2",
    title: "The Quantum Universe",
    author: "Brian Cox & Jeff Forshaw",
    category: "Science",
    description: "A fascinating journey into the quantum world, explaining complex physics concepts in an accessible way. Perfect for anyone curious about the fundamental nature of reality.",
    coverUrl: quantumUniverseCover,
    rating: 4.6,
    reviewCount: 892,
    publishedYear: 2019,
    pageCount: 368,
    isbn: "978-0306820445",
    price: 24.99,
    isPremium: false,
    isAudiobook: true,
    readingTime: "12 hours",
    tags: ["Physics", "Quantum Mechanics", "Science", "Popular Science"]
  },
  {
    id: "3",
    title: "Digital Transformation Strategy",
    author: "Alexander Osterwalder",
    category: "Business",
    description: "A comprehensive guide to navigating digital transformation in modern organizations. Essential reading for business leaders and entrepreneurs.",
    coverUrl: digitalTransformationCover,
    rating: 4.5,
    reviewCount: 634,
    publishedYear: 2021,
    pageCount: 294,
    isbn: "978-1119736394",
    price: 34.99,
    isPremium: true,
    isAudiobook: false,
    readingTime: "8 hours",
    tags: ["Business", "Digital Strategy", "Innovation", "Leadership"]
  },
  {
    id: "4",
    title: "The Art of Renaissance",
    author: "Giorgio Vasari",
    category: "Art & Culture",
    description: "A masterful exploration of Renaissance art and the artists who shaped European culture. Beautifully illustrated with high-resolution images.",
    coverUrl: renaissanceArtCover,
    rating: 4.7,
    reviewCount: 423,
    publishedYear: 2018,
    pageCount: 512,
    isbn: "978-0500204467",
    price: 42.99,
    isPremium: true,
    isAudiobook: false,
    readingTime: "16 hours",
    tags: ["Art History", "Renaissance", "Culture", "Illustrated"]
  },
  {
    id: "5",
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    category: "Computer Science",
    description: "The definitive textbook on algorithms and data structures. Used in computer science courses worldwide and essential for programming interviews.",
    coverUrl: introAlgorithmsCover,
    rating: 4.9,
    reviewCount: 2156,
    publishedYear: 2022,
    pageCount: 1312,
    isbn: "978-0262046305",
    price: 89.99,
    isPremium: true,
    isAudiobook: false,
    readingTime: "45 hours",
    tags: ["Algorithms", "Data Structures", "Computer Science", "Programming"]
  },
  {
    id: "6",
    title: "Climate Change and Society",
    author: "Dr. Sarah Chen",
    category: "Environmental Science",
    description: "An urgent examination of climate change impacts on society, economics, and politics. Essential reading for understanding our planet's future.",
    coverUrl: climateChangeCover,
    rating: 4.4,
    reviewCount: 756,
    publishedYear: 2023,
    pageCount: 387,
    isbn: "978-0415789456",
    price: 28.99,
    isPremium: false,
    isAudiobook: true,
    readingTime: "11 hours",
    tags: ["Climate Science", "Environment", "Society", "Policy"]
  },
  {
    id: "7",
    title: "Modern Poetry: A Global Perspective",
    author: "Elena Blackwood",
    category: "Literature",
    description: "A comprehensive anthology of contemporary poetry from around the world, featuring both established and emerging voices.",
    coverUrl: modernPoetryCover,
    rating: 4.3,
    reviewCount: 289,
    publishedYear: 2021,
    pageCount: 456,
    isbn: "978-0374534847",
    price: 19.99,
    isPremium: false,
    isAudiobook: true,
    readingTime: "14 hours",
    tags: ["Poetry", "Literature", "Contemporary", "Global"]
  },
  {
    id: "8",
    title: "Behavioral Economics Explained",
    author: "Daniel Kahneman",
    category: "Economics",
    description: "A groundbreaking exploration of how psychology influences economic decisions. Winner of the Nobel Prize in Economics.",
    coverUrl: behavioralEconomicsCover,
    rating: 4.8,
    reviewCount: 1834,
    publishedYear: 2020,
    pageCount: 624,
    isbn: "978-0374533571",
    price: 32.99,
    isPremium: true,
    isAudiobook: true,
    readingTime: "18 hours",
    tags: ["Economics", "Psychology", "Decision Making", "Nobel Prize"]
  }
];

export const categories = [
  { name: "Technology", count: 1247, icon: "💻" },
  { name: "Science", count: 892, icon: "🔬" },
  { name: "Business", count: 634, icon: "💼" },
  { name: "Art & Culture", count: 423, icon: "🎨" },
  { name: "Literature", count: 567, icon: "📚" },
  { name: "Economics", count: 389, icon: "📈" },
  { name: "Philosophy", count: 298, icon: "🤔" },
  { name: "History", count: 756, icon: "🏛️" },
  { name: "Medical", count: 445, icon: "⚕️" },
  { name: "Law", count: 223, icon: "⚖️" }
];

export const featuredCollections = [
  {
    id: "staff-picks",
    title: "Staff Picks",
    description: "Curated by our librarians",
    bookIds: ["1", "2", "8"],
    color: "bg-gradient-to-r from-purple-500 to-pink-500"
  },
  {
    id: "trending-now",
    title: "Trending Now",
    description: "Most popular this month",
    bookIds: ["5", "6", "3"],
    color: "bg-gradient-to-r from-orange-500 to-red-500"
  },
  {
    id: "new-releases",
    title: "New Releases",
    description: "Latest additions to our library",
    bookIds: ["6", "7", "4"],
    color: "bg-gradient-to-r from-green-500 to-teal-500"
  }
];