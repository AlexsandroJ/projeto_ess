# Definir a imagem base (usando uma imagem oficial do Node.js)
FROM node:18-alpine

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar o arquivo package.json e package-lock.json para dentro do container
COPY package*.json ./

# Instalar as dependências do app
RUN npm install

# Copiar o código-fonte do app para dentro do container
COPY . .

# Criar a build de produção do Next.js
RUN npm run build

# Expor a porta que o Next.js vai rodar (geralmente 3000)
EXPOSE 3000

# Comando para rodar o app no modo de produção
CMD ["npm", "start"]
