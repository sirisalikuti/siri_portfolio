const creations = [
    { title: "TASK 1", url: "/Users/sirichandanareddysalikuti/Desktop/dynamic/works/Task1/index.html" },
    { title: "TASK 2", url: "/Users/sirichandanareddysalikuti/Desktop/dynamic/works/Task2/index.html" },
    { title: "TASK 3", url: "/Users/sirichandanareddysalikuti/Desktop/dynamic/works/Task3/index.html" },
    { title: "TASK 4", url: "/Users/sirichandanareddysalikuti/Desktop/dynamic/works/Task4/index.html" },
    { title: "TASK 5", url: "/Users/sirichandanareddysalikuti/Desktop/dynamic/works/Task5/index.html" },
    { title: "TASK 6", url: "/Users/sirichandanareddysalikuti/Desktop/dynamic/works/Task6/index.html" },
    { title: "TASK 7", url: "/Users/sirichandanareddysalikuti/Desktop/dynamic/works/Task7/index.html" },
    { title: "TASK 8", url: "/Users/sirichandanareddysalikuti/Desktop/dynamic/works/Task8/index.html" },
    { title: "TASK 9", url: "/Users/sirichandanareddysalikuti/Desktop/dynamic/works/Task9/index.html" },
    { title: "TASK 10", url: "/Users/sirichandanareddysalikuti/Desktop/dynamic/works/Task10/index.html" },
    { title: "TASK 11", url: "/Users/sirichandanareddysalikuti/Desktop/dynamic/works/Task11/index.html" },
    { title: "TASK 12", url: "/Users/sirichandanareddysalikuti/Desktop/dynamic/works/Task12/index.html" },
    { title: "TASK 13", url: "/Users/sirichandanareddysalikuti/Desktop/dynamic/works/Task13/index.html" },
    { title: "TASK 14", url: "/Users/sirichandanareddysalikuti/Desktop/dynamic/works/Task14/index.html" },
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