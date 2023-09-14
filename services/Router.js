const Router = {
    init: () => {
        document.querySelectorAll("a.navlink").forEach(a => {
            a.addEventListener("click", event => {
                event.preventDefault()
                console.log("link clicked ")
                const url = a.getAttribute("href")
                Router.go(url)
            })
        })

    window.addEventListener("popstate", event => {
        Router.go(event.state.route, false);
    });
    Router.go(location.pathname)
    },
    go: (route, addToHistory=true) => {
        console.log(`Going to ${route}`)

        if(addToHistory) {
            history.pushState({ route } , '', route)
        }
        let pageElement = null
        switch(route) {
            case "/":
                pageElement = document.createElement("h1");
                pageElement.textContent = "Menu"
            break;
            case "/order":
                pageElement = document.createElement("h1");
                pageElement.textContent = "You Order"
            break;
            default: 
            if (route.startsWith("/product-")) {
                pageElement = document.createElement("details-page");
                const paramId = route.substring(route.lastIndexOf("-")+1);
                pageElement.dataset.productId = paramId;
            }
        }
        if(pageElement) {
            const cache = document.querySelector("main");
            cache.innerHTML = "";
            cache.appendChild(pageElement);
            window.scrollX = 0;
            window.scrollY = 0;
        } else {
            document.querySelector("main").innerHTML = "Oups, 404!"
        }
    }
}

export default Router