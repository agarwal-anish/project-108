function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9JQ-BJqAT/' , modelReady);
    }

    function modelReady(){
        classifier.classify(gotResults);
    }

    function gotResults(error, results){
        if (error){
            console.error(error);
        }else{
            console.log(results);
            random_number_r = Math.floor(Math.random()*255) + 1;
            random_number_g = Math.floor(Math.random()*255) + 1;
            random_number_b = Math.floor(Math.random()*255) + 1;
        
            document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
            document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100 ).toFixed(2) + " % ";
            document.getElementById("result_label").style.color ="rgb(" +_random_number_r+", " +_random_number_g+", " +_random_number_r+")"; 
        
            document.getElementById("result_confidence").style.color ="rgb(" +_random_number_r+", " +_random_number_g+", " +_random_number_r+")"; 
          img = document.getElementById('dog')
          img1 = document.getElementById('cat')
          img2 = document.getElementById('cow')
          img3 = document.getElementById('lion')
         
          if(results[0].label == "dog"){
              img.src = 'dog.jpg';
            }else if(results[0].label == "cat"){
              img1.src = 'cat.jpg';
            }else if(results[0].label == "background noise"){
                img2.src = 'cow.jpg';
             }else if(result[0].label =="lion") {
                img2.src = 'lion.jpg';
             }
        }
        }
    