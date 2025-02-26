# mvc_express

# 🚀 Gerador Automático de Model, Controller para Express + MongoDB  

> **Automatize a criação de estrutura MVC no seu backend Node.js com apenas um comando!**  
> Este script CLI gera automaticamente **Model e Controller** para facilitar o desenvolvimento de APIs com **Express e Mongoose**.

---

## 📖 **Índice**
- [Sobre o Projeto](#sobre-o-projeto)
- [Demonstração](#demonstração)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Contribuindo](#contribuindo)
- [Licença](#licença)
- [Contato](#contato)

---

## 📜 **Sobre o Projeto**
Criar **modelos e controladores manualmente** no Express pode ser repetitivo. Este script automatiza essa tarefa, gerando toda a estrutura do backend em **segundos** com um simples comando.  

**✅ O que ele faz?**  
- Cria automaticamente o **Model (Mongoose)**  
- Cria o **Controller (CRUD básico)**  

**🔹 Para quem é destinado?**  
- Desenvolvedores que trabalham com **Node.js, Express e MongoDB**  
- Quem deseja acelerar a criação de APIs RESTful  
- Projetos que seguem a arquitetura **MVC**  

---

## 🎥 **Demonstração**
Criação automática de uma estrutura **Model-Controller** com o script CLI:  

```sh
node mvc_express.js -mc <nome>
```
## 🛠 **Tecnologias Utilizadas**
⚙️ Backend: Node.js, Express, Mongoose
🔗 Banco de Dados: MongoDB
🛠 Ferramentas: dotenv, cors, morgan

## 📂 **Estrutura de Pastas**
📂 projeto/
 ├── 📂 models/             # Modelos Mongoose (MongoDB)
 │   ├── Usuario.js
 │
 ├── 📂 controllers/        # Controllers (Lógica CRUD)
 │   ├── UsuarioController.js
 │
 ├── 📂 routes/             # Rotas Express
 │   ├── main.js
 │
 ├── server.js              # Servidor Express
 ├── mvc_express.js         # Script CLI para gerar Model, Controller 
 ├── .env                   # Configuração do MongoDB
 ├── package.json           # Dependências do projeto

## 🛠 **Contribuindo**
Contribuições são bem-vindas! Sinta-se à vontade para abrir um issue ou pull request .

1️⃣ Fork o repositório.
2️⃣ Crie uma branch com seu feature ( git checkout -b minha-feature).
3️⃣ Commit suas mudanças ( git commit -m 'Adicionei minha feature').
4️⃣ Push para uma branch ( git push origin minha-feature).
5️⃣ Abra um Pull Request 🚀.

## 📜 **Licença**
Este projeto está sob a Licença MIT – veja o arquivo LICENSE para mais detalhes.

## 📬 **Contato**
- 🔗 Conecte-se comigo no LinkedIn : [delciomonarca](www.linkedin.com/in/délcio-dulo-b74115249).
- 🔗 Conecte-se comigo no Instagram : [delciomonarca](https://www.instagram.com/delciomonarca/).
- 📧 E-mail: delciomanico2003@gmail.com.


