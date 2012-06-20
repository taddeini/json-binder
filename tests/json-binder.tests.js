// CHECKBOX
module("checkbox", {});

test("A selected checkbox without a name should return no value", function () {
  var input = "<form><input type='checkbox' checked='checked'>Foo</input></form>";
  var model = $(input).JSONBind();
  strictEqual(Object.keys(model).length, 0);
});

test("A de-selected checkbox should bind to a false property value", function () {
  var input = "<form><input type='checkbox' name='foo'>Foo</input></form>";
  var model = $(input).JSONBind();
  strictEqual(model.foo, false);
});

test("A selected checkbox should bind to a true property value", function () {
  var input = "<form><input type='checkbox' checked='checked' name='foo'>Foo</input></form>";
  var model = $(input).JSONBind();
  strictEqual(model.foo, true);
});

//RADIO
module("checkbox", {});

test("A radio without a name should return no value", function () {
  var input =
    "<form>" +
      "<input type='radio' value='bar' checked='checked'/>" +
      "<input type='radio' value='fizz' />" +
    "</form>";
  var model = $(input).JSONBind();
  strictEqual(Object.keys(model).length, 0);
});

test("A radio with no selections should return an empty value", function () {
  var input =
    "<form>" +
      "<input type='radio' name='foo' value='bar' />" +
      "<input type='radio' name='foo' value='fizz' />" +
    "</form>";
  var model = $(input).JSONBind();
  strictEqual(model.foo, '');
});

test("A selected checkbox should bind to a true property value", function () {
  var input =
    "<form>" +
      "<input type='radio' name='foo' value='bar' />" +
      "<input type='radio' name='foo' value='fizz' checked='checked'/>" +
    "</form>";
  var model = $(input).JSONBind();
  strictEqual(model.foo, 'fizz');
});

// HIDDEN
// TEXT/PASSWORD
// SELECT (SINGLE & MULTI)