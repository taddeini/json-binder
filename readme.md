# JSON Binder

JSON Binder is a jQuery plugin that will convert form input elements into a generic JSON object.

## Use
``` html

/// Given the following form and plugin execution...
<form>
	<input type="text" name="firstName" value="Fred" />
	<input type="checkbox" name="isActiveMember" checked />
</form>

<script>
	var result = $("form").JSONBind();
</script>

/// ...will result in the following object value
<script>
	{
		"firstName": "Fred",
		"isActiveMember": true
	}
</script>
```
