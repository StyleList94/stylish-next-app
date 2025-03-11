interface EnvVariables {}

declare namespace NodeJS {
  interface ProcessEnv extends EnvVariables {}
}
