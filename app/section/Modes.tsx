import modesData from "../../datas/modes.json";
import GreenBar from "../components/GreenBar";
import ModesBackground from "../components/ModeBackground";
import ModesGrid from "../components/ModeGrid";

export default function Modes() {
  return (
    <section
      id="mode"
      className="overflow-hidden relative bg-dark-bg py-25 px-6 min-h-[80vh]"
    >
      <ModesBackground />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="mb-12 inline-block">
          <h2 className="text-white text-2xl font-bold tracking-widest mb-2">
            FEATURED MODES
          </h2>

          <GreenBar />
        </div>

        <ModesGrid modes={modesData} />
      </div>
    </section>
  );
}
