function ViewModel() {
    var self = this;

    self.firstName = ko.observable('Pedro');
    self.count = ko.observable(0);

    self.increase = function () {
        var currentVal = self.count();
        self.count(currentVal + 1);
    };

    self.decrease = function () {
        var currentVal = self.count();
        if (currentVal > 0) {
            self.count(currentVal - 1);
        }
    };

    self.dogStatus = ko.computed(function () {
        if (self.count() > 10) return 'Excited';
        if (self.count() > 0) return 'Exhaust';

        return 
    });
}

ko.applyBindings(ViewModel);
