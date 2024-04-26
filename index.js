

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

    // var editContainer = document.createElement("div");
    // editContainer.classList.add("edit-container");
    // var editInput = document.createElement("textarea");
    // editInput.rows = 4;
    // editInput.value = description;
    // var confirmBtn = document.createElement("button");
    // confirmBtn.classList.add("confirm-btn");
    // confirmBtn.textContent = "Confirm";
    // confirmBtn.style.display = "none";
    // confirmBtn.addEventListener("click", function() {
    //     p.innerHTML = editInput.value.replace(/\n/g, "<br>");
    //     editContainer.style.display = "none";
    //     editBtn.style.display = "inline-block";
    //     confirmBtn.style.display = "none";
    // });
    // editContainer.appendChild(editInput);
    // editContainer.appendChild(confirmBtn);


    // var deleteBtn = document.createElement("button");
    // deleteBtn.classList.add("delete-btn");
    // deleteBtn.textContent = "Delete";
    // deleteBtn.addEventListener("click", function() {
    //     entryContainer.remove();
    // });

    // var editBtn = document.createElement("button");
    // editBtn.classList.add("edit-btn");
    // editBtn.textContent = "Edit";
    // editBtn.addEventListener("click", function() {
    //     editContainer.style.display = "block";
    //     editBtn.style.display = "none";
    //     confirmBtn.style.display = "inline-block";
    // });

    entryContainer.appendChild(heading);
    entryContainer.appendChild(p);
    // entryContainer.appendChild(editBtn);
    // entryContainer.appendChild(editContainer);
    // entryContainer.appendChild(deleteBtn);
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

addEntry("2024-03-18","\
        1. Briefing about company, rules and other employer.\n\
        2. Research about \"Khaleef Group\" website and improvement of UI/UX with content.")
addEntry("2024-03-19","1. Research about KhaleefApp website about improvement.\n\
        2. Fetch code and other sources using the Developer Tools (Back-End View or Inspect).\n\
        3. Can't continue to develop the website due to unauthenticated API.\n\
        4. Proposed improvement of the website:\n\
         ->  Add filter \"By Gender\" in employee statistics.\n\
         ->  Admin View: Upgrade the \"Attendance Overview\"to see the line graph of attendance (eg., This year, This month, Last month, This week, Last week, or Today). Today by default.\n\
         ->  Change the background color on the left bar to set the comfortability of the \"Khaleef Group\" icon. Icon used have background removed.")
addEntry("2024-03-20","\
        1. Research and learn about API, Node.js, MongoDB (Database).\n\
        2. Research about development of line graph in website.\n\
        3. Create website for self internship report that will be updated afterwork.\n\
        4. In progress to develop the KhaleefApp website.\n\
        5. Discussion with SV:\n ->  Apply ERP on KhaleefApp system.\n ->  Need to come out with modules.\n ->  Use the \"DASH\" website as a main framework (Login as company. Email: company@example.com, Password: 1234)")
addEntry("2024-03-21","\
        1. Research about ERP modules.\n\
        2. Creates documentation for project report in Microsoft Word.\n\
        3. Research about other website to understand the ERP system.\n\
        4. Learn about business management in a company.\n\
        5. Come out with ERP modules.")
addEntry("2024-03-22","\
        1. Learn to connect database with simple website.\n\
        2. Study different type of website for HR management.\n\
        3. Continue learn about API data and Node.js.\n\
        4. Succesfully fetch data from MongoDB database to localhost website.\n5. Next can study web hosting to get, add, and delete data in the cloud.")
addEntry("2024-03-25","\
        1. Study about web hosting and domain hosting.\n\
        2. Study about mySQL and PHP programming language.\n\
        3. Succesfully connect between website and mySQL database using local host.\n\
        4. Manage to get, delete and delete data in the database.\n\
        5. Next can search for free web hosting with database to test the connection between mySQL and website online.")
