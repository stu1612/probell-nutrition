"use client";

import { create } from "zustand";

type NavState = {
  open: boolean;
  scrolled: boolean;
  toggle: () => void;
  setScrolled: (value: boolean) => void;
  close: () => void;
};

export const useNavStore = create<NavState>((set) => ({
  open: false,
  scrolled: false,
  toggle: () => set((state) => ({ open: !state.open })),
  setScrolled: (value) => set({ scrolled: value }),
  close: () => set({ open: false }),
}));
