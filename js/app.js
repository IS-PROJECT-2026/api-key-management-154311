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
        action: "+ New Application",
        content: `
            <div class="empty-dashboard">
                <div class="empty-icon">&#x2302;</div>
                <h2>Welcome back, Mark</h2>
                <p>Select a section from the sidebar to manage your workspace, or use the button above to create a new application.</p>
            </div>
        `
    },

    Applications: {
        eyebrow: "Workspace",
        title: "Mobile Applications",
        description: "Manage your registered mobile applications and their settings.",
        action: "+ Add Application",
        content: `
            <div class="empty-dashboard">
                <div class="empty-icon">&#x25A3;</div>
                <h2>No applications yet</h2>
                <p>Register your first mobile application to start tracking configurations and deployments.</p>
            </div>
        `
    },

    Companies: {
        eyebrow: "Workspace",
        title: "Companies",
        description: "View and manage company profiles linked to your workspace.",
        action: "+ Add Company",
        content: `
            <div class="empty-dashboard">
                <div class="empty-icon">&#x25A5;</div>
                <h2>No companies registered</h2>
                <p>Add a company to associate applications and API keys with specific organizations.</p>
            </div>
        `
    },

    Configurations: {
        eyebrow: "Workspace",
        title: "Configurations",
        description: "Centralized configuration management for all your applications.",
        action: "+ New Configuration",
        content: `
            <div class="empty-dashboard">
                <div class="empty-icon">&#x2699;</div>
                <h2>No configurations</h2>
                <p>Create configurations to manage environment variables, feature flags, and settings across your apps.</p>
            </div>
        `
    },

    Deployments: {
        eyebrow: "Operations",
        title: "Deployments",
        description: "Track deployment history and status across all environments.",
        action: "+ New Deployment",
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
        action: "+ Generate Key",
        content: buildApiKeysTable()
    }
};


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
    pageAction.textContent = page.action;
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
