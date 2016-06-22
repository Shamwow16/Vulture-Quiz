(function() {
    angular
        .module("vultureFacts")
        .controller('listCtrl', ListController);

    ListController.$inject = ['quizMetrics', 'DataService'];

    function ListController(quizMetrics, DataService) {
        var vm = this;
        vm.quizMetrics = quizMetrics;
        vm.data = DataService.vulturesData;
        vm.activeVulture = {};
        vm.changeActiveVulture = changeActiveVulture;
        vm.activateQuiz = activateQuiz;
        vm.search = '';

        function changeActiveVulture(index) {
            vm.activeVulture = index;
        }

        function activateQuiz() {
            quizMetrics.changeState("quiz", true);
        }
    };



})();
