# используем Node.js 22.15 как базу
FROM node:22.15-alpine

# рабочая папка внутри контейнера
WORKDIR /usr/src/app

# копируем только package-файлы и сразу ставим зависимости
COPY package*.json ./
RUN npm install

# копируем весь код (но в dev‑режиме мы потом его перемонтируем volume)
COPY . .

# открываем порт, на котором слушает Express
EXPOSE 3001

CMD ["npm", "run", "dev"]