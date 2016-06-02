import * as PiStation from "../../node_modules/pistation-definitions/PiStation.ts";
import {Connector} from "../../app/connector";

export class Dummy extends Connector {
    constructor(){
        super('Dummy');
    }

    myConnectorFunction(){
        console.log(`Called Dummy Connector function`);

        return true;
    }
}