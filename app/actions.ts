"use server"

interface ActionResult {
  success: boolean
  message: string
}

// IMPORTANTE: Este código está simulando o envio de emails
// Para receber emails reais, você precisa configurar um serviço como:
// - Resend (recomendado para Next.js)
// - SendGrid
// - Nodemailer com SMTP
// - AWS SES

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

    // ATENÇÃO: Atualmente apenas simulando o envio
    // Os dados estão sendo logados no console do servidor
    console.log("=== NOVA SOLICITAÇÃO DE ORÇAMENTO ===")
    console.log("Para:", "comercialdomusframe@gmail.com")
    console.log("Nome:", name)
    console.log("Email:", email)
    console.log("Telefone:", phone)
    console.log("Mensagem:", message || "Não informada")
    console.log("Data:", new Date().toLocaleString("pt-BR"))
    console.log("=====================================")

    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      success: true,
      message:
        "Solicitação registrada! Entraremos em contato em breve. (Nota: Configure um serviço de email para receber as mensagens)",
    }
  } catch (error) {
    console.error("Erro ao processar solicitação:", error)
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

    // Validação do arquivo (se fornecido)
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

    // ATENÇÃO: Atualmente apenas simulando o envio
    console.log("=== NOVO CURRÍCULO RECEBIDO ===")
    console.log("Para:", "comercialdomusframe@gmail.com")
    console.log("Nome:", name)
    console.log("Email:", email)
    console.log("Telefone:", phone)
    console.log("Área:", position)
    console.log("Experiência:", experience || "Não informada")
    if (curriculum && curriculum.size > 0) {
      console.log("Arquivo:", curriculum.name, `(${(curriculum.size / 1024 / 1024).toFixed(2)}MB)`)
    }
    console.log("Data:", new Date().toLocaleString("pt-BR"))
    console.log("===============================")

    await new Promise((resolve) => setTimeout(resolve, 1500))

    return {
      success: true,
      message:
        "Currículo registrado! Analisaremos seu perfil e entraremos em contato. (Nota: Configure um serviço de email para receber os currículos)",
    }
  } catch (error) {
    console.error("Erro ao processar currículo:", error)
    return {
      success: false,
      message: "Erro ao enviar currículo. Tente novamente ou entre em contato diretamente.",
    }
  }
}
