import SearchFilterBar, { SearchFilters } from '../SearchFilterBar';
import { useState } from 'react';

const mockNames = ['Alexander', 'Benjamin', 'Charlotte', 'Diana', 'Ethan', 'Fiona', 'Gabriel', 'Hannah'];

export default function SearchFilterBarExample() {
  const [filteredNames, setFilteredNames] = useState<string[]>(mockNames);
  const [currentFilters, setCurrentFilters] = useState<SearchFilters | null>(null);

  const handleFiltersChange = (filters: SearchFilters) => {
    setCurrentFilters(filters);
    console.log('Filters changed:', filters);
    
    // Simple demo filtering by query only
    let filtered = mockNames;
    if (filters.query.trim()) {
      filtered = mockNames.filter(name => 
        name.toLowerCase().includes(filters.query.toLowerCase())
      );
    }
    setFilteredNames(filtered);
  };

  const handleClearFilters = () => {
    setCurrentFilters(null);
    setFilteredNames(mockNames);
    console.log('Filters cleared');
  };

  return (
    <div className="p-4 max-w-4xl space-y-6">
      <SearchFilterBar 
        onFiltersChange={handleFiltersChange}
        onClearFilters={handleClearFilters}
      />
      
      <div className="bg-muted p-4 rounded-md">
        <h3 className="font-semibold mb-2">Filtered Results ({filteredNames.length})</h3>
        <div className="flex flex-wrap gap-2">
          {filteredNames.map(name => (
            <span key={name} className="px-2 py-1 bg-primary text-primary-foreground rounded-md text-sm">
              {name}
            </span>
          ))}
        </div>
      </div>
      
      {currentFilters && (
        <div className="text-sm text-muted-foreground">
          <strong>Active filters:</strong> {JSON.stringify(currentFilters, null, 2)}
        </div>
      )}
    </div>
  );
}