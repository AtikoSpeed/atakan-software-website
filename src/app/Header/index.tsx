import Nav from "@/app/Nav";

export default function Header() {
  return (
    <header className="w-100 flex justify-center z-20">
      <div className="container grid grid-flow-col fixed">
        <div className="flex justify-between items-center py-6">
          <h1 className="text-3xl neon font-bold select-none m-0 p-0">
            Atakan
          </h1>
        </div>
        <div className="flex justify-end items-center py-6 font-bold text-red-600 text-2xl translate-x-12">
          <h2>WORK IN PROGRESS!!</h2>
        </div>
        <div className="flex justify-end items-center">
          <Nav />
        </div>
      </div>
    </header>
  );
}
