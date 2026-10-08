// E-Waste Impact Calculation Logic
document.getElementById('eWasteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const device = document.getElementById('deviceType').value;
    const count = parseInt(document.getElementById('deviceCount').value);
    
    let co2PerUnit = 0;
    let materialRecovery = "";

    switch(device) {
        case 'smartphone':
            co2PerUnit = 55;
            materialRecovery = "Gold, Palladium, Cobalt, and Copper";
            break;
        case 'laptop':
            co2PerUnit = 200;
            materialRecovery = "Aluminum, Copper, Steel, and Lithium";
            break;
        case 'desktop':
            co2PerUnit = 400;
            materialRecovery = "Heavy plastics, Circuit boards, Iron, and Gold";
            break;
        case 'television':
            co2PerUnit = 300;
            materialRecovery = "Glass, Copper coils, Lead-free solder, and Plastics";
            break;
    }

    const totalCo2 = co2PerUnit * count;
    
    const resultBox = document.getElementById('resultBox');
    const outputText = document.getElementById('outputText');
    
    resultBox.classList.remove('hidden');
    outputText.innerHTML = `Disposing of <strong>${count} ${device}(s)</strong> improperly generates approximately <strong>${totalCo2} kg of CO2 emissions</strong>. <br><br>♻️ <em>Sustainable Action:</em> Professional recycling can successfully recover valuable elements like ${materialRecovery}.`;
});

// Drop-off Hub Finder Simulation Logic
function searchHubs() {
    const city = document.getElementById('citySearch').value.trim();
    const hubList = document.getElementById('hubList');
    
    if(city === "") {
        alert("Please enter a valid city name.");
        return;
    }

    // Dummy dynamic simulation data for hubs based on user inputs
    hubList.innerHTML = `
        <li><strong>GreenTech E-Waste Recyclers</strong> - Sector 4, ${city} (Open: 9 AM - 6 PM)</li>
        <li><strong>EcoBin Sustainability Center</strong> - Main Industrial Area, ${city} (Certified Facility)</li>
        <li><strong>Municipal E-Waste Drop Kiosk</strong> - Near Central Station, ${city}</li>
    `;
}
