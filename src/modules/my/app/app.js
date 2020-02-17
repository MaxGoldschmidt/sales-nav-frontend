import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    @track opportunities;
    @track error;

    connectedCallback() {
        this.getOpportunities();
    }

    async getOpportunities() {
        try {
            const requestUrl = 'http://localhost:3000/opportunities/';
            const opportunities = await fetch(requestUrl);
            const parsedOpportunities = await opportunities.json();
            console.log(JSON.stringify(parsedOpportunities));
            this.opportunities = parsedOpportunities;
        } catch (error) {
          this.error = error;
        }
    }
}
