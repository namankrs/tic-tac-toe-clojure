// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__8758__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8758 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8759__i = 0, G__8759__a = new Array(arguments.length -  0);
while (G__8759__i < G__8759__a.length) {G__8759__a[G__8759__i] = arguments[G__8759__i + 0]; ++G__8759__i;}
  args = new cljs.core.IndexedSeq(G__8759__a,0,null);
} 
return G__8758__delegate.call(this,args);};
G__8758.cljs$lang$maxFixedArity = 0;
G__8758.cljs$lang$applyTo = (function (arglist__8760){
var args = cljs.core.seq(arglist__8760);
return G__8758__delegate(args);
});
G__8758.cljs$core$IFn$_invoke$arity$variadic = G__8758__delegate;
return G__8758;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__8761__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8761 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8762__i = 0, G__8762__a = new Array(arguments.length -  0);
while (G__8762__i < G__8762__a.length) {G__8762__a[G__8762__i] = arguments[G__8762__i + 0]; ++G__8762__i;}
  args = new cljs.core.IndexedSeq(G__8762__a,0,null);
} 
return G__8761__delegate.call(this,args);};
G__8761.cljs$lang$maxFixedArity = 0;
G__8761.cljs$lang$applyTo = (function (arglist__8763){
var args = cljs.core.seq(arglist__8763);
return G__8761__delegate(args);
});
G__8761.cljs$core$IFn$_invoke$arity$variadic = G__8761__delegate;
return G__8761;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
