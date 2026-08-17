const sidebar = document.getElementById("sidebar");
const sidebarBackdrop = document.getElementById("sidebarBackdrop");
const menuToggle = document.getElementById("menuToggle");
const sidebarClose = document.getElementById("sidebarClose");

const pageTitle = document.getElementById("pageTitle");
const pageEyebrow = document.getElementById("pageEyebrow");
const pageDescription = document.getElementById("pageDescription");
const pageAction = document.getElementById("pageAction");
const breadcrumbCurrent = document.getElementById("breadcrumbCurrent");
const pageContent = document.getElementById("pageContent");

const navItems = document.querySelectorAll(".nav-item[data-page]");


/* =========================
   Page Definitions
   ========================= */

const pages = {
    Dashboard: {
        eyebrow: "Overview",
        title: "Dashboard",
        description: "Monitor your applications, configurations, and deployments.",
        action: "",
        content: buildDashboard()
    },

    Applications: {
        eyebrow: "Workspace",
        title: "Mobile Applications",
        description: "Manage your registered mobile applications and their settings.",
        action: "",
        content: buildApplicationsTable()
    },

    Companies: {
        eyebrow: "Workspace",
        title: "Companies",
        description: "View and manage company profiles linked to your workspace.",
        action: "",
        content: buildCompaniesTable()
    },

    Configurations: {
        eyebrow: "Workspace",
        title: "Configurations",
        description: "Centralized configuration management for all your applications.",
        action: "",
        content: buildConfigurationsTable()
    },

    Deployments: {
        eyebrow: "Operations",
        title: "Deployments",
        description: "Track deployment history and status across all environments.",
        action: "",
        content: `
            <div class="empty-dashboard">
                <div class="empty-icon">&#x2197;</div>
                <h2>No deployments yet</h2>
                <p>Deployments will appear here once you push a configuration to a target environment.</p>
            </div>
        `
    },

    "API Keys": {
        eyebrow: "Operations",
        title: "API Keys",
        description: "Manage API keys used to authenticate requests to your services.",
        action: "",
        content: buildApiKeysTable()
    }
};


/* =========================
   Dashboard Builder
   ========================= */

function buildDashboard() {
    const stats = [
        { label: "Applications",  value: "9",  change: "+2 this month",   icon: "&#x25A3;", positive: true },
        { label: "Companies",     value: "8",  change: "+1 this month",   icon: "&#x25A5;", positive: true },
        { label: "API Keys",      value: "8",  change: "6 active",        icon: "&#x2318;", positive: true },
        { label: "Configurations", value: "10", change: "8 active",       icon: "&#x2699;", positive: true },
    ];

    const statCards = stats.map(s => `
        <div class="stat-card">
            <div class="stat-icon">${s.icon}</div>
            <div class="stat-body">
                <span class="stat-label">${s.label}</span>
                <span class="stat-value">${s.value}</span>
                <span class="stat-change ${s.positive ? "change-positive" : "change-negative"}">${s.change}</span>
            </div>
        </div>`).join("");

    const barData = [
        { label: "Mon",   value: 12 },
        { label: "Tue",   value: 19 },
        { label: "Wed",   value: 8  },
        { label: "Thu",   value: 24 },
        { label: "Fri",   value: 16 },
        { label: "Sat",   value: 5  },
        { label: "Sun",   value: 3  },
    ];
    const maxBar = Math.max(...barData.map(d => d.value));
    const bars = barData.map(d => {
        const pct = Math.round((d.value / maxBar) * 100);
        return `
            <div class="bar-col">
                <div class="bar-value">${d.value}</div>
                <div class="bar-track"><div class="bar-fill" style="height:${pct}%"></div></div>
                <div class="bar-label">${d.label}</div>
            </div>`;
    }).join("");

    const activity = [
        { time: "2 min ago",  text: "API key <strong>Monitoring Agent</strong> used from 192.168.1.42" },
        { time: "18 min ago", text: "<strong>Beta Feedback App</strong> v0.9.0 build succeeded" },
        { time: "1 hour ago", text: "Configuration <strong>Feature: Dark Mode</strong> updated for Pylon iOS" },
        { time: "3 hours ago", text: "Company <strong>LogiTech</strong> registered 1 new application" },
        { time: "5 hours ago", text: "API key <strong>CI/CD Pipeline</strong> authenticated successfully" },
        { time: "Yesterday",  text: "<strong>Driver App</strong> v2.8.3 deployed to production" },
        { time: "Yesterday",  text: "Configuration <strong>Session Timeout</strong> changed from 1800 to 3600" },
        { time: "2 days ago", text: "API key <strong>Deprecated Key</strong> flagged for rotation" },
    ];

    const activityItems = activity.map(a => `
        <div class="activity-item">
            <span class="activity-time">${a.time}</span>
            <span class="activity-text">${a.text}</span>
        </div>`).join("");

    return `
        <div class="stats-grid">${statCards}</div>

        <div class="dashboard-grid">
            <div class="card">
                <div class="card-header">
                    <h2>API Requests This Week</h2>
                    <span class="card-count">87 total</span>
                </div>
                <div class="chart-body">
                    <div class="bar-chart">${bars}</div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <h2>Recent Activity</h2>
                </div>
                <div class="activity-list">${activityItems}</div>
            </div>
        </div>`;
}


