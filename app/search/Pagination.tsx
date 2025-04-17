
// Pagination.tsx
export default function Pagination() {
  return (
    <div className="mt-8 flex justify-center">
      <div className="flex space-x-1">
        <button className="px-4 py-2 border rounded bg-gray-100">Previous</button>
        <button className="px-4 py-2 border rounded bg-blue-500 text-white">1</button>
        <button className="px-4 py-2 border rounded">2</button>
        <button className="px-4 py-2 border rounded">3</button>
        <button className="px-4 py-2 border rounded">...</button>
        <button className="px-4 py-2 border rounded">10</button>
        <button className="px-4 py-2 border rounded bg-gray-100">Next</button>
      </div>
    </div>
  );
}
