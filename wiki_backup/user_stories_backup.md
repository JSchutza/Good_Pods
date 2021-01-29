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
 As an unauthorized user, I want to be able to sign up for the website via a signup form, so that I can access Good_Pods.

  * ### Questions
* Will the user enter a username and an email address to signup?
    - Yes a user will login with an email but will be displayed by a username

* Will we confirm their password during signup?
    - Yes

* What routes should we use for signup?
    - We will use /signup for the route

* Where should the user be redirected after signup?
    - User will be redirected to their new profile page


* What happens if the user with the username or email already exists?
    - An error will be displayed to the user and they will be prompted to try again

* What happens if the user enters the wrong password confirmation?
    - An error will be displayed to the user and they will be prompted to try again



* ### Acceptance Criteria

* Given that I'm a user who has not signed up yet and when I'm on the /signup route
    - Then there will be a signup form with an email, username, and password field and a "Sign Up" button to submit the form.


* When I try to fill out the form with an email or username that already exists with a valid password and press Enter or press the "Sign Up" button

    - Then at the top of the form, I will see a red message User with that email or username already exists.


* When I try to fill out the form with a password shorter than 6 characters and press Enter or press the "Sign Up" button

    - Then at the top of the form, I will see a red message Password must be at least 6 characters long.


* When I try to fill out the form with a valid email, username, and password and press Enter or press the "Sign Up" button

    - Then I will be redirected to the homepage at the / route.


* Given that I am a user that just signed up when I refresh the homepage at the / route

    - Then I will still be logged in









# Logout
As a logged-in user, I want to logout via a button on the navigation bar, so that I can hide my account information to the rest of the users on this device.

  * ### Questions

  Will


* ### Acceptance Criteria
Given
When
Then







# Pod Feed
As a
I want to
  so that I can

  * ### Questions

  Will
  I want to
  so that I can

* ### Acceptance Criteria
Given
When
Then





# Your Podcasts
As a
I want to
  so that I can

  * ### Questions

  Will
  I want to
  so that I can

* ### Acceptance Criteria
Given
When
Then







# Pod Status
As a
I want to
  so that I can

  * ### Questions

  Will
  I want to
  so that I can

* ### Acceptance Criteria
Given
When
Then





# Pod Reviews
As a
I want to
  so that I can

  * ### Questions

  Will
  I want to
  so that I can

* ### Acceptance Criteria
Given
When
Then










# Bonus --- search by genre
As a
I want to
  so that I can

  * ### Questions

  Will
  I want to
  so that I can

* ### Acceptance Criteria
Given
When
Then


# Bonus --- Tags
As a
I want to
  so that I can

  * ### Questions

  Will
  I want to
  so that I can

* ### Acceptance Criteria
Given
When
Then
