const api = foundry.applications.api;
const sheets = foundry.applications.sheets;

export default class conquestandcalamityCharacterSheet extends api.HandlebarsApplicationMixin(sheets.ActorSheetV2) {
    sheetContext = {};

    static DEFAULT_OPTIONS = {
        tag: "form",
        classes: ["conquestandcalamity", "sheet", "characterSheet"],
        actions: {

        },
        form:{
            submitOnChange: true,
            closeOnSubmit: false
        },
        position: {
            width: 650
        }
    }

    static PARTS = {
        header: { template: "systems/conquestandcalamity/templates/sheets/character/header.hbs"},
        body: { template: "systems/conquestandcalamity/templates/sheets/character/body.hbs"}
    }

    get title() {
        return this.actor.name;
    }

    /** @override */
    _configureRenderOptions(options){
        super._configureRenderOptions(options);
        
        if(this.document.limited) options.parts = ["header", "body"]
        else options.parts = ["header", "body"];
    }

 /** @override */
    async _prepareContext(options) {

        // #################################################################################################
        // #################################################################################################
        // ##                                                                                             ##
        // ## Creates Basic Datamodel, which is used to fill the HTML together with Handelbars with Data. ##
        // ##                                                                                             ##
        // #################################################################################################
        // #################################################################################################
        
        const baseData = await super._prepareContext();
        
        let context = {
    
            // Set General Values
            owner: baseData.document.isOwner,
            editable: baseData.editable,
            actor: baseData.document,
            system: baseData.document.system,
            items: baseData.document.items,
            config: CONFIG.NETHER,
            isGM: baseData.user.isGM,
            effects: baseData.document.effects
        };

        // context = this.calculateExperiance(context);
        
        this.sheetContext = context;

        return context;
    }

        /** @override */
    _onRender(context, options) {

        const tabs = new foundry.applications.ux.Tabs({navSelector: ".tabs", contentSelector: ".content", initial: "tab1"});
        tabs.bind(this.element);

        const tabs2 = new foundry.applications.ux.Tabs({navSelector: ".tabs2", contentSelector: ".content2", initial: "tab2-1"});
        tabs2.bind(this.element);
    }
}