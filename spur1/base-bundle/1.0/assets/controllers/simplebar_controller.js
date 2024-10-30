import { Controller } from '@hotwired/stimulus';
import SimpleBar from 'simplebar';
import ResizeObserver from 'resize-observer-polyfill';

export default class extends Controller {
    connect() {
        window.ResizeObserver = ResizeObserver;
        // Check if SimpleBar instance doesn't already exist before creating a new one
        if (!this.scrollbar) {
            this.scrollbar = new SimpleBar(this.element);  // Initialize SimpleBar on this.element
        }
    }

    disconnect() {
        // Check if SimpleBar instance exists, and destroy it
        if (this.scrollbar) {
            this.scrollbar.unMount();  // Clean up the instance
            this.scrollbar = null;     // Reset the scrollbar reference
        }
    }
}
