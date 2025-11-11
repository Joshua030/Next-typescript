
# env
NEXTAUTH_SECRET can be generate in this [url](https://generate-secret.vercel.app/32)

# Development
Steps to up the up in development

1. Up the datbase
```
docker compose up -d
```

2. Rename the .env.example a .env
3. Replace the  environment variables
4. Ejecutar el comando ```npm install ```
5. Ejecutar el comando ``` npm run dev ```
6.  ejecutar los comandos de prisma 
```
npx prisma migrate dev
npx prisma generate

```
7. Execute seed to [create the local database](localhost:3000/api/seed)

# Prisma commands
```
npx prisma init
npx prisma migrate dev
npx prisma generate

```
## Nota
usuario: test1@google.com
password: 123456


# Prod


# Stage