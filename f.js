function openFullscreen() {
      var elem = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }
    }

    // బ్రౌజర్ భద్రతా కారణాల వల్ల,
    // సాధారణంగా ఏదైనా బటన్ క్లిక్ చేసినప్పుడు మాత్రమే ఫుల్ స్క్రీన్ అవుతుంది.
    // అయితే, ఈ పేజ్ లోడ్ అయిన వెంటనే ఫుల్ స్క్రీన్ అవ్వడానికి ప్రయత్నిద్దాం.

    window.onload = function() {
      openFullscreen();
    };
