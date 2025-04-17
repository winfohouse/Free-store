export type Category = {
    id: number;
    name: string;
    icon: string;
}
type props = {categories : Category[]}

export default function CategorySection({categories}: props) {
  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold mb-4">Browse Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map(category => (
            <div key={category.id} className="bg-white rounded-lg shadow p-4 text-center cursor-pointer hover:shadow-md transition">
              <div className="text-3xl mb-2">{category.icon}</div>
              <p className="text-sm font-medium">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


