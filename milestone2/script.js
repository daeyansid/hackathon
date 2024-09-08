const toggleButton = document.getElementById('toggle-skills');
const skillsList = document.getElementById('skills-list');

if (toggleButton instanceof HTMLButtonElement && skillsList instanceof HTMLUListElement) {
    toggleButton.addEventListener('click', () => {
        skillsList.style.display = skillsList.style.display === 'none' ? 'block' : 'none';
    });
} else {
    console.error('Required elements not found or incorrect types');
}
