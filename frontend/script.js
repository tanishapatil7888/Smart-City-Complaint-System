const API_URL = "https://nd1ctaxtwc.execute-api.ap-south-1.amazonaws.com/prod/complaints";

let allComplaints = [];

/* =========================
   LOAD COMPLAINTS
========================= */
async function loadComplaints() {
    try {
        const response = await fetch(API_URL);
        const result = await response.json();
        const data = JSON.parse(result.body);

        allComplaints = data;

        renderTable(data);
        updateStats(data);
        drawCharts(data);

    } catch (error) {
        console.error("Error loading complaints:", error);
    }
}

/* =========================
   RENDER TABLE
========================= */
function renderTable(data) {

    const tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    data.forEach(c => {

        let imageHtml = "No Image";

        if (c.image_url && c.image_url !== "") {

            imageHtml = `
            <img
                src="${c.image_url}"
                onclick='showComplaint(${JSON.stringify(c)})'
                style="
                    width:70px;
                    height:70px;
                    object-fit:cover;
                    border-radius:8px;
                    cursor:pointer;
                    border:2px solid #ddd;
                ">
            `;
        }

        tbody.innerHTML += `

        <tr>

            <td>${c.id}</td>

            <td>${c.name}</td>

            <td>${c.location}</td>

            <td>${c.description}</td>

            <td>
                <span class="category ${c.category.toLowerCase().replace(/\s+/g,'-')}">
                    ${c.category}
                </span>
            </td>
            <td>
                <span class="priority ${c.priority.toLowerCase()}">
                    ${getPriorityIcon(c.priority)} ${c.priority}
                </span>
            </td>

            <td>
                <span class="${c.status === "Solved" ? "solved" : "pending"}">
                    ${c.status}
                </span>
            </td>

            <td>
                ${imageHtml}
            </td>

            <td>

                ${
                    c.status === "Solved"
                    ?
                    `<span style="color:green;font-weight:bold;">✔ Completed</span>`
                    :
                    `<button class="btn solve-btn"
                        onclick="markSolved(${c.id})">
                        ✅ Solve
                    </button>`
                }
                </button>

                <button
                    class="btn delete-btn"
                    onclick="deleteComplaint(${c.id})">

                    🗑 Delete

                </button>

            </td>

        </tr>

        `;

    });

}

/* =========================
   UPDATE STATS
========================= */
function updateStats(data) {
    let total = data.length;
    let pending = 0;
    let solved = 0;

    data.forEach(c => {
        if (c.status === "Solved") solved++;
        else pending++;
    });

    document.getElementById("total").innerText = total;
    document.getElementById("pending").innerText = pending;
    document.getElementById("solved").innerText = solved;
}

/* =========================
   MARK AS SOLVED
========================= */
async function markSolved(id){

    if(!confirm("Mark this complaint as solved?"))
        return;

    try{

        await fetch(`${API_URL}/${id}`,{

            method:"PUT",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({

                status:"Solved"

            })

        });

        loadComplaints();

    }

    catch(err){

        console.log(err);

    }

}

/* =========================
   DELETE COMPLAINT
========================= */
async function deleteComplaint(id){

    if(!confirm("Delete this complaint permanently?"))
        return;

    try{

        await fetch(`${API_URL}/${id}`,{

            method:"DELETE"

        });

        loadComplaints();

    }

    catch(err){

        console.log(err);

    }

}

/* =========================
   SEARCH FUNCTION
========================= */
document.getElementById("search").addEventListener("input", function () {
    const value = this.value.toLowerCase();

    const filtered = allComplaints.filter(c =>
        c.name.toLowerCase().includes(value) ||
        c.location.toLowerCase().includes(value)
    );

    renderTable(filtered);
});

/* =========================
   FILTER FUNCTION
========================= */
document.getElementById("filter").addEventListener("change", function () {
    const value = this.value;

    if (value === "all") {
        renderTable(allComplaints);
    } else {
        const filtered = allComplaints.filter(c => c.status === value);
        renderTable(filtered);
    }
});

