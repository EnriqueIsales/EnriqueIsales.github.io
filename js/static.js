const toTopButton = document.querySelector('.to-top-button');
const progressBar = document.querySelector('.progress-bar');

window.addEventListener('scroll', function() {
    if (document.documentElement.scrollTop > 200) {
        toTopButton.classList.add('to-top-button--show')
    } else {
        toTopButton.classList.remove('to-top-button--show')
    }
    if (progressBar) {
        let width = (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
        progressBar.style.width = `${width}%`;
    }
});

window.addEventListener("load", (event) => {
    const demos = document.querySelectorAll('.demo');

    for (let i = 0; i < demos.length; i++) {
        let singleDemo = demos[i];

        let demoHtmlButton = singleDemo.querySelector('.demo-html-button');
        let demoCssButton = singleDemo.querySelector('.demo-css-button');
        let demoPreviewButton = singleDemo.querySelector('.demo-preview-button');

        let demoHtml = singleDemo.querySelector('.demo-html');
        let demoCss = singleDemo.querySelector('.demo-css');
        let demoPreview = singleDemo.querySelector('.demo-preview');

        demoHtmlButton.onclick = () => {
            demoHtml.classList.remove('hidden');
            demoCss.classList.add('hidden');
            demoPreview.classList.add('hidden');

            demoHtmlButton.classList.add('bg-primary');
            demoCssButton.classList.remove('bg-primary');
            demoPreviewButton.classList.remove('bg-primary');
        };

        demoCssButton.onclick = () => {
            demoHtml.classList.add('hidden');
            demoCss.classList.remove('hidden');
            demoPreview.classList.add('hidden');

            demoHtmlButton.classList.remove('bg-primary');
            demoCssButton.classList.add('bg-primary');
            demoPreviewButton.classList.remove('bg-primary');
        };

        demoPreviewButton.onclick = () => {
            demoHtml.classList.add('hidden');
            demoCss.classList.add('hidden');
            demoPreview.classList.remove('hidden');

            demoHtmlButton.classList.remove('bg-primary');
            demoCssButton.classList.remove('bg-primary');
            demoPreviewButton.classList.add('bg-primary');
        };
    }
});
