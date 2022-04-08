export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000";
const clientId = "8e4a766df6e640ae88d178fc9012efb7";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-playing",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts = item.split('=')
        // TODO: revisit, check the key is string instead
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {})
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join("%20")}&response_type=token&show_dialog=true`;