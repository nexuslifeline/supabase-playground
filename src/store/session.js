import { create } from "zustand";

import changeCase from "change-object-case";

changeCase.options = { recursive: true, arrayRecursive: true };

export const useSession = create((set, get) => ({
  session: null,
  setSession: data => set({ session: changeCase.camelKeys(data) }),
  clearSession: () => set({ session: null }),
  getFullName: () => {
    const session = get().session;
    console.log("getFullName", session);
    return (
      session?.user?.userMetadata?.name ||
      session?.user?.userMetadata?.fullName ||
      "Guest"
    );
  },
  getUserInitials: () => {
    const name = get().getFullName();

    if (!name || name === "Guest") return "G";

    const parts = name.trim().split(" ").filter(Boolean);

    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  },
  getEmail: () => {
    const session = get().session;
    return session?.user?.userMetadata?.email || "";
  }
}));
