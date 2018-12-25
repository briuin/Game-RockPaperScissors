export const CONFIG = {
    NODE_ENV: process.env.NODE_ENV,
    HUB_URL: process.env.VUE_APP_HUB_URL,
};

export const isDevelopmentMode = () => CONFIG.NODE_ENV === 'development';
