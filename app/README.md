# Litter- Free Kenya

1. INstall Node.js and npm

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
source ~/.bashrc
nvm install 18  # Install Node.js version 18 (or the latest LTS version)
nvm use 18
```
2. CLone project Repo
```
git clone https://github.com/FredMunene/litter-free-kenya.git
cd litter-free-kenya
```
3. Install project dependencies
```
npm install
```
4. Build the project
```
npm run build
```
5. Start the production server
```
npm start
```
Run the development server with fast reloading
```
npm run dev
```
6. Open a web browser and navigate to `http://localhost:3000` to view the website.

If you want to make the site accessible on a specific IP or all network interfaces, you can modify the `package.json` file:

```
"scripts": {
  "dev": "next dev -H 0.0.0.0",
  "start": "next start -H 0.0.0.0"
}
```