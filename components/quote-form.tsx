"use client"
import { useState } from "react"
import type React from "react"

import { Button } from "@/components/ui/button"

export function QuoteForm() {
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
          <h3 className="text-xl font-bold text-gray-900">Solicitação Enviada!</h3>
          <p className="text-gray-600">Recebemos sua solicitação de orçamento. Entraremos em contato em breve!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-md bg-white rounded-lg p-6 shadow-xl">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Solicite seu Orçamento</h3>
      <form action="https://formspree.io/f/mpwrzlyq" method="POST" className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
            Nome completo *
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Digite seu nome completo"
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
            placeholder="Digite seu e-mail"
          />
        </div>

        <div>
          <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
            Telefone/WhatsApp *
          </label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="(XX) XXXXX-XXXX"
          />
        </div>

        <div>
          <label htmlFor="local_obra" className="block text-sm font-medium text-gray-700 mb-1">
            Local da obra *
          </label>
          <input
            type="text"
            id="local_obra"
            name="local_obra"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Cidade/Estado"
          />
        </div>

        <div>
          <label htmlFor="tipo_projeto" className="block text-sm font-medium text-gray-700 mb-1">
            Tipo de projeto *
          </label>
          <select
            id="tipo_projeto"
            name="tipo_projeto"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="" disabled>
              Selecione
            </option>
            <option value="Residencial">Residencial</option>
            <option value="Comercial">Comercial</option>
            <option value="Outro">Outro</option>
          </select>
        </div>

        <div>
          <label htmlFor="metragem" className="block text-sm font-medium text-gray-700 mb-1">
            Metragem aproximada
          </label>
          <input
            type="text"
            id="metragem"
            name="metragem"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Ex: 90m²"
          />
        </div>

        <div>
          <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">
            Informações adicionais
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Descreva seu projeto ou tire suas dúvidas"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50"
        >
          {isSubmitting ? "Enviando..." : "Solicitar Orçamento"}
        </Button>
      </form>
    </div>
  )
}
