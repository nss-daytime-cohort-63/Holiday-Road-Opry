1.  Updated .Settings.js to Settings.js and adding our API tokens
2.  Create dataAccess.js file in scripts folder - applicationState (empty object)
3.  Create HolidayRoad.js (MVC) in scripts folder (final html page where to put our functions and main.js will reference it)
4.  Create attractionDataAccess.js, directionDataAccess.js, eateriesDataAccess.js, parksDataAccess.js, weatherDataAccess.js in their respective folders
5.  Make the indexl.html
6.  On main.js, create render function
7.  Connect HolidayRoad.js and main.js
8.  Fetcher and getter for attractions (bizarreries)
9.  Create attractionDropDown fx, import into HolidayRoad
<!-- Shows attractions (bizarreries) in a drop-down -->
10. Create eateriesDropDown fx, import into HolidayRoad
11. Create fetcher and getter for parks, create parksDropdown fx, import into HolidayRoad
<!-- shows eateries and parks in a drop-down -->
12. HolidayRoad.js
        html formatting
<!-- shows details, preview, and saved itinerary areas -->
13. AttractionProvider.js - fx to render details using .find()
<!-- shows details for the selected attraction -->
14. EateriesProvider.js - fx to render details using .find()
<!-- shows details for the selected eatery -->
15. ParkProvider.js - fx to render details using .find()
<!-- shows details for the selected eatery -->
16. Selected park, eatery, and attraction shows in the Preview Pane and CSS tweaks
<!-- It works y'all -->


To-Do's

#.  Fetcher and getter for db.json
css - extend the size of the details box(es)
    default size and then extend when it needs to


Notes
db.json - receiving transient state and saving it permanently