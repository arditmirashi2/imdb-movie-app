const env = process.env;

export default function getEnvironmentConfiguration() {
    return {
        apiBaseUrl: env.REACT_APP_IMDB_API_BASE_URL as string,
        apiKey: env.REACT_APP_IMDB_API_KEY as string
    }
}