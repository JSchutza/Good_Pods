# Login
  As an unauthorized user, I want to be able to login to the website via a form, so that I can access my private information.
  * ### Questions

* Will the user enter a username or an email address to login?
  - User will login via email and password


* What routes should we use for login?
  - User will login via /login route

* Where should the user be redirected after login?
    - User will be redirected to their /profile

* Will we allow OAuth authentication via a third party?
    - Not yet -- maybe in a future story

* What happens if the user doesn't exist yet?
    - Display the message "Invalid Login, please try again."

* What happens if the user enters the wrong password?
    - Display the message "Invalid Login, please try again."

* Should this story include allowing a user to reset their password?
    - Not yet -- will be implemented in future release

* Should logging in use session-based or use token-based authentication?
    - We will use session-based auth for now



 * ### Acceptance Criteria

* Given that I'm a logged-out user and when I'm on the /login route
    - Then there will be a login form with an email and password field and a "Login" button to submit the form.

* When I try to fill out the form with an invalid email and password combination and press Enter or press the "Login" button
    - Then at the top of the form, I will see a red message "Invalid Login, please try again."

* When I try to fill out the form with an email that doesn't exist in the system and press Enter or press the "Login" button
    - Then at the top of the form, I will see a red message "Invalid Login, please try again."

* When I try to fill out the form with a valid email and password and press press Enter or press the "Login" button
    - Then I will be redirected to the homepage at the / route.

* Given that I am a logged-in user when I refresh the homepage at the / route
    - Then I will still be logged in

* Given that I am a logged-out user when I try to navigate to the homepage at the / route
    - Then I will be redirected to the /login route











# Sign up
 As an unauthorized user, I want to be able to sign up for the website via a sign up form, so that I can access Good_Pods.

  * ### Questions
* Will the user enter a username and an email address to sign up?
    - Yes a user will login with an email but will be displayed by a username

* Will we confirm their password during sign up?
    - Yes the user will be prompted to confirm their password

* What routes should we use for sign up?
    - We will use /sign up for the route

* Where should the user be redirected after sign up?
    - User will be redirected to their new profile page


* What happens if the user with the username or email already exists?
    - An error will be displayed to the user and they will be prompted to try again

* What happens if the user enters the wrong password confirmation?
    - An error will be displayed to the user and they will be prompted to try again



* ### Acceptance Criteria

* Given that I'm a user who has not signed up yet and when I'm on the /sign up route
    - Then there will be a sign up form with an email, username, and password field and a "Sign Up" button to submit the form.


* When I try to fill out the form with an email or username that already exists with a valid password and press Enter or press the "Sign Up" button

    - Then at the top of the form, I will see a red message that tells the user that the email or username already exists.


* When I try to fill out the form with a password shorter than 6 characters and press Enter or press the "Sign Up" button

    - Then at the top of the form, I will see a red message that tells the user that the password must be at least 6 characters long.


* When I try to fill out the form with a valid email, username, and password and press Enter or press the "Sign Up" button

    - Then I will be redirected to the users profile page at the /profile route.


* Given that I am a user that just signed up when I refresh the homepage at the / route

    - Then I will still be logged in









# Logout
As a logged-in user, I want to logout via a button on the navigation bar, so that I can hide my account information to the rest of the users on this device.

  * ### Questions
    * What page will the user be sent to after being logged out?
	- The user will be redirected to the login page so the next user can seamlessly access their profile.
 * Where will the logout button be located?
	- The logout button will be located in the navbar for ease of access.
 * Will there be a feature that will log an inactive user out of the application?
	- We will not be implementing an auto logout feature for inactive users at this time.



* ### Acceptance Criteria
* Given that I am a Logged in user when I attempt to log out
	* Then I will be redirected to the log in page as a logged out user









# Pod Feed
As a logged-in user, I want to be able to see my own personalized list of favorite / followed podcasts so that I can keep up with my personal pod adventures.

  * ### Questions
* Will the users need to sign in to view the Pod Feed?
    - Yes, in order to view the Pod Feed the user must log in.
* Will the Pod Feed be organized by genre?
    - Yes, the Pod Feed will be organized by genre
* How many podcasts will the Pod Feed display?
    - The Pod Feed will display ten podcasts at a time.
* Will the Pod Feed include small snippets of reviews that users submitted?
    - Yes, the currently logged in user will be able to view a small portion of users reviews.
* Will the Pod Feed include each displayed podcasts status?
    - Yes, the currently logged in user will be able to view the status of a podcast in the Pod Feed.


* ### Acceptance Criteria

* Given that I am a Logged in user I want to interact with the list that are not already on the users shelf
    * As a user I want the feed to update with new podcasts
    * As a user I want to be able to filter the podcasts by genre
    * As a user I want to be able to see the reviews associated with each podcast in the feed





# Your Podcasts
As a logged-in user, I want to be able to keep track of and view my currently filtered podcasts so that I can be organized.

  * ### Questions
* Will the users need to sign in to view their shelf?
	- Yes, in order to view their podcasts the user must log in.
 * Will we allow users to view other users shelves?
	- Yes, you can view other user's shelves to discover new podcasts

* ### Acceptance Criteria

* Given that I am a Logged in user I want to interact with shelves
	* As a logged-in user I want to be able to view all the podcasts I have, sorted by genre so that I can click on the podcasts to be redirected to that podcast's `podcasts/:id` page
	* As a user I want to be able to click on every podcast on my shelf to be redirected to the podcast page so that I can review that podcast, favorite or change that podcast's reviews
	* As a user I want to be able to view all the podcasts that I have reviewed so that I can can edit or review them
	* As a user I want to be able to view all the podcasts that I have added a status onto  so that I can change that podcasts status








