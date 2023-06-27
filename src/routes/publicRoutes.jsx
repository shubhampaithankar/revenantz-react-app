import { lazy } from "react"

const LandingPage = lazy(() => import('../modules/LandingPage/LandingPage.jsx'))

export const publicRoutes = [
    {
        path: '',
        element: <LandingPage />
    }
]