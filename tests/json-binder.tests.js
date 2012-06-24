/// <reference path="../libs/jquery-1.7.2.js" />
/// <reference path="../json-binder.js" />

// CHECKBOX
module("checkbox", {});

test("A selected checkbox without a name should return no value.", function () {
  var form =
    "<form>" +
      "<input type='checkbox' checked='checked'>Foo</input>" +
    "</form>";
  var model = JSON.parse($(form).JSONBind());
  strictEqual(Object.keys(model).length, 0);
});

test("An unselected checkbox should bind to a false property value.", function () {
  var form =
    "<form>" +
      "<input type='checkbox' name='foo'>Foo</input>" +
    "</form>";
  var model = JSON.parse($(form).JSONBind());
  strictEqual(model.foo, false);
});

test("A selected checkbox should bind to a true property value.", function () {
  var form =
    "<form>" +
      "<input type='checkbox' checked='checked' name='foo'>Foo</input>" +
    "</form>";
  var model = JSON.parse($(form).JSONBind());
  strictEqual(model.foo, true);
});

//RADIO
module("radio", {});

test("A radio without a name should return no value.", function () {
  var form =
    "<form>" +
      "<input type='radio' value='bar' checked/>" +
      "<input type='radio' value='fizz' />" +
    "</form>";
  var model = JSON.parse($(form).JSONBind());
  strictEqual(Object.keys(model).length, 0);
});

test("A radio with no selections should return an empty value.", function () {
  var form =
    "<form>" +
      "<input type='radio' name='foo' value='bar' />" +
      "<input type='radio' name='foo' value='fizz' />" +
    "</form>";
  var model = JSON.parse($(form).JSONBind());
  strictEqual(model.foo, "");
});

test("A selected radio should bind to a it's value attribute.", function () {
  var form =
    "<form>" +
      "<input type='radio' name='foo' value='bar' />" +
      "<input type='radio' name='foo' value='fizz' checked='true'/>" +
      "<input type='radio' name='foo' value='bin'/>" +
    "</form>";
  var model = JSON.parse($(form).JSONBind());
  strictEqual(model.foo, "fizz");
});

// HIDDEN
module("hidden", {});

test("A hidden field without a name should return no value.", function () {
  var form =
    "<form>" +
      "<input type='hidden' value='bar' />" +
    "</form>";
  var model = JSON.parse($(form).JSONBind());
  strictEqual(Object.keys(model).length, 0);
});

test("A hidden field returns it's value attribute.", function () {
  var form =
    "<form>" +
      "<input type='hidden' name='foo' value='bar' />" +
    "</form>";
  var model = JSON.parse($(form).JSONBind());
  strictEqual(model.foo, "bar");
});

test("A hidden field without a value returns an empty value.", function () {
  var form =
    "<form>" +
      "<input type='hidden' name='foo'/>" +
    "</form>";
  var model = JSON.parse($(form).JSONBind());
  strictEqual(model.foo, "");
});

// TEXT/PASSWORD
module("text/password", {});

test("A text field without a name should return no value.", function () {
  var form =
    "<form>" +
      "<input type='type' value='bar' />" +
    "</form>";
  var model = JSON.parse($(form).JSONBind());
  strictEqual(Object.keys(model).length, 0);
});

test("A text field returns it's value attribute.", function () {
  var form =
    "<form>" +
      "<input type='text' name='foo' value='bar' />" +
    "</form>";
  var model = JSON.parse($(form).JSONBind());
  strictEqual(model.foo, "bar");
});

test("A text field without a value returns an empty value.", function () {
  var form =
    "<form>" +
      "<input type='text' name='foo'/>" +
    "</form>";
  var model = JSON.parse($(form).JSONBind());
  strictEqual(model.foo, "");
});

test("A password field without a name should return no value.", function () {
  var form =
    "<form>" +
      "<input type='password' value='bar' />" +
    "</form>";
  var model = JSON.parse($(form).JSONBind());
  strictEqual(Object.keys(model).length, 0);
});

test("A password field returns it's value attribute.", function () {
  var form =
    "<form>" +
      "<input type='password' name='foo' value='bar' />" +
    "</form>";
  var model = JSON.parse($(form).JSONBind());
  strictEqual(model.foo, "bar");
});

test("A password field without a value returns an empty value.", function () {
  var form =
    "<form>" +
      "<input type='password' name='foo'/>" +
    "</form>";
  var model = JSON.parse($(form).JSONBind());
  strictEqual(model.foo, "");
});

// SELECT (SINGLE & MULTI)
module("select", {});

test("A select without a name should return no value.", function () {
  var form =
    "<form>" +
      "<select>" +
        "<option value='bin' selected='selected'>Bin</option>" +
        "<option value='foo'>Foo</option>" +
      "</select>" +
    "</form>";
  var model = JSON.parse($(form).JSONBind());
  strictEqual(Object.keys(model).length, 0);
});

test("A select should return the value of the selected option.", function () {
  var form =
    "<form>" +
      "<select name='fizz'>" +
        "<option value='bin'>Bin</option>" +
        "<option value='foo' selected>Foo</option>" +
      "</select>" +
    "</form>";
  var model = JSON.parse($(form).JSONBind());
  strictEqual(model.fizz, "foo");
});

test("A select with no selected values should return the value of the first option.", function () {
  var form =
    "<form>" +
      "<select name='fizz'>" +
        "<option value='bin'>Bin</option>" +
        "<option value='foo'>Foo</option>" +
      "</select>" +
    "</form>";
  var model = JSON.parse($(form).JSONBind());
  strictEqual(model.fizz, "bin");
});

test("A select with multiple values selected should return an array of the selected values", function () {
  var form =
    "<form>" +
      "<select name='fizz' multiple='multiple'>" +
        "<option value='bin' selected>Bin</option>" +
        "<option value='foo' selected>Foo</option>" +
      "</select>" +
    "</form>";
  var model = JSON.parse($(form).JSONBind());
  strictEqual(model.fizz.length, 2);
  strictEqual(model.fizz[0], "bin");
  strictEqual(model.fizz[1], "foo");
});

// TEXTAREA
module("textarea", {});

test("A textarea  without a name should return no value.", function () {
  var form =
    "<form>" +
      "<textarea>foo</textarea>" +
    "</form>";
  var model = JSON.parse($(form).JSONBind());
  strictEqual(Object.keys(model).length, 0);
});

test("A textarea returns it's value attribute.", function () {
  var form =
    "<form>" +
      "<textarea name='foo'>bar</textarea>" +
    "</form>";
  var model = JSON.parse($(form).JSONBind());
  strictEqual(model.foo, "bar");
});

test("A textarea without a value returns an empty value.", function () {
  var form =
    "<form>" +
      "<textarea name='foo'></textarea>" +
    "</form>";
  var model = JSON.parse($(form).JSONBind());
  strictEqual(model.foo, "");
});