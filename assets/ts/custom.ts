// gtm settings (noscript)
declare interface ObjectConstructor {
  assign(target: any, ...sources: any[]): any;
}

const bodyTag = document.querySelector("body");
const articleContainer = document.querySelector(".container");
const gtm__js_off = Object.assign(document.createElement("noscript"), {
  innerHTML:
    '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MMKKXZT5" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
});

bodyTag.insertBefore(gtm__js_off, articleContainer);
