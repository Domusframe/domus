import type { Metadata } from "next"
import TrabalheConoscoPage from "./trabalhe-conosco-page"

export const metadata: Metadata = {
  title: "Trabalhe Conosco - Domus Casas Modulares",
  description:
    "Faça parte da equipe Domus! Envie seu currículo e venha construir o futuro das casas modulares conosco. Oportunidades em construção civil, vendas, engenharia e mais.",
}

export default function Page() {
  return <TrabalheConoscoPage />
}
