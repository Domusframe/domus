"use client"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Erro do Sistema</h2>
            <p className="text-gray-600 mb-6">Ocorreu um erro crítico. Por favor, recarregue a página.</p>
            <button
              onClick={reset}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md"
            >
              Recarregar página
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
