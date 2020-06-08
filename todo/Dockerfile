FROM node:12.2.0

RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -yq --allow-unauthenticated google-chrome-stable
# RUN npm install -g yarn

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN npm install

RUN npm install -g @angular/cli@7.3.9

# ENV PATH="./node_modules/.bin:$PATH" 

COPY . /app
CMD ng serve --host 0.0.0.0
# RUN ng build --prod

# FROM nginx
# COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=compile-image /opt/ng/dist/app-name /usr/share/nginx/html
