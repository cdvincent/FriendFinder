<h1>FriendFinder</h1>

<h4>Link</h4>
<p>https://intense-sierra-15811.herokuapp.com/</p>

<h4>Technology used</h4>
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>Javascript</li>
    <li>Express</li>
    <li>Path</li>
</ul>

<h2>Description</h2>
<p>Friend FInder is an application that allows you to find a new friend based on answering the same survey questions. Click start on the homepage to be redirected to the survey. You will have to enter your name and supply an image link into the form, then proceed to answering all of the questions.</p>

<p>Be sure to answer all questions accurately to get the best result. There is form validation, so if you fail to fill in a portion of the survey, you will be prompted to fill in that part of the survey before proceeding. Once you submit your responses, the application will search through all previously entered friends to find your best match.</p>

<h2>Development</h2>
<p>This app uses bootstrap for the layout and styling, as well as for the modal which shows your friend match. It also uses a combination of express and path in order to communicate with the back end and post/get results to and from the custom made friends API made of an array of objects with other friends name, image, and survey answers.</p>

<h2>Future Development</h2>
<p>In the near future, I would like to implement a database in order to store users and their responses. At the moment, when a user submits their survey, it is stored in an existing array, and is only available to match for that session.</p>