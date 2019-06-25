FROM node:8.7.0-alpine
RUN mkdir -p /srv/app/movie-search-server
WORKDIR /srv/app/movie-search-server
COPY package.json /srv/app/movie-search-server
COPY package-lock.json /srv/app/movie-search-server
RUN npm install
COPY . /srv/app/movie-search-server
CMD ["npm", "start"]