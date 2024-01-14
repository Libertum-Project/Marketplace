FROM node:alpine
WORKDIR /Marketplace
COPY . .
RUN npm install
CMD ["npm", "run", "dev"]
