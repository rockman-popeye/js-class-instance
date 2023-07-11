// DOM＝HTML文書内の要素のこと
(() => {

    class Accordion {
        // 初期化
        constructor(obj){

            console.log("obj", obj.hookName);

            // js-accordionというDOM要素を変数elmに代入
            const $elm = document.querySelector(obj.hookName);
            const $trigger = $elm.getElementsByTagName(obj.tagName);
            // 両方のトリガにイベントが実行されるようになった
            const triggerLen = $trigger.length;
            let index = 0;
            while (index < triggerLen) {
                $trigger[index].addEventListener("click", (e) => this.clickHandler(e));
                index++;
            }
        }
    

// クラスの中で関数を呼び出したい時はthis使う
    // クリックしたら実行される処理
    clickHandler(e){
        e.preventDefault();

        const $target = e.currentTarget;
        const $content = $target.nextElementSibling;
        
        if($content.style.display === "block"){
            $content.style.display = "none";
        } else {
            $content.style.display = "block";
        }
    }
}

const fuckingAccordion = new Accordion({
    hookName: "#js-faq",
    tagName: "p"
});

const dummyAccordion = new Accordion({
    hookName: "#js-accordion",
    tagName: "a"
});

const miniAccordion = new Accordion({
    hookName: "#js-accordion-mini",
    tagName: "dt"
});
    
})();