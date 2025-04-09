document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();

   
    const interests = document.getElementById('interests').value;
    const skills = document.getElementById('skills').value;
    const education = document.getElementById('education').value;

   
    const recommendations = [
        `Based on your interests in ${interests}, consider roles like Data Analyst, AI Researcher, or Software Engineer.`,
        `Enhance your skills in ${skills} with projects or certifications.`,
        `Your education in ${education} aligns well with tech-driven career paths.`
    ];

    
    document.getElementById('profileForm').style.display = 'none';
    const dashboard = document.getElementById('dashboard');
    dashboard.style.display = 'block';

    const recommendationsDiv = document.getElementById('recommendations');
    recommendationsDiv.innerHTML = '';
    recommendations.forEach(rec => {
        const recDiv = document.createElement('div');
        recDiv.classList.add('recommendation');
        recDiv.textContent = rec;
        recommendationsDiv.appendChild(recDiv);
    });
});
