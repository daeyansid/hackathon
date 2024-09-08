const form = document.getElementById('resume-form');
const resumeContainer = document.getElementById('dynamic-resume');
const shareLinkButton = document.getElementById('share-link');
const downloadPdfButton = document.getElementById('download-pdf');
const shareableUrlDisplay = document.getElementById('shareable-url');

if (
    form instanceof HTMLFormElement &&
    resumeContainer instanceof HTMLElement &&
    shareLinkButton instanceof HTMLButtonElement &&
    downloadPdfButton instanceof HTMLButtonElement &&
    shareableUrlDisplay instanceof HTMLElement
) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const usernameInput = document.getElementById('username');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const educationInput = document.getElementById('education');
        const experienceInput = document.getElementById('experience');
        const skillsInput = document.getElementById('skills');

        if (
            usernameInput instanceof HTMLInputElement &&
            nameInput instanceof HTMLInputElement &&
            emailInput instanceof HTMLInputElement &&
            phoneInput instanceof HTMLInputElement &&
            educationInput instanceof HTMLTextAreaElement &&
            experienceInput instanceof HTMLTextAreaElement &&
            skillsInput instanceof HTMLInputElement
        ) {
            const username = usernameInput.value;
            const name = nameInput.value;
            const email = emailInput.value;
            const phone = phoneInput.value;
            const education = educationInput.value;
            const experience = experienceInput.value;
            const skills = skillsInput.value.split(',');

            const resumeHTML = `
                <h2 contenteditable="true" class="editable">${name}</h2>
                <p contenteditable="true" class="editable"><strong>Email:</strong> ${email}</p>
                <p contenteditable="true" class="editable"><strong>Phone:</strong> ${phone}</p>
                <section class="education">
                    <h3>Education</h3>
                    <p contenteditable="true" class="editable">${education.replace(/\n/g, '<br>')}</p>
                </section>
                <section class="experience">
                    <h3>Experience</h3>
                    <p contenteditable="true" class="editable">${experience.replace(/\n/g, '<br>')}</p>
                </section>
                <section class="skills">
                    <h3>Skills</h3>
                    <ul>
                        ${skills.map(skill => `<li contenteditable="true" class="editable">${skill.trim()}</li>`).join('')}
                    </ul>
                </section>
            `;

            resumeContainer.innerHTML = resumeHTML;

            const baseUrl = window.location.origin;
            const shareableUrl = `${baseUrl}/resume/${username}`;
            shareableUrlDisplay.textContent = `Shareable URL: ${shareableUrl}`;
            shareableUrlDisplay.style.display = 'block';

            shareLinkButton.addEventListener('click', () => {
                navigator.clipboard.writeText(shareableUrl)
                    .then(() => alert('Shareable URL copied to clipboard!'))
                    .catch(err => console.error('Failed to copy URL: ', err));
            });

            downloadPdfButton.addEventListener('click', () => {
            });
        } else {
            console.error('One or more form elements were not found or are of the incorrect type.');
        }
    });
} else {
    console.error('Form, resume container, share link button, or download button not found or incorrect types.');
}
