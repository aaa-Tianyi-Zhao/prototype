// Collection data - Mock data for Tandanya's collection items
const collectionData = [
    { 
        id: "TAN-001", 
        title: "Kangaroo Dreaming", 
        artist: "Tommy Walker", 
        location: "Storage Room B", 
        material: "Canvas", 
        year: "1998", 
        type: "painting",
        description: "Traditional dot painting depicting kangaroo dreaming stories from Central Australia."
    },
    { 
        id: "TAN-002", 
        title: "Emu Egg Carving", 
        artist: "Emily James", 
        location: "Display Case 3", 
        material: "Emu Egg", 
        year: "2005", 
        type: "carving",
        description: "Intricate carving on emu egg showing traditional hunting scenes."
    },
    { 
        id: "TAN-003", 
        title: "Hunting Spear", 
        artist: "David Cooper", 
        location: "Storage Room A", 
        material: "Wood", 
        year: "1950", 
        type: "weapon",
        description: "Traditional hunting spear made from ironwood."
    },
    { 
        id: "TAN-004", 
        title: "Corroboree Headpiece", 
        artist: "Tommy Walker", 
        location: "Ceremony Room", 
        material: "Feathers", 
        year: "2010", 
        type: "ceremony",
        description: "Ceremonial headpiece used in traditional corroboree dances."
    },
    { 
        id: "TAN-005", 
        title: "Rainbow Serpent Painting", 
        artist: "Sarah Jones", 
        location: "Main Gallery", 
        material: "Canvas", 
        year: "2015", 
        type: "painting",
        description: "Large scale painting of the Rainbow Serpent creation story."
    },
    { 
        id: "TAN-006", 
        title: "Boomerang", 
        artist: "Tommy Walker", 
        location: "Storage Room B", 
        material: "Wood", 
        year: "1975", 
        type: "weapon",
        description: "Returning boomerang used for hunting and sport."
    },
    { 
        id: "TAN-007", 
        title: "Shell Necklace", 
        artist: "Emily James", 
        location: "Display Case 2", 
        material: "Shell", 
        year: "1990", 
        type: "ceremony",
        description: "Traditional shell necklace used in ceremonial dress."
    },
    { 
        id: "TAN-008", 
        title: "Wallaby Skin Cloak", 
        artist: "David Cooper", 
        location: "Storage Room A", 
        material: "Leather", 
        year: "1960", 
        type: "ceremony",
        description: "Warm cloak made from wallaby skins, decorated with ochre."
    }
];

// Function to display items on the page
function displayItems(items) {
    const cardGrid = document.getElementById('cardGrid');
    const resultsCount = document.getElementById('resultsCount');
    
    // Handle no results case
    if (items.length === 0) {
        cardGrid.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1;">
                <h3>🔍 No results found</h3>
                <p>Try a different keyword or reset the search</p>
            </div>
        `;
        resultsCount.innerHTML = `Showing 0 items`;
        return;
    }
    
    // Update results count
    resultsCount.innerHTML = `Showing ${items.length} item${items.length > 1 ? 's' : ''}`;
    
    // Generate HTML for each item
    cardGrid.innerHTML = items.map(item => `
        <div class="collection-card">
            <div class="card-title">${item.title}</div>
            <div class="card-detail"><strong>ID:</strong> ${item.id}</div>
            <div class="card-detail"><strong>Artist:</strong> ${item.artist}</div>
            <div class="card-detail"><strong>Location:</strong> ${item.location}</div>
            <div class="card-detail"><strong>Material:</strong> ${item.material}</div>
            <div class="card-detail"><strong>Year:</strong> ${item.year}</div>
            <div class="card-detail"><strong>Description:</strong> ${item.description}</div>
            <div>
                <span class="card-tag">🎨 ${item.type}</span>
            </div>
        </div>
    `).join('');
}

// Search function - case insensitive
function performSearch() {
    const searchTerm = document.getElementById('searchInput').value;
    const typeFilter = document.getElementById('typeFilter').value;
    
    // Start with all data
    let filtered = [...collectionData];
    
    // Apply search term filter (case insensitive)
    if (searchTerm && searchTerm.trim() !== '') {
        const term = searchTerm.toLowerCase().trim();
        filtered = filtered.filter(item => 
            item.id.toLowerCase().includes(term) ||
            item.title.toLowerCase().includes(term) ||
            item.artist.toLowerCase().includes(term) ||
            item.location.toLowerCase().includes(term) ||
            item.material.toLowerCase().includes(term) ||
            item.description.toLowerCase().includes(term)
        );
    }
    
    // Apply type filter
    if (typeFilter !== 'all') {
        filtered = filtered.filter(item => item.type === typeFilter);
    }
    
    // Display results
    displayItems(filtered);
    
    // Log search time (for demonstration)
    console.log(`Search completed. Found ${filtered.length} results.`);
}

// Reset search function
function resetSearch() {
    document.getElementById('searchInput').value = '';
    document.getElementById('typeFilter').value = 'all';
    displayItems(collectionData);
}

// Event listeners and page initialization
document.addEventListener('DOMContentLoaded', function() {
    // Display all items on page load
    displayItems(collectionData);
    
    // Get DOM elements
    const searchBtn = document.getElementById('searchBtn');
    const resetBtn = document.getElementById('resetBtn');
    const searchInput = document.getElementById('searchInput');
    
    // Add click event listeners
    searchBtn.addEventListener('click', performSearch);
    resetBtn.addEventListener('click', resetSearch);
    
    // Add Enter key support for search
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Log that prototype is ready
    console.log('Search prototype loaded. Case insensitive search works.');
});