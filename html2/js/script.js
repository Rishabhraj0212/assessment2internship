document.addEventListener("DOMContentLoaded", function() {
    fetch('data/image.json')
        .then(response => response.json())
        .then(data => {
            var container = document.getElementById('image-container');

            data.forEach(function(item) {
                var imageElement = document.createElement('img');
                imageElement.src = item.image;
                imageElement.alt = item.alt;

                var nameElement = document.createElement('p');
                nameElement.textContent = item.name;

                var designationElement = document.createElement('p');
                designationElement.textContent = item.designation;

                var infoContainer = document.createElement('div');
                infoContainer.classList.add('image-info');
                infoContainer.appendChild(nameElement);
                infoContainer.appendChild(designationElement);

                var imageContainer = document.createElement('div');
                imageContainer.classList.add('image-container');
                imageContainer.appendChild(imageElement);
                imageContainer.appendChild(infoContainer);

                imageContainer.addEventListener("click", function() {
                    var allImageContainers = document.querySelectorAll('.image-container');
                    allImageContainers.forEach(function(container) {
                        container.classList.remove('selected');
                    });

                    this.classList.add('selected');
                });

                container.appendChild(imageContainer);
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));
});
