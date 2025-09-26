import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import SEOHead from '@/components/SEOHead';
import Hero from '@/components/Hero';
import PersonalNameGenerator from '@/components/PersonalNameGenerator';
import KeywordGenerator from '@/components/KeywordGenerator';
import SpecializedGenerators from '@/components/SpecializedGenerators';
import FeaturedNames from '@/components/FeaturedNames';
import SearchFilterBar, { SearchFilters, applyFilters } from '@/components/SearchFilterBar';
import FavoritesView from '@/components/FavoritesView';
import BlogSection from '@/components/BlogSection';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Home() {
  const { t } = useTranslation();
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchFilters = useCallback((filters: SearchFilters) => {
    // todo: remove mock functionality - implement real search across all name databases
    setIsSearching(true);
    console.log('Search filters applied:', filters);
    
    // Mock search implementation
    setTimeout(() => {
      if (filters.query.trim()) {
        const mockResults = ['Alexandra', 'Alexander', 'Alice', 'Andrew', 'Anna'].filter(name =>
          name.toLowerCase().includes(filters.query.toLowerCase())
        );
        setSearchResults(applyFilters(mockResults, filters));
      } else {
        setSearchResults([]);
      }
      setIsSearching(false);
    }, 500);
  }, []);

  const handleClearSearch = useCallback(() => {
    setSearchResults([]);
    setIsSearching(false);
    console.log('Search cleared');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="NamaX - Universal Multilingual Name Generator"
        description="Generate perfect names for babies, businesses, pets, and more with our comprehensive multilingual name generator. Support for English, Arabic, and Hindi with cultural meanings and personality insights."
        keywords="name generator, baby names, business names, pet names, multilingual names, Arabic names, Hindi names, English names, cultural names, personality names"
      />
      <Hero />
      
      {/* Featured Names Section */}
      <section className="bg-background border-b">
        <FeaturedNames />
      </section>
      
      <section id="generators" className="bg-sidebar py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Name Generators
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our specialized generators to find the perfect name for any purpose
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <SearchFilterBar 
              onFiltersChange={handleSearchFilters}
              onClearFilters={handleClearSearch}
            />
            
            {/* Search Results */}
            {(searchResults.length > 0 || isSearching) && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4">
                  Search Results {searchResults.length > 0 && `(${searchResults.length})`}
                </h3>
                {isSearching ? (
                  <div className="flex items-center justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {searchResults.map((name, index) => (
                      <div
                        key={index}
                        className="p-3 bg-card border rounded-lg text-center hover-elevate"
                        data-testid={`search-result-${index}`}
                      >
                        {name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Generators Tabs */}
          <Tabs defaultValue="generators" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="generators" data-testid="tab-generators">Name Generators</TabsTrigger>
              <TabsTrigger value="favorites" data-testid="tab-favorites">My Favorites</TabsTrigger>
            </TabsList>
            
            <TabsContent value="generators" className="space-y-12 mt-8">
              {/* Personal Name Generator */}
              <div className="max-w-4xl mx-auto">
                <PersonalNameGenerator />
              </div>

              {/* Keyword Generator */}
              <div className="max-w-4xl mx-auto">
                <KeywordGenerator />
              </div>

              {/* Specialized Generators */}
              <div>
                <h3 className="text-2xl font-bold text-foreground text-center mb-8">
                  Specialized Generators
                </h3>
                <SpecializedGenerators />
              </div>
            </TabsContent>
            
            <TabsContent value="favorites" className="mt-8">
              <FavoritesView />
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Blog Section */}
      <BlogSection />
    </div>
  );
}