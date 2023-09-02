        // Your JavaScript code here
        var categoryLinks = document.querySelectorAll('.category-link');
        var cardBlogs = Array.from(document.querySelectorAll('.card-blog'));
        var divContainer = document.getElementById('divContainer');
        var paginationLinks = document.getElementById('paginationLinks');
        var itemsPerPage = 6;
        let currentPage = 1;
        let currentFilteredAndSorted = [...cardBlogs]; 

        categoryLinks.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                var selectedCategory = this.getAttribute('data-category');
                var filteredCards = cardBlogs.filter(card => selectedCategory === 'all' || card.getAttribute('data-category') === selectedCategory);

                // Clear the divContainer of existing card divs
                divContainer.innerHTML = '';

                // Append the filtered card divs to the divContainer
                filteredCards.forEach(card => {
                    card.classList.add('col-sm-12', 'col-lg-6'); // Add the appropriate column classes
                    divContainer.appendChild(card);
                });

                // Update the currentFilteredAndSorted array and pagination
                currentFilteredAndSorted = filteredCards;

                // Remove 'active' class from all category links
                categoryLinks.forEach(link => link.classList.remove('active'));

                // Add 'active' class to the clicked category link
                this.classList.add('active');
            });
        });

        var showAllButton = document.querySelector('.category-link[data-category="all"]');
        showAllButton.addEventListener('click', function (event) {
            event.preventDefault();
            divContainer.innerHTML = '';

            // Append all card divs to the divContainer
            cardBlogs.forEach(card => {
                card.classList.add('col-sm-11', 'col-lg-5'); // Add the appropriate column classes
                divContainer.appendChild(card);
            });

            // Update the currentFilteredAndSorted array and pagination
            currentFilteredAndSorted = cardBlogs;
            updatePagination(cardBlogs.length);

            // Remove 'active' class from all category links
            categoryLinks.forEach(link => link.classList.remove('active'));

            // Add 'active' class to the "Show All" button
            this.classList.add('active');
        });
        var ulNavLinks = document.querySelectorAll('.nav-pills .nav-link[data-category]');

        // Add click event listeners to ul navigation links
        ulNavLinks.forEach(navLink => {
            navLink.addEventListener('click', function () {
                // Get the selected category from the data-category attribute
                var selectedCategory = this.getAttribute('data-category');
        
                // Call the filterCards function with the selected category
                filterCards(selectedCategory);
            });
        });
              
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
var accordionHeaders = document.querySelectorAll('.recent-header');
accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const contentId = header.nextElementSibling.id;
        const content = document.getElementById(contentId);
        if (content.style.display === 'none') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});