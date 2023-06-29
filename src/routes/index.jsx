import { useRoutes } from "react-router-dom"
import { publicRoutes } from "./publicRoutes"


export const AppRoutes = () => {
    return useRoutes([
        ...publicRoutes,
    ])
}
  