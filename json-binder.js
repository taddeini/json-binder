(function ($) {
  // Namespace for input binding definitions
  var binding = {};

  // Binding definition for checkboxes
  binding.checkbox = function ($checkbox) {
    var _name = $checkbox.attr("name"),
        _hasValue = typeof _name !== "undefined",
        _value = $checkbox.is(":checked") ? true : false;

    return {
      name: _name,
      hasValue: _hasValue,
      value: _value
    }
  };

  /// Binding definition for radios
  binding.radio = function ($radio) {
    var _name = $radio.attr("name"),
        _hasValue = typeof _name !== "undefined",
        _value = $radio.is(":checked") ? $radio.val() : "";

    return {
      name: _name,
      hasValue: _hasValue,
      value: _value
    }
  };

  $.fn.JSONBind = function () {
    // Stores the JSON object to be returned
    var result = {},
    // Array that will hold any input bindings that need to be run
    active_bindings = [],
    // Gets the jQuery items for any given inputs
    $inputs = this.find("input");

    // For each input, determine if a binding definition exists, and if it
    // does create and store it
    $inputs.each(function () {
      var $this = $(this);
      var binder = binding[$this.attr("type")];

      if (typeof binder !== "undefined") {
        active_bindings.push(binder($this));
      }
    });

    // For any binding definitions that were created, run them to get the
    // input data to the raw JSON values
    $.each(active_bindings, function (index, binder) {
      if (binder.hasValue) {
        result[binder.name] = binder.value;
      }
    });
    
    return result;
  };
})(jQuery);