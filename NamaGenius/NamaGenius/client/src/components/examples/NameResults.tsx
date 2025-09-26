import NameResults from '../NameResults';

const mockNames = ['Alexander', 'Benjamin', 'Charlotte', 'Diana', 'Ethan'];

export default function NameResultsExample() {
  return (
    <div className="p-4 max-w-md">
      <h3 className="text-lg font-semibold mb-4">Sample Results</h3>
      <NameResults names={mockNames} />
      
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Loading State</h3>
        <NameResults names={[]} isLoading={true} />
      </div>
      
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Empty State</h3>
        <NameResults names={[]} />
      </div>
    </div>
  );
}