import Environment from "../config/Environment";

export default function() {
    switch (process.env.REACT_APP_ENV) {
        default:
        case Environment.DEV.value:
            return 'http://localhost:8080';
        case Environment.PROD.value:
            return 'https://lil-develo.com'
    }
}