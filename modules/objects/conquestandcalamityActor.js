export default class conquestandcalamityActor extends Actor {
    prepareData() {
        super.prepareData();
    }

    prepareDerivedData(){
        const actorData = this.system;

        this._preparePlayerCharacterData(actorData);
    }

    _preparePlayerCharacterData(actorData){
        this._setCharacterValues(actorData);
    }

    async _setCharacterValues(data){

    }

    setNote(note){
        this.update({"system.note": note});
    }

    addLogEntry(entry){
        let log = this.system.log;
        log.push(entry);
        this.update({"system.log": log});
    }
}