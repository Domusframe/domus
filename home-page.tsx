"use client"

import {
  Building2,
  Clock,
  DollarSign,
  Home,
  MapPin,
  Shield,
  Users,
  Zap,
  Mail,
  Instagram,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { QuoteForm } from "@/components/quote-form"

// Função para scroll suave
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

// Função para abrir WhatsApp
const openWhatsApp = () => {
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre as casas modulares da Domus.")
  window.open(`https://wa.me/5511999999999?text=${message}`, "_blank")
}

// Função para solicitar orçamento (scroll para formulário)
const requestQuote = () => {
  scrollToSection("contato")
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white sticky top-0 z-50">
        <Link className="flex items-center justify-center" href="/">
          <Image src="/images/logo.png" alt="Domus Casas Modulares" width={150} height={50} className="h-10 w-auto" />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <button
            onClick={() => scrollToSection("como-trabalhamos")}
            className="text-sm font-medium hover:text-orange-500 transition-colors cursor-pointer"
          >
            Como Trabalhamos
          </button>
          <button
            onClick={() => scrollToSection("projetos")}
            className="text-sm font-medium hover:text-orange-500 transition-colors cursor-pointer"
          >
            Projetos
          </button>
          <button
            onClick={() => scrollToSection("publicos")}
            className="text-sm font-medium hover:text-orange-500 transition-colors cursor-pointer"
          >
            Nossos Públicos
          </button>
          <Link className="text-sm font-medium hover:text-orange-500 transition-colors" href="/trabalhe-conosco">
            Trabalhe Conosco
          </Link>
          <button
            onClick={() => scrollToSection("contato")}
            className="text-sm font-medium hover:text-orange-500 transition-colors cursor-pointer"
          >
            Contato
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="w-full h-screen relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_97C9BB9BACDE-1-zQcNt8VLFgYT1Y5uk9xVamBJldqIF1.jpeg"
            alt="Casa modular moderna Domus com design contemporâneo integrada à natureza"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 container px-4 md:px-6 mx-auto h-full flex items-center">
          <div className="max-w-2xl space-y-6 text-white">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Construímos muito mais que uma casa.
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Construímos <span className="text-orange-400">o seu lar.</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-200 max-w-xl">
                Steel frame e construção off-site com qualidade, rapidez e preço acessível. Em 15 dias você pode estar
                morando em seu novo lar.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                onClick={requestQuote}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg cursor-pointer"
              >
                Solicitar Orçamento
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("projetos")}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg cursor-pointer"
              >
                Ver Projetos
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Como Trabalhamos */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50" id="como-trabalhamos">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900">Como Trabalhamos</h2>
              <p className="text-gray-600 text-xl">
                Nossas casas são construídas off-site, ou seja, fora do canteiro de obras, dentro de uma indústria.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-orange-500 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-orange-500">1</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900">Conversa Inicial</h3>
                <p className="text-gray-600">
                  Entendemos suas necessidades e apresentamos nossas soluções personalizadas.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-orange-500 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-orange-500">2</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900">Apresentação do Projeto</h3>
                <p className="text-gray-600">Detalhamos o projeto e definimos todas as especificações técnicas.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-orange-500 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-orange-500">3</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900">Construção Off-Site</h3>
                <p className="text-gray-600">
                  Produção controlada em ambiente industrial, independente das condições climáticas.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-orange-500 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-orange-500">4</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900">Acabamentos e Entrega</h3>
                <p className="text-gray-600">Finalização e entrega da sua casa pronta para morar em até 15 dias.</p>
              </div>
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
            <div className="flex items-start gap-4">
              <Clock className="h-10 w-10 text-orange-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-orange-800">Rapidez e Previsibilidade</h3>
                <p className="text-orange-700 mt-2">
                  Com isso, faça chuva ou faça sol, cumprimos com nossos prazos e trazemos previsibilidade de custos.
                  <strong className="block mt-2 text-lg">Em 15 dias você pode estar morando em seu novo lar.</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <Button
              onClick={requestQuote}
              className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-6 text-lg cursor-pointer"
            >
              Saiba Mais Sobre Nosso Processo
            </Button>
          </div>
        </div>
      </section>

      {/* Projeto Destaque */}
      <section className="w-full py-12 md:py-24 lg:py-32" id="projetos">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900">Nosso Projeto Modelo</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Casa modular de 2 quartos com sala integrada à cozinha, design moderno e funcional
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-6xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-900">Características do Projeto</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <Home className="h-5 w-5 text-orange-500" />
                  <span>2 quartos + 1 banheiro</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-orange-500" />
                  <span>Sala e cozinha integradas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-orange-500" />
                  <span>Instalações elétricas e hidráulicas completas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-orange-500" />
                  <span>Estrutura em steel frame</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-orange-500" />
                  <span>Entrega em até 15 dias</span>
                </li>
              </ul>
              <Button onClick={requestQuote} className="bg-orange-500 hover:bg-orange-600 cursor-pointer">
                Solicitar Informações
              </Button>
            </div>
            <div className="space-y-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8B1590A96958-1-2dKmbQKQfnjJDXycUIc5TXLa1gSlye.jpeg"
                alt="Planta da casa modular"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Públicos Alvo */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50" id="publicos">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900">Para Quem Construímos</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Atendemos diferentes necessidades habitacionais com soluções modulares personalizadas
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 py-12 md:grid-cols-3">
            {/* Famílias */}
            <div className="flex flex-col h-full">
              <div className="bg-white rounded-t-xl overflow-hidden">
                <div className="bg-blue-900 p-6 text-center">
                  <Users className="mx-auto h-16 w-16 text-orange-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white">Famílias</h3>
                  <p className="text-blue-100 mt-2">Realize o sonho da casa própria e saia do aluguel</p>
                </div>
                <div className="p-6 space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span className="text-gray-700">
                        Financiamento facilitado com parcelas que cabem no seu bolso
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span className="text-gray-700">Entrega em 15 dias, muito mais rápido que o convencional</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span className="text-gray-700">Qualidade garantida com materiais de primeira linha</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span className="text-gray-700">Preço acessível e sem surpresas durante a construção</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-auto pt-4">
                <Button onClick={requestQuote} className="w-full bg-orange-500 hover:bg-orange-600 cursor-pointer">
                  Quero Sair do Aluguel
                </Button>
              </div>
            </div>

            {/* Investidores */}
            <div className="flex flex-col h-full">
              <div className="bg-white rounded-t-xl overflow-hidden">
                <div className="bg-blue-900 p-6 text-center">
                  <DollarSign className="mx-auto h-16 w-16 text-orange-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white">Investidores</h3>
                  <p className="text-blue-100 mt-2">Maximize seu retorno com construção eficiente</p>
                </div>
                <div className="p-6 space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span className="text-gray-700">ROI otimizado com menor tempo de obra e custos reduzidos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span className="text-gray-700">Construção em escala para empreendimentos maiores</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span className="text-gray-700">Previsibilidade total de custos e cronograma</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span className="text-gray-700">Flexibilidade para diferentes modelos de negócio</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-auto pt-4">
                <Button onClick={requestQuote} className="w-full bg-orange-500 hover:bg-orange-600 cursor-pointer">
                  Plano para Investidores
                </Button>
              </div>
            </div>

            {/* Órgãos Públicos */}
            <div className="flex flex-col h-full">
              <div className="bg-white rounded-t-xl overflow-hidden">
                <div className="bg-blue-900 p-6 text-center">
                  <Building2 className="mx-auto h-16 w-16 text-orange-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white">Órgãos Públicos</h3>
                  <p className="text-blue-100 mt-2">Solucione o déficit habitacional do seu município</p>
                </div>
                <div className="p-6 space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span className="text-gray-700">Projetos em larga escala para programas habitacionais</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span className="text-gray-700">Padronização de qualidade em todas as unidades</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span className="text-gray-700">Cronograma confiável para planejamento público</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span className="text-gray-700">Sustentabilidade e eficiência energética</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-auto pt-4">
                <Button onClick={requestQuote} className="w-full bg-orange-500 hover:bg-orange-600 cursor-pointer">
                  Solicitar Projeto
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens Steel Frame */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Vantagens do Steel Frame</h2>
              <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Tecnologia moderna para construção mais rápida, sustentável e econômica
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <Clock className="h-8 w-8 text-orange-500 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white">Rapidez na Construção</h3>
                  <p className="text-blue-100">
                    Construção off-site permite entrega em até 15 dias, muito mais rápido que métodos tradicionais.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <DollarSign className="h-8 w-8 text-orange-500 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white">Previsibilidade de Custos</h3>
                  <p className="text-blue-100">
                    Produção industrial elimina surpresas e garante orçamento fechado desde o início.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Shield className="h-8 w-8 text-orange-500 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white">Qualidade Garantida</h3>
                  <p className="text-blue-100">
                    Produção controlada em ambiente fabril garante padronização e alta qualidade.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <Zap className="h-8 w-8 text-orange-500 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white">Independente do Clima</h3>
                  <p className="text-blue-100">
                    Faça chuva ou faça sol, cumprimos nossos prazos com construção em ambiente controlado.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Home className="h-8 w-8 text-orange-500 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white">Flexibilidade</h3>
                  <p className="text-blue-100">
                    Projetos modulares permitem personalização e futuras ampliações com facilidade.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Building2 className="h-8 w-8 text-orange-500 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white">Durabilidade</h3>
                  <p className="text-blue-100">
                    Estrutura em aço galvanizado garante resistência e longa vida útil da construção.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900" id="contato">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6 text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Vamos realizar seu sonho da casa própria?
                </h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-orange-500" />
                  <div>
                    <p className="font-semibold">Entre em contato:</p>
                    <a
                      href="mailto:comercialdomusframe@gmail.com"
                      className="text-orange-300 hover:text-orange-200 transition-colors"
                    >
                      comercialdomusframe@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-orange-500" />
                  <div>
                    <p className="font-semibold">Horário de funcionamento:</p>
                    <p className="text-gray-300">Segunda a sexta</p>
                    <p className="text-gray-300">Das 08h às 18h</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Instagram className="h-6 w-6 text-orange-500" />
                  <div>
                    <p className="font-semibold">Siga-nos no Instagram</p>
                    <a href="#" className="text-orange-300 hover:text-orange-200 transition-colors">
                      @domusframe
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  onClick={requestQuote}
                  className="bg-orange-500 hover:bg-orange-600 text-white cursor-pointer"
                >
                  Solicitar Orçamento
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={openWhatsApp}
                  className="border-white text-white hover:bg-white hover:text-gray-900 cursor-pointer"
                >
                  Falar no WhatsApp
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <QuoteForm />
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
