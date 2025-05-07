# 🛠️ Contribuindo com o projeto

Olá, desenvolvedor(a)! 👋Este guia tem como objetivo padronizar e organizar as contribuições no repositório, facilitando a colaboração, a revisão de código e a integração contínua. Siga estas orientações sempre que for contribuir.

---

## 🚫 O que **não fazer**

- ❌ Nunca trabalhe diretamente nas branches `main`, `staging` ou `dev`.
- ❌ Nunca crie branches sem prefixo.
- ❌ Nunca aprove seu próprio Pull Request.

---

## ✅ Regras de nome de branch

### 🧾 Prefixos obrigatórios

| Prefixo     | Quando usar                                                  | Exemplo prático                |
| ----------- | ------------------------------------------------------------ | ------------------------------ |
| `feat/`     | Quando for adicionar uma **nova funcionalidade**             | `feat/pagina-login`            |
| `fix/`      | Quando for **corrigir um bug**                               | `fix/erro-validacao`           |
| `chore/`    | Quando for uma **tarefa de manutenção ou ajuste**            | `chore/atualiza-dependencias`  |
| `refactor/` | Quando for **reestruturar código sem mudar funcionalidades** | `refactor/melhora-performance` |
| `hotfix/`   | Quando for corrigir um **erro crítico em produção**          | `hotfix/fix-login-prod`        |

> ℹ️ Branches com nome fora desse padrão serão **bloqueadas automaticamente** por uma GitHub Action.

---

## 👣 Passo a passo para contribuir

### 1. Atualize a branch `dev`

```bash
git checkout dev
git pull origin dev
```

### 2. Crie sua branch com o prefixo correto

```bash
git checkout -b feat/nome-da-feature
```

### 3. Faça seus commits com mensagens claras

```bash
git add .
git commit -m "feat: adiciona tela de login com validação"
```

### 4. Envie sua branch para o GitHub

```bash
git push origin feat/nome-da-feature
```

### 5. Crie um Pull Request no GitHub

- Base branch: `dev`
- Compare: `sua-branch`
