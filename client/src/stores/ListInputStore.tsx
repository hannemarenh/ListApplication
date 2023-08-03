import { create } from "zustand";

type ListStatus = "updated" | "outdated";

type ListAndInputStoreProps = {
    listStatus: ListStatus;
    setListStatus: (newListStatus: ListStatus) => void
}

export const useListAndInputStore = create<ListAndInputStoreProps>()((set) => ({
    listStatus: "outdated",
    setListStatus: (newListStatus: ListStatus) => set({ listStatus: newListStatus })
}))