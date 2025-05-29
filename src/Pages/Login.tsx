import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import style from "../styles/globals.module.css"

export default function Login() {
  const { login } = useAuth()
  const [crm, setCrm] = useState("")
  const [senha, setSenha] = useState("")
  const [erro, setErro] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const sucesso = login(crm, senha)
    if (!sucesso) setErro(true)
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form onSubmit={handleSubmit} className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Login</h2>

        {erro && <div className="alert alert-danger">CRM ou senha inválidos</div>}

        <div className="mb-3">
          <label className="form-label">CRM</label>
          <input type="text" className="form-control" value={crm} onChange={(e) => setCrm(e.target.value)} required />
        </div>

        <div className="mb-4">
          <label className="form-label">Senha</label>
          <input type="password" className="form-control" value={senha} onChange={(e) => setSenha(e.target.value)} required />
        </div>

        <button type="submit" className={"btn w-100 " + style.btnCustom}>Entrar</button>
      </form>
    </div>
  )
}