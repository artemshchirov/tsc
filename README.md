# TYPESCRIPT X GUIDES

## Run project

Most  common practice is that `tsc` is used for production build and `ts-node` for development purposes running in `--watch` mode along with `nodemon`. This is a command for development mode for node/typescript

```json
"dev": "nodemon -w *.ts -e ts -x ts-node --files -H -T ./src/index.ts"
```
