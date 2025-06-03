// API Configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || "https://your-netlify-app-name.netlify.app"

export const API_ENDPOINTS = {
  // Auth endpoints
  LOGIN: `${API_BASE_URL}/api/auth/login`,
  REGISTER: `${API_BASE_URL}/api/auth/register`,
  PROFILE: `${API_BASE_URL}/api/auth/profile`,
  CHANGE_PASSWORD: `${API_BASE_URL}/api/auth/change-password`,

  // Customer endpoints
  CUSTOMERS: `${API_BASE_URL}/api/customer`,
  CUSTOMER_BY_ID: (id) => `${API_BASE_URL}/api/customer/${id}`,
  CUSTOMERS_TOTALS: `${API_BASE_URL}/api/customers/totals`,

  // Admin endpoints
  ADMIN_USERS: `${API_BASE_URL}/api/admin/users`,
  ADMIN_STATS: `${API_BASE_URL}/api/admin/stats`,

  // Health check
  HEALTH: `${API_BASE_URL}/health`,
}

export default API_BASE_URL
