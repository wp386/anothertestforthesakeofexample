// Define the menu HTML
const menuHTML = `
<div class="toolbar">
  <a href="index.html">Home</a>
  <a href="#" id="servicesBtn">Services</a>
  <a href="#" id="industriesBtn">Industries</a>
  <a href="#">About Us</a>
  <a href="#">Blog</a>
  <a href="#">Contact Us</a>
  <a href="#">REPORT AN INCIDENT</a>
</div>

<div id="slideMenu" class="slide-menu">
  <button class="close-btn" id="closeBtn">×</button>
  <div class="menu-left" id="menuLeft">
    <!-- Left vertical navigation will be populated dynamically -->
  </div>
  <div class="menu-center" id="menuCenter">
    <h2>Details</h2>
    <p>Select an option from the left to see more information.</p>
  </div>
</div>
`;

// Inject the menu HTML into menuContainer
document.getElementById('menuContainer').innerHTML = menuHTML;

// Define menu data
const menuData = {
  services: [
    { 
      name: "email phishing", 
      content: "<h2>Email Phishing</h2><p>Details on how to detect and prevent fraudulent emails and phishing attacks.</p>",
      relatedPages: [
        { title: "PhishingPage1", url: "PageTemplate.html" },
        { title: "PhishingPage2", url: "PageTemplate.html" },
        { title: "PhishingPage3", url: "PageTemplate.html" },
        { title: "PhishingPage4", url: "PageTemplate.html" },
        { title: "PhishingPage5", url: "PageTemplate.html" },
        { title: "PhishingPage6", url: "PageTemplate.html" },
        { title: "PhishingPage7", url: "PageTemplate.html" },
        { title: "PhishingPage8", url: "PageTemplate.html" },
        { title: "PhishingPage9", url: "PageTemplate.html" }
      ]
    },
    { 
      name: "endpoint security", 
      content: "<h2>Endpoint Security</h2><p>Solutions to protect end-user devices from cyber threats.</p>",
      relatedPages: [
        { title: "endpointsecuritypg1", url: "PageTemplate.html" },
        { title: "endpointsecuritypg2", url: "PageTemplate.html" },
        { title: "endpointsecuritypg3", url: "PageTemplate.html" },
        { title: "endpointsecuritypg4", url: "PageTemplate.html" },
        { title: "endpointsecuritypg5", url: "PageTemplate.html" },
        { title: "endpointsecuritypg6", url: "PageTemplate.html" },
        { title: "endpointsecuritypg7", url: "PageTemplate.html" },
        { title: "endpointsecuritypg8", url: "PageTemplate.html" },
        { title: "endpointsecuritypg9", url: "PageTemplate.html" }
      ]
    },
    { 
      name: "GRC", 
      content: "<h2>GRC</h2><p>Governance, Risk, and Compliance solutions for a secure operational environment.</p>",
      relatedPages: [
        { title: "grc1", url: "PageTemplate.html" },
        { title: "grc2", url: "PageTemplate.html" },
        { title: "grc3", url: "PageTemplate.html" },
        { title: "grc4", url: "PageTemplate.html" },
        { title: "grc5", url: "PageTemplate.html" },
        { title: "grc6", url: "PageTemplate.html" },
        { title: "grc7", url: "PageTemplate.html" },
        { title: "grc8", url: "PageTemplate.html" },
        { title: "grc9", url: "PageTemplate.html" }
      ]
    },
    { 
      name: "Incident response", 
      content: "<h2>Incident Response</h2><p>Services to help you quickly respond to and recover from security breaches.</p>",
      relatedPages: [
        { title: "Incidentresponsepg1", url: "PageTemplate.html" },
        { title: "Incidentresponsepg2", url: "PageTemplate.html" },
        { title: "Incidentresponsepg3", url: "PageTemplate.html" },
        { title: "Incidentresponsepg4", url: "PageTemplate.html" },
        { title: "Incidentresponsepg5", url: "PageTemplate.html" },
        { title: "Incidentresponsepg6", url: "PageTemplate.html" },
        { title: "Incidentresponsepg7", url: "PageTemplate.html" },
        { title: "Incidentresponsepg8", url: "PageTemplate.html" },
        { title: "Incidentresponsepg9", url: "PageTemplate.html" }
      ]
    },
    { 
      name: "Network & infrastructure", 
      content: "<h2>Network & Infrastructure</h2><p>Insights into network architecture and securing your IT infrastructure.</p>",
      relatedPages: [
        { title: "networkpg1", url: "PageTemplate.html" },
        { title: "networkpg2", url: "PageTemplate.html" },
        { title: "networkpg3", url: "PageTemplate.html" },
        { title: "networkpg4", url: "PageTemplate.html" },
        { title: "networkpg5", url: "PageTemplate.html" },
        { title: "networkpg6", url: "PageTemplate.html" },
        { title: "networkpg7", url: "PageTemplate.html" },
        { title: "networkpg8", url: "PageTemplate.html" },
        { title: "networkpg9", url: "PageTemplate.html" }
      ]
    },
    { 
      name: "pen testing", 
      content: "<h2>Penetration Testing</h2><p>Penetration testing services to identify vulnerabilities in your systems.</p>",
      relatedPages: [
        { title: "pentestpg1", url: "PageTemplate.html" },
        { title: "pentestpg2", url: "PageTemplate.html" },
        { title: "pentestpg3", url: "PageTemplate.html" },
        { title: "pentestpg4", url: "PageTemplate.html" },
        { title: "pentestpg5", url: "PageTemplate.html" },
        { title: "pentestpg6", url: "PageTemplate.html" },
        { title: "pentestpg7", url: "PageTemplate.html" },
        { title: "pentestpg8", url: "PageTemplate.html" },
        { title: "pentestpg9", url: "PageTemplate.html" }
      ]
    }
  ],
  industries: [
    { 
      name: "defense", 
      content: "<h2>Defense</h2><p>Security solutions tailored for the defense sector.</p>",
      relatedPages: [
        { title: "defencepage1", url: "PageTemplate.html" },
        { title: "defencepage2", url: "PageTemplate.html" },
        { title: "defencepage3", url: "PageTemplate.html" },
        { title: "defencepage4", url: "PageTemplate.html" },
        { title: "defencepage5", url: "PageTemplate.html" },
        { title: "defencepage6", url: "PageTemplate.html" },
        { title: "defencepage7", url: "PageTemplate.html" },
        { title: "defencepage8", url: "PageTemplate.html" },
        { title: "defencepage9", url: "PageTemplate.html" }
      ]
    },
    { 
      name: "healthcare", 
      content: "<h2>Healthcare</h2><p>Solutions designed to protect sensitive healthcare data and ensure compliance.</p>",
      relatedPages: [
        { title: "healthcarepg1", url: "PageTemplate.html" },
        { title: "healthcarepg2", url: "PageTemplate.html" },
        { title: "healthcarepg3", url: "PageTemplate.html" },
        { title: "healthcarepg4", url: "PageTemplate.html" },
        { title: "healthcarepg5", url: "PageTemplate.html" },
        { title: "healthcarepg6", url: "PageTemplate.html" },
        { title: "healthcarepg7", url: "PageTemplate.html" },
        { title: "healthcarepg8", url: "PageTemplate.html" },
        { title: "healthcarepg9", url: "PageTemplate.html" }
      ]
    },
    { 
      name: "manufacturing", 
      content: "<h2>Manufacturing</h2><p>Cybersecurity services aimed at securing manufacturing processes and intellectual property.</p>",
      relatedPages: [
        { title: "manufacturingpg1", url: "PageTemplate.html" },
        { title: "manufacturingpg2", url: "PageTemplate.html" },
        { title: "manufacturingpg3", url: "PageTemplate.html" },
        { title: "manufacturingpg4", url: "PageTemplate.html" },
        { title: "manufacturingpg5", url: "PageTemplate.html" },
        { title: "manufacturingpg6", url: "PageTemplate.html" },
        { title: "manufacturingpg7", url: "PageTemplate.html" },
        { title: "manufacturingpg8", url: "PageTemplate.html" },
        { title: "manufacturingpg9", url: "PageTemplate.html" }
      ]
    }
  ]
};

