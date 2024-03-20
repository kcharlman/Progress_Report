

document.getElementById("progressForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var date = document.getElementById("date").value;
    var description = document.getElementById("description").value;
    addEntry(date, description);
    document.getElementById("progressForm").reset();

    console.log(date, description)
});

document.addEventListener("DOMContentLoaded", function() {
    var entries = JSON.parse(localStorage.getItem("entries")) || [];
    entries.forEach(function(entry) {
        addEntry(entry.date, entry.description);
    });
});

function addEntry(date, description) {
    var entryContainer = document.createElement("div");
    entryContainer.classList.add("entry-container");
    var dateObj = new Date(date);
    var formattedDate = dateObj.toLocaleDateString("en-GB", { day: 'numeric', month: 'long', year: 'numeric' });
    var heading = document.createElement("h2");
    heading.textContent = formattedDate;
    var p = document.createElement("p");
    p.innerHTML = description.replace(/\n/g, "<br>");


    var editContainer = document.createElement("div");
    editContainer.classList.add("edit-container");
    var editInput = document.createElement("textarea");
    editInput.rows = 4;
    editInput.value = description;
    var confirmBtn = document.createElement("button");
    confirmBtn.classList.add("confirm-btn");
    confirmBtn.textContent = "Confirm";
    confirmBtn.style.display = "none";
    confirmBtn.addEventListener("click", function() {
        p.innerHTML = editInput.value.replace(/\n/g, "<br>");
        editContainer.style.display = "none";
        editBtn.style.display = "inline-block";
        confirmBtn.style.display = "none";
    });
    editContainer.appendChild(editInput);
    editContainer.appendChild(confirmBtn);


    var deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function() {
        entryContainer.remove();
    });

    var editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", function() {
        editContainer.style.display = "block";
        editBtn.style.display = "none";
        confirmBtn.style.display = "inline-block";
    });

    entryContainer.appendChild(heading);
    entryContainer.appendChild(p);
    entryContainer.appendChild(editBtn);
    entryContainer.appendChild(editContainer);
    entryContainer.appendChild(deleteBtn);
    document.getElementById("all").appendChild(entryContainer);
}


function sortLatest() {
    var allEntries = document.getElementById("all");
    var entries = Array.from(allEntries.children);
    entries.sort(function(a, b) {
        var dateA = new Date(a.querySelector("h2").textContent);
        var dateB = new Date(b.querySelector("h2").textContent);
        return dateB - dateA;
        });
    entries.forEach(function(entry) {
        allEntries.appendChild(entry);
    });
}

function sortOldest() {
    var allEntries = document.getElementById("all");
    var entries = Array.from(allEntries.children);
    entries.sort(function(a, b) {
        var dateA = new Date(a.querySelector("h2").textContent);
        var dateB = new Date(b.querySelector("h2").textContent);
        return dateA - dateB;
    });
    entries.forEach(function(entry) {
        allEntries.appendChild(entry);
    });
}

addEntry("2024-03-18","1. Briefing about company, rules and other employer.\n2. Research about \"Khaleef Group\" website and improvement of UI/UX with content.")
addEntry("2024-03-19","Hellooo")


    