addEntry("2024-03-26","\
        1. Study about Worker and D1 database from Cloudflare Documentation.\n\
        2. Sucessfully deploy database as a localhost using code.\n\
        3. Created a simple database using Worker in Cloudflare.\n\
        4. Able to deploy simple API response.\n\
        5. Next can try to deploy API data from database D1 and using SQL command.\n\
        6. Next can try to create a simple website and fetch the API data.")
addEntry("2024-03-27","\
        1. Sucessfully deploy API data from database D1 using SQL command.\n\
        2. Recap and study all SQL command.\n\
        3. Provide example of API data from Cloudflare using database D1.\n\
        4. Study about data structure.")
addEntry("2024-03-28","\
        1. Read and Learn documentation about Cloudflare database D1.\n\
        2. Learn about communication between front-end and back-end server.\n\
        3. Stuck with 404 error. (Cloudflare Worker)")
addEntry("2024-04-01","\
        1. Explore example of websites.\n\
        2. Discussed with supervisor about ERP module and understand the bigger picture of the website.\n\
        3. Initialize website design using Canva.\n\
        4. Next can continue with extra sub-module of ERP and start design.")
addEntry("2024-04-02","\
        1. Explore about Finance Management.\n\
        2. Research about bookkeeping template.\n\
        3. Research about purchases template. \n\
        4. Research about finance goal template. \n\
        5. Update extra submodule on Finance Management.")
addEntry("2024-04-03","\
        1. Use design as visualisation of the extra module.\n\
        2. Design using Canva.\n\
        3. Search for suitable logo for designing.")
addEntry("2024-04-04","\
        1. Update draft design in Canva.\n\
        2. Research about Projection template.\n\
        3. Received the template for Petty Cash from employee (Kak Shidah).")
addEntry("2024-04-05","\
        1. Fixing design for Finance Management.\n\
        2. Research about sales agent template.\n\
        3. Research about leads and deals template.\n\
        4. Research about Projection Proposal templates.\n\
        5. Need clarification: Bank Feed.\n\
        6. Need old template: Purchasing.")
addEntry("2024-04-08","\
        1. Change color pallete.\n\
        2. Research about Core Product template.\n\
        3. Need clarification: Bank Feed.\n\
        4. Need old template: Purchasing, Project Proposal.\n\
        5. Update draft design in Canva.")
addEntry("2024-04-09","\
        1. Received the template for Purchasing Requisition from employee (Kak Shidah and Pn Masita.\n\
        2. Update draft design for Finance > Purchasing.\n\
        3. Need clarification: Bank Feed.\n\
        4. Need old template: Project Proposal")
addEntry("2024-04-15","\
        1. Meeting with SV.\n\
        2. Plan to use the current website as main framework.\n\
        3. Need to upgrade the UI and UX.\n\
        4. Use color theme as the company's logo color.")
addEntry("2024-04-16","\
        1. Received the demo website from SV.\n\
        2. Obtain the copy of the source code by using website Developer Tools.\n\
        3. Understand the overview and structure of the system through code.")
addEntry("2024-04-17","\
        1. Try to change the submenu interface.\n\
        2. Grouped the Dashboard interface into single menu.")
addEntry("2024-04-18","\
        1. Continue to upgrade the submenu interface.\n\
        2. Solved error regarding dashboard widget.")
addEntry("2024-04-22","\
        1. Finished submenu interface for Dashboard.\n\
        2. Continue with submenu HR records.")
addEntry("2024-04-23","\
        1. Finished submenu interface for HR records.\n\
        2. Continue with submenu Accounting.")
addEntry("2024-04-24","\
        1. Continue with all submenu.\n\
        2. Discuss with SV to migrate current system to another domain/hosting.\n\
        3. Read and study the guide description for migrating Perfex system.")
addEntry("2024-04-25","\
        1. Continue with all submenu.\n\
        2. Compress and download system file.\n\
        3. Export SQL database.\n\
        4. Created new sub-domain to live the system interface for testing.")
addEntry("2024-04-26","\
        1. Continue with all submenu.\n\
        2. Faced disk storage error to upload system file in the new domain/hosting.\n\
        3. Design interface for the system.")
sortLatest()
