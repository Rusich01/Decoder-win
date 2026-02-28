import Table from "../components/table";
import { useVinStore } from "../store/useVinStore";

const VariablesPag = () => {
  const { results } = useVinStore();

  return (
    <div className="bg-linear-to-br from-slate-100 to-slate-200 min-h-screen flex  justify-center p-6">
      <div className="w-full max-w-4xl bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/40 overflow-hidden">
        <Table result={results} />
      </div>
    </div>
  );
};

export default VariablesPag;
