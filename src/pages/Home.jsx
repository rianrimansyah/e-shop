import CardProduks from "./CardProduks";
import { produks } from "./Produks";

export default function Home() {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Daftar Produk</h1>

      {/* Bungkus dengan grid, lalu looping data pakai .map() */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
        {produks.map((item) => (
          <CardProduks key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
