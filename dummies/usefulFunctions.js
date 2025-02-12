function capitalizeName(name) {
    return name.split(" ") // Split the string into an array of words
               .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize first letter & lowercase rest
               .join(" "); // Join back into a string
}