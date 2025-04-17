export type market = {
    id: number;
    name: string;
    flag: string;
}
type props ={ markets : market[], }
export function MarketplaceSection({markets}: props){
  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold mb-4">Shop by Market</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {markets.map(market => (
            <div key={market.id} className="bg-white rounded-lg shadow p-4 cursor-pointer hover:shadow-md transition">
              <div className="flex items-center">
                <span className="text-2xl mr-3">{market.flag}</span>
                <span className="font-medium">{market.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


