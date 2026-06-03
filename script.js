// Collection data - Simplified with Item1, Item2, Actor1, Actor2
const collectionData = [
    { 
        id: "Item1", 
        title: "Traditional Painting Item1", 
        actor: "Actor1", 
        location: "Storage Room A", 
        material: "Canvas", 
        year: "404", 
        type: "painting",
        description: "This is Item1. Traditional painting created by Actor1."
    },
    { 
        id: "Item2", 
        title: "Wooden Carving Item2", 
        actor: "Actor2", 
        location: "Display Case 1", 
        material: "Wood", 
        year: "404", 
        type: "carving",
        description: "This is Item2. Detailed carving made by Actor2."
    },
    { 
        id: "Item3", 
        title: "Ceremonial Item3", 
        actor: "Actor1", 
        location: "Ceremony Room", 
        material: "Feathers", 
        year: "404", 
        type: "ceremony",
        description: "This is Item3. Ceremonial piece created by Actor1."
    },
    { 
        id: "Item4", 
        title: "Weapon Item4", 
        actor: "Actor3", 
        location: "Storage Room B", 
        material: "Ironwood", 
        year: "404", 
        type: "weapon",
        description: "This is Item4. Traditional weapon made by Actor3."
    },
    { 
        id: "Item5", 
        title: "Modern Painting Item5", 
        actor: "Actor2", 
        location: "Main Gallery", 
        material: "Canvas", 
        year: "404", 
        type: "painting",
        description: "This is Item5. Contemporary painting by Actor2."
    },
    { 
        id: "Item6", 
        title: "Ceremonial Mask Item6", 
        actor: "Actor1", 
        location: "Ceremony Room", 
        material: "Wood", 
        year: "404", 
        type: "ceremony",
        description: "This is Item6. Ceremonial mask created by Actor1."
    },
    { 
        id: "Item7", 
        title: "Carving Item7", 
        actor: "Actor3", 
        location: "Display Case 2", 
        material: "Stone", 
        year: "404", 
        type: "carving",
        description: "This is Item7. Stone carving by Actor3."
    },
    { 
        id: "Item8", 
        title: "Hunting Tool Item8", 
        actor: "Actor2", 
        location: "Storage Room B", 
        material: "Bone", 
        year: "404", 
        type: "weapon",
        description: "This is Item8. Traditional hunting tool by Actor2."
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
            <div class="card-detail"><strong>Actor:</strong> ${item.actor}</div>
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
            item.actor.toLowerCase().includes(term) ||
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