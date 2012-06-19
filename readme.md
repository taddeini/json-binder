# JSON Binder

JSON Binder is a jQuery plugin that will convert form input elements into a generic JSON object.

## Use
``` html

<form>
  <input type="text" name="firstName" value="Fred" />
  <input type="checkbox" name="isActiveMember" checked />
</form>

<script>
  var result = $("form").JSONBind();
  
  /* output
  *  {
  *    "firstName": "Fred",
  *    "isActiveMember": true
  *  }
  */
</script>
```
