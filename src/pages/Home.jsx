import { useState } from "react";
import CardProduks from "./CardProduks";
import { produks } from "./Produks";

export default function Home() {
  const [keranjang, setKeranjang] = useState([
    {
      nama: "Celana Pria",
      qty: 5,
    },
    {
      nama: "Sepatu",
      qty: 1,
    },
  ]);

  
  return (
    <div className="grid grid-cols-[80%_20%]">
      <div className="p-5">
        <h1 className="text-2xl font-bold mb-4">Daftar Produk</h1>

        {/* Bungkus dengan grid, lalu looping data pakai .map() */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {produks.map((item) => (
            <CardProduks key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold border-b ">Keranjang</h1>
        <ul>
          {keranjang.map((item) => (
            <li key={item.nama}>{item.nama}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
