import { lazy } from "react"

const LandingPage = lazy(() => import('../modules/LandingPage/LandingPage.jsx'))
const AboutPage = lazy(() => import('../modules/AboutPage/AboutPage.jsx'))

export const publicRoutes = [
    {
        path: '',
        children: [
            {
                path: '',
                element: <LandingPage />,
            },
            {
                path: 'home',
                element: <LandingPage />,
                
            },
            {
                path: 'about-us',
                element: <AboutPage />,
            }
        ]
    }
]