"use client"

import { ArrowLeft, Building2, Users, Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { CurriculumForm } from "@/components/curriculum-form"

export default function TrabalheConoscoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white sticky top-0 z-50">
        <Link className="flex items-center justify-center" href="/">
          <Image src="/images/logo.png" alt="Domus Casas Modulares" width={150} height={50} className="h-10 w-auto" />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-orange-500 transition-colors" href="/">
            Início
          </Link>
          <Link className="text-sm font-medium hover:text-orange-500 transition-colors" href="/#como-trabalhamos">
            Como Trabalhamos
          </Link>
          <Link className="text-sm font-medium hover:text-orange-500 transition-colors" href="/#projetos">
            Projetos
          </Link>
          <Link className="text-sm font-medium hover:text-orange-500 transition-colors" href="/#contato">
            Contato
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-4"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar ao início
            </Link>
            <div className="space-y-2 max-w-3xl">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Trabalhe Conosco</h1>
              <p className="text-blue-100 text-xl">
                Faça parte da equipe que está revolucionando a construção civil no Brasil
              </p>
              <p className="text-blue-200 max-w-2xl mx-auto">
                Na Domus, valorizamos pessoas talentosas e apaixonadas por inovação. Venha construir o futuro das casas
                modulares conosco!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Por que trabalhar na Domus */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-900">
                Por que trabalhar na Domus?
              </h2>
              <p className="text-gray-600 text-lg">
                Oferecemos um ambiente de trabalho inovador e oportunidades de crescimento
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-orange-500 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">Inovação</h3>
                <p className="text-gray-600">Trabalhe com tecnologia de ponta em construção modular e steel frame</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-orange-500 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">Equipe Unida</h3>
                <p className="text-gray-600">Ambiente colaborativo com profissionais experientes e dedicados</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Currículo */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900" id="enviar-curriculo">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6 text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Envie seu Currículo</h2>
                <p className="text-gray-300 text-lg">
                  Interessado em fazer parte da nossa equipe? Envie seu currículo e entraremos em contato!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-orange-500" />
                  <div>
                    <p className="font-semibold">Email para currículos:</p>
                    <a
                      href="mailto:comercialdomusframe@gmail.com"
                      className="text-orange-300 hover:text-orange-200 transition-colors"
                    >
                      comercialdomusframe@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-orange-500" />
                  <div>
                    <p className="font-semibold">Dúvidas sobre vagas:</p>
                    <p className="text-gray-300">Entre em contato conosco</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-800 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2">Dica importante:</h3>
                <p className="text-blue-100 text-sm">
                  Mesmo que não tenhamos uma vaga específica para seu perfil no momento, manteremos seu currículo em
                  nosso banco de talentos para futuras oportunidades.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <CurriculumForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <div className="flex items-center">
          <Image src="/images/logo.png" alt="Domus Casas Modulares" width={100} height={30} className="h-8 w-auto" />
        </div>
        <p className="text-xs text-gray-500 ml-4">© 2024 Domus Casas Modulares. Todos os direitos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500" href="#">
            Termos de Serviço
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500" href="#">
            Privacidade
          </Link>
        </nav>
      </footer>
    </div>
  )
}
