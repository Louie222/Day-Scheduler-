This is my Assignment 5 - Day Scheduler 

Link = https://louie222.github.io/Day-Scheduler-/

For Assignment 5 I was asked to create a simple calendar application that allows a user to save events for each hour of the day. I had to use the Moment.js library, so that the present day/date will be displayed whenever the application is being used.

**CHALLENGES:**
The challenges I faced with this assignment were aligning the CSS elements (past, present, future) with my JavaScript page, the JavaScript coding of the timeblocks to show past timeblocks are 'read-only' and to show the 'present time' timeblock to be coloured orange. 

I deleted the CSS codes that relate to the styling of the hour, past, present, future and save button. I did this because as a beginner, creating the index.html document first would make the styling transition less complicated. It was overwhelming to see CSS codes already made up, and I'm not confident yet to create a HTML/JavaScript document that would 'tag' these styling elements. My process was create the HTML document, then the CSS sheet, then work on the JavaScript.

![Screen Shot 2021-04-15 at 9 55 33 am](https://user-images.githubusercontent.com/78855921/114802695-baf04900-9dd0-11eb-8599-87aea3ec58a4.png)
This screenshot shows the display of my Day Scheduler. The day and date updates automatically for users to see.   

![Screen Shot 2021-04-15 at 9 55 59 am](https://user-images.githubusercontent.com/78855921/114802735-c93e6500-9dd0-11eb-8c72-d6ada11bc236.png)
This screenshot shows users can input data into a particular timeblock and click the save button. If the user refreshes the page, the data inside that particular timeblock will still be able to be viewed. 

![Screen Shot 2021-04-15 at 9 56 44 am](https://user-images.githubusercontent.com/78855921/114802800-e410d980-9dd0-11eb-8432-e6f98201cecc.png)
This screenshot shows that the 9am timeblock is whited out and is no longer able to store further data. This is because the Day Scheduler is functioned according to 'real time'. Depending on what time the user decides to use the Day Scheduler, the present timeblock will be coloured orange. This is to notify users of what timeblock is the present time.  

![Screen Shot 2021-04-15 at 10 06 35 am](https://user-images.githubusercontent.com/78855921/114803575-44544b00-9dd2-11eb-93ea-4756810a3f74.png)
This screenshot shows the input data into a particular timeblock will be saved into local storage. Having this property in my application allows the data (whatever the user inputs into each timeblock) will be stored into the browser, and will persist even after the browser window is closed.



