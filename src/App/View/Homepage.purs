module App.View.Homepage where

import Text.Smolder.HTML

import App.Events (Event)
import App.State (State)
import Control.Bind (discard)
import Data.Function (($))
import Pux.DOM.HTML (HTML)
import Text.Smolder.HTML.Attributes (action, id, className, method, name, placeholder, src, target, type', value, href)
import Text.Smolder.Markup ((!), text)

view :: State -> HTML Event
view _ =
  section ! id "homepage" $ do
    header ! id "top-header" $ do
      div ! id "inner-header" $ do

        h2 $ text "Vancouver's top"
        h1 ! id "fp-header" $ text "functional programming"
        h2 ! id "instructors"
           $ text "instructors"
        h3 $ text "Elixir • Phoenix • Elm • Clojure • React • Lodash • techniques • more"

      span ! id "continue"
           $ text "▼"

    section ! id "marketing" $ do
      section ! id "intensives" $ do
        div ! className "img-block"
            $ text ""

        div ! className "content-block" $ do
          h1 $ text "Intensive Hands-On Workshops and Deep Dives"
          p  $ text ""

      section ! className "full" $ do
        h1 $ text "Passionate, Award Winning Instructors"
        -- p  $ text "We teach because we love tech"

      section $ do
        div ! className "content-block block-right" $ do
          h1 $ text "Learn and adpot the absolute best, pragmatic tools available"
          p $ text "Moving to a new paradeigm should be fun, not painful. "

        div ! className "img-block block-right"
            $ text ""

      section ! className "full" $ do
        h1 $ do
          text "We"
          span ! className "red"
               $ text " ♥ "
          text "FP"

      section ! id "bar" $ do
        div ! className "half-block" $ do
          h2 ! className "content center" $ do
            text       "\"We believe that "
            em $ text  "functional programming is the future, "
            text       "and it's not hard to see why. Modern frameworks like "
            a ! href   "http://www.phoenixframework.org/"
              ! target "_blank"
              $ text   "Phoenix"
            text       "are built for web scale, realtime interactions, speed up development, and are easy to extend. What's not to love?\""

        div ! className "half-block" $ do
          h2  $ text "...and we teach because we love tech"
          h3 $ text "(Like... a lot)"
          text """
            Yes, we're "those" people.
            We founded the Vancouver Functional Programmers and Vancouver Erlang & Elixir meetups.
            Our pasionate instructors curate new and emerging technologies
            as they become available to ensure that we have the most up to date
            material and references
          """

          h3 ! id "foo" $ do
            a ! href "bo" -- #> Contact
              $ text "Let's build something awesome together"

    -- Move to OSS section
    -- p $ text "We're proud to have released some of the top libraries, including:"

    -- -- break into its own page
    -- -- link on main page: Learn with us
    --   section ! id "contact-form" $ do
    --     h1 $ text "We’d love to work with you."

    --     form ! method "POST"
    --          ! action "http://formspree.io/beep@robotoverlord.io" $ do

    --       input ! type' "email"
    --             ! name "email"
    --             ! placeholder "Your email"

    --       -- should have a label
    --       textarea ! name "message"
    --                ! placeholder "Your message"
    --                $ text ""

    --       button ! type' "submit"
    --              $ text "Submit"

    --     h1 $ text "Stay up to date"
    --     h2 $ text "Updates, offers, tips, and more"

    --     form ! method "POST"
    --          ! action "https://goodbits.io/e/556cc53a-be05-41d2-9be0-eafda4340f47"
    --          ! target "_blank" $ do

    --       input ! type' "text"
    --             ! name  "first_name"
    --             ! placeholder "First Name"

    --       input ! type' "text"
    --             ! name  "last_name"
    --             ! placeholder "Last Name"

    --       input ! type' "text"
    --             ! name  "email"
    --             ! placeholder "Email"

    --       input ! type' "submit"
    --             ! value "Subscribe"

      --   section do
      --     h1 $ text "Stay ahead of the curve"
      --     p  $ text """
      --       It's well known that tech is a fast moving field
      --     """

      --   section do
      --     h1 $ text "Intensive Hands-On Workshops and Deep Dives"
      --     p  $ text ""

      --   section do
      --     h1 $ text "Passionate, Award Winning Instructors"
      --     p  $ text "We teach because we love tech"

      --   section do
      --     h1 $ text "Training"
      --     p  $ text "We offer many different three main training modalities: class, on-site, and retreat"

  -- -- navigate :: Eventable (Event -> Event) Event
  -- --          => Attributable Event
  -- --          => Event
  -- --          -> Route
  -- --          -> Event
  -- navigate htmlElement route =
  --   htmlElement
  --     !  href (fromRoute route)
  --     #! onClick (Navigate $ fromRoute route)

  -- infixl 4 navigate as #>
