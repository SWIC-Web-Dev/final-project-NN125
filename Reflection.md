# Nick Nolden

## Final Project Reflection

### The Beginning

I started off this project using my code from the Thanksgiving assignment as a base. I did change the database to use the e-commerce data from several assignments ago. That, of course, required refactoring everything that needed the exact object structure to ensure everything was added and displayed properly.

- For example, `addDishes` in `state.js` was renamed to `addItems`, and refactored to match the object structure of the db.

After doing the refactoring, everything was displaying as it should. The title and h1 text was wrong of course, but what's more important was making sure the core program worked.

However, that led to my first big problem. The page was being reset when I clicked the submit button. This was odd considering everything was working when it was originally the Thanksgiving thing. By that point it was late at night and I didn't want to deal with it any further, so I decided to sleep on it.

### The Beginning, again

The next day comes around, and I decided to effectively restart from the beginning. This time I decided to use the in-class Thanksgiving code instead of mine, as I felt that was much cleaner compared to mine. In addition, it had the delete functionality I was planning on implementing anyway. After getting everything copied over, I tested it to make sure things worked as it originally did, and it did. Now I need to refactor everything like I did the previous day. Tested it again, and I ran into the same issue. The page was still reloading when I clicked the submit button.

### The First Debugging

Not knowing where to start, I decided to talk to [blackbox.ai](https://www.blackbox.ai/) to see if it could figure out why the page kept reloading when it didn't before.
