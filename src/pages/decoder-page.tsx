import Form from "../components/form";
import List from "../components/list";
import Table from "../components/table";
import { useVinStore } from "../store/useVinStore";

const DecoderPages = () => {
  const { results } = useVinStore();

  const filterResults = results.filter(
    (item) => item.Value !== "Not Applicable",
  );

  return (
    <div className="p-10 space-y-10">
      <Form />

      <div className="bg-slate-50 rounded-2xl p-6 shadow-inner">
        <h2 className="text-lg font-semibold text-slate-700 mb-4">
          Last 3 decoded VINs
        </h2>

        <List />
      </div>

      <div className="bg-slate-50 rounded-2xl p-6 shadow-inner">
        <h2 className="text-lg font-semibold text-slate-700 mb-6">
          Decode Results
        </h2>

        <div className="overflow-hidden rounded-xl bg-white shadow-sm">
          <Table result={filterResults} />
        </div>
      </div>
    </div>
  );
};

export default DecoderPages;