/* =========================
   Applications Table Builder
   ========================= */

function buildApplicationsTable() {
    const apps = [
        { name: "Pylon iOS",          bundleId: "com.pylon.ios",             platform: "iOS",     version: "3.4.1", status: "Active",   lastBuild: "2026-08-15", company: "Pylon Inc." },
        { name: "Pylon Android",      bundleId: "com.pylon.android",         platform: "Android", version: "3.4.0", status: "Active",   lastBuild: "2026-08-14", company: "Pylon Inc." },
        { name: "Pylon Admin",        bundleId: "com.pylon.admin",           platform: "iOS",     version: "1.2.0", status: "Active",   lastBuild: "2026-07-30", company: "Pylon Inc." },
        { name: "Driver App",         bundleId: "com.pylon.driver",          platform: "Android", version: "2.8.3", status: "Active",   lastBuild: "2026-08-12", company: "FleetCo" },
        { name: "Driver App (iOS)",   bundleId: "com.pylon.driver.ios",      platform: "iOS",     version: "2.8.2", status: "Active",   lastBuild: "2026-08-10", company: "FleetCo" },
        { name: "Customer Portal",    bundleId: "com.pylon.portal",          platform: "Web",     version: "1.0.4", status: "Inactive", lastBuild: "2026-05-20", company: "Pylon Inc." },
        { name: "Legacy Tracker",     bundleId: "com.pylon.tracker.old",     platform: "Android", version: "1.1.0", status: "Retired",  lastBuild: "2025-09-01", company: "Pylon Inc." },
        { name: "Beta Feedback App",  bundleId: "com.pylon.feedback",        platform: "iOS",     version: "0.9.0", status: "Active",   lastBuild: "2026-08-17", company: "Pylon Inc." },
        { name: "Warehouse Scanner",  bundleId: "com.pylon.scanner",         platform: "Android", version: "1.5.2", status: "Active",   lastBuild: "2026-08-08", company: "LogiTech" },
    ];

    const rows = apps.map(a => {
        const statusClass = a.status === "Active" ? "status-active" : a.status === "Inactive" ? "status-inactive" : "status-revoked";
        return `
            <tr>
                <td class="key-name">${a.name}</td>
                <td><code class="key-value">${a.bundleId}</code></td>
                <td>${a.platform}</td>
                <td>${a.version}</td>
                <td>${a.company}</td>
                <td>${a.lastBuild}</td>
                <td><span class="status-badge ${statusClass}">${a.status}</span></td>
            </tr>`;
    }).join("");

    return `
        <div class="card">
            <div class="card-header">
                <h2>All Applications</h2>
                <span class="card-count">${apps.length} apps</span>
            </div>
            <div class="table-wrapper">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Bundle ID</th>
                            <th>Platform</th>
                            <th>Version</th>
                            <th>Company</th>
                            <th>Last Build</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>
        </div>`;
}


/* =========================
   Companies Table Builder
   ========================= */

