(function() {
    angular
        .module('vultureFacts')
        .factory('DataService', DataService);

    function DataService() {
        var dataObj = {
            vulturesData: vulturesData,
            quizQuestions: quizQuestions,
            correctAnswers: correctAnswers
        };

        return dataObj;
    };



    var vulturesData = [{
        type: "African White Backed Vulture",
        image_url: "http://www.buzzle.com/images/animal-kingdom/vultures/white-backed-vulture-on-tree.jpg",
        locations: "Africa (especially South Africa, Namibia and West Africa",
        size: "Up to 98cm and up to 15.8 lbs",
        lifespan: "Up to 17 years",
        diet: "Carnivore",
        description: "They have a bald head, strong bill, and they have a good wingspan. Apart from their white back, the rest of their body is dark."
    }, {
        type: "Andean condor",
        image_url: "http://www.buzzle.com/images/animal-kingdom/vultures/andean-condor-side-view.jpg",
        locations: "The Andes Mountains and adjacent Pacific coast",
        size: "300cm, up to 33lbs",
        lifespan: "Up to 70 years!",
        diet: "Carnivore",
        description: "They are one of the largest birds in the world which are able to fly. They have a bald head, and are usually black in color. A male can be easily distinguished from a female, due to the presence of a white collar on the males."
    }, {
        type: "Bearded Vulture",
        image_url: "http://www.buzzle.com/images/animal-kingdom/vultures/bearded-vulture-on-ground.jpg",
        locations: "Southern Europe, Tibet, and Southern Africa",
        size: "Up to 125cm, up to 30lbs",
        lifespan: "21 years",
        diet: "Carnivore",
        description: "They do not have a bald head, and this makes them different from most of the vultures. They are considered to be a part of the Old World Vulture family."
    }, {
        type: "Black Vulture",
        image_url: "http://www.buzzle.com/images/animal-kingdom/vultures/black-vulture-in-grass.jpg",
        locations: "Across American Continent (southeastern U.S to Uruguay)",
        size: "Over 60cm, 5lbs",
        lifespan: "10 Years",
        diet: "Carnivore",
        description: "They are also called the American Black Vulture. They are small vultures, as their wingspan is less when compared to other vultures. They are one of the New World Vultures."
    }, {
        type: "California Condor",
        image_url: "http://www.buzzle.com/images/animal-kingdom/vultures/california-condor-closeup.jpg",
        locations: "North America",
        size: "around 305cm, up to 29lbs",
        lifespan: "up to 60 years",
        diet: "Carnivore",
        description: "They are considered to be the largest bird species in northern America. Their population has reduced significantly over the years, making them one of the rarest avian species in the world. They are dark in color, but have white patches under their wings. They are from the New World Vulture family."
    }, {
        type: "Cape Vulture",
        image_url: "http://www.buzzle.com/images/animal-kingdom/vultures/cape-griffon-vulture-on-rock.jpg",
        locations: "South Africa, Mozambique, Botswana",
        size: "115cm, up to 25lbs",
        lifespan: "Around 25 years",
        diet: "Carnivore",
        description: "They are also called Cape Griffon, or Kolbe's Vulture. They are found only in southern Africa. They are dark brown in color. According to the IUCN, they are 'vulnerable', and need to be protected."
    }, {
        type: "King Vulture",
        image_url: "http://www.buzzle.com/images/animal-kingdom/vultures/king-vulture-on-tree.jpg",
        locations: "Central and South America",
        size: "up to 80cm, 10lbs",
        lifespan: "30 years",
        diet: "Omnivore",
        description: "When you see this vulture from the Old World Vulture family, you will know why they are called 'King Vultures'. They are very attractive. They are white in color , with traces of black (or gray)."
    }, {
        type: "Egyptian Vulture",
        image_url: "http://www.buzzle.com/images/animal-kingdom/vultures/egyptian-vulture-closeup.jpg",
        locations: "North Africa, India, Southwestern Europe",
        size: "70cm in length, Up to 4.4lbs",
        lifespan: "35 years",
        diet: "Carnivore",
        description: "They are small, and have white plumage. They are also called Pharaoh's Chicken, or White Scavenger Vulture. This bird belongs to the Old World Vulture family."
    }];

    var correctAnswers = [2, 3, 1, 2, 0, 1, 0, 2, 2, 0];

    var quizQuestions = [{
        type: "text",
        text: "How much can an Andean condor weigh?",
        possibilities: [{
            answer: "Up to 0.5lbs"
        }, {
            answer: "Up to 15lbs"
        }, {
            answer: "Up to 33lbs"
        }, {
            answer: "Up to 55lbs"
        }],
        selected: null,
        correct: null
    }, {
        type: "text",
        text: "What is the typical lifespan of a King Vulture?",
        possibilities: [{
            answer: "150 years"
        }, {
            answer: "10 years"
        }, {
            answer: "80 years"
        }, {
            answer: "30 years"
        }],
        selected: null,
        correct: null
    }, {
        type: "image",
        text: "Which of these is the Cape Vulture?",
        possibilities: [{
            answer: "http://www.buzzle.com/images/animal-kingdom/vultures/king-vulture-on-tree.jpg"
        }, {
            answer: "http://www.buzzle.com/images/animal-kingdom/vultures/cape-griffon-vulture-on-rock.jpg"
        }, {
            answer: "http://www.buzzle.com/images/animal-kingdom/vultures/california-condor-closeup.jpg"
        }, {
            answer: "http://www.buzzle.com/images/animal-kingdom/vultures/black-vulture-in-grass.jpg"
        }],
        selected: null,
        correct: null
    }, {
        type: "image",
        text: "Which of these is the Egyptian Vulture?",
        possibilities: [{
            answer: "http://www.buzzle.com/images/animal-kingdom/vultures/black-vulture-in-grass.jpg"
        }, {
            answer: "http://www.buzzle.com/images/animal-kingdom/vultures/white-backed-vulture-on-tree.jpg"
        }, {
            answer: "http://www.buzzle.com/images/animal-kingdom/vultures/egyptian-vulture-closeup.jpg"
        }, {
            answer: "http://www.buzzle.com/images/animal-kingdom/vultures/california-condor-closeup.jpg"
        }],
        selected: null,
        correct: null
    }, {
        type: "text",
        text: "Where does the Black Vulture live?'",
        possibilities: [{
            answer: "Across American Continent (southeastern U.S to Uruguay)"
        }, {
            answer: "Mars"
        }, {
            answer: "North Africa, India, Southwestern Europe"
        }, {
            answer: "The Andes Mountains and adjacent Pacific coast"
        }],
        selected: null,
        correct: null
    }, {
        type: "text",
        text: "Which of these is a New World Vulture?",
        possibilities: [{
            answer: "Cape Vulture"
        }, {
            answer: "California Condor"
        }, {
            answer: "Egyptian Vulture"
        }, {
            answer: "King Vulture"
        }],
        selected: null,
        correct: null
    }, {
        type: "text",
        text: "What is the largest bird species in North America?",
        possibilities: [{
            answer: "California Condor"
        }, {
            answer: "Black Vulture"
        }, {
            answer: "African White Backed Vulture"
        }, {
            answer: "Bearded Vulture"
        }],
        selected: null,
        correct: null
    }, {
        type: "image",
        text: "Which of these is the Andean condor?",
        possibilities: [{
            answer: "http://www.buzzle.com/images/animal-kingdom/vultures/california-condor-closeup.jpg"
        }, {
            answer: "http://www.buzzle.com/images/animal-kingdom/vultures/king-vulture-on-tree.jpg"
        }, {
            answer: "http://www.buzzle.com/images/animal-kingdom/vultures/andean-condor-side-view.jpg"
        }, {
            answer: "http://www.buzzle.com/images/animal-kingdom/vultures/white-backed-vulture-on-tree.jpg"
        }],
        selected: null,
        correct: null
    }, {
        type: "text",
        text: "How Heavy can a Black Vulture be?",
        possibilities: [{
            answer: "15lbs"
        }, {
            answer: "35lbs"
        }, {
            answer: "5lbs"
        }, {
            answer: "50lbs"
        }],
        selected: null,
        correct: null
    }, {
        type: "text",
        text: "Which of these is also called Kolbe's Vulture?",
        possibilities: [{
            answer: "Cape Vulture"
        }, {
            answer: "King Vulture"
        }, {
            answer: "Black Vulture"
        }, {
            answer: "Andean Condor"
        }],
        selected: null,
        correct: null
    }]

})();
