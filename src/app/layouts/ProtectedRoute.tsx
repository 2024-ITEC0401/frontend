import { Navigate } from "react-router-dom";

import { useAuthStore } from "@/entities/tokens/stores/authStore";

interface ProtectedRouteProps {
    children: JSX.Element;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { isLoggedIn } = useAuthStore();

    if (!isLoggedIn) {
        return <Navigate to="/auth/signin" replace />;
    }

    return children;
};
