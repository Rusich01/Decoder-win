import { useState } from "react";
import { useVinStore } from "../store/useVinStore";

const Form = () => {
  const [vin, setVin] = useState("");
  const { decodeVin, loading } = useVinStore();

  const submitForm = (event: any) => {
    event.preventDefault();

    if (!vin) return;
    if (vin.length < 17) return alert("VIN must contain 17 characters");

    decodeVin(vin);
    setVin("");
  };

  return (
    <form className="flex flex-col gap-4 sm:flex-row" onSubmit={submitForm}>
      <input
        value={vin}
        onChange={(e) => setVin(e.target.value)}
        type="text"
        maxLength={17}
        placeholder="Enter VIN (17 characters)"
        className="flex-1  bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
      />
      <button
        disabled={vin.length < 17}
        type="submit"
        className="
        bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-xl shadow-md
         hover:shadow-lg transition-all active:scale-95 cursor-pointer duration-200
         disabled:opacity-50 disabled:active:scale-100  disabled:cursor-no-drop
         "
      >
        {loading ? (
          <p className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></p>
        ) : (
          "Decode"
        )}
      </button>
    </form>
  );
};

export default Form;
