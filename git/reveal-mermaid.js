// Hat tip to https://github.com/webpro/reveal-md/issues/197https://github.com/webpro/reveal-md/issues/197
mermaid.initialize({
    startOnLoad: false,
    theme: 'dark',
    flowchart:{
        useMaxWidth: false,
        htmlLabels: true
    }
});

Reveal.addEventListener('ready', function( event ) {
    (async() => {
        while(!window.hasOwnProperty("hljs"))
            await new Promise(resolve => setTimeout(resolve, 1000));

        document.querySelectorAll('.language-mermaid').forEach(function (item, index) {
            mermaidDiv = document.createElement("div");
            mermaidDiv.innerHTML = item.innerHTML;
            mermaidDiv.classList.add('mermaid')
            item.parentNode.replaceWith(mermaidDiv)
        });

        mermaid.init(undefined,document.querySelectorAll(".mermaid"));
    })();
});

Reveal.addEventListener('slidechanged', event => {
    if (event.currentSlide) {
        event.currentSlide.querySelectorAll('.language-mermaid').forEach(item => {
            mermaidDiv = document.createElement('div');
            mermaidDiv.innerHTML = item.innerHTML;
            mermaidDiv.classList.add('mermaid');

            item.parentNode.replaceWith(mermaidDiv);
        });

        mermaid.init(event.currentSlide, '.mermaid');
    }
});