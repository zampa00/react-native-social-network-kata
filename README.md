# react-native-social-network-kata
This is an exercised aimed at learning React Native TDD

Inspired from https://github.com/sandromancuso/social_networking_kata, it has the same domain but the delivery changes, having an app frontend instead of a CLI.
Therefore, the 4 commands will be 3 different navigations (since reading and following are the same), with a main panel where you can input an username and 3 buttons which brings to the 3 panels.

Include an e2e test for each scenario.

## Scenarios
#### Posting
Alice can publish messages to a personal timeline from the "publish message" panel

> Alice -> I love the weather today
> Bob -> Damn! We lost!
> Bob -> Good game though.

### Opening a profile
Anyone can view Alice’s timeline from the profiles panel. It has a top search bar.

> Alice
> I love the weather today (5 minutes ago)
> Bob
> Good game though. (1 minute ago)
> Damn! We lost! (2 minutes ago)

### Following a profile
Charlie can subscribe to Alice’s and Bob’s timelines, and view an aggregated list of all subscriptions. Add a "follow" button to the profile panel.

### Wall
This panel aggregates all interactions from the profiles the user is following.
> Charlie - I'm in New York today! Anyone wants to have a coffee? (15 seconds ago)
> Bob - Good game though. (1 minute ago)
> Bob - Damn! We lost! (2 minutes ago)
> Alice - I love the weather today (5 minutes ago)
