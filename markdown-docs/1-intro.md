# ngx-strap

Angular components and directives for Bootstrap. Unlike other Angular/Bootstrap libraries, ngx-strap leverages native Bootstrap javascript and css rather than recreating Bootstrap from scratch "the Angular way."

This means the library depends on `bootstrap.js` and its dependencies. If the statement `declare const jQuery: any` gives you agita, you should probably look elsewhere.

We've concentrated on those Bootstrap components that cannot be easily implemented using plain markup, or where there's a clear case for exposing Bootstrap's logic and events to Angular.

We've avoided creating our own markup, styles or animations, relying instead on Bootstrap. The library provides directives rather than components.

*(One exception: the tooltip and popover directives use a component internally to display dynamic templates. You should not have to worry about it, though.)*

#### What's Included

**Modals**
There's a clear, recurring case for listening to the modal open and close events, e.g. to automatically focus a form field on open or to collect form values on close. See the `ngxStrapModal` directive.

**Tooltips and Popovers** These cannot be automatically instantiated via markup (they're "opt-in" in Bootstrap terms,) and it's a pain to insert dynamic HTML content. The library provides the `ngxStrapPopover` and `ngxStrapPopover` directives. These directives enable you to set popup title and content with plain or dynamic strings, or templates.

**Collapse** Bootstrap's implementation of collapse ties the collapse element's visibility to a button or link that toggles it. The library provides a simple directive that shows or hides an element, based on a boolean, without reference to any other element. See `ngxStrapCollapse`.

#### What's Not Included

- Things like tabs, dropdowns and "toggled" collapse that can easily be implemented with plain Bootstrap markup.
- Things like datepickers, timepickers, colorpickers, typeaheads. These belong elsewhere.


[Demo Site](https://nowzoo.github.io/ngx-strap/)
