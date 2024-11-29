import Nav from "../Nav";

export default function Header() {
  return (
    <header>
      <div className="container grid grid-flow-col fixed">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-3xl font-bold glow">Atakan</h1>
        </div>
        <div className="flex justify-end items-center">
          <Nav />
        </div>
      </div>
    </header>
  );
}
