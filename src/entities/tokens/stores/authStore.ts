import { create } from "zustand";

import { persist } from "zustand/middleware";

interface AuthState {
    isLoggedIn: boolean;
    accessToken: string | null;
    setAccessToken: (token: string) => void;
    logout: () => void;
}

export const useAuthStore = create(
    persist(
        (set) => ({
            isLoggedIn: false,
            accessToken: null,
            setAccessToken: (token: string) => {
                set({ isLoggedIn: true, accessToken: token });
            },
            logout: () => {
                set({ isLoggedIn: false, accessToken: null });
            },
        }),
        {
            name: "auth-storage",
            partialize: (state: AuthState) => ({ isLoggedIn: state.isLoggedIn, accessToken: state.accessToken }),
        },
    ),
);
