import { create } from "zustand";
import { persist } from "zustand/middleware";

const LOCAL_STORAGE = "vin-storage";

interface VinResult {
  Variable: string;
  Value: string;
  VariableId: number;
}

interface VinState {
  // Variables:
  results: VinResult[];
  history: string[];
  loading: boolean;
  error: string | null;

  //   Functions:
  decodeVin: (vin: string) => Promise<void>;
  removeVin: (vin: string) => void;
}

export const useVinStore = create<VinState>()(
  persist(
    (set) => ({
      results: [],
      history: [],
      loading: false,
      error: null,

      decodeVin: async (vin: string) => {
        try {
          set({ loading: true, error: null });

          const response = await fetch(
            `https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`,
          );
          if (!response.ok) throw new Error("Failed to decode VIN");
          const data = await response.json();
          const filterData = data.Results.filter(
            (item: any) => item.Value && item.Variable !== "",
          );

          set((state) => ({
            history: [vin, ...state.history.filter((h) => h !== vin)].slice(
              0,
              3,
            ),
            results: filterData,
          }));
        } catch (error) {
          set({ error: "Something went wrong" });
        } finally {
          set({ loading: false });
        }
      },

      removeVin: (vin: string) =>
        set((state) => ({
          history: state.history.filter((item) => item !== vin),
        })),
    }),

    {
      name: LOCAL_STORAGE,
      partialize: (state) => ({
        history: state.history,
      }),
    },
  ),
);
