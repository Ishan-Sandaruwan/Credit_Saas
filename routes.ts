/**
 * An array of routes that are accessible to the public
 * these routes do not require authentication
 */
export const publicRoutes = ["/"];

/**
 * An array of routes that are used for authentication
 * these route will redirect logged uses to /settings
 * @type {string[]}
 */
export const authRoutes: string[] = ["/auth/login", "/auth/register"];
/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purpose
 * @type {string}
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * The Default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/settings";
