// Sample artwork data - you can replace this with your actual artworks
const artworks = [
    {
        id: 44,
        title: "Art 44",
        description: ".@SentientAGI recently announced a partnership with @askalphaxiv, a platform dedicated to ai research. The goal of this partnership is to make advanced AI ideas easier for everyone to understand and to help more people build and use AI safely.",
        category: "digital arts",
        date: "2025-10-30",
        imageUrl: "Art 44.jpg"
    },
    {
        id: 43,
        title: "Art 43",
        description: "No rush, no noise. Just progress happening naturally, one calm moment at a time.@sentientAGI",
        category: "digital arts",
        date: "2025-10-29",
        imageUrl: "Art 43.jpg"
    },
    {
        id: 42,
        title: "Art 42",
        description: "Gsenti guys, Its a new week. stay safe, stay focused, Keep clicking.Also, we have another community ama today with the co founder. Make sure you're there by 5pm utc. ",
        category: "digital arts",
        date: "2025-10-27",
        imageUrl: "Art 42.jpg"
    },
    {
        id: 41,
        title: "Art 41",
        description: "Trick or treat? More like trick and take.",
        category: "digital arts",
        date: "2025-10-25",
        imageUrl: "Art 41.jpg",
        contest: true
    },
    {
        id: 40,
        title: "Art 40",
        description: "Dobby's Haunted HalloweenAll treats. zero tricks. @sentientAGI called the perfect play.",
        category: "digital arts",
        date: "2025-10-24",
        imageUrl: "Art 40.jpg",
        contest: true
    },
    {
        id: 39,
        title: "Art 39",
        description: "Dobby’s Haunted Halloween With spooky vibes, glowing lights, and a mission that doesn’t end when the sun goes down. Even ghosts cant keep up with @sentientAGI.",
        category: "digital arts",
        date: "2025-10-23",
        imageUrl: "Art 39.jpg",
        contest: true
    },
    {
        id: 38,
        title: "Art 38",
        description: "Dobby",
        category: "digital arts",
        date: "2025-10-22",
        imageUrl: "Art 38.jpg"
    },
    {
        id: 37,
        title: "Art 37",
        description: "Even in the middle of nowhere, the mission continues. With @sentientAGI. This is just the beginning. ",
        category: "digital arts",
        date: "2025-10-22",
        imageUrl: "Art 37.jpg"
    },
    {
        id: 36,
        title: "Art 36",
        description: "Just Got Upgraded",
        category: "digital arts",
        date: "2025-10-21",
        imageUrl: "Art 36.jpg"
    },
    {
        id: 35,
        title: "Art 35",
        description: "𝗖𝗼𝗻𝗴𝗿𝗮𝘁𝘂𝗹𝗮𝘁𝗶𝗼𝗻𝘀 𝘁𝗼 𝗦𝗲𝗻𝘁𝗶𝗲𝗻𝘁 𝗳𝗼𝗿 𝗪𝗶𝗻𝗻𝗶𝗻𝗴 𝗔𝗜 𝗦𝘁𝗮𝗿𝘁𝘂𝗽 𝗼𝗳 𝘁𝗵𝗲 𝗬𝗲𝗮𝗿 𝗮𝘁 𝘁𝗵𝗲 𝗠𝗶𝗻𝘀𝗸𝘆 𝗣𝗿𝗶𝘇𝗲.#2",
        category: "digital arts",
        date: "2025-10-19",
        imageUrl: "Art 35.jpg",
        contest: true
    },
    {
        id: 34,
        title: "Art 34",
        description: "𝗖𝗼𝗻𝗴𝗿𝗮𝘁𝘂𝗹𝗮𝘁𝗶𝗼𝗻𝘀 𝘁𝗼 𝗦𝗲𝗻𝘁𝗶𝗲𝗻𝘁 𝗳𝗼𝗿 𝗪𝗶𝗻𝗻𝗶𝗻𝗴 𝗔𝗜 𝗦𝘁𝗮𝗿𝘁𝘂𝗽 𝗼𝗳 𝘁𝗵𝗲 𝗬𝗲𝗮𝗿 𝗮𝘁 𝘁𝗵𝗲 𝗠𝗶𝗻𝘀𝗸𝘆 𝗣𝗿𝗶𝘇𝗲.",
        category: "digital arts",
        date: "2025-10-17",
        imageUrl: "Art 34.jpg",
        contest: true
    },
    {
        id: 33,
        title: "Art 33",
        description: "What is benchmarking and fingerprinting on @SentientAGI?",
        category: "digital arts",
        date: "2025-10-15",
        imageUrl: "Art 33.jpg"
    },
    {
        id: 32,
        title: "Art 32",
        description: "The GRID is the backbone of @sentientAGI a connected network that links together all  systems, data, and intelligence.",
        category: "digital arts",
        date: "2025-10-13",
        imageUrl: "Art 32.jpg"
    },
    {
        id: 31,
        title: "Art 31",
        description: "No walls, no limit, just shared intelligence across the Grid. Innovation belongs to everyone. The grid connects us @sentientAGI evolves with us.",
        category: "digital arts",
        date: "2025-10-10",
        imageUrl: "Art 31.jpg"
    },
    {
        id: 30,
        title: "Art 30",
        description: "Just another sunny day, take some break and relax. Might spend more time on discord helping today.",
        category: "digital arts",
        date: "2025-10-09",
        imageUrl: "Art 30.jpg"
    },
    {
        id: 29,
        title: "Art 29",
        description: "Progress isn’t a destination. It’s a mindset and @sentientAGI is living proof that thought itself can evolve.",
        category: "digital arts",
        date: "2025-10-08",
        imageUrl: "Art 29.jpg"
    },
    {
        id: 28,
        title: "Art 28",
        description: "Gm guys, its a new day. Keep clicking. Your win is near🤧",
        category: "digital arts",
        date: "2025-10-07",
        imageUrl: "Art 28.jpg"
    },
    {
        id: 27,
        title: "Art 27",
        description: "Gsenti guys, let's see how this week plays out",
        category: "digital arts",
        date: "2025-10-06",
        imageUrl: "Art 27.jpg"
    },
    {
        id: 26,
        title: "Art 26",
        description: "This isn’t about power, it’s about vision. carrying the weight of tomorrow, driving innovation, and building a future where intelligence and creativity moves humanity forward. @SentientAGI",
        category: "digital arts",
        date: "2025-10-04",
        imageUrl: "Art 26.jpg"
    },
    {
        id: 25,
        title: "Art 25",
        description: "Racing towards the future with @sentientAGI Every turn, every mile, pushing us closer to tomorrows possibilities.",
        category: "digital arts",
        date: "2025-10-03",
        imageUrl: "Art 25.jpg"
    },
    {
        id: 24,
        title: "Art 24",
        description: "Flag has been secured. The adventure continues, next stage is building the future with @sentientAGI",
        category: "digital arts",
        date: "2025-10-02",
        imageUrl: "Art 24.jpg"
    },
    {
        id: 23,
        title: "Art 23",
        description: "Welcome to Q4. Let's see how it plays out",
        category: "digital arts",
        date: "2025-10-01",
        imageUrl: "Art 23.jpg"
    },
    {
        id: 22,
        title: "Art 22",
        description: "When your favorite open source AGI project has the best mascot living his best life. Meet Dobby, he's doing it with style and a splash of champagne. ",
        category: "digital arts",
        date: "2025-09-30",
        imageUrl: "Art 22.jpg"
    },
    {
        id: 21,
        title: "Art 21",
        description: "Some days are for relaxation, read some books and have a cup of tea.@SentientAGI",
        category: "digital arts",
        date: "2025-09-29",
        imageUrl: "Art 21.jpg"
    },
    {
        id: 20,
        title: "Art 20",
        description: "Sentient isn't just building another AI chat. Theyre working on a future where this technology belongs to everyone.",
        category: "digital arts",
        date: "2025-09-28",
        imageUrl: "Art 20.jpg"
    },
    {
        id: 19,
        title: "Art 19",
        description: ".@0xsachi x dobby going on an adventure. Art Contest submission #2",
        category: "digital arts",
        date: "2025-09-26",
        imageUrl: "Art 19.jpg",
        contest: true
    },
    {
        id: 18,
        title: "Art 18",
        description: "Dobby with @hstyagi and @vivekkolli cruising and having fun exploring new things.Art Contest submission",
        category: "digital arts",
        date: "2025-09-25",
        imageUrl: "Art 18.jpg",
        contest: true
    },
    {
        id: 17,
        title: "Art 17",
        description: "Great things dont just happen overnight. They’re built from small and joyful moments shared along the way. Each step we take together brings us closer to creating something truly meaningful @SentientAGI. ",
        category: "digital arts",
        date: "2025-09-24",
        imageUrl: "Art 17.jpg"
    },
    {
        id: 16,
        title: "Art 16",
        description: "Special delivery, @SentientAGI keeps shiping new tools for everyone to build with. sentient is building a communtity owned AGI.",
        category: "digital arts",
        date: "2025-09-23",
        imageUrl: "Art 16.jpg"
    },
    {
        id: 15,
        title: "Art 15",
        description: "We're sailing out into the world of AI with @SentientAGI. its open for everyone to join, learn, and adventure together.",
        category: "digital arts",
        date: "2025-09-21",
        imageUrl: "Art 15.jpg"
    },
    {
        id: 14,
        title: "Art 14",
        description: "Big things happen when the community builds together @SentientAGI",
        category: "digital arts",
        date: "2025-09-20",
        imageUrl: "Art 14.jpg"
    },
    {
        id: 13,
        title: "Art 13",
        description: "Plot twist, open source wins. @SentientAGI is proving that the future of AGI belongs to the people.",
        category: "digital arts",
        date: "2025-09-18",
        imageUrl: "Art 13.jpg"
    },
    {
        id: 12,
        title: "Art 12",
        description: "Big wins don’t happen overnight. They start with small steps, ideas, and people willing to keep going even when it’s tough. ",
        category: "digital arts",
        date: "2025-09-15",
        imageUrl: "Art 12.jpg"
    },
    {
        id: 11,
        title: "Art 11",
        description: "Doing something different means standing strong. That’s what @SentientAGI is all about",
        category: "digital arts",
        date: "2025-09-13",
        imageUrl: "Art 11.jpg"
    },
    {
        id: 10,
        title: "Art 10",
        description: "Chilled today, building the future or AGI tomorrow",
        category: "digital arts",
        date: "2025-09-12",
        imageUrl: "Art 10.jpg"
    },
    {
        id: 9,
        title: "Art 9",
        description: "@SentientAGI leaderboard just went live on @KaitoAI Leaderboard brings more than rankings. Get access to Yapper groups. Let’s take this community higher.",
        category: "digital arts",
        date: "2025-09-11",
        imageUrl: "Art 9.jpg",
        contest: true
    },
    {
        id: 8,
        title: "Art 8",
        description: "Two artists making the world a little more colorful.",
        category: "digital arts",
        date: "2025-09-10",
        imageUrl: "Art 8.jpg"
    },
    {
        id: 7,
        title: "Art 7",
        description: "Two artists making the world a little more colorful",
        category: "digital arts",
        date: "2025-09-09",
        imageUrl: "Art 7.jpg"
    },
    {
        id: 6,
        title: "Art 6",
        description: "2nd entry, Art Contest Submission",
        category: "digital arts",
        date: "2025-09-08",
        imageUrl: "Art 6.jpg",
        contest: true
    },
    {
        id: 5,
        title: "Art 5",
        description: "GRID isn’t an upgrade, it’s a transformation",
        category: "digital arts",
        date: "2025-09-07",
        imageUrl: "Art 5.jpg",
        contest: true
    },
    {
        id: 4,
        title: "Art 4",
        description: "Dobby in black, relaxed and composed.",
        category: "digital arts",
        date: "2025-09-06",
        imageUrl: "Art 4.jpg"
    },
    {
        id: 3,
        title: "Art 3",
        description: "Dobby having fun in the park",
        category: "digital arts",
        date: "2025-09-05",
        imageUrl: "Art 3.jpg"
    },
    {
        id: 2,
        title: "Art 2",
        description: "Dobby Relaxing in the beach",
        category: "digital arts",
        date: "2025-09-04",
        imageUrl: "Art 2.jpg"
    },
    {
        id: 1,
        title: "Art 1",
        description: "Dobby Relaxing in the beach",
        category: "digital arts",
        date: "2025-09-03",
        imageUrl: "art 1.jpg"
    }
];

