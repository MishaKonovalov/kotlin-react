(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-css', 'kotlin-styled', 'kotlin-react', 'kotlin-react-dom', 'react', 'kotlinx-html-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-css'), require('kotlin-styled'), require('kotlin-react'), require('kotlin-react-dom'), require('react'), require('kotlinx-html-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-practice'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-react-practice'.");
    }if (typeof this['kotlin-css'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-practice'. Its dependency 'kotlin-css' was not found. Please, check whether 'kotlin-css' is loaded prior to 'kotlin-react-practice'.");
    }if (typeof this['kotlin-styled'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-practice'. Its dependency 'kotlin-styled' was not found. Please, check whether 'kotlin-styled' is loaded prior to 'kotlin-react-practice'.");
    }if (typeof this['kotlin-react'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-practice'. Its dependency 'kotlin-react' was not found. Please, check whether 'kotlin-react' is loaded prior to 'kotlin-react-practice'.");
    }if (typeof this['kotlin-react-dom'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-practice'. Its dependency 'kotlin-react-dom' was not found. Please, check whether 'kotlin-react-dom' is loaded prior to 'kotlin-react-practice'.");
    }if (typeof react === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-practice'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-react-practice'.");
    }if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-react-practice'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'kotlin-react-practice'.");
    }root['kotlin-react-practice'] = factory(typeof this['kotlin-react-practice'] === 'undefined' ? {} : this['kotlin-react-practice'], kotlin, this['kotlin-css'], this['kotlin-styled'], this['kotlin-react'], this['kotlin-react-dom'], react, this['kotlinx-html-js']);
  }
}(this, function (_, Kotlin, $module$kotlin_css, $module$kotlin_styled, $module$kotlin_react, $module$kotlin_react_dom, $module$react, $module$kotlinx_html_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Display = $module$kotlin_css.kotlinx.css.Display;
  var set_display = $module$kotlin_css.kotlinx.css.set_display_qidz4o$;
  var JustifyContent = $module$kotlin_css.kotlinx.css.JustifyContent;
  var set_justifyContent = $module$kotlin_css.kotlinx.css.set_justifyContent_gwpzrh$;
  var Align = $module$kotlin_css.kotlinx.css.Align;
  var set_alignItems = $module$kotlin_css.kotlinx.css.set_alignItems_olgsez$;
  var Unit = Kotlin.kotlin.Unit;
  var fc = $module$kotlin_react.react.fc_4mavxa$;
  var enumEncode = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
  var attributesMapOf = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var BUTTON_init = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BUTTON;
  var StyledDOMBuilder = $module$kotlin_styled.styled.StyledDOMBuilder;
  var render = $module$kotlin_react_dom.react.dom.render_2955dm$;
  var FlexDirection = $module$kotlin_css.kotlinx.css.FlexDirection;
  var set_flexDirection = $module$kotlin_css.kotlinx.css.set_flexDirection_c4dh0c$;
  var enumEncode_0 = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
  var attributesMapOf_0 = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var INPUT_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.INPUT;
  var RDOMBuilder = $module$kotlin_react_dom.react.dom.RDOMBuilder;
  var html = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
  var LABEL_init = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LABEL;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mutableMapOf = Kotlin.kotlin.collections.mutableMapOf_qfcya0$;
  var useState = $module$react.useState;
  var throwCCE = Kotlin.throwCCE;
  var toMutableMap = Kotlin.kotlin.collections.toMutableMap_abgq59$;
  var Position = $module$kotlin_css.kotlinx.css.Position;
  var set_position = $module$kotlin_css.kotlinx.css.set_position_mvtmy5$;
  var get_px = $module$kotlin_css.kotlinx.css.get_px_rcaex3$;
  var set_top = $module$kotlin_css.kotlinx.css.set_top_n8chyh$;
  var set_left = $module$kotlin_css.kotlinx.css.set_left_n8chyh$;
  var set_right = $module$kotlin_css.kotlinx.css.set_right_n8chyh$;
  var set_bottom = $module$kotlin_css.kotlinx.css.set_bottom_n8chyh$;
  var rgba = $module$kotlin_css.kotlinx.css.rgba_gb4hak$;
  var set_backgroundColor = $module$kotlin_css.kotlinx.css.set_backgroundColor_ommczd$;
  var set_onSubmitFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onSubmitFunction_pszlq2$;
  var rgb = $module$kotlin_css.kotlinx.css.rgb_qt1dr2$;
  var hashCode = Kotlin.hashCode;
  var toString = Kotlin.toString;
  var set_onChangeFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onChangeFunction_pszlq2$;
  var DIV_init = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var attributesMapOf_1 = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var DIV_init_0 = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var BUTTON_init_0 = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BUTTON;
  var FORM_init = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.FORM;
  var set_gap = $module$kotlin_css.kotlinx.css.set_gap_n8chyh$;
  var get_fr = $module$kotlin_css.kotlinx.css.get_fr_rcaex3$;
  var GridTemplateColumns_init = $module$kotlin_css.kotlinx.css.GridTemplateColumns_init_onxlus$;
  var set_gridTemplateColumns = $module$kotlin_css.kotlinx.css.set_gridTemplateColumns_7cauk3$;
  var padding = $module$kotlin_css.kotlinx.css.padding_cx3uck$;
  var set_minHeight = $module$kotlin_css.kotlinx.css.set_minHeight_n8chyh$;
  var Color = $module$kotlin_css.kotlinx.css.Color;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var SPAN_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SPAN;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var MutableList = Kotlin.kotlin.collections.MutableList;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var H1_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H1;
  var HEADER_init = $module$kotlin_styled.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.HEADER;
  function styledButton$lambda(closure$formEncType, closure$formMethod, closure$type) {
    return function (it) {
      return new BUTTON_init(attributesMapOf(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null]), it);
    };
  }
  function Type() {
    this.create = 'create';
    this.add = 'add';
  }
  Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: []
  };
  function Button$lambda($receiver, props) {
    var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledButton$lambda(null, null, null));
    var $receiver_1 = $receiver_0.css;
    set_display($receiver_1, Display.flex);
    set_justifyContent($receiver_1, JustifyContent.center);
    set_alignItems($receiver_1, Align.center);
    $receiver_0.unaryPlus_m8hz4t$(props.children);
    $receiver.child_30b5ua$($receiver_0.create());
    return Unit;
  }
  var Button;
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
  function input$lambda(closure$type, closure$formEncType, closure$formMethod, closure$name, closure$classes) {
    return function (it) {
      return new INPUT_init(attributesMapOf_0(['type', closure$type != null ? enumEncode_0(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode_0(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode_0(closure$formMethod) : null, 'name', closure$name, 'class', closure$classes]), it);
    };
  }
  function styledLabel$lambda(it) {
    return new LABEL_init(html.emptyMap, it);
  }
  function Input$lambda($receiver, props) {
    var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledLabel$lambda);
    var $receiver_1 = $receiver_0.css;
    set_display($receiver_1, Display.flex);
    set_flexDirection($receiver_1, FlexDirection.column);
    props.control.label;
    var $receiver_0_0 = RDOMBuilder.Companion.invoke_f6ihu2$(input$lambda(null, null, null, null, null));
    var $receiver_2 = $receiver_0_0.attrs;
    $receiver_2.placeholder = props.control.placeHolder;
    $receiver_2.value = props.value;
    $receiver_0.child_30b5ua$($receiver_0_0.create());
    $receiver.child_30b5ua$($receiver_0.create());
    return Unit;
  }
  var Input;
  function input$lambda_0(closure$type, closure$formEncType, closure$formMethod, closure$name, closure$classes) {
    return function (it) {
      return new INPUT_init(attributesMapOf_0(['type', closure$type != null ? enumEncode_0(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode_0(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode_0(closure$formMethod) : null, 'name', closure$name, 'class', closure$classes]), it);
    };
  }
  function styledLabel$lambda_0(it) {
    return new LABEL_init(html.emptyMap, it);
  }
  function styledDiv$lambda(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function div$lambda(closure$classes) {
    return function (it) {
      return new DIV_init_0(attributesMapOf_1('class', closure$classes), it);
    };
  }
  function button$lambda(closure$formEncType, closure$formMethod, closure$type, closure$classes) {
    return function (it) {
      return new BUTTON_init_0(attributesMapOf_0(['formenctype', closure$formEncType != null ? enumEncode_0(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode_0(closure$formMethod) : null, 'type', closure$type != null ? enumEncode_0(closure$type) : null, 'class', closure$classes]), it);
    };
  }
  function styledForm$lambda(closure$action, closure$encType, closure$method) {
    return function (it) {
      return new FORM_init(attributesMapOf(['action', closure$action, 'enctype', closure$encType != null ? enumEncode(closure$encType) : null, 'method', closure$method != null ? enumEncode(closure$method) : null]), it);
    };
  }
  function FormControl(label, placeHolder, name) {
    this.label = label;
    this.placeHolder = placeHolder;
    this.name = name;
  }
  FormControl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FormControl',
    interfaces: []
  };
  var formControlsCollection;
  function ModalWindow$lambda$lambda(closure$inputValues, closure$setInputValues) {
    return function (it) {
      var tmp$;
      var element = Kotlin.isType(tmp$ = it.target, HTMLInputElement) ? tmp$ : throwCCE();
      var newState = toMutableMap(closure$inputValues);
      var key = element.name;
      var value = element.value;
      newState.put_xwzc9p$(key, value);
      closure$setInputValues(newState);
      return Unit;
    };
  }
  function ModalWindow$lambda$lambda_0(it) {
    it.preventDefault();
    return Unit;
  }
  function ModalWindow$lambda($receiver, props) {
    var tmp$ = useState(mutableMapOf([to('name', ''), to('surname', ''), to('patronymic', ''), to('email', ''), to('login', '')]));
    var inputValues = tmp$[0];
    var setInputValues = tmp$[1];
    var changeHandler = ModalWindow$lambda$lambda(inputValues, setInputValues);
    var submitHandler = ModalWindow$lambda$lambda_0;
    var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
    var $receiver_1 = $receiver_0.css;
    set_position($receiver_1, Position.fixed);
    set_top($receiver_1, get_px(0));
    set_left($receiver_1, get_px(0));
    set_right($receiver_1, get_px(0));
    set_bottom($receiver_1, get_px(0));
    set_backgroundColor($receiver_1, rgba(53, 61, 75, 0.2));
    set_display($receiver_1, Display.flex);
    set_justifyContent($receiver_1, JustifyContent.center);
    set_alignItems($receiver_1, Align.center);
    var $receiver_0_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledForm$lambda(null, null, null));
    set_onSubmitFunction($receiver_0_0.attrs, submitHandler);
    var $receiver_2 = $receiver_0_0.css;
    set_display($receiver_2, Display.flex);
    set_flexDirection($receiver_2, FlexDirection.column);
    var $receiver_0_1 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda);
    set_backgroundColor($receiver_0_1.css, rgb(53, 61, 75));
    $receiver_0_1.unaryPlus_pdl1vz$('\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F');
    $receiver_0_0.child_30b5ua$($receiver_0_1.create());
    var $receiver_0_2 = RDOMBuilder.Companion.invoke_f6ihu2$(div$lambda(null));
    var tmp$_0;
    tmp$_0 = formControlsCollection.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      var $receiver_0_3 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledLabel$lambda_0);
      $receiver_0_3.key = hashCode(element).toString();
      var $receiver_3 = $receiver_0_3.css;
      set_display($receiver_3, Display.flex);
      set_flexDirection($receiver_3, FlexDirection.column);
      element.label;
      var $receiver_0_4 = RDOMBuilder.Companion.invoke_f6ihu2$(input$lambda_0(null, null, null, null, null));
      var $receiver_4 = $receiver_0_4.attrs;
      $receiver_4.placeholder = element.placeHolder;
      $receiver_4.value = toString(inputValues.get_11rb$(element.name));
      set_onChangeFunction($receiver_4, changeHandler);
      $receiver_4.name = element.name;
      $receiver_0_3.child_30b5ua$($receiver_0_4.create());
      $receiver_0_2.child_30b5ua$($receiver_0_3.create());
    }
    $receiver_0_0.child_30b5ua$($receiver_0_2.create());
    var $receiver_0_5 = RDOMBuilder.Companion.invoke_f6ihu2$(button$lambda(null, null, null, null));
    $receiver_0_5.unaryPlus_pdl1vz$('\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C');
    $receiver_0_0.child_30b5ua$($receiver_0_5.create());
    $receiver_0.child_30b5ua$($receiver_0_0.create());
    $receiver.child_30b5ua$($receiver_0.create());
    return Unit;
  }
  var ModalWindow;
  function span$lambda(closure$classes) {
    return function (it) {
      return new SPAN_init(attributesMapOf_1('class', closure$classes), it);
    };
  }
  function styledButton$lambda_0(closure$formEncType, closure$formMethod, closure$type) {
    return function (it) {
      return new BUTTON_init(attributesMapOf(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null]), it);
    };
  }
  function styledDiv$lambda_0(it) {
    return new DIV_init(html.emptyMap, it);
  }
  function UsersList$lambda$lambda$lambda$lambda$lambda$lambda$lambda(closure$props, closure$item) {
    return function (it) {
      closure$props.delete(closure$item);
      return Unit;
    };
  }
  function UsersList$lambda($receiver, props) {
    var $receiver_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_0);
    var $receiver_1 = $receiver_0.css;
    set_display($receiver_1, Display.flex);
    set_flexDirection($receiver_1, FlexDirection.column);
    set_gap($receiver_1, get_px(5));
    var $receiver_2 = props.userItems;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_2, 10));
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = $receiver_2.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_1 = destination.add_11rb$;
      checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
      var $receiver_0_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledDiv$lambda_0);
      var $receiver_3 = $receiver_0_0.css;
      set_display($receiver_3, Display.grid);
      set_gridTemplateColumns($receiver_3, GridTemplateColumns_init([get_fr(1), get_fr(1), get_fr(1), get_fr(1), get_fr(1), get_fr(1)]));
      set_alignItems($receiver_3, Align.center);
      padding($receiver_3, get_px(0), get_px(32));
      set_minHeight($receiver_3, get_px(48));
      set_backgroundColor($receiver_3, Color.Companion.gray);
      $receiver_0_0.key = item.hashCode().toString();
      var $receiver_0_1 = RDOMBuilder.Companion.invoke_f6ihu2$(span$lambda(null));
      $receiver_0_1.unaryPlus_pdl1vz$(item.name);
      $receiver_0_0.child_30b5ua$($receiver_0_1.create());
      var $receiver_0_2 = RDOMBuilder.Companion.invoke_f6ihu2$(span$lambda(null));
      $receiver_0_2.unaryPlus_pdl1vz$(item.surname);
      $receiver_0_0.child_30b5ua$($receiver_0_2.create());
      var $receiver_0_3 = RDOMBuilder.Companion.invoke_f6ihu2$(span$lambda(null));
      $receiver_0_3.unaryPlus_pdl1vz$(item.patronymic);
      $receiver_0_0.child_30b5ua$($receiver_0_3.create());
      var $receiver_0_4 = RDOMBuilder.Companion.invoke_f6ihu2$(span$lambda(null));
      $receiver_0_4.unaryPlus_pdl1vz$(item.email);
      $receiver_0_0.child_30b5ua$($receiver_0_4.create());
      var $receiver_0_5 = RDOMBuilder.Companion.invoke_f6ihu2$(span$lambda(null));
      $receiver_0_5.unaryPlus_pdl1vz$(item.login);
      $receiver_0_0.child_30b5ua$($receiver_0_5.create());
      var $receiver_0_6 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledButton$lambda_0(null, null, null));
      var $receiver_4 = $receiver_0_6.css;
      set_display($receiver_4, Display.flex);
      set_justifyContent($receiver_4, JustifyContent.center);
      set_alignItems($receiver_4, Align.center);
      set_onClickFunction($receiver_0_6.attrs, UsersList$lambda$lambda$lambda$lambda$lambda$lambda$lambda(props, item));
      $receiver_0_6.unaryPlus_pdl1vz$('\u0423\u0434\u0430\u043B\u0438\u0442\u044C');
      $receiver_0_0.child_30b5ua$($receiver_0_6.create());
      $receiver_0.child_30b5ua$($receiver_0_0.create());
      tmp$_1.call(destination, Unit);
    }
    $receiver.child_30b5ua$($receiver_0.create());
    return Unit;
  }
  var UsersList;
  function h1$lambda(closure$classes) {
    return function (it) {
      return new H1_init(attributesMapOf_1('class', closure$classes), it);
    };
  }
  function button$lambda_0(closure$formEncType, closure$formMethod, closure$type, closure$classes) {
    return function (it) {
      return new BUTTON_init_0(attributesMapOf_0(['formenctype', closure$formEncType != null ? enumEncode_0(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode_0(closure$formMethod) : null, 'type', closure$type != null ? enumEncode_0(closure$type) : null, 'class', closure$classes]), it);
    };
  }
  function styledHeader$lambda(it) {
    return new HEADER_init(html.emptyMap, it);
  }
  function div$lambda_0(closure$classes) {
    return function (it) {
      return new DIV_init_0(attributesMapOf_1('class', closure$classes), it);
    };
  }
  function UserItem(patronymic, name, surname, email, login) {
    this.patronymic = patronymic;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.login = login;
  }
  UserItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserItem',
    interfaces: []
  };
  UserItem.prototype.component1 = function () {
    return this.patronymic;
  };
  UserItem.prototype.component2 = function () {
    return this.name;
  };
  UserItem.prototype.component3 = function () {
    return this.surname;
  };
  UserItem.prototype.component4 = function () {
    return this.email;
  };
  UserItem.prototype.component5 = function () {
    return this.login;
  };
  UserItem.prototype.copy_x0a6t6$ = function (patronymic, name, surname, email, login) {
    return new UserItem(patronymic === void 0 ? this.patronymic : patronymic, name === void 0 ? this.name : name, surname === void 0 ? this.surname : surname, email === void 0 ? this.email : email, login === void 0 ? this.login : login);
  };
  UserItem.prototype.toString = function () {
    return 'UserItem(patronymic=' + Kotlin.toString(this.patronymic) + (', name=' + Kotlin.toString(this.name)) + (', surname=' + Kotlin.toString(this.surname)) + (', email=' + Kotlin.toString(this.email)) + (', login=' + Kotlin.toString(this.login)) + ')';
  };
  UserItem.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.patronymic) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.surname) | 0;
    result = result * 31 + Kotlin.hashCode(this.email) | 0;
    result = result * 31 + Kotlin.hashCode(this.login) | 0;
    return result;
  };
  UserItem.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.patronymic, other.patronymic) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.surname, other.surname) && Kotlin.equals(this.email, other.email) && Kotlin.equals(this.login, other.login)))));
  };
  function app$lambda$lambda(closure$setUserList, closure$userList) {
    return function (user) {
      var tmp$;
      var $receiver = closure$userList;
      var destination = ArrayList_init_0();
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (element.hashCode() !== user.hashCode())
          destination.add_11rb$(element);
      }
      closure$setUserList(Kotlin.isType(tmp$ = destination, MutableList) ? tmp$ : throwCCE());
      return Unit;
    };
  }
  function app$lambda$lambda_0(closure$userList, closure$setUserList) {
    return function (user) {
      var newArr = toMutableList(closure$userList);
      newArr.add_11rb$(user);
      closure$setUserList(newArr);
      return Unit;
    };
  }
  function app$lambda$lambda$lambda$lambda$lambda$lambda(closure$setIsOpenModal) {
    return function (it) {
      closure$setIsOpenModal(true);
      return Unit;
    };
  }
  function app$lambda$lambda$lambda$lambda(closure$userList, closure$deleteUser) {
    return function ($receiver) {
      $receiver.userItems = closure$userList;
      $receiver.delete = closure$deleteUser;
      return Unit;
    };
  }
  function app$lambda$lambda$lambda(closure$userList, closure$deleteUser) {
    return function ($receiver) {
      $receiver.attrs_37755u$(app$lambda$lambda$lambda$lambda(closure$userList, closure$deleteUser));
      return Unit;
    };
  }
  function app$lambda$lambda$lambda$lambda_0(closure$addUser) {
    return function ($receiver) {
      $receiver.add = closure$addUser;
      return Unit;
    };
  }
  function app$lambda$lambda$lambda_0(closure$addUser) {
    return function ($receiver) {
      $receiver.attrs_37755u$(app$lambda$lambda$lambda$lambda_0(closure$addUser));
      return Unit;
    };
  }
  function app$lambda($receiver, it) {
    var tmp$ = useState(mutableListOf([new UserItem('\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440', '\u0418\u0432\u0430\u043D\u043E\u0432', '\u0418\u0432\u0430\u043D\u043E\u0432\u0438\u0447', 'email', 'loginnnn'), new UserItem('\u0418\u0432\u0430\u043D', '\u0418\u0432\u0430\u043D\u043E\u0432', '\u0418\u0432\u0430\u043D\u043E\u0432\u0438\u0447', 'email', 'login')]));
    var userList = tmp$[0];
    var setUserList = tmp$[1];
    var tmp$_0 = useState(false);
    var isOpenModal = tmp$_0[0];
    var setIsOpenModal = tmp$_0[1];
    var deleteUser = app$lambda$lambda(setUserList, userList);
    var addUser = app$lambda$lambda_0(userList, setUserList);
    var $receiver_0 = RDOMBuilder.Companion.invoke_f6ihu2$(div$lambda_0(null));
    var $receiver_0_0 = StyledDOMBuilder.Companion.invoke_f6ihu2$(styledHeader$lambda);
    var $receiver_1 = $receiver_0_0.css;
    set_display($receiver_1, Display.flex);
    set_justifyContent($receiver_1, JustifyContent.spaceBetween);
    set_alignItems($receiver_1, Align.center);
    var $receiver_0_1 = RDOMBuilder.Companion.invoke_f6ihu2$(h1$lambda(null));
    $receiver_0_1.unaryPlus_pdl1vz$('\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438');
    $receiver_0_0.child_30b5ua$($receiver_0_1.create());
    var $receiver_0_2 = RDOMBuilder.Companion.invoke_f6ihu2$(button$lambda_0(null, null, null, null));
    $receiver_0_2.unaryPlus_pdl1vz$('+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C');
    set_onClickFunction($receiver_0_2.attrs, app$lambda$lambda$lambda$lambda$lambda$lambda(setIsOpenModal));
    $receiver_0_0.child_30b5ua$($receiver_0_2.create());
    $receiver_0.child_30b5ua$($receiver_0_0.create());
    $receiver_0.child_1mw94g$(UsersList, void 0, app$lambda$lambda$lambda(userList, deleteUser));
    if (isOpenModal)
      $receiver_0.child_1mw94g$(ModalWindow, void 0, app$lambda$lambda$lambda_0(addUser));
    $receiver.child_30b5ua$($receiver_0.create());
    return Unit;
  }
  var app;
  _.Type = Type;
  $$importsForInline$$['kotlin-styled'] = $module$kotlin_styled;
  Object.defineProperty(_, 'Button', {
    get: function () {
      return Button;
    }
  });
  _.main = main;
  $$importsForInline$$['kotlin-react-dom'] = $module$kotlin_react_dom;
  Object.defineProperty(_, 'Input', {
    get: function () {
      return Input;
    }
  });
  _.FormControl = FormControl;
  Object.defineProperty(_, 'formControlsCollection', {
    get: function () {
      return formControlsCollection;
    }
  });
  $$importsForInline$$['kotlin-react'] = $module$kotlin_react;
  Object.defineProperty(_, 'ModalWindow', {
    get: function () {
      return ModalWindow;
    }
  });
  Object.defineProperty(_, 'UsersList', {
    get: function () {
      return UsersList;
    }
  });
  _.UserItem = UserItem;
  Object.defineProperty(_, 'app', {
    get: function () {
      return app;
    }
  });
  Button = fc(Button$lambda);
  Input = fc(Input$lambda);
  formControlsCollection = listOf([new FormControl('\u0424\u0430\u043C\u0438\u043B\u0438\u044F', '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0430\u043C\u0438\u043B\u0438\u044E', 'surname'), new FormControl('\u0418\u043C\u044F', '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F', 'name'), new FormControl('\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E', '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0442\u0447\u0435\u0441\u0442\u0432\u043E', 'patronymic')]);
  ModalWindow = fc(ModalWindow$lambda);
  UsersList = fc(UsersList$lambda);
  app = fc(app$lambda);
  main();
  Kotlin.defineModule('kotlin-react-practice', _);
  return _;
}));

//# sourceMappingURL=kotlin-react-practice.js.map
