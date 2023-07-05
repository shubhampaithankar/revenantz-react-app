import { lazy } from 'react'

const LandingPage = lazy(() =>  import('./LandingPage/LandingPage.jsx'))
const AboutPage = lazy(() =>  import('./AboutPage/AboutPage.jsx'))
const ServerListPage = lazy(() =>  import('./ServerListPage/ServerListPage.jsx'))
const NotFoundPage = lazy(() =>  import('./NotFoundPage/NotFoundPage.jsx'))

export { LandingPage, AboutPage, ServerListPage, NotFoundPage }