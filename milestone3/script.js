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
                <h2>${name}</h2>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <section class="education">
                    <h3>Education</h3>
                    <p>${education.replace(/\n/g, '<br>')}</p>
                </section>
                <section class="experience">
                    <h3>Experience</h3>
                    <p>${experience.replace(/\n/g, '<br>')}</p>
                </section>
                <section class="skills">
                    <h3>Skills</h3>
                    <ul>
                        ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
                    </ul>
                </section>
            `;

            resumeContainer.innerHTML = resumeHTML;
        } else {
            console.error('One or more form elements were not found or are of the incorrect type.');
        }
    });
} else {
    console.error('Form or resume container not found or incorrect types.');
}
