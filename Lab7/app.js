/*
  COSC 219 — Lab 7 · app.js
  The only file that touches the page. Open index.html with Live Server.
*/

// import from ./storage.js, ./render.js and ./trails.js
import { saveTrails, loadTrails, clearTrails } from "./storage.js";
import { renderTrails, summaryText } from "./render.js";
import { makeTrail, isValidTrail, addTrail, removeTrail, toggleTrail, findAction } from "./trails.js";

const form = document.querySelector("#add-form");
const name = document.querySelector("#name");
const km = document.querySelector("#km");
const error = document.querySelector("#error");
const summary = document.querySelector("#summary");
const list = document.querySelector("#trail-list");
const clear = document.querySelector("#clear");


/* Load the saved trails into a `let` — the array is replaced, not edited,
   every time something changes. */
let trails = loadTrails();

/* update() — redraw the list, rewrite the summary, and save.
   Call it whenever the data changes, and once at the very bottom of this
   file so the page is not blank on load. */
function update(){
   renderTrails(trails, list);
   summary.textContent = summaryText(trails);
   saveTrails(trails);
}

/* The add form.

   A submit reloads the page by default, throwing away everything in
   memory. Stop that first, then validate, then add.

   When the input is invalid: put a message in #error, focus the name
   field, and return without changing anything.
   When it is valid: clear #error, add the trail, reset the form. */
form.addEventListener("submit", (e) => {
   e.preventDefault();
   isValidTrail(name.value, km.value);

   if(!isValidTrail(name.value, km.value)){
      error.textContent = "Give the trail a name and a distance above zero.";
      name.focus();
      return;
   }else{
      error.textContent = "";
      trails = addTrail(trails, makeTrail(name.value, km.value));
   }

   form.reset();
   update();
})

/* The list.

   ONE listener on #trail-list — not one per button. The buttons are
   destroyed and rebuilt on every render, so a listener on a button would
   not survive the first redraw.

   Use findAction(event.target) to work out what was clicked.

   Clear #error here too — once the user clicks something in the list they
   have moved on from the form, and a stale validation message left on
   screen is just noise. */
list.addEventListener("click", (e) => {
   error.textContent = "";

   const find = findAction(e.target)
   if(!find){
      return;
   }

   if(find.action === "toggle"){
      trails = toggleTrail(trails, find.id);
   }
   if(find.action === "delete"){
      trails = removeTrail(trails, find.id);
   }

   update();
})

/* The Clear all button: empty the array, clear storage, update. */

clear.addEventListener("click", () => {
   trails = [];
   error.textContent = "";
   clearTrails();
   update();
})

update();