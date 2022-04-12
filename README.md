# 100devs26-studioghibli
#100 Devs class 26 homework, API 1 of 3

### To Do List
Ignore me, it just helps me to have this here.

###### HTML
- [ ] Button to Generate Random Studio Ghibli Movie
- [ ] Area to Display English Title
- [ ] Area to Display Original Title
- [ ] Area to Display Original Title Romanised
- [ ] Area to Display Description
- [ ] Area to Display Director
- [ ] Area to Display Producer
- [ ] Area to Display Movie Banner
- [ ] Area to Display Release Year
- [ ] Area to Display Rating
- [ ] Area to Display Run Time
- [ ] Create Add to Watch List Button
- [ ] Create Already Watched Button
- [ ] Create Collapsable/Toggle List of Watch List and Already Watched List

###### CSS
- [ ] Pick Simple Color Palette
- [ ] Design List Toggle, Watched, Add to Watch List, and Generate Random Movie Buttons
- [ ] Design Movie Information Display
- [ ] Design Lists

###### JavaScript
- [ ] Fetch a random movie from the API and dispaly its information
- [ ] Toggle on buttons for add to Watch List or Already Watched, make each button add the movie to the required list
- [ ] Toggle lists when button is clicked
- [ ] Bring up title information if movie title from either list is clicked
- [ ] If title is on Watch List and then Already Watched is clicked, switch title to the other list accordingly
- [ ] Each time generate random movie button is clicked, run check that the movie generated is NOT a part of the Already Watched list
- [ ] If a title is displayed that has been added to a list, grey out the related button and make it inactive.

### Psuedo-Code for JS
- Generate random number and pull title from the index of that number
    - If title is not on Already Watched
        - If title is on To Watch List
            - Display title with 'Add To Watch List' greyed out
        - Else
            - Display title normally
- User clicks on Add To Watch List
    - If title is on Already Watched
        - Remove from Already Watched
        - Add to Watch List
    - Else
        - Add to Watch List
- User clicks on Already Watched
    - If title is on To Watch List
        - Remove from To Watch
        - Add to Already Watched
    - Else
        - Add to Already Watched
- User clicks on title from To Watch or Already Watched list
    - If title is on to Watch List
        - Display title with Add to Watch List greyed out
    - Else if title is on Already Watched List
        - Display title with Already Watched greyed out
- Toggle display of Already Watched and To Watch lists with button