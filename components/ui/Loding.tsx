
import { Loader2 } from 'lucide-react';

interface LoadingProps {
  message?: string;
}

export default function Loading({ message = 'Loading...' }: LoadingProps) {
  return (
    <div className="w-full flex flex-col items-center justify-center py-12">
      <Loader2 className="h-8 w-8 text-blue-600 animate-spin mb-4" />
      <p className="text-gray-600 text-center">{message}</p>
    </div>
  );
}
