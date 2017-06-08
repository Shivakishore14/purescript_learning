// Generated by psc-bundle 0.11.4
var PS = {};
(function(exports) {
    "use strict";

  exports.log = function (s) {
    return function () {
      console.log(s);
      return {};
    };
  };
})(PS["Control.Monad.Eff.Console"] = PS["Control.Monad.Eff.Console"] || {});
(function(exports) {
  // Generated by purs version 0.11.4
  "use strict";
  var $foreign = PS["Control.Monad.Eff.Console"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Data_Show = PS["Data.Show"];
  var Data_Unit = PS["Data.Unit"];
  exports["log"] = $foreign.log;
})(PS["Control.Monad.Eff.Console"] = PS["Control.Monad.Eff.Console"] || {});
(function(exports) {
  // Generated by purs version 0.11.4
  "use strict";
  var otherwise = true;
  exports["otherwise"] = otherwise;
})(PS["Data.Boolean"] = PS["Data.Boolean"] || {});
(function(exports) {
  // Generated by purs version 0.11.4
  "use strict";
  var Control_Alt = PS["Control.Alt"];
  var Control_Alternative = PS["Control.Alternative"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Category = PS["Control.Category"];
  var Control_Extend = PS["Control.Extend"];
  var Control_Monad = PS["Control.Monad"];
  var Control_MonadZero = PS["Control.MonadZero"];
  var Control_Plus = PS["Control.Plus"];
  var Data_Bounded = PS["Data.Bounded"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_Functor_Invariant = PS["Data.Functor.Invariant"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Show = PS["Data.Show"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];        
  var Nothing = (function () {
      function Nothing() {

      };
      Nothing.value = new Nothing();
      return Nothing;
  })();
  var Just = (function () {
      function Just(value0) {
          this.value0 = value0;
      };
      Just.create = function (value0) {
          return new Just(value0);
      };
      return Just;
  })();
  exports["Nothing"] = Nothing;
  exports["Just"] = Just;
})(PS["Data.Maybe"] = PS["Data.Maybe"] || {});
(function(exports) {
  // Generated by purs version 0.11.4
  "use strict";
  var Control_Alt = PS["Control.Alt"];
  var Control_Alternative = PS["Control.Alternative"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Category = PS["Control.Category"];
  var Control_Comonad = PS["Control.Comonad"];
  var Control_Extend = PS["Control.Extend"];
  var Control_Monad = PS["Control.Monad"];
  var Control_MonadPlus = PS["Control.MonadPlus"];
  var Control_MonadZero = PS["Control.MonadZero"];
  var Control_Plus = PS["Control.Plus"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Monoid = PS["Data.Monoid"];
  var Data_Newtype = PS["Data.Newtype"];
  var Data_NonEmpty = PS["Data.NonEmpty"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Show = PS["Data.Show"];
  var Data_Traversable = PS["Data.Traversable"];
  var Data_Tuple = PS["Data.Tuple"];
  var Data_Unfoldable = PS["Data.Unfoldable"];
  var Prelude = PS["Prelude"];        
  var Nil = (function () {
      function Nil() {

      };
      Nil.value = new Nil();
      return Nil;
  })();
  var Cons = (function () {
      function Cons(value0, value1) {
          this.value0 = value0;
          this.value1 = value1;
      };
      Cons.create = function (value0) {
          return function (value1) {
              return new Cons(value0, value1);
          };
      };
      return Cons;
  })();
  exports["Nil"] = Nil;
  exports["Cons"] = Cons;
})(PS["Data.List.Types"] = PS["Data.List.Types"] || {});
(function(exports) {
  // Generated by purs version 0.11.4
  "use strict";
  var Control_Alt = PS["Control.Alt"];
  var Control_Alternative = PS["Control.Alternative"];
  var Control_Applicative = PS["Control.Applicative"];
  var Control_Apply = PS["Control.Apply"];
  var Control_Bind = PS["Control.Bind"];
  var Control_Category = PS["Control.Category"];
  var Control_Lazy = PS["Control.Lazy"];
  var Control_Monad_Rec_Class = PS["Control.Monad.Rec.Class"];
  var Control_Semigroupoid = PS["Control.Semigroupoid"];
  var Data_Bifunctor = PS["Data.Bifunctor"];
  var Data_Boolean = PS["Data.Boolean"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Foldable = PS["Data.Foldable"];
  var Data_Function = PS["Data.Function"];
  var Data_Functor = PS["Data.Functor"];
  var Data_HeytingAlgebra = PS["Data.HeytingAlgebra"];
  var Data_List_Types = PS["Data.List.Types"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Newtype = PS["Data.Newtype"];
  var Data_NonEmpty = PS["Data.NonEmpty"];
  var Data_Ord = PS["Data.Ord"];
  var Data_Ordering = PS["Data.Ordering"];
  var Data_Ring = PS["Data.Ring"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Data_Semiring = PS["Data.Semiring"];
  var Data_Show = PS["Data.Show"];
  var Data_Traversable = PS["Data.Traversable"];
  var Data_Tuple = PS["Data.Tuple"];
  var Data_Unfoldable = PS["Data.Unfoldable"];
  var Data_Unit = PS["Data.Unit"];
  var Prelude = PS["Prelude"];
  var reverse = (function () {
      var go = function (__copy_acc) {
          return function (__copy_v) {
              var __tco_acc = __copy_acc;
              var __tco_done = false;
              var __tco_result;
              function __tco_loop(acc, v) {
                  if (v instanceof Data_List_Types.Nil) {
                      __tco_done = true;
                      return acc;
                  };
                  if (v instanceof Data_List_Types.Cons) {
                      __tco_acc = new Data_List_Types.Cons(v.value0, acc);
                      __copy_v = v.value1;
                      return;
                  };
                  throw new Error("Failed pattern match at Data.List line 363, column 11 - line 366, column 36: " + [ acc.constructor.name, v.constructor.name ]);
              };
              while (!__tco_done) {
                  __tco_result = __tco_loop(__tco_acc, __copy_v);
              };
              return __tco_result;
          };
      };
      return go(Data_List_Types.Nil.value);
  })();
  var head = function (v) {
      if (v instanceof Data_List_Types.Nil) {
          return Data_Maybe.Nothing.value;
      };
      if (v instanceof Data_List_Types.Cons) {
          return new Data_Maybe.Just(v.value0);
      };
      throw new Error("Failed pattern match at Data.List line 228, column 1 - line 228, column 19: " + [ v.constructor.name ]);
  };
  var filter = function (p) {
      var go = function (__copy_acc) {
          return function (__copy_v) {
              var __tco_acc = __copy_acc;
              var __tco_done = false;
              var __tco_result;
              function __tco_loop(acc, v) {
                  if (v instanceof Data_List_Types.Nil) {
                      __tco_done = true;
                      return reverse(acc);
                  };
                  if (v instanceof Data_List_Types.Cons) {
                      if (p(v.value0)) {
                          __tco_acc = new Data_List_Types.Cons(v.value0, acc);
                          __copy_v = v.value1;
                          return;
                      };
                      if (Data_Boolean.otherwise) {
                          __tco_acc = acc;
                          __copy_v = v.value1;
                          return;
                      };
                  };
                  throw new Error("Failed pattern match at Data.List line 385, column 12 - line 390, column 28: " + [ acc.constructor.name, v.constructor.name ]);
              };
              while (!__tco_done) {
                  __tco_result = __tco_loop(__tco_acc, __copy_v);
              };
              return __tco_result;
          };
      };
      return go(Data_List_Types.Nil.value);
  };
  exports["filter"] = filter;
  exports["head"] = head;
  exports["reverse"] = reverse;
})(PS["Data.List"] = PS["Data.List"] || {});
(function(exports) {
  // Generated by purs version 0.11.4
  "use strict";
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  var Control_Monad_Eff_Console = PS["Control.Monad.Eff.Console"];
  var Data_Eq = PS["Data.Eq"];
  var Data_Function = PS["Data.Function"];
  var Data_List = PS["Data.List"];
  var Data_List_Types = PS["Data.List.Types"];
  var Data_Maybe = PS["Data.Maybe"];
  var Data_Semigroup = PS["Data.Semigroup"];
  var Prelude = PS["Prelude"];        
  var showAddress = function (address) {
      return address.street + (", " + (address.city + (", " + address.state)));
  };
  var showEntry = function (entry) {
      return entry.lastName + (", " + (entry.firstName + (", " + showAddress(entry.address))));
  };
  var main = Control_Monad_Eff_Console.log("s");
  var insertEntry = function (entry) {
      return function (book) {
          return new Data_List_Types.Cons(entry, book);
      };
  };
  var findEntry = function (fname) {
      return function (book) {
          var filterEntry = function (entry) {
              return entry.firstName === fname;
          };
          return Data_List.head(Data_List.filter(filterEntry)(book));
      };
  };
  exports["findEntry"] = findEntry;
  exports["insertEntry"] = insertEntry;
  exports["main"] = main;
  exports["showAddress"] = showAddress;
  exports["showEntry"] = showEntry;
})(PS["Main"] = PS["Main"] || {});
PS["Main"].main();