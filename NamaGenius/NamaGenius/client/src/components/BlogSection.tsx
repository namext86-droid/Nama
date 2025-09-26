import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { format } from 'date-fns';

// todo: remove mock functionality - replace with real blog content from CMS or API
interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: Date;
  category: string;
  readTime: number;
  tags: string[];
}

const blogArticles: BlogArticle[] = [
  {
    id: 'arabic-naming-traditions',
    title: 'Arabic Naming Traditions: A Journey Through Culture and History',
    excerpt: 'Discover the rich traditions behind Arabic names, from ancient tribal customs to modern naming practices across the Arab world.',
    content: `Arabic names carry profound meaning and reflect thousands of years of cultural heritage. Traditional Arabic naming follows a patronymic system where names indicate lineage and family connections.

The structure typically includes the given name (ism), father's name (nasab), and often tribal or geographic identifiers. Names often have religious significance, with many derived from the 99 names of Allah or honoring prophets and religious figures.

Modern Arabic naming has evolved while maintaining cultural roots, with parents choosing names that honor tradition while fitting contemporary life. Popular themes include nature (Yasmin - jasmine), virtues (Sabr - patience), and divine attributes.`,
    author: 'Dr. Amina Hassan',
    publishedAt: new Date('2024-01-15'),
    category: 'Cultural Heritage',
    readTime: 5,
    tags: ['Arabic', 'Culture', 'Religion', 'History']
  },
  {
    id: 'hindi-names-spiritual-meaning',
    title: 'The Spiritual Significance of Hindi Names',
    excerpt: 'Explore how Sanskrit roots and Hindu philosophy influence naming traditions in India, creating names that carry deep spiritual meaning.',
    content: `Hindi names, deeply rooted in Sanskrit traditions, often carry profound spiritual and philosophical meanings. Many names are derived from Hindu deities, concepts from the Vedas, or natural elements considered sacred.

The practice of choosing names based on birth charts (Janam Patri) remains popular, where astrologers suggest names beginning with specific syllables believed to bring good fortune. Names like Arjun (bright, shining) or Priya (beloved) reflect desired qualities parents wish for their children.

Regional variations exist across India, with each state having unique naming customs while maintaining the Sanskrit foundation. Modern parents often choose names that honor tradition while being easily pronounced in global contexts.`,
    author: 'Rajesh Sharma',
    publishedAt: new Date('2024-02-03'),
    category: 'Spiritual Traditions',
    readTime: 4,
    tags: ['Hindi', 'Sanskrit', 'Spirituality', 'Astrology']
  },
  {
    id: 'global-name-trends-2024',
    title: 'Global Name Trends 2024: What Parents Are Choosing',
    excerpt: 'Analyze the latest naming trends worldwide, from vintage revivals to nature-inspired choices and cultural fusion names.',
    content: `The 2024 naming landscape reflects global interconnectedness while honoring cultural roots. Nature-inspired names like River, Luna, and Atlas are gaining popularity across cultures, reflecting environmental awareness.

Vintage names are experiencing a renaissance, with names like Theodore, Charlotte, and Eleanor returning to popularity. Gender-neutral names like Sage, River, and Phoenix appeal to parents seeking flexibility.

Cultural fusion names that blend traditions from multiple heritages are becoming more common in multicultural families. These names honor diverse backgrounds while creating unique identities for the new generation.

Technology and social media influence naming trends, with parents considering how names will appear in digital spaces while maintaining meaningful cultural connections.`,
    author: 'Maria Rodriguez',
    publishedAt: new Date('2024-02-20'),
    category: 'Modern Trends',
    readTime: 6,
    tags: ['Trends', 'Global', 'Culture', 'Modern']
  },
  {
    id: 'choosing-perfect-baby-name',
    title: 'How to Choose the Perfect Baby Name: A Complete Guide',
    excerpt: 'Practical advice for parents on selecting meaningful names that balance tradition, modernity, and personal significance.',
    content: `Choosing a baby name is one of the most important decisions parents make. Consider these key factors: cultural significance, family traditions, pronunciation ease, and personal meaning.

Start by discussing family heritage and traditions with your partner. Many families choose names that honor grandparents or carry cultural significance. Consider how the name sounds with your surname and whether it has positive associations.

Think about nickname possibilities and how the name might evolve throughout your child's life. Professional considerations matter too - while creativity is wonderful, consider how the name might be perceived in different contexts.

Research name meanings thoroughly, as many names carry beautiful stories and significance that can become part of your child's identity. Consider creating a shortlist and living with potential names for a few weeks before making your final decision.`,
    author: 'Dr. Sarah Thompson',
    publishedAt: new Date('2024-03-05'),
    category: 'Parenting Guide',
    readTime: 7,
    tags: ['Parenting', 'Advice', 'Decision Making', 'Family']
  },
  {
    id: 'mythology-inspired-names',
    title: 'Names from Mythology: Ancient Stories for Modern Children',
    excerpt: 'Discover powerful names from Greek, Roman, Norse, and other mythologies, perfect for parents seeking names with epic stories.',
    content: `Mythological names offer rich stories and powerful meanings that have captivated parents for generations. Greek mythology provides names like Apollo (god of music), Athena (goddess of wisdom), and Phoenix (mythical bird of rebirth).

Norse mythology contributes strong names like Thor (thunder god), Freya (goddess of love), and Odin (all-father). These names carry tales of strength, wisdom, and adventure that can inspire children throughout their lives.

Roman mythology offers names like Diana (goddess of the hunt), Mars (god of war), and Luna (moon goddess), while Celtic traditions provide names like Brigid (goddess of poetry) and Finn (fair warrior).

When choosing mythological names, research the complete stories to ensure the associations align with your values. Many mythological figures were complex, so understanding the full narrative helps make informed decisions.`,
    author: 'Professor James Mitchell',
    publishedAt: new Date('2024-03-18'),
    category: 'Mythology',
    readTime: 5,
    tags: ['Mythology', 'Greek', 'Norse', 'Celtic', 'Stories']
  }
];

