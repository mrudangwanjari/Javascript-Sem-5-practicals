let productsData = [];  // To reuse already fetched data

// ----------------------------
// Load using Fetch API
// ----------------------------
fetch("products.json")
    .then(res => res.json())
    .then(data => {
        productsData = data;
        loadCategories(data);
        renderTable(data, "tableFetch");
        console.log("Fetch Table Loaded:", data.length, "items");
    });

// ----------------------------
// Load using jQuery $.getJSON
// ----------------------------
$.getJSON("products.json", function (data) {
    renderTable(data, "tableJQ");
    console.log("jQuery Table Loaded:", data.length, "items");
});

// ----------------------------
// Render table function
// ----------------------------
function renderTable(data, tableID) {
    const tbody = document.querySelector(`#${tableID} tbody`);
    tbody.innerHTML = "";

    data.forEach(p => {
        let row = document.createElement("tr");

        if (p.stock < 5) row.classList.add("low-stock");

        row.innerHTML = `
            <td>${p.id}</td>
            <td>${p.name}</td>
            <td>${p.category}</td>
            <td>${p.price}</td>
            <td>${p.stock}</td>
        `;
        tbody.appendChild(row);
    });

    console.log(`Displayed in ${tableID}:`, data.length, "items");
}

// ----------------------------
// Load categories dynamically
// ----------------------------
function loadCategories(data) {
    const dropdown = document.getElementById("categoryFilter");
    const categories = [...new Set(data.map(p => p.category))];

    categories.forEach(cat => {
        let opt = document.createElement("option");
        opt.value = cat;
        opt.textContent = cat;
        dropdown.appendChild(opt);
    });
}

// ----------------------------
// Category Filtering (No reload)
// ----------------------------
document.getElementById("categoryFilter").addEventListener("change", function () {
    const cat = this.value;

    let filtered = productsData.filter(p => 
        cat === "all" ? true : p.category === cat
    );

    renderTable(filtered, "tableFetch");
});

// ----------------------------
// Search by Name (Case-insensitive)
// ----------------------------
document.getElementById("searchBox").addEventListener("input", function () {
    const txt = this.value.toLowerCase();

    let filtered = productsData.filter(p =>
        p.name.toLowerCase().includes(txt)
    );

    renderTable(filtered, "tableFetch");
});
