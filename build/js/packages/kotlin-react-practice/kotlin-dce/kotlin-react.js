(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-extensions', 'react'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-extensions'), require('react'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-react'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-react'.");
    }if (typeof this['kotlin-extensions'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react'. Its dependency 'kotlin-extensions' was not found. Please, check whether 'kotlin-extensions' is loaded prior to 'kotlin-react'.");
    }if (typeof react === 'undefined') {
      throw new Error("Error loading module 'kotlin-react'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-react'.");
    }root['kotlin-react'] = factory(typeof this['kotlin-react'] === 'undefined' ? {} : this['kotlin-react'], kotlin, this['kotlin-extensions'], react);
  }
}(this, function (_, Kotlin, $module$kotlin_extensions, $module$react) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var Unit = Kotlin.kotlin.Unit;
  var wrapFunction = Kotlin.wrapFunction;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var createElement = $module$react.createElement;
  var Children = $module$react.Children;
  var addAll = Kotlin.kotlin.collections.addAll_ye1y7v$;
  var cloneElement = $module$react.cloneElement;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  RBuilderMultiple.prototype = Object.create(RBuilderImpl.prototype);
  RBuilderSingle.prototype = Object.create(RBuilderImpl.prototype);
  RElementBuilderImpl.prototype = Object.create(RBuilderImpl.prototype);
  RElementBuilderImpl.prototype.constructor = RElementBuilderImpl;
  function get_react($receiver) {
    return get_js($receiver);
  }
  function fc$lambda$lambda(closure$func, closure$props) {
    return function ($receiver) {
      closure$func($receiver, closure$props);
      return Unit;
    };
  }
  function fc$lambda(closure$func) {
    return function (props) {
      return buildElements_0(fc$lambda$lambda(closure$func, props));
    };
  }
  function fc(func) {
    var component = fc$lambda(func);
    return component;
  }
  function set_key($receiver, value) {
    $receiver.key = value;
  }
  function set_ref($receiver, value) {
    $receiver.ref = value;
  }
  function RBuilder() {
  }
  RBuilder.prototype.child_30b5ua$ = function (element) {
    this.childList.add_11rb$(element);
  };
  RBuilder.prototype.unaryPlus_m8hz4t$ = function ($receiver) {
    this.child_30b5ua$($receiver);
  };
  RBuilder.prototype.unaryPlus_pdl1vz$ = function ($receiver) {
    this.child_30b5ua$($receiver);
  };
  RBuilder.prototype.child_1mw94g$$default = function (type, props, handler) {
    if (handler == null) {
      this.child_30b5ua$(createElement(type, props));
      return;
    }var $receiver = RElementBuilder_0(props);
    handler($receiver);
    var children = $receiver.childList;
    this.child_f281ps$_0(type, props, children);
  };
  RBuilder.prototype.child_1mw94g$ = function (type, props, handler, callback$default) {
    if (props === void 0) {
      props = {};
    }if (handler === void 0)
      handler = null;
    callback$default ? callback$default(type, props, handler) : this.child_1mw94g$$default(type, props, handler);
  };
  RBuilder.prototype.child_f281ps$_0 = function (type, props, children) {
    this.child_30b5ua$(createElement.apply(null, [type, props].concat(copyToArray(children))));
  };
  RBuilder.prototype.invoke_qk0v40$ = function ($receiver, handler) {
    this.child_1mw94g$($receiver, void 0, handler);
  };
  function RBuilder$invoke$lambda(closure$value, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.value = closure$value;
      closure$handler($receiver);
      return Unit;
    };
  }
  RBuilder.prototype.invoke_snhqu5$ = function ($receiver, value, handler) {
    this.child_1mw94g$($receiver, void 0, RBuilder$invoke$lambda(value, handler));
  };
  function RBuilder$invoke$lambda$lambda$lambda(closure$handler, closure$value) {
    return function ($receiver) {
      closure$handler($receiver, closure$value);
      return Unit;
    };
  }
  function RBuilder$invoke$lambda$lambda(closure$handler) {
    return function (value) {
      return buildElements_0(RBuilder$invoke$lambda$lambda$lambda(closure$handler, value));
    };
  }
  function RBuilder$invoke$lambda_0(closure$handler) {
    return function ($receiver) {
      $receiver.attrs.children = RBuilder$invoke$lambda$lambda(closure$handler);
      return Unit;
    };
  }
  RBuilder.prototype.invoke_c0v1gl$ = function ($receiver, handler) {
    this.child_1mw94g$($receiver, void 0, RBuilder$invoke$lambda_0(handler));
  };
  RBuilder.prototype.child_up9nw1$ = function (klazz, handler) {
    this.invoke_qk0v40$(get_react(klazz), handler);
  };
  RBuilder.prototype.children_w8hwhj$ = function ($receiver) {
    addAll(this.childList, Children.toArray($receiver.children));
  };
  RBuilder.prototype.renderEach_ezdo97$ = function ($receiver, fn) {
    var destination = this.childList;
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var rBuilder = RBuilder_0();
      fn(rBuilder, item);
      tmp$_0.call(destination, first(rBuilder.childList));
    }
  };
  RBuilder.prototype.renderEachIndexed_cfwqen$ = function ($receiver, fn) {
    var destination = this.childList;
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_1 = destination.add_11rb$;
      var index_0 = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
      var rBuilder = RBuilder_0();
      fn(rBuilder, index_0, item);
      tmp$_1.call(destination, first(rBuilder.childList));
    }
  };
  RBuilder.prototype.withKey_s5hl0b$ = function ($receiver, newKey) {
    var index = this.childList.indexOf_11rb$($receiver);
    if (index >= 0) {
      this.childList.removeAt_za3lpa$(index);
      var $receiver_0 = {};
      set_key($receiver_0, newKey);
      var elementWithKey = cloneElement($receiver, $receiver_0);
      this.childList.add_wxm5ur$(index, elementWithKey);
    }};
  RBuilder.prototype.withKey_pspxar$ = function ($receiver, newKey) {
    this.withKey_s5hl0b$($receiver, newKey.toString());
  };
  RBuilder.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'RBuilder', interfaces: []};
  function RBuilder_0() {
    return new RBuilderImpl();
  }
  function RBuilderImpl() {
    this.childList_z394dm$_0 = ArrayList_init();
  }
  Object.defineProperty(RBuilderImpl.prototype, 'childList', {configurable: true, get: function () {
    return this.childList_z394dm$_0;
  }});
  RBuilderImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'RBuilderImpl', interfaces: [RBuilder]};
  function RBuilderMultiple() {
    RBuilderImpl.call(this);
  }
  function buildElements(builder, handler) {
    var tmp$;
    handler(builder);
    var nodes = builder.childList;
    switch (nodes.size) {
      case 0:
        tmp$ = null;
        break;
      case 1:
        tmp$ = first(nodes);
        break;
      default:var tmp$_0 = $module$react.Fragment;
        var $receiver = {};
        tmp$ = createElement.apply(null, [tmp$_0, $receiver].concat(copyToArray(nodes)));
        break;
    }
    return tmp$;
  }
  function buildElements_0(handler) {
    return buildElements(RBuilder_0(), handler);
  }
  function RBuilderSingle() {
    RBuilderImpl.call(this);
  }
  function RElementBuilder() {
  }
  RElementBuilder.prototype.attrs_37755u$ = function (handler) {
    handler(this.attrs);
  };
  Object.defineProperty(RElementBuilder.prototype, 'key', {configurable: true, get: function () {
    throw IllegalStateException_init(''.toString());
  }, set: function (value) {
    set_key(this.attrs, value);
  }});
  Object.defineProperty(RElementBuilder.prototype, 'ref', {configurable: true, get: function () {
    throw IllegalStateException_init(''.toString());
  }, set: function (value) {
    set_ref(this.attrs, value);
  }});
  RElementBuilder.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'RElementBuilder', interfaces: [RBuilder]};
  function RElementBuilder_0(attrs) {
    return new RElementBuilderImpl(attrs);
  }
  function RElementBuilderImpl(attrs) {
    RBuilderImpl.call(this);
    this.attrs_rox8qs$_0 = attrs;
  }
  Object.defineProperty(RElementBuilderImpl.prototype, 'attrs', {get: function () {
    return this.attrs_rox8qs$_0;
  }});
  RElementBuilderImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'RElementBuilderImpl', interfaces: [RBuilderImpl, RElementBuilder]};
  var package$react = _.react || (_.react = {});
  package$react.get_react_2wnr96$ = get_react;
  package$react.fc_4mavxa$ = fc;
  package$react.set_key_9xodow$ = set_key;
  package$react.set_ref_d0fdtm$ = set_ref;
  package$react.RBuilder = RBuilder;
  package$react.createBuilder = RBuilder_0;
  package$react.RBuilderImpl = RBuilderImpl;
  package$react.RBuilderMultiple = RBuilderMultiple;
  package$react.buildElements_wi9ndb$ = buildElements;
  package$react.buildElements_zepujl$ = buildElements_0;
  package$react.RBuilderSingle = RBuilderSingle;
  package$react.RElementBuilder = RElementBuilder;
  package$react.RElementBuilder_4vdyb1$ = RElementBuilder_0;
  package$react.RElementBuilderImpl = RElementBuilderImpl;
  $$importsForInline$$.react = $module$react;
  RBuilderImpl.prototype.child_30b5ua$ = RBuilder.prototype.child_30b5ua$;
  RBuilderImpl.prototype.child_1mw94g$$default = RBuilder.prototype.child_1mw94g$$default;
  RBuilderImpl.prototype.child_f281ps$_0 = RBuilder.prototype.child_f281ps$_0;
  RBuilderImpl.prototype.child_up9nw1$ = RBuilder.prototype.child_up9nw1$;
  RBuilderImpl.prototype.unaryPlus_m8hz4t$ = RBuilder.prototype.unaryPlus_m8hz4t$;
  RBuilderImpl.prototype.unaryPlus_pdl1vz$ = RBuilder.prototype.unaryPlus_pdl1vz$;
  RBuilderImpl.prototype.invoke_qk0v40$ = RBuilder.prototype.invoke_qk0v40$;
  RBuilderImpl.prototype.invoke_snhqu5$ = RBuilder.prototype.invoke_snhqu5$;
  RBuilderImpl.prototype.invoke_c0v1gl$ = RBuilder.prototype.invoke_c0v1gl$;
  RBuilderImpl.prototype.children_w8hwhj$ = RBuilder.prototype.children_w8hwhj$;
  RBuilderImpl.prototype.renderEach_ezdo97$ = RBuilder.prototype.renderEach_ezdo97$;
  RBuilderImpl.prototype.renderEachIndexed_cfwqen$ = RBuilder.prototype.renderEachIndexed_cfwqen$;
  RBuilderImpl.prototype.withKey_s5hl0b$ = RBuilder.prototype.withKey_s5hl0b$;
  RBuilderImpl.prototype.withKey_pspxar$ = RBuilder.prototype.withKey_pspxar$;
  RBuilderImpl.prototype.child_1mw94g$ = RBuilder.prototype.child_1mw94g$;
  RBuilderMultiple.prototype.child_f281ps$_0 = RBuilder.prototype.child_f281ps$_0;
  RBuilderSingle.prototype.child_f281ps$_0 = RBuilder.prototype.child_f281ps$_0;
  RElementBuilder.prototype.child_30b5ua$ = RBuilder.prototype.child_30b5ua$;
  RElementBuilder.prototype.child_1mw94g$$default = RBuilder.prototype.child_1mw94g$$default;
  RElementBuilder.prototype.child_f281ps$_0 = RBuilder.prototype.child_f281ps$_0;
  RElementBuilder.prototype.child_up9nw1$ = RBuilder.prototype.child_up9nw1$;
  RElementBuilder.prototype.unaryPlus_m8hz4t$ = RBuilder.prototype.unaryPlus_m8hz4t$;
  RElementBuilder.prototype.unaryPlus_pdl1vz$ = RBuilder.prototype.unaryPlus_pdl1vz$;
  RElementBuilder.prototype.invoke_qk0v40$ = RBuilder.prototype.invoke_qk0v40$;
  RElementBuilder.prototype.invoke_snhqu5$ = RBuilder.prototype.invoke_snhqu5$;
  RElementBuilder.prototype.invoke_c0v1gl$ = RBuilder.prototype.invoke_c0v1gl$;
  RElementBuilder.prototype.children_w8hwhj$ = RBuilder.prototype.children_w8hwhj$;
  RElementBuilder.prototype.renderEach_ezdo97$ = RBuilder.prototype.renderEach_ezdo97$;
  RElementBuilder.prototype.renderEachIndexed_cfwqen$ = RBuilder.prototype.renderEachIndexed_cfwqen$;
  RElementBuilder.prototype.withKey_s5hl0b$ = RBuilder.prototype.withKey_s5hl0b$;
  RElementBuilder.prototype.withKey_pspxar$ = RBuilder.prototype.withKey_pspxar$;
  RElementBuilder.prototype.child_1mw94g$ = RBuilder.prototype.child_1mw94g$;
  RElementBuilderImpl.prototype.attrs_37755u$ = RElementBuilder.prototype.attrs_37755u$;
  Object.defineProperty(RElementBuilderImpl.prototype, 'key', Object.getOwnPropertyDescriptor(RElementBuilder.prototype, 'key'));
  Object.defineProperty(RElementBuilderImpl.prototype, 'ref', Object.getOwnPropertyDescriptor(RElementBuilder.prototype, 'ref'));
  RElementBuilderImpl.prototype.child_30b5ua$ = RElementBuilder.prototype.child_30b5ua$;
  RElementBuilderImpl.prototype.child_1mw94g$$default = RElementBuilder.prototype.child_1mw94g$$default;
  RElementBuilderImpl.prototype.child_f281ps$_0 = RBuilder.prototype.child_f281ps$_0;
  RElementBuilderImpl.prototype.child_f281ps$_0 = RBuilder.prototype.child_f281ps$_0;
  RElementBuilderImpl.prototype.child_up9nw1$ = RElementBuilder.prototype.child_up9nw1$;
  RElementBuilderImpl.prototype.unaryPlus_m8hz4t$ = RElementBuilder.prototype.unaryPlus_m8hz4t$;
  RElementBuilderImpl.prototype.unaryPlus_pdl1vz$ = RElementBuilder.prototype.unaryPlus_pdl1vz$;
  RElementBuilderImpl.prototype.invoke_qk0v40$ = RElementBuilder.prototype.invoke_qk0v40$;
  RElementBuilderImpl.prototype.invoke_snhqu5$ = RElementBuilder.prototype.invoke_snhqu5$;
  RElementBuilderImpl.prototype.invoke_c0v1gl$ = RElementBuilder.prototype.invoke_c0v1gl$;
  RElementBuilderImpl.prototype.children_w8hwhj$ = RElementBuilder.prototype.children_w8hwhj$;
  RElementBuilderImpl.prototype.renderEach_ezdo97$ = RElementBuilder.prototype.renderEach_ezdo97$;
  RElementBuilderImpl.prototype.renderEachIndexed_cfwqen$ = RElementBuilder.prototype.renderEachIndexed_cfwqen$;
  RElementBuilderImpl.prototype.withKey_s5hl0b$ = RElementBuilder.prototype.withKey_s5hl0b$;
  RElementBuilderImpl.prototype.withKey_pspxar$ = RElementBuilder.prototype.withKey_pspxar$;
  RElementBuilderImpl.prototype.child_1mw94g$ = RElementBuilder.prototype.child_1mw94g$;
  return _;
}));

//# sourceMappingURL=kotlin-react.js.map
