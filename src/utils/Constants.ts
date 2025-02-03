/// <reference path="../../node_modules/@types/react-native/index.d.ts" />

const Constants = {
  // App Version
  APP_VERSION: "1.0.0",

  // Screens
  SCREENS: {
    HOME: "Home",
    LIBRARY: "Library",
    SEARCH: "Search",
    SOCIAL: "Social",
    PLAYER: "Player",
  },

  // Storage Keys
  STORAGE_KEYS: {
    USER_TOKEN: "userToken",
    PLAYLISTS: "playlists",
    FAVORITES: "favorites",
    HISTORY: "history",
  },

  // API
  API: {
    BASE_URL: "https://spotify-clone-api.herokuapp.com/",
    TIMEOUT: 10000,
  },
};

export default Constants;