import { useEffect, useState } from "react";

interface GoldItemDetails {
  name: string;
  hall: string;
  marking: string;
  weight: string;
}

interface HUIDListPageProps {
  name: string;
  aadhaarId: string;
}

interface HUIDItem {
  huid: string;
  details: GoldItemDetails;
}

export default function HUIDListPage({ name, aadhaarId }: HUIDListPageProps) {
  const [huidList, setHuidList] = useState<HUIDItem[]>([]);
  const [selectedHUID, setSelectedHUID] = useState<string | null>(null);

  useEffect(() => {
    const fetchHUIDs = () => {
      console.log(`Fetching HUIDs for Aadhaar ID: ${aadhaarId}`);

      const huids: HUIDItem[] = [
        {
          huid: "HUID123456",
          details: {
            name: "Gold Ring",
            hall: "Hall 1",
            marking: "916 KDM",
            weight: "10 grams"
          }
        },
        {
          huid: "HUID654321",
          details: {
            name: "Gold Chain",
            hall: "Hall 2",
            marking: "22k BIS",
            weight: "15 grams"
          }
        },
        {
          huid: "HUID789012",
          details: {
            name: "Gold Bracelet",
            hall: "Hall 3",
            marking: "18k",
            weight: "12 grams"
          }
        }
      ];
      setHuidList(huids);
    };

    fetchHUIDs();
  }, [aadhaarId]);

  const toggleHUIDDetails = (huid: string) => {
    setSelectedHUID(selectedHUID === huid ? null : huid);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#C07F00] bg-opacity-20">
      <h2 className="font-medium text-4xl mb-5 text-black">Welcome, {name}</h2>
      <p className="text-lg mb-5 text-black">Aadhaar ID: {aadhaarId}</p>

      <div className="w-full max-w-3xl bg-white shadow-lg p-6 rounded-lg">
        <h3 className="font-medium text-3xl mb-4 text-yellow-700">Your HUIDs</h3>
        {huidList.length > 0 ? (
          <div className="space-y-4">
            {huidList.map((item) => (
              <div
                key={item.huid}
                className="p-4 border-2 border-yellow-600 rounded-lg cursor-pointer hover:bg-[#eeeeee]  transition"
                onClick={() => toggleHUIDDetails(item.huid)}
              >
                <p className="text-lg font-semibold text-yellow-700">{item.huid}</p>

                {selectedHUID === item.huid && (
                  <div className="mt-4 p-4 bg-[#C07F00] rounded-lg text-white">
                    <p><strong>Item Name:</strong> {item.details.name}</p>
                    <p><strong>Hall:</strong> {item.details.hall}</p>
                    <p><strong>Marking:</strong> {item.details.marking}</p>
                    <p><strong>Weight:</strong> {item.details.weight}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-yellow-900">No HUIDs linked with this Aadhaar ID.</p>
        )}
      </div>
    </div>
  );
}
