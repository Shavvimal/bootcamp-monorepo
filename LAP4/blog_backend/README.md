**Database/Models**

- [ ] Setup database
- [ ] Access admin console
- [ ] Create Category & Post DB models
  - _topic has:_
    - Section: charfield & pk -exact length 3
    - number: int
    - code:CharField & pk - exact length 3
    - name:CharField
  - _Post has:_
    - Section: charfield & pk -exact length 3
    - auto pk
    - Title:CharField
    - category:PositiveIntegerField
    - topic:ForeignKey _(belongs to Topic)_
- [ ] Update views to call models
  - Include basic error handling - 404 if item not found

**Custom Error Handlers**

- [ ] Check user experience of errors out of debug mode
- [ ] Add custom error handlers for 404 & 500

**Testing**

- [ ] Create case for basic views
- [ ] `inventory-how-to`
  - renders inventory/about.html template
- [ ] `inventory-index`
  - response has a context with key of 'items'
  - context 'items' contains 2 elements
- [ ] `show-item` with arg of `2`
  - response has a context with key of `item`
  - context `item` has a key `name` of value `ketchup`
  - context `item` has a key `category` of value `CDT

**Auth**
Registration

- [ ] Create new app for user management
- [ ] Create registration form extending Django's `UserCreationForm`
- [ ] Add path & view method for `register`
  - on `GET` request => generate new form, render placeholder html
  - on `POST` request => validates form, adds User to DB, redirects to index
- [ ] Create registration form template, render on `GET register`
- [ ] Try the form! Check for the new user in admin portal

Login/Logout

- [ ] Add login & logout paths pointing to Django views
- [ ] Create login & logout templates
- [ ] Define redirect path on successful login
- [ ] Show conditional content based on login status

Protect
"Only logged-in users can access individual item pages"

- [ ] Define redirect path for non-logged in users
- [ ] Decorate route(s) to be protected

**Custom Forms**
"All logged-in users can add a food item"
"Category managers can increase (+1) the quantity of an item"

- [ ] Create basic NewFoodForm
- [ ] Add view method for `create`
  - on `GET` request => generate a NewFoodForm, render `new.html`
  - on `POST` request => validates form, adds item to DB, redirects to show page
- [ ] Complete `new.html`: render form
- [ ] Update `index.html`: show link to create new item if user logged in
- [ ] Create basic UpdateQuantityForm
- [ ] Add manager:CharField to Category model
- [ ] Update view method for `show`
  - on `GET` request => generate a UpdateQuantityForm, pass form in context
  - on `POST` request => validates form, updates item in DB, redirects to show page
- [ ] Update `show.html`: show button to +1 if user is category manager

**Bonus**
Many to Many relationship
"Logged-in users can 'like' an item once"

- [ ] Add field to Item model of `likes` using ManyToManyField with User
- [ ] Rerun migrations
- [ ] Implement a 'like' button on an item show page
- [ ] Show list of users who have 'liked' the item on the show page
- [ ] Show a star symbol next to the item in the index if more than 3 people have 'liked' the item
