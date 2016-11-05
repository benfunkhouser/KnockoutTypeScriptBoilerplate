import * as ko from "knockout";

class HelloViewModel {
    language: KnockoutObservable<string>
    framework: KnockoutObservable<string>    

    constructor(language: string, framework: string) {
        this.init(language, framework);
        // This works too
        // this.language = ko.observable(language);
        // this.framework = ko.observable(framework);        
    }

    // init "is of type" and returns a void (nothing)
    // this is one way of defining the types of a function
    init: (s1: string, s2: string) => void
        = function (language, framework)
        {
            this.language = ko.observable(language);
            this.framework = ko.observable(framework);
        }

    // This is also a way of defining types in a function
    initAlternative (language: string, framework: string)
    {
        this.language = ko.observable(language);
        this.framework = ko.observable(framework);
    }
}

ko.applyBindings(new HelloViewModel("TypeScript", "Knockout");