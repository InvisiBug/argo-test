FROM arm64v8/node:14
WORKDIR /src
COPY . .
RUN yarn install
EXPOSE 3000
CMD yarn start