// Collection data - Simple items with ID only (done by TZ)
const collectionData = [
    { 
        id: "Item1", 
        title: "Collection Item 1", 
        actor: "Actor A", 
        location: "Storage Room A", 
        material: "Canvas", 
        year: "404", 
        type: "painting",
        description: "This is collection item 1."
    },
    { 
        id: "Item2", 
        title: "Collection Item 2", 
        actor: "Actor B", 
        location: "Display Case 1", 
        material: "Wood", 
        year: "404", 
        type: "carving",
        description: "This is collection item 2."
    },
    { 
        id: "Item3", 
        title: "Collection Item 3", 
        actor: "Actor A", 
        location: "Ceremony Room", 
        material: "Feathers", 
        year: "404", 
        type: "ceremony",
        description: "This is collection item 3."
    },
    { 
        id: "Item4", 
        title: "Collection Item 4", 
        actor: "Actor C", 
        location: "Storage Room B", 
        material: "Ironwood", 
        year: "404", 
        type: "weapon",
        description: "This is collection item 4."
    },
    { 
        id: "Item5", 
        title: "Collection Item 5", 
        actor: "Actor B", 
        location: "Main Gallery", 
        material: "Canvas", 
        year: "404", 
        type: "painting",
        description: "This is collection item 5."
    },
    { 
        id: "Item6", 
        title: "Collection Item 6", 
        actor: "Actor A", 
        location: "Ceremony Room", 
        material: "Wood", 
        year: "404", 
        type: "ceremony",
        description: "This is collection item 6."
    },
    { 
        id: "Item7", 
        title: "Collection Item 7", 
        actor: "Actor C", 
        location: "Display Case 2", 
        material: "Stone", 
        year: "404", 
        type: "carving",
        description: "This is collection item 7."
    },
    { 
        id: "Item8", 
        title: "Collection Item 8", 
        actor: "Actor B", 
        location: "Storage Room B", 
        material: "Bone", 
        year: "404", 
        type: "weapon",
        description: "This is collection item 8."
    }
];

// Function to show modal with item details and image placeholder
function showItemDetail(item) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.id = 'itemModal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        cursor: pointer;
    `;
    
    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        border-radius: 20px;
        padding: 30px;
        max-width: 500px;
        width: 90%;
        cursor: default;
        position: relative;
        animation: fadeIn 0.3s ease;
    `;
    
    // Image placeholder (no real image needed)
    const imagePlaceholder = `
        <div style="
            width: 100%;
            height: 200px;
            background: linear-gradient(135deg, #1a472a 0%, #2d5a3b 100%);
            border-radius: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
            color: white;
            font-size: 48px;
        ">
            🖼️
        </div>
    `;
    
    // Close button
    const closeBtn = `
        <button style="
            position: absolute;
            top: 15px;
            right: 20px;
            background: none;
            border: none;
            font-size: 28px;
            cursor: pointer;
            color: #999;
        " id="modalCloseBtn">×</button>
    `;
    
    // Item details HTML
    const detailsHtml = `
        ${closeBtn}
        ${imagePlaceholder}
        <h2 style="color: #1a472a; margin-bottom: 15px;">${item.title}</h2>
        <p><strong>ID:</strong> ${item.id}</p>
        <p><strong>Actor:</strong> ${item.actor}</p>
        <p><strong>Location:</strong> ${item.location}</p>
        <p><strong>Material:</strong> ${item.material}</p>
        <p><strong>Year:</strong> ${item.year}</p>
        <p><strong>Type:</strong> ${item.type}</p>
        <p><strong>Description:</strong> ${item.description}</p>
        <div style="
            margin-top: 20px;
            padding-top: 15px;
            border-top: 1px solid #eee;
            color: #666;
            font-size: 12px;
            text-align: center;
        ">
            📸 Image placeholder - Real image will be added later
        </div>
    `;
    
    modalContent.innerHTML = detailsHtml;
    modal.appendChild(modalContent);
    
    // Close events
    modal.querySelector('#modalCloseBtn').addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    document.body.appendChild(modal);
}

// Close modal function
function closeModal() {
    const modal = document.getElementById('itemModal');
    if (modal) {
        modal.remove();
    }
}

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
    
    // Generate HTML - use data-id instead of passing JSON string inline
    cardGrid.innerHTML = items.map(item => `
        <div class="collection-card" data-id="${item.id}" style="cursor: pointer;">
            <div class="card-title">${item.title}</div>
            <div class="card-detail"><strong>ID:</strong> ${item.id}</div>
            <div class="card-detail"><strong>Actor:</strong> ${item.actor}</div>
            <div class="card-detail"><strong>Location:</strong> ${item.location}</div>
            <div class="card-detail"><strong>Material:</strong> ${item.material}</div>
            <div class="card-detail"><strong>Year:</strong> ${item.year}</div>
            <div class="card-detail"><strong>Description:</strong> ${item.description.substring(0, 50)}...</div>
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
    
    let filtered = [...collectionData];
    
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
    
    if (typeFilter !== 'all') {
        filtered = filtered.filter(item => item.type === typeFilter);
    }
    
    displayItems(filtered);
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
    displayItems(collectionData);
    
    const searchBtn = document.getElementById('searchBtn');
    const resetBtn = document.getElementById('resetBtn');
    const searchInput = document.getElementById('searchInput');
    const typeFilter = document.getElementById('typeFilter');
    const cardGrid = document.getElementById('cardGrid');
    
    // Search actions
    searchBtn.addEventListener('click', performSearch);
    resetBtn.addEventListener('click', resetSearch);
    
    // Real-time filter when dropdown changes
    typeFilter.addEventListener('change', performSearch);
    
    // Enter key support
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Event delegation for opening modals safely
    cardGrid.addEventListener('click', function(e) {
        const card = e.target.closest('.collection-card');
        if (card) {
            const itemId = card.getAttribute('data-id');
            const selectedItem = collectionData.find(item => item.id === itemId);
            if (selectedItem) {
                showItemDetail(selectedItem);
            }
        }
    });

    // Dynamic FadeIn Keyframe style injection (Cleaned up)
    if (!document.getElementById('modal-animation-style')) {
        const style = document.createElement('style');
        style.id = 'modal-animation-style';
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: scale(0.95); }
                to { opacity: 1; transform: scale(1); }
            }
        `;
        document.head.appendChild(style);
    }
});