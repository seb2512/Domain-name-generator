var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];

for (var i = 0; i < 2; i++) {
  for (var j = 0; j < 2; j++) {
    for (var k = 0; k < 2; k++) {
      console.log(pronoun[i] + adj[j] + noun[k] + ".com");
    }
  }
}
