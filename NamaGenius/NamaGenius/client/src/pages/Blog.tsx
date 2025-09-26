import BlogSection from '@/components/BlogSection';
import SEOHead from '@/components/SEOHead';

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Name Insights & Cultural Stories - NamaX Blog"
        description="Explore the fascinating world of names through cultural traditions, spiritual meanings, and modern trends. Discover stories behind Arabic, Hindi, and English names with expert insights."
        keywords="name meanings, cultural naming traditions, arabic names culture, hindi names spirituality, naming trends, name origins, cultural heritage"
      />
      <BlogSection />
    </div>
  );
}