// Playground

module Playground {
    interface Fetcher {
        getObject(done: (data: any, elapsedTime: number) => void): void;
    }

    class FetcherClass implements Fetcher {
        getObject(done: (data: any, elapsedTime: number) => void) {
            console.log("does whatever");
        }
    }

    var something = new FetcherClass();
    something.getObject((item) => {

    });

    //Generics
    interface Named<T> {
        name: string;
        //type: T;
    }

    class MyNamed<T> implements Named<T> {
        name: string = "something";
        //type: T;
    }

    function findByName<T>(x: Named<T>): T {
        return undefined;
    }

    var x: MyNamed<String>;
    var y = findByName(x);
}

