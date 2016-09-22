$(document).ready(function() {


  $("submit#butt").click(function(event) {
    var age = parseInt($('#age').val());
    var hairInput = $('#hair').val();
    var interestsInput = $('input:radio[name=interests]:checked').val();
    var genreInput = $('#genre').val();
    var locationInput = $('#location').val();
    var result;
    event.preventDefault();



    if (age) {
      if (age >= 50) {
        alert("Sorry, they're already dead.")
      } else if ( age >=18 ) {
        if (hairInput === "brown"){
          if (interestsInput === "charity") {
            if (genreInput === "comedy") {
              result = "Aziz Ansari";
            } else if (genreInput === "drama") {
              result = "George Clooney";
            } else if (genreInput === "nolan"){
              result = "Ben Affleck";
            }

          } else if (interestsInput === "dining") {
            if (genreInput === "comedy") {
              result = "Seth Rogan";
            } else if (genreInput === "drama") {
              result = "Brad Pitt";
            } else if (genreInput === "nolan"){
              result = "Matt Damon";
            }

          } else if (interestsInput === "adventure"){
            if (genreInput === "comedy") {
              result = "Johnny Depp";
            } else if (genreInput === "drama") {
              result = "Tom Hanks";
            } else if (genreInput === "nolan"){
              result = "Tom Cruise";
            }

          }

        } else if (hairInput === "black") {
          if (interestsInput === "charity") {
            if (genreInput === "comedy") {
                result = "Will Smith";
            } else if (genreInput === "drama") {
              result = "Harrison Ford";
            } else if (genreInput === "nolan"){
                result = "Morgan Freeman";
            }

          } else if (interestsInput === "dining") {
            if (genreInput === "comedy") {
                result = "Clint Eastwood";
            } else if (genreInput === "drama") {
              result = "Bruce Willis";
            } else if (genreInput === "nolan"){
              result = "Al Pacino";
            }

          } else if (interestsInput === "adventure"){
            if (genreInput === "comedy") {
              result = "Cameron Diaz";
            } else if (genreInput === "drama") {
              result = "Miley Cyrus";
            } else if (genreInput === "nolan"){
                result = "Meryl Streep";
            }

          }

        } else if (hairInput === "red"){
          if (interestsInput === "charity") {
            if (genreInput === "comedy") {
                result = "Iron Man";
            } else if (genreInput === "drama") {
              result = "Ant Man";
            } else if (genreInput === "nolan"){
              result = "Captain America";
            }

          } else if (interestsInput === "dining") {
            if (genreInput === "comedy") {
              result = "Wolverine";
            } else if (genreInput === "drama") {
              result = "Rogue";
            } else if (genreInput === "nolan"){
                result = "Thor";
            }

          } else if (interestsInput === "adventure"){
            if (genreInput === "comedy") {
              result = "Spider Man";
            } else if (genreInput === "drama") {
              result = "Super Man";
            } else if (genreInput === "nolan"){
              result = "Bat Man";
            }

          }
        }




      } else {
        alert("get you lost you PERV!")
    }

    } else {
      alert("Please enter your age!")
    }
    $("#result").text(result);
    $("#results").show();
  });




});
