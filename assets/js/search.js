document.addEventListener('DOMContentLoaded', function() {
  // Initialize Fuse.js
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  const searchResults = document.getElementById('searchResults');
  let fuse = null;
  let isLoading = false;
  
  // Show loading state
  function showLoading() {
    searchResults.innerHTML = `
      <div class="text-center py-4">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <p class="mt-2 text-muted">Loading search index...</p>
      </div>
    `;
  }
  
  // Show error state
  function showError(message) {
    searchResults.innerHTML = `
      <div class="alert alert-danger" role="alert">
        <i class="bi bi-exclamation-triangle-fill me-2"></i>
        ${message}
      </div>
    `;
  }
  
  // Options for Fuse.js
  const fuseOptions = {
    // Basic options
    includeScore: true,
    minMatchCharLength: 2,
    threshold: 0.4,
    ignoreLocation: true,
    findAllMatches: true,
    
    // Field weights (title is most important, then description, then content)
    keys: [
      { name: 'title', weight: 3 },
      { name: 'description', weight: 2 },
      { name: 'content', weight: 1 }
    ]
  };

  // Show initial loading state
  showLoading();
  
  // Fetch the search index
  fetch('/search-index.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load search index');
      }
      return response.json();
    })
    .then(data => {
      const pages = data.items || [];
      if (pages.length === 0) {
        throw new Error('No searchable content found');
      }
      
      fuse = new Fuse(pages, fuseOptions);
      isLoading = false;
      
      // Show initial message
      searchResults.innerHTML = `
        <div class="text-center text-muted py-4">
          <i class="bi bi-search fs-1 opacity-50 mb-2 d-block"></i>
          <p>Enter a search term to find content</p>
          <small class="text-muted">Try searching for keywords related to your question</small>
        </div>
      `;
      
      // Function to perform search
      const performSearch = () => {
        const query = searchInput.value.trim();
        
        if (query.length < 2) {
          searchResults.innerHTML = '<p class="text-muted">Please enter at least 2 characters to search</p>';
          return;
        }
        
        const results = fuse.search(query);
        
        if (results.length === 0) {
          searchResults.innerHTML = '<p class="text-muted">No results found for "' + query + '"</p>';
          return;
        }
        
        let html = `
          <div class="search-results-summary mb-3">
            Found ${results.length} ${results.length === 1 ? 'result' : 'results'} for "${query}"
          </div>
          <div class="list-group">
        `;
        
        results.slice(0, 10).forEach(result => {
          const item = result.item;
          const score = result.score ? `<span class="badge bg-secondary ms-2">${Math.round((1 - result.score) * 100)}% match</span>` : '';
          
          // Highlight matching terms in the title
          let highlightedTitle = item.title;
          if (result.matches) {
            const titleMatch = result.matches.find(m => m.key === 'title');
            if (titleMatch) {
              highlightedTitle = '';
              let lastIndex = 0;
              titleMatch.indices.forEach(([start, end]) => {
                highlightedTitle += item.title.substring(lastIndex, start) + 
                  `<mark>${item.title.substring(start, end + 1)}</mark>`;
                lastIndex = end + 1;
              });
              highlightedTitle += item.title.substring(lastIndex);
            }
          }
          
          // Format the description with ellipsis
          const maxDescLength = 150;
          let description = item.description || '';
          if (description.length > maxDescLength) {
            description = description.substring(0, maxDescLength) + '...';
          }
          
          html += `
            <a href="${item.permalink}" class="list-group-item list-group-item-action">
              <div class="d-flex w-100 justify-content-between align-items-center">
                <h5 class="mb-1">${highlightedTitle} ${score}</h5>
                <span class="badge bg-primary">${item.section}</span>
              </div>
              ${description ? `<p class="mb-1 text-muted">${description}</p>` : ''}
              <small class="text-muted d-block mt-1">${item.permalink}</small>
            </a>
          `;
        });
        html += '</div>';
        
        searchResults.innerHTML = html;
      };
      
      // Event listeners
      searchButton.addEventListener('click', performSearch);
      searchInput.addEventListener('input', (e) => {
        if (e.target.value.trim().length >= 2) {
          performSearch();
        } else if (e.target.value.trim().length === 0) {
          // Clear results when search is empty
          searchResults.innerHTML = `
            <div class="text-center text-muted py-4">
              <i class="bi bi-search fs-1 opacity-50 mb-2 d-block"></i>
              <p>Enter a search term to find content</p>
              <small class="text-muted">Try searching for keywords related to your question</small>
            </div>
          `;
        }
      });
      
      // Handle Enter key
      searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
          performSearch();
        }
      });
    })
    .catch(error => {
      console.error('Error loading search index:', error);
      showError(`Error loading search functionality: ${error.message}. Please try refreshing the page.`);
    });
    
  // Debounce search to prevent excessive searches while typing
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  
  // Debounced search function
  const debouncedSearch = debounce(performSearch, 300);
});
