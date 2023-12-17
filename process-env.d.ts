declare namespace NodeJS {
  export type ProcessEnv = {
    PORT: number
    DBNAME_URL_LOCAL: string
    DATABASE_URL: string
    NODE_ENV: string
  }
}
