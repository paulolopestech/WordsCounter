import Client from "./Client_interface";

export default interface WordsSubjectInterface {
    clients: Client[];

    subscribe(c: Client) : any;
    unsubscribe(c: Client): any;
    publish(message: any) : any;
};