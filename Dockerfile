# Sử dụng image Node.js phiên bản 14 làm image cơ sở
FROM node:14

# Thiết lập thư mục làm việc cho ứng dụng
WORKDIR /usr/src/app

# Sao chép các file package.json và package-lock.json (nếu có) vào container
COPY package*.json ./

# Cài đặt các dependencies từ package.json
RUN npm install

# Sao chép toàn bộ mã nguồn vào thư mục làm việc của container
COPY . .

# Mở cổng 3000 để ứng dụng có thể truy cập từ bên ngoài container
EXPOSE 3000

# Khởi chạy ứng dụng với file app.js
CMD ["node", "app.js"]
