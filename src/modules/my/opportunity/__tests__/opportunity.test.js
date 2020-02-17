import { createElement } from 'lwc';
import Opportunity from 'my/Opportunity';

describe('my-opportunity', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('displays a card containing a heading and body', () => {
        // Create element
        const element = createElement('my-app', {
            is: Opportunity
        });
        element.representative = {
            name: 'Rep 6',
            email: 'rep6@salesforce.com',
            phone: '00000006'
        };
        element.company = {
            name: 'ALBERTSONS COS.',
            address: '250 PARKCENTER BOULEVARD',
            contact: {
                name: 'Daniel Jayne',
                email: 'JayneADaniel@jourrapide.com',
                phone: '(07) 4961 5112'
            }
        };
        document.body.appendChild(element);

        // Verify displayed greeting
        const cardHeading = element.shadowRoot.querySelector('.card h3');
        const cardBody = element.shadowRoot.querySelector('.card span');
        expect(cardHeading.textContent).toBe('Rep 6 | ALBERTSONS COS.');
        expect(cardBody.textContent).toBe(
            'The representative Rep 6 rep6@salesforce.com, 00000006 has to visit ALBERTSONS COS. at 250 PARKCENTER BOULEVARD and talk to Daniel Jayne, JayneADaniel@jourrapide.com, (07) 4961 5112'
        );
    });

    it('displays no card if no parameters are specified', () => {
        // Create element
        const element = createElement('my-app', {
            is: Opportunity
        });
        document.body.appendChild(element);

        // Verify displayed greeting
        const card = element.shadowRoot.querySelector('.card');
        expect(card).toBeNull();
    });
});
