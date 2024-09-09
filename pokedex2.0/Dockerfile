# Use a imagem base oficial do Node.js
FROM node:18-alpine

# Crie e defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos de configuração da aplicação para o contêiner
COPY package*.json ./

# Instale as dependências (Next.js e Axios serão instalados aqui)
RUN npm install

# Copie o código da aplicação para o contêiner
COPY . .

# Exponha a porta da aplicação (Next.js usa a 3000 por padrão)
EXPOSE 3000

# Defina o comando padrão para iniciar o servidor em modo de desenvolvimento
CMD ["npm", "run", "dev"]
