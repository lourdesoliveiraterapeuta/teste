# Lourdes Oliveira Terapeuta - Website Institucional

Website moderno, leve, elegante, responsivo e acolhedor para **Lourdes Oliveira Terapeuta** (Psicóloga - CRP 05/85187).

O projeto foi construído com **HTML, CSS e JavaScript puros**, permitindo publicação direta e instantânea no **GitHub Pages** sem qualquer dependência de Node.js, banco de dados ou processos complexos de build.

---

## 📌 Informações Gerais

- **Nome Profissional:** Lourdes Oliveira
- **CRP:** 05/85187
- **Atuação:** Psicologia / Terapia Cognitivo-Comportamental (TCC)
- **Localidade:** Rio de Janeiro - RJ
- **Atendimento:** Online e Presencial
- **Público:** Mulheres, Homens, Adultos e Idosos
- **Empresas:** Atendimento corporativo para empresas e equipes
- **WhatsApp:** (21) 98734-3399
- **Domínio Oficial:** https://www.lourdesoliveiraterapeuta.com.br
- **Redes Sociais:** `@lourdesoliveiraterapeuta` (Instagram, Facebook, TikTok, X, YouTube)

---

## 🎨 Identidade Visual e Cores

O projeto adota uma paleta suave e acolhedora, priorizando acessibilidade e alto contraste (WCAG AA):

- **Verde sálvia:** `#8FA89A`
- **Verde profundo:** `#40584D`
- **Off-white:** `#F8F6F1`
- **Areia:** `#DED5C6`
- **Grafite:** `#303330`
- **Tipografia:** Playfair Display (Títulos) e Inter (Textos)

---

## 📂 Estrutura de Arquivos

```
/
├── index.html                  # Página principal do site
├── 404.html                    # Página personalizada de erro 404
├── CNAME                       # Apontamento de domínio próprio para o GitHub Pages
├── logo.png                    # Logotipo oficial (PNG)
├── previa.png                  # Imagem de pré-visualização para redes sociais (Open Graph / WhatsApp)
├── home.png                    # Ilustração minimalista para o topo/hero
├── rodape.png                  # Monograma do rodapé
├── site.webmanifest            # Manifesto Web App
├── sitemap.xml                 # Sitemap XML para motores de busca
├── robots.txt                  # Instruções para rastreadores de busca e IA (GEO)
├── css/
│   └── style.css               # Estilos, variáveis de design e responsividade
├── js/
│   └── script.js               # Interatividade JS (menu mobile, scroll, FAQ)
├── img/
│   ├── lourdes-oliveira.jpg    # Foto da Lourdes Oliveira
│   └── ambiente-consultorio.jpg# Imagem do ambiente de atendimento
└── README.md                   # Documentação completa do projeto
```

---

## 🚀 Como Publicar no GitHub Pages

1. Crie um novo repositório no seu GitHub (exemplo: `lourdes-oliveira-site`).
2. Envie todos os arquivos do projeto para o repositório (`git push origin main`).
3. No GitHub, acesse a aba **Settings** (Configurações) do repositório.
4. No menu lateral esquerdo, clique em **Pages**.
5. Em **Build and deployment**, selecione a branch `main` e a pasta `/ (root)`.
6. Clique em **Save**. Em instantes seu site estará no ar!

---

## 🌐 Configuração do Domínio Próprio (`www.lourdesoliveiraterapeuta.com.br`)

O arquivo `CNAME` na raiz do repositório já contém o valor:
```
www.lourdesoliveiraterapeuta.com.br
```

### Configuração de DNS no seu registrador (Registro.br ou similar):

1. **Registros A (para o domínio raiz sem 'www'):**
   Aponto o domínio `lourdesoliveiraterapeuta.com.br` para os IPs do GitHub Pages:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

2. **Registro CNAME (para o subdomínio 'www'):**
   - **Nome / Host:** `www`
   - **Tipo:** `CNAME`
   - **Valor / Destino:** `<seu-usuario-github>.github.io`

3. **No painel do GitHub Pages:**
   - Em **Custom domain**, confirme se está preenchido `www.lourdesoliveiraterapeuta.com.br`.
   - Marque a opção **Enforce HTTPS** após a propagação dos certificados SSL.

---

## 🖼️ Como Alterar a Foto da Lourdes e Textos Futuramente

- **Trocar a foto da Lourdes:**
  Substitua o arquivo localizado em `img/lourdes-oliveira.jpg` por uma nova foto.
  Recomenda-se manter a proporção retrato (3:4) e dimensão próxima de 800x1066px.

- **Atualizar o número de WhatsApp:**
  Caso precise alterar o número, abra os arquivos `index.html` e `404.html` e substitua as ocorrências do link `https://wa.me/5521987343399` e o texto `(21) 98734-3399`.

- **Editar textos e informações:**
  Todos os conteúdos do site estão organizados de forma clara e limpa no arquivo `index.html`.
