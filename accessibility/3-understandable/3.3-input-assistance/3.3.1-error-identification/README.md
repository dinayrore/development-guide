### Activity -- Error Messaging
When an error occurs in a form control, an inline error message is displayed. A validation summary may also be used to convienently group all of the form controls that which a user made an error. However, if the error messaging is not coded correctly a screen reader may not be able to announce the error to a user and the user will not know an error exists.


When a form control is in error, a message is often displayed next to the control. However, unless the error message is coded correctly it won't be announced by a screen reader and the user won't know the error exists and will continue to try and submit the form.

#### Activity
Alter the `index.html` file provided in the root level public directory to complete the following:

1. Make all inline error messages programmatically associated to the form controls

* Use the following inline error message fragment:
```html
<span class="inline-alert alert-primary">(control label text) is empty</span>
```

2. Add a validation summary for the whole form

* Use the validation summary fragment
```html
<div class="alert alert-danger">
<h2 class="alert-heading">Errors have occurred</h2>
<hr>

</div>
```
