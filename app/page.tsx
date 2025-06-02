import type { Metadata } from "next"
import HomePage from "../home-page"

export const metadata: Metadata = {
  title: "Domus - Casas Modulares | Steel Frame e Construção Off-Site",
  description:
    "Construímos muito mais que uma casa, construímos o seu lar. Steel frame e construção off-site com qualidade, rapidez e preço acessível. Em 15 dias você pode estar morando em seu novo lar.",
}

export default function Page() {
  return <HomePage />
}
