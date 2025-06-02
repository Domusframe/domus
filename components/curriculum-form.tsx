"use client"
import { useState } from "react"
import type React from "react"

import { Button } from "@/components/ui/button"

export function CurriculumForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true)

    // Simular um pequeno delay para melhor UX
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset após 5 segundos
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1000)
  }

  if (isSubmitted) {
    return (
      <div className="w-full max-w-md bg-white rounded-lg p-6 shadow-xl">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900">Currículo Enviado!</h3>
          <p className="text-gray-600">
            Recebemos seu currículo. Analisaremos seu perfil e entraremos em contato em breve!
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-md bg-white rounded-lg p-6 shadow-xl">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Enviar Currículo</h3>
      <form
        action="https://formspree.io/f/mpwrzlyq"
        method="POST"
        className="space-y-4"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        {/* Campo hidden para identificar que é um currículo */}
        <input type="hidden" name="tipo_formulario" value="curriculo" />

        <div>
          <label htmlFor="nome_curriculo" className="block text-sm font-medium text-gray-700 mb-1">
            Nome completo *
          </label>
          <input
            type="text"
            id="nome_curriculo"
            name="nome"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Seu nome completo"
          />
        </div>

        <div>
          <label htmlFor="email_curriculo" className="block text-sm font-medium text-gray-700 mb-1">
            E-mail *
          </label>
          <input
            type="email"
            id="email_curriculo"
            name="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="seu@email.com"
          />
        </div>

        <div>
          <label htmlFor="telefone_curriculo" className="block text-sm font-medium text-gray-700 mb-1">
            Telefone/WhatsApp *
          </label>
          <input
            type="tel"
            id="telefone_curriculo"
            name="telefone"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="(XX) XXXXX-XXXX"
          />
        </div>

        <div>
          <label htmlFor="area_interesse" className="block text-sm font-medium text-gray-700 mb-1">
            Área de interesse *
          </label>
          <select
            id="area_interesse"
            name="area_interesse"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="" disabled>
              Selecione uma área
            </option>
            <option value="Engenharia e Projetos">Engenharia e Projetos</option>
            <option value="Produção e Qualidade">Produção e Qualidade</option>
            <option value="Comercial e Vendas">Comercial e Vendas</option>
            <option value="Administrativo">Administrativo</option>
            <option value="Logística e Montagem">Logística e Montagem</option>
            <option value="Marketing e TI">Marketing e TI</option>
            <option value="Outros">Outros</option>
          </select>
        </div>

        <div>
          <label htmlFor="cidade" className="block text-sm font-medium text-gray-700 mb-1">
            Cidade/Estado *
          </label>
          <input
            type="text"
            id="cidade"
            name="cidade"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Sua cidade e estado"
          />
        </div>

        <div>
          <label htmlFor="experiencia" className="block text-sm font-medium text-gray-700 mb-1">
            Experiência profissional
          </label>
          <textarea
            id="experiencia"
            name="experiencia"
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Conte-nos sobre sua experiência profissional..."
          />
        </div>

        <div>
          <label htmlFor="curriculo" className="block text-sm font-medium text-gray-700 mb-1">
            Currículo (PDF)
          </label>
          <input
            type="file"
            id="curriculo"
            name="curriculo"
            accept=".pdf,.doc,.docx"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 file:mr-4 file:py-1 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
          />
          <p className="text-xs text-gray-500 mt-1">PDF, DOC ou DOCX - máximo 5MB (opcional)</p>
        </div>

        <div>
          <label htmlFor="disponibilidade" className="block text-sm font-medium text-gray-700 mb-1">
            Disponibilidade para início
          </label>
          <select
            id="disponibilidade"
            name="disponibilidade"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Selecione</option>
            <option value="Imediata">Imediata</option>
            <option value="15 dias">15 dias</option>
            <option value="30 dias">30 dias</option>
            <option value="A combinar">A combinar</option>
          </select>
        </div>

        <div>
          <label htmlFor="pretensao_salarial" className="block text-sm font-medium text-gray-700 mb-1">
            Pretensão salarial
          </label>
          <select
            id="pretensao_salarial"
            name="pretensao_salarial"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Selecione</option>
            <option value="Até R$ 2.000">Até R$ 2.000</option>
            <option value="R$ 2.000 - R$ 3.000">R$ 2.000 - R$ 3.000</option>
            <option value="R$ 3.000 - R$ 4.000">R$ 3.000 - R$ 4.000</option>
            <option value="R$ 4.000 - R$ 5.000">R$ 4.000 - R$ 5.000</option>
            <option value="R$ 5.000 - R$ 7.000">R$ 5.000 - R$ 7.000</option>
            <option value="Acima de R$ 7.000">Acima de R$ 7.000</option>
            <option value="A combinar">A combinar</option>
          </select>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50"
        >
          {isSubmitting ? "Enviando..." : "Enviar Currículo"}
        </Button>
      </form>
    </div>
  )
}
