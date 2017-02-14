// Playground

module PlaygroundCallbackOptionals {
    interface Fetcher {
        getObject(done: (data: any, elapsedTime: number) => void): void;
    }

    class FetcherClass implements Fetcher {
        getObject(done: (data: any, elapsedTime: number) => void) {
            console.log("does whatever");
        }
    }

    var something = new FetcherClass();
    //This is OK
    something.getObject((item) => {

    });
    //This is also OK so no need for optional in done callback (i.e elapsedTime doesn't need to be optional)
    something.getObject((item, elapsedTime) => {

    });
}

//BAD
module PlaygroundGenericsNoTypes {
    interface Named<T> {
        name: string;
    }

    class MyNamed<T> implements Named<T> {
        name: string = "something";
    }

    function findByName<T>(x: Named<T>): T {
        return undefined;
    }

    var x: MyNamed<String>;
    var y = findByName(x); //function findByName<{}>(x:Named<{}>):{}
}

//OK
module PlaygroundGenericsWithTypes {
    interface Named<T> {
        name: string;
        type: T;
    }

    class MyNamed<T> implements Named<T> {
        name: string = "something";
        type: T;
    }

    function findByName<T>(x: Named<T>): T {
        return undefined;
    }

    var x: MyNamed<String>;
    var y = findByName(x); //function findByName<String>(x:Named<String>):String
}

