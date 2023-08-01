import { create }  from "zustand";

type ListAndInputStoreProps = {
    updateList: boolean,
    setUpdateList: (newState: boolean) => void;
}

export const useListAndInputStore = create<ListAndInputStoreProps>()((set) => ({
    updateList: false,
    setUpdateList: (newState: boolean) => set(({ updateList: newState })),
}))