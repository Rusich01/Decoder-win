import { Link } from "react-router-dom";

type VinItem = {
  VariableId: number;
  Variable: string;
  Value: string;
};

type TableProps = {
  result: VinItem[];
};

const Table = ({ result }: TableProps) => {
  return (
    <table className="w-full text-left">
      <thead className="bg-slate-100 text-slate-600 text-sm uppercase tracking-wide">
        <tr>
          <th className="px-6 py-4 font-semibold">Variable</th>
          <th className="px-6 py-4 font-semibold">Value</th>
        </tr>
      </thead>

      <tbody className="divide-y divide-slate-100 text-slate-700">
        {result.length > 0 &&
          result.map((item) => (
            <tr
              key={`${item.VariableId}${item.Value}`}
              className="hover:bg-slate-50 transition"
            >
              <td className="px-6 py-4 font-medium">
                <Link
                  className="flex hover:underline"
                  to={`/variable/${item.VariableId}`}
                >
                  {item.Variable}
                </Link>
              </td>

              <td className="px-6 py-4">
                <Link
                  className="hover:underline"
                  to={`/variable/${item.VariableId}`}
                >
                  {item.Value}
                </Link>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
