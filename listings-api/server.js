
/*  WEB422 – Assignment 1
* 
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
* 
*  Name: Rendell Velasco Student ID:  Date: Jan. 17, 2025
*
*  Published URL: https://web422-assignment-1-8zqi.onrender.com
*
********************************************************************************/

const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config();
const ListingsDB = require('./modules/listingsDB.js')
const HTTP_PORT = process.env.PORT || 8080

const db = new ListingsDB();


app.use(cors());
app.use(express.json());

db.initialize(process.env.MONGODB_CONN_STRING).then(() => {

    //Homepage
    app.get('/', (req, res) => {
        res.send({ message: 'API Listening' });
    });

    //Add  new listing
    app.post('/api/listings', (req, res) => {

        if (Object.keys(req.body).length === 0) {
            res.status(404).json({ message: 'Error: Empty body' });
        }

        db.addNewListing(req.body)
            .then((newListing) => {
                if (newListing) {
                    return res.status(200).json(newListing);
                }
                return res.status(400).json({ message: 'Error: Cannot add new listing' });
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({ message: 'Error: Something went wrong on the server' });
            })

    });

    //Get all the listings with given queries
    app.get('/api/listings', async (req, res) => {
        try {
            
            if (!req.query.page && !req.query.perPage) {
                return res.status(400).send({ message: "Missing parameters" });
            }
            
            let page = req.query.page;
            let perPage = req.query.perPage;
            
            let foundlistings = null;

            if (req.query.name) {
                let name = req.query.name;
                foundListings = await db.getAllListings(page, perPage, name);
            }
            else {
                foundListings = await db.getAllListings(page, perPage);
            }

            return res.status(200).send(foundListings)
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error: Something went wrong on the server' });
        }
    })

    //Get a single listing with given id
    app.get('/api/listings/:_id', async (req, res) => {
        try {
            let singleListing = await db.getListingById(req.params._id);
            if (!singleListing) {
                return res.status(404).send({ message: `Error: Id does not exist.` });
            }
            return res.status(201).send(singleListing);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error: Something went wrong on the server' });
        }

    })

    //Update listing with given id
    app.put('/api/listings/:_id', async (req, res) => {
        try {
            if (!req.params._id || req.params._id.length === 0) {
                return res.status(400).json({ message: "Error: Empty id" });
            }
            else if (Object.keys(req.body).length === 0) {
                return res.status(400).json({ message: "Error: Empty Body" });
            }

            let updatedListing = await db.updateListingById(req.body, req.params._id);
            if (updatedListing.matchedCount > 0) {
                if (updatedListing.modifiedCount > 0) {
                    return res.status(200).json({ message: 'Successfully updated the listing!' });
                }
                return res.status(400).json({ message: "Error: Could not update listing" });
            }
            return res.status(404).json({ message: "Error: listing does not exist" });

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error: Something went wrong on the server' });
        }
    })
    app.delete('/api/listings/:_id', async (req, res) => {
        if (!req.params._id || req.params._id.length === 0) {
            return res.status(400).json({ message: "Error: Empty id" });
        }

    })

    app.listen(HTTP_PORT, () => { console.log(`server listening on: ${HTTP_PORT}`) });
})
    .catch((err) => {
        console.log(err);
    });

