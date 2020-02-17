import { LightningElement, api } from 'lwc';

export default class Opportunity extends LightningElement {
    @api representative;
    @api company;

    get showOpportunity() {
        return this.representative && this.company;
    }
}
