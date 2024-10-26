FROM node:20.8.0 as builder

ARG VITE_BASE_API_URL
ENV VITE_BASE_API_URL=$VITE_BASE_API_URL

COPY ./web /opt/web
WORKDIR /opt/web
RUN npm ci 
RUN npm run build 

FROM node:20.8.0-alpine3.18

COPY ./api /opt/tarbot
WORKDIR /opt/tarbot
COPY --from=builder /opt/web/dist /opt/tarbot/web/build
RUN npm ci --only=production

EXPOSE 3000

CMD ["npm", "start"]