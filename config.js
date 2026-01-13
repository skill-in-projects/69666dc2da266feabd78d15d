// API Configuration
// Backend service URL (automatically configured)
const CONFIG = {
    API_URL: "https://webapi69666dc2da266feabd78d15d-production.up.railway.app"
};

// Ensure CONFIG is globally accessible
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}