function buildCompaniesTable() {
    const companies = [
        { name: "Pylon Inc.",        industry: "Technology",       hq: "Nairobi, Kenya", employees: 240, apps: 5, status: "Active",   created: "2024-03-10" },
        { name: "FleetCo",           industry: "Logistics",        hq: "Nairobi, Kenya",        employees: 85,  apps: 2, status: "Active",   created: "2024-06-22" },
        { name: "LogiTech",          industry: "Supply Chain",     hq: "Nairobi, Kenya",       employees: 170, apps: 1, status: "Active",   created: "2025-01-15" },
        { name: "NovaPay",           industry: "Fintech",          hq: "Nairobi, Kenya",      employees: 310, apps: 3, status: "Active",   created: "2024-09-05" },
        { name: "GreenWave Energy",  industry: "Renewables",       hq: "Nairobi, Kenya",        employees: 52,  apps: 1, status: "Inactive", created: "2025-04-18" },
        { name: "MedBridge Health",  industry: "Healthcare",       hq: "Nairobi, Kenya",        employees: 130, apps: 2, status: "Active",   created: "2024-11-30" },
        { name: "Trident Retail",    industry: "E-commerce",       hq: "Nairobi, Kenya",       employees: 420, apps: 4, status: "Active",   created: "2023-08-12" },
        { name: "ArcPoint Labs",     industry: "Biotech",          hq: "Nairobi, Kenya",     employees: 65,  apps: 1, status: "Inactive", created: "2025-07-01" },
    ];

    const rows = companies.map(c => {
        const statusClass = c.status === "Active" ? "status-active" : "status-inactive";
        return `
            <tr>
                <td class="key-name">${c.name}</td>
                <td>${c.industry}</td>
                <td>${c.hq}</td>
                <td>${c.employees}</td>
                <td>${c.apps}</td>
                <td>${c.created}</td>
                <td><span class="status-badge ${statusClass}">${c.status}</span></td>
            </tr>`;
    }).join("");

    return `
        <div class="card">
            <div class="card-header">
                <h2>All Companies</h2>
                <span class="card-count">${companies.length} companies</span>
            </div>
            <div class="table-wrapper">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Industry</th>
                            <th>Headquarters</th>
                            <th>Employees</th>
                            <th>Apps</th>
                            <th>Joined</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>
        </div>`;
}


/* =========================
   Configurations Table Builder
   ========================= */

function buildConfigurationsTable() {
    const configs = [
        { name: "Production Env",    app: "Pylon iOS",       type: "Environment",  key: "ENV prod",          value: "production",  status: "Active",   updated: "2026-08-10" },
        { name: "Staging Env",       app: "Pylon iOS",       type: "Environment",  key: "ENV staging",       value: "staging",     status: "Active",   updated: "2026-08-10" },
        { name: "API Base URL",      app: "Pylon Android",   type: "Environment",  key: "API_BASE_URL",      value: "https://api.pylon.io/v2", status: "Active", updated: "2026-07-28" },
        { name: "Feature: Dark Mode", app: "Pylon iOS",      type: "Feature Flag", key: "FF_DARK_MODE",      value: "true",        status: "Active",   updated: "2026-06-15" },
        { name: "Feature: Analytics", app: "Driver App",     type: "Feature Flag", key: "FF_ANALYTICS",      value: "false",       status: "Inactive", updated: "2026-05-01" },
        { name: "Push Notifications", app: "Pylon Android",  type: "Feature Flag", key: "FF_PUSH_NOTIF",     value: "true",        status: "Active",   updated: "2026-08-02" },
        { name: "Max Upload Size",    app: "Warehouse Scanner", type: "Setting",   key: "MAX_UPLOAD_MB",     value: "50",          status: "Active",   updated: "2026-04-20" },
        { name: "Session Timeout",    app: "Pylon Admin",     type: "Setting",     key: "SESSION_TIMEOUT_S", value: "3600",        status: "Active",   updated: "2026-03-12" },
        { name: "Debug Logging",      app: "Driver App",     type: "Setting",     key: "DEBUG_LOG",         value: "false",       status: "Inactive", updated: "2026-01-08" },
        { name: "Cache TTL",          app: "Customer Portal", type: "Setting",    key: "CACHE_TTL_S",       value: "300",         status: "Active",   updated: "2026-07-19" },
    ];

    const rows = configs.map(c => {
        const statusClass = c.status === "Active" ? "status-active" : "status-inactive";
        return `
            <tr>
                <td class="key-name">${c.name}</td>
                <td>${c.app}</td>
                <td>${c.type}</td>
                <td><code class="key-value">${c.key}</code></td>
                <td>${c.value}</td>
                <td>${c.updated}</td>
                <td><span class="status-badge ${statusClass}">${c.status}</span></td>
            </tr>`;
    }).join("");

    return `
        <div class="card">
            <div class="card-header">
                <h2>All Configurations</h2>
                <span class="card-count">${configs.length} configs</span>
            </div>
            <div class="table-wrapper">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Application</th>
                            <th>Type</th>
                            <th>Key</th>
                            <th>Value</th>
                            <th>Updated</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>
        </div>`;
}


