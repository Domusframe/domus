"use client"
import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { submitCurriculum } from "@/app/actions"

export function CurriculumForm() {
  const [state, action, isPending] = useActionState(submitCurriculum, null)

  return (
    <div className="w-full max-w-md bg-white rounded-lg p-6 shadow-xl">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Enviar Currículo</h3>
      <form action={action} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nome completo *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Seu nome completo"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            E-mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="seu@email.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Telefone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="(11) 99999-9999"
          />
        </div>

        <div>
          <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
            Área de interesse *
          </label>
          <select
            id="position"
            name="position"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Selecione uma área</option>
            <option value="engenharia">Engenharia e Projetos</option>
            <option value="producao">Produção e Qualidade</option>
            <option value="comercial">Comercial e Vendas</option>
            <option value="administrativo">Administrativo</option>
            <option value="logistica">Logística e Montagem</option>
            <option value="marketing">Marketing e TI</option>
            <option value="outros">Outros</option>
          </select>
        </div>

        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
            Experiência profissional
          </label>
          <textarea
            id="experience"
            name="experience"
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Conte-nos sobre sua experiência profissional..."
          />
        </div>

        <div>
          <label htmlFor="curriculum" className="block text-sm font-medium text-gray-700 mb-1">
            Currículo (PDF)
          </label>
          <input
            type="file"
            id="curriculum"
            name="curriculum"
            accept=".pdf"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 file:mr-4 file:py-1 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
          />
          <p className="text-xs text-gray-500 mt-1">Apenas arquivos PDF, máximo 5MB (opcional)</p>
        </div>

        {state && (
          <div
            className={`text-sm p-3 rounded-md ${
              state.success
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            {state.message}
          </div>
        )}

        <Button
          type="submit"
          disabled={isPending}
          className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50"
        >
          {isPending ? "Enviando..." : "Enviar Currículo"}
        </Button>
      </form>
    </div>
  )
}
