document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('techniques-container');

    infoTechniquesSU.forEach((grade, gradeIndex) => {
        const gradeDetails = document.createElement('details');
        gradeDetails.className = 'mb-4 border border-gray-300 rounded-lg shadow-sm';

        const gradeSummary = document.createElement('summary');
        gradeSummary.className = 'text-xl font-semibold cursor-pointer bg-gray-100 p-4 rounded-t-lg';
        gradeSummary.textContent = grade.grade;
        gradeDetails.appendChild(gradeSummary);

        const gradeContent = document.createElement('div');
        gradeContent.className = 'ml-4 p-4 bg-white rounded-b-lg';

        grade.attacks.forEach((attack, attackIndex) => {
            const attackDetails = document.createElement('details');
            attackDetails.className = 'mb-2 border border-gray-200 rounded-lg';

            const attackSummary = document.createElement('summary');
            attackSummary.className = 'text-lg font-medium cursor-pointer bg-gray-50 p-3 rounded-t-lg';
            attackSummary.textContent = attack.type;
            attackDetails.appendChild(attackSummary);

            const attackContent = document.createElement('ul');
            attackContent.className = 'ml-4 p-3 bg-white rounded-b-lg';

            attack.techniques.forEach((technique, techniqueIndex) => {
                const techniqueItem = document.createElement('li');
                techniqueItem.className = 'text-md font-normal py-1';
                techniqueItem.textContent = technique;
                attackContent.appendChild(techniqueItem);
            });

            attackDetails.appendChild(attackContent);
            gradeContent.appendChild(attackDetails);
        });

        gradeDetails.appendChild(gradeContent);
        container.appendChild(gradeDetails);
    });
});