// DOM Elements
const artGrid = document.getElementById('artGrid');
const contestGrid = document.getElementById('contestGrid');
const artModal = document.getElementById('artModal');
const modalImage = document.getElementById('modalImage');
const artTitle = document.getElementById('artTitle');
const artDescription = document.getElementById('artDescription');
const artCategory = document.getElementById('artCategory');
const artDate = document.getElementById('artDate');
const closeBtn = document.querySelector('.close-btn');
const filterButtons = document.querySelectorAll('.filter-btn');
const downloadBtn = document.getElementById('downloadBtn');

// Initialize the gallery
document.addEventListener('DOMContentLoaded', () => {
    renderArtworks(artworks);
    renderContestArtworks();
    setupEventListeners();
});

// Render artworks to the grid
function renderArtworks(artworksToRender) {
    artGrid.innerHTML = '';
    
    artworksToRender.forEach(artwork => {
        const artItem = document.createElement('div');
        artItem.className = 'art-item';
        artItem.dataset.id = artwork.id;
        artItem.dataset.category = artwork.category;
        
        artItem.innerHTML = `
            <img src="${artwork.imageUrl}" alt="${artwork.title}" class="art-image">
            <button class="download-btn" data-id="${artwork.id}" aria-label="Download ${artwork.title}"></button>
            <div class="art-info">
                <h3>${artwork.title}</h3>
                <p>${artwork.description.substring(0, 100)}${artwork.description.length > 100 ? '...' : ''}</p>
                <div class="art-meta">
                    <span>${formatCategory(artwork.category)}</span>
                    <span>${formatDate(artwork.date)}</span>
                </div>
            </div>
        `;
        
        artGrid.appendChild(artItem);
    });
    
    // Add click event listeners to artwork items
    document.querySelectorAll('.art-item').forEach(item => {
        item.addEventListener('click', (e) => {
            // Only open modal if not clicking the download button
            if (!e.target.classList.contains('download-btn')) {
                openModal(item.dataset.id);
            }
        });
    });
    
    // Add click event listeners to download buttons
    document.querySelectorAll('.art-item .download-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const artId = button.dataset.id;
            const artwork = artworks.find(art => art.id == artId);
            if (artwork) {
                downloadImage(artwork.imageUrl, artwork.title);
            }
        });
    });
}

