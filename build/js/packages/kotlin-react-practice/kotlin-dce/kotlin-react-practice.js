(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-react-dom', 'kotlin-react'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-react-dom'), require('kotlin-react'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-practice'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-react-practice'.");
    }if (typeof this['kotlin-react-dom'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-practice'. Its dependency 'kotlin-react-dom' was not found. Please, check whether 'kotlin-react-dom' is loaded prior to 'kotlin-react-practice'.");
    }if (typeof this['kotlin-react'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-practice'. Its dependency 'kotlin-react' was not found. Please, check whether 'kotlin-react' is loaded prior to 'kotlin-react-practice'.");
    }root['kotlin-react-practice'] = factory(typeof this['kotlin-react-practice'] === 'undefined' ? {} : this['kotlin-react-practice'], kotlin, this['kotlin-react-dom'], this['kotlin-react']);
  }
}(this, function (_, Kotlin, $module$kotlin_react_dom, $module$kotlin_react) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var render = $module$kotlin_react_dom.react.dom.render_2955dm$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var fc = $module$kotlin_react.react.fc_4mavxa$;
  var attributesMapOf = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var P_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
  var RDOMBuilder = $module$kotlin_react_dom.react.dom.RDOMBuilder;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var H1_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H1;
  var enumEncode = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
  var attributesMapOf_0 = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var BUTTON_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BUTTON;
  function main$lambda$lambda($receiver) {
    return Unit;
  }
  function main$lambda($receiver) {
    $receiver.child_1mw94g$(app, void 0, main$lambda$lambda);
    return Unit;
  }
  function main() {
    render(document.getElementById('root'), void 0, main$lambda);
  }
  function p$lambda(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function UserItem(name, surname, patronymic, email, login) {
    this.name = name;
    this.surname = surname;
    this.patronymic = patronymic;
    this.email = email;
    this.login = login;
  }
  UserItem.$metadata$ = {kind: Kind_CLASS, simpleName: 'UserItem', interfaces: []};
  UserItem.prototype.component1 = function () {
    return this.name;
  };
  UserItem.prototype.component2 = function () {
    return this.surname;
  };
  UserItem.prototype.component3 = function () {
    return this.patronymic;
  };
  UserItem.prototype.component4 = function () {
    return this.email;
  };
  UserItem.prototype.component5 = function () {
    return this.login;
  };
  UserItem.prototype.copy_x0a6t6$ = function (name, surname, patronymic, email, login) {
    return new UserItem(name === void 0 ? this.name : name, surname === void 0 ? this.surname : surname, patronymic === void 0 ? this.patronymic : patronymic, email === void 0 ? this.email : email, login === void 0 ? this.login : login);
  };
  UserItem.prototype.toString = function () {
    return 'UserItem(name=' + Kotlin.toString(this.name) + (', surname=' + Kotlin.toString(this.surname)) + (', patronymic=' + Kotlin.toString(this.patronymic)) + (', email=' + Kotlin.toString(this.email)) + (', login=' + Kotlin.toString(this.login)) + ')';
  };
  UserItem.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.surname) | 0;
    result = result * 31 + Kotlin.hashCode(this.patronymic) | 0;
    result = result * 31 + Kotlin.hashCode(this.email) | 0;
    result = result * 31 + Kotlin.hashCode(this.login) | 0;
    return result;
  };
  UserItem.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.surname, other.surname) && Kotlin.equals(this.patronymic, other.patronymic) && Kotlin.equals(this.email, other.email) && Kotlin.equals(this.login, other.login)))));
  };
  var userItems;
  function UsersList$lambda($receiver, props) {
    var $receiver_0 = props.userList;
    var destination = ArrayList_init($receiver_0.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
      var item = $receiver_0[tmp$];
      var tmp$_0 = destination.add_11rb$;
      var $receiver_0_0 = RDOMBuilder.Companion.invoke_f6ihu2$(p$lambda(null));
      $receiver_0_0.unaryPlus_pdl1vz$(item.toString());
      $receiver.child_30b5ua$($receiver_0_0.create());
      tmp$_0.call(destination, Unit);
    }
    return Unit;
  }
  var UsersList;
  function h1$lambda(closure$classes) {
    return function (it) {
      return new H1_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function button$lambda(closure$formEncType, closure$formMethod, closure$type, closure$classes) {
    return function (it) {
      return new BUTTON_init(attributesMapOf_0(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null, 'class', closure$classes]), it);
    };
  }
  function app$lambda($receiver, it) {
    var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(h1$lambda(null));
    $receiver_0.unaryPlus_pdl1vz$('\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438');
    $receiver.child_30b5ua$($receiver_0.create());
    var $receiver_0_0 = RDOMBuilder.Companion.invoke_f6ihu2$(button$lambda(null, null, null, null));
    $receiver_0_0.unaryPlus_pdl1vz$('+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C');
    $receiver.child_30b5ua$($receiver_0_0.create());
    $receiver.child_1mw94g$(UsersList);
    return Unit;
  }
  var app;
  _.main = main;
  _.UserItem = UserItem;
  $$importsForInline$$['kotlin-react-dom'] = $module$kotlin_react_dom;
  userItems = listOf([new UserItem('\u0418\u0432\u0430\u043D', '\u0418\u0432\u0430\u043D\u043E\u0432', '\u0418\u0432\u0430\u043D\u043E\u0432\u0438\u0447', 'mail1@mail.com', 'user1'), new UserItem('\u0418\u0432\u0430\u043D', '\u0418\u0432\u0430\u043D\u043E\u0432', '\u0418\u0432\u0430\u043D\u043E\u0432\u0438\u0447', 'mail1@mail.com', 'user1')]);
  UsersList = fc(UsersList$lambda);
  app = fc(app$lambda);
  main();
  return _;
}));

//# sourceMappingURL=kotlin-react-practice.js.map
