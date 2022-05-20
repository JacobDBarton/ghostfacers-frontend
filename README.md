# Ghostfacers

Ghostfacers is a haunted site tracker that pulls haunted site data from locations all around the United States! Get details of America's most haunted locations, search cities to get details about the lingering spirits that roam around hotels, prisons, asylums, or abandoned buildings. If you've been or know about the haunted location you can also leave a review!
This site is for those who love ghosts and it's history! 

## Wireframes
### Landing Page
Holds our Navigation, Search and Featured Locations.  
By typing into the search bar, a list of options that match that word will show up in a pop-up list. 
A user can click a result and be taken to the show page, described below.
### Show Page
After a user clicks on their selection, the user will be routed to the show page. Here we display the name, location and a description of why the location is haunted.
### Carousel
We selected a Top 10 Haunted locations based on places we found were the spookiest to us.

## API
We could not find an API to bring data into our site. However, we were able to find a file with information we could use and imported the data into a database we created in MongoDB. That database was then deployed to Heroku for us to use as our API. 
![MongoDB ScreenShot](https://user-images.githubusercontent.com/101548840/169458027-8b6c62a1-d33c-4189-a3da-0233d72b860d.png)

https://data.world/timothyrenner/haunted-places/workspace/file?filename=haunted_places.csv
Original Data
https://haunted-site-app.herokuapp.com
Our Heroku API with mported Data from MongoDB

## Components
### Nav
![Nav Screenshot](https://user-images.githubusercontent.com/101548840/169462668-635e59d6-afef-4d49-a97c-e3ecdf5b9a26.png)

### Search
![HomePage Search](https://user-images.githubusercontent.com/101548840/169458321-fbba2bfe-1184-408e-b399-60fe5cc82d95.png)

### Review
User can create a review with a comment and a scare rating
![Creating Review screenshot](https://user-images.githubusercontent.com/101548840/169464586-183a32e4-6501-4f20-94bf-e548e5fec18f.png)

After user inputs their comment/rating it will be posted below the location.
![Created Review Screenshot](https://user-images.githubusercontent.com/101548840/169464387-12c05f11-3140-4d92-a6bc-90ab967e74f9.png)

The created review can also be Edited or Deleted
![EDIT:DELETE Screenshot](https://user-images.githubusercontent.com/101548840/169465711-fd17927d-e531-4d4f-ba95-cc61e97276d2.png)

### Carousel 
The image carousel shows our picked Top 10 Most Haunted! 
Clicking on the image will take user to page that will display more information about the location. 
![Carousel Screenshot](https://user-images.githubusercontent.com/101548840/169465056-d2171d82-71ed-4dbf-a049-5fe8dc0c8905.png)
This is a location from out Top 10, this set of locations are the only ones that have images. Our API did not have images and we added some to our database in order to display them on our main page.
![Carousel Selected Screenshot](https://user-images.githubusercontent.com/101548840/169467011-46fa4bdd-9ebe-4b20-a0f5-270d03eac976.png)

## Check Our App
https://ghostfacers.netlify.app

## Technologies Used
React
React Router
Node
HTML
CSS
JavaScript
Github
Heroku
Netlify
MongoDB
React Icons
Bootstrap
FlexBox

## Future Improvements
Giving users the option to add to our database of locations if they have found others not in our list.
Finding an API with images we can use to show with all of our locations when searched. 
Adjusting the footer so that it renders consistently on every page.

## Contribution Guidelines
If you run into any bugs feel free to submit an issue/request on our Github and we will look into getting that resolved!  

### References

https://stackoverflow.com/questions/26814456/how-to-get-all-the-values-that-contains-part-of-a-string-using-mongoose-find
https://reactrouter.com/docs/en/v6/hooks/use-navigate
https://shripadk.github.io/react/docs/jsx-gotchas.html
https://mongoosejs.com/docs/schematypes.html#numbers
https://www.positronx.io/react-responsive-carousel-tutorial/
https://github.com/leandrowd/react-responsive-carousel
https://data.world/timothyrenner/haunted-places/workspace/file?filename=haunted_places.csv
