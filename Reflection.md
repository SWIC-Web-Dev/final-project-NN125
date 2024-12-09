# Nick Nolden

## Final Project Reflection

### The Beginning

I started off this project using my code from the Thanksgiving assignment as a base. I did change the database to use the e-commerce data from several assignments ago. That, of course, required refactoring everything that needed the exact object structure to ensure everything was added and displayed properly.

- For example, `addDishes` in `state.js` was renamed to `addItems`, and refactored to match the object structure of the db.

After doing the refactoring, everything was displaying as it should. The title and h1 text was wrong of course, but what's more important was making sure the core program worked.

However, that led to my first big problem. The page was being reset when I clicked the submit button. This was odd considering everything was working when it was originally the Thanksgiving thing. By that point it was late at night and I didn't want to deal with it any further, so I decided to sleep on it.

### The Beginning, again

The next day comes around, and I decided to effectively restart from the beginning. This time I decided to use the in-class Thanksgiving code instead of mine, as I felt that was much cleaner. In addition, it had the delete functionality I was planning on implementing anyway. After getting everything copied over, I tested it to make sure things worked as it originally did, and it did. I then refactored everything like I did the previous day. Tested it again, and I ran into the same issue. The page was still reloading when I clicked the submit button.

### The First Debugging

Not knowing where to start, I decided to talk to [blackbox.ai](https://www.blackbox.ai/) to see if it could help me figure out why the page kept reloading when it didn't before. It suggested that I move the `eventListener` to the inside of the `render` function. I went ahead and did that, and miraculously, it worked.

After getting that to work, I decided to turn my attention over to the delete button (or buttons as there is one in each table entry). Of course, right off the bat, the entries weren't being deleted. The first thing I tried was moving the delete functionality in `main.js` to the inside of the `render` function, like how I fixed the page reload issue. That didn't fix the delete buttons not deleting. I went ahead and attached a `console.log` to see if the buttons were actually being clicked, and if it identified the ids. Good news was the buttons were being detected as clicked. Bad news was the id was being displayed as `undefined`. After having another chat with blackbox.ai, I decided to refactor how the delete was being done by telling the `eventListener` to only delete entries when buttons with the `delete-button` class are clicked. That still didn't work. While talking to a different instance of blackbox.ai on a different tab, I realized the issue was with one line in `item-row.js`. I had forgotten to rename `data-dish` to `data-item` during my initial refactoring. Renaming that fixed the button, allowing it to delete the table entries... except newly submitted ones from the form. Blackbox suggested either converting the id into a number in the `addItem` function in `state.js`, or convert the id into a string in the `deleteItem` function. I went with the latter, and it fixed the issue.

### Styling

After getting everything to work, I turned my attention over to the CSS. I wanted to get rid of the thanksgiving oranges and replace them with a darker color. I went with a dark slate for the background, and a lighter slate for the `<h1>` text. The only colors I didn't change was the submit and delete buttons, as those colors seemed to fit really well in my opinion. I also decided to move the `<h1>` text over to `main.js` as a way to put it on top of the form, instead of it just sitting awkwardly on the side. I'm sure there was probably a way to do it in the `index.html`, but this seemed like the easier way to do it.

As for the table, it initially had a weird issue where the light grey color would just stop after the last header, awkwardly showing the body background color. The obvious cause of this was the addition of the delete buttons, as those weren't originally accounted during the initial design of the table. Luckily the fix was really easy. I moved the `bg-grey` class from `<thead>` to `<table>`. The table entries themselves didn't have a unique background color, so that had to be fixed too. I went ahead and added a lighter `bg-grey` class to the `<tr>` in `item-row.js`. With that, the table now has a nice, light look to it.

### ID Checking

Right as I was about to deploy it onto Netlify, I had an epiphany. What if someone tried to add an item with the same ID? What if it could delete both entries instead of the one? I decided it would be a good idea to add a check if someone is adding an item with an already existing ID. I asked blackbox to make the check for me, and it spat out code that I felt worked well enough. When the submit button is clicked, it checks the ID field if what was inputted already exists on the table. If it does, an error message would pop up, and the form would be prevented from submitting. This way table entries won't have the same ID.

### What I Learned

I learned/relearned a couple of small lessons while working on this project.

1. Sometimes a refactor that seems simple can unknowingly break something.
1. Always make sure to double check your code when debugging, especially in places you don't think to check.

### What I Would've Done Differently

I originally thought about making a tic-tac-toe game, like what I tried to do with the first Tailwind CSS assignment before realizing it was too ambitious. After thinking about it some more, tic-tac-toe doesn't need a database of some kind. I mean yeah it needs something like an array to store and update the state and whatnot, but since we needed to have a db with existing data, that kinda threw that original idea into the gutter. So I decided to go the easier route and use an existing, finished assignment as a base for the final project. I do wish I went with something more ambitious than this, but oh well.
