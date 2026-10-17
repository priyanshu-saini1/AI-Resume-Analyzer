const form = document.getElementById("analyzeForm");

const results = document.getElementById("results");

const loading = document.getElementById("loading");

const errorBox = document.getElementById("error");

const analyzeBtn = document.getElementById("analyzeBtn");


form.addEventListener("submit", async function(event) {

    event.preventDefault();

    results.classList.add("hidden");

    errorBox.classList.add("hidden");

    loading.classList.remove("hidden");

    analyzeBtn.disabled = true;

    const formData = new FormData(form);

    try {

        const response = await fetch("/analyze", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(
                data.error || "Something went wrong"
            );
        }

        displayResults(data);

    } catch (error) {

        errorBox.textContent = error.message;

        errorBox.classList.remove("hidden");

    } finally {

        loading.classList.add("hidden");

        analyzeBtn.disabled = false;

    }

});


function displayResults(data) {

    results.classList.remove("hidden");

    document.getElementById("score").textContent =
        data.match_score + "%";

    document.querySelector(".score-circle").style.background =
        `conic-gradient(
            #2563eb ${data.match_score}%,
            #e2e8f0 ${data.match_score}%
        )`;

    document.getElementById("summary").textContent =
        data.summary;

    renderList(
        "matchingSkills",
        data.matching_skills
    );

    renderList(
        "missingSkills",
        data.missing_skills
    );

    renderList(
        "strengths",
        data.strengths
    );

    renderList(
        "suggestions",
        data.suggestions
    );

    renderList(
        "interviewQuestions",
        data.interview_questions
    );

    results.scrollIntoView({
        behavior: "smooth"
    });

}


function renderList(elementId, items) {

    const list = document.getElementById(elementId);

    list.innerHTML = "";

    if (!Array.isArray(items) || items.length === 0) {

        const li = document.createElement("li");

        li.textContent = "No items found.";

        list.appendChild(li);

        return;
    }

    items.forEach(item => {

        const li = document.createElement("li");

        li.textContent = item;

        list.appendChild(li);

    });

}