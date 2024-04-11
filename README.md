# Overview
This project is a browser-based currency conversion calculator built for personal use.
It operates with a fictional currency that consists of copper, silver, and gold coins, each with their own conversion rates (10 copper = 1 silver, and 10 silver = 1 gold).

# How to Use
To use, enter amounts for gold, silver, and copper coins respectively under the "Your Coins" section. This is the initial set of money that will be operated on.
Then, enter values under the "To Add/Subtr." button. These numbers will be what is either added or subtracted to the money entered in the "Your Coins" section.

After that, Press either the "+" or "-" button to add or subtract the values respectively.

The results of the calculation will appear under the "Result:" section.
These results can be re-organized and re-displayed to prioritize/maximize conversion to gold, silver, or copper coins respectively with the "Convert results to:" buttons.

Lastly, after the calculation is done, the results can be instantly moved to the "Your Coins" section by pressing the "Transfer Results to 'Your Coins'" button.
This button will also empty the "To Add/Subtr." values.

# Edge Cases
Respective warnings will be given if either:
a) An input field read something other than a number, or
b) A calculation has a negative result.

Additionally, decimal values will automatically be rounded down to an integer value.
