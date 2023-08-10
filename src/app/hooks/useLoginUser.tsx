import { create } from "zustand";
import { User } from "../types";

type LoginUser = {
  currentUser?: User;
  login: (currentUser: User) => void;
  logout: () => void;
}

const useLoginUser = create<LoginUser>((set) => ({
  currentUser: undefined,
  login: (currentUser: User) => set({ currentUser}),
  logout: () => set({ currentUser: undefined })
}))

export default useLoginUser;
