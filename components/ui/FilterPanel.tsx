import { FilterOption, FilterSectionData } from '@/types/FilterPanel';
import { useProductFilters } from '@/utily/FilterPanel';
import { ChevronDown, Sliders, X } from 'lucide-react';

// FilterButton Component
type FilterButtonProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

const FilterButton: React.FC<FilterButtonProps> = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center w-full text-sm py-1 ${active ? 'text-blue-600 font-medium' : 'text-gray-600'}`}
  >
    <div
      className={`w-4 h-4 rounded-sm border mr-2 flex items-center justify-center ${active ? 'bg-blue-600 border-blue-600' : 'border-gray-300'}`}
    >
      {active && <div className="w-2 h-2 bg-white rounded-sm" />}
    </div>
    {label}
  </button>
);

// Active Filter Badge Component
type ActiveFilterBadgeProps = {
  filterKey: string;
  value: string | string[];
  onRemove: () => void;
};

const ActiveFilterBadge: React.FC<ActiveFilterBadgeProps> = ({ filterKey, value, onRemove }) => (
  <button
    onClick={onRemove}
    className="flex items-center bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
  >
    <span>{filterKey}: {Array.isArray(value) ? value.join(', ') : value}</span>
    <X size={12} className="ml-1" />
  </button>
);

// Active Filters Section Component
type ActiveFiltersSectionProps = {
  filters: Record<string, string | string[]>;
  onRemoveFilter: (key: string) => void;
};

const ActiveFiltersSection: React.FC<ActiveFiltersSectionProps> = ({ filters, onRemoveFilter }) => {
  const hasActiveFilters = Object.keys(filters).length > 0;

  if (!hasActiveFilters) return null;

  return (
    <div className="mb-4">
      <div className="text-sm text-gray-500 mb-2">Active Filters:</div>
      <div className="flex flex-wrap gap-2">
        {Object.entries(filters).map(([key, value]) => (
          <ActiveFilterBadge
            key={key}
            filterKey={key}
            value={value}
            onRemove={() => onRemoveFilter(key)}
          />
        ))}
      </div>
    </div>
  );
};

// Filter Section Component
type FilterSectionProps = {
  title: string;
  expanded: boolean;
  toggleSection: () => void;
  options: FilterOption[];
  filterKey: string;
  activeValue?: string | string[];
  onFilterChange: (value: string) => void;
};

const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  expanded,
  toggleSection,
  options,
  activeValue,
  onFilterChange,
}) => (
  <div className="mb-4 border-b pb-4">
    <button
      onClick={toggleSection}
      className="flex justify-between items-center w-full font-medium mb-2"
    >
      <span>{title}</span>
      <ChevronDown
        size={18}
        className={`transform transition-transform ${expanded ? 'rotate-180' : ''}`}
      />
    </button>

    {expanded && (
      <div className="space-y-2">
        {options.map((option) => (
          <FilterButton
            key={option.value}
            label={option.label}
            active={
              Array.isArray(activeValue)
                ? activeValue.includes(option.value)
                : activeValue === option.value
            }
            onClick={() => onFilterChange(option.value)}
          />
        ))}
      </div>
    )}
  </div>
);

type FilterPanelProps = {
  filters: Record<string, string | string[]>,
  expandedSections: Record<string, boolean>,
  filterSections: FilterSectionData[],
  updateFilter: (key: string, value: string) => void,
  toggleSection: (section: string) => void,
  removeFilter: (key: string) => void,
  clearAllFilters: () => void,
}
// Main Component
export default function FilterPanel({
  filters,
  expandedSections,
  filterSections,
  updateFilter,
  toggleSection,
  removeFilter,
  clearAllFilters,
}: FilterPanelProps) {

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold flex items-center">
          <Sliders size={18} className="mr-2" /> Filters
        </h2>
        <button
          onClick={clearAllFilters}
          className="text-sm text-blue-600 hover:underline"
        >
          Clear All
        </button>
      </div>

      <ActiveFiltersSection
        filters={filters}
        onRemoveFilter={removeFilter}
      />

      {filterSections.map(section => (
        <FilterSection
          key={section.id}
          title={section.title}
          expanded={expandedSections[section.id]}
          toggleSection={() => toggleSection(section.id)}
          options={section.options}
          filterKey={section.id}
          activeValue={filters[section.id]}
          onFilterChange={(value) => updateFilter(section.id, value)}
        />
      ))}
    </div>
  );
}
