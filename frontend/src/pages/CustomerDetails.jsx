

import { useEffect, useState } from "react"
import { API_ENDPOINTS } from "../config/api"

const CustomerDetails = () => {
  const [customerCount, setCustomerCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const fetchCustomerCount = async () => {
    try {
      setLoading(true)
      setError("")

      const response = await fetch(API_ENDPOINTS.CUSTOMERS)
      if (!response.ok) {
        throw new Error("Failed to fetch customer data")
      }

      const customers = await response.json()
      setCustomerCount(customers.length)
    } catch (error) {
      console.error("Error fetching customer count:", error)
      setError("Failed to load customer count. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCustomerCount()
  }, [])

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              border: "4px solid #f3f3f3",
              borderTop: "4px solid #3498db",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
              margin: "0 auto 1rem",
            }}
          ></div>
          <p>Loading customer count...</p>
        </div>
      </div>
    )
  }

  return (
    <div
      style={{
        padding: "2rem",
        textAlign: "center",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "1rem",
          color: "#333",
        }}
      >
        👥 Customers
      </h1>
      <p
        style={{
          fontSize: "1.25rem",
          color: "#666",
          marginBottom: "2rem",
        }}
      >
        Total customer count
      </p>

      {error ? (
        <div
          style={{
            backgroundColor: "#fee",
            color: "#c33",
            padding: "1rem",
            borderRadius: "8px",
            marginBottom: "2rem",
            border: "1px solid #fcc",
          }}
        >
          ⚠️ {error}
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            padding: "3rem",
            margin: "2rem auto",
            maxWidth: "400px",
          }}
        >
          <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>👥</div>
          <div
            style={{
              fontSize: "4rem",
              fontWeight: "bold",
              color: "#3498db",
              marginBottom: "1rem",
            }}
          >
            {customerCount}
          </div>
          <p
            style={{
              fontSize: "1.25rem",
              color: "#666",
            }}
          >
            Total Customers
          </p>
        </div>
      )}

      <button
        onClick={fetchCustomerCount}
        style={{
          padding: "0.75rem 1.5rem",
          backgroundColor: "#3498db",
          color: "white",
          border: "none",
          borderRadius: "6px",
          fontSize: "1rem",
          cursor: "pointer",
          marginTop: "1rem",
        }}
      >
        🔄 Refresh Count
      </button>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export default CustomerDetails
