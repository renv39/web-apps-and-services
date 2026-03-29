/********************************************************************************
*  WEB422 – Assignment 2
* 
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
* 
*  Name: Rendell Velasco Student ID: Date: Jan. 31, 2025
*
********************************************************************************/

let page = 1;
let perPage = 10;
let searchName = null;

function loadListingData() {
    let url = searchName
        ? `https://web422-assignment-1-8zqi.onrender.com/api/listings?page=${page}&perPage=${perPage}&name=${String(searchName)}`
        : `https://web422-assignment-1-8zqi.onrender.com/api/listings?page=${page}&perPage=${perPage}`

    fetch(url)
        .then(res => {
            return res.ok ? res.json() : Promise.reject(res.status);
        })
        .then(data => {
            if (data.length) {
                listingsTableRow = createListingTableRow(data);
                document.querySelector('#listingsTable tbody').innerHTML = listingsTableRow;
                addEventListenersToTableRow();
                document.querySelector('#current-page .page-link').innerText = `${page}`;
            } else {
                if (page > 1) {
                    page--;
                }
                else
                {
                    displayNoListingTableData();
                }
            }
        }).catch(err => {
            console.log({message: `${err}`});
        });
}


//generate tr elements
function createListingTableRow(data) {
    let listingsTableRow = `
    ${data.map((listing) => (
        `<tr data-id ="${listing._id}">
            <td>${listing.name}</td>
            <td>${listing.room_type}</td>
            <td>${listing.address.street}</td>
            <td>
                ${listing.summary ? `${listing.summary}` : ``}
                <br><br>
                <strong>Accommodates: </strong>${listing.accommodates}
                <br>
                <strong>Rating: </strong>${listing.review_scores.review_scores_rating} (${listing.number_of_reviews} Reviews)
            </td>
        </tr>`
    )).join('')}`;
    return listingsTableRow;
}

//add event listeners to all table row
function addEventListenersToTableRow() {
    document.querySelectorAll('#listingsTable tbody tr').forEach(row => {
        row.addEventListener("click", () => {
            const dataId = row.getAttribute('data-id');
            const url = `https://web422-assignment-1-8zqi.onrender.com/api/listings/${dataId}`;

            fetch(url)
                .then(res => {
                    return res.ok ? res.json() : Promise.reject(res.status);
                })
                .then(data => {
                    createModalDetails(data);
                    let detailsModal = new bootstrap.Modal(document.getElementById('detailsModal'), {
                        backdrop: 'static',
                        keyboard: false
                    });
                    detailsModal.show();
                }
                )
        })
    })
}

//create details for modal
function createModalDetails(data){
    let modalTitle = document.querySelector('#detailsModal .modal-title');
    modalTitle.innerText = `${data.name}`;

    let modalBody = document.querySelector('#detailsModal .modal-body');
    modalBody.innerHTML = `
    <img id="photo" onerror="this.onerror=null;this.src = 'https://placehold.co/600x400?text=Photo+Not+Available'" class="img-fluid w-100" src='${data.images.picture_url}'><br><br>
    ${data.neighborhood_overview
            ? `${data.neighborhood_overview}`
            : ''}
    <br><br>
    <strong>Price:</strong> ${data.price.toFixed(2)}<br>
    <strong>Room:</strong> ${data.room_type}<br>
    <strong>Bed:</strong> ${data.bed_type} (${data.beds})<br><br>
    </div>
    `;
}

//generate no listings available 
function displayNoListingTableData() {
    let tbody = document.querySelector('#listingsTable tbody');
    tbody.innerHTML = ''; // clear previous content
    let tr = document.createElement('tr');
    tbody.appendChild(tr);
    tr.innerHTML = `
        <td colspan="4">
            <strong>No data available</strong>
        </td>
        `;
}

//create event listeners for pagination Buttons
function createPaginationButtonEvents() {    
    document.querySelector('#previous-page .page-link').addEventListener('click', () => {
        if (page > 1) {
            page--;
            loadListingData();
        }
    });

    document.querySelector('#next-page .page-link').addEventListener('click', () => {
        if (page >= 1) {
            page++;
            loadListingData();
        }
    });
}

//create event listeners for form portion of the navbar
function createNavBarFormEvents() {
    document.querySelector('#searchForm').addEventListener('submit', (event) => {
        event.preventDefault();
        searchName = document.querySelector('#name').value;
        page = 1;
        loadListingData();
    });

    document.querySelector('#clearForm').addEventListener('click', () => {
        document.querySelector('#searchForm').reset();
        searchName = null;
        loadListingData();
    });
}

document.addEventListener('DOMContentLoaded', function () {
    loadListingData();
    createNavBarFormEvents();
    createPaginationButtonEvents();
})