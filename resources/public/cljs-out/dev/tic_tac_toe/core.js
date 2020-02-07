// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('tic_tac_toe.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('reagent.core');
tic_tac_toe.core.X = "X";
tic_tac_toe.core.O = "O";
tic_tac_toe.core.empty_board = cljs.core.PersistentHashMap.fromArrays([(7),(1),(4),(6),(3),(2),(9),(5),(8)],[null,null,null,null,null,null,null,null,null]);
tic_tac_toe.core.winning_moves = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(3),null,(2),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(4),null,(6),null,(5),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(7),null,(9),null,(8),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(7),null,(1),null,(4),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(2),null,(5),null,(8),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(6),null,(3),null,(9),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(1),null,(9),null,(5),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(7),null,(3),null,(5),null], null), null)], null);
tic_tac_toe.core.board = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(tic_tac_toe.core.empty_board);
tic_tac_toe.core.current_move = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(tic_tac_toe.core.X);
tic_tac_toe.core.winner = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
tic_tac_toe.core.toggle_move = (function tic_tac_toe$core$toggle_move(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.core.current_move,(function (p1__10975_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__10975_SHARP_,tic_tac_toe.core.X)){
return tic_tac_toe.core.O;
} else {
return tic_tac_toe.core.X;
}
}));
});
tic_tac_toe.core.get_moves = (function tic_tac_toe$core$get_moves(symbol){
return cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__10976_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(symbol,cljs.core.second(p1__10976_SHARP_));
}),cljs.core.deref(tic_tac_toe.core.board)));
});
tic_tac_toe.core.check_winner = (function tic_tac_toe$core$check_winner(){
return cljs.core.reset_BANG_(tic_tac_toe.core.winner,(cljs.core.truth_(cljs.core.some((function (p1__10977_SHARP_){
return clojure.set.subset_QMARK_(p1__10977_SHARP_,cljs.core.set(tic_tac_toe.core.get_moves(tic_tac_toe.core.X)));
}),tic_tac_toe.core.winning_moves))?"X WON!":(cljs.core.truth_(cljs.core.some((function (p1__10978_SHARP_){
return clojure.set.subset_QMARK_(p1__10978_SHARP_,cljs.core.set(tic_tac_toe.core.get_moves(tic_tac_toe.core.O)));
}),tic_tac_toe.core.winning_moves))?"O WON!":((cljs.core.not_any_QMARK_(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.val,cljs.core.deref(tic_tac_toe.core.board))))?"Match Draw":null))));
});
tic_tac_toe.core.make_move = (function tic_tac_toe$core$make_move(event){
if((((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tic_tac_toe.core.board),(event.target.id | (0))) == null)) && ((cljs.core.deref(tic_tac_toe.core.winner) == null)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tic_tac_toe.core.board,(function (board){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(board,(event.target.id | (0)),cljs.core.deref(tic_tac_toe.core.current_move));
}));

tic_tac_toe.core.toggle_move();

return tic_tac_toe.core.check_winner();
} else {
return null;
}
});
tic_tac_toe.core.reset_game = (function tic_tac_toe$core$reset_game(event){
cljs.core.reset_BANG_(tic_tac_toe.core.board,tic_tac_toe.core.empty_board);

cljs.core.reset_BANG_(tic_tac_toe.core.winner,null);

return cljs.core.reset_BANG_(tic_tac_toe.core.current_move,tic_tac_toe.core.X);
});
tic_tac_toe.core.game = (function tic_tac_toe$core$game(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$title,"TIC - TAC - TOE"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$board,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (el){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$grid,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,cljs.core.first(el),cljs.core.cst$kw$on_DASH_click,tic_tac_toe.core.make_move,cljs.core.cst$kw$key,cljs.core.first(el)], null),cljs.core.second(el)], null);
}),cljs.core.deref(tic_tac_toe.core.board))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$current_DASH_player,["Current Player: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tic_tac_toe.core.current_move))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$reset,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,tic_tac_toe.core.reset_game], null),"RESET GAME"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$winner,cljs.core.deref(tic_tac_toe.core.winner)], null)], null);
});
tic_tac_toe.core.get_app_element = (function tic_tac_toe$core$get_app_element(){
return goog.dom.getElement("app");
});
tic_tac_toe.core.mount = (function tic_tac_toe$core$mount(el){
var G__10979 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tic_tac_toe.core.game], null);
var G__10980 = el;
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__10979,G__10980) : reagent.core.render_component.call(null,G__10979,G__10980));
});
tic_tac_toe.core.mount_app_element = (function tic_tac_toe$core$mount_app_element(){
var temp__5457__auto__ = tic_tac_toe.core.get_app_element();
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return tic_tac_toe.core.mount(el);
} else {
return null;
}
});
tic_tac_toe.core.mount_app_element();
