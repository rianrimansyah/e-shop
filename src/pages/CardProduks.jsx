import Button from '../Elements/Button/Button.jsx'

export default function CardProduks({ item }) {

  
  return (
    <div className="bg-slate-700 p-3 rounded-2xl flex flex-col gap-1 justify-between cursor-pointer">
      <img
        src={item.gambar}
        alt={item.nama}
        className="w-30 h-30 rounded-xl lg:w-50 lg:h-50"
      />
      <h2 className="mt-4 font-bold text-white text-center">{item.nama}</h2>
      <p className='text-white bg-red-400 text-center rounded-md'>Rp {item.harga.toLocaleString("id-ID")}</p>
      <p className="text-white">{item.deskripsi}</p>
      <Button>Masukkan Keranjang</Button>
    </div>
  );
}