// Render contest artworks to the contest grid
function renderContestArtworks() {
    contestGrid.innerHTML = '';
    
    const contestArtworks = artworks.filter(artwork => artwork.contest);
    
    contestArtworks.forEach(artwork => {
        const artItem = document.createElement('div');
        artItem.className = 'art-item';
        artItem.dataset.id = artwork.id;
        artItem.dataset.category = artwork.category;
        
        artItem.innerHTML = `
            <img src="${artwork.imageUrl}" alt="${artwork.title}" class="art-image">
            <button class="download-btn" data-id="${artwork.id}" aria-label="Download ${artwork.title}"></button>
            <div class="art-info">
                <h3>${artwork.title}</h3>
                <p>${artwork.description.substring(0, 100)}${artwork.description.length > 100 ? '...' : ''}</p>
                <div class="art-meta">
                    <span>${formatCategory(artwork.category)}</span>
                    <span>${formatDate(artwork.date)}</span>
                </div>
            </div>
        `;
        
        contestGrid.appendChild(artItem);
    });
    
    // Add click event listeners to contest artwork items
    document.querySelectorAll('#contestGrid .art-item').forEach(item => {
        item.addEventListener('click', (e) => {
            // Only open modal if not clicking the download button
            if (!e.target.classList.contains('download-btn')) {
                openModal(item.dataset.id);
            }
        });
    });
    
    // Add click event listeners to download buttons in contest section
    document.querySelectorAll('#contestGrid .art-item .download-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const artId = button.dataset.id;
            const artwork = artworks.find(art => art.id == artId);
            if (artwork) {
                downloadImage(artwork.imageUrl, artwork.title);
            }
        });
    });
}

