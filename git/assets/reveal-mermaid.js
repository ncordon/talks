// Hat tip to https://github.com/webpro/reveal-md/issues/197
mermaid.initialize({
    startOnLoad: true,
    theme: 'dark'
});

Reveal.addEventListener('slidechanged', event => {
    if (event.currentSlide) {
        event.currentSlide.querySelectorAll('.language-mermaid').forEach(item => {
            mermaidDiv = document.createElement('div');
            mermaidDiv.innerHTML = item.innerHTML;
            mermaidDiv.classList.add('mermaid');

            item.parentNode.replaceWith(mermaidDiv);
        });

        mermaid.init(undefined, document.querySelectorAll(".mermaid"));
    }
});