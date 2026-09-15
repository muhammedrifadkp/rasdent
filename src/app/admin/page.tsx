"use client";

import React, { useState, useEffect, useTransition } from "react";
import "./admin.css";

interface Appointment {
  id: number;
  name: string;
  phone: string;
  message: string;
  status: "Pending" | "Confirmed" | "Completed" | "Cancelled";
  date: string;
  doctor: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, startLoginTransition] = useTransition();

  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState("");

  // Views & Filters
  const [viewMode, setViewMode] = useState<"table" | "calendar" | "analytics">("table");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Calendar State
  const [calendarYear, setCalendarYear] = useState(new Date().getFullYear());
  const [calendarMonth, setCalendarMonth] = useState(new Date().getMonth()); // 0-indexed

  // Edit Modal State
  const [editingAppointment, setEditingAppointment] = useState<Appointment | null>(null);
  const [editForm, setEditForm] = useState<Partial<Appointment>>({});
  const [isSaving, setIsSaving] = useState(false);

  // Delete Confirm State
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Toast Notification State
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

  const showToast = (message: string, type: "success" | "error" = "success") => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  // Helper to parse dates safely across formats
  const parseAppDate = (dateStr: string): Date | null => {
    if (!dateStr) return null;
    const parsed = Date.parse(dateStr);
    if (!isNaN(parsed)) return new Date(parsed);

    // Handle DD/MM/YYYY format
    const parts = dateStr.split(/[/\s:]/);
    if (parts.length >= 3) {
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
        return new Date(year, month, day);
      }
    }
    return null;
  };

  // Helper to normalize the keys coming from Google Sheets API
  const normalizeData = (rawList: any[]): Appointment[] => {
    return rawList.map((app) => {
      const getVal = (keys: string[]): string => {
        for (const k of keys) {
          if (app[k] !== undefined) return String(app[k]);
          const foundKey = Object.keys(app).find(
            (x) => x.toLowerCase() === k.toLowerCase()
          );
          if (foundKey && app[foundKey] !== undefined) return String(app[foundKey]);
        }
        return "";
      };

      const rawStatus = getVal(["status"]);
      let status: Appointment["status"] = "Pending";
      if (["pending", "confirmed", "completed", "cancelled"].includes(rawStatus.toLowerCase())) {
        status = (rawStatus.charAt(0).toUpperCase() + rawStatus.slice(1).toLowerCase()) as Appointment["status"];
      }

      return {
        id: Number(app.id || getVal(["id"])),
        name: getVal(["name"]),
        phone: getVal(["phone"]),
        message: getVal(["message"]),
        status,
        date: getVal(["date", "timestamp", "createdat"]),
        doctor: getVal(["doctor", "assigneddoctor", "doctorassigned"]),
      };
    });
  };

  useEffect(() => {
    const savedSession = sessionStorage.getItem("admin_session");
    if (savedSession === "authenticated") {
      setIsAuthenticated(true);
      fetchAppointments();
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const fetchAppointments = async () => {
    if (!scriptUrl) {
      setFetchError("Google Sheets Script URL is not configured in environment variables.");
      return;
    }

    setIsLoading(true);
    setFetchError("");
    try {
      const res = await fetch(scriptUrl, {
        method: "GET",
        mode: "cors",
      });

      if (!res.ok) {
        throw new Error(`Google Sheets API returned status ${res.status}`);
      }

      const result = await res.json();
      if (result.success && Array.isArray(result.data)) {
        setAppointments(normalizeData(result.data));
      } else {
        throw new Error(result.error || "Failed to fetch appointments");
      }
    } catch (err: any) {
      setFetchError(err.message || "An unexpected error occurred while connecting to Google Sheets.");
      showToast(err.message || "Failed to retrieve appointments", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");

    if (!password) {
      setLoginError("Please enter password.");
      return;
    }

    startLoginTransition(async () => {
      const correctPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

      if (!correctPassword) {
        setLoginError("Admin password configuration is missing on the client.");
        return;
      }

      if (password === correctPassword) {
        sessionStorage.setItem("admin_session", "authenticated");
        setIsAuthenticated(true);
        setTimeout(() => {
          fetchAppointments();
        }, 100);
      } else {
        setLoginError("Incorrect password.");
      }
    });
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_session");
    setIsAuthenticated(false);
    setAppointments([]);
    setPassword("");
    showToast("Logged out successfully");
  };

  // CRUD Operations
  const handleOpenEdit = (app: Appointment) => {
    setEditingAppointment(app);
    setEditForm({ ...app });
  };

  const handleSaveEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingAppointment || !scriptUrl) return;

    setIsSaving(true);
    try {
      const res = await fetch(scriptUrl, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify({
          action: "update",
          id: editingAppointment.id,
          data: {
            name: editForm.name,
            phone: editForm.phone,
            message: editForm.message,
            status: editForm.status,
            date: editForm.date,
            doctor: editForm.doctor || "",
          },
        }),
      });

      if (!res.ok) {
        throw new Error(`Google Sheets API returned status ${res.status}`);
      }

      const result = await res.json();
      if (result.success) {
        showToast("Appointment updated successfully");
        setEditingAppointment(null);
        fetchAppointments();
      } else {
        throw new Error(result.error || "Failed to update appointment");
      }
    } catch (err: any) {
      showToast(err.message || "Error updating appointment", "error");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    if (deletingId === null || !scriptUrl) return;

    setIsDeleting(true);
    try {
      const res = await fetch(scriptUrl, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify({
          action: "delete",
          id: deletingId,
        }),
      });

      if (!res.ok) {
        throw new Error(`Google Sheets API returned status ${res.status}`);
      }

      const result = await res.json();
      if (result.success) {
        showToast("Appointment deleted successfully");
        setDeletingId(null);
        fetchAppointments();
      } else {
        throw new Error(result.error || "Failed to delete appointment");
      }
    } catch (err: any) {
      showToast(err.message || "Error deleting appointment", "error");
    } finally {
      setIsDeleting(false);
    }
  };

  // WhatsApp click-to-chat redirect
  const handleWhatsAppAction = (app: Appointment) => {
    const formattedPhone = app.phone.replace(/\D/g, "");
    const cleanPhone = formattedPhone.startsWith("91") ? formattedPhone : `91${formattedPhone}`;

    let templateMessage = "";
    if (app.status === "Pending") {
      templateMessage = `Hello ${app.name}, we received your booking enquiry for "${app.message || "general consultation"}" at Rasdent Dental Clinic. Would you like to schedule an appointment? Please let us know your preferred date and time.`;
    } else if (app.status === "Confirmed") {
      templateMessage = `Hello ${app.name}, your appointment at Rasdent Dental Clinic is confirmed for ${app.date || "your requested time"}${app.doctor ? ` with ${app.doctor}` : ""}. We look forward to seeing you!`;
    } else if (app.status === "Completed") {
      templateMessage = `Hello ${app.name}, thank you for choosing Rasdent Dental Clinic. We hope you had a comfortable treatment experience. Please let us know if you need any follow-up guidance.`;
    } else if (app.status === "Cancelled") {
      templateMessage = `Hello ${app.name}, we have cancelled your appointment request as per your instruction. Let us know if you need to reschedule for a future date.`;
    }

    const encodedText = encodeURIComponent(templateMessage);
    window.open(`https://wa.me/${cleanPhone}?text=${encodedText}`, "_blank");
  };

  // CSV Export Function
  const exportToCSV = () => {
    if (filteredAppointments.length === 0) {
      showToast("No data to export", "error");
      return;
    }

    const headers = ["ID", "Name", "Phone", "Message", "Status", "Date", "Assigned Doctor"];
    const csvRows = [headers.join(",")];

    for (const app of filteredAppointments) {
      const row = [
        app.id,
        `"${app.name.replace(/"/g, '""')}"`,
        `"${app.phone}"`,
        `"${app.message.replace(/"/g, '""').replace(/\n/g, " ")}"`,
        app.status,
        `"${app.date}"`,
        `"${app.doctor.replace(/"/g, '""')}"`,
      ];
      csvRows.push(row.join(","));
    }

    const csvBlob = new Blob([csvRows.join("\n")], { type: "text/csv;charset=utf-8;" });
    const blobUrl = URL.createObjectURL(csvBlob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.setAttribute("download", `appointments_export_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filter Logic
  const filteredAppointments = appointments.filter((app) => {
    const matchesSearch =
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.phone.includes(searchQuery) ||
      app.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.doctor.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === "All" || app.status === statusFilter;

    // Date range verification
    let matchesDateRange = true;
    const appDate = parseAppDate(app.date);

    if (appDate) {
      if (startDate) {
        const start = new Date(startDate);
        start.setHours(0, 0, 0, 0);
        if (appDate < start) matchesDateRange = false;
      }
      if (endDate) {
        const end = new Date(endDate);
        end.setHours(23, 59, 59, 999);
        if (appDate > end) matchesDateRange = false;
      }
    } else if (startDate || endDate) {
      // If there is no date but the user filters by date, exclude it
      matchesDateRange = false;
    }

    return matchesSearch && matchesStatus && matchesDateRange;
  });

  // Calendar View Helpers
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay(); // 0 is Sunday, 1 is Monday, etc.
  };

  const handlePrevMonth = () => {
    if (calendarMonth === 0) {
      setCalendarMonth(11);
      setCalendarYear((prev) => prev - 1);
    } else {
      setCalendarMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (calendarMonth === 11) {
      setCalendarMonth(0);
      setCalendarYear((prev) => prev + 1);
    } else {
      setCalendarMonth((prev) => prev + 1);
    }
  };

  const renderCalendarDays = () => {
    const totalDays = getDaysInMonth(calendarYear, calendarMonth);
    const startOffset = getFirstDayOfMonth(calendarYear, calendarMonth);
    const cells: React.ReactNode[] = [];

    // Empty spaces for previous month's alignment
    for (let i = 0; i < startOffset; i++) {
      cells.push(<div key={`empty-${i}`} className="calendar-day-cell inactive"></div>);
    }

    // Days of current month
    const today = new Date();
    for (let dayNum = 1; dayNum <= totalDays; dayNum++) {
      const isToday =
        today.getDate() === dayNum &&
        today.getMonth() === calendarMonth &&
        today.getFullYear() === calendarYear;

      // Filter appointments on this specific day
      const dayAppointments = appointments.filter((app) => {
        const parsed = parseAppDate(app.date);
        return (
          parsed &&
          parsed.getDate() === dayNum &&
          parsed.getMonth() === calendarMonth &&
          parsed.getFullYear() === calendarYear
        );
      });

      cells.push(
        <div
          key={`day-${dayNum}`}
          className={`calendar-day-cell ${isToday ? "today" : ""}`}
        >
          <div className="calendar-date-number">{dayNum}</div>
          <div className="calendar-event-list">
            {dayAppointments.slice(0, 3).map((app) => (
              <div
                key={app.id}
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenEdit(app);
                }}
                className={`calendar-event-item status-badge badge-${app.status.toLowerCase()}`}
                title={`${app.name} - ${app.status}`}
              >
                {app.name}
              </div>
            ))}
            {dayAppointments.length > 3 && (
              <div
                style={{ fontSize: "0.65rem", textAlign: "center", color: "var(--primary-teal)", fontWeight: 600 }}
              >
                + {dayAppointments.length - 3} more
              </div>
            )}
          </div>
        </div>
      );
    }

    return cells;
  };

  // Analytics Computation (Custom SVG Layouts)
  const treatmentKeywords = ["root canal", "scaling", "checkup", "extraction", "bridge", "implant", "ortho", "crown"];
  const treatmentStats: { [key: string]: number } = { Other: 0 };
  treatmentKeywords.forEach((k) => (treatmentStats[k] = 0));

  appointments.forEach((app) => {
    let matched = false;
    const msg = app.message.toLowerCase();
    for (const key of treatmentKeywords) {
      if (msg.includes(key)) {
        treatmentStats[key]++;
        matched = true;
        break;
      }
    }
    if (!matched) {
      treatmentStats["Other"]++;
    }
  });

  const treatmentDataArray = Object.keys(treatmentStats)
    .map((name) => ({
      name: name.charAt(0).toUpperCase() + name.slice(1),
      count: treatmentStats[name],
    }))
    .filter((item) => item.count > 0)
    .sort((a, b) => b.count - a.count);

  // Status statistics for vertical bar chart
  const statusStats = {
    Pending: appointments.filter((a) => a.status === "Pending").length,
    Confirmed: appointments.filter((a) => a.status === "Confirmed").length,
    Completed: appointments.filter((a) => a.status === "Completed").length,
    Cancelled: appointments.filter((a) => a.status === "Cancelled").length,
  };

  // SVG Chart Dimensions
  const chartWidth = 340;
  const chartHeight = 200;
  const colors = {
    Pending: "#4b5563",
    Confirmed: "#059669",
    Completed: "#0284c7",
    Cancelled: "#dc2626",
    Teal: "#00A79E",
    Green: "#254E28",
    Gold: "#EDB139",
    Navy: "#36365C",
    Slate: "#474C74",
    Pink: "#F3D1E4",
  };

  // Stats Counters
  const totalCount = appointments.length;
  const pendingCount = appointments.filter((a) => a.status === "Pending").length;
  const confirmedCount = appointments.filter((a) => a.status === "Confirmed").length;
  const completedCount = appointments.filter((a) => a.status === "Completed").length;
  const cancelledCount = appointments.filter((a) => a.status === "Cancelled").length;

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  if (isAuthenticated === null) {
    return (
      <div className="admin-wrapper">
        <div className="loader-container">
          <div className="spinner"></div>
          <p>Verifying session...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="admin-wrapper">
        <div className="login-card">
          <div className="login-logo">Rasdent Admin</div>
          <p className="login-subtitle">Please enter admin password to manage appointments.</p>

          {loginError && (
            <div className="error-banner">
              <span>⚠️</span> {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label htmlFor="password">Admin Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
                placeholder="Enter password"
                required
                disabled={isLoggingIn}
              />
            </div>
            <button type="submit" className="login-btn" disabled={isLoggingIn}>
              {isLoggingIn ? "Logging in..." : "Login Dashboard"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-wrapper">
      <div className="admin-container">
        {/* Header */}
        <header className="dashboard-header">
          <div className="dashboard-title">
            <h1>Admin Dashboard</h1>
            <p>Manage clinic appointments and client requests synced with Google Sheets</p>
          </div>
          <button onClick={handleLogout} className="logout-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              width="16"
              height="16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
              />
            </svg>
            Logout
          </button>
        </header>

        {/* View Mode Switching Tabs */}
        <div className="view-mode-tabs">
          <button
            onClick={() => setViewMode("table")}
            className={`view-mode-btn ${viewMode === "table" ? "active" : ""}`}
          >
            📋 Table View
          </button>
          <button
            onClick={() => setViewMode("calendar")}
            className={`view-mode-btn ${viewMode === "calendar" ? "active" : ""}`}
          >
            📅 Calendar Grid
          </button>
          <button
            onClick={() => setViewMode("analytics")}
            className={`view-mode-btn ${viewMode === "analytics" ? "active" : ""}`}
          >
            📈 Analytics
          </button>
        </div>

        {/* Stats Grid */}
        <section className="stats-grid">
          <div className="stat-card stat-total">
            <div className="stat-icon">📋</div>
            <div className="stat-info">
              <span className="stat-label">Total</span>
              <span className="stat-value">{totalCount}</span>
            </div>
          </div>
          <div className="stat-card stat-pending">
            <div className="stat-icon">⏳</div>
            <div className="stat-info">
              <span className="stat-label">Pending</span>
              <span className="stat-value">{pendingCount}</span>
            </div>
          </div>
          <div className="stat-card stat-confirmed">
            <div className="stat-icon">✅</div>
            <div className="stat-info">
              <span className="stat-label">Confirmed</span>
              <span className="stat-value">{confirmedCount}</span>
            </div>
          </div>
          <div className="stat-card stat-completed">
            <div className="stat-icon">🏥</div>
            <div className="stat-info">
              <span className="stat-label">Completed</span>
              <span className="stat-value">{completedCount}</span>
            </div>
          </div>
          <div className="stat-card stat-cancelled">
            <div className="stat-icon">❌</div>
            <div className="stat-info">
              <span className="stat-label">Cancelled</span>
              <span className="stat-value">{cancelledCount}</span>
            </div>
          </div>
        </section>

        {/* Filter & Export Bar (only rendered on list/calendar views) */}
        {viewMode !== "analytics" && (
          <section className="filter-bar">
            <div className="search-box">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search name, phone, message or doctor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="date-filter-group">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="date-input"
                title="Start Date"
              />
              <span style={{ fontSize: "0.85rem", color: "var(--slate)" }}>to</span>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="date-input"
                title="End Date"
              />

              {viewMode === "table" && (
                <button onClick={exportToCSV} className="btn-export">
                  📥 Export CSV
                </button>
              )}
            </div>

            {viewMode === "table" && (
              <div className="status-tabs">
                {["All", "Pending", "Confirmed", "Completed", "Cancelled"].map((status) => (
                  <button
                    key={status}
                    onClick={() => setStatusFilter(status)}
                    className={`tab-btn ${statusFilter === status ? "active" : ""}`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Views Router */}
        {isLoading ? (
          <div className="loader-container">
            <div className="spinner"></div>
            <p>Loading appointments from Google Sheets...</p>
          </div>
        ) : fetchError ? (
          <div className="empty-state">
            <p className="empty-icon">⚠️</p>
            <h3>Failed to Load Appointments</h3>
            <p style={{ marginTop: "0.5rem", color: "#ef4444" }}>{fetchError}</p>
            <button
              onClick={fetchAppointments}
              className="btn-primary"
              style={{ marginTop: "1rem" }}
            >
              Retry Connection
            </button>
          </div>
        ) : (
          <>
            {/* Table View */}
            {viewMode === "table" && (
              <section className="table-card">
                {filteredAppointments.length === 0 ? (
                  <div className="empty-state">
                    <p className="empty-icon">📂</p>
                    <h3>No Appointments Found</h3>
                    <p>Try adjusting your search criteria or status filter.</p>
                  </div>
                ) : (
                  <div className="table-responsive">
                    <table className="appointments-table">
                      <thead>
                        <tr>
                          <th>Patient</th>
                          <th>Date / Time</th>
                          <th>Reason / Message</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredAppointments.map((app) => (
                          <tr key={app.id}>
                            <td>
                              <div className="patient-info">
                                <span className="patient-name">{app.name || "Anonymous"}</span>
                                <span className="patient-phone">{app.phone || "No Phone"}</span>
                                {app.doctor && (
                                  <span className="doctor-assigned-text">
                                    👨‍⚕️ {app.doctor}
                                  </span>
                                )}
                              </div>
                            </td>
                            <td>{app.date || "Not Scheduled"}</td>
                            <td>
                              <div className="message-cell" title={app.message}>
                                {app.message || "—"}
                              </div>
                            </td>
                            <td>
                              <span className={`status-badge badge-${app.status.toLowerCase()}`}>
                                {app.status}
                              </span>
                            </td>
                            <td>
                              <div className="actions-cell">
                                <button
                                  onClick={() => handleWhatsAppAction(app)}
                                  className="action-btn btn-whatsapp"
                                  title="Send Status Message via WhatsApp"
                                >
                                  💬
                                </button>
                                <button
                                  onClick={() => handleOpenEdit(app)}
                                  className="action-btn btn-edit"
                                  title="Edit details & change status"
                                >
                                  ✏️
                                </button>
                                <button
                                  onClick={() => setDeletingId(app.id)}
                                  className="action-btn btn-delete"
                                  title="Delete appointment"
                                >
                                  🗑️
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            )}

            {/* Calendar View */}
            {viewMode === "calendar" && (
              <section className="calendar-card">
                <div className="calendar-control-row">
                  <button onClick={handlePrevMonth} className="calendar-nav-btn">
                    ◀ Prev
                  </button>
                  <h2 className="calendar-month-title">
                    {monthNames[calendarMonth]} {calendarYear}
                  </h2>
                  <button onClick={handleNextMonth} className="calendar-nav-btn">
                    Next ▶
                  </button>
                </div>
                <div className="calendar-grid-wrapper">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((dayName) => (
                    <div key={dayName} className="calendar-header-day">
                      {dayName}
                    </div>
                  ))}
                  {renderCalendarDays()}
                </div>
              </section>
            )}

            {/* Analytics View */}
            {viewMode === "analytics" && (
              <section className="analytics-grid">
                {/* Status Bar Chart */}
                <div className="chart-card">
                  <h3>Appointments Status Distribution</h3>
                  <div className="svg-chart-container">
                    <svg width={chartWidth} height={chartHeight}>
                      {/* Vertical status bars */}
                      {Object.keys(statusStats).map((status, index) => {
                        const count = statusStats[status as keyof typeof statusStats];
                        const maxVal = Math.max(...Object.values(statusStats), 1);
                        const barHeight = (count / maxVal) * 120;
                        const x = 50 + index * 70;
                        const y = 150 - barHeight;

                        return (
                          <g key={status}>
                            <rect
                              x={x}
                              y={y}
                              width="40"
                              height={barHeight}
                              fill={colors[status as keyof typeof colors]}
                              rx="4"
                            />
                            <text
                              x={x + 20}
                              y={y - 8}
                              textAnchor="middle"
                              fontSize="11"
                              fontWeight="bold"
                              fill="var(--dark-navy)"
                            >
                              {count}
                            </text>
                            <text
                              x={x + 20}
                              y="170"
                              textAnchor="middle"
                              fontSize="10"
                              fontWeight="600"
                              fill="var(--slate)"
                            >
                              {status.slice(0, 4)}
                            </text>
                          </g>
                        );
                      })}
                      <line x1="30" y1="152" x2="320" y2="152" stroke="#e5e7eb" strokeWidth="2" />
                    </svg>
                  </div>
                </div>

                {/* Horizontal Treatment Chart */}
                <div className="chart-card">
                  <h3>Top Treatment Inquiries</h3>
                  <div className="svg-chart-container">
                    <svg width={chartWidth} height={chartHeight}>
                      {treatmentDataArray.slice(0, 5).map((item, index) => {
                        const maxVal = Math.max(...treatmentDataArray.map((i) => i.count), 1);
                        const width = (item.count / maxVal) * 160;
                        const y = 20 + index * 32;

                        return (
                          <g key={item.name}>
                            <text
                              x="10"
                              y={y + 14}
                              fontSize="10"
                              fontWeight="700"
                              fill="var(--dark-navy)"
                            >
                              {item.name}
                            </text>
                            <rect
                              x="100"
                              y={y}
                              width={width}
                              height="20"
                              fill={colors.Teal}
                              rx="3"
                            />
                            <text
                              x={110 + width}
                              y={y + 14}
                              fontSize="10"
                              fontWeight="bold"
                              fill="var(--slate)"
                            >
                              {item.count}
                            </text>
                          </g>
                        );
                      })}
                    </svg>
                  </div>
                </div>
              </section>
            )}
          </>
        )}
      </div>

      {/* Edit Modal */}
      {editingAppointment && (
        <div className="modal-overlay">
          <div className="modal-content">
            <header className="modal-header">
              <h3 className="modal-title">Edit Appointment</h3>
              <button
                onClick={() => setEditingAppointment(null)}
                className="modal-close"
              >
                ✕
              </button>
            </header>
            <form onSubmit={handleSaveEdit}>
              <div className="modal-body">
                <div className="form-group" style={{ marginBottom: "1rem" }}>
                  <label style={{ display: "block", marginBottom: "0.25rem", fontWeight: 600 }}>
                    Patient Name
                  </label>
                  <input
                    type="text"
                    value={editForm.name || ""}
                    onChange={(e) => setEditForm((prev) => ({ ...prev, name: e.target.value }))}
                    className="login-input"
                    required
                  />
                </div>

                <div className="form-group" style={{ marginBottom: "1rem" }}>
                  <label style={{ display: "block", marginBottom: "0.25rem", fontWeight: 600 }}>
                    Phone Number
                  </label>
                  <input
                    type="text"
                    value={editForm.phone || ""}
                    onChange={(e) => setEditForm((prev) => ({ ...prev, phone: e.target.value }))}
                    className="login-input"
                    required
                  />
                </div>

                <div className="form-group" style={{ marginBottom: "1rem" }}>
                  <label style={{ display: "block", marginBottom: "0.25rem", fontWeight: 600 }}>
                    Appointment Date/Time
                  </label>
                  <input
                    type="text"
                    value={editForm.date || ""}
                    onChange={(e) => setEditForm((prev) => ({ ...prev, date: e.target.value }))}
                    className="login-input"
                    placeholder="e.g., 2026-07-20 10:00 AM"
                  />
                </div>

                <div className="form-group" style={{ marginBottom: "1rem" }}>
                  <label style={{ display: "block", marginBottom: "0.25rem", fontWeight: 600 }}>
                    Assigned Doctor
                  </label>
                  <select
                    value={editForm.doctor || ""}
                    onChange={(e) => setEditForm((prev) => ({ ...prev, doctor: e.target.value }))}
                    className="login-input"
                    style={{ background: "white" }}
                  >
                    <option value="">Select Doctor...</option>
                    <option value="Dr. Muhammed Rifad">Dr. Muhammed Rifad (Orthodontist)</option>
                    <option value="Dr. Adhil">Dr. Adhil (General)</option>
                    <option value="Dr. Susan">Dr. Susan (Pediatric)</option>
                    <option value="Dr. Rahul">Dr. Rahul (Periodontist)</option>
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: "1rem" }}>
                  <label style={{ display: "block", marginBottom: "0.25rem", fontWeight: 600 }}>
                    Status
                  </label>
                  <select
                    value={editForm.status}
                    onChange={(e) =>
                      setEditForm((prev) => ({
                        ...prev,
                        status: e.target.value as Appointment["status"],
                      }))
                    }
                    className="login-input"
                    style={{ background: "white" }}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>

                <div className="form-group">
                  <label style={{ display: "block", marginBottom: "0.25rem", fontWeight: 600 }}>
                    Patient Message
                  </label>
                  <textarea
                    value={editForm.message || ""}
                    onChange={(e) => setEditForm((prev) => ({ ...prev, message: e.target.value }))}
                    className="login-input"
                    style={{ minHeight: "100px", resize: "vertical" }}
                  />
                </div>
              </div>
              <footer className="modal-footer">
                <button
                  type="button"
                  onClick={() => setEditingAppointment(null)}
                  className="btn-secondary"
                  disabled={isSaving}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary" disabled={isSaving}>
                  {isSaving ? "Saving changes..." : "Save Changes"}
                </button>
              </footer>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deletingId !== null && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ maxWidth: "400px" }}>
            <header className="modal-header">
              <h3 className="modal-title">Delete Appointment</h3>
              <button onClick={() => setDeletingId(null)} className="modal-close">
                ✕
              </button>
            </header>
            <div className="modal-body">
              <p>Are you sure you want to remove this appointment? This action will permanently delete the row from Google Sheets.</p>
            </div>
            <footer className="modal-footer">
              <button onClick={() => setDeletingId(null)} className="btn-secondary" disabled={isDeleting}>
                Cancel
              </button>
              <button onClick={handleDelete} className="btn-danger" disabled={isDeleting}>
                {isDeleting ? "Deleting..." : "Confirm Delete"}
              </button>
            </footer>
          </div>
        </div>
      )}

      {/* Toast Alert Banner */}
      {toast && (
        <div className="toast-container">
          <div className={`toast toast-${toast.type}`}>
            <span>{toast.type === "success" ? "✓" : "✕"}</span>
            <span>{toast.message}</span>
          </div>
        </div>
      )}
    </div>
  );
}
