!function(){"use strict";try{new window.CustomEvent("bx-test-custom-event",{bubbles:!0,cancelable:!0})}catch(t){var e=function(e,t){(t=t||{}).bubbles=!!t.bubbles,t.cancelable=!!t.cancelable;var n=document.createEvent("CustomEvent");n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail);var c=n.preventDefault;return n.preventDefault=function(){Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}}),c.call(this)},n};e.prototype=window.Event.prototype,window.CustomEvent=e}}();