# smileyNotes Group Challenge

* index page
* page style (css)
* icons/images (favicon, logo, edit, delete)

## MVP

* Basic test framework to write tests
* Testing and implementation of basic logic for app
* Bare bones application of logic onto app
* BE ABLE TO WRITE AND STORE A NOTE.

**Index Page**

* Use a css layout for separating the page into 3 sections

* Section 1: Upper half of page - form for a new note

* Section 2: Lower half of page - display of the current note
Edit/Delete options

* Section 3: Left column - navigation.
List of notes showing 20 characters preview

*River Of Dreams*

* Can apply styling to notes: color text, **bold** etc.
* Can rearrange ordering of notes
* Can group notes
* Store data somewhere permanent

## Testing

* Not equal
* Equality

*River of Dreams*
* Greater or Less than
* Empty (if string, empty string, if number, 0). Can check for empty string and empty array in one matcher.



## Writing the Framework

We first carried writing the basic comparator `toEqual`, which would serve to cover most of our testings. We agreed that we should only write up new expectation framework code if we actually need it.

We then created the `describe` and `expects` functions that wrap around the expectations so that it gives more clarity to what the tests are for. We used simple callbacks in order to get this to work, making it easy to pass anything into them, but we decided that we are the only ones that would use it, and so we wanted to keep it simple and go back to adding restrictions of their uses when we reached our MVP.

Once we have created the basic testing framework, we realised that we needed to make our repo directory files clearer. Once that was done, we started writing the tests and implementing logic code for the app.

## Reflections

Unfortunately we didn't manage to reach MVP, partly due to schedule clashes during the week between all group members.

If there was something we would have done differently, we perhaps could have done some work remotely and then come together when we did meet to discuss and merge the branches.

The next step that needed to be taken was the basic formatting of HTML and the linking of the logic to the webapp in order to meet our MVP.