# Type
As a logged-in user, I want to be able to track my media consumption so that I can continue to grow my podcast library.

  * ### Questions

* Can users add more types to their shelf?
    - No, each shelf will have one type

* How many types will a user have?
    - A user will have four types called:
        * listened
        * interested in
        * hated
        * loved






* ### Acceptance Criteria

* Given that I am a Logged in user I want to interact with the status
	- As a user I want to be able to see an icon next to a podcast name that references a status so that I can review the podcasts that I favorited, go back to the ones I am interested in or add a review if I have not already
	- As a user I want to be able to see all of the podcasts with that I have given that status to so that I can look back on the podcasts that I either liked or was interested in in the past







# Pod Reviews
As a logged-in user, I want to be able to view/post reviews on the hottest podcasts so that I can feel amazing.

  * ### Questions

* Where will users be able to view reviews?
    - Users will be able to review their reviews on their shelf

* Can users create reviews?
    - Yes a user can create reviews

* Can users delete reviews?
    - Yes a user can delete a review

* Can users leave a rating without having to make a review?
    - Yes a user can leave a rating without having to make a review


* Will there be a max length on the review text?
    - Yes there will not be a minimum length but there will be a max length

* Can a user leave multiple reviews for a single podcast?
    - Yes a user can leave multiple reviews for a single podcast


* In what order will reviews be displayed on the podcasts
    - The reviews will be ordered from highest rating to lowest rating


* ### Acceptance Criteria
* Given that I am a Logged in user I want to interact with podcast reviews
    * As a user I want to be able to view reviews
    * As a user I want to be able to create new reviews
    * As a user I want to be able to delete my old reviews
    * When a review is at max length any additional characters will not be entered and the user is given an error message letting them know







## Shelves
* ### Questions:
 * What is included in the user's pod page?
	- User's shelf's are the podcasts that they have chosen.
 * Do all podcasts on a user's podcast page have a type?
	- All podcasts have a type when they are in a user's pod page.
 * Can a user add or delete podcasts from the podcast page?
	- Yes, you can add and delete podcasts from your podcast page
 * Is there an api for a user's shelf?
	- Yes it can be accessed through /api/shelves/:id
 * How is the user's podcast page organized?
	- It will be organized by the type that the user assigns to the podcast and through genre.
 * Can you view other user's shelves?
	- Not at this time.
* ### Acceptance Criteria:
* Given that I am a Logged in user I want to interact with shelves
	* As a logged-in user I want to be able to view all the podcasts I have, sorted by genre so that I can click on the podcasts to be redirected to that podcast's `podcasts/:id` page
	* As a user I want to be able to click on every podcast on my shelf to be redirected to the podcast page so that I can review that podcast, favorite or change that podcast's reviews
	* As a user I want to be able to view all the podcasts that I have reviewed so that I can can edit or review them
	* As a user I want to be able to View all the podcasts that I have added a status onto  so that I can change that podcasts status
	* As a user I want to be able to click on the icon/link on my profile page to be redirected to my shelf so that I can So that I can view my shelf








# Bonus --- search by genre
As a logged-in user, I want to be able to search all the pods by genre so that I can be an efficient podcast consumer.

  * ### Questions

* Will the podcasts on a user's profile page be organized by genre?
    - Yes, the podcasts on a user's profile page will be organized by genre.

* Will the podcasts on the pod feed be organized by genre?
    - Yes, the podcasts on the pod feed will be organized by genre.

* Will a user be able to search for podcasts by genre?
    - Yes, a user will be able to search for podcasts by genre.

* Will there be a separate page for each genre of podcast?
    - A user will be able to view all podcasts of a specific genre, but each genre will not have it's own separate page.

* Will a user be able to choose a favorite genre?
    - A user will have podcasts suggested to them based on podcasts they have rated and reviewed.

* Will podcasts be suggested for a user based on their favorite genre's?



* ### Acceptance Criteria

* Given that I am a Logged in user I want to interact with search
	* As a user I want to be able to search podcast by name so that I can find podcasts that I have heard of
	* As a user I want to be able to search for all the podcasts of a genre so that I can just find podcasts that I am interested in

* Given that I am a Logged in user I want to interact with genres
	- As a user I want to be able to see all the podcasts in that genre so that I can discover new podcasts by genre
	- As a user I want to be able to favorite a particular genre so that I can check out only the genres I like







# Bonus --- Tags
As a logged-in user, I want to be able to tag podcasts so that I can come back to them later.

  * ### Questions
* What is the purpose of Tags?
	- Tags allow users to add an extra level of specificity to the Podcast.
 * Who adds tags?
	- The users add a tag to the podcast
 * How many tags could a podcast have?
	- Any number of tags.
 * Can we search by tag?
	- Not at this time but maybe in a later version.
 * How are the tags stored?
	- Tags are stored in the podcast database
 * Can user's see other users tags?
	- Yes, this allows users to quickly see what kind of podcast it is and how other users would characterize it.

* ### Acceptance Criteria

* Given that I am a Logged in user I want to interact with tags
	* As a User I want to be able to Add a tag to a podcast so that I can make the subject or interest more clear

* Given that I am a Logged in user I want to interact with tags
	* As a user I want to be able to add a tag to a podcast so that I can so that I can provide a greater level of specificity to a podcast, past the general genre
	* As a user I want to be able to create a new tag to add to a podcast so that I can if a tag has not been used yet you can create one to tag a podcast
	* As a user I want to be able to look through other tags that have been added before so that I can look through a list of tags that have been used to tag a podcast
	* As a user I want to be able to untag a podcast that I added that tag to so that I can **This might come in a later version** to change a tag that they have added or update it
	* As a user I want to be able to see the tags other users added to a podcast so that I can to see how other people characterize the podcast
