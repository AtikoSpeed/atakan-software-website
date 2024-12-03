import Contact from "./Contact";
import Main from "./Main";
import Portfolio from "./Portfolio";
import TechStack from "./TechStack";
export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <Main />
      <Portfolio />
      <TechStack />
      <Contact />
    </div>
  );
}
