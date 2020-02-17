import { createElement } from 'lwc';
import App from 'my/App';

describe('my-app', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('displays title', () => {
        // Create element
        const element = createElement('my-app', {
            is: App
        });
        document.body.appendChild(element);

        // Verify displayed greeting
        const h1 = element.shadowRoot.querySelector('h1');
        expect(h1.textContent).toBe('Opportunities');
    });
});
