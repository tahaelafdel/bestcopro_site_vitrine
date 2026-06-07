# Déploiement BestCOPRO Static sur VPS Nginx

## 1. Secrets GitHub Actions

Dans GitHub, ouvrir `Settings > Secrets and variables > Actions`, puis ajouter :

- `VPS_HOST` : IP ou domaine du VPS.
- `VPS_USER` : utilisateur SSH de déploiement.
- `VPS_SSH_KEY` : clé privée SSH autorisée sur le VPS.
- `VPS_PORT` : port SSH, optionnel. Par défaut `22`.
- `VPS_PATH` : dossier de déploiement, optionnel. Par défaut `/var/www/bestcoprostatic`.

Le workflow se lance automatiquement sur chaque push vers `main`, et manuellement via `Actions > Deploy BestCOPRO Static > Run workflow`.

## 2. Préparation du VPS

Installer Nginx et créer le dossier de déploiement :

```bash
sudo apt update
sudo apt install -y nginx
sudo mkdir -p /var/www/bestcoprostatic/releases
sudo chown -R deploy:www-data /var/www/bestcoprostatic
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

Copier `deploy/nginx/bestcoprostatic.conf` sur le VPS :

```bash
sudo cp bestcoprostatic.conf /etc/nginx/sites-available/bestcoprostatic
sudo ln -s /etc/nginx/sites-available/bestcoprostatic /etc/nginx/sites-enabled/bestcoprostatic
sudo nginx -t
sudo systemctl reload nginx
```

Le site sera accessible sur `http://IP_DU_VPS:8090`. Si le firewall est actif, ouvrir le port :

```bash
sudo ufw allow 8090/tcp
```
