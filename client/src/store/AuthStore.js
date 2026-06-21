import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,

  login: (email, password) => {
    // fake admin login
    if (email === "admin@tnv.com" && password === "123456") {
      const adminUser = { email, role: "admin" };
      set({ user: adminUser });
      return adminUser;
    }

    const normalUser = { email, role: "user" };
    set({ user: normalUser });
    return normalUser;
  },

  register: (email, password) => {
    const newUser = { email, role: "user" };
    set({ user: newUser });
    return newUser;
  },

  logout: () => set({ user: null }),
}));
