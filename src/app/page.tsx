import Main from "./Main";
import Portfolio from "./Portfolio";
export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <Main />
      <Portfolio />
    </div>
  );
}
