"use server"

interface ActionResult {
  success: boolean
  message: string
}

export async function submitQuoteRequest(prevState: ActionResult | null, formData: FormData): Promise<ActionResult> {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const message = formData.get("message") as string

    // Validação básica
    if (!name || !email || !phone) {
      return {
        success: false,
        message: "Por favor, preencha todos os campos obrigatórios.",
      }
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: "Por favor, insira um email válido.",
      }
    }

    // Simular envio de email
    console.log("Enviando solicitação de orçamento para comercialdomusframe@gmail.com")
    console.log({
      to: "comercialdomusframe@gmail.com",
      subject: "Nova Solicitação de Orçamento - Domus Casas Modulares",
      body: `
        Nova solicitação de orçamento recebida:
        
        Nome: ${name}
        Email: ${email}
        Telefone: ${phone}
        Mensagem: ${message || "Não informada"}
        
        Data: ${new Date().toLocaleString("pt-BR")}
      `,
    })

    // Simular delay de envio
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      success: true,
      message: "Solicitação enviada com sucesso! Entraremos em contato em breve.",
    }
  } catch (error) {
    console.error("Erro ao enviar solicitação:", error)
    return {
      success: false,
      message: "Erro ao enviar solicitação. Tente novamente ou entre em contato diretamente.",
    }
  }
}

export async function submitCurriculum(prevState: ActionResult | null, formData: FormData): Promise<ActionResult> {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const position = formData.get("position") as string
    const experience = formData.get("experience") as string
    const curriculum = formData.get("curriculum") as File

    // Validação básica
    if (!name || !email || !phone || !position) {
      return {
        success: false,
        message: "Por favor, preencha todos os campos obrigatórios.",
      }
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: "Por favor, insira um email válido.",
      }
    }

    // Validação do arquivo
    if (curriculum && curriculum.size > 0) {
      if (curriculum.type !== "application/pdf") {
        return {
          success: false,
          message: "Por favor, envie apenas arquivos PDF.",
        }
      }

      if (curriculum.size > 5 * 1024 * 1024) {
        return {
          success: false,
          message: "O arquivo deve ter no máximo 5MB.",
        }
      }
    }

    // Simular envio de email com anexo
    console.log("Enviando currículo para comercialdomusframe@gmail.com")
    console.log({
      to: "comercialdomusframe@gmail.com",
      subject: `Novo Currículo - ${name} - ${position}`,
      body: `
        Novo currículo recebido:
        
        Nome: ${name}
        Email: ${email}
        Telefone: ${phone}
        Área de interesse: ${position}
        Experiência: ${experience || "Não informada"}
        
        ${curriculum && curriculum.size > 0 ? `Arquivo: ${curriculum.name} (${(curriculum.size / 1024 / 1024).toFixed(2)}MB)` : "Nenhum arquivo anexado"}
        
        Data: ${new Date().toLocaleString("pt-BR")}
      `,
    })

    // Simular delay de envio
    await new Promise((resolve) => setTimeout(resolve, 1500))

    return {
      success: true,
      message: "Currículo enviado com sucesso! Analisaremos seu perfil e entraremos em contato.",
    }
  } catch (error) {
    console.error("Erro ao enviar currículo:", error)
    return {
      success: false,
      message: "Erro ao enviar currículo. Tente novamente ou entre em contato diretamente.",
    }
  }
}