/* =========================
   IMAGE POPUP
========================= */
function showComplaint(c) {

    document.getElementById("modalImg").src = c.image_url;

    document.getElementById("modalInfo").innerHTML = `

        <h2 style="margin-bottom:15px;">Complaint Details</h2>

        <p><b>👤 Name:</b> ${c.name}</p>

        <p><b>📍 Location:</b> ${c.location}</p>

        <p><b>📂 Category:</b> ${c.category}</p>

        <p><b>🔥 Priority:</b> ${c.priority}</p>

        <p><b>✅ Status:</b> ${c.status}</p>

        <p><b>📝 Description:</b></p>

        <div style="
            background:#f5f5f5;
            padding:10px;
            border-radius:8px;
            margin-top:5px;
        ">
            ${c.description}
        </div>

    `;

    document.getElementById("imageModal").style.display = "flex";
}

/* =========================
   TOAST (if added in HTML)
========================= */
function showToast(msg, color = "#28a745") {
    let toast = document.getElementById("toast");
    if (!toast) return;

    toast.innerText = msg;
    toast.style.background = color;
    toast.style.visibility = "visible";

    setTimeout(() => {
        toast.style.visibility = "hidden";
    }, 2000);
}

/* =========================
   LOGOUT
========================= */
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "admin.html";
}

/* =========================
   INIT
========================= */
loadComplaints();
setInterval(loadComplaints, 5000);
/* ===========================
   DRAW CHARTS
=========================== */

let statusChart = null;
let categoryChart = null;

function drawCharts(data) {

    // Status Count
    let solved = 0;
    let pending = 0;

    // Category Count
    const categoryData = {};

    data.forEach(c => {

        if (c.status === "Solved")
            solved++;
        else
            pending++;

        if (categoryData[c.category]) {
            categoryData[c.category]++;
        } else {
            categoryData[c.category] = 1;
        }

    });

    // Destroy old charts
    if (statusChart)
        statusChart.destroy();

    if (categoryChart)
        categoryChart.destroy();

    // Pie Chart
    statusChart = new Chart(
        document.getElementById("statusChart"),
        {
            type: "pie",

            data: {

                labels: ["Solved", "Pending"],

                datasets: [{

                    data: [solved, pending],

                    backgroundColor: [

                        "#27ae60",
                        "#f39c12"

                    ]

                }]

            },

            options: {

                responsive: true,

                plugins: {

                    legend: {

                        position: "bottom"

                    }

                }

            }

        }
    );

    // Bar Chart
    categoryChart = new Chart(
        document.getElementById("categoryChart"),
        {
            type: "bar",

            data: {

                labels: Object.keys(categoryData),

                datasets: [{

                    label: "Complaints",

                    data: Object.values(categoryData),

                    backgroundColor: [

                        "#3498db",
                        "#2ecc71",
                        "#e67e22",
                        "#9b59b6",
                        "#e74c3c",
                        "#16a085"

                    ]

                }]

            },

            options: {

                responsive: true,

                scales: {

                    y: {

                        beginAtZero: true,

                        ticks: {

                            stepSize: 1

                        }

                    }

                }

            }

        }
    );

}
function exportCSV() {

    let csv = "ID,Name,Location,Category,Status\n";

    allComplaints.forEach(c => {

        csv += `${c.id},"${c.name}","${c.location}","${c.category}","${c.status}"\n`;

    });

    const blob = new Blob([csv], {
        type: "text/csv"
    });

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "SmartRoadComplaints.csv";

    a.click();

}
async function exportPDF() {

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    doc.setFontSize(18);

    doc.text("Smart Road Complaint Report", 14, 15);

    const rows = [];

    allComplaints.forEach(c => {

        rows.push([
            c.id,
            c.name,
            c.location,
            c.category,
            c.status
        ]);

    });

    doc.autoTable({

        head: [["ID","Name","Location","Category","Status"]],

        body: rows,

        startY: 25

    });

    doc.save("Complaint_Report.pdf");

}
function getPriorityIcon(priority){

    switch(priority){

        case "High":
            return "🔴";

        case "Medium":
            return "🟡";

        case "Low":
            return "🟢";

        default:
            return "⚪";
    }

}