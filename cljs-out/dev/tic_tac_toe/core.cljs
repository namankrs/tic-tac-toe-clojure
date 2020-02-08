(ns ^:figwheel-hooks tic-tac-toe.core
  (:require
    [goog.dom :as gdom]
    [reagent.core :as reagent :refer [atom]]))

(def X "X")
(def O "O")
(def empty-board {1 nil 2 nil 3 nil 4 nil 5 nil 6 nil 7 nil 8 nil 9 nil})
(def winning-moves [#{1 2 3} #{4 5 6} #{7 8 9} #{1 4 7} #{2 5 8} #{3 6 9} #{1 5 9} #{3 5 7}])

(def board (atom empty-board))
(def current-move (atom X))
(def winner (atom nil))

(defn toggle-move []
  (swap! current-move #(if (= % X) O X)))

(defn get-moves [symbol]
  (keys (filter #(= symbol (second %)) @board)))

(defn check-winner []
  (reset! winner (cond
                   (some #(clojure.set/subset? % (set (get-moves X))) winning-moves) "X WON!"
                   (some #(clojure.set/subset? % (set (get-moves O))) winning-moves) "O WON!"
                   (not-any? nil? (map val @board)) "Match Draw")))

(defn make-move [event]
  (when (and (nil? (get @board (int event.target.id))) (nil? @winner))
    (swap! board (fn [board] (assoc board (int event.target.id) @current-move)))
    (toggle-move)
    (check-winner)))

(defn reset-game [event]
  (do
    (reset! board empty-board)
    (reset! winner nil)
    (reset! current-move X)))

(defn game []
  [:div.game
   [:h1.title "TIC - TAC - TOE"]
   [:div.board (map (fn [el] [:div.grid {:id (first el) :on-click make-move :key (first el)} (second el)]) @board)]
   [:div.current-player (str "Current Player: " @current-move)]
   [:button.reset {:on-click reset-game} "RESET GAME"]
   [:div.winner @winner]])

;; define your app data so that it doesn't get over-written on reload

(defn get-app-element []
  (gdom/getElement "app"))

(defn mount [el]
  (reagent/render-component [game] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

(mount-app-element)

