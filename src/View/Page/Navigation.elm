module View.Page.Navigation exposing (navigationPage, siteNav)

import Html exposing
  ( Html
  , nav
  , h1, p
  , ul, li, a
  , text
  )

import Html.Attributes exposing (href)
import Html.Events exposing (onClick)

import Router.Route exposing (Route(..))
import Signal exposing (Signal(..))

import View.Style.Class exposing (Class(..), class)
import View.Style.Id exposing (Id(..), id)

link : Route -> String -> Html Signal
link route string =
  li []
    [ a [ href "javascript://"
        , onClick <| NavigateTo route
        ]
        [ text string ]
    ]

siteNav : Html Signal
siteNav =
  nav [ class [ NavBar ]]
      [ ul [] [ link Home      "Home"
              , link Code      "Code"
              , link Design    "Design"
              , link About     "About"
              , link Contact   "Contact"
              , link Portfolio "Portfolio"
              ]
      ]

navigationPage = siteNav
