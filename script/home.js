
const loadIssues = () => {

    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")

        .then(res => res.json())

        .then(data => {

            allIssues = (data.data);

            displayIssues(allIssues);

        });

};

loadIssues();


// Issue show on display

const displayIssues = (issues) => {

    document.getElementById("issue-count").innerText = issues.length;

    const container =
        document.getElementById("issue-container");

    container.innerHTML = "";

    issues.forEach(issue => {

        const card = document.createElement("div");

        card.className =
            "bg-white  rounded-2xl shadow cursor-pointer";

        card.innerHTML = `

<div class="bg-white p-3 rounded-2xl">

                <div class="flex justify-between mb-3">
                    <img class="w-[30px]" src="./assets/Open-Status.png" alt="">
                    <button class="bg-amber-400 px-4  rounded-2xl">${issue.priority}</button>
                </div>
                
                <h2 class="font-bold text-lg">
                    ${issue.title}
                </h2>
    
                <p class="text-gray-500 line-clamp-2">
                    ${issue.description}
                </p>
    
                <div class="flex gap-2">
                    <p class="mt-2 bg-red-200 px-4 py-1 rounded-2xl ">
                    ${issue.status}
                </p>
    
                <p class="mt-2 text-center bg-amber-200 px-4 py-1 rounded-2xl">
                    ${issue.labels}
                </p>
                </div>

                <hr class=" mt-4 mb-4 border-gray-200">
    
                <p>
                    Author: ${issue.author}
                </p>

                <p> Date: ${issue.updatedAt}
                </p>
            </div>

`;

        card.onclick = () => loadSingleIssue(issue.id);

        container.appendChild(card);

        const borderColor = issue.status === 'open' ? 'border-t-green-500' : 'border-t-purple-500';
        card.className = `card border-t-4 ${borderColor} bg-base-100 shadow-xl`;

    });

};

// Tab filter issue

const filterIssues = (status) => {

    if (status === "all") {

        displayIssues(allIssues);

        return;

    }

    const filteredIssues = allIssues.filter(issue =>
        issue.status.toLowerCase() === status
    );

    displayIssues(filteredIssues);

};

// Button Tab Function
const tabs = document.querySelectorAll(".tab-btn");

tabs.forEach(tab => {

  tab.addEventListener("click", () => {

    tabs.forEach(btn => btn.classList.remove("tab-active"));

    tab.classList.add("tab-active");

  });

});


// Load single issue

const loadSingleIssue = (id) => {

    fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`)

        .then(res => res.json())

        .then(data => {

            showModal(data.data);

        });

};

//  Show model 

const showModal = (issue) => {

    const modal =
        document.getElementById("modal-content");

    modal.innerHTML = `

<div class="bg-white md:p-8 rounded-2xl mx-auto space-y-4 md:space-y-6 ">

<h2 class="text-xl font-bold">
${issue.title}
</h2>

<div class="flex gap-6 items-center">

<p class="bg-green-500 text-white px-4 py-1 rounded-2xl">
${issue.status}
</p>

<p>Open by <strong>${issue.author}</strong></p>

<p>${issue.updatedAt}</p>

</div>

<p>
${issue.description}
</p>

 <div class="flex gap-2">
    <p class="mt-2 bg-red-200 px-4 py-1 rounded-2xl ">
        ${issue.status}
    </p>
    
    <p class="mt-2 text-center bg-amber-200 px-4 py-1 rounded-2xl">
     ${issue.labels}
    </p>
    </div>

<div class="bg-gray-100 p-4 rounded-2xl flex justify-between">

<p>
Assignee: <br>
<span class="text-2xl font-bold mt-2">
${issue.assignee}
</span>
</p>

<p class="leading-7">
Priority: <br>
<span class="bg-red-500 px-5 py-1 rounded-2xl text-white">
${issue.priority}
</span>
</p>

</div>

<div class="modal-action">
      <form method="dialog">
        <button class="btn btn-primary border-none">Close</button>
      </form>
    </div>

</div>

`;

    document.getElementById("issueModal").showModal();

};




// Search Functin build

document
    .getElementById("search-btn")
    .addEventListener("click", function () {

        const text = document
            .getElementById("search-input")
            .value
            .trim();

        if (!text) {
            alert("Type something to search");
            return;
        }

        fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${text}`)

            .then(res => res.json())

            .then(data => {

                console.log(data);   // debug

                displayIssues(data.data);

            })

            .catch(error => {
                console.log(error);
            });
            

    });

document
    .getElementById("search-input")
    .addEventListener("keypress", function (e) {

        if (e.key === "Enter") {
            document.getElementById("search-btn").click();
        }

       
    });



// Loding spinner

const loader = document.getElementById("loader");

const showLoader = () => loader.classList.remove("hidden");
const hideLoader = () => loader.classList.add("hidden");