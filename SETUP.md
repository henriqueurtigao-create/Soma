# Fluxo da Casa — como colocar no ar

São 4 etapas: criar o Firebase, colar a configuração, publicar no GitHub Pages e fazer o primeiro acesso. Leva uns 20 minutos.

## 1. Criar o projeto no Firebase (gratuito)

1. Entre em https://console.firebase.google.com com sua conta Google.
2. **Adicionar projeto** → nome `fluxo-da-casa` → pode desativar o Google Analytics → **Criar projeto**.
   Use um projeto novo, separado do Urtigão: são dados financeiros da família.

**Login por e-mail e senha**
3. Menu **Criação › Authentication** → **Vamos começar** → aba **Método de login** → **E-mail/senha** → ative a primeira chave → **Salvar**.
4. Ainda em Authentication, aba **Configurações › Domínios autorizados** → **Adicionar domínio** → `luizmartinhagom-cell.github.io`.

**Banco de dados**
5. Menu **Criação › Firestore Database** → **Criar banco de dados** → local `southamerica-east1 (São Paulo)` → **modo de produção** → **Criar**.
6. Aba **Regras** → apague tudo → cole o conteúdo do arquivo `firestore.rules` → **Publicar**.
   Essas regras garantem que só os e-mails liberados por você leem e lançam despesas.

## 2. Colar a configuração no app

7. Ícone de engrenagem › **Configurações do projeto** → em **Seus apps**, clique no ícone **</>** (Web) → apelido `Fluxo da Casa` → **Registrar app** (não precisa marcar Hosting).
8. Aparece um bloco `const firebaseConfig = { apiKey: ..., authDomain: ..., ... }`.
9. Abra o `index.html` e procure por `COLE_AQUI`. Troque o bloco `FIREBASE_CONFIG` pelos valores que apareceram (apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId).
   Se preferir, me mande esse bloco que eu devolvo o `index.html` pronto.

Essas chaves não são senha: o Firebase foi feito para elas ficarem no código. Quem protege os dados são as regras do passo 6.

## 3. Publicar no GitHub Pages

10. Em https://github.com/new crie o repositório `fluxo-da-casa` (público).
11. **Add file › Upload files** → envie: `index.html`, `sw.js`, `manifest.webmanifest`, `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png` → **Commit changes**.
    (Os arquivos `firestore.rules` e `SETUP.md` não precisam ir para o GitHub.)
12. **Settings › Pages** → Source: **Deploy from a branch** → Branch `main`, pasta `/ (root)` → **Save**.
13. Em 1 ou 2 minutos o app fica em: **https://luizmartinhagom-cell.github.io/fluxo-da-casa/**

## 4. Primeiro acesso

14. **Você entra primeiro.** Abra o link → **Primeiro acesso? Criar conta** → seu e-mail e uma senha → confirme o e-mail pelo link que chega (veja o spam) → **Já confirmei**.
    A primeira pessoa a entrar vira o **administrador**.
15. Para liberar a Ana Paula: **Ajustes › Quem acompanha** → digite o e-mail dela → **Liberar acesso**. Mande o link do app para ela: ela toca em **Criar conta** com esse mesmo e-mail, escolhe a senha dela e confirma o e-mail.
16. Em **Quem acompanha** você também escolhe quem **lança** e quem **só vê**, e remove acessos.

## Instalar no celular

- **iPhone (Safari):** abra o link → botão Compartilhar → **Adicionar à Tela de Início**.
- **Android (Chrome):** abra o link → menu ⋮ → **Instalar app** (ou Adicionar à tela inicial).

O app abre em tela cheia, com o ícone do Fluxo da Casa. Funciona sem internet: mostra os dados salvos no aparelho e envia o que for lançado quando a conexão voltar.

## Atualizações

Para publicar uma versão nova, suba o `index.html` novo no mesmo repositório (o GitHub substitui o antigo). Se o celular continuar mostrando a versão anterior, feche o app e abra de novo.

## Bom saber

- **Esqueci a senha:** na tela de entrada, digite o e-mail e toque em **Esqueci minha senha**.
- **PIN:** em Ajustes, cada pessoa pode criar um PIN de 4 números para travar a tela no celular. A senha continua sendo o que protege a conta.
- Os lançamentos feitos na versão de teste dentro do claude.ai não passam sozinhos para este app.
