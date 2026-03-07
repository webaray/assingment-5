const loadIssues = () => {

    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")

        .then(res => res.json())

        .then(data => {

            displayIssues(data.data);

        });

};

loadIssues();


// Issue show on display

const displayIssues = (issues) => {

    const container =
        document.getElementById("issue-container");

    container.innerHTML = "";

    issues.forEach(issue => {

        const card = document.createElement("div");

        card.className =
            "bg-white p-4 rounded shadow cursor-pointer";

        card.innerHTML = `

<div class="bg-white p-2 rounded">

                <div class="flex justify-between mb-3">
                    <img src="./assets/Open-Status.png" alt="">
                    <button class="bg-amber-400 px-4 py-1 rounded-2xl">${issue.priority}</button>
                </div>
                
                <h2 class="font-bold text-lg">
                    ${issue.title}
                </h2>
    
                <p class="text-gray-500">
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
            </div>

`;

        card.onclick = () => loadSingleIssue(issue.id);

        container.appendChild(card);

    });

};

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

<div class="bg-white p-8 rounded-2xl mx-auto space-y-6">

<h2 class="text-xl font-bold">
${issue.title}
</h2>

<div class="flex gap-6 items-center">

<p class="bg-green-500 text-white px-4 py-2 rounded-2xl">
${issue.status}
</p>

<p>Open by ${issue.author}</p>

<p>${issue.updatedAt}</p>

</div>

<p>
${issue.description}
</p>

<div class="bg-gray-100 p-4 rounded-2xl flex justify-between">

<p>
Assignee: <br>
<span class="text-2xl font-bold mt-2">
${issue.assignee}
</span>
</p>

<p>
Priority: <br>
<span class="bg-red-500 px-4 py-2 rounded-2xl text-white">
${issue.priority}
</span>
</p>

</div>

</div>

`;

    document.getElementById("issueModal").showModal();

};


// Card border color 

const borderColor =
    issue.status === "open"
        ? "border-t-4 border-green-500"
        : "border-t-4 border-purple-500";

card.className =
    `bg-white p-4 rounded shadow ${borderColor}`;