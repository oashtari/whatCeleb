var celebrity = function(age, hairInput, interestsInput, genreInput) {
  if (age) {
    if (age >= 50) {
      alert("Sorry, they're already dead.")
    } else if ( age >=18 ) {
      if (hairInput === "brown"){
        if (interestsInput === "charity") {
          if (genreInput === "comedy") {
            return "Aziz Ansari";
          } else if (genreInput === "drama") {
            return "George Clooney";
          } else if (genreInput === "nolan"){
            return "Ben Affleck";
          }

        } else if (interestsInput === "dining") {
          if (genreInput === "comedy") {
            return "Seth Rogan";
          } else if (genreInput === "drama") {
            return "Brad Pitt";
          } else if (genreInput === "nolan"){
            return "Matt Damon";
          }

        } else if (interestsInput === "adventure"){
          if (genreInput === "comedy") {
            return "Johnny Depp";
          } else if (genreInput === "drama") {
            return "Tom Hanks";
          } else if (genreInput === "nolan"){
            return "Tom Cruise";
          }

        }

      } else if (hairInput === "black") {
        if (interestsInput === "charity") {
          if (genreInput === "comedy") {
              return "Will Smith";
          } else if (genreInput === "drama") {
            return "Harrison Ford";
          } else if (genreInput === "nolan"){
              return "Morgan Freeman";
          }

        } else if (interestsInput === "dining") {
          if (genreInput === "comedy") {
              return "Clint Eastwood";
          } else if (genreInput === "drama") {
            return "Bruce Willis";
          } else if (genreInput === "nolan"){
            return "Al Pacino";
          }

        } else if (interestsInput === "adventure"){
          if (genreInput === "comedy") {
            return "Cameron Diaz";
          } else if (genreInput === "drama") {
            return "Miley Cyrus";
          } else if (genreInput === "nolan"){
              return "Meryl Streep";
          }

        }

      } else if (hairInput === "red"){
        if (interestsInput === "charity") {
          if (genreInput === "comedy") {
              return "Iron Man";
          } else if (genreInput === "drama") {
            return "Ant Man";
          } else if (genreInput === "nolan"){
            return "Captain America";
          }

        } else if (interestsInput === "dining") {
          if (genreInput === "comedy") {
            return "Wolverine";
          } else if (genreInput === "drama") {
            return "Rogue";
          } else if (genreInput === "nolan"){
              return "Thor";
          }

        } else if (interestsInput === "adventure"){
          if (genreInput === "comedy") {
            return "Spider Man";
          } else if (genreInput === "drama") {
            return "Super Man";
          } else if (genreInput === "nolan"){
            return "Bat Man";
          }

        }
      }




    } else {
      alert("get you lost you PERV!")
  }

  } else {
    alert("Please enter your age!")
  }
}



$(document).ready(function() {


  $("submit#butt").click(function(event) {
    var age = parseInt($('#age').val());
    var hairInput = $('#hair').val();
    var interestsInput = $('input:radio[name=interests]:checked').val();
    var genreInput = $('#genre').val();
    var result = celebrity(age, hairInput, interestsInput, genreInput);
    event.preventDefault();




    $("#result").text(result);
    $("#results").show();
  });




});