export default function BlogSection() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const categories = ['all', 'Cultural Heritage', 'Spiritual Traditions', 'Modern Trends', 'Parenting Guide', 'Mythology'];
  
  const filteredArticles = selectedCategory === 'all' 
    ? blogArticles 
    : blogArticles.filter(article => article.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      'Cultural Heritage': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'Spiritual Traditions': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      'Modern Trends': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      'Parenting Guide': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      'Mythology': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-blog-title">
            <BookOpen className="inline-block mr-3 h-8 w-8 text-primary" />
            Name Insights & Cultural Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the fascinating world of names through cultural traditions, spiritual meanings, and modern trends
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              data-testid={`button-category-${category.toLowerCase().replace(' ', '-')}`}
            >
              {category === 'all' ? 'All Articles' : category}
            </Button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredArticles.map((article, index) => (
            <Card 
              key={article.id}
              className="hover-elevate transition-all duration-200 group cursor-pointer"
              data-testid={`card-article-${article.id}`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <Badge className={getCategoryColor(article.category)}>
                    {article.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {article.readTime} min read
                  </div>
                </div>
                
                <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors" data-testid={`text-article-title-${article.id}`}>
                  {article.title}
                </CardTitle>
                
                <CardDescription className="line-clamp-2" data-testid={`text-article-excerpt-${article.id}`}>
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    <span data-testid={`text-article-author-${article.id}`}>{article.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span data-testid={`text-article-date-${article.id}`}>
                      {format(article.publishedAt, 'MMM d, yyyy')}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {article.tags.slice(0, 3).map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      variant="outline" 
                      className="text-xs"
                      data-testid={`badge-tag-${article.id}-${tagIndex}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                  {article.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{article.tags.length - 3}
                    </Badge>
                  )}
                </div>

                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                  {article.content.substring(0, 120)}...
                </p>

                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  data-testid={`button-read-article-${article.id}`}
                >
                  Read Full Article
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <p className="text-xl text-muted-foreground">No articles found for this category</p>
          </div>
        )}
      </div>
    </section>
  );
}