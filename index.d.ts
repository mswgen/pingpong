declare module 'pingpong-builder' {
    export class Ai {
        constructor(){}
        get(id: string, token: string, sessionid: string, query: string): Promise<Array<string>>;
        resolve_id(url: string): string;
    }
}