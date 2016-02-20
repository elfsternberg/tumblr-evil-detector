// ==UserScript==
// @name         TumblrEvilDetector
// @namespace    http://elfsternberg.com
// @version      0.1
// @description  Detect if a Tumblr post has an embedded script in it
// @author       You
// @match        http://*.tumblr.com/post/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

if (!Element.prototype.matches) Element.prototype.matches = Element.prototype.msMatchesSelector;
if (!Element.prototype.closest) Element.prototype.closest = function(selector) {
    var el = this;
    while (el) {
        if (el.matches(selector)) {
            return el;
        }
        el = el.parentElement;
    }
};

function createFrag(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

function tumblr_reblog_warning() {
    var post = document.querySelectorAll('.post-wrapper script');
    var parent;
    var already;
    var panel;
    for(var i = 0; i < post.length; i++) {
        parent = post[i].closest('.post-wrapper');
        already = parent.querySelectorAll('.script-detected');
        if (already.length == 0) {
            parent.style.border = "4px solid cyan";
            panel = parent.querySelector('.post-footer')
            panel.insertBefore(
                createFrag('<div class="script-detected" style="background-color: rgba(0,0,0,0.6);  float: left; color:limegreen; border: 4px solid limegreen; z-index: 50">' +
                           'SCRIPT DETECTED</div>'),
                panel.childNodes[0]);
        }
    }
    setTimeout(tumblr_reblog_warning, 1000);
}

setTimeout(tumblr_reblog_warning, 500);
