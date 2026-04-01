function generateTips(){
  let headline = document.getElementById("headline").value;
  let about = document.getElementById("about").value;

  let tips = `
  <h3>Suggestions:</h3>
  <ul>
    <li>Make headline more specific: Add role + skills</li>
    <li>Use keywords like Developer, Engineer, Intern</li>
    <li>Keep About section short and impactful</li>
    <li>Add achievements and projects</li>
    <li>Use professional tone</li>
  </ul>
  `;

  document.getElementById("output").innerHTML = tips;
}
