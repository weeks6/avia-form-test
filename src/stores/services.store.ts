import { create } from "zustand";
import type { AviaService } from "./types";
import { MOCK_LIST } from "./mock";

interface ServiceState {
  available: AviaService[];
}

const useServiceStore = create<ServiceState>()(() => ({
  available: JSON.parse(JSON.stringify(MOCK_LIST)),
}));

export default useServiceStore;