// Open modal with artwork details
function openModal(artId) {
    const artwork = artworks.find(art => art.id == artId);
    
    if (artwork) {
        modalImage.src = artwork.imageUrl;
        modalImage.alt = artwork.title;
        artTitle.textContent = artwork.title;
        artDescription.textContent = artwork.description;
        artCategory.textContent = formatCategory(artwork.category);
        artDate.textContent = formatDate(artwork.date);
        
        artModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        
        // Set up download button in modal
        downloadBtn.onclick = () => downloadImage(artwork.imageUrl, artwork.title);
    }
}

// Download image function
function downloadImage(imageUrl, title) {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `${title.replace(/\s+/g, '_')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Close modal
function closeModal() {
    artModal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Set up event listeners
function setupEventListeners() {
    // Close modal when close button is clicked
    closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside the content
    window.addEventListener('click', (event) => {
        if (event.target === artModal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && artModal.style.display === 'block') {
            closeModal();
        }
    });
    
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter artworks
            const filter = button.dataset.filter;
            if (filter === 'contest') {
                // Show contest section and hide main gallery
                document.querySelector('.gallery-container').style.display = 'none';
                document.querySelector('.contest-section').style.display = 'block';
            } else if (filter === 'all') {
                // Show all artworks in main gallery and hide contest section
                document.querySelector('.gallery-container').style.display = 'block';
                document.querySelector('.contest-section').style.display = 'none';
                renderArtworks(artworks);
            } else {
                // Show filtered artworks in main gallery and hide contest section
                document.querySelector('.gallery-container').style.display = 'block';
                document.querySelector('.contest-section').style.display = 'none';
                const filteredArtworks = artworks.filter(artwork => artwork.category === filter);
                renderArtworks(filteredArtworks);
            }
        });
    });
    
    // Back to all button in contest section
    const backToAllBtn = document.querySelector('.back-to-all-btn');
    if (backToAllBtn) {
        backToAllBtn.addEventListener('click', () => {
            // Show all artworks in main gallery and hide contest section
            document.querySelector('.gallery-container').style.display = 'block';
            document.querySelector('.contest-section').style.display = 'none';
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
            
            renderArtworks(artworks);
        });
    }
}

// Filter artworks by category
function filterArtworks(category) {
    if (category === 'all') {
        renderArtworks(artworks);
    } else {
        const filteredArtworks = artworks.filter(artwork => artwork.category === category);
        renderArtworks(filteredArtworks);
    }
}

// Helper function to format category for display
function formatCategory(category) {
    const categories = {
        'digital arts': 'Digital Arts'
    };
    return categories[category] || category;
}

// Helper function to format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);

}


