const form = document.getElementById('resume-form');
const resumeContainer = document.getElementById('dynamic-resume');

if (form instanceof HTMLFormElement && resumeContainer instanceof HTMLElement) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const educationInput = document.getElementById('education');
        const experienceInput = document.getElementById('experience');
        const skillsInput = document.getElementById('skills');

        if (
            nameInput instanceof HTMLInputElement &&
            emailInput instanceof HTMLInputElement &&
            phoneInput instanceof HTMLInputElement &&
            educationInput instanceof HTMLTextAreaElement &&
            experienceInput instanceof HTMLTextAreaElement &&
            skillsInput instanceof HTMLInputElement
        ) {
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

            const editableElements = resumeContainer.querySelectorAll('.editable');
            editableElements.forEach(element => {
                element.addEventListener('input', () => {
                    console.log(`Updated: ${element.textContent}`);
                });
            });
        } else {
            console.error('One or more form elements were not found or are of the incorrect type.');
        }
    });
} else {
    console.error('Form or resume container not found or incorrect types.');
}
