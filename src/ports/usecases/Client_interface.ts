export default interface ClientInterface {
    name: String;
    messages: String[];

    update(message: String) : any;
    count(message: String): Number;
};