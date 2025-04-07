# Etapa base com Node Alpine
FROM node:20.19.0-alpine

# Define diretório de trabalho no container
WORKDIR /app

# Copia apenas os arquivos de dependência primeiro (para otimizar cache)
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Expõe a porta usada pelo Vite (default: 5173)
EXPOSE 5173

# Comando para rodar a aplicação
CMD ["npm", "run", "dev"]
