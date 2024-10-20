FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Sao chép toàn bộ thư mục src vào thư mục làm việc
COPY src/ ./src

# Chuyển vào thư mục src để chạy ứng dụng
CMD ["node", "src/app.js"]

EXPOSE 3000
