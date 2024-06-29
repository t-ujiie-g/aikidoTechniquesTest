document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('techniques-container');

    infoTechniquesSU.forEach((grade, gradeIndex) => {
        const gradeDetails = document.createElement('details');
        gradeDetails.className = 'mb-4 border border-gray-300 rounded-lg shadow-sm';

        const gradeSummary = document.createElement('summary');
        gradeSummary.className = 'text-xl font-semibold cursor-pointer bg-gray-100 p-3 rounded-t-lg';
        gradeSummary.textContent = grade.grade;
        gradeDetails.appendChild(gradeSummary);

        const gradeContent = document.createElement('div');
        gradeContent.className = 'ml-4 p-4 bg-white rounded-b-lg';

        grade.categories.forEach((category, categoryIndex) => {
            const categoryDetails = document.createElement('details');
            categoryDetails.className = 'mb-4 border border-gray-300 rounded-lg shadow-sm';

            const categorySummary = document.createElement('summary');
            categorySummary.className = 'text-md font-semibold cursor-pointer bg-gray-100 p-3 rounded-t-lg';
            categorySummary.textContent = category.name;
            categoryDetails.appendChild(categorySummary);

            const categoryContent = document.createElement('div');
            categoryContent.className = 'ml-4 p-4 bg-white rounded-b-lg';

            category.attacks.forEach((attack, attackIndex) => {
                const attackDetails = document.createElement('details');
                attackDetails.className = 'mb-2 border border-gray-200 rounded-lg';

                const attackSummary = document.createElement('summary');
                attackSummary.className = 'text-md font-medium cursor-pointer bg-gray-50 p-3 rounded-t-lg';
                attackSummary.textContent = attack.type;
                attackDetails.appendChild(attackSummary);

                const attackContent = document.createElement('ul');
                attackContent.className = 'ml-4 p-3 bg-white rounded-b-lg';
                attackContent.style.listStyleType = 'none';

                attack.techniques.forEach((technique, techniqueIndex) => {
                    const techniqueItem = document.createElement('li');
                    techniqueItem.className = 'text-md font-normal py-1';
                    techniqueItem.textContent = technique;
                    attackContent.appendChild(techniqueItem);
                });

                attackDetails.appendChild(attackContent);
                categoryContent.appendChild(attackDetails);
            });

            categoryDetails.appendChild(categoryContent);
            gradeContent.appendChild(categoryDetails);
        });

        gradeDetails.appendChild(gradeContent);
        container.appendChild(gradeDetails);
    });
});
