import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, X, ChevronDown, ChevronUp } from 'lucide-react';
import { searchNames, filterNamesByLength } from '@/lib/localStorage';

export interface SearchFilters {
  query: string;
  minLength: number;
  maxLength: number;
  gender: string;
  popularity: string;
  meaning: string;
  origin: string;
}

interface SearchFilterBarProps {
  onFiltersChange: (filters: SearchFilters) => void;
  onClearFilters: () => void;
  className?: string;
}

const initialFilters: SearchFilters = {
  query: '',
  minLength: 1,
  maxLength: 15,
  gender: '',
  popularity: '',
  meaning: '',
  origin: ''
};

export default function SearchFilterBar({ onFiltersChange, onClearFilters, className }: SearchFilterBarProps) {
  const { t } = useTranslation();
  const [filters, setFilters] = useState<SearchFilters>(initialFilters);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  // Update active filters list whenever filters change
  useEffect(() => {
    const active: string[] = [];
    if (filters.query.trim()) active.push('query');
    if (filters.minLength > 1 || filters.maxLength < 15) active.push('length');
    if (filters.gender) active.push('gender');
    if (filters.popularity) active.push('popularity');
    if (filters.meaning) active.push('meaning');
    if (filters.origin) active.push('origin');
    
    setActiveFilters(active);
  }, [filters]);

  // Separate effect for handling filter changes to parent with debouncing
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onFiltersChange(filters);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [filters, onFiltersChange]);

  const updateFilter = <K extends keyof SearchFilters>(key: K, value: SearchFilters[K]) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearAllFilters = () => {
    setFilters(initialFilters);
    setActiveFilters([]);
    onClearFilters();
    console.log('All filters cleared');
  };

  const removeFilter = (filterKey: string) => {
    const newFilters = { ...filters };
    switch (filterKey) {
      case 'query':
        newFilters.query = '';
        break;
      case 'length':
        newFilters.minLength = 1;
        newFilters.maxLength = 15;
        break;
      case 'gender':
        newFilters.gender = '';
        break;
      case 'popularity':
        newFilters.popularity = '';
        break;
      case 'meaning':
        newFilters.meaning = '';
        break;
      case 'origin':
        newFilters.origin = '';
        break;
    }
    setFilters(newFilters);
    console.log('Filter removed:', filterKey);
  };

  const getFilterDisplayText = (filterKey: string): string => {
    switch (filterKey) {
      case 'query':
        return `"${filters.query}"`;
      case 'length':
        return `${filters.minLength}-${filters.maxLength} chars`;
      case 'gender':
        return filters.gender;
      case 'popularity':
        return filters.popularity;
      case 'meaning':
        return filters.meaning;
      case 'origin':
        return filters.origin;
      default:
        return '';
    }
  };

  return (
    <Card className={className}>
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Search className="h-5 w-5 text-primary" />
            Search & Filter Names
          </div>
          {activeFilters.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              data-testid="button-clear-all-filters"
            >
              Clear All
              <X className="ml-1 h-4 w-4" />
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Search Input */}
        <div className="space-y-2">
          <Label htmlFor="search">Search Names</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="search"
              type="text"
              placeholder="Type to search names..."
              value={filters.query}
              onChange={(e) => updateFilter('query', e.target.value)}
              className="pl-10"
              data-testid="input-search-names"
            />
          </div>
        </div>

        {/* Active Filters */}
        {activeFilters.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {activeFilters.map((filterKey) => (
              <Badge
                key={filterKey}
                variant="secondary"
                className="flex items-center gap-1"
                data-testid={`badge-filter-${filterKey}`}
              >
                {filterKey}: {getFilterDisplayText(filterKey)}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => removeFilter(filterKey)}
                />
              </Badge>
            ))}
          </div>
        )}

        {/* Advanced Filters */}
        <Collapsible open={isFilterOpen} onOpenChange={setIsFilterOpen}>
          <CollapsibleTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-between"
              data-testid="button-toggle-filters"
            >
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Advanced Filters
              </div>
              {isFilterOpen ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
          </CollapsibleTrigger>
          
          <CollapsibleContent className="space-y-4 mt-4">
            {/* Length Filter */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Min Length: {filters.minLength}</Label>
                <Slider
                  value={[filters.minLength]}
                  onValueChange={(value) => updateFilter('minLength', value[0])}
                  max={20}
                  min={1}
                  step={1}
                  className="w-full"
                  data-testid="slider-min-length"
                />
              </div>

              <div className="space-y-2">
                <Label>Max Length: {filters.maxLength}</Label>
                <Slider
                  value={[filters.maxLength]}
                  onValueChange={(value) => updateFilter('maxLength', value[0])}
                  max={25}
                  min={filters.minLength}
                  step={1}
                  className="w-full"
                  data-testid="slider-max-length"
                />
              </div>
            </div>

            {/* Gender Filter */}
            <div className="space-y-2">
              <Label>Gender</Label>
              <Select value={filters.gender} onValueChange={(value) => updateFilter('gender', value)}>
                <SelectTrigger data-testid="select-filter-gender">
                  <SelectValue placeholder="Any gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any</SelectItem>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="unisex">Unisex</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Popularity Filter */}
            <div className="space-y-2">
              <Label>Popularity Period</Label>
              <Select value={filters.popularity} onValueChange={(value) => updateFilter('popularity', value)}>
                <SelectTrigger data-testid="select-filter-popularity">
                  <SelectValue placeholder="Any period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any</SelectItem>
                  <SelectItem value="trending">Trending Now</SelectItem>
                  <SelectItem value="classic">Classic (1900-1950)</SelectItem>
                  <SelectItem value="vintage">Vintage (1950-1980)</SelectItem>
                  <SelectItem value="modern">Modern (1980-2000)</SelectItem>
                  <SelectItem value="contemporary">Contemporary (2000+)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Meaning/Theme Filter */}
            <div className="space-y-2">
              <Label>Meaning/Theme</Label>
              <Select value={filters.meaning} onValueChange={(value) => updateFilter('meaning', value)}>
                <SelectTrigger data-testid="select-filter-meaning">
                  <SelectValue placeholder="Any meaning" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any</SelectItem>
                  <SelectItem value="strength">Strength/Power</SelectItem>
                  <SelectItem value="wisdom">Wisdom/Knowledge</SelectItem>
                  <SelectItem value="beauty">Beauty/Grace</SelectItem>
                  <SelectItem value="nature">Nature/Earth</SelectItem>
                  <SelectItem value="divine">Divine/Spiritual</SelectItem>
                  <SelectItem value="joy">Joy/Happiness</SelectItem>
                  <SelectItem value="peace">Peace/Harmony</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Origin Filter */}
            <div className="space-y-2">
              <Label>Origin/Culture</Label>
              <Select value={filters.origin} onValueChange={(value) => updateFilter('origin', value)}>
                <SelectTrigger data-testid="select-filter-origin">
                  <SelectValue placeholder="Any origin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any</SelectItem>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="arabic">Arabic</SelectItem>
                  <SelectItem value="indian">Indian</SelectItem>
                  <SelectItem value="hebrew">Hebrew</SelectItem>
                  <SelectItem value="greek">Greek</SelectItem>
                  <SelectItem value="latin">Latin</SelectItem>
                  <SelectItem value="germanic">Germanic</SelectItem>
                  <SelectItem value="celtic">Celtic</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
}

// Export utility functions for filtering names
export const applyFilters = (names: string[], filters: SearchFilters): string[] => {
  let filtered = [...names];
  
  // Apply search query
  if (filters.query.trim()) {
    filtered = searchNames(filtered, filters.query);
  }
  
  // Apply length filter
  filtered = filterNamesByLength(filtered, filters.minLength, filters.maxLength);
  
  // todo: remove mock functionality - implement real filtering for gender, popularity, meaning, origin
  // For now, these filters are handled by the UI but don't actually filter the results
  // In a real implementation, this would connect to a name database with metadata
  
  return filtered;
};