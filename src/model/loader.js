requirejs.config({
    //By default load any module IDs from js/model
    baseUrl: 'src/model',

    paths: {
       
    }
});

	
// Start the main app logic.
requirejs(['PersonNamesHolder']);
requirejs(['Person']);