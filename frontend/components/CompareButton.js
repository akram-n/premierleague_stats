"use client";

import { useRouter } from "next/navigation";

export default function CompareButton() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/players/compare");
  };

  return (
    <button
      onClick={handleRedirect}
      className="bg-white text-gray-900 font-semibold py-2 px-4 rounded-lg transition hover:bg-gray-200"
    >
      Compare
    </button>
  );
}
