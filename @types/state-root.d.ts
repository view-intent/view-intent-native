import { IStateRoot } from "src/types";
export declare namespace StateRoot {
    function registerStateRoot(stateName: string, stateRootInstance: any): void;
    function applyStateRoot(stateRoot: IStateRoot): void;
    function applyStatesRoots(statesRoots: IStateRoot[]): void;
}
export default StateRoot;
