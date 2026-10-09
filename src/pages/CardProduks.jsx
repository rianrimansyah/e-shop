export default function CardProduks({ item }) {
  return (
    <div className="bg-blue-100 p-3 rounded-2xl flex flex-col gap-1 cursor-pointer transition-transform duration-300 hover:scale-110">
      <img
        src={item.gambar}
        alt={item.nama}
        className="w-30 h-30 rounded-xl lg:w-50 lg:h-50"
      />
      <h2 className="mt-4 font-bold">{item.nama}</h2>
      <p>Rp {item.harga.toLocaleString("id-ID")}</p>
      <p>{item.deskripsi}</p>
    </div>
  );
}
