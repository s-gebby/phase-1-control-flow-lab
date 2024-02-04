// This function, scuberGreetingForFeet, determines the appropriate greeting based on the distance of the ride.
// If the distance is less than or equal to 400 feet, it provides a free sample greeting.
// For distances between 400 and 2000 feet, it charges 20 dollars and provides a corresponding message.
// For distances over 2000 feet but not exceeding 2500 feet, it charges 30 dollars and provides a specific message.
// If the distance is over 2500 feet, it rejects the ride with a 'No can do.' message.
function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return "This one is on me!";
  } else if (distance > 400 && distance <= 2000) {
    return "That will be twenty bucks.";
  } else if (distance > 2000 && distance <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

// The ternaryCheckCity function checks if the provided city is 'NYC'.
// If the city is 'NYC', it returns 'Ok, sounds good.'; otherwise, it returns 'No go.'
function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

// The switchOnCharmFromTip function provides a response based on the generosity of the tip.
// If the tip is labeled as 'generous', it expresses gratitude with 'Thank you so much.'
// For a tip labeled 'not as generous', it responds with 'Thank you.'
// Any other case results in a 'Bye.' message.
function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}
