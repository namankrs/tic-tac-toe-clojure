// Compiled by ClojureScript 1.10.520 {}
goog.provide('tic_tac_toe.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
tic_tac_toe.core.get_grids = (function tic_tac_toe$core$get_grids(numbers){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board","div.board",905832129),cljs.core.map.call(null,(function (el){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid","div.grid",736588158),el], null);
}),numbers)], null);
});
tic_tac_toe.core.get_app_element = (function tic_tac_toe$core$get_app_element(){
return goog.dom.getElement("app");
});
tic_tac_toe.core.game = (function tic_tac_toe$core$game(){
return tic_tac_toe.core.get_grids.call(null,cljs.core.range.call(null,(9)));
});
tic_tac_toe.core.mount = (function tic_tac_toe$core$mount(el){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.core.game], null),el);
});
tic_tac_toe.core.mount_app_element = (function tic_tac_toe$core$mount_app_element(){
var temp__5457__auto__ = tic_tac_toe.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return tic_tac_toe.core.mount.call(null,el);
} else {
return null;
}
});
tic_tac_toe.core.mount_app_element.call(null);

//# sourceMappingURL=core.js.map
