/*
  COSC 219 — Lab 6 · main.js
  The only file that touches the page. Modules only work over http://,
  so open index.html with Live Server.
*/

// import TRAIL_DATA from ./data.js and TrailRegistry from ./registry.js
import { TRAIL_DATA } from "./data.js";
import { TrailRegistry } from "./registry.js";

/* Build a registry from the data, close Bear Creek, then:

     · put one <li> per trail into #trails, using describeAll()
     · write a line into #summary in this exact shape:

       6 trails, 5 open, 46.7 km total. Steepest: Pincushion Peak.
*/

const reg = TrailRegistry.fromData(TRAIL_DATA);

const bearCreek = reg.find("bear creek");
bearCreek.close();

const trailList = document.querySelector("#trails");

for (const describe of reg.describeAll()){
  const li = document.createElement("li");
  li.textContent = describe;
  trailList.append(li);
}

const summary = document.querySelector("#summary");

const trails = reg.size;
const openTrails = reg.openTrails.length;
const km = reg.totalDistance;
const steepest = reg.steepest ? reg.steepest.name : "None";

summary.textContent = `${trails} trails, ${openTrails} open, ${km} km total. Steepest: ${steepest}.`;