/* =========================
   API Keys Table Builder
   ========================= */

function buildApiKeysTable() {
    const keys = [
        { name: "Production Key",   prefix: "pk_live_", key: "pk_live_8f3a2b1c9d4e5f6a7b0c1d2e3f4a5b6c", created: "2025-11-02", lastUsed: "2026-08-16", status: "Active",   scopes: "read, write" },
        { name: "Staging Key",      prefix: "pk_test_", key: "pk_test_1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d", created: "2025-12-15", lastUsed: "2026-08-15", status: "Active",   scopes: "read, write" },
        { name: "CI/CD Pipeline",   prefix: "pk_live_", key: "pk_live_9e8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b", created: "2026-01-20", lastUsed: "2026-08-17", status: "Active",   scopes: "read" },
        { name: "Dev Testing",      prefix: "pk_test_", key: "pk_test_2f3e4d5c6b7a8f9e0d1c2b3a4f5e6d7c", created: "2026-03-08", lastUsed: "2026-07-30", status: "Active",   scopes: "read, write, admin" },
        { name: "Legacy Integration", prefix: "pk_live_", key: "pk_live_3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f", created: "2024-06-10", lastUsed: "2026-04-01", status: "Inactive", scopes: "read" },
        { name: "Webhook Relay",    prefix: "pk_live_", key: "pk_live_4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e", created: "2026-05-22", lastUsed: "2026-08-14", status: "Active",   scopes: "read, write" },
        { name: "Monitoring Agent", prefix: "pk_live_", key: "pk_live_5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d", created: "2026-06-01", lastUsed: "2026-08-17", status: "Active",   scopes: "read" },
        { name: "Deprecated Key",   prefix: "pk_test_", key: "pk_test_6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a", created: "2024-09-14", lastUsed: "2025-12-01", status: "Revoked",  scopes: "read, write" },
    ];

    const rows = keys.map(k => {
        const masked = k.key.slice(0, 12) + "\u2022".repeat(20);
        const statusClass = k.status === "Active" ? "status-active" : k.status === "Inactive" ? "status-inactive" : "status-revoked";
        return `
            <tr>
                <td class="key-name">${k.name}</td>
                <td><code class="key-value">${masked}</code></td>
                <td>${k.created}</td>
                <td>${k.lastUsed}</td>
                <td><span class="status-badge ${statusClass}">${k.status}</span></td>
                <td>${k.scopes}</td>
            </tr>`;
    }).join("");

    return `
        <div class="card">
            <div class="card-header">
                <h2>All API Keys</h2>
                <span class="card-count">${keys.length} keys</span>
            </div>
            <div class="table-wrapper">
                <table class="data-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Key</th>
                            <th>Created</th>
                            <th>Last Used</th>
                            <th>Status</th>
                            <th>Scopes</th>
                        </tr>
                    </thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>
        </div>`;
}


/* =========================
   Sidebar Toggle
   ========================= */

function openSidebar() {
    sidebar.classList.add("open");
    sidebarBackdrop.classList.add("visible");
}

function closeSidebar() {
    sidebar.classList.remove("open");
    sidebarBackdrop.classList.remove("visible");
}

menuToggle.addEventListener("click", openSidebar);
sidebarClose.addEventListener("click", closeSidebar);
sidebarBackdrop.addEventListener("click", closeSidebar);


/* =========================
   Navigation Handler
   ========================= */

function renderPage(pageName) {
    const page = pages[pageName];
    if (!page) return;

    pageEyebrow.textContent = page.eyebrow;
    pageTitle.textContent = page.title;
    pageDescription.textContent = page.description;

    const pageActions = pageAction.parentElement;
    if (page.action) {
        pageAction.textContent = page.action;
        pageActions.style.display = "";
    } else {
        pageActions.style.display = "none";
    }

    pageContent.innerHTML = page.content;
}

navItems.forEach((item) => {
    item.addEventListener("click", (event) => {
        event.preventDefault();

        const page = item.dataset.page;

        navItems.forEach((navItem) => navItem.classList.remove("active"));
        item.classList.add("active");

        breadcrumbCurrent.textContent = page;
        renderPage(page);
        closeSidebar();
    });
});

renderPage("Dashboard");
