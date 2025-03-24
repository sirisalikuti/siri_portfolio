const creations = [
    { title: "TASK 1", url: "works/Task1/index.html" },
    { title: "TASK 2", url: "works/Task2/index.html" },
    { title: "TASK 3", url: "works/Task3/index.html" },
    { title: "TASK 4", url: "works/Task4/index.html" },
    { title: "TASK 5", url: "works/Task5/index.html" },
    { title: "TASK 6", url: "works/Task6/index.html" },
    { title: "TASK 7", url: "works/Task7/index.html" },
    { title: "TASK 8", url: "works/Task8/index.html" },
    { title: "TASK 9", url: "works/Task9/index.html" },
    { title: "TASK 10", url: "works/Task10/index.html" },
    { title: "TASK 11", url: "wordsTask11/index.html" },
    { title: "TASK 12", url: "works/Task12/index.html" },
    { title: "TASK 13", url: "works/Task13/index.html" },
    { title: "TASK 14", url: "works/Task14/index.html" },
];

function setupPortfolio() {
    const projectsList = document.getElementById('projectsList');
    const projectViewer = document.getElementById('projectViewer');

    if (!projectsList || !projectViewer) {
        console.error('Portfolio elements missing');
        return;
    }

    // Create project cards
    creations.forEach(creation => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.dataset.url = creation.url;
        card.innerHTML = `<h3>${creation.title}</h3>`;
        
        card.addEventListener('click', () => {
            document.querySelectorAll('.project-card').forEach(item => {
                item.classList.remove('active');
            });
            card.classList.add('active');
            projectViewer.innerHTML = `<iframe src="${creation.url}"></iframe>`;
        });
        
        projectsList.appendChild(card);
    });

    // Load first project by default
    if (creations.length > 0) {
        projectsList.firstChild.classList('active');
        projectViewer.innerHTML = `<iframe src="${creations[0].url}"></iframe>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        setupPortfolio();
    } catch (error) {
        //console.error('Error setting up portfolio:', error);
    }
});