const projects = {
    1: {
        title: "Project Title 1",
        creator: "Creator Name 1",
        description: "This is a detailed description of Project Title 1."
    },
    2: {
        title: "Project Title 2",
        creator: "Creator Name 2",
        description: "This is a detailed description of Project Title 2."
    }
};

function openModal(projectId) {
    const project = projects[projectId];
    if (project) {
        document.getElementById('modal-title').innerText = project.title;
        document.getElementById('modal-creator').innerText = project.creator;
        document.getElementById('modal-description').innerText = project.description;
        document.getElementById('project-modal').style.display = "block";
    }
}

function closeModal() {
    document.getElementById('project-modal').style.display = "none";
}

document.querySelectorAll('.video-item').forEach(item => {
    item.addEventListener('click', () => {
        const projectId = item.getAttribute('data-project');
        openModal(projectId);
    });
});

document.querySelector('.close-button').addEventListener('click', closeModal);

window.addEventListener('click', event => {
    const modal = document.getElementById('project-modal');
    if (event.target == modal) {
        closeModal();
    }
});
