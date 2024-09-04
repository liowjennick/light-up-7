## Setup
### Github link: https://github.com/liowjennick/light-up-7
Project is built using Nuxt 3, all pages are statically generated and hosted as static files. Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.


## How to setup the project?
### Dependency
- Node version v20.14.0
- Nuxt 3

### On the base directory
- ```npm install```
- ```npm run dev```

### How to build and host the project?
- On the base directory run ```npm run generate```
- This will generate the output in ```/.output/public```
- Copy and paste the entire folder content to the ftp server

### How to change jobs content / news content / projects content.
- In ```/public/data/``` update the json file's fields accordingly based on the json structure.
- For data not included, the content is within the page itself (index.vue)

### Where is the SEO located?
- Inside each page (index.vue), look for the ```useHead()``` function.

### How to change favicon
- replace the file in ```/public/favicon.ico```

### Where is the html located at?
- Pages of the site is located under the ```/pages``` folder
- Footer and navbar is located under ```/components``` folder

