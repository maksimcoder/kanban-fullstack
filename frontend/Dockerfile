# используем Node.js 22.15 как базу
FROM node:22.15-alpine

WORKDIR /app

# ставим зависимости
COPY package*.json ./
RUN npm install

# копируем весь фронтенд‑код
COPY . .

# экспонируем порт Vite (по умолчанию 5173)
EXPOSE 5173

# запускаем Vite в режиме разработки, чтобы он слушал на 0.0.0.0
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]