## Answers to the Questions

### 1. Difference between `getElementById`, `getElementsByClassName`, and `querySelector / querySelectorAll`

These Methods are used to select html elements to the javascript file.Here are some details about how they work...
<br>

* `getElementById("id")` - It selects elements with specific `id`. It returns a single element.For Example:
   ```html
   <p id="userName">Someone</p>
   ```
   ```js
   document.getElementById("userName")
   ```
* `getElementsByClassName("class")` - It selects all the elements with a class.It returns HTMLCollection For Example:
  ```html
  <p class="odd" id="userName">User 1</p>
  <p id="userName">User 2</p>
  <p class="odd"  id="userName">User 3</p>
  <p id="userName">User 4</p>
  ```
  ```js
  document.getElementsByClassName("odd")
  //It will return all the odd user names 
  ```
* `querySelector("selector")` - It returns the first element matching css selectors.
  ```js
  document.querySelector(".selector") // . used for item (class=)
  document.querySelector("#header") // . used for header (id=)
  document.querySelector("div") // tag name used to get tags
  document.querySelector("nav a") // space used for decendent element
  document.querySelector("ul > li") // > used for direct child
  ```

* `querySelectorAll("selector")` - Returns a nodelist of all elements matching CSS selector. Example:

  ```js
  document.querySelector(".selector") // . used for item (class=)
  document.querySelector("#header") // . used for header (id=)
  document.querySelector("div") // tag name used to get tags
  document.querySelector("nav a") // space used for decendent element
  document.querySelector("ul > li") // > used for direct child

  ```

---

### 2. How to create and insert a new element into the DOM

```js
const li = document.createElement("li");
li.innerText = "New List Item";
const ul = document.getElementById("list");
ul.appendChild(li);
```

---

### 3. Event Bubbling

Event starts at the clicked element and bubbles to parent,grandparent and goes until `document`.Example:

```html
<div id="grandparent">
  Grandparent
  <div id="parent" >
    Parent
    <button id="child">Click Me</button>
  </div>
</div>

```

```js
document.getElementById("child").addEventListener("click", function() {
    console.log("Child clicked");
});
document.getElementById("parent").addEventListener("click", function() {
    console.log("Parent clicked");
});
document.getElementById("grandparent").addEventListener("click", function() {
    console.log("Grandparent clicked");
});
```
Output:
```
Child clicked
Parent clicked
Grandparent clicked
```


---

### 4. Event Delegation

Instead of adding listeners to many children,we can add one listener to the parent.This Useful for dynamic elements.
```html
<div id="buttonContainer">
  <button>Button 1</button>
  <button>Button 2</button>
</div>
```

```js
const container = document.getElementById("buttonContainer");
container.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    alert(`Button "${e.target.innerText}" clicked`);
  }
});
/* since we added an action listener to the parent. If we add more buttons using javascript it will
work same as the others.
*/
```

---

### 5. Difference between `preventDefault()` and `stopPropagation()`

`stopPropagation()` - Stops the event from going up the DOM tree,but doesn’t stop default actions
<br>
`preventDefault()` - Stops default action but doesn’t stop bubbling


Example:

```html
<div id="parent">
  Parent Div
  <a href="https://example.com" id="someLink">Click Me</a>
</div>
```

```js
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("someLink").addEventListener("click", (e) => {
  e.preventDefault(); // link won't open
  e.stopPropagation(); // event won't reach parent
  console.log("Link clicked, default prevented, bubbling stopped");
});

```