// Get references to injected elements
const slideMenu = document.getElementById('slideMenu');
const menuLeft = document.getElementById('menuLeft');
const menuCenter = document.getElementById('menuCenter');
const servicesBtn = document.getElementById('servicesBtn');
const industriesBtn = document.getElementById('industriesBtn');
const closeBtn = document.getElementById('closeBtn');

let activeCategory = '';

// Populate the left menu based on category
function populateMenu(category) {
  activeCategory = category;
  menuLeft.innerHTML = '';
  const ul = document.createElement('ul');
  menuData[category].forEach((item, index) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.textContent = item.name;
    btn.onclick = () => loadContent(index);
    li.appendChild(btn);
    ul.appendChild(li);
  });
  menuLeft.appendChild(ul);
  menuCenter.innerHTML = `<h2>${category.charAt(0).toUpperCase() + category.slice(1)}</h2><p>Select an option from the left to see more information.</p>`;
}

// Load content into the center panel
function loadContent(index) {
  const item = menuData[activeCategory][index];
  const baseContent = item.content;
  let relatedPagesHtml = "";
  if (item.relatedPages && item.relatedPages.length) {
    // Divide the related pages into three columns (assuming exactly 9 items)
    let col1 = item.relatedPages.slice(0, 3);
    let col2 = item.relatedPages.slice(3, 6);
    let col3 = item.relatedPages.slice(6, 9);
    relatedPagesHtml += '<div style="margin-top: 20px;"><h3>Related Pages</h3><div style="display: flex; align-items: center; justify-content: center;">';
    
    // Column 1
    relatedPagesHtml += '<div style="flex: 1; text-align: center;">';
    col1.forEach(page => {
      relatedPagesHtml += `<a href="${page.url}">${page.title}</a><br>`;
    });
    relatedPagesHtml += '</div>';
    
    // Divider after column 1
    relatedPagesHtml += `<div style="margin: 0 15px;">
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="290" viewBox="0 0 50 290">
        <defs>
          <linearGradient id="bladeGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#333"/>
            <stop offset="100%" stop-color="#111"/>
          </linearGradient>
        </defs>
        <path d="M25,0 L15,40 L15,200 L35,200 L35,40 Z" fill="url(#bladeGradient)"/>
        <rect x="-5" y="200" width="60" height="10" fill="#222" stroke="#000" stroke-width="1"/>
        <rect x="17" y="210" width="16" height="60" fill="#222"/>
        <circle cx="25" cy="275" r="8" fill="#444" stroke="#222" stroke-width="2"/>
        <circle cx="25" cy="100" r="3" fill="#555"/>
      </svg>
    </div>`;
    
    // Column 2
    relatedPagesHtml += '<div style="flex: 1; text-align: center;">';
    col2.forEach(page => {
      relatedPagesHtml += `<a href="${page.url}">${page.title}</a><br>`;
    });
    relatedPagesHtml += '</div>';
    
    // Divider after column 2
    relatedPagesHtml += `<div style="margin: 0 15px;">
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="290" viewBox="0 0 50 290">
        <defs>
          <linearGradient id="bladeGradient2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#333"/>
            <stop offset="100%" stop-color="#111"/>
          </linearGradient>
        </defs>
        <path d="M25,0 L15,40 L15,200 L35,200 L35,40 Z" fill="url(#bladeGradient2)"/>
        <rect x="-5" y="200" width="60" height="10" fill="#222" stroke="#000" stroke-width="1"/>
        <rect x="17" y="210" width="16" height="60" fill="#222"/>
        <circle cx="25" cy="275" r="8" fill="#444" stroke="#222" stroke-width="2"/>
        <circle cx="25" cy="100" r="3" fill="#555"/>
      </svg>
    </div>`;
    
    // Column 3
    relatedPagesHtml += '<div style="flex: 1; text-align: center;">';
    col3.forEach(page => {
      relatedPagesHtml += `<a href="${page.url}">${page.title}</a><br>`;
    });
    relatedPagesHtml += '</div>';
    
    relatedPagesHtml += '</div></div>';
  }
  menuCenter.innerHTML = baseContent + relatedPagesHtml;
}

// Open the slide menu
function openSlideMenu(category) {
  populateMenu(category);
  slideMenu.classList.add('active');
}

// Add event listeners
servicesBtn.addEventListener('click', (e) => {
  e.preventDefault();
  openSlideMenu('services');
});

industriesBtn.addEventListener('click', (e) => {
  e.preventDefault();
  openSlideMenu('industries');
});

closeBtn.addEventListener('click', () => {
  slideMenu.classList.remove('active');
});
