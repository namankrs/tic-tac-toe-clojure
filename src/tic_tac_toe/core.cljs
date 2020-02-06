(ns ^:figwheel-hooks tic-tac-toe.core
  (:require
    [goog.dom :as gdom]
    [reagent.core :as reagent :refer [atom]]))

(defn get-grids [numbers]
  [:div.board (map (fn [el] [:div.grid el]) numbers)])
;; define your app data so that it doesn't get over-written on reload

(defn get-app-element []
  (gdom/getElement "app"))

(defn game []
  (get-grids (range 9)))

(defn mount [el]
  (reagent/render-component [game] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

(mount-app-element)

