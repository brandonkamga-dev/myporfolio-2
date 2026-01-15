# 1- Stage Build avec Node
FROM node:20-alpine AS build

# Dossier de travail dans le container
WORKDIR /usr/src/app

# Copier package.json et package-lock.json/pnpm-lock.yaml
COPY package*.json ./
COPY pnpm-lock.yaml ./

# Installer les dépendances
RUN npm install

# Copier tout le code source
COPY . .

# Compiler le projet pour la production
RUN npm run build

# 2- Stage Production avec Nginx
FROM nginx:alpine

# Supprimer la config par défaut
RUN rm -rf /usr/share/nginx/html/*

# Copier les fichiers compilés depuis le build
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Copier un fichier nginx.conf personnalisé (optionnel)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 80
EXPOSE 80

# Lancer Nginx en mode foreground
CMD ["nginx", "-g", "daemon off;"]
