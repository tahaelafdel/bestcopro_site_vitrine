# Déploiement BestCOPRO sur VPS Nginx

## 1. Secrets GitHub Actions

Dans GitHub, ouvrir `Settings > Secrets and variables > Actions`, puis ajouter :

- `VPS_HOST` : IP ou domaine du VPS.
- `VPS_USER` : utilisateur SSH de déploiement.
- `VPS_SSH_KEY` : clé privée SSH autorisée sur le VPS.
- `VPS_PORT` : port SSH, optionnel. Par défaut `22`.
- `VPS_PATH` : dossier de déploiement, optionnel. Par défaut `/var/www/bestcopro`.

Le workflow se lance automatiquement sur chaque push vers `main`, et manuellement via `Actions > Deploy BestCOPRO > Run workflow`.

## 2. Préparation du VPS

Installer Nginx et créer le dossier de déploiement :

```bash
sudo apt update
sudo apt install -y nginx
sudo mkdir -p /var/www/bestcopro/releases
sudo chown -R deploy:www-data /var/www/bestcopro
```

Remplacer `deploy` par le nom de l'utilisateur défini dans `VPS_USER`.

Pour permettre au workflow de recharger Nginx sans mot de passe :

```bash
sudo visudo
```

Ajouter cette ligne en adaptant l'utilisateur :

```bash
deploy ALL=(root) NOPASSWD: /usr/sbin/nginx, /bin/systemctl reload nginx
```

## 3. Configuration Nginx

Copier `deploy/nginx/bestcopro.conf` sur le VPS :

```bash
sudo cp bestcopro.conf /etc/nginx/sites-available/bestcopro
sudo ln -s /etc/nginx/sites-available/bestcopro /etc/nginx/sites-enabled/bestcopro
sudo nginx -t
sudo systemctl reload nginx
```

Modifier `server_name` dans le fichier Nginx avec le vrai domaine si nécessaire.

## 4. HTTPS

Une fois le domaine pointé vers le VPS :

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d bestcopro.ma -d www.bestcopro.ma
```
