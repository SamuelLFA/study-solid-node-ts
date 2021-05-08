import env from 'env-var'

const settings = {
    mailtrapHost: env.get('MAILTRAP_HOST').required().asString(),
    mailtrapPort: env.get('MAILTRAP_PORT').required().asPortNumber(),
    mailtrapAuthUser: env.get('MAILTRAP_AUTH_USER').required().asString(),
    mailtrapAuthPass: env.get('MAILTRAP_AUTH_PASS').required().asString()
}

export { settings }