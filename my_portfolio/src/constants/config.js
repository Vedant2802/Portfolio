// Environment variables in Vite must be prefixed with VITE_
export const config = {
  LINKEDIN_URL: import.meta.env.VITE_LINKEDIN_URL,
  GITHUB_URL: import.meta.env.VITE_GITHUB_URL,
  OPEN_API: import.meta.env.VITE_OPEN_AI_KEY,
  // Add other environment variables here
  // VITE_API_URL: import.meta.env.VITE_API_URL,
  // VITE_APP_NAME: import.meta.env.VITE_APP_NAME,
};

// You can also export individual variables for easier access
export const LINKEDIN_URL = config.LINKEDIN_URL;
export const GITHUB_URL = config.GITHUB_URL;
export const OPEN_API_KEY = config.OPEN_API;
