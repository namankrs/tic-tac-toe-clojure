// Compiled by ClojureScript 1.10.520 {}
goog.provide('tic_tac_toe.test_runner');
goog.require('cljs.core');
goog.require('tic_tac_toe.core_test');
goog.require('figwheel.main.testing');
tic_tac_toe.test_runner._main = (function tic_tac_toe$test_runner$_main(var_args){
var args__4736__auto__ = [];
var len__4730__auto___16035 = arguments.length;
var i__4731__auto___16036 = (0);
while(true){
if((i__4731__auto___16036 < len__4730__auto___16035)){
args__4736__auto__.push((arguments[i__4731__auto___16036]));

var G__16037 = (i__4731__auto___16036 + (1));
i__4731__auto___16036 = G__16037;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return tic_tac_toe.test_runner._main.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

tic_tac_toe.test_runner._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.main.testing.system_exit_on_fail.call(null);

var reporter__5757__auto___16038 = new cljs.core.Keyword(null,"reporter","reporter",-805360621).cljs$core$IFn$_invoke$arity$1(cljs.test.empty_env.call(null));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs-test-display.core","default","cljs-test-display.core/default",-853427213),null,new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),null], null), null).call(null,reporter__5757__auto___16038))){
} else {
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reporter__5757__auto___16038,new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)], null),((function (reporter__5757__auto___16038){
return (function (m__5758__auto__){
return cljs.core.reset_BANG_.call(null,figwheel.main.testing.test_result_data,m__5758__auto__);
});})(reporter__5757__auto___16038))
);
}

cljs.test.run_block.call(null,(function (){var env16033 = cljs.test.empty_env.call(null);
var summary16034 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env16033,summary16034,reporter__5757__auto___16038){
return (function (){
cljs.test.set_env_BANG_.call(null,env16033);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"tic-tac-toe.test-runner","tic-tac-toe.test-runner",-446189131,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__8801__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__8801__auto__,env16033,summary16034,reporter__5757__auto___16038){
return (function (){
if((env__8801__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__8801__auto__,env16033,summary16034,reporter__5757__auto___16038))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__8801__auto__,env16033,summary16034,reporter__5757__auto___16038){
return (function (){
if((env__8801__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__8801__auto__,env16033,summary16034,reporter__5757__auto___16038))
], null));
})());
});})(env16033,summary16034,reporter__5757__auto___16038))
,((function (env16033,summary16034,reporter__5757__auto___16038){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"tic-tac-toe.test-runner","tic-tac-toe.test-runner",-446189131,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env16033,summary16034,reporter__5757__auto___16038))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env16033,summary16034,reporter__5757__auto___16038){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary16034,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary16034),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env16033,summary16034,reporter__5757__auto___16038))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env16033,summary16034,reporter__5757__auto___16038){
return (function (){
cljs.test.set_env_BANG_.call(null,env16033);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary16034));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary16034),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env16033,summary16034,reporter__5757__auto___16038))
], null));
})());

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.main.async-result","wait","figwheel.main.async-result/wait",-1374826133),(5000)], null);
});

tic_tac_toe.test_runner._main.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
tic_tac_toe.test_runner._main.cljs$lang$applyTo = (function (seq16032){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16032));
});


//# sourceMappingURL=test_runner.js.map
