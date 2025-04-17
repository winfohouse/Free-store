export type deal = {
    id: number;
    name: string;
    image: string;
}
type props ={ deals: deal[], }
export default function DealsSection({deals}: props ) {
  return (
    <div className="py-6 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold mb-4">Featured Deals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {deals.map(deal => (
            <div key={deal.id} className="bg-white rounded-lg shadow overflow-hidden cursor-pointer hover:shadow-md transition">
              <img src={deal.image} alt={deal.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-medium">{deal.name}</h3>
                <button className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-1 rounded-full text-sm">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

